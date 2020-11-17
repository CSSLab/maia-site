---
layout: infopage
title: Papers
---

We have two papers on Maia, both are available on arXiv:

|Title | abstract| link|
|----|----|---|
|Aligning Superhuman AI with Human Behavior: Chess as a Model System|As artificial intelligence becomes increasingly intelligent---in some cases, achieving superhuman performance---there is growing potential for humans to learn from and collaborate with algorithms. However, the ways in which AI systems approach problems are often different from the ways people do, and thus may be uninterpretable and hard to learn from. A crucial step in bridging this gap between human and artificial intelligence is modeling the granular actions that constitute human behavior, rather than simply matching aggregate human performance. We pursue this goal in a model system with a long history in artificial intelligence: chess. The aggregate performance of a chess player unfolds as they make decisions over the course of a game. The hundreds of millions of games played online by players at every skill level form a rich source of data in which these decisions, and their exact context, are recorded in minute detail. Applying existing chess engines to this data, including an open-source implementation of AlphaZero, we find that they do not predict human moves well. We develop and introduce Maia, a customized version of Alpha-Zero trained on human chess games, that predicts human moves at a much higher accuracy than existing engines, and can achieve maximum accuracy when predicting decisions made by players at a specific skill level in a tuneable way. For a dual task of predicting whether a human will make a large mistake on the next move, we develop a deep neural network that significantly outperforms competitive baselines. Taken together, our results suggest that there is substantial promise in designing artificial intelligence systems with human collaboration in mind by first accurately modeling granular human decision-making. | [arxiv.org/abs/2006.01855](https://arxiv.org/abs/2006.01855) |
| Learning Personalized Models of Human Behavior in Chess |      Even when machine learning systems surpass human ability in a domain, there are many reasons why AI systems that capture human-like behavior would be desirable: humans may want to learn from them, they may need to collaborate with them, or they may expect them to serve as partners in an extended interaction. Motivated by this goal of human-like AI systems, the problem of predicting human actions -- as opposed to predicting optimal actions -- has become an increasingly useful task. We extend this line of work by developing highly accurate personalized models of human behavior in the context of chess. Chess is a rich domain for exploring these questions, since it combines a set of appealing features: AI systems have achieved superhuman performance but still interact closely with human chess players both as opponents and preparation tools, and there is an enormous amount of recorded data on individual players. Starting with an open-source version of AlphaZero trained on a population of human players, we demonstrate that we can significantly improve prediction of a particular player's moves by applying a series of fine-tuning adjustments. The differences in prediction accuracy between our personalized models and unpersonalized models are at least as large as the differences between unpersonalized models and a simple baseline. Furthermore, we can accurately perform stylometry -- predicting who made a given set of actions -- indicating that our personalized models capture human decision-making at an individual level.  | [arxiv.org/abs/2008.10086](https://arxiv.org/abs/2008.10086) |
