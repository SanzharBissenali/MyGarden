---
title: Modeling with First Order DFQ
date: 2024-10-15
tags:
  - DFQ
---
### Leaking Tank
Consider the setup below with a tank (volume $V$) that has some mass of $\ce{NaCl}$, call it $m(t)$. A water with constant $\ce{NaCl}$ concentration (0.25 kg/L) flows into the tank by a pipe at rate r L/min. To maintain constant volume water flows out at the same rate. Determine the $m(t)$ for a given initial condition $m_0$.
![[Pasted image 20241015134232.png|300]]
The hardest part is to write down the DFQ. Let's to do it step by step. We have to ask ourselves how exactly $m(t)$ changes over time, or rather what is the **instantaneous change** $\mathrm{d}m/ \mathrm{d}t$? 

At any instant of time we know that an additional mass of $\ce{NaCl}$ per time is $0.25\; \text{kg/L} \cdot r\; \text{L/min} = 0.25r\;\text{kg/min}$. We also know that we *lose*  $\ce{NaCl}$ at a rate $m(t)/V \cdot r  = m(t)r/V \;\text{kg/min}$. We combine what we know and get

$$
\begin{gather}
\frac{\mathrm{d}m}{\mathrm{d}t} =  0.25r - m(t)r/V \\
\qquad \qquad \qquad \qquad \frac{\mathrm{d}m}{\mathrm{d}t} + m(t)r/V = 0.25r \qquad \text{First Order DFQ}
\end{gather}
$$
We already know the solution for this type of [[First Order Differential Equations]] (constant terms!).
$$
m(t) = C e^{-(rt)/V} + 0.25V
$$
and then you solve the **Initial Value Problem** (IVP).

### "True" Escape Velocity
A mass $m$ is projected upward with an initial velocity $v_0$. Find $v(x)$ and a maximum height $h$ it can reach. We know that the force on the mass is $F(x) = - GMm/(R+x)^2$ and using [[Newton's laws]]:
$$
\begin{gather}
\cancel{m}a = -\frac{GM\cancel{m}}{(R+x)^2} \\
v\cdot\frac{\mathrm{d}v}{\mathrm{d}x} = -\frac{GM}{(R+x)^2} \\
\int_{v_0}^v v\;\mathrm{d}v = -\int_0^x\frac{GM}{(R+x)^2}\mathrm{d}x\\
\frac{v^2}{2}-\frac{v_0^2}{2} = \frac{GM}{R+x} \Big|_0^x \\
\frac{v^2}{2}-\frac{v_0^2}{2}= \frac{GM}{R+x} - \frac{GM}{R}\\
v^2 = 2GM(\frac{1}{R+x} - \frac{1}{R}) + v_0^2


\end{gather}
$$
Recall that normally, we would get $v^2 = v_0^2 - 2gx$, which you can derive if you perform[[Taylor expansion]] of the first term above. The graphs for each case would look like:
![[Pasted image 20241015232129.png|500]]

![[Pasted image 20241015232038.png|500]]
As you can see, with initial velocity of 11 km/s (Why?) graphs look the same in the beginning, but they diverge for larger distances! One can improve this model by adding damping term of $-\gamma \cdot v$, which would be a [[Second Order Differential Equation]]


