---
title: Coupled Oscillator
tags:
  - physics
  - waves
  - problems
date: 2024-08-19
---
Coupled Oscillator is an interesting topic. Consider the problem below.
![[Coupled_Oscillator.png]]
F = ma equations are:
$$
\begin{gather}
   m\ddot{x_1} = - kx_1 + k(x_2-x_1)\\
   m\ddot{x_2} = - kx_2 - k(x_2-x_1)
\end{gather}
$$
(to not confuse the signs imagine the masses at different positions and where two forces would point). We get two equations.
$$
\begin{gather}
   m\ddot{x_1} + kx_1 - k(x_2-x_1)= 0\\
   m\ddot{x_2} + kx_2 + k(x_2-x_1) =0
\end{gather}
$$
With hope in pure luck, we make an educated guess $x_1 = A_1e^{iat}$ , $x_2 = A_2e^{iat}$.
$$
\begin{gather}
   -A_1a^2 + w^2A_1 - w^2(A_2-A_1)= 0\\
   -A_2a^2 + w^2A_2 + w^2(A_2-A_1)=0
\end{gather}
$$
In the vector form, it will look like (**surprisingly symmetrical!**):
$$
\begin{pmatrix}  
-a^2+2w^2 & -w^2 \\  
-w^2 & -a^2+2w^2   
\end{pmatrix}
\cdot 
\begin{pmatrix}
A_1\\
A_2
\end{pmatrix}
=0
$$
This will have a solution iff the determinant is zero (I vaguely recall something like that from Ma1b ...). All the "heavy" lifting is done. Then by taking the determinant, and making it zero, we find  $a = \pm w, \pm \sqrt{3}w$ with $A_1 = A_2$, $A_1 = -A_2$, respectively for each frequency. So, the most general solution is the linear combination of 4 exponents (for each x) that can be reduced to the sum of 2 cosines (as in [[SHM and Damped HM]]). Normal modes can be obtained by having some linear combination of $x_1, x_2$ such that there is one uniform oscillation frequency. In this case, it is just $x_1 + x_2 \rightarrow w$,  $x_1 - x_2 \rightarrow \sqrt{3}w$.

---
#### Problems
- [x] 4.1: Showing why linearity is important 
- [x] 4.2: What happens when $\ddot{x} = ax$, $\lim a \rightarrow 0$ (sloppy)
- [x] 4.3: Collision during oscillation (trivial)
- [x] 4.4: Average tension. This is an interesting problem. Recall the [[Newton's laws]] in Polar Coordinates
- [x] 4.6 Maximum speed in the [[SHM and Damped HM]]. A little tedious one
- [x] 4.10 Week coupling: **Plotting the result is fascinating**. It seems whenever $\dot{x} = 0 \rightarrow \phi = 0$. Recall some trig identities.
- [x] 4.11: Circle oscillator. I need to work more on finding signs in front of $k(x_2-x_1)$. Other than that remember: for Damped HM guess $e^{i w_dt} + e^{-i w_dt}$  or $\cos(w_dt)$. 
- [ ] 4.12: I got cooked. Solve later.

Solve for revision:
- [ ] 4.17
- [ ] 4.21
- [ ] 4.23
- [ ] 4.24
- [ ] 4.31
- [ ] 4.33
