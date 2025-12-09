---
title: "A Possible Idle RZ Theory By Time"
description: "Evaluating the effect of time for implementing black hole on RZ CT progression."
author: "Hackzzzzzz"
contributors: "the Amazing Community"
order: 6
draft: true
tags: T9+ Research
---

###### Originally From [[LONG POST] A Possible Idle RZ Theory By Time - Evaluating the Effect of Time for Implementing Black Hole on RZ CT Progression](https://redd.it/1juk67i)

###### Revised From [Evaluating the Effect of Time for Implementing Black Hole on Rho Progression of RZ CT](https://docs.google.com/document/d/1XlRLMZWcGToxlQcoHqaov_ttTC4Yozgn/) and [Evaluating the Effect of Time for Implementing Black Hole on Delta Progression of RZ CT](https://docs.google.com/document/d/1Z1D-LC_lsgN5WBh0V-CX40kjJqY_x5mU/)

**TLDR:** If u are going to full idle RZ CT, get an approximation of how long the pub will be, convert it into in-game $t$, and multiply by 60% or 0.6, then compare to a table of "good" black hole $t$ to use with throughout your pub. **DO NOT** use it in a semi-idle/active situation.

### Abstract

Implementing black hole at the correct time is very essential for progression of RZ $\rho$ and $\delta$, and hence $\tau$ at an efficient way. Due to technological difficulties of myself, several major assumptions are made in the process to ensure a fair comparison between data sets, **including the effect of the variables $c_1$, $c_2$, $w_1$, $w_2$, $w_3$, and $b$ remain the same throughout the publication.** After a series of calculation, it will be practical and ideal with **black hole implemented at 60% of the publication.**

### Methodology

A data set of $t$, $z$ and $z'$ had been obtained and undergo the manipulation of $\dot{\rho}$ and $\dot{\delta}$ respectively via. the formula provided in game, i.e.,  $\dot{\rho} = (time\ interval) * \frac{t}{\frac{z}{2^b} + 0.01}$ & $\dot{\delta} = (time interval) * z'^b$. Then, cumulative $\rho/\delta$ up to an arbitrary time, $t$, was manipulated by summing up all $\dot{\rho}/\dot{\delta}$ up to the time $t$. Finally, by fixing $\dot{\rho}/\dot{\delta}$ after time $t$, which mimicked the effect of implementing black hole, cumulative $\rho/\delta$ was manipulated by summing up all $\dot{\rho}/\dot{\delta}$ from $t = 0$ until the end of the publication.

Take an example of $t = 900$ simulation, given $\dot{\delta}$ formula in the game, $\delta$ can be manipulated as

$$\delta = \sum^{900/\Delta t}_{t=0}\dot{\delta}(t)\Delta t = \Delta t\sum^{900/\Delta t}_{t=0}w_1(t)w_2(t)z'(t)^b$$

In real game, the formula had already been its most simplified form as the power of $w_1$ and $w_2$ varies when purchased. In this simulation, the **assumption of the effect $w_1$ and $w_2$ to be the same throughout the publication** had been made. After black hole was implemented at an arbitrary time $a$, $z'$ were fixed, formula for cumulative $\delta$ could be simplified as

$$\begin{flalign}
  \delta &= \Delta t\sum^{900/\Delta t}_{t=0}w_1(t)w_2(t)z'(t)^b &\\
  &= \Delta t\sum^{a}_{t=0}w_1(t)w_2(t)z'(t)^b + \Delta t\sum^{900/\Delta t}_{t=a}w_1(t)w_2(t)z'(t)^b &&\\
  &= \Delta tw_1w_2\sum^{a}_{t=0}z'(t)^b + \Delta tw_1w_2z'(a)^b\sum^{900/\Delta t}_{t=a}1&&\\
  &= \Delta tw_1w_2\sum^{a}_{t=0}z'(t)^b + \Delta tw_1w_2z'(a)^b\left(\frac{900}{\Delta t}-a\right)&&\\
  &= w_1w_2\left(\Delta t\sum^{a}_{t=0}z'(t)^b + z'(a)^b(900-a\Delta t)\right)&&
\end{flalign}$$

