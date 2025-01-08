import numpy as np
import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D

# Define parameters
wavelength = 1  # Wavelength (lambda) in arbitrary units
kx_factor = 2 * np.pi / wavelength
wy = wavelength  # Aperture width in y-direction
wx = 2 * wavelength  # Aperture width in x-direction

# Angular grid (theta and phi)
theta = np.linspace(0, np.pi / 2, 500)  # Only forward hemisphere
phi = np.linspace(0, 2 * np.pi, 500)
theta, phi = np.meshgrid(theta, phi)

# Sinc function components for x and y directions
kx = kx_factor * wx * np.sin(theta) * np.cos(phi) / 2
ky = kx_factor * wy * np.sin(theta) * np.sin(phi) / 2
sinc_x = np.sinc(kx / np.pi)  # Normalized sinc function
sinc_y = np.sinc(ky / np.pi)

# Intensity pattern (including cos(theta) for intensity decay)
intensity = (sinc_x**2) * (sinc_y**2) * np.cos(theta)**2

# Set up the figure and 3D axis
fig = plt.figure(figsize=(10, 6))
ax = fig.add_subplot(111, projection='3d')

# Convert spherical coordinates to Cartesian coordinates for plotting
X = intensity * np.sin(theta) * np.cos(phi)
Y = intensity * np.sin(theta) * np.sin(phi)
Z = intensity * np.cos(theta)

# Plot the 3D surface
surf = ax.plot_surface(X, Y, Z, cmap='plasma', edgecolor='none')

# Add color bar and labels
fig.colorbar(surf, ax=ax, shrink=0.5, aspect=5, label='Intensity')
ax.set_xlabel("X")
ax.set_ylabel("Y")
ax.set_zlabel("Z")
ax.set_title("Far-Field Diffraction Pattern")

# Show the plot
plt.show()

