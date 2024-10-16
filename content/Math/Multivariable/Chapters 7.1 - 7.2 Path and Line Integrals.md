---
title: Chapters 7.1 - 7.2 Path and Line Integrals
draft: true
tags:
  - math
---
If we have a function $f: R^3 \rightarrow R$, then we can define a path integral over a curve$\int_c f ds = \int_a^b f(c(t))\cdot ||c^{'}(t)||dt$ . This basically means divide your path over billion subpaths, evaluate a function at each point and sum. The formal proof involves *Mean Value Theorem*. 
* When the path is 2D and $f \geq0$ , what is the geometric interpretation of your integral ?

By a similar logic, if we have a vector field $\textbf{F}$ , then its line integral is $\int_a^b \textbf{F}(c(t))\cdot d\textbf{s}$ . There is also a cool moment in its derivation. When a particle moves from $t$ to $t+\Delta t$ , then its displacement vector is $c(t+\Delta t) - c(t)$ . As $\Delta t \rightarrow 0$, the expression becomes $c^{'}(t)dt$ , which is $d\vec{s}$. From this on, I will start asking questions :)

(1) How is $\textbf{T}$ defined? (2) How is it used? What is the 3rd way to write the line integral? Recall how, if given a path, you calculate the line integral with the former method.
The only thing I got from *reparametrizations* is that the line integral is the same (except may be signs) if two intervals map to the same Curve. You can also "jump" between two parametrizations. What is the trick in calculating the line integral of $\vec{F} = \nabla f$ ? This is related to [[Fundamental Theorem of Calculus]]. 


Answers:
(1)$\vec{T} = c^{'}(t)/||(c^{'}(t)||$ 
(2) we can actually define a scalar function s.t $\vec{F} \cdot \vec{T}$ and take its path integral. 
(3) The third way to do this intergal is to split it in three: $\int F_xdx + F_ydy + F_zdz$, where dx is just a first component of a $c^{'}(t)$. 
(4) The thing about the Vector fields that are gradients of some function is that their line integral **does not** depend on the path! Instead, it's just determined by the values of a scalar function at the ends. Application which you know by heart at this point is $\textbf{E} = \nabla \cdot \phi$  