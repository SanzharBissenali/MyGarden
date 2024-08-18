---
title: Newtons' laws
draft: 
date: 2024-08-12
tags:
  - physics
---
### Newton's laws
---
#### 1st Law
A body moves with a constant $v$ unless acted by a force. The statement gives us a definition of an *inertial frame*, where 1st law holds. 
#### 2nd Law
Newton's second law $\textbf{F} = m \textbf{a}$ is not just a Force definition, but it has some real-world implication, as shown in the textbook in contrast to made-up definition. By the way, argue why $\textbf{F} = m \textbf{v}$ can't be true?
#### 3rd Law
Interestingly, the third law is equivalent to **conservation of momentum**! If we have particles that interact with each other only:

$$
\frac{dp_t}{dt}= \frac{dp_1}{dt} + \frac{dp_2}{dt} = \textbf{F}_1 + \textbf{F}_2
$$
#### Atwood's machine
Problems on this topic rely on just writing down $F=ma$ equation and using conservation of string fact. Recall the simplest case where $a_1 = -2a_2$
![[Atwood's machine, simplest case.png|300]]

#### Fall with a drag
The differential equation is $ma = -mg - m\alpha v$. From this, we can get $v(t), y(t)$. The limiting case for large $t$ suggests that an object reaches a *terminal velocity*, $v = -g/\alpha$. In free fall, we discover that *all objects fall at the same rate independent of their mass*. However, if we consider drag, then $m$ plays a role! But we don't notice it because in a thin medium drag is a minor effect. Btw, solving the equation and deriving is not hard.


### Motion 
---
#### Fall with a drag
The differential equation is $ma = -mg - m\alpha v$. From this, we can get $v(t), y(t)$. The limiting case for large $t$ suggests that an object reaches a *terminal velocity*, $v = -g/\alpha$. In free fall, we discover that *all objects fall at the same rate independent of their mass*. However, if we consider drag, then $m$ plays a role! But we don't notice it because in a thin medium drag is a minor effect. Btw, solving the equation and deriving is not hard.
#### Projectile
Without a drag, our two equations of motion are "decoupled":
$$ 0 = \ddot{x} \enspace \enspace \enspace \enspace \enspace \ddot{y} = - g$$
From this you can derive two sets of equations for velocity and position. An *interesting problem* arises when the **ground is inclined**. Can you recall the key idea to solve it?
### Polar coordinates
---
It might be a good question to ask how F=ma looks in polar coordinates. The derivation is quite tedious, but you should have a sketch in your mind. You start with defining $\hat{r}, \hat{\theta}$ and taking derivatives. Remember that you need to differentiate $\vec{r} = r \cdot \hat{r}$.  The result is 
$$
F_r = m(\ddot{r}- r\dot{\theta}^2)
$$
$$
F_{\theta} = m(r\ddot{\theta} + 2\dot{r}\dot{\theta})
$$
Recall what each term **means**.

Problems to solve in [[Newton's law Problems]].