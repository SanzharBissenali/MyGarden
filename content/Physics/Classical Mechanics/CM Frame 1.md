---
title: CM Frame
tags:
  - physics
date: 2024-08-21
---
#### CM frame velocity
When applying the [[Conservation of momentum]], there is one interesting frame where problem-solving is easier. We define the **Center of Mass** frame to be the one where total momentum is zero. How do we find one? First, let's agree on the fact that if there is a frame S and S' that moves with a velocity $\textbf{u}$ relative to S, then velocities in two frames can be related by:
$$
\textbf{v}_s = \textbf{v}_{s'} +\textbf{u}
$$
From the definition of the CM frame, we can logically deduce:
$$
\begin{gather}
\textbf{P}'= \sum m_i\textbf{v}'_i = \sum m_i(\textbf{v}_{i} -\textbf{u}) \\
\sum m_i\textbf{v}_{i} - \sum m_i\cdot \textbf{u} = 0 \\
\textbf{P} - M\cdot \textbf{u}=0 \\
\textbf{u} = \frac{\textbf{P}}{M}
\end{gather}
$$
So, find the total momentum $\textbf{P}$ and divide it by total mass M.

---
#### Interesting results with CM frame
As an exercise, you can try to find the final velocities in a collision of mass $m$ with velocity $v$ with a stationary object of mass $M$. You'll quickly recall that it's better to jump into the CM frame than solve quadratic equations, stemming from [[Conservation of Energy]].

You can also show that Kinetic energy $E_k$ in CM frame can be related to any frame by:
$$
E_k =E_k (CM) +\frac{1}{2}M\cdot u^2
$$(The key point in deriving this is to invoke $\sum m_i\textbf{v}_i=0$)
