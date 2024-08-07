---
title: Chapter 7.3 - Parametrized Surfaces
draft: true
tags:
  - math
---

Not all the surfaces (like torus) can be represented as graphs of x and y (why?). To counter this, we need another way of representing them. For example, $\Phi(u,v) = (x(u,v), y(u,v), z(u,v))$  
Any *plane* can be parametrized by two vectors $\vec{\alpha}, \vec{\beta}$, and a point $\vec{p}$  on the P:
$\Phi(u,v) = u \vec{\alpha}+ v\vec{\beta} + \vec{p}$, which is set of 3 equations.
**Tangent vectors** to a surface are derived by considering curves on the surface. (1) Recall how you derive that $\vec{T_u} = \partial \Phi/\partial u$ , $\vec{T_v} = \partial \Phi/\partial v$ . (2) How do you use these two vectors to write an equation of a normal plane? (3) Graphs of functions $f: R^2 \rightarrow R$ are also surfaces parametrized by ... (4) When normal planes don't exist?


**Answers:**
1) Logically, our map is  $R^2\rightarrow R^3$ , but in 3D space it is mapping to a two dimensional object (surface). So, we can say that our map is bending and twisting our original flat sheet! If we keep $v$ constant, and vary only $u$, then we trace a path on the surface. By definition, the tangent vector of a path (velocity vector) is its derivative, $c^{'}(t)$ [[Chapter 7.1 - 7.2 Path and Line Integrals]]. In this case, we take a partial derivative $\partial \Phi/ \partial v$, which will be $\vec{T_v}$ . By a similar logic, you can deduce $\vec{T_u}$ . I'll remind that all these vectors are dependent of the position $u, v$ on your 2D flat sheet.
2) To write an equation of a normal plane, we note that the cross product of two tangent vectors is our normal vector, $\vec{n}$. Then at a point on surface $(x_0, y_0, z_0)$, we just do a dot product equals zero! Reminder: $\vec{n}$ is evaluated at $(u_0, v_0)$. 
3) The parametrization is $$x = u, \; y = v, \; z = f(u,v)$$
4) Normal planes do not exist if the cross product of two tangent vectors are zero, which means that there is no normal vector!