Do note that $w_3$ behaves the same as $w_2$ with a larger interval of purchasing. It has been omitted in the above-shown formula due to the fact that this study was prepared before the effect of $w_3$ was fully interpret by myself. Meanwhile, $w_3$ has no effect on $\rho$ progression, so not accounting $w_3$ base on the assumption and formula given in game will have no net effect on $\rho$ progression.

Next, a publication data set had been simulated with the following settings: Given a publication that had **the same levels of $w_1$ and $w_2$ throughout**, the cumulative $\rho/\delta$ at the end of the publication had been manipulated with **black hole implemented at varying $t$ towards the end of the publication.** Then, the result could be visualized and represented by **plotting a graph of cumulative $\rho/\delta$ at the end of the publication against the time for implementing the black hole.**

In short, one should interpret the graphs as the following:

- $y$-axis is the **maximum $\rho/\delta$ (in arbitrary unit) obtained at the end of the publication**

- $x$-axis is the **time, in $t$, when black hole is being implemented**

It is worth noting that $y$-axis for cumulative $\rho$ and cumulative $\delta$ are in **arbitrary units**, and they **deviate from the real result by a linear factor** (affected by $c_1$, $c_2$, $w_1$, $w_2$, and $w_3$).

**The above calculations are all performed in Microsoft Excel with formula implemented** in all data sets.

### Result

#### Evaluating the effect of the time of implementing black hole on $\rho$ & $\delta$ progression under constant $b$

4 different data sets were tested with the simulation of $b = 1.5$ and the results were obtained, they were:

1. A publication at $t = 40,000$ with **time interval 1**.
  Maximum cumulative $\rho$ resulted at $t = 40,000$ if black hole is implemented at $t = 18,047$ (**45.1%**; Graph 1a).
  Maximum cumulative $\delta$ resulted at $t = 40,000$ if black hole is implemented at $t = 14,304$ (**35.8%**; Graph 1b).

![Graph 1a: a publication of $t = 40,000$, with cumulative $\rho$ plotted against time of implementing black hole in linear scale](/images/rz-black-hole/graph_1a.png)

###### Graph 1a: a publication of $t = 40,000$, with cumulative $\rho$ plotted against time of implementing black hole in linear scale

![Graph 1b: a publication of $t = 40,000$, with cumulative $\delta$ plotted against time of implementing black hole in linear scale ($b = 3$)](/images/rz-black-hole/graph_1b.png)

###### Graph 1b: a publication of $t = 40,000$, with cumulative $\delta$ plotted against time of implementing black hole in linear scale ($b = 3$)

2. A publication at $t = 900$ (i.e., a publication with **1 hour in real time**) with **time interval 0.01**.
  Maximum cumulative $\rho$ resulted at $t = 900$ if black hole is implemented at $t = 466.56$ (**51.8%**; Graph 2a).
  Maximum cumulative $\delta$ resulted at t = 900 if black hole is implemented at t = 480.40 (53.3%; Graph 2b).

![Graph 2a: a publication of $t = 900$, with cumulative $\rho$ plotted against time of implementing black hole in linear scale](/images/rz-black-hole/graph_2a.png)

###### Graph 2a: a publication of $t = 900$, with cumulative $\rho$ plotted against time of implementing black hole in linear scale

![Graph 2b: a publication of $t = 900$, with cumulative $\delta$ plotted against time of implementing black hole in linear scale ($b = 3$)](/images/rz-black-hole/graph_2b.png)

###### Graph 2b: a publication of $t = 900$, with cumulative $\delta$ plotted against time of implementing black hole in linear scale ($b = 3$)

3. A publication at $t = 1,800$ (i.e., a publication with **2 hours in real time**) with **time interval 0.01**.
  Maximum cumulative $\rho$ resulted at $t = 1,800$ if black hole is implemented at $t = 957.5$ (**53.2%**; Graph 3a).
  Maximum cumulative $\delta$ resulted at $t = 1,800$ if black hole is implemented at $t = 652.21$ (**36.2%**; Graph 3b).

![Graph 3a: a publication of $t = 1,800$, with cumulative $\rho$ plotted against time of implementing black hole in linear scale](/images/rz-black-hole/graph_3a.png)

###### Graph 3a: a publication of $t = 1,800$, with cumulative $\rho$ plotted against time of implementing black hole in linear scale

![Graph 3b: a publication of $t = 1,800$, with cumulative $\delta$ plotted against time of implementing black hole in linear scale ($b = 3$)](/images/rz-black-hole/graph_3b.png)

