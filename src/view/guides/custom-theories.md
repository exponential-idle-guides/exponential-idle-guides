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

Custom theories are theories made by players in the community. As of April 1st, 2024, there are 6 official
custom theories that contribute up to e600 \\(\tau \\) per theory; Weierstrass Sine Product made by Xelaroc (WSP), Sequential Limits by Ellipsis (SL), Euler's Formula by Peanut, Snaeky, and XLII (EF), Convergents to Square Root 2 (CSR2/CS2) by Solarion, Fractional Integration (FI) by Gen and Snaeky, and Fractal Patterns (FP) by XLII. The theories will be abbreviated as WSP, SL, EF, CSR2, FI, and FP from now on.

In order to balance custom theories with the main theories in the endgame, custom theories have a low conversion rate (with one exception) from \\(\rho\\) to $\tau$. WSP, SL, and CSR2 have conversion rates of
$\tau$ = \\(\rho^{0.4}\\) while EF has a \\(\tau \\) conversion rate of $\tau$ = \\(\rho^{1.6}\\) and FP with a conversion rate of $\tau$ = \\(\rho^{0.3}\\).

### Which Custom Theories (CTs) should I do?

In general, you want to be as efficient as possible since R9 does not affect custom theories. If you cannot be active, try not to do an active theory or do an active strategy. Some custom theories are more active than normal theories and it is highly suggested that if you are doing active strategy for a Custom theory (SL or FI before all milestones, CSR2, WSP, or early FP) that you do an idle main theory (such as t2, t4, or t6) so that you don't miss out on \\(\tau/hour\\).

