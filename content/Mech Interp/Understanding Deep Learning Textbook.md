---
title: Understanding Deep Learning Textbook
aliases:
tags:
  - Deep-Learning
date: 2026-01-31
---
In this note, I'll share notes that I found insightful and interesting while reading [*Understanding Deep Learning*](https://udlbook.github.io/udlbook/), which I found through [MIT's public](https://phillipi.github.io/6.7960/) course on the subject.

## Ch. 1 - 2
The first two chapters just explain the big picture and show how to train a linear regression model (in 2 dimensions). Nothing that much interesting. 

*Time spent: 1 hour*
## Ch 3: Shallow neural networks
*Time spent: 2.5 hours*
### The basics
The prelude to the fun begins here. Shallow neural networks have just 1 hidden layer with many hidden units. In the book, they consider an example with 3 hidden units (with 1d input and output), and the general formula for such a neural net would be 

$$
y = \phi_0 + \phi_1 \cdot a[\theta_{10} + \theta_{11} x] + \phi_2 \cdot a[\theta_{20} + \theta_{21} x] + \phi_3 \cdot a[\theta_{30} + \theta_{31} x]
$$
where $a$ is the activation function, and most of the time it's just *ReLU*. The interpretation/intuition of building them up is the key. If you define the hidden units as outputs of the activation function, as

$$
\begin{align}
h_1 = a[\theta_{10} + \theta_{11} x]\\ 
h_2 = a[\theta_{20} + \theta_{21} x] \\
h_3 = a[\theta_{30} + \theta_{31} x] 
\end{align}
$$
then each of these $h_i$'s are clipped linear function. The final output is just a linear combination of these hidden units (aka each is scaled by $\phi_i$ and a bias term $\phi_0$ is added). The whole pipeline is depicted below  ![[UDN-Chapter3-Shallow-NN.png|600]]
As you can see the more hidden units you add the more joints you have in the final function, which is a **piecewise linear** function. This can be formalized in **Universal Approximation Theorem**, which states that any function (in any dimension!) can be approximated by a Shallow neural net. In practice, to approximate a complicated function you would need a LOT of hidden units, and that's where Deep neural nets win over. 

### General case
In the multivariate input and output, the formula can be written as 
$$
\begin{align}
h_d = a\left[\theta_{d0} + \sum_{i=1}^{D_i} \theta_{di} x_i\right] \\
y_j = \phi_{j0} + \sum_{d=1}^D \phi_{jd} h_d \\
\end{align}
$$where $D_i$ is the input dimension, $D$ is the number of hidden units. The clean way to write is to recognize the matrix multiplication in the sum: 
$$
\begin{align}
\textbf{h} = a[\mathbf{b_0} + \mathbf{W} \mathbf{x}] \\
\textbf{y} = \mathbf{b_1} + \mathbf{\Phi} \mathbf{h}
\end{align}
$$
where $\mathbf{W}$ is a matrix of $D \times D_i$, and  $\mathbf{\Phi}$ is a matrix of $D_0 \times D$, and non-linear activation acts point-wise. One of the problems with Shallow neural nets and multivariate outputs is that $y_1, y_2$ would have 'joints' at the same points! You see how this is a problem, if number of hidden units is not huge? 

### Number of regions vs hidden units
![[UDN-Chapter3-Number-of-regions.png|600]]
Note that the higher the input dimension, the more linear regions you get. Intuitively, that kind of makes sense because in higher dimensions linear 'regions' become linear hyperplanes, and when you add them up, there are just more ways they can intersect. 
**Quick estimation that I really like:** let's say we have $D_i = D$, and each hyperplane gets activated along one of the axes. In 1D, you get activation at x=0, and $2^1$ linear regions. In 2D, you get activation at x=0 (line!), y=0 (line!) and you generate $2^2 = 4$ linear regions. In 3D, you basically intersect 3 planes, and get $2^3=8$ octants. I guess, you see the pattern. You can create $2^{D_i}$ linear regions !!!





## Ch 4: Deep neural networks
*Time spent: 2. hours