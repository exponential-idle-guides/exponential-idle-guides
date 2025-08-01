---
title: "Custom Theories"
description: "Our guide for understanding and playing official custom theories."
author: "Playspout and Snaeky"
contributors: "the Amazing Community"
draft: true
order: 8
---
{% import "embed-yt.njk" as yt %}

### Custom Theory Basics

Custom theories are theories made by players in the community. As of March 2025, there are 9 official
custom theories that contribute up to e600 $\tau$ per theory; Weierstrass Sine Product made by Xelaroc (WSP), Sequential Limits by Ellipsis (SL), Euler's Formula by Peanut, Snaeky, and XLII (EF), Convergents to Square Root 2 (CSR2/CS2) by Solarion, Fractional Integration (FI) by Gen and Snaeky, Fractal Patterns (FP) by XLII, Riemann Zeta Function by Prop (RZ), Magnetic Fields by Mathis (MF) and Basel Problem by Python's Koala (BaP). The theories will be abbreviated as WSP, SL, EF, CSR2, FI, FP, RZ, MF and BaP from now on. The choice for a three letter abbreviation for BaP was made to avoid confusion with a previous unofficial custom theory sharing the same initials (Bin Packing).

In order to balance custom theories with the main theories in the endgame, custom theories have a low conversion rate (with two exceptions) from $\rho$ to $\tau$. WSP, SL, CSR2, FI, RZ and BaP have conversion rates of
$\tau$ = $\rho^{0.4}$ while EF has a $\tau$ conversion rate of $\tau$ = $\rho^{1.6}$ and FP with a conversion rate of $\tau$ = $\rho^{0.3}$. Meanwhile, MF is the only custom theory to this day to have $\tau$ = $\rho$.

### Which Custom Theories (CTs) should I do?

In general, you want to be as efficient as possible since R9 does not affect custom theories. If you cannot be active, try not to do an active theory or do an active strategy. Some custom theories are more active than normal theories and it is highly suggested that if you are doing active strategy for a Custom theory (SL or FI before all milestones, MF, CSR2, WSP, or early FP) that you do an idle main theory (such as t2, t4, or t6) so that you don't miss out on $\tau/hour$.