If you have time for active strategies, try to do the CT with the highest active \\(\tau/hour\\), or you can chase a spike in tau/hour, such as EF e50 \\(rho\\) or FP e95 \\(rho\\). You can check this with [the sim.](https://theory-simulator.tredec.repl.co/)<br><br>

 For idle time, do the one with the highest idle \\(\tau/hour \\), (or the longest publication time if you're doing overnights), with preference toward EF, SL, FP past e1050, or FI when you only have 1 milestone to swap. For example, if SL has 2 \\(\tau/hour \\) and CSR2 also has 2 \\(\tau/hour \\), ideally we would pick SL. The reason we prefer SL, EF, FP and FI is because these theories contain multiple growing variables. This means the theories generally require less babysitting as the variables grow by themselves. The assumption of daytime idle is that we can check and publish a theory every 2 hours or so. If you can only check every 8 hours idle, please see the overnight strategy just above.<br><br>

### Weierstrass Sine Product (WSP)

#### WSP Overview

The very first official custom theory; WSP was developed by Xelaroc, who also came up with some of the strategies used in the theory. The idea behind the theory is to use the factorization of sine to increase \\(\rho\\). There are multiple equations with this theory, and some may look daunting, so we'll have a look at each one.<br><br>

#### WSP Equation Description

\\(\dot{\rho} = q_1^{1.04}q_2q\\)

\\(\dot{q} = c_2s_n({\chi}) / sin({\chi})\\)

\\(s_n({x}) := x\prod_{k=1}^{n}(1-\frac{x}{k\pi}^2)\\)

\\(\chi = \pi\frac{c_1n}{c_1+n/3^{3}}+1\\)
<br><br>

The first line states that the rate of change in rho is \\(q_1^{1.04}q_2q\\). Initially it's simply \\(q_1q_2q\\) without any exponent. With milestones we add more exponents. <br>

For the second line, the higher the \\(\chi\\) (spelled 'chi', pronounced as 'kai'), the higher the \\(s_n({\chi})\\). We want to increase \\(\chi\\) by increasing \\(n \\) and \\(c_1\\). The signs of \\(s_n({\chi})\\) and \\(sin({\chi})\\) will always match, so the fraction can't be negative. Additionally, the \\(c_2 \\) variable is a milestone which is not initially available. <br>

The third line is the most complicated. Generally we can factorize an equation when its graph touches the x-axis. For a sine curve, it touches the x-axis starting from x = 0, and repeats every x= \\(\pi\\). These multiplied factors form the basis of the Weierstrass Sine Product. A simpler interpretation is that we can see 'x' appearing both outside and inside the products in the numerator. Since \\(\chi\\) is 'x' here, the higher the \\(\chi\\), the higher the \\(s_n({\chi})\\) as stated earlier. <br>

Finally, the actual \\(\chi\\) equation: increasing \\(c_1 \\) and \\(n \\) increases \\(\chi\\). Note that from the fraction, we don't want to increase only \\(c_1 \\) or only \\(n\\). Rather we should increase both. Using standard strategies this should be no problem. The \\(n/3^{3}\\) part in the denominator is a milestone term. This means that \\(n \\) is better than \\(c_1 \\) as more \\(n/3\\) milestones are accumulated. <br><br>

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

#### WSP strategy

Early game the variable strengths are ordered as follows: 

\\(q_2 \\) ≈ \\(c_2 \\) > \\(n \\) > \\(c_1 \\) > \\(q_1 \\) <br><br>

Late game these become:

\\(n\\) > \\(q_2 \\) ≈ \\(c_2 \\) > \\(q_1 \\) >>> \\(c_1 \\) <br><br>

##### Idle

Before you get e400 \\(\rho \\) for idle, simply autobuy all. <br><br>

Once you have e400 \\(\rho \\), \\(c_1 \\) starts to become extremely bad. Because of this, the new idle strategy would be to autobuy all for 20 seconds or so. Then turn \\(c_1 \\) OFF. Continue to autobuy the rest of the variables. <br>
<br>

##### Active

For a simple active strategy before e400 \\(\rho \\), simply autobuy \\(q_2 \\) and \\(c_2 \\) since they double the rates long term. \\(n \\) and \\(c_1 \\) give approximately 60% boost (with \\(n \\) becoming more powerful with milestones and vice versa for \\(c_1\\)). We will buy \\(n \\) and \\(c_1 \\) when their costs are less than 50% of the minimum of \\(q_2 \\) and \\(c_2 \\).
<br>
For \\(q_1 \\), we will buy it when its cost is less than 10% of the minimum of \\(q_2 \\) and \\(c_2 \\). For example, if \\(q_1 \\) costs 1.2e100 and \\(q_2 \\) costs 1e101, we would not buy \\(q_1 \\) as it's 'too expensive' compared to \\(q_2 \\).  <br><br>

For active strategy, \\(n \\) starts to become more powerful than \\(q_2 \\). If their costs are similar, we will prioritize \\(n \\) first. For example, if \\(n \\) costs 1.4e101 and \\(q_2 \\) costs 1.2e101, we will buy \\(n \\) first. Similarly to the idle strategy, we will buy \\(c_1 \\) only for the first 20 seconds or so. If you want more information on the different strategies pertaining to WSP, please see [List of theory strategies](https://exponential-idle-guides.netlify.app/guides/theory-strategies/)<br><br>

#### WSP milestone route

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

The first line is the main part of the equation. We want to maximize \\(\dot{\rho_1}\\) to increase $\tau$. The '1.06' exponent is from milestones. The default is no exponent. From the equation, we can see that \\(\dot{\rho_1} \\) is proportional to approximately \\(\sqrt{\rho_2} \\). This means that if we quadruple \\(\rho_2 \\), we would approximately double \\(\rho_1 \\) long term. The denominator of the fraction has a gamma symbol (\\(\gamma\\)) which looks like the letter 'y'. As our \\(\rho \\) increases, our \\(\gamma \\) becomes closer to 'e', so the denominator will decrease, which increases \\(\rho_1 \\). We will explore \\(\gamma \\) in the next equation.

The second equation refers to Stirling's approximation of Euler's number '\\(e\\)'. As \\(\rho_3 \\) increases, \\(\gamma \\) converges to Euler's number. Long term we can approximate this convergence as linear. The implication is if we double \\(\rho_3 \\), \\(\gamma\\) will be twice as close to Euler's number, so \\(e-\gamma\\) in the first equation will be halved.

The third equation relates \\(\rho_2 \\) with \\(\rho_3 \\) and some upgrades. The most interesting part is the exponent part containing \\(ln({\rho_3})\\). The negative exponent actually implies that as \\(\rho_3 \\) increases, \\(\dot{\rho_2} \\) DECREASES. If \\(\rho_3 \\) is high, \\(\rho_2 \\) doesn't grow as fast (it still grows). This has implication on the first equation as well, since \\(\dot{\rho_1} \\) depends on \\(\rho_2 \\), which depends on \\(\rho_3 \\).

The fourth equation relates \\(\dot{\rho_3} \\) with some upgrades. This one is relatively simple; increase \\(b_1 \\) and \\(b_2 \\) to increase \\(\rho_3 \\). The '1.04' exponents are from milestones.

The final equation simply states the value of \\(a_3 \\). The lower the better. Default without milestone is \\(a_3 = 2 \\).

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

#### SL strategy

All variables in SL are about the same in power, except for \\(a_1\\) and \\(b_1\\) (which are slightly worse than \\(a_2 \\) and \\(b_2 \\). Selectively buying variables at certain times (active) yields very little results. Therefore, we can get away with autobuy all for idle. Before autobuy, simply buy the cheapest variable. If you want more details on SL strategies, in particular the execution of various strategies, please see [List of theory strategies](https://exponential-idle-guides.netlify.app/guides/theory-strategies/).

#### Milestone swapping - why it works
For active, there is a milestone swapping strategy that is significantly faster than idling (approximately twice the speed). If we carefully examine the effects of each milestone, we can conclude the following:

1st milestone: Increases \\(\rho_2 \\) exponent and increases \\(\dot{\rho_1} \\) straight away. The actual value of \\(\rho_2 \\) does not increase. <br>
3rd/4th milestone: Increase \\(b_1 \\)/\\(b_2 \\) exponents, and \\(\dot{\rho_3} \\), and \\(\rho_3 \\). This also increases \\(\dot{\rho_1} \\). However, the effect is long-term and not instantaneous unlike the effect of the 1st milestone.

We have different milestones which affect the same thing (\\(\dot{\rho_1} \\)), but one is instantaneous, while the other builds over time. This forms the basis of 'milestone swapping', swapping milestones at certain times to maximize \\(\rho_1 \\) per hour. If you've done T2 milestone swapping, this should be familiar.

We initially put our milestones in the 4th and 3rd milestones. Once our \\(\rho_3 \\) doesn't increase quickly anymore, we switch milestones to the 1st one to gain a burst of \\(\dot{\rho_1} \\). Once our \\(\rho_1 \\)is not increasing quickly anymore, we switch back to the 4th and 3rd milestone!

#### Milestone Swapping Strategies
(Courtesy of Gen).

x>x>x>x represent the max buy order of milestones not the amount allocated.
For example, 4>3>1>2 means "Allocate everything into 4th milestone, then use leftovers into 3rd milestone, then into 1st milestone, then into 2nd milestone".

From e75-e100 is 4>3>1>2 (60s) ↔ 1>2>4>3 (60s)

SLMS2 is 1>2>4>3 (30s) → 2>1>4>3 (60s) → 1>2>4>3 (30s) → 4>3>1>2 (60s), with \\(b_1 \\)\\(b_2 \\) off during the first two, and \\(a_1 \\)\\(a_2 \\) off during the last two

SLMS3 is 2>1>4>3  (20s) ↔ 4>3>1>2 (60s)

When to Use Strategies
until e100: SLMS<br>
e100 - e175: SLMS (100-175)<br>
e175 - e200: SLMS3<br>
e200 - e300: SLMS

(note that it depends also on the swapping durations, on the last range SLMS should be run with 60s [4/3/1/2] and 20s on [1/2/4/3] to be best). So from e200-e300, SLMS 4>3>1>2 (60s) ↔ 1>2>4>3 (20s)

#### Post e300+ \\(\rho\\)

At this point, the theory becomes very idle. We simply autobuy all variables. Publish at approximately 8-10 multiplier. If you wish to improve efficiency, you can disable \\(a_1 \\)\\(a_2 \\) at about 4.5 publication multiplier and \\(b_1 \\)\\(b_2 \\) at 6.0 multiplier until publish.

#### SL milestone route

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

SLMS2 is 1/2/4/3 (30s) → 2/1/4/3 (60s) → 1/2/4/3 (30s) → 4/3/1/2 (60s), with \\(b_1 \\)\\(b_2 \\) off during the first two, and \\(a_1 \\)\\(a_2 \\) off during the last two

SLMS3 is 2/1/4/3  (20s) ↔ 4/3/1/2 (60s)

When to Use Strategies
until e100: SLMS

e100 - e175: SLMS2

e175 - e200: SLMS3

e200 - e300: SLMS

### Euler's Formula (EF)

#### EF Overview

This custom theory, along with Convergents to Square Root 2, were released at the same time and is based on Euler's Formula of

\\(e^{i*\theta} = cos{\theta} + isin{\theta}\\), where 'i' is the complex number.

EF is unique, along with FP, in that all the milestone paths are locked, so there's no choice in which milestones to take. This was deliberately done to prevent milestone swapping strategies and to balance the theory. Furthermore, the \\(\rho\\) to \\(\tau \\) conversion for this theory is uniquely at \\(\rho^{0.4} \\) rather than the usual \\(\rho^{0.1} \\) meaning that less \\(\rho \\) is needed to get an equivalent amount of $\tau$. Due to the conversion rate, EF can feel extremely slow in comparison to other theories, but it is the fastest theory to e150 \\(\tau \\) and has the largest instantaneous jump in \\(\tau \\) out of all custom theories.

#### EF Equation Description

\\(\dot{\rho} = (a_1a_2a_3)^{1.5}\sqrt{tq^2+R^2+I^2}\\)

\\(G(t) = g_r+g_i\\)

\\(g_r = b_1b_2cos{(t)}, g_i = ic_1c_2sin{(t)}\\)

\\(\dot{q} = q_1q_2\\)

\\(\dot{R} = (g_r)^2, \dot{I} = -(g_i)^2\\)

The first line is the main equation. We want to maximize \\(\dot{\rho} \\). All the \\(a_n \\) terms and their exponents are obtained from milestones. Parts of the square root term are also obtained from milestones. Note that the \\(R^2 \\) and the \\(I^2 \\) terms are effectively redundant at all stages of this theory; but due to them purchasing \\(a_2 \\) and \\(a_3 \\) respectively, they are very important.

The second line defines the graph shown. Since \\(G(t)\\) is graphed on the complex over time, it is possible to have it show as a particle spiraling through space.

The third line describes \\(g_r \\) and \\(g_i \\), which are used to generate '\\(R\\)' and '\\(I\\)' currencies. This line by itself doesn't do much.

The fourth line simply describes \\(\dot{q} \\). This is used in the first equation directly.

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
         <td>Costs R to buy. Increases 40 folds for every 10 levels bought. However, note that some levels are much more impactful than others. Overall, this variable ranges from 10% to 700%+ effectiveness in ρ dot! </td>
      </tr>
      <tr>
         <th>a<sub><sub><small>3</small></sub></sub></th>
         <td>Costs I to buy. With full milestones, this variable approximately triples ρ dot.</td>
      </tr>
   </tbody>
</table>

<br>
<br>

#### EF strategy

Initially, you only have \\(\dot{t} \\),  \\(q_1 \\), and \\(q_2 \\) unlocked. Buy \\(q_1 \\) at about 1/8th cost of \\(q_2 \\), and buy \\(\dot{t} \\) when it's available. At e20 \\(\rho \\) when autobuyers are unlocked, for idle, simply autobuy all. For active, continue to do what you were doing (buying \\(q_1 \\) at 1/8th cost of \\(q_2 \\)). There are also more advanced strategies, in particular EFAI. For its description and execution, please see [List of theory strategies](https://exponential-idle-guides.netlify.app/guides/theory-strategies/).

The first 2 milestones are redundant by themselves. The \\(R^2 \\) term and the \\(I^2 \\) term are insignificant compared to the \\(tq^2 \\) term.
Once you unlock the 3rd milestone (\\(a_1 \\) term) however, we can buy \\(a_1 \\) at 1/4th of \\(q_2 \\) cost.

#### EF milestone route

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

 This custom theory was released at the same time as Euler's Formula. CSR2 is based on approximations of \\(\sqrt{2}\\) using recurrent formulae. As the approximations improve, the $\dotq$ and $\dot\rho$ improve, increasing $\tau$. An explanation of each section of the equations is shown below:

#### CSR2 Equation Description

\\(\dot{\rho} = q_1^{1.15}q_2q\\)

\\(\dot{q} = c_1c_2^2 |\sqrt{2} - \frac{N_m}{D_m}|^{-1}\\),
\\(N_m = 2N_{m-1} + N_{m-2}, N_0 = 1, N_1 = 3\\)
\\(D_m = 2D_{m-1} + D_{m-2}, D_0 = 1, D_1 = 2\\)
\\(m = n + log_2{(c_2)}\\)
<br><br>

 The first line is self explanatory. The exponents on \\(q_1 \\) are from milestones. '\\(q\\)' will increase during the publication.
<br>

For the second line, both the variable \\(c_2 \\) and its exponents are from milestones. The absolute value section on the right describes the approximation of \\(N_m \\)/ \\(D_m \\) to \\(\sqrt{2}\\). As \\(N_m \\)/ \\(D_m \\) get closer to \\(\sqrt{2}\\), the entire right section gets larger and larger (because of the -1 power).
<br>

The third and fourth lines are recurrence relations on \\(N_m \\) and \\(D_m\\). This means that the current value of \\(N_m \\) and \\(D_m \\) depend on their previous values. We start with \\(N_0 \\) = 1, \\(N_1 \\) = 3. The equation will then read as:

\\(N_2 \\) = 2\\(N_1 \\) + \\(N_0 \\) -> \\(N_2 \\) = 2 x 3 + 1 = 7.
Then \\(N_3\\) = 2\\(N_2 \\) + \\(N_1 \\) -> 2 x 7 + 3 = 17.
Similar logic is applied to \\(D_m \\) equations.

This occurs until we reach \\(N_m \\) and \\(D_m \\) reach whatever 'm' values we have. This is shown in the next equation:

The fourth equation relates 'm' as described above. We can see that as we buy \\(n \\) and \\(c_2 \\), our \\(m \\) will increase, so the 2 recurrence equations above will 'repeat' more often and \\(N_m \\), \\(D_m \\) will increase. From how \\(n \\) and \\(c_2 \\) values are calculated, buying 1 level of \\(n \\) or \\(c_2 \\) will increase \\(m \\) by 1.

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

#### CSR2 strategy

##### Idle

For idle, we simply autobuy all. The idle strategy doesn't change much. If you'd like to be more efficient while still being idle, you can remove milestones and stack them into the \\(q\\) exponent milestones when you're about to publish (from around e80 to e500). Don't forget to change milestones back after publishing!

Once you have all milestones, autobuy all!

##### Active

The active strategies are significantly more involved. Depending on how active you'd like to be, there are several potential strategies. There's the standard doubling chasing [CSRd](https://exponential-idle-guides.netlify.app/guides/theory-strategies/#csr2d), which is just autobuy all except \\(c_1 \\) and \\(q_1 \\), where you buy them when they are less than 10% cost of minimum(\\(c_2 \\), \\(q_2 \\), and \\(n \\)).

For the milestone swapping strategy, the general idea is to switch milestones from \\(c_2 \\) and its exponents, to \\(q_1 \\) exponent milestones whenever we are 'close' to a powerful upgrade. Please see the [Theory Strategies](https://exponential-idle-guides.netlify.app/guides/theory-strategies/#csr2xlxxx) section of the guide for how to perform milestone swapping.

##### CSR2 Milestone Swapping Explanation

This theory has a milestone swapping strategy before full milestones. We have \\(q_1 \\) exponent milestones, which increase $\dot\rho$ straight away. We also have \\(c_2 \\) related milestones, which increases the \\(q\\) variable, which increases $\dot\rho$.

The reason milestone swapping works is because the benefits of using \\(c_2 \\) related milestones (having high \\(q\\)) remain when you switch to \\(q_1 \\) exponent milestones. If we only use \\(q_1 \\) exponent, then we have really low \\(q\\). If we only use \\(c_2 \\) related milestones, then we have high \\(q\\), but low $\dot\rho$. If we regularly swap them, we can increase \\(q\\) through \\(c_2 \\) related milestones, then take advantage of the \\(q_1 \\) exponent milestones, while keeping the high value of \\(q\\) we've accumulated earlier!

For a more detailed explanation on how to actually do the strategy, please see the [Theory Strategies](https://exponential-idle-guides.netlify.app/guides/theory-strategies/#csr2xlxxx) section of the guide.

#### CSR2 milestone route

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

With $\dot\rho$ and $\dotq$ Equations Becoming:

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

##### Lambda Equations

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

 The first equation is for \\(\rho\\), which starts off simple, but gets more complicated as more milestones are reached and perma-upgrades
 are purchased. Initially, \\(rho\\) is fairly simple to calculate as rdot is just 1/2, dott is just the t variable, and the rootpi radical is just
 dotq/pi is just \\(q1 * q2\\). However, once \\(g(x)\\) is added to the dotrho equation, the rootpi radical becomes int from 0 to q/pi of g(x) which
 essentially raises q to the highest power of g(x) + 1. The variables m and n are simple multipliers that do not change over time without
 purchasing them with rho.

<br>

The second equation is for dotr, which seems simple at first, but gets more difficult to understand once we get to the factional integral. The notation in game is a rarely used notation, but it is used to save space. Tapping and holding the equation will give the full equation. When K increases, the fractional integral is approaching aproaching 1, which makes the fractional integral be closer, yet still smaller than, the full integral. By subracting the two, then dividing 1 be that number, we get a very large number.

#### FI Variable Description
Approximate variable strengths on their respective vardots with all milestones are as follows:

<table class="T2">
<caption>Brief summary of variable strengths of FI.</caption>
   <thead><tr>
   <th class="invisible"></th>
   <th colspan="2" style="text-align:center">Brief Description</th>
   </tr></thead>
   <tbody>
      <tr>
         <th>q<sub><sub><small>1</small></sub></sub></th>
         <td>Grows by 50x every 23 levels. Mod23 levels are a 2.6x to $\dotq$</td>
      </tr>
      <tr>
         <th>q<sub><sub><small>2</small></sub></sub></th>
         <td>Doubles $\dotq$ dot per level</td>
      </tr>
      <tr>
         <th>K</th>
         <td>Will double, triple, or quadrouple $\dotr$ depending on milestones</td>
      </tr>
      <tr>
         <th>m</th>
         <td>Will instantly increase $\dot\rho$ by 1.5x</td>
      </tr>
      <tr>
         <th>n</th>
         <td>Will instantly increase $\dot\rho$ by x every 11 levels</td>
      </tr>
   </tbody>
</table>

<br>
<br>

#### FI strategy

##### Idle

For idle, we simply autobuy all. The idle strategy doesn't change much other than we will not Milestone Swap. If you are able to check in every 30 minutes or so, you can manually buy \\(q_1\\) and \\(n\\). Just make sure that you autobuy \\(q_1\\) when you are close to getting a mod23 boost.

##### Active

The active strategies are a bit more involved. Depending on how active you'd like to be, there are several potential strategies. There's the standard doubling chasing (wrong link) [FId](https://exponential-idle-guides.netlify.app/guides/theory-strategies/#csr2d), which is just autobuy all except \\(q_1 \\) and \\(n \\), where you buy them when they are less than 10% cost of minimum(\\(q_2 \\), \\(K \\), and \\(m \\)).

For the milestone swapping strategy, the general idea is to switch milestones from \\(q_1 \\), to \\(m\\)/\\(n\\) milestones whenever we gain 3x to \\(q\\) after purchasing \\(q_2\\), or some gain adjusted for $\dotq$ from purchasing \\(q_1\\). Please see the (wrong link) [Theory Strategies](https://exponential-idle-guides.netlify.app/guides/theory-strategies/#csr2xlxxx) section of the guide for how to perform milestone swapping.

##### FI Milestone Swapping Explanation

This theory has a milestone swapping strategy before full milestones. We have \\(q_1 \\) exponent milestones, which increase \\(\dot \q\\).

The reason milestone swapping works is because the benefits of using \\(q_1 \\) related milestones (having high \\(q\\)) remain when you switch to \\(m \\) and \\(n\\) milestones. If we only use \\(q_1 \\) exponent, then we have really high \\(q\\), however, we dont have the benefits to $\dot\rho$ that \\(m\\) and \\(n\\) provide. If we only use \\(m \\) and \\(n\\) milestones, then we have low \\(q\\), but have normal $\dot\rho$. If we regularly swap them, we can increase \\(q\\) through the \\(q_1 \\) milestone, then take advantage of the \\(m \\) and \\(n\\) milestones to gain \\(\rho\\), while keeping the high value of \\(q\\) we've accumulated earlier!

For a more detailed explanation on how to actually do the strategy, please see the (wrong link) [Theory Strategies](https://exponential-idle-guides.netlify.app/guides/theory-strategies/#csr2xlxxx) section of the guide.

#### FI Milestone Routing Explaination

In FI, you can unlock milestones in 2 ways:

1) by gaining \\(\rho\\) like normal, or
2) buy purchasing the milestone upgrades for \\(\lambda\\) and \\(g(x)\\) in the permanent upgrades tab
where you would normally buy publishing, buy all, and autobuy.

Buying the milestone upgrades will not give you a milestone, but will instead increase the max level of the miletone that you purchased the upgade for. For example, if you buy the g(x) perma-upgrade for lvl 1, you will permanently unlock the first lvl of the g(x) milestone. moving milestones into these are always the best things you can do mid publish, even if you need to sacrifice a variable ot do so.

FI perma-upgrades are at 1e100, 1e450, and 1e1050 \\(\rho\\) for the \\(g(x)\\) milestone and 1e350 and 1e750 \\(\rho\\) for the \\(\lambda\\) milestone. Apon buying these milestone, immediately put a milestone from \\(q_1\\) or \\(n\\) into them depending on how many milestone you have.

Below is the milestone route for FI, where the milestones that are color coded are where you will buy a perma-upgrade milestone and move a milestone into that upgrade.

#### FI Milestone Route

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
         <td>4-x2</td>
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

 This custom theory was released at the same time as Euler's Formula. CSR2 is based on approximations of \\(\sqrt{2}\\) using recurrent formulae. As the approximations improve, the $\dotq$ and $\dot\rho$ improve, increasing $\tau$. An explanation of each section of the equations is shown below:

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


##### Toothpick Sequence
$$T_{2^k+i}=\frac{2^{2k+1}+1}{3}, \text{if } i = 0$$ 
$$T_{2^k+i}=T_{2^k}+2T_i + T_{i+1}-1,   \text{if } 1 \leq i \lt 2^k$$

##### Ulam-Warburton Cellular Automaton
$$\\u_0 = 0,\ u_1 = 1,\ \dots,\ u_n=4(3^{w_{n-1}-1})$$
$$\\w_n = n-\sum_{k=1}^{∞}\left\lfloor\frac{n}{2^k}\right\rfloor$$
$$\\U_n = \sum_{i=0}^n u_i$$

##### Sierpiński Triangle
$$S_n = 3^{n-1} → S_n = 2*3^{n-1}-1$$


<br><br>

 The first line is self explanatory. The exponents on \\(q_1 \\) are from milestones. '\\(q\\)' will increase during the publication.
<br>

For the second line, both the variable \\(c_2 \\) and its exponents are from milestones. The absolute value section on the right describes the approximation of \\(N_m \\)/ \\(D_m \\) to \\(\sqrt{2}\\). As \\(N_m \\)/ \\(D_m \\) get closer to \\(\sqrt{2}\\), the entire right section gets larger and larger (because of the -1 power).
<br>

The third and fourth lines are recurrence relations on \\(N_m \\) and \\(D_m\\). This means that the current value of \\(N_m \\) and \\(D_m \\) depend on their previous values. We start with \\(N_0 \\) = 1, \\(N_1 \\) = 3. The equation will then read as:<br>
\\(N_2 \\) = 2\\(N_1 \\) + \\(N_0 \\) -> \\(N_2 \\) = 2 x 3 + 1 = 7.
Then \\(N_3\\) = 2\\(N_2 \\) + \\(N_1 \\) -> 2 x 7 + 3 = 17.
Similar logic is applied to \\(D_m \\) equations.

This occurs until we reach \\(N_m \\) and \\(D_m \\) reach whatever 'm' values we have. This is shown in the next equation:

The fourth equation relates 'm' as described above. We can see that as we buy \\(n \\) and \\(c_2 \\), our \\(m \\) will increase, so the 2 recurrence equations above will 'repeat' more often and \\(N_m \\), \\(D_m \\) will increase. From how \\(n \\) and \\(c_2 \\) values are calculated, buying 1 level of \\(n \\) or \\(c_2 \\) will increase \\(m \\) by 1.


#### FP Variable Description
Approximate variable strengths on $\dot\rho$ with all milestones are as follows:

<table class="T2">
<caption>Brief summary of variable strengths of CSR2.</caption>
   <thead><tr>
   <th class="invisible"></th>
   <th colspan="2" style="text-align:center">Brief Description</th>
   </tr></thead>
   <tbody>
      <tr>
         <th>tdot</th>
         <td>This is tdot</td>
      </tr>
      <tr>
         <th>c<sub><sub><small>1</small></sub></sub></th>
         <td>c_1 is funny mod 100</td>
      </tr>
      <tr>
         <th>c<sub><sub><small>2</small></sub></sub></th>
         <td>easy doubling</td>
      </tr>
      <tr>
         <th>q<sub><sub><small>1</small></sub></sub></th>
         <td>easy mod10 $\dotq$ change</td>
      </tr>
      <tr>
         <th>q<sub><sub><small>2</small></sub></sub></th>
         <td>is funny A equation things and a doubling</td>
      </tr>
            <tr>
         <th>r<sub><sub><small>1</small></sub></sub></th>
         <td>is easy mod10 variable</td>
      </tr>
      <tr>
         <th>n</th>
         <td>is big number go big</td>
      </tr>
      <tr>
         <th>s</th>
         <td>funny exponents go funnier after e910</td>
      </tr>
   </tbody>
</table>

<br>
<br>

#### FP strategy

##### Idle

For idle, we simply autobuy all. The idle strategy doesn't change much. If you'd like to be more efficient while still being idle, you can remove milestones and stack them into the \\(q\\) exponent milestones when you're about to publish (from around e80 to e500). Don't forget to change milestones back after publishing!

Once you have all milestones, autobuy all!

##### Active

The active strategies are significantly more involved. Depending on how active you'd like to be, there are several potential strategies. There's the standard doubling chasing [CSRd](https://exponential-idle-guides.netlify.app/guides/theory-strategies/#csr2d), which is just autobuy all except \\(c_1 \\) and \\(q_1 \\), where you buy them when they are less than 10% cost of minimum(\\(c_2 \\), \\(q_2 \\), \\(n \\)).

For the milestone swapping strategy, the general idea is to switch milestones from \\(c_2 \\) and its exponents, to \\(q_1 \\) exponent milestones whenever we are 'close' to a powerful upgrade. Please see the [Theory Strategies](https://exponential-idle-guides.netlify.app/guides/theory-strategies/#csr2xlxxx) section of the guide for how to perform milestone swapping.

##### FP Milestone Swapping Explanation

This theory has a milestone swapping strategy before full milestones. We have \\(q_1 \\) exponent milestones, which increase $\dot\rho$ straight away. We also have \\(c_2 \\) related milestones, which increases the \\(q\\) variable, which increases $\dot\rho$.

The reason milestone swapping works is because the benefits of using \\(c_2 \\) related milestones (having high \\(q\\)) remain when you switch to \\(q_1 \\) exponent milestones. If we only use \\(q_1 \\) exponent, then we have really low \\(q\\). If we only use \\(c_2 \\) related milestones, then we have high \\(q\\), but low $\dot\rho$. If we regularly swap them, we can increase \\(q\\) through \\(c_2 \\) related milestones, then take advantage of the \\(q_1 \\) exponent milestones, while keeping the high value of \\(q\\) we've accumulated earlier!

For a more detailed explanation on how to actually do the strategy, please see the [Theory Strategies](https://exponential-idle-guides.netlify.app/guides/theory-strategies/#csr2xlxxx) section of the guide.

#### FP milestone route

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

<style>

h4 {
   font-size: 1.2rem;
}
h3 {
   font-size: 1.5rem;
}
</style>
