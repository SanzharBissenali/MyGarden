#!/usr/bin/env python3

import http.server
import socketserver
import os
import sys
from urllib.parse import urlparse, unquote

class QuartzHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory="public", **kwargs)
    
    def do_GET(self):
        # Parse the path
        parsed_path = urlparse(self.path)
        path = unquote(parsed_path.path)
        
        # Remove leading slash for processing
        clean_path = path.lstrip("/")
        
        # Check if it's a direct file request
        direct_file_path = f"public/{clean_path}"
        if clean_path and os.path.exists(direct_file_path) and os.path.isfile(direct_file_path):
            # Let parent handler serve the file directly
            super().do_GET()
            return
        
        # Handle pretty URLs
        if path == "/" or path == "":
            target_file = "index.html"
        else:
            # Remove trailing slash
            if path.endswith("/"):
                clean_path = clean_path.rstrip("/")
            
            # Try exact .html match first
            html_path = f"public/{clean_path}.html"
            if os.path.exists(html_path):
                target_file = f"{clean_path}.html"
            else:
                # Try directory/index.html
                dir_path = f"public/{clean_path}/index.html"
                if os.path.exists(dir_path):
                    target_file = f"{clean_path}/index.html"
                else:
                    # File not found
                    self.send_response(404)
                    self.send_header('Content-type', 'text/html')
                    self.end_headers()
                    if os.path.exists("public/404.html"):
                        with open("public/404.html", 'rb') as f:
                            self.wfile.write(f.read())
                    else:
                        self.wfile.write(b"404 - File not found")
                    return
        
        # Update the path for the parent handler
        original_path = self.path
        self.path = "/" + target_file
        
        # Call parent handler
        super().do_GET()
        
        # Restore original path
        self.path = original_path

if __name__ == "__main__":
    PORT = 8080
    
    with socketserver.TCPServer(("", PORT), QuartzHandler) as httpd:
        print(f"Server running at http://localhost:{PORT}")
        print("Press Ctrl+C to stop the server")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServer stopped.")
            sys.exit(0)