---
title: Simple Linear Regression
date: 2024-07-10
tags:
  - StatLearning
---

Assume we have a single predictor variable $X$ and quantitative response $Y$. We assume that there is a relation between them s.t.

$$
Y \approx \beta_0 + \beta_1\cdot X
$$
Having some data, we can *calculate* the $\beta_0, \beta_1$ and then use it to predict the value for a given $x$. But how do we estimate the coefficients?
### Least Squares Method 
---
I studied this formally in the Linear Algebra course and will make a separate note later [[Least Squares Method]], but generally this is how we approach it here. Assume that we have some $\hat{\beta}_0, \hat{\beta}_1$, then the obtained value for a test data $x_i$ is $\hat{y}_i =\hat{\beta}_0 + \hat{\beta}_1 \cdot x$. Its difference from the real value is $e_i = y_i - \hat{y}_i$. We define **residual sum of squares (RSS)** as the sum of these $e_i$. So we try to look for betas that minimize RSS, and the formula for it is


$$
\hat{\beta}_1= \frac{\sum (x_i-\overline{x})(y_i-\overline{y})}{\sum (x_i-\overline{x})^2 }
$$

$$
\hat{\beta}_0 = \overline{y}- \hat{\beta}_1\cdot\overline{x}
$$
1) Try proving it using some calculus

### Standard errors 
---- 
Okay, we calculate the betas, but how do we know that they're accurate? Or how do we know *how* accurate they are? Standard errors come to help. The general idea is that if the true population were to be described by linear dependence, then $\hat{\beta}_0, \hat{\beta}_1$ are our best estimates given the sample data. AND if we were to have data about other samples and average them, then we would really get the true betas (without hat). This means that **linear regression does not systematically over- or under-estimate the true parameters**. Anyway, the formulas for *standard errors* are on page 75 (I'm too lazy to type them here), but we should be rather interested on *how to use them*.

Logically, if there was no linear dependence then $\hat{\beta}_1$ should be *close to zero*.  But how close is close ?) 2) Recall how to calculate the 95% confidence interval using standard errors (SE). 3) t-statistic is given by, but what does it measure?

$$
t = \frac{\beta_1 - 0}{ \text{SE}(\beta_1)}
$$
$$

$$
### RSE and $\text{R}^2$ statistic
---
Okay, let's assume that now we're confident in the fact there is some dependence, but this still leaves the question: how accurate is the linear model? One way to answer is to calculate *residual standard error* (RSE). It basically gives the value of **average deviation from the predicted value**. So, if it's large $\rightarrow$ bad. 

$$
\text{RSE} = \sqrt{\frac{1}{n-2}\cdot \text{RSS}}
$$
Good or bad RSE depends on the context of the data. So, it is wise to compare to the mean $y$. Another way that gives universal value is $\text{R}^2$:

$$
R^2 = \frac{\text{TSS}-\text{RSS}}{\text{TSS}}
$$
where TSS is total square sum $= \sum_i^n(y_i-\overline y)$. 4) Explain intuitively the meaning of $R^2$. 