If you have time for active strategies, try to do the CT with the highest active $\tau/hour$, or you can chase a spike in $\tau/hour$, such as EF e50 $\rho$ or FP e95 $\rho$. You can check this with [the sim.](https://exponential-developers.github.io/sim-3.0/)

 For idle time, do the one with the highest idle $\tau/hour$, (or the longest publication time if you're doing overnights), with preference toward EF, SL, BaP, FP past e1050, or FI when you only have 1 milestone to swap. For example, if SL has 2 $\tau/hour$ and CSR2 also has 2 $\tau/hour$, ideally we would pick SL. The reason we prefer SL, EF, FP, FI and BaP is because these theories contain multiple growing variables. This means the theories generally require less babysitting as the variables grow by themselves. The assumption of daytime idle is that we can check and publish a theory every 2 hours or so. If you can only check every 8 hours idle, please see the overnight strategy just above.

![CT Rate vs. $\tau$](/images/ct_rate_graph.png)

###### Graph made by Hackzzzzzz ([Source](https://redd.it/1jv7t75))

### Weierstrass Sine Product (WSP)

#### WSP Overview

The very first official custom theory; WSP was developed by Xelaroc, who also came up with some of the strategies used in the theory. The idea behind the theory is to use the factorization of sine to increase $\rho$. There are multiple equations with this theory, and some may look daunting, so we'll have a look at each one.

#### WSP Equation Description

$\dot{\rho} = q_1^{1.04}q_2q$

$\dot{q} = c_2s_n({\chi}) / sin({\chi})$

$s_n({x}) := x\prod_{k=1}^{n}(1-\frac{x}{k\pi}^2)$

$\chi = \pi\frac{c_1n}{c_1+n/3^{3}}+1$

The first line states that the rate of change in $\rho$ is $q_1^{1.04}q_2q$. Initially it's simply $q_1q_2q$ without any exponent. With milestones we add more exponents.

For the second line, the higher the $\chi$ (spelled 'chi', pronounced as 'kai'), the higher the $s_n({\chi})$. We want to increase $\chi$ by increasing $n$ and $c_1$. The signs of $s_n({\chi})$ and $sin({\chi})$ will always match, so the fraction can't be negative. Additionally, the $c_2$ variable is a milestone which is not initially available.

The third line is the most complicated. Generally we can factorize an equation when its graph touches the x-axis. For a sine curve, it touches the x-axis starting from x = 0, and repeats every x= $\pi$. These multiplied factors form the basis of the Weierstrass Sine Product. A simpler interpretation is that we can see 'x' appearing both outside and inside the products in the numerator. Since $\chi$ is 'x' here, the higher the $\chi$, the higher the $s_n({\chi})$ as stated earlier.

Finally, the actual $\chi$ equation: increasing $c_1$ and $n$ increases $\chi$. Note that from the fraction, we don't want to increase only $c_1$ or only $n$. Rather we should increase both. Using standard strategies this should be no problem. The $n/3^{3}$ part in the denominator is a milestone term. This means that $n$ is better than $c_1$ as more $n/3$ milestones are accumulated.

#### WSP Variable Description

Approximate variable strengths on $\dot\rho$ with all milestones are as follows:

Class: variable_description;
Caption: Brief summary of variable strengths of WSP;
last_row: false;

|       | Variable Description |
| ----- | -------------------- |
| $q_1$ | ~7% increase to $\dot{\rho}$ on average. |
| $q_2$ | Doubles $\dot{\rho}$ (instantaneous). |
| $n$   | Initially ~50% increase similar to $c_1$. Slowly ramps up to 4x increase in $\dot{\rho}$. At $\ge e400\ \rho$, it is very close to a 4x increase. |
| $c_1$ | Initially ~50% increase. Tends to 0% as $\rho$ increases. At $e400\ \rho$, the increase is not noticeable anymore. Early into WSP, still buy them throughout. Late into WSP, only buy for the first ~20 seconds of each publication. |
| $c_2$ | Doubles $\dot{\rho}$. Over time. |

#### WSP Strategy

Early game the variable strengths are ordered as follows:

$q_2\approx c_2\gt n\gt c_1\gt q_1$

Late game these become:

$n\gt q_2\approx c_2\gt q_1\gt\gt\gt c_1$

##### Idle

Before you get e400 $\rho$ for idle, simply autobuy all.

Once you have e400 $\rho$, $c_1$ starts to become extremely bad. Because of this, the new idle strategy would be to autobuy all for 20 seconds or so. Then turn $c_1$ OFF. Continue to autobuy the rest of the variables.

##### Active

For a simple active strategy before e400 $\rho$, simply autobuy $q_2$ and $c_2$ since they double the rates long term. $n$ and $c_1$ give approximately 60% boost (with $n$ becoming more powerful with milestones and vice versa for $c_1$). We will buy $n$ and $c_1$ when their costs are less than 50% of the minimum of $q_2$ and $c_2$.

For $q_1$, we will buy it when its cost is less than 10% of the minimum of $q_2$ and $c_2$. For example, if $q_1$ costs $1.2e100$ and $q_2$ costs $1e101$, we would not buy $q_1$ as it's 'too expensive' compared to $q_2$.

For active strategy, $n$ starts to become more powerful than $q_2$. If their costs are similar, we will prioritize $n$ first. For example, if $n$ costs $1.4e101$ and $q_2$ costs $1.2e101$, we will buy $n$ first. Similarly to the idle strategy, we will buy $c_1$ only for the first 20 seconds or so. If you want more information on the different strategies pertaining to WSP, please see [List of theory strategies](/guides/theory-strategies).

#### WSP Milestone Route

All milestones into the 3rd/last milestone. Then into 2nd milestone, then into 1st milestone.

For milestone swapping, swap all milestones from 2nd and 3rd into 1st milestone. Usually you only do this when you're about to publish.

Class: milestone_routing;
last_row: false;

|       |       |       |       |       |       |       |
| ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| 0/0/1 | ARROW | 0/0/2 | ARROW | 0/0/3 | ARROW | 0/1/3 |
| 1/1/3 | ARROW | 2/1/3 | ARROW | 3/1/3 | ARROW | 4/1/3 |

### Sequential Limits (SL)

#### SL Overview

SL, the second official custom theory, uses a variation of Stirling's formula to approximate Euler's number (e≈2.71828). As upgrades are bought, the approximation becomes more precise, increasing $\dot\rho$ and $\rho$ because $e-\gamma$ approaches 0. As with the first official custom theory (WSP), there are several equations in this theory. Let's explore each one:

#### SL Equation Description

$\dot{\rho}_1 = \frac{\sqrt{\rho_2^{1.06}}}{e - \gamma}$

$\gamma = \frac{\rho_3}{\sqrt[\rho_3]{\rho_3!}}$

$\dot{\rho_2} = a_1a_2a_3^{-ln{\rho_3}}$

$\dot{\rho_3} = b_1^{1.04}b_2^{1.04}$

$a_3 = 1.96$

The first line is the main part of the equation. We want to maximize $\dot{\rho_1}$ to increase $\tau$. The '1.06' exponent is from milestones. The default is no exponent. From the equation, we can see that $\dot{\rho_1}$ is proportional to approximately $\sqrt{\rho_2}$. This means that if we quadruple $\rho_2$, we would approximately double $\rho_1$ long term. The denominator of the fraction has a gamma symbol ($\gamma$) which looks like the letter 'y'. As our $\rho$ increases, our $\gamma$ becomes closer to 'e', so the denominator will decrease, which increases $\rho_1$. We will explore $\gamma$ in the next equation.

The second equation refers to Stirling's approximation of Euler's number '$e$'. As $\rho_3$ increases, $\gamma$ converges to Euler's number. Long term we can approximate this convergence as linear. The implication is if we double $\rho_3$, $\gamma$ will be twice as close to Euler's number, so $e-\gamma$ in the first equation will be halved.

The third equation relates $\rho_2$ with $\rho_3$ and some upgrades. The most interesting part is the exponent part containing $ln({\rho_3})$. The negative exponent actually implies that as $\rho_3$ increases, $\dot{\rho_2}$ DECREASES. If $\rho_3$ is high, $\rho_2$ doesn't grow as fast (it still grows). This has implication on the first equation as well, since $\dot{\rho_1}$ depends on $\rho_2$, which depends on $\rho_3$.

The fourth equation relates $\dot{\rho_3}$ with some upgrades. This one is relatively simple; increase $b_1$ and $b_2$ to increase $\rho_3$. The '1.04' exponents are from milestones.

The final equation simply states the value of $a_3$. The lower the better. Default without milestone is $a_3 = 2$.

#### SL Variable Description

Approximate variable strengths on $\dot\rho$ with all milestones are as follows:

Class: variable_description;
Caption: Brief summary of variable strengths of SL;
last_row: false;

|       | Variable Description |
| ----- | -------------------- |
| $a_1$ | 3x value every 3 levels on average. ~52% increase in $\dot{\rho_2}$ per level. Since $\rho_1\approx\sqrt{\rho_2}$, this comes down to ~23% increase in $\rho_1$ per level overall. |
| $a_2$ | Doubles in value every level. Doubles $\rho_2$ long term. Increases $\rho_1$ by ~40% long term. |
| $b_1$ | 6.5x every 4 levels on average. ~60% increase in $\dot{\rho_3}$. Towards the end of a publication, this translates to ~60% increase in $\rho_1$. |
| $b_2$ | Doubles in value every level. Doubles $\rho_1$ towards the end of a publication. |

#### SL Strategy

All variables in SL are about the same in power, except for $a_1$ and $b_1$ (which are slightly worse than $a_2$ and $b_2$. Selectively buying variables at certain times (active) yields very little results. Therefore, we can get away with autobuy all for idle. Before autobuy, simply buy the cheapest variable. If you want more details on SL strategies, in particular the execution of various strategies, please see [List of theory strategies](/guides/theory-strategies).

#### Milestone swapping - why it works

For active, there is a milestone swapping strategy that is significantly faster than idling (approximately twice the speed). If we carefully examine the effects of each milestone, we can conclude the following:

1st milestone: Increases $\rho_2$ exponent and increases $\dot{\rho_1}$ straight away. The actual value of $\rho_2$ does not increase.

3rd/4th milestone: Increase $b_1$/$b_2$ exponents, and $\dot{\rho_3}$, and $\rho_3$. This also increases $\dot{\rho_1}$. However, the effect is long-term and not instantaneous unlike the effect of the 1st milestone.

We have different milestones which affect the same thing ($\dot{\rho_1}$), but one is instantaneous, while the other builds over time. This forms the basis of 'milestone swapping', swapping milestones at certain times to maximize $\rho_1$ per hour. If you've done T2 milestone swapping, this should be familiar.

We initially put our milestones in the 4th and 3rd milestones. Once our $\rho_3$ doesn't increase quickly anymore, we switch milestones to the 1st one to gain a burst of $\dot{\rho_1}$. Once our $\rho_1$is not increasing quickly anymore, we switch back to the 4th and 3rd milestone!

#### Milestone Swapping Strategies

(Courtesy of Gen).

x>x>x>x represent the max buy order of milestones not the amount allocated.

For example, 4>3>1>2 means "Allocate everything into 4th milestone, then use leftovers into 3rd milestone, then into 1st milestone, then into 2nd milestone".

<u>SLMS</u>
<blockquote style="font-family:monospace;">4>3>1>2 (60s) → 1>2>4>3 (60s*) → repeat</blockquote>

###### * between $e200-e300$, 1>2>4>3 should be 20s.

<u>SLMS2</u>
<blockquote style="font-family:monospace;">1>2>4>3* (30s) → 2>1>4>3* (60s) → 1>2>4>3** (30s) →<br>4>3>1>2** (60s)  → repeat</blockquote>

###### * $b_1$ & $b_2$ turned off.<br>** $a_1$ & $a_2$ turned off.

<u>SLMS3</u>
<blockquote style="font-family:monospace;">2>1>4>3 (20s) → 4>3>1>2 (60s) → repeat</blockquote>

When to use strategies:

until e100: SLMS

e100 - e175: SLMS2

e175 - e200: SLMS3

e200 - e300: SLMS

For a more precise description of SLMS, check out the [theory strategy section](/guides/theory-strategies/#slms).

#### Post e300+ $\rho$

At this point, the theory becomes very idle. We simply autobuy all variables. Publish at approximately 8-10 multiplier. If you wish to improve efficiency, disable $a_1$ & $a_2$ at about 4.5 publication multiplier and $b_1$ & $b_2$ at 6.0 multiplier until publish.

#### SL Milestone Route

##### Idle

<br>

Class: milestone_routing;
last_row: false;

|         |       |         |       |         |       |         |
| ------- | ----- | ------- | ----- | ------- | ----- | ------- |
| 0/0/0/2 | ARROW | 0/0/2/2 | ARROW | 3/0/2/2 | ARROW | 3/5/2/2 |

##### Active

See [SL Milestone Swapping Strategies](/guides/custom-theories/#milestone-swapping-strategies)

### Euler's Formula (EF)

#### EF Overview

This custom theory, along with Convergents to Square Root 2, were released at the same time and is based on Euler's Formula of

$e^{i*\theta} = cos{\theta} + isin{\theta}$, where 'i' is the complex number.

EF is unique, along with FP, in that all the milestone paths are locked, so there's no choice in which milestones to take. This was deliberately done to prevent milestone swapping strategies and to balance the theory. Furthermore, the $\rho$ to $\tau$ conversion for this theory is uniquely at $\rho^{1.6}$ rather than the usual $\rho^{0.4}$ meaning that less $\rho$ is needed to get an equivalent amount of $\tau$. Due to the conversion rate, EF can feel extremely slow in comparison to other theories, but it is the fastest theory to e150 $\tau$ and has the largest instantaneous jump in $\tau$ out of all custom theories.

#### EF Equation Description

$\dot{\rho} = (a_1a_2a_3)^{1.5}\sqrt{tq^2+R^2+I^2}$

$G(t) = g_r+g_i$

$g_r = b_1b_2cos{(t)}, g_i = ic_1c_2sin{(t)}$

$\dot{q} = q_1q_2$

$\dot{R} = (g_r)^2, \dot{I} = -(g_i)^2$

The first line is the main equation. We want to maximize $\dot{\rho}$. All the $a_n$ terms and their exponents are obtained from milestones. Parts of the square root term are also obtained from milestones. Note that the $R^2$ and the $I^2$ terms are effectively redundant at all stages of this theory; but due to them purchasing $a_2$ and $a_3$ respectively, they are very important.

The second line defines the graph shown. Since $G(t)$ is graphed on the complex over time, it is possible to have it show as a particle spiraling through space.

The third line describes $g_r$ and $g_i$, which are used to generate '$R$' and '$I$' currencies. This line by itself doesn't do much.

The fourth line simply describes $\dot{q}$. This is used in the first equation directly.

The fifth and final line use the results from the 3rd line, so effectively $\dot{R} = b_1^{2}b_2^{2}cos^2{(t)}$ and $\dot{I} = c_1^{2}c_2^{2}sin^2{(t)}$

#### EF Variable Description

Approximate variable strengths on $\dot\rho$ with all milestones are as follows:

Class: variable_description;
Caption: Brief summary of variable strengths of EF;
last_row: false;

|           | Variable Description |
| --------- | -------------------- |
| $\dot{t}$ | Makes $t$ increase faster. Since there are only 4 levels, after a certain point, this variable is effectively fixed. |
| $q_1$     | Doubles every 10 levels. ~7% increase in $\dot{\rho}$ per level over time. |
| $q_2$     | Doubles in value every level. Also doubles $\dot{\rho}$ per level over time. |
| $b_1$     | Costs $R$ to buy. ~14% increase in $R$ per level. |
| $b_2$     | Costs $R$ to buy. ~20% increase in $R$ per level. |
| $c_1$     | Costs $I$ to buy. ~14% increase in $I$ per level. |
| $c_2$     | Costs $I$ to buy. ~20% increase in $I$ per level. |
| $a_1$     | Doubles every ~10 levels. Costs $\rho$ to buy. With full milestones, ~11-12% increase in $\dot{\rho}$. |
| $a_2$     | Costs $R$ to buy. Increases 40x every 10 levels. However, note that some levels are more impactful than others, specifically $1\bmod10$. Overall, this variable ranges from 10-700% effectiveness in $\dot{\rho}$. |
| $a_3$     | Costs $I$ to buy. With full milestones, $a_3$ approximately triples $\dot{\rho}$. |

#### EF Strategy

Initially, you only have $\dot{t}$,  $q_1$, and $q_2$ unlocked. Buy $q_1$ at about 1/8th cost of $q_2$, and buy $\dot{t}$ when it's available. At e20 $\rho$ when autobuyers are unlocked, for idle, simply autobuy all. For active, continue to do what you were doing (buying $q_1$ at 1/8th cost of $q_2$). There are also more advanced strategies, in particular EFAI. For its description and execution, please see [List of theory strategies](/guides/theory-strategies).

The first 2 milestones are redundant by themselves. The $R^2$ term and the $I^2$ term are insignificant compared to the $tq^2$ term.
Once you unlock the 3rd milestone ($a_1$ term) however, we can buy $a_1$ at 1/4th of $q_2$ cost.

#### EF Milestone Route

Class: milestone_routing;
last_row: false;

|           |       |           |       |         |
| --------- | ----- | --------- | ----- | ------- |
| 2/0       | ARROW | 2/3/0     | ARROW | 2/3/5/0 |
| 2/3/5/2/0 | ARROW | 2/3/5/2/2 | INVIS | INVIS   |

Class: milestone_routing;
last_row: false;

|      |       |       |       |       |
| ---- | ----- | ----- | ----- | ----- |
| OR   | INVIS | INVIS | INVIS | INVIS |
| 1 x2 | ARROW | 2 x3  | ARROW | 3 x5  |
| 4 x2 | ARROW | 5 x2  | INVIS | INVIS |

### Convergents to Square Root 2 (CSR2)

#### CSR2 Overview

 This custom theory was released at the same time as Euler's Formula. CSR2 is based on approximations of $\sqrt{2}$ using recurrent formulae. As the approximations improve, the $\dot{q}$ and $\dot\rho$ improve, increasing $\tau$. An explanation of each section of the equations is shown below:

#### CSR2 Equation Description

$\dot{\rho} = q_1^{1.15}q_2q$

$\dot{q} = c_1c_2^2 |\sqrt{2} - \frac{N_m}{D_m}|^{-1}$

$N_m = 2N_{m-1} + N_{m-2}, N_0 = 1, N_1 = 3$

$D_m = 2D_{m-1} + D_{m-2}, D_0 = 1, D_1 = 2$

$m = n + log_2{(c_2)}$<br>

The first line is self explanatory. The exponents on $q_1$ are from milestones. '$q$' will increase during the publication.<br>

For the second line, both the variable $c_2$ and its exponents are from milestones. The absolute value section on the right describes the approximation of $N_m$/ $D_m$ to $\sqrt{2}$. As $N_m$/ $D_m$ get closer to $\sqrt{2}$, the entire right section gets larger and larger (because of the -1 power).<br>

The third and fourth lines are recurrence relations on $N_m$ and $D_m$. This means that the current value of $N_m$ and $D_m$ depend on their previous values. We start with $N_0$ = 1, $N_1$ = 3. The equation will then read as:

$N_2 = 2N_1 + N_0 -> N_2 = 2 x 3 + 1 = 7$.

Then $N_3 = 2N_2 + N_1 -> 2 x 7 + 3 = 17$.

Similar logic is applied to $D_m$ equations.

This occurs until we reach $N_m$ and $D_m$ reach whatever 'm' values we have. This is shown in the next equation:

The fourth equation relates 'm' as described above. We can see that as we buy $n$ and $c_2$, our $m$ will increase, so the 2 recurrence equations above will 'repeat' more often and $N_m$, $D_m$ will increase. From how $n$ and $c_2$ values are calculated, buying 1 level of $n$ or $c_2$ will increase $m$ by 1.

#### CSR2 Variable Description

Approximate variable strengths on $\dot\rho$ with all milestones are as follows:

Class: variable_description;
Caption: Brief summary of variable strengths of CSR2;
last_row: false;

|       | Variable Description |
| ----- | -------------------- |
| $q_1$ | ~7% increase in $\dot{\rho}$ (instantaneous). |
| $q_2$ | Doubles $\dot{\rho}$ (instantaneous). |
| $c_1$ | ~7% increase in $\dot{\rho}$ (not instantaneous). This is the weakest variable. |
| $n$   | 6x increase in $\dot{\rho}$ long term (not instantaneous). |
| $b_2$ | ~22x increase in $\dot{\rho}$ (not instantaneous). This is the strongest variable by quite a lot. |

#### CSR2 Strategy

##### Idle

For idle, autobuy all. The idle strategy doesn't change much. If you wouldd like to be more efficient while still being idle, remove milestones and stack them into the $q$ exponent milestones when you are about to publish (from around e80 to e500). Don't forget to change milestones back after publishing!

Once all milestones are unlocked, autobuy all!

##### Active

The active strategies are significantly more involved. Depending on how active you would like to be, there are several potential strategies. There's the standard doubling chasing [CSRd](/guides/theory-strategies/#csr2d), which is just autobuy all except $c_1$ and $q_1$, where you buy them when they are less than 10% cost of minimum($c_2$, $q_2$, and $n$).

For the milestone swapping strategy, the general idea is to switch milestones from $c_2$ and its exponents, to $q_1$ exponent milestones whenever we are 'close' to a powerful upgrade. Please see the [Theory Strategies](/guides/theory-strategies/#csr2xl-xxx) section of the guide for how to perform milestone swapping.

##### CSR2 Milestone Swapping Explanation

This theory has a milestone swapping strategy before full milestones. We have $q_1$ exponent milestones, which increase $\dot\rho$ straight away. We also have $c_2$ related milestones, which increases the $q$ variable, which increases $\dot\rho$.

The reason milestone swapping works is because the benefits of using $c_2$ related milestones (having high $q$) remain when you switch to $q_1$ exponent milestones. If we only use $q_1$ exponent, then we have really low $q$. If we only use $c_2$ related milestones, then we have high $q$, but low $\dot\rho$. If we regularly swap them, we can increase $q$ through $c_2$ related milestones, then take advantage of the $q_1$ exponent milestones, while keeping the high value of $q$ we've accumulated earlier!

For a more detailed explanation on how to actually do the strategy, please see the [Theory Strategies](/guides/theory-strategies/#csr2xl-xxx) section of the guide.

#### CSR2 Milestone Route

Class: milestone_routing;
last_row: false;

|       |       |       |       |       |
| ----- | ----- | ----- | ----- | ----- |
| 0/1/0 | ARROW | 0/1/2 | ARROW | 3/1/2 |

Class: milestone_routing;
last_row: false;

|    |       |       |       |       |
| -- | ----- | ----- | ----- | ----- |
| OR | INVIS | INVIS | INVIS | INVIS |
| 2  | ARROW | 3 x2  | ARROW | 1 x3  |

### Fractional Integration (FI)

#### FI Overview

This custom theory was released at the same time as Fractal Patterns. FI is based on [Riemann–Liouville Integrals](https://en.wikipedia.org/wiki/Riemann%E2%80%93Liouville_integral) and allows you to approach the full integral as the fraction approaches 1. An explanation of each section of the equations is shown below:

#### FI Equation Description

##### Base Equation

$$\dot{ \rho }=tr\sqrt[ \pi ]{q/ \pi },\ \ \dot{q}=q_1q_2$$
$$\dot{r}=( \int_{0}^{ \pi }g(x)dx - _{ \lambda }\int_{0}^{ \pi }g(x)dx^{ \lambda } )^{-1}$$
$$\lambda \int_{0} ^ { \pi }g(x)dx^{ \lambda } = \frac{ 1 }{ \Gamma( \lambda ) } \int_{0} ^ {\pi}{( \pi - x )^{ \lambda - 1 }g( x ) } dx$$

With $\dot\rho$ and $\dot{q}$ Equations Becoming:

$$\dot{ \rho }=trmn\sqrt[ \pi ]{ \int_{0}^{ q/ \pi }g(x)dx },\ \ \dot{ \rho }=trmn\sqrt[ \pi ]{ \int_{0}^{ q }g(x)dx }$$
$$\dot{q}=q_1^{1.03}q_2$$

Class: strat;
Caption: $g(x)$ Equations;
last_row: false;

|   |   |
| - | - |
| Milestone 0 | $1-\frac{x^2}{2!}+\frac{x^4}{4!}$ |
| Milestone 1 | $x-\frac{x^3}{3!}+\frac{x^5}{5!}$ |
| Milestone 2 | $\frac{x-\frac{x^2}{2}+\frac{x^3}{3}-\frac{x^4}{4}+\frac{x^5}{5}}{\ln(10)}$ |
| Milestone 3 | $1+x+\frac{x^2}{2!}+\frac{x^3}{3!}+\frac{x^4}{4!}+\frac{x^5}{5!}$ |

Class: strat;
Caption: $\lambda$ Equations;
last_row: false;

|   |   |
| - | - |
| Milestone 0 | $\lambda=\frac{1}{2}$ |
| Milestone 1 | $\sum_{i=1}^{K}\frac{2}{3^{i}}$ |
| Milestone 2 | $\sum_{i=1}^{K}\frac{3}{4^{i}}$ |

 The first equation is for $\rho$, which starts off simple, but gets more complicated as more milestones are reached and perma-upgrades are purchased. Initially, $\rho$ is fairly simple to calculate as $\dot{r}$ is just $1/2$, $\dot{t}$ is just the $t$ variable, and the $\sqrt[\pi]{}$ radical is just $\dot{q}$/$\pi$ where $\dot{q}$ is just $q_1 * q_2$. However, once $g(x)$ is added to the $\dot{\rho}$ equation, the $\sqrt[\pi]{}$ radical becomes $\int_{0}^{q/\pi} g(x) \,dx$ which can be estimated by raising $q$ to the highest power of $g(x)$ by 1 and upon maxing out the $g(x)$ milestone, it becomes $\int_{0}^{q} g(x) \,dx$. The variables $m$ and $n$ are simple multipliers that do not change over time without purchasing them with $\rho$.

<br>

The second equation is for $\dot{r}$, which seems simple at first, but gets more difficult to understand once we get to the fractional integral. The notation in game is rarely used, but it is used to save space. Tapping and holding the equation will give the full equation. When $K$ increases, the fractional integral approaches 1, which makes the fractional integral get closer to, yet still smaller than, the full integral. By subtracting the two, then dividing 1 by the difference, we get a very large number.

#### FI Variable Description

Approximate variable strengths on their respective vardots with all milestones are as follows:

Class: variable_description;
Caption: Brief summary of variable strengths of FI;
last_row: false;

|       | Variable Description |
| ----- | -------------------- |
| $q_1$ | 50x increase every 23 levels. levels$\equiv0\mod23$ are 2.6x to $\dot{q}$. |
| $q_2$ | Doubles $\dot{q}$ per level (instantaneous). |
| $K$   | 2x, 3x, or 4x increase to $\dot{r}$ depending on $\lambda$ milestones. |
| $m$   | 1.5x increase to $\dot{\rho}$ (instantaneous). |
| $n$   | 3x increase to $\dot{\rho}$ every 11 levels (instantaneous). |

#### FI Strategy

##### Idle

For idle, autobuy all. The idle strategy doesn't change much other than not doing Milestone Swap. If you are able to check in every 30 minutes or so, manually buy $q_1$ and $n$. Make sure that to autobuy $q_1$ when close to getting a $\bmod23$ boost.

##### Active

The active strategies are a bit more involved. Depending on how active you would like to be, there are several potential strategies. There's the standard doubling chasing [FId](/guides/theory-strategies/#fid), which is just autobuy all except $q_1$ and $n$, where you buy them when they are less than 10% cost of minimum($q_2$, $K$, and $m$).

For the milestone swapping strategy, the general idea is to switch milestones from $q_1$, to $m$/$n$ milestones whenever we gain 3x to $q$ after purchasing $q_2$, or some gain adjusted for $\dot{q}$ from purchasing $q_1$. Please see the [Theory Strategies](/guides/theory-strategies/#fimsd) section of the guide for how to perform milestone swapping.

##### FI Milestone Swapping Explanation

This theory has a milestone swapping strategy before full milestones. We have $q_1$ exponent milestones, which increases $\dot{q}$.

The reason milestone swapping works is because the benefits of using $q_1$ related milestones (having high $q$) remain when you switch to $m$ and $n$ milestones. If we only use $q_1$ exponent, then we have really high $q$, however, we don't have the benefits to $\dot\rho$ that $m$ and $n$ provide. If we only use $m$ and $n$ milestones, then we have low $q$, but have normal $\dot\rho$. If we regularly swap them, we can increase $q$ through the $q_1$ milestone, then take advantage of the $m$ and $n$ milestones to gain $\rho$, while keeping the high value of $q$ we've accumulated earlier!

For a more detailed explanation on how to actually do the strategy, please see the [Theory Strategies](/guides/theory-strategies/#fims) section of the guide.

#### FI Milestone Routing Explanation

In FI, you can unlock milestones in 2 ways:

1) by gaining $\rho$ like normal, or
2) by purchasing the milestone upgrades for $\lambda$ and $g(x)$ in the permanent upgrades tab where you would normally buy publishing, buy all, and autobuy.

Buying the milestone upgrades will **not** give you a milestone, but will instead increase the max level of the milestone that you purchased the upgrade for. For example, if you buy the $g(x)$ perma-upgrade for lvl 1, you will permanently unlock the first lvl of the $g(x)$ milestone. Moving milestones into these are **almost** always the best thing you can do mid publish, even if you need to sacrifice a variable to do so, with one exception.

It is important to note, however, is that buying or refunding $g(x)$ milestones will reset your $q$, $q_2$ level and will change the $q_2$ cost function. Similarly, buying or refunding $\lambda$ milestones will reset your $K$ and change the $K$ cost function.

FI perma-upgrades are at 1e100, 1e450, and 1e1050 $\rho$ for the $g(x)$ milestone and 1e350 and 1e750 $\rho$ for the $\lambda$ milestone. Upon buying these milestone, immediately put a milestone from $q_1$ or $n$ into them depending on how many milestone you have, **except for the 3rd level of the $g(x)$ milestone**.

The 3rd level of the $g(x)$ milestone is bad early on, and is only worth buying at e1076ρ. Swapping to the 3rd level of the $g(x)$ milestone mid-pub is known as PermaSwap, check the [theory simulator](https://exponential-developers.github.io/sim-3.0/) to know if you should do this strategy.

#### FI Milestone Route

###### <span style="color: var(--palette-stroke-warning);">Colored milestones</span> are perma-upgrade milestones that move into that upgrade.

Class: milestone_routing;
last_row: false;

|                   |       |             |       |                   |       |         |
| ------------------| ----- | ----------- | ----- | ----------------- | ----- | ------- |
| 1                 | ARROW | 1/1         | ARROW | 1/1/0/1           | ARROW | 1/1/0/2 |

Class: milestone_routing;
last_row: false;

|                    |       |             |       |                    |
| ------------------ | ----- | ----------- | ----- | ------------------ |
| [PERM;]1/1/0/1/1   | ARROW | 1/1/0/2/1   | ARROW | 1/1/1/2/1          |
| [PERM;]1/1/0/2/1/1 | ARROW | 1/1/1/2/1/1 | ARROW | [PERM;]1/1/0/2/2/1 |
| 1/1/1/2/2/1        | ARROW | 1/1/2/2/2/1 | ARROW | [PERM;]1/1/1/2/2/2 |
| 1/1/2/2/2/2        | ARROW | 1/1/3/2/2/2 | ARROW | [PERM;]1/1/2/2/3/2 |
| 1/1/3/2/3/2        | INVIS | INVIS       | INVIS | INVIS              |

Class: milestone_routing;
last_row: false;

|              |       |              |       |              |
| ------------ | ----- | ------------ | ----- | ------------ |
| OR           | INVIS | INVIS        | INVIS | INVIS        |
| 1            | ARROW | 2            | ARROW | 4 x2         |
| [PERM;]5 x1*  | ARROW | 4            | ARROW | 3            |
| [PERM;]6 x1** | ARROW | 3            | ARROW | [PERM;]5 x1** |
| 3 x2         | ARROW | [PERM;]6 x1** | ARROW | 3 x2         |
| [PERM;]5 x1** | ARROW | 3            | INVIS | INVIS        |
| | | | | [FOOT;]* Move 1 level of 4 to buy perma-upgrade.     |
| | | | | [FOOT;]** Move 1 level of 3 to buy perma-upgrade.    |

Class: strat;
Caption: Perma-Upgrade Costs;
align: left;

|                      |                                  |
| -------------------- | -------------------------------- |
| $g(x)$ milestones    | $e100\rho, e450\rho, e1050\rho$  |
| $\lambda$ milestones | $e350\rho, e750\rho$             |

### Fractal Patterns (FP)

#### FP Overview

 This custom theory was released at the same time as Fractional Integration. FP is a theory that takes advantage of the growth of the 3 fractal patterns: Toothpick Sequence $T_n$, Ulam-Warburton cellular automaton $U_n$, Sierpiński triangle $S_n$. As each of the fractals grows, so does $\tau$. An explanation of each section of the equations is shown below:

#### FP Equation Description

##### Main Equations

$$\begin{eqnarray}
\dot{\rho} = c_1c_2tT_n^{7} \to \dot{\rho} = c_1c_2qtT_n^{7} \\
\to \dot{\rho} = c_1c_2qrtT_n^{7} \to \dot{\rho} = c_1c_2qrtT_n^{5+s}
\end{eqnarray}$$

$$\dot{q} = q_1AU_n^{7}/1000 → \dot{q} = q_1AU_n^{7+s}/1000$$

$$\begin{eqnarray}
\dot{r} = r_1(T_nU_n)^{\log(n)}S_{\lfloor \sqrt{n} \rfloor} \\
\to \dot{r} = r_1(T_nU_n)^{\log(n)}S_{\lfloor \sqrt{n} \rfloor}^{2.8} \\
\to \dot{r} = r_1(T_nU_n)^{\log(\sqrt{2U_n})}S_{\lfloor \sqrt{n} \rfloor}^{2.8}
\end{eqnarray}$$

$$A=(2-U_{q_2}/T_{q_2})^{-1}$$

The first equation is for $\rho$, which is the product of $c_1 c_2 qr$ and the fractal term $T_n^{7}$, where $T_n$ is the nth term of the Toothpick Sequence shown below. Its exponent starts at 7, but when you unlock the $s$ milestone, it will change to $5+s$, where $s$ is an upgrade.

The $\dot{q}$ equation is similar, but depends on Ulam-Warburton Cellular Automaton $U_n$ instead. Its exponent starts at 7, and changes to $7+s$ when you unlock the $s$ milestone, meaning this milestone has no drawback to $q$ unlike $\rho$.

$q$ growth also depends on the $A$ term, which itself depends on $q_2$. For the exact formula, if $k$ is the level of $q_2$, then $A=(2^{2k+1}+1)/3$. This means that each level of $q_2$ tends to a x4 increase to $\dot{q}$.

The $r$ equation depends on all fractals available in FP.

##### Toothpick Sequence
$$T_{2^k+i}=\frac{2^{2k+1}+1}{3}, \text{if } i = 0$$
$$T_{2^k+i}=T_{2^k}+2T_i + T_{i+1}-1,   \text{if } 1 \leq i \lt 2^k$$

This is the Toothpick Sequence. We can't really explain it without getting technical, but this sequence grows as $n$ grows. It is important to note that it grows faster right before a new power of two, and slower right after a power of two. This trait is shared with the next fractal. These $n=2^k$ spikes have **a lot** of influence on the theory speed, especially on the second half of it.

If you want to learn more about the Toothpick Sequence, you can search about it on the internet. You can find an animation of the fractal [here](https://oeis.org/A139250/a139250.anim.html).

##### Ulam-Warburton Cellular Automaton
$$\\u_0 = 0,\ u_1 = 1,\ \dots,\ u_n=4(3^{w_{n-1}-1})$$
$$\\w_n = n-\sum_{k=1}^{∞}\left\lfloor\frac{n}{2^k}\right\rfloor$$
$$\\U_n = \sum_{i=0}^n u_i$$

These equations are used to describe the Ulam-Warburton Cellular Automaton ($U_n$). This is the second main fractal used in FP. Like $T_n$, it grows faster right before a new power of two, and slower right after a power of two.

The $w_n$ equation can look intimidating, but it is simpler to explain than some of the other formulas. $w_n$ is the Hamming weight of the binary representation of $n$, which is the number of 1s that appear in its representation. Right before a power of two, a number has a lot of 1s on the left of its binary representation, which means $w_n$ is higher, and as such $U_n$ grows faster with $n$. The opposite is true for right after a power of two.

You can find an animation of the fractal [here](https://oeis.org/A139250/a139250.anim.html) after selecting it in "Main sequence".

##### Sierpiński Triangle
$$S_n = 3^{n-1} → S_n = 2*3^{n-1}-1$$

This is probably the most famous fractal used in FP. It can be obtained from an equilateral triangle, by recursively subdividing each triangle into 4 smaller identical triangles and removing the middle one. Its formula is much simpler than the other two fractals.

#### FP Variable Description
Approximate variable strengths on $\dot\rho$ with all milestones are as follows:

Class: variable_description;
Caption: Brief summary of variable strengths of FP;
last_row: false;

|           | Variable Description |
| --------- | -------------------- |
| $\dot{t}$ | Makes $t$ increase faster. Since there are only 4 levels, after a certain point, this variable is effectively fixed. |
| $c_1$     | 150x increase in $c_1$ over 100 levels for $\bmod100$. |
| $c_2$     | Doubles $\dot{\rho}$ per level (instantaneous). |
| $q_1$     | ~10x increase in $\dot{q}$ over 10 levels for $\bmod10$ (don't ask). |
| $q_2$     | Quadruples $\dot{q}$ except for the first few levels. |
| $r_1$     | ~10-20% increase in $\dot{r}$ every level. ~2x over $\bmod5$ (don't ask again). |
| $n$       | $n$ makes the fractal grow and helps $\rho$, $q$, and $r$ growth. $n$ is very strong when getting a power of 2, but weaker right after. |
| $s$       | $s$ is additive to $T_n$ and $U_n$ exponents. Usually $+0.15$ per level, but increases to $+0.2$ from level 33 to 40. $s$ is the strongest purchase following $n=2^k$. |

#### FP Strategy

Check out the [FP Quick Purchase Tester](https://drive.google.com/drive/folders/1xOpJepkZZVpuk0QEnIVt3ejquGKR09co) for vari­able checks mid-pub­lic­a­tion.

##### Idle

For idle, we simply autobuy all, however, it is very slow to start idle, and it is suggested to be active until e950 $\rho$. The idle strategy doesn't change much. If you'd like to be more efficient while still being idle, you can stop buying when $c_1\equiv50\mod100$, or around when the last 2 digits in the level are 50 or more, then buy them in chunks of no more than 13. When you reach e700, you will need to milestone swap to be able to get any good progress, however, you only need to swap every 20-30 minutes to get some good results.

Once you have all milestones, autobuy all!

##### Active

The active strategies change constantly depending on your milestones and there is no definitive active strategy like most other actives that we know of currently due to the complexity of the theory. For example, exact ratios of when to buy variables are very difficult to find and the only known buying strategy is between c1 and c2. However, generally you can follow this order of buying $s\gt n=q_2\gt c_2\ge c_1\gt q_1\gt r_1$ but the longer your publish goes, the weaker q2 gets overall and will eventually become less valuable than c2. There are also edge cases where $q_1\equiv0\mod10$ and $q_1$ may be stronger than $c_1$, which may be mid $\bmod100$ cycle. The variable relationships are as follows:

<u>$c_1$ and $c_1$ Buying</u>

**Buying $c_1$ effeciently is the largest boost to rates you can do** (outside of MS).

The only known ratio currently is $c_1$ to $c_2$ and, specifically, it is $c_1$ price $\lt3/(\text{lvl}\%100+2)*c_2$ price. But, for a more digestible strategy, you would want to:

When c1 mod 100 is $\lt92$, buy $c_1$ if $c_1$ is $(c_1\bmod100)$ times cheaper than $c_2$. When $c_1\%100\ge92$, wait until the sum to buy up to $c_1\equiv1\mod100$ is cheaper than $c_2$. Buy $c_1$ upgrades as they become available.

More human way to do the second part is this: when $c_1\equiv91\mod100$, switch to buying x10, then see the cumulative price to get $c_1\equiv1\mod100$, and if that is below $c_2$ - it is time to buy $c_1$ up to $c_1\equiv1\mod100$ using autobuy.

Note: the actual ratio for part 1 is actually $(c1\bmod100)+0.67$, but that's harder to play as a human.

<u>$q_1$ and $q_2$ Buying</u>

$q_1$ follows a $\bmod10$ cycle, and adds ~100%, then ~50%, then ~33% and so on to $\dot{q}$. $q_2$ always quadruples the $\dot{q}$ (except the first few purchases).

This plays roughly like doubling chase, but in this case you have to adjust ratios slightly - for example, if $q_1\equiv0\mod10$, you want to wait until $q_1$ upgrade price is twice as cheap as $q_2$, and so on.

###### Other variables and what to do about them.

$s$ - always buy on sight.
$n$ - buy after $s$.
$r_1$ - check how much percentage increase it will give to $\dot{r}$, and then buy like normal doubling chase, autobuying is also fine.

Overall, We have $s$, $n$, $c_2$, and $q_2$, then $c_1$, $q_1$, and $r_1$. The latter work roughly like doubling chase to the former most of the time, with additions of what was said about them beforehand.

##### FP Milestone Swapping Explanation

FP has a milestone swap that involves 1 milestone. This is the milestone that adds s as an exponent ($e700\rho$). The swap arises from the idea that initially, Tn power drops from 7 to 5 + s in the $\rho$ equation, and s is less than 2. Because of this, it makes sense to swap this milestone in for $q$ growth, and swap it out for $\rho$ growth.

The swap is really hard to describe in terms of how long to keep it in and out but what can be said qualitatively:

- At first, you follow very fast swaps to recover $\rho$, and swaps gradually become slower and slower.
- As $s$ grows, it makes sense to keep the milestone swapped in longer.

Milestone swap ends when $s\gt2$, and dies out when you can recover to that point very fast. Past ~$e950\rho$, recovery takes ~1-3 minutes of idle time.

Milestone swap saves a LOT of time.

#### FP Milestone Route

Class: milestone_routing;
last_row: false;

|     |       |       |       |         |
| --- | ----- | ----- | ----- | ------- |
| 2   | ARROW | 2/2   | ARROW | 2/2/3/1 |

Class: milestone_routing;
last_row: false;

|           |       |             |       |             |
| --------- | ----- | ----------- | ----- | ----------- |
| 2/2/3/1   | ARROW | 2/2/3/1/1   | ARROW | 2/2/3/1/1/1 |

Class: milestone_routing;
last_row: false;

|      |       |       |       |       |
| ---- | ----- | ------| ----- | ----- |
| OR   | INVIS | INVIS | INVIS | INVIS |
| 1 x2 | ARROW | 2 x2  | ARROW | 3 x3  |
| 4    | ARROW | 5     | ARROW | 6     |

FP Guide written by Snaeky, Hotab and Mathis S.

### Riemann Zeta Function (RZ)

#### RZ Overview

This Custom Theory was the first solo launch CT since SL (has it really been over 2 years!). RZ is a very fast CT with a completion time estimated below 70 days! The theory follows the Zeta function over the critical line. Rumors say that reaching 1e1500 will be a proof of the Riemann Hypothesis, or if you prove it yourself, we will just give you the $\rho$.

Its strategies range a lot in comparison to other theories, however, RZ is not an idle theory at first and you must be active before about e700 $\rho$ due to its short publications. It also has a milestone swapping phase from e50 to e400 $\rho$. After e600, the entire dynamic of the theory changes with the inclusion of the black hole.

#### RZ Equation Description

$$\dot{\rho}=\frac{t{\mkern 1mu}c_1^{1.25}c_2w_1}{|\zeta(\frac{1}{2}+it)|/2^{b}+10^{-2}}$$

$$\dot{\delta}=w_1w_2w_3\times|\zeta '(\textstyle\frac{1}{2}+it)|^b$$

<br>

These two equations follow the analytic continuation of the Riemann Zeta function along the critical $1/2 + it$ line, where all the "non-trivial" zeros of this function should be located according to the Riemann Hypothesis.

The background animation of the CT helps to understand the behavior of the $\zeta$ along the critical line. You can see the background as the complex plane, with the middle point being zero, and the particle following the value of $\zeta$ at the given $t$. The further the particle is from the origin, the higher $|\zeta(\frac{1}{2}+it)|$ is. The faster the particle travels, the higher $|\zeta '(\textstyle\frac{1}{2}+it)|$ is.

This particle describes spirals, and passes by the origin at each of its turns.

We can see in the $\dot{\rho}$ equation that $|\zeta(\frac{1}{2}+it)|/2^{b}+10^{-2}$ is on the denominator, which means $\rho$ grows faster when $\zeta(\frac{1}{2}+it)$ is close to zero. The $10^{-2}$ term prevents $\dot{\rho}$ from exploding at each zero. The $2^{b}$ term helps the growth of $\rho$ when $\zeta(\frac{1}{2}+it)$ is away from zero.

$\delta$ grows faster as $|\zeta '(\textstyle\frac{1}{2}+it)|$ is higher.

<br>

#### RZ Variable Description
Approximate variable strengths on $\dot\rho$ with all milestones are as follows:

Class: variable_description;
Caption: Brief summary of variable strengths of RZ;
last_row: false;

|       | Variable Description |
| ----- | -------------------- |
| $c_1$ | Doubles every 8 levels. Boosts $\dot{\rho}$ (instantaneous). |
| $c_2$ | Doubles $\dot{\rho}$ per level (instanteous). |
| $w_1$ | Doubles every 8 levels. Boosts $\dot{\rho}$ and $\dot{\delta}$ (instantaneous). Bought with $\delta$. |
| $w_2$ | Doubles $\dot{\delta}$ per level (instanteous). Bought with $\delta$. |
| $w_3$ | Doubles $\dot{\delta}$ every $e30\delta$ starting at $e600\delta$. Bought with $\delta$. |
| $b$   | Boosts $\dot{\rho}$, when $\zeta$ is away from zero, and $\dot{\delta}$. $b$ is capped at 6 levels maxed at 3 (+0.5/lvl). |

#### RZ Strategy

##### Pre-e600 $\rho$

The optimal publication multiplier is around 2-4 before e50 $\rho$ and 4-8 after, but can vary if you are close to the next milestone. As always, you can check with [the sim](https://exponential-developers.github.io/sim-3.0/).

##### Idle

For idle, we simply autobuy all. The idle strategy doesn't change much. If you'd like to be more efficient while still being idle, you can remove milestones and stack them into the $c_1$ exponent milestones when you're about to publish (from e50 to e400). Don't forget to change milestones back after publishing!

Once you have all milestones, autobuy all!

Also check out [A Pos­sible Idle RZ The­ory By Time](/guide-extensions/rz-black-hole) for more in-depth look at idle RZ strategies.

##### Active

For an active buying strategy, buy $c_1$ and $w_1$ and a 4x difference to $c_2$ and $w_2$ respectively. Read the next section for the milestone swapping strategies.

##### RZ Milestone Swapping Explanation

From e50 to e400 $\rho$, you will swap from 2>3>1 for recovery to 2>1>3 (explanation for this notation can be found [here](/guides/theories-1-4/#t2-strategy)) for pushing $\rho$ once you get e3 away from recovery. [The sim](https://exponential-developers.github.io/sim-3.0/) can tell you when you should perform this swap.

For a more active recovery, you can swap from 2>3>1 to 2>1>3 when you are near or are at a 0. This strategy is known as SpiralSwap. This is extremely hard and may slow down progress if you are not accurate/fast enough.

##### Post-e600 $\rho$

Black Hole (BH) is not a normal milestone. Once you get BH, you will get 2 new buttons added to your theory, one on the bottom right of your equation screen that looks like a black hole; and one on the top right next to your publish button that looks like a back arrow. The back arrow button will reduce $t$ by 5 and will move $\zeta$ back to where it was at that $t$. The BH button will bring up the BH menu. In the BH menu you can set a value where you want BH to activate relative to $t$ and the game will automatically activate BH, or you can activate it manually at any time by pressing the "Unleash a black hole" button.

When BH is unleashed, $t$ gets set back and frozen at the last 0 it encountered. For example, when $\zeta$ crosses 0 at $14.15t$, that 0 is saved, if you Unleash BH after $14.15t$ and before the next 0 ($21.025t$), $t$ will be locked to $14.15$ and $\zeta'$ will be locked at the value it was at at $14.15t$.

Once you get Black Hole (BH), you will use it to push both $\rho$ to get to a good zero. Good zeros are zeros where $\zeta'$ is higher than all other local zeros. For example, all zeroes from $14.15t$ to $25.025t$ either have less $\zeta'$ or have a lower $t$:$\zeta'$ ratio. We want as much $\zeta'$ as possible because we can now permanently maximize the $\zeta$ function for $\dot{\rho}$. We also want a good $t$ value for our publication.

To know which zero to use, please use the [the sim](https://exponential-developers.github.io/sim-3.0/). It will output the exact $t$ of the zero to use.

**Always set your BH activation threshold to 0.01 above the value recommended by the sim to ensure that the Black Hole will correctly lock to your zero**. For example, if it recommends t=3797.85, put your activation threshold to 3797.86.

The optimal publication multiplier is often 5, but it is sometimes higher depending on the zero used or if you get a new $w_3$ during the publication. Check the sim to know the optimal multiplier for your publication.

Variable buying strategies stay the same as before.

**Don't forget to buy the $w_3$ permanent upgrade after reaching e1000ρ!** The first level of $w_3$ will not be available right away, so you can buy the permanent upgrade at the end of the pub.

#### RZ Milestone Route

Class: milestone_routing;
last_row: false;

|       |       |       |       |       |       |         |
| ----- | ----- | ----- | ----- | ----- | ----- | ------- |
| 0/1/0 | ARROW | 0/1/1 | ARROW | 3/1/1 | ARROW | 3/1/1/1 |

Class: milestone_routing;
last_row: false;

|    |       |   |       |       |       |       |
| -- | ----- | - | ----- | ----- | ----- | ----- |
| OR |       |   |       |       |       | INVIS |
| 2  | ARROW | 3 | ARROW | 1 x3  | ARROW | 4     |

### Magnetic Fields (MF)

MF Guide written by Mathis and Eylanding.

#### MF Overview

MF was released on March 10th, 2025, alongside BaP. MF is the first physics-inspired official CT, specifically Electromagnetism.

MF has a unique mechanic called "particle reset", a form of partial publication where you reset $x$ to zero but increase $v_x$, $v_y$ and $v_z$ with the $v_i$ variables you bought in-between. This mechanic acts like a second prestige layer.

The existence of this mechanic makes MF a very active custom theory at first, however it quickly slows down to longer publications where resets later in a publication take several hours to recover, offering idle breaks.

While MF slows down quickly, regular milestones sustain its rates, making it completable in a bit over 6 months.

#### MF Equation Description

$$\dot{\rho}=C{c_1}{c_2}{\omega^{4.4}}{x^{3.4}}{v^{1.92}}$$
$$v=\sqrt{v_x^2+v_y^2+v_z^2}$$
$$x={v_x}{t_s}$$
$$B=\mu_0I\delta$$
$$\omega=\frac{q}{m}B$$
$${v_x}=[v_1v_2\times 10^{-20}](t_s=0)$$
$${v_y}=[v_3v_4\times 10^{-18}](t_s=0)\times\sin(\omega t_s)$$
$${v_z}=[v_3v_4\times 10^{-18}](t_s=0)\times\cos(\omega t_s)$$
$$\dot{I}=\frac{a_1^{1.01}}{400}\left(10^{-15}-\frac{I}{a_2}\right)$$

The MF equations describe the movement of a particle of constant mass $m$ and constant charge $q$ inside a charged solenoid of infinite length with a current $I$ and a density of turns $\delta$, creating a magnetic field $B$.

We consider a simulation where the particle starts at $x=0$ at $t_s=0$ with an initial velocity given by the $v_i$ variables. In these conditions, the particle has a helix trajectory with a constant $x$ velocity, and an angular velocity $\omega$. 
As you can see, the equations for velocity include $(t_s=0)$, which means here that the equation only updates when $t_s=0$, that is when doing a "particle reset". As such, buying $v_i$ variables will have no effect until you perform a "particle reset" where the simulation is reset ($t_s$ and $x$ are set to 0), so that the initial velocity can be applied again.

The current is given by the last formula. The equation is very similar to that of T5, but different. Here, $I$ is capped at $a_2\times 10^{-15}$, and $a_1$ only affects the growth speed of $I$. 

Unlike in Theory 5, buying $a_2$ has no drawback as it does not appear in the denominator below $a_1$. 

The current increases $B$ which itself increases $\omega$.

Finally, $\rho$ growth is affected by variables $c_1$ and $c_2$, the position $x$ of the particle, its angular velocity $\omega$ and its total velocity $v$, calculated as $\sqrt{v_x^2+v_y^2+v_z^2}$. Because $\sin^2(\theta)+\cos^2(\theta)$ is always 1, $v$ is independent of time. $C$ is an adjustment constant that compensates the parameters being less than one, it only changes with milestones by an amount indicated in-game.

#### MF Variable Description

Approximate variable strengths on $\dot\rho$ with all milestones are as follows:

Class: variable_description;
Caption: Brief summary of variable strengths of RZ;
last_row: false;

|          | Variable Description |
| -------- | -------------------- |
| $c_1$    | Doubles every 7 levels. Boosts $\dot{\rho}$ (instantaneous). |
| $c_2$    | Doubles $\dot{\rho}$ per level (instanteous). |
| $a_1$    | Doubles every 7 levels. Boosts $\dot{I}$ (instantaneous). |
| $a_2$    | 1.25x increase to $I$'s cap resulting in ~2.5x total boost upon reaching cap. |
| $\delta$ | ~1.5x increase to $\dot{\rho}$ (instantaneous). |
| $v_1$    | Doubles every 10 levels. Increases $v_x$ increasing $x$ growth and $v$. Only effective after a particle reset. |
| $v_2$    | 1.3x increases to $v_x$ increasing $x$ growth and $v$. Only effective after a particle reset. |
| $v_3$    | Doubles every 10 levels. Increases $v_y$ and $v_z$ increasing $v$. Only effective after a particle reset. |
| $v_4$    | Increases $v_y$ and $v_z$ increasing $v$. Only effective after a particle reset. |

#### MF Strategy

**Keep in mind that strategies are still under development and could change in the future.**

##### When to publish

The optimal publication multiplier slowly increases the later you are in the theory, and also depends on your last reset.

It ranges from 10-50 early to 100-500 at the end of the theory.

Check [the sim](https://exponential-developers.github.io/sim-3.0/) for more accurate results.

##### When to reset the particle

There isn't an exact rule yet on how often you must perform a particle reset.
A good baseline is to reset every 1e9 $\rho$, which is every two $v_2$ levels, but it varies slightly from that. For example, early in the CT you want to reset a bit more often.

It is also important to stop resetting at an appropriate point, you want to only reset once after recovering to your previous publication mark.

We recommend using [the sim](https://exponential-developers.github.io/sim-3.0/) to check the $v_i$ levels bought with each reset to give you a clearer idea.

##### Variable buying strats

For variable buy strats, you can save a bit of time with active $c_1$ buying.

You can also save time by not buying $a_1$ when $I$ is very close to its cap ($a_2\times 10^{-15}$) and not buying $a_2$ when $I$ is far away from its cap (which typically happens near the end of the CT).

For more details, check out the [theory strategy section](/guides/theory-strategies).

#### MF Milestone Route

MF has a locked milestone path, like EF and FP.

Class: milestone_routing;
last_row: false;

|     |       |       |       |         |       |           |
| --- | ----- | ----- | ----- | ------- | ----- | --------- |
| 1/0 | ARROW | 1/1/0 | ARROW | 1/1/2/0 | ARROW | 1/1/2/2/0 |

Class: milestone_routing;
last_row: false;

|             |       |             |
| ----------- | ----- | ----------- |
| 1/1/2/2/2/0 | ARROW | 1/1/2/2/2/1 |

Class: milestone_routing;
last_row: false;

|      |       |       |       |       |
| ---- | ----- | ------| ----- | ----- |
| OR   | INVIS | INVIS | INVIS | INVIS |
| 1    | ARROW | 2     | ARROW | 3 x2  |
| 4 x2 | ARROW | 5 x2  | ARROW | 6     |

### Basel Problem (BaP)

#### BaP Overview

BaP was released on March 10th, 2025, alongside MF. It is based on the Basel Problem, a famous mathematical problem solved by Euler about the convergence of the series $\sum_{n=1}^{∞}\frac{1}{n^2}$, which converges to $\frac{\pi^2}{6}$.

BaP is an idle-friendly custom theory (except for a bit of milestone swapping), and has several similarities with T2.

BaP is much slower than the other CTs early, so it is better to not push it until your other CTs are slow enough. However, BaP holds a secret, a milestone unlocked at e1000$\rho$ that allows to complete the remaining e200$\tau$ in under a week! for a total completion time of about 5 months.

#### BaP Equation Description

$$\dot{\rho} = (tq_1r)^a \to \dot{\rho} = t(q_1r)^a$$
$$a=0.3 \to a=0.2+\sum_{i=0}^9\frac{(10-i)^2}{1000} \to a=2\cdot\frac{6}{\pi^2}-\left(\sum_{i=1}^n\frac{1}{i^2}\right)^{-1}$$
$$\dot{q}_i=c_{i+1}q_{i+1}, 1\le i\le 9$$
$$\dot{q}_9=c_{10}$$
$$\dot{r}=\sum_{i=1}^{c_1}\frac{1}{i^2} \to \dot{r}=\left(\sum_{i=c_1}^{\infty}\frac{1}{i^2}\right)^{-1}$$

The $\dot{\rho}$ equation features 3 terms: $t$, $q_1$ and $r$.

$t$ is a variable with constant growth once all $\dot{t}$ variables are bought.

The $q_i$ variables work the same way as with T2, the bottom layer has a constant growth, then the growth of each other layer is affected by the value of the layer below, with factors being the $c_i$ variables (except $c_1$).

Finally, we have the $r$ equation. At the start of the theory, it is the partial sum of the inverse of the squares, which converges. As such, there is no point to buy $c_1$ past a certain point.
After getting the first milestone, the $r$ equation changes to be the inverse of the remainder of the sum. As we omit more and more of the first terms of the sum, the remainder converges to zero, making $c_1$ useful again.
Past earlygame, we approximate $\dot{r}=c_1$.

$\dot{\rho}$ is also monitored by the $a$ exponent, which will always be less than 1, but you will be able to increase it with milestones, and, later, with a variable called $n$.

#### BaP Variable Description

Approximate variable strengths on $\dot\rho$ with all milestones are as follows:

Class: variable_description;
Caption: Brief summary of variable strengths of BaP;
last_row: false;

|           | Variable Description |
| --------- | -------------------- |
| $\dot{t}$ | Makes $t$ increase faster. Since there are only 4 levels, after a certain point, this variable is effectively fixed. |
| $c_1$     | Increases $r$ growth. After the first milestone, $\dot{r}$ becomes $c_1$. Has a very power­ful 1024x boost every 64 levels. |
| $c_2$     | 2x increase to $q_1$ growth per level. |
| $c_3$     | 3x increase to $q_2$ growth per level. |
| $c_4$     | 4x increase to $q_3$ growth per level. |
| $c_5$     | 5x increase to $q_4$ growth per level. |
| $c_6$     | 6x increase to $q_5$ growth per level. |
| $c_7$     | 7x increase to $q_6$ growth per level. |
| $c_8$     | 8x increase to $q_7$ growth per level. |
| $c_9$     | 9x increase to $q_8$ growth per level. |
| $c_{10}$  | 10x increase to $q_9$ growth per level. |
| $n$       | Small increase to $a$ per level. |

#### BaP Strategy

**Keep in mind that strategies are still under development and could change in the future.**

Basel Problem is an idle-friendly CT except during its MS phases.

##### When to publish

BaP progress is hard carried by its milestones, which means the best time to publish can vary a lot. For $a$ milestones, it is better to push past them to collect the massive boost it gives with all the $q_1$ and $r$ you stacked waiting for the milestone. On the contrary, for $q$ milestones, it is better to push for them, buy the matching permanent upgrade and publish right away, as you can enjoy the boost right away without waiting for the boost to climb all the way to $q_1$.

To know when to publish, please check [the sim](https://exponential-developers.github.io/sim-3.0/). Check out the [BaP Quick Purchase Tester](https://drive.google.com/drive/folders/1xOpJepkZZVpuk0QEnIVt3ejquGKR09co) for variable checks mid-publication.

##### Idle

For idle, you autobuy all. For more efficiency, turn off autobuy when your $\rho$ is around x25 away from your publication mark or the next milestone.

##### Active

BaP active strategies take advantage of active $c_1$ buying. $c_1$ is a unique variable with a low cost scaling and that gains a massive x1024 boost every 64 levels, when ($c_1$ level) % 64 = 1.

For the strategy, you want to chase those boosts and autobuy $c_1$ when you are close to the next boost (when the cumulative cost of $c_1$ purchases until the boost is below x2 of other variables). When you are not chasing a boost, you can buy $c_1$ at ($c_1$ level % 64)/2 ratio to other variables. 

##### Milestone Swapping Strategy

Milestone Swapping is possible when you don't have enough milestone points to buy all the milestones. In that case, you can swap between $a$ and $q$ milestones.

MS is only relevant when you need to stack $q_i$ layers, which typically happens when you unlock a new $q_i$ layer. The cycle goes:

Put the milestone point in the $q_i$ layer $\to$ wait for $q_i$ and $q_{i-1}$ to grow $\to$ put the milestone point back in the $a$ milestone.

You generally want to start a cycle once you buy a new $c_i$ and $c_{i+1}$ which boost $q_{i-1}$ and $q_i$ respectively.

#### BaP Milestone Routing Explanation

Like FI, in BaP, you can unlock milestones in 2 ways:

1) by gaining $\rho$ like normal, or
2) by purchasing the milestone upgrades for $a$ and $q$ in the permanent upgrades tab

Buying the milestone upgrades will **not** give you a milestone, but will instead increase the max level of the milestone that you purchased the upgrade for. For example, if you buy the $a$ perma-upgrade for lvl 1, you will permanently unlock the first lvl of the $a$ milestone.

While, for most milestones, you unlock the permanent upgrade at the same time you get the milestone point for it, there are 6 exceptions: $q$ milestone levels 3,4,5 and $a$ milestone levels 4,5,6 in which you unlock the milestone level before you unlock the milestone point, meaning you have a vacant milestone space. This creates an opportunity for milestone swapping between the $a$ and $q$ milestone, however, in reality, MS is only applicable where you unlock a new $q$ milestone level, as, when you unlock a $a$ milestone level, it's generally best to put your milestones into it since you have already built enough $q_i$, and these MS phases are short anyways.

#### BaP Milestone Route

<!--This section needs to be redone-->

BaP has 20 milestones, the most out of any official theory to this day.

<!--br>
<table class="milestone_routing">
   <tbody>
      <tr>
         <td>1/0</td>
         <td class="arrow">→</td>
         <td>1/1/0</td>
         <td class="arrow">→</td>
         <td>1/1/1/0</td>
         <td class="arrow">→</td>
         <td>1/1/1/1</td>
         <td class="arrow">→</td>
         <td>1/1/2/1</td>
         <td class="arrow">→</td>
         <td>1/1/2/2</td>
         <td class="arrow">→</td>
         <td>1/1/3/2</td>
         <td class="arrow">→</td>
         <td>1/1/3/3</td>
         <td class="arrow">→</td>
         <td>1/1/4/3</td>
         <td class="arrow">→</td>
         <td>1/1/4/4</td>
         <td class="arrow">→</td>
         <td>1/1/5/4</td>
         <td class="arrow">→</td>
         <td>1/1/5/5</td>
         <td class="arrow">→</td>
         <td>1/1/6/5</td>
         <td class="arrow">→</td>
         <td>1/1/6/6</td>
         <td class="arrow">→</td>
         <td>1/1/7/6</td>
         <td class="arrow">→</td>
         <td>1/1/7/7</td>
         <td class="arrow">→</td>
         <td>1/1/8/7</td>
         <td class="arrow">→</td>
         <td>1/1/8/8</td>
         <td class="arrow">→</td>
         <td>1/1/9/8/0</td>
         <td class="arrow">→</td>
         <td>1/1/9/8/1</td>
      </tr>
   </tbody>
</table>
<table-- class="milestone_routing">
   <tbody>
      <tr>
         <td class="invisible"><strong>Or</strong></td>
         <td class="invisible"></td>
         <td class="invisible"></td>
         <td class="invisible"></td>
         <td class="invisible"></td>
         <td class="invisible"></td>
         <td class="invisible"></td>
      </tr>
      <tr>
         <td>1</td>
         <td class="arrow">→</td>
         <td>2</td>
         <td class="arrow">→</td>
         <td>(3</td>
         <td class="arrow">→</td>
         <td>4) x8</td>
         <td class="arrow">→</td>
         <td>3</td>
         <td class="arrow">→</td>
         <td>5</td>
      </tr>
   </tbody>
</table-->
