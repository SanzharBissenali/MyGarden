---
title: Electric Potential
draft: false
tags:
  - Electricity
---
 We can define a scalar quantity $\phi$ to be the line integral of $\textbf{E}$ between two point:

$$
\phi_{12}= - \int_{P1}^{P2} \textbf{E}\cdot d\textbf{l}
$$
First, explain why is the line integral path-independent, considering the field of a single point below (1). 
![[Pasted image 20240625170747.png|450]]

Second, explain how it extends to a general field $\textbf{E}$ (2). Holding P1 constant we obtain a scalar function $\phi(x,y,z)$. We can mathematically prove that since $\textbf{E}$ is a conservative field ([[Electrostatics. Charges, Energy and Fields]]), it must be a gradient of some function $f$, and $\phi$ we defined **is** that function: $-\nabla \phi = \textbf{E}$. Generally, for a localized system of charges potential can be calculated by:

$$
\phi = -\int_V \frac{\rho\cdot dv}{4\pi\epsilon_0r}
$$
One interesting exercise is to calculate the potential on the rim of a charged disk (Ex 4 in Chapter 2). Key point was to splice the ring into wedges with varying length $l = 2a\cos(\theta)$.

**Very cool property** that follows from math, but can be also explained physically is that electric field is perpendicular to equipotential surface. First, think about the climbing up the hill. Second, the statement must be true, because if $\textbf{E}$ had a parallel component then it would require some energy to move charge along the **equipotential surface**.

### Problems
---
Some nice exercises to redo are 2.63, 2.57, 2.46, 2.25, 2.13 ([[Problems solved about Electric potential (Purcell Ch.2)]]).
### Answers
---
1) It is clear that the path A value is $\phi = \frac{q}{4\pi\epsilon_0}\cdot(\frac{1}{r_1}-\frac{1}{r_2})$ because we integrate $Edr$. For path B, we have $\int \textbf{E} \cdot d\textbf{s} =  \int E\; ds\cos(\theta) = \int E \;dr$.
2) Let's consider the case of the line integral around the two charges. By superposition principle [[Electrostatics. Charges, Energy and Fields]], the field $\textbf{E} = \textbf{E}_1 + \textbf{E}_2$. So, the integral is decomposed into to $\int \textbf{E} \cdot d\textbf{s} = \int (\textbf{E}_1 + \textbf{E}_2)\cdot d\textbf{s}=$
