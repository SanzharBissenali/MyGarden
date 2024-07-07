---
title: Bayes and KNN classifiers.
draft: false
tags:
  - StatLearning
---
 

### Bayes Classifier
---
Bayes classifier is the golden (unattainable) standard in classifying problems. It makes it decision based on a **conditional probability** and assigns an observation to the most likely class:

$$
\text{Pr}(Y = j| X=x_0)
$$
We will assign $x_0$ to the $j$ for which the conditional probability above is the largest. (1) Although it's the best classifier, why does it produce errors? 

#### K-nearest neighbor (KNN) classifier
---
KNN method determines the class based on the neighbors. It assigns an observation to a class based on which fraction of class among the K-nearest neighbors dominates: 

$$
\text{Pr}(Y = j| X=x_0) = \frac{1}{K}\sum_i^K I(j=y_i)
$$
Intuitively, it is more obvious than the formula above. Interestingly, KNN faces the similar problem of choosing the right flexibility mode based on N. If N is too small, then we have a lot of flexibility, and hence Var in the MSE equation is large ([[Bias-Variance Trade-off]]). If N is too big, then we decrease the flexibility and increase the Bias. The graphs below depict the case clearly:

![[Pasted image 20240630111426.png]]
