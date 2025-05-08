---
title: "Visualizing Variable Power Throughout the Game"
description: "Using plots to show how the power of variables changes throughout the purchase of y power upgrades and the psi3 upgrades, why we buy y during graduation recovery, and the eventual domination of the y variable."
author: "spqcey"
contributors: "the Amazing Community"
draft: false
order: 4
tags: T9+ Research
---

###### Initial Publication on November 19, 2022

###### Some information (with regards to top players) may be inaccurate

## Introduction

Let's start by defining which variables we're discussing. We will discuss the main-game variables, ($x-\xi$), NOT the upgrades bought in theories.

We can split the progression through the game into three sections:

- From 0 to ee4310, this section includes the unlocking of all of the variables, finishing with the unlocking of $\xi$ at ee791. It also includes the purchase of $y$ power upgrades, of which we will discuss more later.

- From ee9160 to ee47362, this is the range when we buy supremacy upgrades known as "psi3" upgrades.

- Finally, the final section is after ee47362, where we see the title of strongest variable change hands a few more times with a final change at ~ee70000.

### Program

To visualize the power of each variable throughout the game, I've created a script in Python that can compute the power of all variables at any given $f(t)$. It does this by simulating the purchase of all of the variable levels it can afford. It then computes the power the variable has at its current level. It does this for every variable.

To create the graphs seen shortly, I repeated this computation at many different $f(t)$ points, then graphed the power of each variable across an $f(t)$ interval.

Something to note about the program is that it computes the base power, $x$, not $x_8$ which is used in the main equation to compute $f(t)$ after $x_8$ is bought as an upgrade. Because of how $x_8$ is computed in-game, it can't be well represented in these graphs. However, this has no effect on which variable is strongest, so it doesn't matter given the purpose of this guide extension.

## Unlocking Variables (0 - ee791)

The cost of the first levels of each variable range from <kbd>Free</kbd> to an expensive ee791. Here's a table with the cost of the first level of each variable:

Class: breakdown;
last_row: false;
Caption: Cost of First Variable Level;

