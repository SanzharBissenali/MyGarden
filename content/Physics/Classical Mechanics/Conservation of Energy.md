---
title: Conservation of Energy
tags:
  - physics
date: 2024-08-20
---
In principle, everything can be solved with only F = ma equations, but the conservation laws are very helpful. We'll derive them from F = ma. 

---
#### 1D movement
Imagine, we have a particle that can move only in the x direction, and there is a force $F(x)$ that acts on it. 
$$
\begin{gather}
F(x) = mv\cdot \frac{dv}{dx}\\
F(x)\cdot dx = mv\cdot dv \\
\end{gather}
$$
Then, let's pick an arbitrary point $x_0$, where a particle has a velocity $v_0$
$$
\begin{gather}
\int_{x_0}^x F(x)\cdot dx = \int_{v_0}^v mv\cdot dv \\
\int_{x_0}^x F(x)\cdot dx = \frac{mv^2}{2} - \frac{mv_0^2}{2} \\
E = \frac{mv^2}{2} - \int_{x_0}^x F(x)\cdot dx \\ 
E = \frac{mv^2}{2} + V(x)
\end{gather}
$$
We indeed see that the sum of potential and kinetic energy is constant. However, I want to stress that *potential energy is not real*! We just made it up and defined it as integral of force over a displacement. It fully depends on our choice of $x_0$, and we always speak of it as **a relative quantity**. Here, we can only speak of the **difference** between E and V(x).

>[!quote] Relevant words about potential energy
>**Fugayzi, fugazi. It's a whazy. It's a woozie. It's fairy dust. It's never landed. It is no matter. It's not on the elemental chart. It's not fucking real.”**>

Equivalently, given V(x): $F(x) = -dV(x)/dx$. One moment to notice is that in 3D, we would take a line integral between two points. Logically, then it makes sense to talk about $V(x,y,z)$ if and only if *the line integral is the same for all paths*. This is true (if you remember) when the vector field $\textbf{F}$ is conservative ($\nabla \times \textbf{F} = 0$).

---
#### Small oscillations
Imagine, we have a potential function $V(x)$ and an equilibrium point $x_0$. What is the motion around it? First, Taylor expand $V(x)$:
$$
\begin{gather}
V(x) = V(x_0) + V^{\prime}(x_0)(x-x_0) + \frac{V^{\prime \prime}}{2!}(x_0)(x-x_0)^2 + \frac{V^{\prime \prime \prime}}{3!}(x_0)(x-x_0)^3 + ... 
\end{gather}
$$
Well, we don't care about $V(x_0)$ because we are concerned with differences of potential energy; the constant is not real (the quote above). By definition of $x_0$, $V(x_0) = 0$. Then, for small enough displacements, we can derive Hooke's law!
$$
\begin{gather}
V(x) \approx  \frac{V^{\prime \prime}}{2}(x_0)(x-x_0)^2 \\
F(x) = -V^{\prime \prime}(x_0)(x-x_0) = -k(x-x_0)
\end{gather}
$$

