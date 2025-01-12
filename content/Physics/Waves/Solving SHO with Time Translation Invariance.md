---
title: Solving SHO with Time Translation Invariance
tags:
  - waves
date: 2024-12-24
---
The SHO equation states that:
$$
m \frac{d^2x}{dt^2} = - kx
$$
With constant coefficients, physically there is no reference to a particular moment of time. This means that if $x(t)$ is a solution, then $x(t+t_0)$ should also be a solution, or in other words the system is time translation invariant. 
### Main assumption
Suppose that $x(t)$ and $x(t+t_0)$ are the same **solutions** related by some coefficient dependent on $t_0$:

$$
x(t+t_0) = f(t_0)\cdot x(t)\\
$$
There are two things to note. If $t_0 = 0$, then $f(0) = 1$. If we perform *two time translations* $t_1, t_2$, then $x(t+t_1+t_2) = f(t_1+t_2)\cdot x(t)$, and $x(t+t_1+t_2) = f(t_2) \cdot x(t+t_1) = f(t_2)\cdot f(t_1)\cdot x(t)$, which implies that $f(t_1+t_2) = f(t_1) \cdot f(t_2)$.
### Being tricky (smart)
From the expression above we find that
$$
f(t+\delta t) = f(\delta t)f(t)
$$
Perform another $\delta t$ translation to get 
$$
f(t + 2\delta t) = f^2(\delta t) f(t)
$$
It's not hard to see that after N translation we get 
$$
\begin{array}{rll}
f(t+N\delta t) = f^N(\delta t)f(t) & \text{set t=0 and use f(0)=1}\\
f(N\delta t) = f^N(\delta t) & \text{now use the Taylor expansion}\\
f(\delta t) \approx f(0)+\delta t \cdot df/dt\\
f(N \delta t) \approx [1+\delta t \cdot \alpha]^N & \text{ with $\alpha \equiv df/dt$}\\
f(t) \approx [1+ \frac{t\cdot \alpha}{N}]^N &\text{as N$\rightarrow \infty$} \\
f(t) = e^{\alpha t}
\end{array}
$$
and being tricky we arrive at the final result $x(t) = e^{\alpha t}\cdot x(0)$

### Simple Harmonic Oscillator
But what's $\alpha$? We have to use the SHO equation:
$$
\begin{gather}
m \frac{d^2x}{dt^2} = -kx \\
m\cdot \cancel{x(0)} \cdot \cancel{e^{\alpha t}} \cdot \alpha^2 = -k\cdot \cancel{x(0)}\cdot \cancel{e^{\alpha t}} \\
\alpha^2 = - \omega^2 \\
\alpha = \pm iw
\end{gather}
$$

where the imaginary arises **naturally**! So, the solution is well-known $x(t) = x(0) \cdot e^{\pm i\omega t}$. The only way to make sense of it is to have a linear combination
$$
x(t) = a e^{i\omega t} + be^{-i\omega t}
$$
such that the imaginary parts vanish:
$$
\begin{gather}
a e^{i \omega t} = [b e^{-i\omega t }]^* = b^*e^{i\omega t }\\
a = b^* \\
\text{So we get the final result by plugging into the initial eq.}\\
x(t) = a e^{i \omega t}+ a^* e^{-i\omega t} = z +z^* = 2\; \text{Re}[z]\\
x(t )=2 \; \text{Re}[a e^{i\omega t}] \\
x(t) = \text{Re} [a \cdot e^{i\omega t}] \;\; \textbf{Very Important Line}
\end{gather}
$$
The latter line is the solution that we later always use in coupled oscillator, travelling waves on string, and actual EM waves in medium.




