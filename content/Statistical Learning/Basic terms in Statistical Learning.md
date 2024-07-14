---
title: Basic terms in Statistical Learning
draft: false
tags:
  - StatLearning
---
Imagine, we want to know about the price of a house, knowing about its characteristics like air quality, housing conditions, presence of schools/parks near, etc. We call the latter *input variables*$X$ and the sale *output variable* $Y$, and we assume that $\exists$ $f$ s.t $f(X)+ \epsilon = Y$ , where $\epsilon$ is some random variable. **Our goal** is to find $f$ or at least something that is close to it ($\hat{f}$) to give either accurate *predictions* or study dependence between variables (*inference*).

There are mainly two ways to estimate $f$: **parametric** and **non-parametric** methods. The first one starts with an assumption, e.g the relation is linear. This simplifies the calculation, but usually results in less accurate predictions. The non-parametric method does not start with an explicit assumption and gives a function that is *not too rough or wiggly*. However, they require much larger *data set* to give accurate predictions. One of the trade-offs between two methods is that the parametric is usually more interpretable, hence is used for inference.

In the supervised learning, the model has an access to output variables, but in an unsupervised learning there are no response variables. The model tries to *learn* from an unlabeled data. 