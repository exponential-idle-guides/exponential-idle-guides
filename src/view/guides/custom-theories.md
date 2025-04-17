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

Custom theories are theories made by players in the community. As of December 15th, there are 7 official
custom theories that contribute up to e600 \\(\tau\\) per theory; Weierstrass Sine Product made by Xelaroc (WSP), Sequential Limits by Ellipsis (SL), Euler's Formula by Peanut, Snaeky, and XLII (EF), Convergents to Square Root 2 (CSR2/CS2) by Solarion, Fractional Integration (FI) by Gen and Snaeky, Fractal Patterns (FP) by XLII, and Riemann Zeta Function by Prop (RZ). The theories will be abbreviated as WSP, SL, EF, CSR2, FI, FP and RZ from now on.

In order to balance custom theories with the main theories in the endgame, custom theories have a low conversion rate (with one exception) from \\(\rho\\) to $\tau$. WSP, SL, CSR2, FI and RZ have conversion rates of
$\tau$ = \\(\rho^{0.4}\\) while EF has a \\(\tau\\) conversion rate of $\tau$ = \\(\rho^{1.6}\\) and FP with a conversion rate of $\tau$ = \\(\rho^{0.3}\\).

### Which Custom Theories (CTs) should I do?

In general, you want to be as efficient as possible since R9 does not affect custom theories. If you cannot be active, try not to do an active theory or do an active strategy. Some custom theories are more active than normal theories and it is highly suggested that if you are doing active strategy for a Custom theory (SL or FI before all milestones, CSR2, WSP, or early FP) that you do an idle main theory (such as t2, t4, or t6) so that you don't miss out on \\(\tau/hour\\).

