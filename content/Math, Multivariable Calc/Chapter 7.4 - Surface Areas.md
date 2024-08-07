---
title: Chapter 7.4 - Surface Areas
draft: true
tags:
  - math
---
 The general definition is $\int_a^b ||\vec{T_u} \times \vec{T}_v||\, du\,dv$ (look up tangent vectors here [[Chapter 7.3 - Parametrized Surfaces]]. (1) How do you actually justify the cross product inside the integral? (2) How do you derive the formula for the surface area of a function $f(x,y)=z$. (3) How do you derive the formula for the surface area of a revolution of a one-variable function (Just state the parametrization since other part is similar).
Very interesting fact! The parametrization for a **Torus** can be given by:
$$
x = (R+\cos(\phi))\cos(\theta), \; y = (R+\cos(\phi))\sin(\theta)),\; z =\sin(\phi)
$$
The problem that you couldn't solve: 
Show that the surface $x = 1/(y^2+z^2)$, where $1 < x< \infty$, can be filled but not painted!  
Proved that shit on Ma1C, page 78!


**Answers:**
1) First, recall that all of this is a **one-to-one** map from $R^2 \rightarrow R^3$. You can define a partition function in $R^2$ to have bunch of small rectangles. Take one corner of this rectangle, a point $(u_0, v_0)$ , and calculate two tangent vectors $\vec{T_u},\vec{T}_v$ . Then $\vec{T_u}\cdot \Delta u,\vec{T}_v \cdot \Delta v$ are the sides of the **patch** in $R^3$ of your surface. The Area of it, of course, is the product of its sides. Summing areas of these patches is basically the integral above.
![[Pasted image 20240526164921.png]]
2) Logically, the parametrized surface for the function is given by $$
 x=u,\; y =v,\; z = f(x,y)
$$Then, you can find that $\vec{T_u} = \hat{x} + f^{'}\hat{z}$, $\vec{T_v} = \hat{y} + f^{'}\hat{z}$ . Note that derivatives here are partial and with to respect to u and v. The norm of the cross product is $\sqrt{(\partial f/\partial u)^2+ (\partial f/\partial v)^2 +1}$ 
3) It is given by 
$$
x = u, \; y = f(u)\cos(\theta), \; z = f(u)\sin(\theta)
$$ 

