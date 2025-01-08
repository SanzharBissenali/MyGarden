---
title: Vibrations of CO2 Molecule
tags:
  - physics
date: 2024-12-16
---
As an ex-chemist, one of the most fascinating topics for me during the Ph12A Waves course was the approximation of $\ce{CO_2}$ by a coupled oscillator. The Figure 1 shows the mechanical system with 3 masses and 2 springs that approximates the $\ce{CO2}$. The fact that we can solve for this system and it turns out to be very descriptive and intuitive blew my mind, and I hope by the end of this note you will be fascinated as well!

There are some interesting points to be made:
1) We can solve **analytically** for the equations of motion, which you can't really do with QM.
2) The equations of motion turn out to be **Linear Combination of Normal Modes** (We'll soon se what's a Normal Mode). Furthermore, it can be proven that for small oscillations with equilibrium points you can solve for the equations of motion always!

### Where to Start?
The natural question is where do we start when we have such a complex problem? Since it's a mechanical problem we must somehow use Newton's equations, and in principle we can write down the three $F = ma$ equations for the three masses. But honestly, I'm quite bad at writing down these questions as I will likely miss a minus sign somewhere. Luckily, there is a proven method! We start from writing the equation for Potential Energy and then take derivatives!

$$
\begin{equation}{}
\begin{split}
V = \frac{1}{2}k(x_1 - x_2)^2 + \frac{1}{2}k(x_2 - x_3)^2
\end{split}
\end{equation}
$$
where $x_i$ are appropriate displacements from the equilibrium position. The Forces are just partial derivatives:
$$

\begin{gather}
F_1 = -\frac{\partial V}{\partial x_1} = -k(x_1-x_2) \\
F_2 = -\frac{\partial V}{\partial x_2} = k(x_1-x_2)- k(x_2-x_3)\\
F_3 = -\frac{\partial V}{\partial x_3} = k(x_2-x_3)\\
\end{gather}

$$
Using [[Newton's laws]], we can write
$$
\begin{gather}
m \ddot{x_1} = -kx_1+kx_2 \\
m \ddot{x_2} = kx_1 -2kx_2 +kx_3 \\
m \ddot{x_3} = kx_2 -kx_3 \\
\end{gather}
$$
One interesting moment to note is the [[Conservation of momentum]]. By summing $m\ddot{x_1} + m\ddot{x_2} + m\ddot{x_2} = dp_1/dt+ dp_2/dt + dp_3/dt = dP_{total}/dt =0$ we discover that momentum is conserved.

### How to solve the equations?
In any physics problem sooner or later you encounter math. Sometimes there is a *smart* way around it using your *physical intuition*, and sometimes you have to grind through it. In this case we have the system of 2nd order differential equations that is coupled and linear. The good news is that it's actually easy to solve! The first step is to use Linear Algebra to rewrite our equations:

$$
\begin{pmatrix}  F_1 \\  F_2 \\ F_3 \\ 
\end{pmatrix}
= -k \cdot
\begin{pmatrix}  
1 & -1 & 0\\  
-1 & 2 & -1 \\
0 & -1 & 1
\end{pmatrix}
\cdot 
\begin{pmatrix}  
x_1 \\ x_2 \\ x_3  
\end{pmatrix}
$$
$$
m
\begin{pmatrix}  \ddot{x_1} \\  \ddot{x_2} \\ \ddot{x_3}\\ 
\end{pmatrix}
= -k
\begin{pmatrix}  
1 & -1 & 0\\  
-1 & 2 & -1 \\
0 & -1 & 1
\end{pmatrix}
\cdot 
\begin{pmatrix}  
x_1 \\ x_2 \\ x_3  
\end{pmatrix}
$$
$$

\begin{pmatrix}  \ddot{x_1} \\  \ddot{x_2} \\ \ddot{x_3}\\ 
\end{pmatrix}
= -\omega^2
\begin{pmatrix}  
1 & -1 & 0\\  
-1 & 2 & -1 \\
0 & -1 & 1
\end{pmatrix}
\cdot 
\begin{pmatrix}  
x_1 \\ x_2 \\ x_3  
\end{pmatrix}
$$
$$
\ddot{\textbf{x}} = -\omega^2 K \textbf{x}
$$
In the last line I defined the vectors and matrices respectively as in the line above it. The way to solve an equation like that is to **guess** an answer of the form $x$. My first reaction to that information was:


But there is a motivation behind it. 