|               | $F(t)$   |                           | $F(t)$   |                       | $F(t)$   |
| ------------- | -------- | ------------------------- | -------- | --------------------- | -------- |
| [type="th";]x | Free     | [type="th";]$\alpha$      | ee29.365 | [type="th";]$\theta$  | ee255.19 |
| [type="th";]y | 1.04     | [type="th";]$\beta$       | ee43.064 | [type="th";]$\iota$   | ee337.79 |
| [type="th";]z | 1.08     | [type="th";]$\gamma$      | ee59.526 | [type="th";]$\kappa$  | ee432.59 |
| [type="th";]s | 10.00    | [type="th";]$\delta$      | ee78.793 | [type="th";]$\lambda$ | ee539.71 |
| [type="th";]u | ee4.2871 | [type="th";]$\varepsilon$ | ee100.90 | [type="th";]$\nu$     | ee659.31 |
| [type="th";]v | ee10.045 | [type="th";]$\zeta$       | ee153.79 | [type="th";]$\xi$     | ee791.49 |
| [type="th";]w | ee18.379 | [type="th";]$\eta$        | ee218.41 | INVIS                 | INVIS    |
| | | | | | [FOOT;]$F(t)$ values courtesy of the [Exponential Idle Wiki](https://exponential-idle.fandom.com/wiki/Instructions). |

Here's a graph of variable power up to ee50 $f(t)$. The initial purchase of variables $y$ through $\beta$ can be seen.

![Variable power up to ee50](/images/variable-power/ee50.png)

###### Computed every ee1 from ee1 to ee50.

And here's a graph with the same $f(t)$ range, but instead of the power of each variable, it graphs the percentage of total power each variable has at any given $f(t)$.

![Percentage variable power up to ee50](/images/variable-power/ee50_2.png)

###### Computed every ee1 from ee1 to ee50.

And here's a graph of variable power up to the purchase of the final variable at ee791:

![Variable power up to ee850](/images/variable-power/ee850.png)

###### Computed every ee1 from ee1 to ee850.

And the percentage graph:

![Percentage variable power up to ee850](/images/variable-power/ee850_2.png)

###### Computed every ee1 from ee1 to ee850. A bit more spiky ;)

## $y$ Power Upgrades (ee50 - ee4310)

You may have noticed the abrupt jumps in the above graphs. We'll now discuss why that occurs.

After we supremacy for the first time at ee50, we are given a currency $\psi$ (psi). With this new currency, we can buy upgrades to increase the exponent on $y$. Each upgrade raises the exponent by $0.2$, so the initial supremacy at ee50 turns $y$ into $y^{1.2}$. These upgrades continue all the way up to $y^{9.0}$ at ~ee4310, for a total of $40$ levels.

Because the power each variable has is propagated down all of its lower variables (ex. $z$ → $y$ → $x$), the change in exponent affects how strong all of the variables are.

The cost of each upgrade from $y^{1.2}$ through $y^{1.8}$ is calculated using this formula, where x is the level you are buying starting at 1:

$\psi = 1.5 \times 2^{2(x-1)}$

The cost model changes after this, and from $y^{2.0}$ through $y^{4.0}$ is this formula:

$\psi = 0.488281 \times 2^{3(x-1)}$

The cost model changes one final time, and from $y^{4.2}$ to $y^{9.0}$ is this formula:

$\psi = 0.0000000794093 \times 2^{5(x-1)}$

With all of these calculations in place, here is the new variable power graph, now ranging up to ee5000:

![Variable power up to ee5000](/images/variable-power/ee5000.png)

###### Computed every ee1 from ee1 to ee5000.

Each small jump present in the graph marks the purchase of an added $0.2$ to the exponent of $y$.

And finally, here is the percentage of total power for each variable:

![Percentage variable power up to ee5000](/images/variable-power/ee5000_2.png)

###### Computed every ee1 from ee1 to ee5000.

Very spiky!

## Psi3 Upgrades (ee9160 - ee47362)

After we buy $y^{9.0}$ at around ee4310, we don't have anything to buy with $\psi$ until ee9160 $f(t)$, when we can finally afford the first Psi3 upgrade. This time, instead of 40 levels to buy, there's only 24 upgrades. However, each upgrade is separated by e20$\psi$, so the last level, bought with e570$\psi$, is all the way up at ee47362 $f(t)$.

These upgrades help delay the decay players would otherwise experience from ee20k-ee50k as their theories slow down and they gain less $\tau$.

The first psi3 upgrade increases $z$'s exponent to $z^{1.04}$, and the second upgrade increases it further to $z^{1.08}$. The third and fourth upgrades increase $s$'s exponent to $1.08$, and so on until the final upgrade increases $\eta$'s exponent to $1.08$.

To illustrate the effect these purchases have, let's use an example.

Let's say these are the current equations for your first five variables:

$x = 4.7893e7y^9 + 2^3 \times 165.2$\
$y = 19891z^{1.08} + 2^{419} \times 87522$\
$z = 18082s^{1.04} + 2^{376} \times 70017$\
$s = 16433u + 2^{341} \times 56007$\
$u = 14933v + 2^{323} \times 48973$

And let's say that shortly afterward you purchased a new psi3 level:

$x = 4.7893e7y^9 + 2^3 \times 165.2$\
$y = 19891z^{1.08} + 2^{419} \times 87522$\
$z = 18082s^{1.08} + 2^{376} \times 70017$\
$s = 16433u + 2^{341} \times 56007$\
$u = 14933v + 2^{323} \times 48973$

With this new level, the power of $s$ and $u$ will increase, because in their propagation down to $x$ they get boosted by the added $0.04$ on $s$'s exponent. However, the power of $x$, $y$, and $z$ will get no boost, because they are downstream of the added exponent.

But don't just take my word for it. Let's look at the data from the program around this upgrade.

![Variable Power at Psi3 Upgrade](/images/variable-power/ee15000.png)

###### Computed every ee1 from ee13000 to ee15000. For the purpose of this visualization, only the four variables discussed are plotted.

As can be seen in the image, both $y$ and $z$ get no boost, as we expected. Furthermore, both $s$ and $u$ get an equal boost from the upgrade, as will the subsequent variables all the way down to $\xi$.

This leads to an interesting effect where every two psi3 upgrades one of the variable's power stops getting boosted from the upgrade, so we see a line separate from the rest every two jumps:

![Variable Power up to ee50000](/images/variable-power/ee50000.png)

###### Computed every ee1 from ee1 to ee50000. This took a while to run...

And here's a rather interesting plot with the percentage of total power each variable has.

![Percentage variable power up to ee50000](/images/variable-power/ee50000_2.png)

###### Computed every ee1 from ee1 to ee50000.

## Post-Psi3 Variable Power (ee47362+)

We've made it. The end of the supremacy upgrades is upon us. What's next?

Well, now is when $f(t)$ decay really hits. Let's take a look at an updated graph.

![Variable power from ee35000 to ee80000](/images/variable-power/ee80000.png)

###### Computed every ee5 from ee35000 to ee80000.

Immediately after the final supremacy upgrade, we gain a lot less $x$ per $f(t)$. During the psi3 upgrades, we need an average of **$17 f(t)$ for an $e1$ increase in $x$**.

Shortly afterward, during the period up to ~ee52000, $\xi$ is the most powerful variable. Unfortunately for us, its scaling is absolutely terrible, and it takes **$77 f(t)$ for an $e1$ increase in $x$**, around 4.5 times worse than during the psi3 upgrades.

Fortunately, $\xi$ is quickly dethroned by $\eta$, which is the most powerful variable from ee52000 all the way until ee70000 $f(t)$. For $\eta$, it takes **$45 f(t)$ for an $e1$ increase in $x$**. This is the section where all current endgame and top players are.

Finally, at ee70000, $\eta$ is dethroned by $y$, which will remain the strongest variable for the rest of the game. $y$ dominates the endgame because for $y$ it only takes **$22 f(t)$ for an $e1$ increase in $x$**, which is intriguingly close to the $17 f(t)$ the psi3 upgrades offered long ago in our distant past. Currently, all top leaderboard players are in this range thanks to a significant buff to Custom Theories.

Class: strat;
Caption: $F(t)$ Needed to Gain e1 x;

| INVIS  | $F(t)$ needed for<br>e1 x increase | $F(t)$ Range        |
| ------ | ---------------------------------- | ------------------- |
| Psi3   | $ee17$                             | $ee9,160-ee47,362$  |
| $\xi$  | $ee77$                             | $ee47,362-ee52,000$ |
| $\eta$ | $ee45$                             | $ee52,000-ee70,000$ |
| y      | $ee22$                             | $ee72,000+$         |

![y, eta, and xi variable power](/images/variable-power/y_xi_eta.png)

###### A plot with only $y$, $\eta$, and $\xi$ to illustrate the difference in their scaling and where each variable becomes dominant.

## Why We Buy $y$ During Endgame Graduation Recovery

Even before $y$ becomes the most powerful variable, as long as you are past ee48000, you should still buy $y$ during graduation recovery. Why? Well, it has to do with the supremacy equations we begin adopting at ee48000.

At ee48000, the supremacy equation we recommend using skips most of the psi3 supremacy upgrades. In fact, it only supremacies at $e52, e411, e511, e531, e551,$ and $e571d\psi$. It doesn't buy any of the psi3 upgrades until e410$d\psi$. Let's take a look at what that does to the power of the variables:

![Variable power with ee48k supremacy equation](/images/variable-power/ee48k_suprem_formula.png)

###### Computed every ee10 from ee1 to ee50000

Very interesting! So it looks like we should be buying $y$ until the supremacy at e410$\psi$. When we were buying every psi3 upgrade, it wasn't worth buying $y$ because the other variables were stronger than it. However, these variables were only stronger than $y$ because they had been boosted by the psi3 upgrades, none of which affect $y$'s power.

After we reach ee52000, we are recommended to use a new supremacy equation. This equation only supremacies at e52, e511, and e571 $d\psi$. Let's see what that does to the power:

![Variable power with ee52k supremacy equation](/images/variable-power/ee52k_suprem_formula.png)

###### Computed every ee10 from ee1 to ee50000

Once again, it looks like we should be buying $y$ during graduation recovery. This time, we should be buying $y$ until the e510$\psi$ supremacy.

Finally, somewhere between ee58000 and ee60000 (we aren't entirely sure where within this range) we switch to our final supremacy equation. This supremacy equation only supremacies at e52 $d\psi$ and e571 $d\psi$.

![Variable power with ee58-60k supremacy equation](/images/variable-power/ee60k_suprem_formula.png)

###### Computed every ee10 from ee1 to ee50000

There we go! Now we should buy $y$ all the way up to e570$\psi$.

## Additional Graphs

###### Where I put all of the interesting plots that didn't fit well in any section.

**Full Graph**\
The plots of variable power from ee1 to ee75000.

![Variable Power up to ee75000](/images/variable-power/ee75000.png)

###### Computed every ee5 from ee1 to ee75000.

And the plot with percentage of total power for each variable:

![Percentage variable Power up to ee75000](/images/variable-power/ee75000_2.png)

###### Computed every ee5 from ee1 to ee75000.

#### Log Percentage Total Power Plots

More than just the regular percentage total power plots, I also tried logging the percentage so we can see more than just 0% power for almost all of the variables, creating fascinating results. Ignore the initial xi/ $\xi$ line in the first image; it's a remnant that only shows up in these logged plots.

![Logged percentage variable power up to ee120](/images/variable-power/ee120.png)

###### Computed every ee1 from ee1 to ee120.

![Logged percentage variable power up to ee1000](/images/variable-power/ee1000.png)

###### Computed every ee1 from ee1 to ee1000.

![Logged percentage variable power up to ee3000](/images/variable-power/ee3000.png)

###### Computed every ee1 from ee1 to ee3000.

![Logged percentage variable power up to ee20000](/images/variable-power/ee20000.png)

###### Computed every ee1 from ee1 to ee20000.

![Logged percentage variable power up to ee75000](/images/variable-power/ee75000_3.png)

###### Computed every ee10 from ee1 to ee75000.

So many stories told in one plot!