If you have time for active strategies, try to do the CT with the highest active \\(\tau/hour\\), or you can chase a spike in $\tau/hour$, such as EF e50 \\(\rho\\) or FP e95 \\(\rho\\). You can check this with [the sim.](https://exponential-developers.github.io/sim-3.0/)<br><br>

 For idle time, do the one with the highest idle \\(\tau/hour\\), (or the longest publication time if you're doing overnights), with preference toward EF, SL, FP past e1050, or FI when you only have 1 milestone to swap. For example, if SL has 2 \\(\tau/hour\\) and CSR2 also has 2 \\(\tau/hour\\), ideally we would pick SL. The reason we prefer SL, EF, FP and FI is because these theories contain multiple growing variables. This means the theories generally require less babysitting as the variables grow by themselves. The assumption of daytime idle is that we can check and publish a theory every 2 hours or so. If you can only check every 8 hours idle, please see the overnight strategy just above.<br><br>

![CT Rate vs. $\tau$](/images/ct_rate_graph.png)

###### Graph made by Hackzzzzzz ([Source](https://redd.it/1jv7t75))

### Weierstrass Sine Product (WSP)

#### WSP Overview

The very first official custom theory; WSP was developed by Xelaroc, who also came up with some of the strategies used in the theory. The idea behind the theory is to use the factorization of sine to increase \\(\rho\\). There are multiple equations with this theory, and some may look daunting, so we'll have a look at each one.<br><br>

#### WSP Equation Description

\\(\dot{\rho} = q_1^{1.04}q_2q\\)

\\(\dot{q} = c_2s_n({\chi}) / sin({\chi})\\)

\\(s_n({x}) := x\prod_{k=1}^{n}(1-\frac{x}{k\pi}^2)\\)

\\(\chi = \pi\frac{c_1n}{c_1+n/3^{3}}+1\\)
<br><br>

The first line states that the rate of change in $\rho$ is \\(q_1^{1.04}q_2q\\). Initially it's simply \\(q_1q_2q\\) without any exponent. With milestones we add more exponents. <br>

For the second line, the higher the \\(\chi\\) (spelled 'chi', pronounced as 'kai'), the higher the \\(s_n({\chi})\\). We want to increase \\(\chi\\) by increasing \\(n\\) and \\(c_1\\). The signs of \\(s_n({\chi})\\) and \\(sin({\chi})\\) will always match, so the fraction can't be negative. Additionally, the \\(c_2\\) variable is a milestone which is not initially available. <br>

The third line is the most complicated. Generally we can factorize an equation when its graph touches the x-axis. For a sine curve, it touches the x-axis starting from x = 0, and repeats every x= \\(\pi\\). These multiplied factors form the basis of the Weierstrass Sine Product. A simpler interpretation is that we can see 'x' appearing both outside and inside the products in the numerator. Since \\(\chi\\) is 'x' here, the higher the \\(\chi\\), the higher the \\(s_n({\chi})\\) as stated earlier. <br>

Finally, the actual \\(\chi\\) equation: increasing \\(c_1\\) and \\(n\\) increases \\(\chi\\). Note that from the fraction, we don't want to increase only \\(c_1\\) or only \\(n\\). Rather we should increase both. Using standard strategies this should be no problem. The \\(n/3^{3}\\) part in the denominator is a milestone term. This means that \\(n\\) is better than \\(c_1\\) as more \\(n/3\\) milestones are accumulated. <br><br>

#### WSP Variable Description
Approximate variable strengths on $\dot\rho$ with all milestones are as follows:

<table class="T2">
<caption>Brief summary of variable strengths of WSP.</caption>
   <thead><tr>
   <th class="invisible"></th>
   <th colspan="2" style="text-align:center">Brief Description</th>
   </tr></thead>
   <tbody>
      <tr>
         <th>q<sub><sub><small>1</small></sub></sub></th>
         <td>About 7% increase on ρ dot on average.</td>
      </tr>
      <tr>
         <th>q<sub><sub><small>2</small></sub></sub></th>
         <td>Doubles ρ dot - instantaneous.</td>
      </tr>
      <tr>
         <th>n</th>
         <td>Initially about 50% increase similar to c<sub><sub><small>1</small></sub></sub>. Slowly ramps up to 4 times increase in ρ dot. At e400 ρ and higher, it is very close to a 4x increase.</td>
      </tr>
      <tr>
         <th>c<sub><sub><small>1</small></sub></sub></th>
         <td>Initially about 50% increase. Tends to 0% increase as ρ increases. At e400 ρ the increase is not noticeable anymore. Early in WSP we still buy them throughout. Late in WSP we only buy for the first 20 seconds or so of each publication.</td>
      </tr>
      <tr>
         <th>c<sub><sub><small>2</small></sub></sub></th>
         <td>Doubles ρ dot - over time</td>
      </tr>
   </tbody>
</table>

<br>
<br>

#### WSP Strategy

Early game the variable strengths are ordered as follows: 

\\(q_2\\) ≈ \\(c_2\\) > \\(n\\) > \\(c_1\\) > \\(q_1\\) <br><br>

Late game these become:

\\(n\\) > \\(q_2\\) ≈ \\(c_2\\) > \\(q_1\\) >>> \\(c_1\\) <br><br>

##### Idle

Before you get e400 \\(\rho\\) for idle, simply autobuy all. <br><br>

Once you have e400 \\(\rho\\), \\(c_1\\) starts to become extremely bad. Because of this, the new idle strategy would be to autobuy all for 20 seconds or so. Then turn \\(c_1\\) OFF. Continue to autobuy the rest of the variables. <br>
<br>

##### Active

For a simple active strategy before e400 \\(\rho\\), simply autobuy \\(q_2\\) and \\(c_2\\) since they double the rates long term. \\(n\\) and \\(c_1\\) give approximately 60% boost (with \\(n\\) becoming more powerful with milestones and vice versa for \\(c_1\\)). We will buy \\(n\\) and \\(c_1\\) when their costs are less than 50% of the minimum of \\(q_2\\) and \\(c_2\\).
<br>
For \\(q_1\\), we will buy it when its cost is less than 10% of the minimum of \\(q_2\\) and \\(c_2\\). For example, if \\(q_1\\) costs 1.2e100 and \\(q_2\\) costs 1e101, we would not buy \\(q_1\\) as it's 'too expensive' compared to \\(q_2\\).  <br><br>

For active strategy, \\(n\\) starts to become more powerful than \\(q_2\\). If their costs are similar, we will prioritize \\(n\\) first. For example, if \\(n\\) costs 1.4e101 and \\(q_2\\) costs 1.2e101, we will buy \\(n\\) first. Similarly to the idle strategy, we will buy \\(c_1\\) only for the first 20 seconds or so. If you want more information on the different strategies pertaining to WSP, please see [List of theory strategies](/guides/theory-strategies)<br><br>

#### WSP Milestone Route

All milestones into the 3rd/last milestone. Then into 2nd milestone, then into 1st milestone. <br>
For milestone swapping, swap all milestones from 2nd and 3rd into 1st milestone. Usually you only do this when you're about to publish. <br>

<table class="milestone_routing">
   <tbody>
      <tr>
         <td>0/0/1</td>
         <td class="arrow">→</td>
         <td>0/0/2</td>
         <td class="arrow">→</td>
         <td>0/0/3</td>
      </tr>
      <tr>
         <td>0/1/3</td>
         <td class="arrow">→</td>
         <td>1/1/3</td>
         <td class="arrow">→</td>
         <td>2/1/3</td>
         <td class="arrow">→</td>
         <td>3/1/3</td>
         <td class="arrow">→</td>
         <td>4/1/3</td>
</table>

### Sequential Limits (SL)

#### SL Overview

SL, the second official custom theory, uses a variation of Stirling's formula to approximate Euler's number (e≈2.71828). As upgrades are bought, the approximation becomes more precise, increasing $\dot\rho$ and \\(\rho\\) because \\(e-\gamma\\) approaches 0. As with the first official custom theory (WSP), there are several equations in this theory. Let's explore each one:

#### SL Equation Description

\\(\dot{\rho}_1 = \frac{\sqrt{\rho_2^{1.06}}}{e - \gamma}\\)

\\(\gamma = \frac{\rho_3}{\sqrt[\rho_3]{\rho_3!}}\\)

\\(\dot{\rho_2} = a_1a_2a_3^{-ln{\rho_3}}\\)

\\(\dot{\rho_3} = b_1^{1.04}b_2^{1.04}\\)

\\(a_3 = 1.96\\)

The first line is the main part of the equation. We want to maximize \\(\dot{\rho_1}\\) to increase $\tau$. The '1.06' exponent is from milestones. The default is no exponent. From the equation, we can see that \\(\dot{\rho_1}\\) is proportional to approximately \\(\sqrt{\rho_2}\\). This means that if we quadruple \\(\rho_2\\), we would approximately double \\(\rho_1\\) long term. The denominator of the fraction has a gamma symbol (\\(\gamma\\)) which looks like the letter 'y'. As our \\(\rho\\) increases, our \\(\gamma\\) becomes closer to 'e', so the denominator will decrease, which increases \\(\rho_1\\). We will explore \\(\gamma\\) in the next equation.

The second equation refers to Stirling's approximation of Euler's number '\\(e\\)'. As \\(\rho_3\\) increases, \\(\gamma\\) converges to Euler's number. Long term we can approximate this convergence as linear. The implication is if we double \\(\rho_3\\), \\(\gamma\\) will be twice as close to Euler's number, so \\(e-\gamma\\) in the first equation will be halved.

The third equation relates \\(\rho_2\\) with \\(\rho_3\\) and some upgrades. The most interesting part is the exponent part containing \\(ln({\rho_3})\\). The negative exponent actually implies that as \\(\rho_3\\) increases, \\(\dot{\rho_2}\\) DECREASES. If \\(\rho_3\\) is high, \\(\rho_2\\) doesn't grow as fast (it still grows). This has implication on the first equation as well, since \\(\dot{\rho_1}\\) depends on \\(\rho_2\\), which depends on \\(\rho_3\\).

The fourth equation relates \\(\dot{\rho_3}\\) with some upgrades. This one is relatively simple; increase \\(b_1\\) and \\(b_2\\) to increase \\(\rho_3\\). The '1.04' exponents are from milestones.

The final equation simply states the value of \\(a_3\\). The lower the better. Default without milestone is \\(a_3 = 2\\).

#### SL Variable Description
Approximate variable strengths on $\dot\rho$ with all milestones are as follows:

<table class="T2">
<caption>Brief summary of variable strengths of SL.</caption>
   <thead><tr>
   <th class="invisible"></th>
   <th colspan="2" style="text-align:center">Brief Description</th>
   </tr></thead>
   <tbody>
      <tr>
         <th><p>a<sub><sub><small>1</small></sub></sub></p></th>
         <td>Value times 3.5 every 3 levels on average. This comes to about 52% increase in ρ<sub><sub><small>2</small></sub></sub> dot per level. Since ρ<sub><sub><small>1</small></sub></sub> is approximately square root of ρ<sub><sub><small>2</small></sub></sub>, overall this comes down to about 23% increase in ρ<sub><sub><small>1</small></sub></sub> per level.</td>
      </tr>
      <tr>
         <th>a<sub><sub><small>2</small></sub></sub></th>
         <td>Doubles in value every level. Doubles ρ<sub><sub><small>2</small></sub></sub> long term. Increases ρ<sub><sub><small>1</small></sub></sub> by 40% ish long term.</td>
      </tr>
      <tr>
         <th>b<sub><sub><small>1</small></sub></sub></th>
         <td>Value times 6.5 every 4 levels on average. This comes down to about 60% increase in ρ<sub><sub><small>3</small></sub></sub> dot. Toward the end of a publication, this translates to approximately 60% increase in ρ<sub><sub><small>1</small></sub></sub>. </td>
      </tr>
      <tr>
         <th>b<sub><sub><small>2</small></sub></sub></th>
         <td>Doubles in value every level. Toward the end of a publication this doubles ρ<sub><sub><small>1</small></sub></sub>.</td>
      </tr>
   </tbody>
</table>

<br>
<br>

#### SL Strategy

All variables in SL are about the same in power, except for \\(a_1\\) and \\(b_1\\) (which are slightly worse than \\(a_2\\) and \\(b_2\\). Selectively buying variables at certain times (active) yields very little results. Therefore, we can get away with autobuy all for idle. Before autobuy, simply buy the cheapest variable. If you want more details on SL strategies, in particular the execution of various strategies, please see [List of theory strategies](/guides/theory-strategies).

#### Milestone swapping - why it works
For active, there is a milestone swapping strategy that is significantly faster than idling (approximately twice the speed). If we carefully examine the effects of each milestone, we can conclude the following:

1st milestone: Increases \\(\rho_2\\) exponent and increases \\(\dot{\rho_1}\\) straight away. The actual value of \\(\rho_2\\) does not increase. <br>
3rd/4th milestone: Increase \\(b_1\\)/\\(b_2\\) exponents, and \\(\dot{\rho_3}\\), and \\(\rho_3\\). This also increases \\(\dot{\rho_1}\\). However, the effect is long-term and not instantaneous unlike the effect of the 1st milestone.

We have different milestones which affect the same thing (\\(\dot{\rho_1}\\)), but one is instantaneous, while the other builds over time. This forms the basis of 'milestone swapping', swapping milestones at certain times to maximize \\(\rho_1\\) per hour. If you've done T2 milestone swapping, this should be familiar.

We initially put our milestones in the 4th and 3rd milestones. Once our \\(\rho_3\\) doesn't increase quickly anymore, we switch milestones to the 1st one to gain a burst of \\(\dot{\rho_1}\\). Once our \\(\rho_1\\)is not increasing quickly anymore, we switch back to the 4th and 3rd milestone!

#### Milestone Swapping Strategies
(Courtesy of Gen).

x>x>x>x represent the max buy order of milestones not the amount allocated.
For example, 4>3>1>2 means "Allocate everything into 4th milestone, then use leftovers into 3rd milestone, then into 1st milestone, then into 2nd milestone".

From e75-e100 is 4>3>1>2 (60s) ↔ 1>2>4>3 (60s)

SLMS2 is 1>2>4>3 (30s) → 2>1>4>3 (60s) → 1>2>4>3 (30s) → 4>3>1>2 (60s), with \\(b_1\\)\\(b_2\\) off during the first two, and \\(a_1\\)\\(a_2\\) off during the last two

SLMS3 is 2>1>4>3  (20s) ↔ 4>3>1>2 (60s)

When to Use Strategies
until e100: SLMS<br>
e100 - e175: SLMS (100-175)<br>
e175 - e200: SLMS3<br>
e200 - e300: SLMS

(note that it depends also on the swapping durations, on the last range SLMS should be run with 60s [4/3/1/2] and 20s on [1/2/4/3] to be best). So from e200-e300, SLMS 4>3>1>2 (60s) ↔ 1>2>4>3 (20s)

For a more precise description of SLMS, check out the [theory strategy section](/guides/theory-strategies/#slms).

#### Post e300+ \\(\rho\\)

At this point, the theory becomes very idle. We simply autobuy all variables. Publish at approximately 8-10 multiplier. If you wish to improve efficiency, you can disable \\(a_1\\)\\(a_2\\) at about 4.5 publication multiplier and \\(b_1\\)\\(b_2\\) at 6.0 multiplier until publish.

#### SL Milestone Route

##### Idle

<table class="milestone_routing">
   <tbody>
      <tr>
         <td>0/0/0/2</td>
         <td class="arrow">→</td>
         <td>0/0/2/2</td>
         <td class="arrow">→</td>
         <td>3/0/2/2</td>
         <td class="arrow">→</td>
         <td>3/5/2/2</td>
      </tr>

</table>

##### Active

Milestone Swapping (active)

How to read notation: 4/3/1/2 means put all points into 4th milestones, use leftovers into 3rd milestones, etc.

SLMS is 4/3/1/2 (60s) ↔ 1/2/4/3 (60s)

SLMS2 is 1/2/4/3 (30s) → 2/1/4/3 (60s) → 1/2/4/3 (30s) → 4/3/1/2 (60s), with \\(b_1\\)\\(b_2\\) off during the first two, and \\(a_1\\)\\(a_2\\) off during the last two

SLMS3 is 2/1/4/3  (20s) ↔ 4/3/1/2 (60s)

When to Use Strategies
until e100: SLMS

e100 - e175: SLMS2

e175 - e200: SLMS3

e200 - e300: SLMS

For a more precise description of SLMS, check out the [theory strategy section](/guides/theory-strategies/#slms).

### Euler's Formula (EF)

#### EF Overview

This custom theory, along with Convergents to Square Root 2, were released at the same time and is based on Euler's Formula of

\\(e^{i*\theta} = cos{\theta} + isin{\theta}\\), where 'i' is the complex number.

EF is unique, along with FP, in that all the milestone paths are locked, so there's no choice in which milestones to take. This was deliberately done to prevent milestone swapping strategies and to balance the theory. Furthermore, the \\(\rho\\) to \\(\tau\\) conversion for this theory is uniquely at \\(\rho^{1.6}\\) rather than the usual \\(\rho^{0.4}\\) meaning that less \\(\rho\\) is needed to get an equivalent amount of $\tau$. Due to the conversion rate, EF can feel extremely slow in comparison to other theories, but it is the fastest theory to e150 \\(\tau\\) and has the largest instantaneous jump in \\(\tau\\) out of all custom theories.

#### EF Equation Description

\\(\dot{\rho} = (a_1a_2a_3)^{1.5}\sqrt{tq^2+R^2+I^2}\\)

\\(G(t) = g_r+g_i\\)

\\(g_r = b_1b_2cos{(t)}, g_i = ic_1c_2sin{(t)}\\)

\\(\dot{q} = q_1q_2\\)

\\(\dot{R} = (g_r)^2, \dot{I} = -(g_i)^2\\)

The first line is the main equation. We want to maximize \\(\dot{\rho}\\). All the \\(a_n\\) terms and their exponents are obtained from milestones. Parts of the square root term are also obtained from milestones. Note that the \\(R^2\\) and the \\(I^2\\) terms are effectively redundant at all stages of this theory; but due to them purchasing \\(a_2\\) and \\(a_3\\) respectively, they are very important.

The second line defines the graph shown. Since \\(G(t)\\) is graphed on the complex over time, it is possible to have it show as a particle spiraling through space.

The third line describes \\(g_r\\) and \\(g_i\\), which are used to generate '\\(R\\)' and '\\(I\\)' currencies. This line by itself doesn't do much.

The fourth line simply describes \\(\dot{q}\\). This is used in the first equation directly.

The fifth and final line use the results from the 3rd line, so effectively \\(\dot{R} = b_1^{2}b_2^{2}cos^2{(t)}\\) and \\(\dot{I} = c_1^{2}c_2^{2}sin^2{(t)}\\)

#### EF Variable Description
Approximate variable strengths on $\dot\rho$ with all milestones are as follows:

<table class="T2">
<caption>Brief summary of variable strengths of EF.</caption>
   <thead><tr>
   <th class="invisible"></th>
   <th colspan="2" style="text-align:center">Brief Description</th>
   </tr></thead>
   <tbody>
      <tr>
         <th>$$\dot{ t }$$</th>
         <td>Makes t increase faster. Since there are only 4 levels, after a certain point, this variable is effectively fixed.</td>
      </tr>
      <tr>
         <th>q<sub><sub><small>1</small></sub></sub></th>
         <td>Standard variable. Doubles every 10 levels. Approximately 7% increase in ρ dot per level over time.</td>
      </tr>
      <tr>
         <th>q<sub><sub><small>2</small></sub></sub></th>
         <td>Doubles in value every level. Also doubles ρ dot for each level bought, over time.</td>
      </tr>
      <tr>
         <th>b<sub><sub><small>1</small></sub></sub></th>
         <td>Costs R to buy rather than ρ. Increases R by approximately 14% per level.</td>
      </tr>
      <tr>
         <th>b<sub><sub><small>2</small></sub></sub>
         <td>Costs R to buy rather than ρ. Increases R by approximately 20% per level. </td>
      </tr>
      <tr>
         <th>c<sub><sub><small>1</small></sub></sub></th>
         <td>Costs I to buy rather than ρ. Increases I by approximately 14% per level.</td>
      </tr>
      <tr>
         <th>c<sub><sub><small>2</small></sub></sub></th>
         <td>Costs I to buy rather than ρ. Increases I by approximately 20% per level.</td>
      </tr>
      <tr>
         <th>a<sub><sub><small>1</small></sub></sub></th>
         <td>Doubles approximately every 10 levels. Costs ρ to buy. With full milestones this variable increases ρ dot on average by about 11-12% for each level bought.</td>
      </tr>
      <tr>
         <th>a<sub><sub><small>2</small></sub></sub></th>
         <td>Costs R to buy. Increases 40 folds for every 10 levels bought. However, note that some levels are much more impactful than others, specifically 1 mod 10 levels. Overall, this variable ranges from 10% to 700%+ effectiveness in ρ dot! </td>
      </tr>
      <tr>
         <th>a<sub><sub><small>3</small></sub></sub></th>
         <td>Costs I to buy. With full milestones, this variable approximately triples ρ dot.</td>
      </tr>
   </tbody>
</table>

<br>
<br>

#### EF Strategy

Initially, you only have \\(\dot{t}\\),  \\(q_1\\), and \\(q_2\\) unlocked. Buy \\(q_1\\) at about 1/8th cost of \\(q_2\\), and buy \\(\dot{t}\\) when it's available. At e20 \\(\rho\\) when autobuyers are unlocked, for idle, simply autobuy all. For active, continue to do what you were doing (buying \\(q_1\\) at 1/8th cost of \\(q_2\\)). There are also more advanced strategies, in particular EFAI. For its description and execution, please see [List of theory strategies](/guides/theory-strategies).

The first 2 milestones are redundant by themselves. The \\(R^2\\) term and the \\(I^2\\) term are insignificant compared to the \\(tq^2\\) term.
Once you unlock the 3rd milestone (\\(a_1\\) term) however, we can buy \\(a_1\\) at 1/4th of \\(q_2\\) cost.

#### EF Milestone Route

<table class="milestone_routing">
   <tbody>
      <tr>
         <td>2/0</td>
         <td class="arrow">→</td>
         <td>2/3/0</td>
         <td class="arrow">→</td>
         <td>2/3/5/0</td></td>
         <td class="arrow">→</td>
         <td>2/3/5/2/0</td></td>
         <td class="arrow">→</td>
         <td>2/3/5/2/2</td></td>
      </tr>
   </tbody>
</table>
<table class="milestone_routing">
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
         <td>1 x2</td>
         <td class="arrow">→</td>
         <td>2 x3</td>
         <td class="arrow">→</td>
         <td>3 x5</td>
         <td class="arrow">→</td>
         <td>4 x2</td>
         <td class="arrow">→</td>
         <td>5 x2</td>
      </tr>
   </tbody>
</table>

### Convergents to Square Root 2 (CSR2)

#### CSR2 Overview

 This custom theory was released at the same time as Euler's Formula. CSR2 is based on approximations of \\(\sqrt{2}\\) using recurrent formulae. As the approximations improve, the $\dot{q}$ and $\dot\rho$ improve, increasing $\tau$. An explanation of each section of the equations is shown below:

#### CSR2 Equation Description

\\(\dot{\rho} = q_1^{1.15}q_2q\\)

\\(\dot{q} = c_1c_2^2 |\sqrt{2} - \frac{N_m}{D_m}|^{-1}\\),
\\(N_m = 2N_{m-1} + N_{m-2}, N_0 = 1, N_1 = 3\\)
\\(D_m = 2D_{m-1} + D_{m-2}, D_0 = 1, D_1 = 2\\)
\\(m = n + log_2{(c_2)}\\)
<br><br>

 The first line is self explanatory. The exponents on \\(q_1\\) are from milestones. '\\(q\\)' will increase during the publication.
<br>

For the second line, both the variable \\(c_2\\) and its exponents are from milestones. The absolute value section on the right describes the approximation of \\(N_m\\)/ \\(D_m\\) to \\(\sqrt{2}\\). As \\(N_m\\)/ \\(D_m\\) get closer to \\(\sqrt{2}\\), the entire right section gets larger and larger (because of the -1 power).
<br>

The third and fourth lines are recurrence relations on \\(N_m\\) and \\(D_m\\). This means that the current value of \\(N_m\\) and \\(D_m\\) depend on their previous values. We start with \\(N_0\\) = 1, \\(N_1\\) = 3. The equation will then read as:

\\(N_2\\) = 2\\(N_1\\) + \\(N_0\\) -> \\(N_2\\) = 2 x 3 + 1 = 7.
Then \\(N_3\\) = 2\\(N_2\\) + \\(N_1\\) -> 2 x 7 + 3 = 17.
Similar logic is applied to \\(D_m\\) equations.

This occurs until we reach \\(N_m\\) and \\(D_m\\) reach whatever 'm' values we have. This is shown in the next equation:

The fourth equation relates 'm' as described above. We can see that as we buy \\(n\\) and \\(c_2\\), our \\(m\\) will increase, so the 2 recurrence equations above will 'repeat' more often and \\(N_m\\), \\(D_m\\) will increase. From how \\(n\\) and \\(c_2\\) values are calculated, buying 1 level of \\(n\\) or \\(c_2\\) will increase \\(m\\) by 1.

#### CSR2 Variable Description
Approximate variable strengths on $\dot\rho$ with all milestones are as follows:

<table class="T2">
<caption>Brief summary of variable strengths of CSR2.</caption>
   <thead><tr>
   <th class="invisible"></th>
   <th colspan="2" style="text-align:center">Brief Description</th>
   </tr></thead>
   <tbody>
      <tr>
         <th>q<sub><sub><small>1</small></sub></sub></th>
         <td>About 7% increase in ρ dot per level (instantaneous).</td>
      </tr>
      <tr>
         <th>q<sub><sub><small>2</small></sub></sub></th>
         <td>Doubles ρ dot per level (instantaneous).</td>
      </tr>
      <tr>
         <th>c<sub><sub><small>1</small></sub></sub></th>
         <td>About 7% increase in ρ dot per level; not instantaneous. This is the weakest variable. </td>
      </tr>
      <tr>
         <th>n</th>
         <td>Long term will multiply ρ dot by 6 times! However, it is not instantaneous.</td>
      </tr>
      <tr>
         <th>c<sub><sub><small>2</small></sub></sub></th>
         <td>Approximately 22 times increase in ρ dot per level! Not instantaneous. This is the strongest variable by quite a lot.</td>
      </tr>
   </tbody>
</table>

<br><br>

#### CSR2 Strategy

##### Idle

For idle, we simply autobuy all. The idle strategy doesn't change much. If you'd like to be more efficient while still being idle, you can remove milestones and stack them into the \\(q\\) exponent milestones when you're about to publish (from around e80 to e500). Don't forget to change milestones back after publishing!

Once you have all milestones, autobuy all!

##### Active

The active strategies are significantly more involved. Depending on how active you'd like to be, there are several potential strategies. There's the standard doubling chasing [CSRd](/guides/theory-strategies/#csr2d), which is just autobuy all except \\(c_1\\) and \\(q_1\\), where you buy them when they are less than 10% cost of minimum(\\(c_2\\), \\(q_2\\), and \\(n\\)).

For the milestone swapping strategy, the general idea is to switch milestones from \\(c_2\\) and its exponents, to \\(q_1\\) exponent milestones whenever we are 'close' to a powerful upgrade. Please see the [Theory Strategies](/guides/theory-strategies/#csr2xl-xxx) section of the guide for how to perform milestone swapping.

##### CSR2 Milestone Swapping Explanation

This theory has a milestone swapping strategy before full milestones. We have \\(q_1\\) exponent milestones, which increase $\dot\rho$ straight away. We also have \\(c_2\\) related milestones, which increases the \\(q\\) variable, which increases $\dot\rho$.

The reason milestone swapping works is because the benefits of using \\(c_2\\) related milestones (having high \\(q\\)) remain when you switch to \\(q_1\\) exponent milestones. If we only use \\(q_1\\) exponent, then we have really low \\(q\\). If we only use \\(c_2\\) related milestones, then we have high \\(q\\), but low $\dot\rho$. If we regularly swap them, we can increase \\(q\\) through \\(c_2\\) related milestones, then take advantage of the \\(q_1\\) exponent milestones, while keeping the high value of \\(q\\) we've accumulated earlier!

For a more detailed explanation on how to actually do the strategy, please see the [Theory Strategies](/guides/theory-strategies/#csr2xl-xxx) section of the guide.

#### CSR2 Milestone Route

<table class="milestone_routing">
   <tbody>
      <tr>
         <td>0/1/0</td>
         <td class="arrow">→</td>
         <td>0/1/2</td>
         <td class="arrow">→</td>
         <td>3/1/2</td></td>
      </tr>
   </tbody>
</table>
<table class="milestone_routing">
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
         <td>2</td>
         <td class="arrow">→</td>
         <td>3 x2</td>
         <td class="arrow">→</td>
         <td>1 x3</td>
      </tr>
   </tbody>
</table>

<style>
h4 {
   font-size: 1.2rem;
}
h3 {
   font-size: 1.5rem;
}
</style>

### Fractional Integration (FI)

#### FI Overview

 This custom theory was released at the same time as Fractal Patterns. FI is based on [Riemann–Liouville Integrals](https://en.wikipedia.org/wiki/Riemann%E2%80%93Liouville_integral) and allows you to approach the full integral as the fraction approaches 1. An explanation of each section of the equations is shown below:

#### FI Equation Description

##### Base Equation

$$\dot{ \rho }=tr\sqrt[ \pi ]{q/ \pi },\ \ \dot{q}=q_1q_2$$
$$\dot{r}=( \int_{0}^{ \pi }g(x)dx - _{ \lambda }\int_{0}^{ \pi }g(x)dx^{ \lambda } )^{-1}$$
$$\lambda \int_{0} ^ { \pi }g(x)dx^{ \lambda } = \frac{ 1 }{ \Gamma( \lambda ) } \int_{0} ^ {\pi}{( \pi - x )^{ \lambda - 1 }g( x ) } dx$$

<br>

With $\dot\rho$ and $\dot{q}$ Equations Becoming:

$$\dot{ \rho }=trmn\sqrt[ \pi ]{ \int_{0}^{ q/ \pi }g(x)dx },\ \ \dot{ \rho }=trmn\sqrt[ \pi ]{ \int_{0}^{ q }g(x)dx }$$
$$\dot{q}=q_1^{1.03}q_2$$

##### g(x) Equations

<table class="T2">
<caption></caption>
   <thead><tr>
   <th class="invisible"></th>
   <th colspan="2" style="text-align:center">Equation</th>
   </tr></thead>
   <tbody>
      <tr>
         <th>Milestone 0</th>
         <td>$$1 - \frac { x^2 }{ 2! } + \frac { x^4 }{ 4! }$$</td>
      </tr>
      <tr>
         <th>Milestone 1</th>
         <td>$$x - \frac { x^3 }{ 3! } + \frac { x^5 }{ 5! }$$</td>
      </tr>
      <tr>
         <th>Milestone 2</th>
         <td>$$\frac{ x-\frac{ x^2 }{ 2 }+\frac{ x^3 }{ 3 }-\frac{ x^4 }{ 4 }+\frac{ x^5 }{ 5 }}{\ln( 10 )}$$</td>
      </tr>
      <tr>
         <th>Milestone 3</th>
         <td>$$1+x+\frac{ x^2 }{ 2! }+\frac{ x^3 }{ 3! }+\frac{ x^4 }{ 4! }+\frac{ x^5 }{ 5! }$$</td>
      </tr>
   </tbody>
</table>

<br>
<br>

##### $\lambda$ Equations

<table class="T2">
<caption></caption>
   <thead><tr>
   <th class="invisible"></th>
   <th colspan="2" style="text-align:center">Equation</th>
   </tr></thead>
   <tbody>
      <tr>
         <th>Milestone 0</th>
         <td>$$\lambda = \frac{ 1 }{ 2 }$$</td>
      </tr>
      <tr>
         <th>Milestone 1</th>
         <td>$$\sum_{ i=1 }^{ K }\frac{ 2 }{ 3^{ i } }$$</td>
      </tr>
      <tr>
         <th>Milestone 2</th>
         <td>$$\sum_{ i=1 }^{ K }\frac{ 3 }{ 4^{ i } }$$</td>
      </tr>
   </tbody>
</table>

<br>
<br>

<br><br>

 The first equation is for \\(\rho\\), which starts off simple, but gets more complicated as more milestones are reached and perma-upgrades are purchased. Initially, \\(\rho\\) is fairly simple to calculate as $\dot{r}$ is just \\(1/2\\), $\dot{t}$ is just the $t$ variable, and the $\sqrt[\pi]{}$ radical is just \\(\dot{q}\\)/$\pi$ where $\dot{q}$ is just \\(q_1 * q_2\\). However, once \\(g(x)\\) is added to the $\dot{\rho}$ equation, the $\sqrt[\pi]{}$ radical becomes $\int_{0}^{q/\pi} g(x) \,dx$ which can be estimated by raising $q$ to the highest power of \\(g(x)\\) by 1 and upon maxing out the \\(g(x)\\) milestone, it becomes $\int_{0}^{q} g(x) \,dx$. The variables $m$ and $n$ are simple multipliers that do not change over time without purchasing them with $\rho$.

<br>

The second equation is for $\dot{r}$, which seems simple at first, but gets more difficult to understand once we get to the fractional integral. The notation in game is rarely used, but it is used to save space. Tapping and holding the equation will give the full equation. When K increases, the fractional integral approaches 1, which makes the fractional integral get closer to, yet still smaller than, the full integral. By subtracting the two, then dividing 1 by the difference, we get a very large number.

#### FI Variable Description
Approximate variable strengths on their respective vardots with all milestones are as follows:

<table class="T2">
<caption>Brief summary of variable strengths of FI</caption>
   <thead><tr>
   <th class="invisible"></th>
   <th colspan="2" style="text-align:center">Brief Description</th>
   </tr></thead>
   <tbody>
      <tr>
         <th>q<sub><sub><small>1</small></sub></sub></th>
         <td>Grows by 50x every 23 levels. Mod23 levels are a 2.6x to <mjx-container class="MathJax" jax="SVG" style="direction: ltr; position: relative;"><svg style="overflow: visible; min-height: 1px; min-width: 1px; vertical-align: -0.439ex;" xmlns="http://www.w3.org/2000/svg" width="1.041ex" height="2.174ex" role="img" focusable="false" viewBox="0 -767 460 961" aria-hidden="true"><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="TeXAtom" data-mjx-texclass="ORD"><g data-mml-node="mover"><g data-mml-node="mi"><path data-c="1D45E" d="M33 157Q33 258 109 349T280 441Q340 441 372 389Q373 390 377 395T388 406T404 418Q438 442 450 442Q454 442 457 439T460 434Q460 425 391 149Q320 -135 320 -139Q320 -147 365 -148H390Q396 -156 396 -157T393 -175Q389 -188 383 -194H370Q339 -192 262 -192Q234 -192 211 -192T174 -192T157 -193Q143 -193 143 -185Q143 -182 145 -170Q149 -154 152 -151T172 -148Q220 -148 230 -141Q238 -136 258 -53T279 32Q279 33 272 29Q224 -10 172 -10Q117 -10 75 30T33 157ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z" style="stroke-width: 3;"></path></g><g data-mml-node="mo" transform="translate(316.8,-2) translate(-250 0)"><path data-c="2D9" d="M190 609Q190 637 208 653T252 669Q275 667 292 652T309 609Q309 579 292 564T250 549Q225 549 208 564T190 609Z" style="stroke-width: 3;"></path></g></g></g></g></g></svg><mjx-assistive-mml unselectable="on" display="inline" style="top: 0px; left: 0px; clip: rect(1px, 1px, 1px, 1px); -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; position: absolute; padding: 1px 0px 0px 0px; border: 0px; display: block; width: auto; overflow: hidden;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mrow data-mjx-texclass="ORD"><mover><mi>q</mi><mo>˙</mo></mover></mrow></math></mjx-assistive-mml></mjx-container></td>
      </tr>
      <tr>
         <th>q<sub><sub><small>2</small></sub></sub></th>
         <td>Doubles <mjx-container class="MathJax" jax="SVG" style="direction: ltr; position: relative;"><svg style="overflow: visible; min-height: 1px; min-width: 1px; vertical-align: -0.439ex;" xmlns="http://www.w3.org/2000/svg" width="1.041ex" height="2.174ex" role="img" focusable="false" viewBox="0 -767 460 961" aria-hidden="true"><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="TeXAtom" data-mjx-texclass="ORD"><g data-mml-node="mover"><g data-mml-node="mi"><path data-c="1D45E" d="M33 157Q33 258 109 349T280 441Q340 441 372 389Q373 390 377 395T388 406T404 418Q438 442 450 442Q454 442 457 439T460 434Q460 425 391 149Q320 -135 320 -139Q320 -147 365 -148H390Q396 -156 396 -157T393 -175Q389 -188 383 -194H370Q339 -192 262 -192Q234 -192 211 -192T174 -192T157 -193Q143 -193 143 -185Q143 -182 145 -170Q149 -154 152 -151T172 -148Q220 -148 230 -141Q238 -136 258 -53T279 32Q279 33 272 29Q224 -10 172 -10Q117 -10 75 30T33 157ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z" style="stroke-width: 3;"></path></g><g data-mml-node="mo" transform="translate(316.8,-2) translate(-250 0)"><path data-c="2D9" d="M190 609Q190 637 208 653T252 669Q275 667 292 652T309 609Q309 579 292 564T250 549Q225 549 208 564T190 609Z" style="stroke-width: 3;"></path></g></g></g></g></g></svg><mjx-assistive-mml unselectable="on" display="inline" style="top: 0px; left: 0px; clip: rect(1px, 1px, 1px, 1px); -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; position: absolute; padding: 1px 0px 0px 0px; border: 0px; display: block; width: auto; overflow: hidden;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mrow data-mjx-texclass="ORD"><mover><mi>q</mi><mo>˙</mo></mover></mrow></math></mjx-assistive-mml></mjx-container> per level</td>
      </tr>
      <tr>
         <th>K</th>
         <td>Will double, triple, or quadruple <mjx-container class="MathJax" jax="SVG" style="direction: ltr; position: relative;"><svg style="overflow: visible; min-height: 1px; min-width: 1px; vertical-align: -0.025ex;" xmlns="http://www.w3.org/2000/svg" width="1.02ex" height="1.76ex" role="img" focusable="false" viewBox="0 -767 451 778" aria-hidden="true"><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="TeXAtom" data-mjx-texclass="ORD"><g data-mml-node="mover"><g data-mml-node="mi"><path data-c="1D45F" d="M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z" style="stroke-width: 3;"></path></g><g data-mml-node="mo" transform="translate(281.1,-2) translate(-250 0)"><path data-c="2D9" d="M190 609Q190 637 208 653T252 669Q275 667 292 652T309 609Q309 579 292 564T250 549Q225 549 208 564T190 609Z" style="stroke-width: 3;"></path></g></g></g></g></g></svg><mjx-assistive-mml unselectable="on" display="inline" style="top: 0px; left: 0px; clip: rect(1px, 1px, 1px, 1px); -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; position: absolute; padding: 1px 0px 0px 0px; border: 0px; display: block; width: auto; overflow: hidden;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mrow data-mjx-texclass="ORD"><mover><mi>r</mi><mo>˙</mo></mover></mrow></math></mjx-assistive-mml></mjx-container> depending on λ milestones</td>
      </tr>
      <tr>
         <th>m</th>
         <td>Will instantly increase <mjx-container class="MathJax" jax="SVG" style="direction: ltr; position: relative;"><svg style="overflow: visible; min-height: 1px; min-width: 1px; vertical-align: -0.489ex;" xmlns="http://www.w3.org/2000/svg" width="1.17ex" height="2.224ex" role="img" focusable="false" viewBox="0 -767 517 983" aria-hidden="true"><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="TeXAtom" data-mjx-texclass="ORD"><g data-mml-node="mover"><g data-mml-node="mi"><path data-c="1D70C" d="M58 -216Q25 -216 23 -186Q23 -176 73 26T127 234Q143 289 182 341Q252 427 341 441Q343 441 349 441T359 442Q432 442 471 394T510 276Q510 219 486 165T425 74T345 13T266 -10H255H248Q197 -10 165 35L160 41L133 -71Q108 -168 104 -181T92 -202Q76 -216 58 -216ZM424 322Q424 359 407 382T357 405Q322 405 287 376T231 300Q217 269 193 170L176 102Q193 26 260 26Q298 26 334 62Q367 92 389 158T418 266T424 322Z" style="stroke-width: 3;"></path></g><g data-mml-node="mo" transform="translate(341.8,-2) translate(-250 0)"><path data-c="2D9" d="M190 609Q190 637 208 653T252 669Q275 667 292 652T309 609Q309 579 292 564T250 549Q225 549 208 564T190 609Z" style="stroke-width: 3;"></path></g></g></g></g></g></svg><mjx-assistive-mml unselectable="on" display="inline" style="top: 0px; left: 0px; clip: rect(1px, 1px, 1px, 1px); -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; position: absolute; padding: 1px 0px 0px 0px; border: 0px; display: block; width: auto; overflow: hidden;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mrow data-mjx-texclass="ORD"><mover><mi>ρ</mi><mo>˙</mo></mover></mrow></math></mjx-assistive-mml></mjx-container> by 1.5x</td>
      </tr>
      <tr>
         <th>n</th>
         <td>Will instantly increase <mjx-container class="MathJax" jax="SVG" style="direction: ltr; position: relative;"><svg style="overflow: visible; min-height: 1px; min-width: 1px; vertical-align: -0.489ex;" xmlns="http://www.w3.org/2000/svg" width="1.17ex" height="2.224ex" role="img" focusable="false" viewBox="0 -767 517 983" aria-hidden="true"><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="TeXAtom" data-mjx-texclass="ORD"><g data-mml-node="mover"><g data-mml-node="mi"><path data-c="1D70C" d="M58 -216Q25 -216 23 -186Q23 -176 73 26T127 234Q143 289 182 341Q252 427 341 441Q343 441 349 441T359 442Q432 442 471 394T510 276Q510 219 486 165T425 74T345 13T266 -10H255H248Q197 -10 165 35L160 41L133 -71Q108 -168 104 -181T92 -202Q76 -216 58 -216ZM424 322Q424 359 407 382T357 405Q322 405 287 376T231 300Q217 269 193 170L176 102Q193 26 260 26Q298 26 334 62Q367 92 389 158T418 266T424 322Z" style="stroke-width: 3;"></path></g><g data-mml-node="mo" transform="translate(341.8,-2) translate(-250 0)"><path data-c="2D9" d="M190 609Q190 637 208 653T252 669Q275 667 292 652T309 609Q309 579 292 564T250 549Q225 549 208 564T190 609Z" style="stroke-width: 3;"></path></g></g></g></g></g></svg><mjx-assistive-mml unselectable="on" display="inline" style="top: 0px; left: 0px; clip: rect(1px, 1px, 1px, 1px); -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; position: absolute; padding: 1px 0px 0px 0px; border: 0px; display: block; width: auto; overflow: hidden;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mrow data-mjx-texclass="ORD"><mover><mi>ρ</mi><mo>˙</mo></mover></mrow></math></mjx-assistive-mml></mjx-container> by 3x every 11 levels</td>
      </tr>
   </tbody>
</table>

<br>
<br>

#### FI Strategy

##### Idle

For idle, we simply autobuy all. The idle strategy doesn't change much other than we will not Milestone Swap. If you are able to check in every 30 minutes or so, you can manually buy \\(q_1\\) and \\(n\\). Just make sure that you autobuy \\(q_1\\) when you are close to getting a mod23 boost.

##### Active

The active strategies are a bit more involved. Depending on how active you'd like to be, there are several potential strategies. There's the standard doubling chasing [FId](/guides/theory-strategies/#fid), which is just autobuy all except \\(q_1\\) and \\(n\\), where you buy them when they are less than 10% cost of minimum(\\(q_2\\), \\(K\\), and \\(m\\)).

For the milestone swapping strategy, the general idea is to switch milestones from \\(q_1\\), to \\(m\\)/\\(n\\) milestones whenever we gain 3x to \\(q\\) after purchasing \\(q_2\\), or some gain adjusted for $\dot{q}$ from purchasing \\(q_1\\). Please see the [Theory Strategies](/guides/theory-strategies/#fimsd) section of the guide for how to perform milestone swapping.

##### FI Milestone Swapping Explanation

This theory has a milestone swapping strategy before full milestones. We have \\(q_1\\) exponent milestones, which increases $\dot{q}$.

The reason milestone swapping works is because the benefits of using \\(q_1\\) related milestones (having high \\(q\\)) remain when you switch to \\(m\\) and \\(n\\) milestones. If we only use \\(q_1\\) exponent, then we have really high \\(q\\), however, we don't have the benefits to $\dot\rho$ that \\(m\\) and \\(n\\) provide. If we only use \\(m\\) and \\(n\\) milestones, then we have low \\(q\\), but have normal $\dot\rho$. If we regularly swap them, we can increase \\(q\\) through the \\(q_1\\) milestone, then take advantage of the \\(m\\) and \\(n\\) milestones to gain \\(\rho\\), while keeping the high value of \\(q\\) we've accumulated earlier!

For a more detailed explanation on how to actually do the strategy, please see the [Theory Strategies](/guides/theory-strategies/#fims) section of the guide.

#### FI Milestone Routing Explanation

In FI, you can unlock milestones in 2 ways:

1) by gaining \\(\rho\\) like normal, or
2) buy purchasing the milestone upgrades for \\(\lambda\\) and \\(g(x)\\) in the permanent upgrades tab
where you would normally buy publishing, buy all, and autobuy.

Buying the milestone upgrades will **not** give you a milestone, but will instead increase the max level of the milestone that you purchased the upgrade for. For example, if you buy the \\(g(x)\\) perma-upgrade for lvl 1, you will permanently unlock the first lvl of the \\(g(x)\\) milestone. Moving milestones into these are **almost** always the best thing you can do mid publish, even if you need to sacrifice a variable to do so, with one exception.

It is important to note, however, is that buying or refunding \\(g(x)\\) milestones will reset your \\(q\\), \\(q_2\\) level and will change the \\(q_2\\) cost function. Similarly, buying or refunding \\(\lambda\\) milestones will reset your \\(K\\) and change the \\(K\\) cost function.

FI perma-upgrades are at 1e100, 1e450, and 1e1050 \\(\rho\\) for the \\(g(x)\\) milestone and 1e350 and 1e750 \\(\rho\\) for the \\(\lambda\\) milestone. Upon buying these milestone, immediately put a milestone from \\(q_1\\) or \\(n\\) into them depending on how many milestone you have, **except for the 3rd level of the \\(g(x)\\) milestone**.

The 3rd level of the \\(g(x)\\) milestone is bad early on, and is only worth buying at e1076ρ. Swapping to the 3rd level of the \\(g(x)\\) milestone mid-pub is known as PermaSwap, check the [theory simulator](https://exponential-developers.github.io/sim-3.0/) to know if you should do this strategy.

#### FI Milestone Route

###### <span style="color: var(--palette-stroke-warning);">Colored milestones</span> are perma-upgrade milestones that move into that upgrade.

<table class="milestone_routing">
   <tbody>
      <tr>
         <td>1</td>
         <td class="arrow">→</td>
         <td>1/1</td>
         <td class="arrow">→</td>
         <td>1/1/0/1</td>
         <td class="arrow">→</td>
         <td>1/1/0/2</td>
      </tr>
   </tbody>
</table>
<table class="milestone_routing">
   <tbody>
      <tr>
         <td class="perm_upg">1/1/0/1/1</td>
         <td class="arrow">→</td>
         <td>1/1/0/2/1</td>
         <td class="arrow">→</td>
         <td>1/1/1/2/1</td>
      </tr>
   </tbody>
</table>
<table class="milestone_routing">
   <tbody>
      <tr>
         <td class="perm_upg">1/1/0/2/1/1</td>
         <td class="arrow">→</td>
         <td>1/1/1/2/1/1</td>
         <td class="arrow">→</td>
         <td class="perm_upg">1/1/0/2/2/1</td>
      </tr>
   </tbody>
</table>
<table class="milestone_routing">
   <tbody>
      <tr>
         <td>1/1/1/2/2/1</td>
         <td class="arrow">→</td>
         <td>1/1/2/2/2/1</td>
         <td class="arrow">→</td>
         <td class="perm_upg">1/1/1/2/2/2</td>
      </tr>
   </tbody>
</table>
<table class="milestone_routing">
   <tbody>
      <tr>
         <td>1/1/2/2/2/2</td>
         <td class="arrow">→</td>
         <td>1/1/3/2/2/2</td>
         <td class="arrow">→</td>
         <td class="perm_upg">1/1/2/2/3/2</td>
      </tr>
   </tbody>
</table>
<table class="milestone_routing">
   <tbody>
      <tr>
         <td>1/1/3/2/3/2</td>
      </tr>
   </tbody>
</table>
<table class="milestone_routing">
   <tbody>
      <tr>
         <td class="invisible"><strong>Or</strong></td>
         <td class="invisible"></td>
         <td class="invisible"></td>
      </tr>
      <tr>
         <td>1</td>
         <td class="arrow">→</td>
         <td>2</td>
         <td class="arrow">→</td>
         <td>4x2</td>
      </tr>
   </tbody>
</table>
<table class="milestone_routing">
   <tbody>
      <tr>
         <td>4-x1 <span class="perm_upg">5x1</span></td>
         <td class="arrow">→</td>
         <td>4</td>
         <td class="arrow">→</td>
         <td>3</td>
      </tr>
   </tbody>
</table>
<table class="milestone_routing">
   <tbody>
      <tr>
         <td>3-x1 <span class="perm_upg">6x1</span></td>
         <td class="arrow">→</td>
         <td>3</td>
         <td class="arrow">→</td>
         <td>3-x1 <span class="perm_upg">5x1</span></td>
      </tr>
   </tbody>
</table>
<table class="milestone_routing">
   <tbody>
      <tr>
         <td>3x2</td>
         <td class="arrow">→</td>
         <td>3-x1 <span class="perm_upg">6x1</span></td>
         <td class="arrow">→</td>
         <td>3x2</td>
      </tr>
   </tbody>
</table>
<table class="milestone_routing">
   <tbody>
      <tr>
         <td>3-x1 <span class="perm_upg">5x1</span></td>
         <td class="arrow">→</td>
         <td>3</td>
      </tr>
   </tbody>
</table>

<style>

h4 {
   font-size: 1.2rem;
}
h3 {
   font-size: 1.5rem;
}

</style>

### Fractal Patterns (FP)

#### FP Overview

 This custom theory was released at the same time as Fractional Integration. FP is a theory that takes advantage of the growth of the 3 fractal patterns: Toothpick Sequence \\(T_n\\), Ulam-Warburton cellular automaton \\(U_n\\), Sierpiński triangle \\(S_n\\). As each of the fractals grows, so does $\tau$. An explanation of each section of the equations is shown below:

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

The first equation is for \\(\rho\\), which is the product of \\(c_1 c_2 qr\\) and the fractal term $T_n^{7}$, where \\(T_n\\) is the nth term of the Toothpick Sequence shown below. Its exponent starts at 7, but when you unlock the \\(s\\) milestone, it will change to \\(5+s\\), where \\(s\\) is an upgrade.

The $\dot{q}$ equation is similar, but depends on Ulam-Warburton Cellular Automaton \\(U_n\\) instead. Its exponent starts at 7, and changes to \\(7+s\\) when you unlock the \\(s\\) milestone, meaning this milestone has no drawback to \\(q\\) unlike \\(\rho\\). 

\\(q\\) growth also depends on the \\(A\\) term, which itself depends on \\(q_2\\). For the exact formula, if \\(k\\) is the level of \\(q_2\\), then $A=(2^{2k+1}+1)/3$. This means that each level of \\(q_2\\) tends to a x4 increase to $\dot{q}$.

The \\(r\\) equation depends on all fractals available in FP.

##### Toothpick Sequence
$$T_{2^k+i}=\frac{2^{2k+1}+1}{3}, \text{if } i = 0$$ 
$$T_{2^k+i}=T_{2^k}+2T_i + T_{i+1}-1,   \text{if } 1 \leq i \lt 2^k$$

This is the Toothpick Sequence. We can't really explain it without getting technical, but this sequence grows as \\(n\\) grows. It is important to note that it grows faster right before a new power of two, and slower right after a power of two. This trait is shared with the next fractal. These \\(n=2^k\\) spikes have **a lot** of influence on the theory speed, especially on the second half of it.

If you want to learn more about the Toothpick Sequence, you can search about it on the internet. You can find an animation of the fractal [here](https://oeis.org/A139250/a139250.anim.html).

##### Ulam-Warburton Cellular Automaton
$$\\u_0 = 0,\ u_1 = 1,\ \dots,\ u_n=4(3^{w_{n-1}-1})$$
$$\\w_n = n-\sum_{k=1}^{∞}\left\lfloor\frac{n}{2^k}\right\rfloor$$
$$\\U_n = \sum_{i=0}^n u_i$$

These equations are used to describe the Ulam-Warburton Cellular Automaton (\\(U_n\\)). This is the second main fractal used in FP. Like \\(T_n\\), it grows faster right before a new power of two, and slower right after a power of two.

The \\(w_n\\) equation can look intimidating, but it is simpler to explain than some of the other formulas. \\(w_n\\) is the Hamming weight of the binary representation of \\(n\\), which is the number of 1s that appear in its representation. Right before a power of two, a number has a lot of 1s on the left of its binary representation, which means \\(w_n\\) is higher, and as such \\(U_n\\) grows faster with \\(n\\). The opposite is true for right after a power of two.

You can find an animation of the fractal [here](https://oeis.org/A139250/a139250.anim.html) after selecting it in "Main sequence".

##### Sierpiński Triangle
$$S_n = 3^{n-1} → S_n = 2*3^{n-1}-1$$

This is probably the most famous fractal used in FP. It can be obtained from an equilateral triangle, by recursively subdividing each triangle into 4 smaller identical triangles and removing the middle one. Its formula is much simpler than the other two fractals.

#### FP Variable Description
Approximate variable strengths on $\dot\rho$ with all milestones are as follows:

<table class="T2">
<caption>Brief summary of variable strengths of FP.</caption>
   <thead><tr>
   <th class="invisible"></th>
   <th colspan="2" style="text-align:center">Brief Description</th>
   </tr></thead>
   <tbody>
      <tr>
         <th>$$\dot{ t }$$</th>
         <td>Makes t increase faster. Since there are only 4 levels, after a certain point, this variable is effectively fixed.</td>
      </tr>
      <tr>
         <th>c<sub><sub><small>1</small></sub></sub></th>
         <td>c<sub><sub><small>1</small></sub></sub> is 150x over 100 levels for mod 100 <!-- for the pain --></td>
      </tr>
      <tr>
         <th>c<sub><sub><small>2</small></sub></sub></th>
         <td>Doubles ρ dot per level (instantaneous).</td>
      </tr>
      <tr>
         <th>q<sub><sub><small>1</small></sub></sub></th>
         <td>Roughly is a 10x over 10 lvls mod10 for <mjx-container class="MathJax" jax="SVG" style="direction: ltr; position: relative;"><svg style="overflow: visible; min-height: 1px; min-width: 1px; vertical-align: -0.439ex;" xmlns="http://www.w3.org/2000/svg" width="1.041ex" height="2.174ex" role="img" focusable="false" viewBox="0 -767 460 961" aria-hidden="true"><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="TeXAtom" data-mjx-texclass="ORD"><g data-mml-node="mover"><g data-mml-node="mi"><path data-c="1D45E" d="M33 157Q33 258 109 349T280 441Q340 441 372 389Q373 390 377 395T388 406T404 418Q438 442 450 442Q454 442 457 439T460 434Q460 425 391 149Q320 -135 320 -139Q320 -147 365 -148H390Q396 -156 396 -157T393 -175Q389 -188 383 -194H370Q339 -192 262 -192Q234 -192 211 -192T174 -192T157 -193Q143 -193 143 -185Q143 -182 145 -170Q149 -154 152 -151T172 -148Q220 -148 230 -141Q238 -136 258 -53T279 32Q279 33 272 29Q224 -10 172 -10Q117 -10 75 30T33 157ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z" style="stroke-width: 3;"></path></g><g data-mml-node="mo" transform="translate(316.8,-2) translate(-250 0)"><path data-c="2D9" d="M190 609Q190 637 208 653T252 669Q275 667 292 652T309 609Q309 579 292 564T250 549Q225 549 208 564T190 609Z" style="stroke-width: 3;"></path></g></g></g></g></g></svg><mjx-assistive-mml unselectable="on" display="inline" style="top: 0px; left: 0px; clip: rect(1px, 1px, 1px, 1px); -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; position: absolute; padding: 1px 0px 0px 0px; border: 0px; display: block; width: auto; overflow: hidden;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mrow data-mjx-texclass="ORD"><mover><mi>q</mi><mo>˙</mo></mover></mrow></math></mjx-assistive-mml></mjx-container> change (don't ask)</td>
      </tr>
      <tr>
         <th>q<sub><sub><small>2</small></sub></sub></th>
         <td>Quadruples <mjx-container class="MathJax" jax="SVG" style="direction: ltr; position: relative;"><svg style="overflow: visible; min-height: 1px; min-width: 1px; vertical-align: -0.439ex;" xmlns="http://www.w3.org/2000/svg" width="1.041ex" height="2.174ex" role="img" focusable="false" viewBox="0 -767 460 961" aria-hidden="true"><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="TeXAtom" data-mjx-texclass="ORD"><g data-mml-node="mover"><g data-mml-node="mi"><path data-c="1D45E" d="M33 157Q33 258 109 349T280 441Q340 441 372 389Q373 390 377 395T388 406T404 418Q438 442 450 442Q454 442 457 439T460 434Q460 425 391 149Q320 -135 320 -139Q320 -147 365 -148H390Q396 -156 396 -157T393 -175Q389 -188 383 -194H370Q339 -192 262 -192Q234 -192 211 -192T174 -192T157 -193Q143 -193 143 -185Q143 -182 145 -170Q149 -154 152 -151T172 -148Q220 -148 230 -141Q238 -136 258 -53T279 32Q279 33 272 29Q224 -10 172 -10Q117 -10 75 30T33 157ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z" style="stroke-width: 3;"></path></g><g data-mml-node="mo" transform="translate(316.8,-2) translate(-250 0)"><path data-c="2D9" d="M190 609Q190 637 208 653T252 669Q275 667 292 652T309 609Q309 579 292 564T250 549Q225 549 208 564T190 609Z" style="stroke-width: 3;"></path></g></g></g></g></g></svg><mjx-assistive-mml unselectable="on" display="inline" style="top: 0px; left: 0px; clip: rect(1px, 1px, 1px, 1px); -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; position: absolute; padding: 1px 0px 0px 0px; border: 0px; display: block; width: auto; overflow: hidden;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mrow data-mjx-texclass="ORD"><mover><mi>q</mi><mo>˙</mo></mover></mrow></math></mjx-assistive-mml></mjx-container> except for the first few levels</td>
      </tr>
            <tr>
         <th>r<sub><sub><small>1</small></sub></sub></th>
         <td>is roughly 10-20% every level to <mjx-container class="MathJax" jax="SVG" style="direction: ltr; position: relative;"><svg style="overflow: visible; min-height: 1px; min-width: 1px; vertical-align: -0.025ex;" xmlns="http://www.w3.org/2000/svg" width="1.02ex" height="1.76ex" role="img" focusable="false" viewBox="0 -767 451 778" aria-hidden="true"><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="TeXAtom" data-mjx-texclass="ORD"><g data-mml-node="mover"><g data-mml-node="mi"><path data-c="1D45F" d="M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z" style="stroke-width: 3;"></path></g><g data-mml-node="mo" transform="translate(281.1,-2) translate(-250 0)"><path data-c="2D9" d="M190 609Q190 637 208 653T252 669Q275 667 292 652T309 609Q309 579 292 564T250 549Q225 549 208 564T190 609Z" style="stroke-width: 3;"></path></g></g></g></g></g></svg><mjx-assistive-mml unselectable="on" display="inline" style="top: 0px; left: 0px; clip: rect(1px, 1px, 1px, 1px); -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; position: absolute; padding: 1px 0px 0px 0px; border: 0px; display: block; width: auto; overflow: hidden;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mrow data-mjx-texclass="ORD"><mover><mi>r</mi><mo>˙</mo></mover></mrow></math></mjx-assistive-mml></mjx-container>. It is roughly a 2x over mod5 (don't ask again) <!-- paco was right, its not mod10 --></td>
      </tr>
      <tr>
         <th>n</th>
         <td>n makes the fractal grow and helps ρ, q and r growth. n is very strong when getting a power of two, but weaker right after it.</td>
      </tr>
      <tr>
         <th>s</th>
         <td>s is an additive to Tn and Un exponents. Usually +0.15 per level, but increases to +0.2 from level 33 to level 40. s is the strongest purchase after a n=2^k</td>
      </tr>
   </tbody>
</table>

<br>
<br>

#### FP Strategy

##### Idle

For idle, we simply autobuy all, however, it is very slow to start idle, and it is suggested to be active until e950 $\rho$. The idle strategy doesn't change much. If you'd like to be more efficient while still being idle, you can stop buying $c_1$ around mod%100 50 lvls, or around when the last 2 digits in the level are 50 or more, then buy them in chunks of no more than 13. When you reach e700, you will need to milestone swap to be able to get any good progress, however, you only need to swap every 20-30 minutes to get some good results.

Once you have all milestones, autobuy all!

##### Active

The active strategies change constantly depending on your milestones and there is no definitive active strategy like most other actives that we know of currently due to the complexity of the theory. For example, exact ratios of when to buy variables are very difficult to find and the only known buying strategy is between c1 and c2. However, generally you can follow this order of buying s>n=q2>c2>=c1>q1>r1 but the longer your publish goes, the weaker q2 gets overall and will eventually become less valuable than c2. There are also edge cases where q1 is mod%10=0 and may be stronger than c1, which may be mid mod%100 cycle. The variable relationships are as follows:

###### C1 and C2 Buying

BUYING c1 EFFICIENTLY IS THE LARGEST BOOST TO RATES YOU CAN DO (outside of MS).

The only known ratio currently is c1 to c2 and, specifically, it is c1 price < 3/(lvl%100 + 2) * c2 price. But, for a more digestible strategy, you would want to:
When c1 mod 100 is < 92, buy c1 if c1 is (c1 mod 100) times cheaper than c2.
When c1 mod 100 is >= 92, wait until the sum to buy up to c1 mod 100 = 1 is cheaper than c2. Buy c1 upgrades as they become available.

More human way to do the second part is this: when c1 mod 100 == 91, switch to buying x10, see the cumulative price to get c1 mod 100 = 1, and if that is below c2 - it is time to buy c1 up to mod 100 = 1 using autobuy.

Note: the actual ratio for part 1 is actually (c1 mod 100) + 0.67, but that's harder to play as a human.

###### q1 and q2 Buying

q1 follows a mod 10 cycle, and adds ~100%, then ~50%, then ~33% and so on to $\dot{q}$.
q2 always quadruples the $\dot{q}$ (except the first few purchases).

This plays roughly like doubling chase, but in this case you have to adjust ratios slightly - for example, if q1 mod 10 is 0, you want to wait until q1 upgrade price is twice as cheap as q2, and so on.

###### Other variables and what to do about them.

s - always buy on sight.
n - buy after s.
r1 - check how much percentage increase it will give to $\dot{r}$, and then buy like normal doubling chase, autobuying is also fine.

Overall, We have s, n, c2 and q2, and we have c1, q1, and r1. The latter work roughly like doubling chase to the former most of the time, with additions of what was said about them beforehand. 

##### FP Milestone Swapping Explanation

FP has a milestone swap that involves 1 milestone. This is the milestone that adds s as an exponent (e700 $\rho$). The swap arises from the idea that initially, Tn power drops from 7 to 5 + s in the $\rho$ equation, and s is less than 2. Because of this, it makes sense to swap this milestone in for q growth, and swap it out for $\rho$ growth.

The swap is really hard to describe in terms of how long to keep it in and out but what can be said qualitatively:
- At first, you follow very fast swaps to recover $\rho$, and swaps gradually become slower and slower.
- As s grows, it makes sense to keep the milestone swapped in longer.

Milestone swap ends when s becomes > 2, and dies out when you can recover to that point very fast. Past ~e950 $\rho$, recovery takes ~1-3 minutes of idle time.

Milestone swap saves a LOT of time.

#### FP Milestone Route

<table class="milestone_routing">
   <tbody>
      <tr>
         <td>2</td>
         <td class="arrow">→</td>
         <td>2/2</td>
         <td class="arrow">→</td>
         <td>2/2/3</td></td>
         <td class="arrow">→</td>
         <td>2/2/3/1</td>
         <td class="arrow">→</td>
         <td>2/2/3/1/1</td>
         <td class="arrow">→</td>
         <td>2/2/3/1/1/1</td></td>
      </tr>
   </tbody>
</table>
<table class="milestone_routing">
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
         <td>1 x2</td>
         <td class="arrow">→</td>
         <td>2 x2</td>
         <td class="arrow">→</td>
         <td>3 x3</td>
         <td class="arrow">→</td>
         <td>4</td>
         <td class="arrow">→</td>
         <td>5</td>
         <td class="arrow">→</td>
         <td>6</td>
      </tr>
   </tbody>
</table>

FP Guide written by Snaeky, Hotab and Mathis S.

### Riemann Zeta Function (RZ)

#### RZ Overview

This Custom Theory was the first solo launch CT since SL (has it really been over 2 years!). RZ is a very fast CT with a completion time estimated below 70 days! The theory follows the Zeta function over the critical line. Rumors say that reaching 1e1500 will be a proof of the Riemann Hypothesis, or if you prove it yourself, we will just give you the \\(\rho\\).

Its strategies range a lot in comparison to other theories, however, RZ is not an idle theory at first and you must be active before about e700 \\(\rho\\) due to its short publications. It also has a milestone swapping phase from e50 to e400 \\(\rho\\). After e600, the entire dynamic of the theory changes with the inclusion of the black hole.

#### RZ Equation Description

$$\dot{\rho}=\frac{t{\mkern 1mu}c_1^{1.25}c_2w_1}{|\zeta(\frac{1}{2}+it)|/2^{b}+10^{-2}}$$

$$\dot{\delta}=w_1w_2w_3\times|\zeta '(\textstyle\frac{1}{2}+it)|^b$$

<br>

These two equations follow the analytic continuation of the Riemann Zeta function along the critical $1/2 + it$ line, where all the "non-trivial" zeros of this function should be located according to the Riemann Hypothesis.

The background animation of the CT helps to understand the behavior of the \\(\zeta\\) along the critical line. You can see the background as the complex plane, with the middle point being zero, and the particle following the value of \\(\zeta\\) at the given \\(t\\). The further the particle is from the origin, the higher $|\zeta(\frac{1}{2}+it)|$ is. The faster the particle travels, the higher $|\zeta '(\textstyle\frac{1}{2}+it)|$ is.

This particle describes spirals, and passes by the origin at each of its turns.

We can see in the $\dot{\rho}$ equation that $|\zeta(\frac{1}{2}+it)|/2^{b}+10^{-2}$ is on the denominator, which means \\(\rho\\) grows faster when $\zeta(\frac{1}{2}+it)$ is close to zero. The $10^{-2}$ term prevents $\dot{\rho}$ from exploding at each zero. The $2^{b}$ term helps the growth of \\(\rho\\) when $\zeta(\frac{1}{2}+it)$ is away from zero.

$\delta$ grows faster as $|\zeta '(\textstyle\frac{1}{2}+it)|$ is higher.

<br>

#### RZ Variable Description
Approximate variable strengths on $\dot\rho$ with all milestones are as follows:

<table class="T2">
<caption>Brief summary of variable strengths of RZ.</caption>
   <thead><tr>
   <th class="invisible"></th>
   <th colspan="2" style="text-align:center">Brief Description</th>
   </tr></thead>
   <tbody>
      <tr>
         <th>c<sub><sub><small>1</small></sub></sub></th>
         <td>Instant boost to ρ dot, doubles every 8 lvls</td>
      </tr>
      <tr>
         <th>c<sub><sub><small>2</small></sub></sub></th>
         <td>Doubles ρ dot per level (instantaneous).</td>
      </tr>
      <tr>
         <th>w<sub><sub><small>1</small></sub></sub></th>
         <td>Instant boost to both ρ dot and δ dot. Doubles every 8 lvls. Bought with δ.</td>
      </tr>
      <tr>
         <th>w<sub><sub><small>2</small></sub></sub></th>
         <td>Doubles δ dot every level. Bought with δ.</td>
      </tr>
      <tr>
         <th>w<sub><sub><small>3</small></sub></sub></th>
         <td>Doubles δ dot every e30δ from e600δ on. Bought with δ.</td>
      </tr>
      <tr>
         <th>b</th>
         <td>Boosts ρ dot (when ζ is away from zero) and δ dot. Is capped at 6 lvls maxing out at 3 (+0.5/lvl).</td>
      </tr>
   </tbody>
</table>

<br><br>

#### RZ Strategy

##### Pre-e600 \\(\rho\\)

The optimal publication multiplier is around 2-4 before e50 \\(\rho\\) and 4-8 after, but can vary if you are close to the next milestone. As always, you can check with [the sim](https://exponential-developers.github.io/sim-3.0/).

##### Idle

For idle, we simply autobuy all. The idle strategy doesn't change much. If you'd like to be more efficient while still being idle, you can remove milestones and stack them into the \\(c_1\\) exponent milestones when you're about to publish (from e50 to e400). Don't forget to change milestones back after publishing!

Once you have all milestones, autobuy all!

##### Active

For an active buying strategy, buy \\(c_1\\) and \\(w_1\\) and a 4x difference to \\(c_2\\) and \\(w_2\\) respectively. Read the next section for the milestone swapping strategies.

##### RZ Milestone Swapping Explanation

From e50 to e400 \\(\rho\\), you will swap from 2>3>1 for recovery to 2>1>3 (explanation for this notation can be found [here](/guides/theories-1-4/#t2-strategy)) for pushing \\(\rho\\) once you get e3 away from recovery. [The sim](https://exponential-developers.github.io/sim-3.0/) can tell you when you should perform this swap.

For a more active recovery, you can swap from 2>3>1 to 2>1>3 when you are near or are at a 0. This strategy is known as SpiralSwap. This is extremely hard and may slow down progress if you are not accurate/fast enough.

##### Post-e600 \\(\rho\\)

Black Hole (BH) is not a normal milestone. Once you get BH, you will get 2 new buttons added to your theory, one on the bottom right of your equation screen that looks like a black hole; and one on the top right next to your publish button that looks like a back arrow. The back arrow button will reduce \\(t\\) by 5 and will move \\(\zeta\\) back to where it was at that \\(t\\). The BH button will bring up the BH menu. In the BH menu you can set a value where you want BH to activate relative to \\(t\\) and the game will automatically activate BH, or you can activate it manually at any time by pressing the "Unleash a black hole" button.

When BH is unleashed, \\(t\\) gets set back and frozen at the last 0 it encountered. For example, when \\(\zeta\\) crosses 0 at \\(14.15t\\), that 0 is saved, if you Unleash BH after \\(14.15t\\) and before the next 0 (\\(21.025t\\)), \\(t\\) will be locked to \\(14.15\\) and \\(\zeta'\\) will be locked at the value it was at at \\(14.15t\\).

Once you get Black Hole (BH), you will use it to push both \\(\rho\\) to get to a good zero. Good zeros are zeros where \\(\zeta'\\) is higher than all other local zeros. For example, all zeroes from \\(14.15t\\) to \\(25.025t\\) either have less \\(\zeta'\\) or have a lower \\(t\\):\\(\zeta'\\) ratio. We want as much \\(\zeta'\\) as possible because we can now permanently maximize the \\(\zeta\\) function for $\dot{\rho}$. We also want a good \\(t\\) value for our publication.

To know which zero to use, please use the [the sim](https://exponential-developers.github.io/sim-3.0/). It will output the exact \\(t\\) of the zero to use.

**Always set your BH activation threshold to 0.01 above the value recommended by the sim to ensure that the Black Hole will correctly lock to your zero**. For example, if it recommends t=3797.85, put your activation threshold to 3797.86.

The optimal publication multiplier is often 5, but it is sometimes higher depending on the zero used or if you get a new \\(w_3\\) during the publication. Check the sim to know the optimal multiplier for your publication.

Variable buying strategies stay the same as before.

**Don't forget to buy the $w_3$ permanent upgrade after reaching e1000ρ!** The first level of \\(w_3\\) will not be available right away, so you can buy the permanent upgrade at the end of the pub.

#### RZ Milestone Route

<table class="milestone_routing">
   <tbody>
      <tr>
         <td>0/1/0</td>
         <td class="arrow">→</td>
         <td>0/1/1</td>
         <td class="arrow">→</td>
         <td>3/1/1</td></td>
         <td class="arrow">→</td>
         <td>3/1/1/1</td></td>
      </tr>
   </tbody>
</table>
<table class="milestone_routing">
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
         <td>2</td>
         <td class="arrow">→</td>
         <td>3</td>
         <td class="arrow">→</td>
         <td>1 x3</td>
         <td class="arrow">→</td>
         <td>4</td>
      </tr>
   </tbody>
</table>

<style>
h4 {
   font-size: 1.2rem;
}
h3 {
   font-size: 1.5rem;
}
</style>
