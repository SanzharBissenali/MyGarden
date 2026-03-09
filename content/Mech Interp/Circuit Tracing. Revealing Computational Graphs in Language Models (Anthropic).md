---
title: Circuit Tracing. Revealing Computational Graphs in Language Models (Anthropic)
date: 2026-03-06
---
My notes from reading this [paper](https://transformer-circuits.pub/2025/attribution-graphs/methods.html) by Anthropic. The general approach that permeates all the current Mechanistic Interpretability (Mech. Interp.) papers is 1) identify features (interpretable building blocks) and 2) study how they form circuits, aka perform calculations.

A natural approach of identifying a feature with a neuron suffers from **polysemanticity**, the ability of neurons to represent many unrelated features, which appears due to the **superposition phenomenon**.

### Building an Interpretable Replacement Model
The whole architecture can be summarized by this picture. Basically, the CLT reads from a layer $l$ and writes the output into all subsequent layers. Formally, the features are encoded into a high-dimensional space 
$$
\textbf{a}^l = \text{JumpReLU}(W_{enc}^l \textbf{x}^l)
$$
and are decoded (reconstructed) by $\textbf{y}^l = W_{dec}^{l \rightarrow l}\textbf{a}^l$. The cross-layer part comes by summing the decoding contribution from all previous layers. 
$$
\hat{\textbf{y}}^m = \sum_{l = 1}^m W_{dec} \textbf{a}^l
$$

![[Pasted image 20260307120808.png|500]]
> [!question] #1
> That's a cool architecture and it sort of works (50% reconstruction on inputs), but it feels like an overkill to me; CLT can read from layer = 3, and write to layer = 18. It seems more intuitive to me that transformers perform **local computations** so that it needs to store some information only for certain number of layers. It would be interesting to see what if one restricts CLT to write only 3 layers ahead. 

### Attribution Graphs 
Wow, their visualization tools are really great. Once again, it's so important to have these tools to understand what is going on. They also compute **edge weights** that show the how much source feature's decoder communicates to target feature's encoder. For example, 'Digital' feature bumps up the feature 'D' that later bumps up the feature 'say "DA_" '; the direct path 'Digital' bumps up the feature 'say "DA_" ' is not as strong. They also do **pruning** keeping features/paths that explain most of the decision making. 

![[Pasted image 20260307130626.png|700]]


### Biology
In the [next paper](https://transformer-circuits.pub/2025/attribution-graphs/biology.html), they also investigate the frontier model Haiku 3.5 with the CLT technique on several behavioral cases. I should also read it later. 

### Limitations 
The key limitation is that the CLT partially explain **how** model gets to the particular answer, but not **why**; that's buried under **QK**-circuits! They also point out another limitation - reconstruction error. To make the same predictions replacement models needs to be corrected by the original model's forward pass values; they describe it in a funny way: "error terms pop up out nowhere."

> [!tip] Coda
>It seems likely that, in “fuzzier” natural language examples, we are *conflating many roles played by features at different depths into overall buckets like “unknown entity” or “harmful request” or “notions of largeness” which actually serve specialized roles,* and that there is actually an intricate aggregation and transformation of information taking place, just out of our understanding today.


