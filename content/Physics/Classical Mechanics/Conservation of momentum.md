---
title: Conservation of Momentum
tags:
  - physics
date: 2024-08-21
---
#### Derivation
The conservation can be "derived" from Newton's 3rd law. Personally, "derive" is a strong word, and I rather consider them to be equivalent statements. Anyway, imagine two particles a and b that interact with each other only. Then, $p \equiv mv$ and using the Third law $F_{ab} = - F_{ba}$ ([[Newton's laws]])

$$
\begin{gather}
F_{ab} = \frac{dp_a}{dt}\\
\int_0^t F_{ab} \cdot dt = \int_{p_1}^{p_2}{dp_a}\\
p_{a}(t) - p_{a}(0) = \int_0^t F_{ab} \cdot dt \\
\int_0^t F_{ab} \cdot dt = - \int_0^t F_{ba} \cdot dt = - (p_b(t) - p_b(0))\\
p_a(t) - p_a(t) = - p_b(t) + p_b(0) \\
p_a(t) + p_a(t) = p_a(0) + p_b(0)
\end{gather}
$$This is the conservation law, which also holds for 3,4 and n particles.

---
#### Rocket movement 
It turns out that the rocket movement is easy to derive. Assume that an exhaust has a constant relative speed $u$ relative to the rocket. Now, imagine a rocket at some time $t$ with a mass $m$ and velocity $v$. At a later time $t+dt$, an exhaust with mass $dm$ was emitted. Using the conservation, we law we can write:
$$


\begin{gather}
mv = (m-dm)(v+dv)+(dm)(v-u)\\
mv = mv + mdv-vdm -dmdv +vdm-udm\\
mdv= -udm \\
dv = -u \frac{dm}{m}\\
v_2-v_1 = u\ln(\frac{M}{m})
\end{gather}
$$
