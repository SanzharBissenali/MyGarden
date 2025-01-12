---
title: Intro to Complex Numbers
tags:
  - complex-numbers
date: 2025-01-07
---
Complex numbers have Real and Imaginary parts $z = x + yi$. The addition and multiplication are intuitive, while division is a little tricky:
$$
\frac{z_1}{z_2}= \frac{x_1+ y_1i}{x_2+ y_2i}= \frac{(x_1+ y_1i)(x_2-y_2i)}{(x_2+ y_2i)(x_2-y_2i)}= \frac{(x_1+ y_1i)(x_2-y_2i)}{x_2^2+y_2^2}
$$
The best way to visualize complex numbers is by using a complex plane, where they become **vectors**. With this representation it's trivial to prove the two inequalities:
$$
||z_1| - |z_2| |\leq |z_1+z_2| \leq |z_1| +|z_2|
$$
![[ACM95-Triangle-Inequality.jpeg|600]]

Since we can represent a complex number $z$ in two dimension using $x,y$ coordinates, we also can use **Polar Coordinates**.
### Polar Coordinates
We use $r, \theta$, so $x = r \cos(\theta)$, $y = r \sin(\theta)$, where $r = \sqrt{x^2+y^2}$, but calculating $\theta$ is a little tricky. Given $x,y$ we can find a particular $\theta_0$. However, then $\theta_0 + 2\pi n$ for $n \in Z$ also works perfectly - we have infinite possibilities for $\theta$. To speak about one theta, we look inside a particular interval. For example, $[-\pi, \pi]$ is the most popular choice, and we denote it as $\theta = Arg(z) = arg_{-\pi}(z)$.

### Euler's Formula 
There is a better way to write $z$ than $z = r (\cos(\theta) + i \sin(\theta))$. Recall the Taylor expansion for $e^x$:
$$
e^x = 1 + x+\frac{x^2}{2!} +\frac{x^3}{3!}+\frac{x^4}{4!}+...
$$
What if x is imaginary? Like $x = i \theta$.
$$
e^{i\theta} = 1+ i\theta+\frac{(i\theta)^2}{2!}+\frac{(i\theta)^3}{3!}+...
$$
Looking closely we recognize the cosine and sine expansions:
$$
e^{i\theta}= (1+\frac{(i\theta)^2}{2!}+\frac{(i\theta)^4}{4!}+...)+ (i\theta+\frac{(i\theta)^3}{3!}+\frac{(i\theta)^5}{5!}+...)
$$
$$
e^{i\theta}=(1-\frac{(\theta)^2}{2!}+\frac{(\theta)^4}{4!}-...)+i(\theta-\frac{(\theta)^3}{3!}+\frac{(i\theta)^5}{5!}+...)
$$
$$
e^{i\theta} = \cos(\theta) + i \sin(\theta)
$$
Which means that our initial expression can be written compactly as $z = re^{i\theta}$. The elegant way to think about this expansion is in the picture below:

![[ACM95-Euler-Formula.jpeg|600]]

Using this form of $z$ it's much easier to multiply and divide. Thinking with vectors, what *operation* multiplication and division represent in the complex plane?