###### Graph 3b: a publication of $t = 1,800$, with cumulative $\delta$ plotted against time of implementing black hole in linear scale ($b = 3$)

4. A publication at $t = 1,500$ (i.e., a publication with **100 minutes in real time**) with **time interval 0.01**.
  Maximum cumulative $\rho$ resulted at $t = 1,500$ if black hole is implemented at $t = 762.69$ (**50.8%**; Graph 4a).
  Maximum cumulative $\delta$ resulted at $t = 1,500$ if black hole is implemented at $t = 652.21$ (**43.5%**; Graph 4b).

![Graph 4a: a publication of $t = 1,500$, with cumulative $\rho$ plotted against time of implementing black hole in linear scale](/images/rz-black-hole/graph_4a.png)

###### Graph 34: a publication of $t = 1,500$, with cumulative $\rho$ plotted against time of implementing black hole in linear scale

![Graph 4b: a publication of $t = 1,500$, with cumulative $\delta$ plotted against time of implementing black hole in linear scale ($b = 3$)](/images/rz-black-hole/graph_4b.png)

###### Graph 4b: a publication of $t = 1,500$, with cumulative $\delta$ plotted against time of implementing black hole in linear scale ($b = 3$)

All 4 data sets showed similar results that **maximum cumulative $\rho$ was obtained at the end of the publication if black hole is implemented at 50% of the publication**, while they showed distinct results that **maximum cumulative $\delta$ was obtained at the end of the publication if black hole is implemented at different time** (depend on $z'$ and $b$). No conclusion can be drawn for $\delta$ progression.

#### Evaluating the effect of varying $b$ on cumulative $\rho$ & $\delta$

As **$b$ has no effect on $\dot{\rho}$ after black hole is implemented**, it can be concluded that $b$ has no alteration on the result on the time of implementing black hole for maximum cumulative $\rho$ to be obtained based on the major assumption of constant effect of $c_1$, $c_2$, $w_1$, $w_2$, and $w_3$ throughout the publication.

The 4 above-mentioned data sets were repeated with the simulation of $b = 1.5$ (i.e., **Level 3**), $b = 2$ (i.e., **Level 4**), $b = 2.5$ (i.e., **Level 5**), and $b = 3$ (i.e., **Level 6**). The results were obtained and were

1. A publication at $t = 40,000$ with **time interval 1** (Graph 5).

![Graph 5: a publication of $t = 40,000$, with cumulative $\delta$ plotted against time of implementing black hole in log scale](/images/rz-black-hole/graph_5.png)

###### Graph 5: a publication of $t = 40,000$, with cumulative $\delta$ plotted against time of implementing black hole in log scale

2. A publication at $t = 900$ (i.e., a publication with **1 hour in real time**) with **time interval 0.01** (Graph 6).

![Graph 6: a publication of $t = 900$, with cumulative $\delta$ plotted against time of implementing black hole in log scale](/images/rz-black-hole/graph_6.png)

###### Graph 6: a publication of $t = 900$, with cumulative $\delta$ plotted against time of implementing black hole in log scale

3. A publication at $t = 1,800$ (i.e., a publication with **2 hours in real time**) with **time interval 0.01** (Graph 7).

![Graph 7: a publication of $t = 1,800$, with cumulative $\delta$ plotted against time of implementing black hole in log scale](/images/rz-black-hole/graph_7.png)

###### Graph 7: a publication of $t = 1,800$, with cumulative $\delta$ plotted against time of implementing black hole in log scale

4. A publication at $t = 1,500$ (i.e., a publication with **100 minutes in real time**) with **time interval 0.01** (Graph 8).

![Graph 8: a publication of $t = 1,500$, with cumulative $\delta$ plotted against time of implementing black hole in log scale](/images/rz-black-hole/graph_8.png)

###### Graph 8: a publication of $t = 1,500$, with cumulative $\delta$ plotted against time of implementing black hole in log scale

The result can be summarized with the following tables:

Class: strat_separated;
Caption: $t$;

| $t_{\text{publication}}$  | 40,000 | 1,800    | 1,500  | 900    |
| ------------------------- | ------ | -------- | ------ | ------ |
| $b=1.5$                   | 14,304 | 652.21   | 652.21 | 480.4  |
| $b=2$                     | 14,304 | 652.21   | 652.21 | 480.4  |
| $b=2.5$                   | 14,304 | 1,178.45 | 652.21 | 480.4  |
| $b=3$                     | 14,304 | 1,178.45 | 652.21 | 652.21 |
| | | | | [FOOT;]Table: The time of implementing black hole, $t$, for 4 Data sets with varying $b$ |

Class: strat_separated;
Caption: Cumulative $\delta$;

| $t_{\text{publication}}$  | 40,000         | 1,800         | 1,500         | 900          |
| ------------------------- | -------------- | ------------- | ------------- | ------------ |
| $b=1.5$                   | 17,669,273.86  | 119,349.2729  | 89,947.45292  | 36,084.73598 |
| $b=2$                     | 152,436,399.5  | 536,797.6358  | 401,239.6211  | 145,114.0593 |
| $b=2.5$                   | 1,325,576,801  | 2,528,099.281 | 1,818,056.847 | 597,028.0944 |
| $b=3$                     | 11,563,388,612 | 12,887,476.7  | 8,301,046.207 | 2,537,932.77 |
| | | | | [FOOT;]Table: The maximum cumulative $\delta$ obtained (Cumulative $\delta$; in arbitrary units) for 4 Data sets with varying $b$ |

### Conclusion and Discussion

#### Conclusion

The above investigations illustrate the fact that **implementing black hole at different times does affect the cumulative $\rho$ obtained at the end of the publication**, thus affecting the time required for publication and efficiency of gaining $\tau$ for growth. Simulation across different data sets also demonstrates the **consistency of implementing black hole at 50% of the publication for optimization**, and the hypothesis that **the duration of publication seems to be independent to the absolute time of implementing the black hole (only the relative duration does).**

**Implementing black hole at different times does not consistently affect the cumulative $\delta$ obtained at the end of the publication.** Calculations across different data sets demonstrate **fluctuating result on the time implementing the black hole.** Graphs 5–8 reveal a fact that **the value of $b$ is a major factor affecting the time for implementing black hole** to obtain maximum cumulative $\delta$, which is different from that by manipulating cumulative rho.

#### Evaluating the Effect of $c_1$, $c_2$, $w_1$, $w_2$, and $w_3$

The above simulations took on a major assumption of a publication that had **the same levels of $c_1$, $c_2$, $w_1$, $w_2$, and $w_3$ throughout**, which allowed the manipulation of cumulative $\rho/\delta$ in a **single independent variable setting** and hence validated the fair comparison among independent variables. However, such assumption was **practically impossible** during the actual situation. As the effect of variables on the cumulative $\rho$ is **complex** and **highly dependent on the activeness of player**, it was also theoretically challenging to simulate the exact effects on all available data I had in my excel. To evaluate the general/rough effects of $c_1$, $c_2$, $w_1$, $w_2$, $w_3$, and $b$, I will explore them **in the view of the equation of $\dot{\rho}$ and $\dot{\delta}$ in-game** and in turn **evaluate the effect of such on the graphs**, hence provide a more refined hypothesis.

1. **The cost of purchasing $c_1$, $c_2$, $w_1$, $w_2$, $w_3$, and $b$ has no effect on the graphs**, as the graphs plot the cumulative $\rho/\delta$, not the $\rho/\delta$ a player have at a specific $t$.

2. **The effect of $c_1$, $c_2$, and $w_1$ will shift the graphs of cumulative $\rho$ upward and rightward** at a non-linear scale, as $\dot{\rho}$ directly depends on $c_1$, $c_2$, and $w_1$.

3. **$c_1$ and $c_2$ has no effect on the graphs of cumulative $\delta$**, as they have no relationship on $\dot{\delta}$.

4. **The effect of $w_1$, $w_2$, and $w_3$ will shift the graphs of cumulative $\delta$ upward and rightward** at a non-linear scale, as $\dot{\delta}$ directly depends on $w_1$, $w_2$, and $w_3$.

5. **The effect of $b$ will shift the graph of cumulative $\rho$ upward at a non-linear scale and cumulative $\delta$ upward at an exponential scale**, as it directly influences $\dot{\delta}$ in an exponential manner and hence $\dot{\rho}$ indirectly.

6. **The effect of shortened time buying the variables will shift the graphs of cumulative $\rho$ and $\delta$ leftward** at a non-linear scale, as it allows an earlier growth for cumulative $\rho$ and $\delta$ in a repeatable manner.

Overall, purchasing $c_1$, $c_2$, $w_1$, $w_2$, $w_3$, and $b$ have an effect of **shifting graphs upward and slightly rightward**, indicating the **implement of black hole is possible to be pushed back slightly for optimization.**

**The above-mentioned effects were later verified by the sim** (with the most optimal strategy implemented by brute-forcing different $t$ for implementing black hole on a pub), which takes into the account of the effects of variable purchases (i.e., $c_1$, $c_2$, $w_1$, $w_2$, $w_3$, and $b$) and usage of level chasing strategy (Using a ratio of approximately 4x in terms of levels for $c_1$ over $c_2$). The duration of a publication, the time of implementing black hole and their relative percentage, $\frac{t_{bh}}{t_{pub}}$, has been calculated and plotted as a graph of relative duration against $\tau$ (Graph 9).

![Graph 9: Relative time of implementing black hole plotted against different $\tau$, with orange horizontal line as 60% line and yellow plots as 30 moving average for relative time](/images/rz-black-hole/graph_9.png)

###### Graph 9: Relative time of implementing black hole plotted against different $\tau$, with orange horizontal line as 60% line and yellow plots as 30 moving average for relative time

The plot supports the **consistency of implementing black hole at 60% of the publication for achieving a more ideal outcome** by optimization of cumulative $\rho$. One point worth noting is that the relative duration for black hole implementation temporarily spiked up upon a $w_3$ and/or $b$ upgrade, indicating a longer publication, and hence a later time for implementing black hole.

#### Evaluating the Actual Time for Implementing Black Hole

Implementing the black hole at the right time is essential for $\rho/\tau$ growth since it fixes $z'$ as well. However, the continuity of the publication duration does not have the same nature of the discreteness of the solution for $z = 0$, which may **lead to suboptimal $z'$ if the hypothesis is strictly followed.**

In response of this, there are also data from [Discord](https://discord.gg/S9UheTC) about $z = 0$ with particularly higher $z'$ as a list. One can consider **selectively setting t with $z = 0$ and high $z'$ as the time of implementing black hole** instead of the theoretical values obtained from the hypothesis. From the graphs above, it can be observed that **selecting a time for implementing black hole that slightly deviates from the hypothesized time minimally affect the cumulative $\rho/\delta$** obtained at the end of the publication.

#### Proposing a Possible New Idle Route for Completion of RZ CT

Base on the discussion and all available data we have at this moment, it may be reasonable to **propose a new idle route of publication** for completion of RZ CT after e600 $\rho$  the general routing will be as follow:

1. **Take an estimate on the duration** of the upcoming publication wish to be idled. **Calculate the hypothesized time** for implementing black hole (i.e., 60% of your publication time. **Do estimate a longer time if a $w_3$ and/or $b$ upgrade is close to your previous publication point).**

2. **Set the time for implementing black hole that is $z = 0$ and has a high $z'$** and is sufficiently close to the hypothesized time calculated from previous step.

3. Start playing the publication with **autobuy all** (as missing $c_1$ and $w_1$ purchases affect the progress heavily if it is missed for a significant portion of time).

4. When the black hole is implemented, **continue to autobuy until the end of publication.**

5. Repeat the progress if the next publication is also designated to be idled.

### Acknowledgement

Lastly, I would like to give a huge thanks to the following people/group of people for assisting the verification of hypothesis and further findings on RZ CT:

- Prop
  - For designing the RZ CT, providing data for processing and verifying the hypothesis, and refining on the accuracy of the hypothesis.

- Hotab, Mathis S.
  - For designing the simulation for RZ CT and suggesting the concept of deviating from theoretical time and selecting $t$ with high $z'$.

- invalid.user_, Megaminx
  - For suggesting the point of assessing the effect of $b$ on cumulative $\rho$ and $\delta$, and bringing up several points in discussion section to investigate with.

- Axiss, lll333, Black Seal, Mathis S., Megamin, Maimai
  - For willing to test my hypothesis with their save and bringing up several points on my hypothesis. (ofc, thanks Maimai for enlightening of RZyoyoyo lol)

- All other people
  - For providing experimental data and providing support whenever I need them.
