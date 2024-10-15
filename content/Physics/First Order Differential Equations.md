---
title: First Order Differential Equations
date: 2024-10-14
tags:
---

### First Order DFQ with constants 
We can write a general first order differential equation (DFQ) as:
$$
\frac{\mathrm{d}y}{\mathrm{d}x} = f(x,y)
$$
We will consider solutions to only **linear equations** such as
$$
\frac{\mathrm{d}y}{\mathrm{d}x} + g(x) \cdot y = f(x)
$$
When $g(x)$ and $f(x)$ are constants the solution is straightforward, but let's just do it. Off topic, but I actually used to hate when textbooks would say something like that, but now writing this I see why they do it. Anyway, 

$$
\begin{gather}
\frac{\mathrm{d}y}{\mathrm{d}x} + a \cdot y = b \\
\frac{\mathrm{d}y}{\mathrm{d}x} = b - ay \\
\qquad\qquad\qquad\qquad\qquad\qquad \frac{\mathrm{d}y}{b-ay} = dx \qquad \text{Yeah, we can do that!}\\
\int \frac{\mathrm{d}y}{b-ay} = \int dx \\
\frac{\ln(b-ay)}{-a} = x + C \\
\ln(b-ay) = -ax - aC\\
b- ay =C_1e^{-ax}\\
y = C_2e^{-ax} +b/a
\end{gather}
$$
and check that it indeed satisfies the initial DFQ. 

### f(x) != constant 
When the terms are not constant, the solution is a little trickier. The trick is to arrange the left side of the equation such that it is a derivative of $y(x)\cdot \mu(x)$. So consider this example:

$$
\begin{gather}
\frac{\mathrm{d}y}{\mathrm{d}x} + a \cdot y = f(x) \\
\mu(x)\cdot\frac{\mathrm{d}y}{\mathrm{d}x} + \mu(x)\cdot a \cdot y = \mu(x)\cdot f(x) \\
\end{gather}
$$
Now, we have to cook up $\mu(x)$ such that its derivative is $\mu(x)\cdot a$, an obvious candidate is $\mu(x)= e^{ax}$ !

$$
\begin{gather}
e^{ax}\cdot \frac{\mathrm{d}y}{\mathrm{d}x} + ae^{ax} \cdot y = e^{ax}\cdot f(x) \\
\frac{\mathrm{d}(y\cdot e^{ax})}{\mathrm{d}x} = e^{ax}\cdot f(x) \\
y\cdot e^{ax} = \int  e^{ax}\cdot f(x)dx \\
y = Ce^{-ax} +e^{-ax}\int  e^{ax}\cdot f(x)dx
\end{gather}
$$
Where we only have to evaluate the integral. In most cases, it will require to do **Integration by parts.**

### g(x), f(x) != constants
It gets a little harder when $g(x)$ is not constant: one additional step (but the general idea is the same). 

$$
\begin{gather}
\frac{\mathrm{d}y}{\mathrm{d}x} + g(x) \cdot y = f(x) \\
\mu(x)\cdot\frac{\mathrm{d}y}{\mathrm{d}x} + \mu(x)\cdot g(x) \cdot y = \mu(x)\cdot f(x) \\
\end{gather}
$$
Similarly, we have to cook up $\mu(x)$ such that its derivative is $\mu(x)\cdot g(x)$. That's a differential equation itself:
$$
\begin{gather}
\frac{\mathrm{d}\mu(x)}{\mathrm{d}x} = \mu(x)\cdot g(x)\\
\frac{\mathrm{d}\mu(x)}{\mu(x)} = g(x) \mathrm{d}x \\
\int \frac{\mathrm{d}\mu(x)}{\mu(x)} = \int g(x) \mathrm{d}x \\
\ln(\mu(x))= \int g(x)\mathrm{d}x \\
\mu(x) = \exp\left(\int g(x)\mathrm{d}x\right) \\
\end{gather}
$$
(I dropped an integration constant above because it will be "eaten up" by another constant further down the line). Using this result, we will obtain
$$
\begin{gather}
y\cdot \mu(x) = \int f(x)\cdot \mu(x)\mathrm{d}x \; + C\\
y = \frac{1}{\mu(x)}\int f(x)\cdot \mu(x)\mathrm{d}x\; +C \mu(x)^{-1}
\end{gather}
$$

