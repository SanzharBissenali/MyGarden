---
title: Math in Physics
draft: false
tags:
  - physics
  - Electricity
---
 
### Divergence
---
Through an infinite subdivision of a surface integral, we can define divergence as:

$$
\text{div}\textbf{F}= \lim_{V{_i}\rightarrow 0}\frac{1}{V_i} \int_S \textbf{F}_i\cdot d\textbf{a}_i
$$
It is a flux through out of infinitesimal volume per unit volume(similar to the definition of a derivative). Gauss's theorem then states that

$$
\int_V \text{div}\textbf{F}\; dv = \int_S \textbf{F} \cdot d\textbf{a}
$$
"Derive" this formula logically from the definition of flux (1). Using Gauss's theorem it's easy to arrive at the **Maxwell's first equation**: 

$$
\text{div}\textbf{E} = \frac{\rho}{\epsilon_0}
$$
Proving the formula of Divergence in Cartesian coordinates is straightforward (sort of). Consider a small box with one corner at $x,y,z$ and a flux through its top and a bottom (z plane). To the first order the flux difference between top and bottom will be $\partial F_z/\partial z \cdot \Delta z \cdot (\Delta x \Delta y)$. Similarly, for the other sides respective components. Taking the sum, we obtain $\Phi = (\partial F_z/\partial z + \partial F_y/\partial y + \partial F_x/\partial x) \cdot (\Delta x \Delta y \Delta x)$ from where it is clear how we get divergence.
The book makes a critical point that other orders vanish as we approach the limit of $V\rightarrow 0$ as they have additional delta terms.
### Laplacian 
---
This operator is defined as a divergence of a gradient. Recall its form in Cartesian coordinates (1). We additionally obtain a Poisson's equation: 

$$
\nabla^2\phi = -\frac{\rho}{\epsilon_0}
$$

#### Earnshaw's theorem 
---
It states that it is impossible to construct a static electric field that will hold a charge at a *stable* equilibrium. One way to prove it is to use Gauss's law; walk through the proof (2). The second proof involves *the property* of a potential function.

Stable equilibrium example - sphere of uniformly distributed negative charge and two protons inside. Why *Earnshaw's* theorem "fails" (it doesn't fail actually)?

### Quick reminder
---
Recall the definitions of divergence and curl, and the way to arrive at them. Then, think about the Stokes' and Gauss's theorems. Understanding the definitions makes the theorems straightforward. (If you forgot, then look at Chapter 2.7, 2.8 & 2.14, 2.15).




