---
title: Electrostatics. Flux and Gauss's law
draft: false
tags:
  - physics
  - Electricity
---
We define the flux of a field through some surface as:

$$
\Phi = \int_S \textbf{F} \cdot d\textbf{a}
$$
The rigorous way to compute is by parametrizing the surface, and taking the dot product with the field as described in [[Chapter 7.3 - Parametrized Surfaces]] & [[Chapter 7.6 - Vector Field Integral over a Surface]]. 

It is not hard to show that the flux of a single charge through a sphere centered at it is $\Phi = q/\epsilon_0$. However, we conjecture even stronger arguments - the result is independent of a surface and its size. One way to prove it is to show that  $\nabla \cdot \textbf{E} = 0$. 1) Intuitively recall what is divergence and how we can use this result to "modify" a sphere.
### Gauss's law 
---
Now, let's consider bunch of charges. Their field is the sum of individual fields, or superposition principle ([[Electrostatics. Charges, Energy and Fields]]). Hence, 

$$
\Phi = \int_S \textbf{E} \cdot d\textbf{a} = \int_S (\textbf{E}_1 + \textbf{E}_2 + \textbf{E}_3 + \; ...)\cdot d\textbf{a} = \sum_i^N \frac{q_i}{\epsilon_0}
$$
Note that the proof (the last equality) hinges on the fact that the Electric field is *inverse square law*. So, it holds for every inverse square laws (gravity).
As a reminder recall the fields of a flat sheet, thin wire, and uniform sphere.

### Energy stored in a field
---
Energy stored in a field is given by:

$$
U = \frac{\epsilon_0}{2}\int E^2dv
$$
### Problem 
---
It would be a fine exercise to calculate the energy of a uniformly charged sphere ($\rho$) from scratch. [[Problems solved about Electrostatics (Purcell Ch. 1)]]
#### Answers to questions
--- 
1) Zero divergence means that the net flux through a given surface is zero. So, we may attach any weirdly shaped object to a sphere, and this would not change the Flux.
