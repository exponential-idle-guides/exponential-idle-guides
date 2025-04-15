---
title: "A Possible Idle RZ Theory By Time"
description: "Evaluating the effect of time for implementing black hole on RZ CT progression."
author: "Hacker118"
contributors: "the Amazing Community"
order: 3
tags: T9+ Research
---

(TL DR: If u are going to full idle RZ CT, get an approximation of how long the pub will be, convert it into in game t and multiply by 60% or 0.6, then compare to a table of "good" black hole t to use with throughout your pub. DO NOT use it in a semi-idle/active situation.)

###### Revised From [Evaluating the Effect of Time for Implementing Black Hole on Rho Progression of RZ CT](https://docs.google.com/document/d/1XlRLMZWcGToxlQcoHqaov_ttTC4Yozgn/) and [Evaluating the Effect of Time for Implementing Black Hole on Delta Progression of RZ CT](https://docs.google.com/document/d/1Z1D-LC_lsgN5WBh0V-CX40kjJqY_x5mU/))

### Abstract

Implementing black hole at the correct time is very essential for progression of RZ rho and delta, and hence tau at an efficient way. Due to technolocical difficulties of myself, several major assumptions are made in the process to ensure a fair comparison between data sets, **including the effect of the variables $c_1$, $c_2$, $w_1$, $w_2$, $w_3$, and $b$ remain the same throughout the publication.** After a series of calculation, it will be practical and ideal with **black hole implemented at 60% of the publication.**

### Methodology

A data set of $t$, $z$ and $z^'$ had been obtained and undergo the manipulation of $\dot{\rho}$ and $\dot{\delta}$ respectively via. the formula provided in game, i.e.,  $\dot{\rho} = (time\ interval) * \frac{t}{\frac{z}{2^b} + 0.01}$ & $\dot{\delta} = (time interval) * z'^b$. Then, cumulative $\frac{\rho}{\delta}$ up to an arbitrary time, $t$, was manipulated by summing up all $\frac{\rho}{\dot{\delta}}$ up to the time $t$. Finally, by fixing $\frac{\dot{\rho}}{\dot{\delta}}$ after time $t$, which mimicked the effect of implementing black hole, cumulative $\frac{\rho}{\delta}$ was manipulated by summing up all $\frac{\rho}{\dot{\delta}}$ from $t = 0$ until the end of the publication.

Take an example of t = 900 simulation, given delta dot formula in the game, delta can be manipulated as

$$\delta = \sum^{900/\Delta t}_{t=0}\dot{\delta}(t)\Delta t = \Delta t\sum^{900/\Delta t}_{t=0}w_1(t)w_2(t)z'(t)^b$$

In real game, the formula had already been its most simplified form as the power of $w_1$ and $w_2$ varies when purchased. In this simulation, the **assumption of the effect $w_1$ and $w_2$ to be the same throughout the publication** had been made. After black hole was implemented at an arbitrary time $a$, $z'$ were fixed, formula for cumulative $\delta$ could be simplified as

$$\begin{flalign}
  \delta &= \Delta t\sum^{900/\Delta t}_{t=0}w_1(t)w_2(t)z'(t)^b &\\
  &= \Delta t\sum^{a}_{t=0}w_1(t)w_2(t)z'(t)^b + \Delta t\sum^{900/\Delta t}_{t=a}w_1(t)w_2(t)z'(t)^b &&\\
  &= \Delta tw_1w_2\sum^{a}_{t=0}z'(t)^b + \Delta tw_1w_2z'(a)^b\sum^{900/\Delta t}_{t=a}1&&\\
  &= \Delta tw_1w_2\sum^{a}_{t=0}z'(t)^b + \Delta tw_1w_2z'(a)^b\left(\frac{900}{\Delta t}-a\right)&&\\
  &= w_1w_2\left(\Delta t\sum^{a}_{t=0}z'(t)^b + z'(a)^b(900-a\Delta t)\right)&&
\end{flalign}$$

Do note that w3 behaves the same as w2 with a larger interval of purchasing. It has been omitted in the above-shown formula due to the fact that this study was prepared before the effect of w3 was fully interpret by myself. Meanwhile, w3 has no effect on rho progression, so not accounting w3 base on the assumption and formula given in game will have no net effect on rho progression.

Next, a publication data set had been simulated with the following settings: Given a publication that had **the same levels of $w_1$ and $w_2$ throughout**, the cumulative $\frac{\rho}{\delta}$ at the end of the publication had been manipulated with **black hole implemented at varying $t$ towards the end of the publication.** Then, the result could be visualized and represented by **plotting a graph of cumulative $\frac{\rho}{\delta}$ at the end of the publication against the time for implementing the black hole.**

In short, one should interpret the graphs as the following:

- $y$-axis is the **maximum $\frac{\rho}{\delta}$ (in arbitrary unit) obtained at the end of the publication**

- $x$-axis is the **time, in $t$, when black hole is being implemented**

It is worth noting that $y$-axis for cumulative $\rho$ and cumulative $\delta$ are in **arbitrary units**, and they **deviate from the real result by a linear factor** (affected by $c_1$, $c_2$, $w_1$, $w_2$, and $w_3$).

**The above calculations are all performed in Microsoft Excel with formula implemented** in all data sets.

### Result

#### Evaluating the effect of the time of implementing black hole on $\rho$ & $\delta$ progression under constant $b$

4 different data sets were tested with the simulation of $b = 1.5$ and the results were obtained, they were:

1. A publication at $t = 40,000$ with **time interval 1**.
  Maximum cumulative $\rho$ resulted at $t = 40,000$ if black hole is implemented at $t = 18,047$ (**45.1%**; Graph 1a).
  Maximum cumulative $\delta$ resulted at $t = 40,000$ if black hole is implemented at $t = 14,304$ (**35.8%**; Graph 1b).

[INSERT IMAGE]

2. A publication at $t = 900$ (i.e., a publication with **1 hour in real time**) with **time interval 0.01**.
  Maximum cumulative $\rho$ resulted at $t = 900$ if black hole is implemented at $t = 466.56$ (**51.8%**; Graph 2a).
  Maximum cumulative $\delta$ resulted at t = 900 if black hole is implemented at t = 480.40 (53.3%; Graph 2b).

[INSERT IMAGE]

3. A publication at $t = 1,800$ (i.e., a publication with **2 hours in real time**) with **time interval 0.01**.
  Maximum cumulative $\rho$ resulted at $t = 1,800$ if black hole is implemented at $t = 957.5$ (**53.2%**; Graph 3a).
  Maximum cumulative $\delta$ resulted at $t = 1,800$ if black hole is implemented at $t = 652.21$ (**36.2%**; Graph 3b).

[INSERT IMAGE]

4. A publication at $t = 1,500$ (i.e., a publication with **100 minutes in real time**) with **time interval 0.01**.
  Maximum cumulative $\rho$ resulted at $t = 1,500$ if black hole is implemented at $t = 762.69$ (**50.8%**; Graph 4a).
  Maximum cumulative $\delta$ resulted at $t = 1,500$ if black hole is implemented at $t = 652.21$ (**43.5%**; Graph 4b).

[INSERT IMAGE]

All 4 data sets showed similar results that **maximum cumulative $\rho$ was obtained at the end of the publication if black hole is implemented at 50% of the publication**, while they showed distinct results that **maximum cumulative $\delta$ was obtained at the end of the publication if black hole is implemented at different time** (depend on $z'$ and $b$). No conclusion can be drawn for $\delta$ progression.

#### Evaluating the effect of varying $b$ on cumulative $\rho$ & $\delta$

As **$b$ has no effect on rho dot after black hole is implemented**, it can be concluded that $b$ has no alteration on the result on the time of implementing black hole for maximum cumulative $\rho$ to be obtained based on the major assumption of constant effect of $c_1$, $c_2$, $w_1$, $w_2$, and $w_3$ throughout the publication.

The 4 above-mentioned data sets were repeated with the simulation of $b = 1.5$ (i.e., **Level 3**), $b = 2$ (i.e., **Level 4**), $b = 2.5$ (i.e., **Level 5**), and $b = 3$ (i.e., **Level 6**). The results were obtained and were

1. A publication at $t = 40,000$ with **time interval 1** (Graph 5).

[INSERT IMAGE]

2. A publication at $t = 90$0 (i.e., a publication with **1 hour in real time**) with **time interval 0.01** (Graph 6).

[INSERT IMAGE]

3. A publication at $t = 1,800$ (i.e., a publication with **2 hours in real time**) with **time interval 0.01** (Graph 7).

[INSERT IMAGE]

4. A publication at $t = 1,500$ (i.e., a publication with **100 minutes in real time**) with **time interval 0.01** (Graph 8).

[INSERT IMAGE]

The result can be summarized as the following table:

[INSERT TABLE]

### Conclusion and Discussion

#### Conclusion

The above investigations illustrate the fact that **implementing black hole at different times does affect the cumulative $\rho$ obtained at the end of the publication**, thus affecting the time required for publication and efficiency of gaining $\tau$ for growth. Simulation across different data sets also demonstrates the **consistency of implementing black hole at 50% of the publication for optimization**, and the hypothesis that **the duration of publication seems to be independent to the absolute time of implementing the black hole (only the relative duration does).**

**Implementing black hole at different times does not consistently affect the cumulative $\delta$ obtained at the end of the publication.** Calculations across different data sets demonstrate **fluctuating result on the time implementing the black hole.** Graphs 5–8 reveal a fact that **the value of $b$ is a major factor affecting the time for implementing black hole** to obtain maximum cumulative $\delta$, which is different from that by manipulating cumulative rho.

#### Evaluating the Effect of $c_1$, $c_2$, $w_1$, $w_2$, and $w_3$

The above simulations took on a major assumption of a publication that had **the same levels of $c_1$, $c_2$, $w_1$, $w_2$, and $w_3$ throughout**, which allowed the manipulation of cumulative $\frac{\rho}{\delta}$ in a **single independent variable setting** and hence validated the fair comparison among independent variables. However, such assumption was **practically impossible** during the actual situation. As the effect of variables on the cumulative $\rho$ is **complex** and **highly dependent on the activeness of player**, it was also theoretically challenging to simulate the exact effects on all available data I had in my excel. To evaluate the general/rough effects of $c_1$, $c_2$, $w_1$, $w_2$, $w_3$, and $b$, I will explore them **in the view of the equation of $\dot{\rho}$ and $\dot{\delta}$ in-game** and in turn **evaluate the effect of such on the graphs**, hence provide a more refined hypothesis.
