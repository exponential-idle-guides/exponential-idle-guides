---
title: "Custom Theories"
description: "Our guide for understanding and playing official custom theories."
author: "Playspout"
contributors: "the Amazing Community"
draft: true
order: 8
---
{% import "embed-yt.njk" as yt %}

### Custom Theory Basics

<p>
Custom theories are theories made by players in the community. As of July 30th 2022, there are 4 official 
custom theories that contribute up to e150 tau per theory; Weierstrass Sine Product made by Xelaroc (WSP), Sequential Limits by Ellipsis (SL), Euler's Formula by Peanut, Snaeky, and XLII (EF), and Convergents to Square Root 2 (CSR2/CS2) by Solarion. The theories will be abbreviated as WSP, SL, EF, and CSR2 from now on.



In order to balance custom theories with the main theories and the endgame, custom theories have a low conversion rate from phi to tau. WSP, SL, and CSR2 have conversion rates of 
\\(\tau\\) = \\(\rho^{0.1}\\) while EF has a tau converstion rate of \\(\tau\\) = \\(\rho^{0.4}\\)
</p>


### Which Custom Theories (CTs) should I do?
<p> 
If you have active time, try to do the CT with the highest active tau/hour. You can check this with [the sim](https://theory-simulator.tredec.repl.co/)<br><br>
 
 For idles, do the one with the highest idle tau/hour (or the longest publication time if you're doing overnights), with preference toward EF and SL. For example, if SL has 2 tau/hour and CSR2 also has 2 tau/hour, ideally we would pick SL. The reason we prefer SL and EF is because these theories contain multiple growing variables. This means the theories generally require less babysitting as the variables grow by themselves. The assumption of daytime idle is that we can check and publish a theory every 2 hours or so. If you can only check every 8 hours idle, please see the overnight strategy just above.<br><br>

</p>

### Weierstrass Sine Product (WSP)

#### WSP Overview

<p>The very first official custom theory; WSP was developed by Xelaroc, who also came up with some of the strategies used in the theory. The idea behind the theory is to use the factorization of sine to increase rho. There are multiple equations with this theory, and some may look daunting, so we'll have a look at each one.<br><br></p>

#### WSP Equation Description

\\(\dot{\rho} = q_1^{1.04}q_2q\\)

\\(\dot{q} = c_2s_n({\chi}) / sin({\chi})\\)

\\(s_n({x}) := x\prod_{k=1}^{n}(1-\frac{x}{k\pi}^2)\\)

\\(\chi = \pi\frac{c_1n}{c_1+n/3^{3}}+1\\)
<br><br>

<p>The first line states that the rate of change in rho is \\(q_1^{1.04}q_2q\\). Initially it's simply \\(q_1q_2q\\) without any exponent. With milestones we add more exponents. <br>

For the second line, the higher the \\(\chi\\) (spelled 'chi', pronounced as 'kai'), the higher the \\(s_n({\chi})\\). We want to increase \\(\chi\\) by increasing n and c1. The signs of \\(s_n({\chi})\\) and \\(sin({\chi})\\) will always match, so the fraction can't be negative. Additionally, the c2 variable is a milestone which is not initially available. <br>

The third line is the most complicated. Generally we can factorize an equation when its graph touches the x-axis. For a sine curve, it touches the x-axis starting from x = 0, and repeats every x= \\(\pi\\). These multiplied factors form the basis of the Weierstrass Sine Product. A simpler interpretation is that we can see 'x' appearing both outside and inside the products in the numerator. Since \\(\chi\\) is 'x' here, the higher the \\(\chi\\), the higher the \\(s_n({\chi})\\) as stated earlier. <br>

Finally, the actual \\(\chi\\) equation: increasing c1 and n increases \\(\chi\\). Note that from the fraction, we don't want to increase only c1 or only n. Rather we should increase both. Using standard strategies this should be no problem. The \\(n/3^{3}\\) part in the denominator is a milestone term. This means that n is better than c1 as more n/3 milestones are accumulated. <br><br></p>

#### WSP Variable Description
<p>Approximate variable strengths on rhodot with all milestones are as follows:</p>

<table class="T2">
<caption>Brief summary of variable strengths of WSP.</caption>
   <thead><tr>
   <th class="invisible"></th>
   <th colspan="2" style="text-align:center">Brief Description</th>
   </tr></thead>
   <tbody>
      <tr>
         <th>q1</th>
         <td>About 7% increase on rhodot on average.</td>
      </tr>
      <tr>
         <th>q2</th>
         <td>Doubles rhodot - instantaneous.</td>
      </tr>
      <tr>
         <th>n</th>
         <td>Initially about 50% increase similar to c1. Slowly ramps up to 4 times increase in rhodot. At e400 rho and higher it is very close to 4x increase.</td>
      </tr>
      <tr>
         <th>c1</th>
         <td>Initially about 50% increase. Tends to 0% increase as rho increases. At e400 rho the increase is not noticeable anymore. Early game we still buy them throughout. Late game we only buy for the first 20 seconds or so.</td>
      </tr>
      <tr>
         <th>c2</th>
         <td>Doubles rhodot - over time</td>
      </tr>

   </tbody>

</table>

<br>
<br>


#### WSP strategy

Early game the variable strengths are ordered as follows: <br>
q2 ~= c2 > n > c1 > q1 <br><br>

Late game these become: <br>
n > q2 ~= c2 > q1 >>> c1 <br><br>

##### Idle

<b>Before you get e400 rho, for idle, simply autobuy all.<b> <br><br>

Once you have e400 rho, c1 starts to become extremely bad. Because of this, the new idle strategy would be to autobuy all for 20 seconds or so. Then turn c1 OFF. Continue to autobuy the rest of the variables. <br>
<br>

##### Active

For a simple active strategy before e400 rho, simply autobuy q2 and c2 since they double the rates long term. n and c1 give approximately 60% boost (with n becoming more powerful with milestones and vice versa for c1). We will buy n and c1 when their costs are less than 50% of the minimum of q2 and c2. 
<br>
For q1, we will buy it when its cost is less than 10% of the minimum of q2 and c2. For example, if q1 costs 1.2e100 and q2 costs 1e101, we would not buy q1 as it's 'too expensive' compared to q2.  <br><br>

For active strategy, n starts to become more powerful than q2. If their costs are similar, we will prioritize n first. For example, if n costs 1.4e101 and q2 costs 1.2e101, we will buy n first. Similarly to the idle strategy, we will buy c1 only for the first 20 seconds or so. <br><br>


#### WSP milestone route

All milestones into the 3rd/last milestone. Then into 2nd milestone, then into 1st milestone. <br>
For milestone swapping, swap all milestones from 2nd and 3rd into 1st milestone. <br>

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

SL, the second official custom theory, uses a variation of Stirling's formula to approximate Euler's number (e~=2.71828). As upgrades are bought, the approximation becomes more precise, increasing rhodot and rho since e-gamma approaches 0. As with the first official custom theory (WSP), there are several equations in this theory. We'll explore each one now:

\\(\dot{\rho}_1 = \frac{\sqrt{\rho_2^{1.06}}}{e - \gamma}\\)

\\(\gamma = \frac{\rho_3}{\sqrt[\rho_3]{\rho_3!}}\\)

\\(\dot{\rho_2} = a_1a_2a_3^{-ln{\rho_3}}\\)

\\(\dot{\rho_3} = b_1^{1.04}b_2^{1.04}\\)

\\(a_3 = 1.96\\)

The first line is the main part of the equation. We want to maximize \\(\dot{\rho_1}\\) to increase tau. The '1.06' exponent are from milestones. The default is no exponent. From the equation, we can see that rho1dot is proportional to approximately square root of rho2. This means that if we quadruple rho2, we would approximately double rho1 long term. The denominator of the fraction has a gamma symbol which looks like the letter 'y'. As our rho increases, our gamma becomes closer to 'e', so the denominator will decrease, which increases rho1. We will explore gamma in the next equation.

The second equation refers to the Stirling's approximation of Euler's number 'e'. As rho3 increases, gamma converges to Euler's number. Long term we can approximate this convergence as linear. The implication is if we double rho3, gamma will be twice as close to Euler's number, so (e-gamma) in the first equation will be halved. 


The third equation relates rho2 with rho3 and some upgrades. The most interesting part is the exponent part containing \\(ln{\rho_3}\\). The negative exponent actually implies that as rho3 increases, rho2dot DECREASES. If rho3 is high, rho2 doesn't grow as fast (it still grows). This has implication on the first equation as well, since rho1dot depends on rho2, which depends on rho3. 

The fourth equation relates rho3dot with some upgrades. This one is relatively simple; increase b1 and b2 to increase rho3. The '1.04' exponents are from milestones. 

The final equation simply states the value of a3. The lower the better. Default without milestone is a3 = 2.

From the equations above, the approximate long term effects of rho2dot and rho3dot on rho1 are as follows:

rho2dot: square root effect - quadrupling rho2dot -> double rho1. 
rho3dot: approximately ^0.64 - rho1 ~= rho3dot^0.64. Toward the end of a publication, is approximately linear with rho1. This means doubling rho3 -> double rho1. 

#### SL Variable Description

Approximate variable strengths on rho1dot with all milestones are as follows:

a1: Value times 3.5 every 3 levels on average. This comes to about 52% increase in rho2dot per level. Since rho1 is approximately square root of rho2, overall this comes down to about 23% increase in rho1 per level.<br>
a2: Doubles in value every level. Doubles rho2 long term. Increases rho1 by 40% ish long term.<br>
b1: Value times 6.5 every 4 levels on average. This comes down to about 60% increase in rho3dot. Toward the end of a publication, this translates to approximately 60% increase in rho1.  <br>
b2: Doubles in value every level. Toward the end of a publication this doubles rho1.  <br>


#### SL strategy

All variables in SL are about the same in power, except for \\a_1\\ and \\b_1\\ (which are slightly worse than a_2 and b_2). Selectively buying variables at certain times (active) yields very little results. Therefore, we can get away with autobuy all for idle. Before autobuy, simply buy the cheapest variable. 

#### Milestone swapping - why it works
For active, there is a milestone swapping strategy that is significantly faster than idling (approximately twice the speed). If we carefully examine the effects of each milestone, we can conclude the following:

1st milestone: Increases rho2 exponent, and increases rho1dot straight away. The actual value of rho2 does not increase. 
3rd/4th milestone: Increase b1/b2 exponents, and rho3dot, and rho3. This also increases rho1dot. However, the effect is long term and not instantaneous unlike the effect of the 1st milestone. 

We have different milestones which affect the same thing (rho1dot), but one is instantaneous, while the other builds over time. This forms the basis of 'milestone swapping', swapping milestones at certain times to maximize rho1 per hour. If you've done T2 milestone swapping, this should be familiar. 

We initially put our milestones in the 4th and 3rd milestones. Once our rho3 doesn't increase quickly anymore, we switch milestones to the 1st one to gain a burst of rho1dot. Once our rho1 is not increasing quickly anymore, we switch back to the 4th and 3rd milestone! 

#### Milestone Swapping Strategies
(Courtesy of Gen).

x>x>x>x represent the max buy order of milestones not the amount allocated.
For example, 4>3>1>2 means "Allocate everything into 4th milestone, then use leftovers into 3rd milestone, then into 1st milestone, then into 2nd milestone". 

From e75-e100 is 4>3>1>2 (60s) <-> 1>2>4>3 (60s)

SLMS2 is 1>2>4>3 (30s) --> 2>1>4>3 (60s) --> 1>2>4>3 (30s) --> 4>3>1>2 (60s), with b1b2 off during the first two, and a1a2 off during the last two

SLMS3 is 2>1>4>3  (20s) <-> 4>3>1>2 (60s)

When to Use Strategies
until e100: SLMS
e100 - e175: SLMS (100-175)
e175 - e200: SLMS3
e200 - e300: SLMS

(note that it depends also on the swapping durations, on the last range SLMS should be run with 60s [4/3/1/2] and 20s on [1/2/4/3] to be best). So from e200-e300, SLMS 4>3>1>2 (60s) <-> 1>2>4>3 (20s)

#### Post e300+ rho

At this point, the theory becomes very idle. We simply autobuy all. Publish at approximately 8-10 multiplier. If you wish to improve efficiency, you can disable a1a2 at about 4.5 publication multiplier until publish. 




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

<p>Milestone Swapping (active)

How to read notation: 4/3/1/2 means put all points into 4th milestones, use leftovers into 3rd milestones etc.

SLMS is 4/3/1/2 (60s) <-> 1/2/4/3 (60s)

SLMS2 is 1/2/4/3 (30s) --> 2/1/4/3 (60s) --> 1/2/4/3 (30s) --> 4/3/1/2 (60s), with b1b2 off during the first two, and a1a2 off during the last two

SLMS3 is 2/1/4/3  (20s) <-> 4/3/1/2 (60s)

When to Use Strategies
until e100: SLMS
e100 - e175: SLMS2
e175 - e200: SLMS3
e200 - e300: SLMS

</p>

### Euler's Formula (EF)

#### EF Overview
<p>
This custom theory, along with Convergents to Square Root 2, were released at the same time and is based on Euler's Formula of 
\\(e^{i*\theta} = cos{\theta} + isin{\theta}\\), where 'i' is the complex number. 

EF is unique in that all the milestone paths are locked, so there's no choice in which milestones to take. This was deliberately done to prevent milestone swapping strategies and to balance the thoery. Furthermore, the rho to tau conversion for this theory is uniquely at rho^0.4 rather than the usual rho^0.1 meaning that less rho is needed to get an equivalent ammount of tau. Due to the conversion rate, EF can feel extremely slow in comparison to other theories, but it is the fastest theory to e150 tau and has the largest instantaneous jump in tau out of all custom theories. The equations are as follows:</p>

\\(\dot{\rho} = (a_1a_2a_3)^{1.5}\sqrt{tq^2+R^2+I^2}\\)

\\(G(t) = g_r+g_i\\)

\\(g_r = b_1b_2cos{(t)}, g_i = ic_1c_2sin{(t)}\\)

\\(\dot{q} = q_1q_2\\)

\\(\dot{R} = (g_r)^2, \dot{I} = -(g_i)^2\\)

<p>The first line is the main equation. We want to maximize rho1dot. All the a_n terms, and their exponents are obtained from milestones. Parts of the square root term are also obtained from milestones. Note that the R^2 and the I^2 terms are effectively redundant at all stages of this theory; but due to them purchasing a_2 and a_3 respectively, they are very important. 

The second line defines the graph shown. Since G(t) is graphed on the complex over time, it is possible to have it show as a particle spiraling through space.

The third line describes g_r and g_i, which are used to generate 'R' and 'I' currencies. This line by itself doesn't do much. 

The fourth line simply describes qdot. This is used in the first equation directly. 

The fifth and final line use the results from the 3rd line, so effectively \\(\dot{R} = b_1^{2}b_2^{2}cos^2{(t)}\\) and \\(\dot{I} = c_1^{2}c_2^{2}sin^2{(t)}\\)</p>

#### EF Variable Description

#### EF strategy

Initially, you only have tdot, q1, q2 unlocked. Buy q1 at about 1/8th cost of q2, and buy tdot when it's available. At e20 rho when autobuyers are unlocked, for idle, simply autobuy all. For active, continue to do what you were doing (buying q1 at 1/8th cost of q2). 

The first 2 milestones are redundant by themselves. The R^2 term and the I^2 term are insignificant compared to the tq^2 term. 
Once you unlock the 3rd milestone (a1 term) however, we can buy a1 at 1/4th of q2 cost.



#### EF milestone route

<table class="milestone_routing">
   <thead>
      <tr>
         <th>Active</th>
         <th></th>
         <th></th>
         <th></th>
         <th></th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>0/2/0</td>
         <td class="arrow">→</td>
         <td>1/0/2/0</td>
         <td class="arrow">→</td>
         <td>1/2/2/0</td>
      </tr>
      <tr>
         <td>1/2/2/0</td>
         <td class="arrow">→</td>
         <td>1/2/2/2</td>
   </tbody>
</table>
<table class="milestone_routing">
   <tbody>
      <tr>
         <td class="invisible">Or</td>
         <td class="invisible"></td>
         <td class="invisible"></td>
         <td class="invisible"></td>
         <td class="invisible"></td>
         <td class="invisible"></td>
         <td class="invisible"></td>
      </tr>
      <tr>
         <td>3 x2</td>
         <td class="arrow">→</td>
         <td>1</td>
         <td class="arrow">→</td>
         <td>2 x2</td>
      </tr>
      <tr>
         <td>2 x2</td>
         <td class="arrow">→</td>
         <td>4 x2</td>
   </tbody>
</table>
<table class="milestone_routing">
   <thead>
      <tr>
         <th>Idle</th>
         <th></th>
         <th></th>
         <th></th>
         <th></th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>0/2/0</td>
         <td class="arrow">→</td>
         <td>0/2/2</td>
         <td class="arrow">→</td>
         <td>1/2/2</td>
      </tr>
      <tr>
         <td>1/2/2/0</td>
         <td class="arrow">→</td>
         <td>1/2/2/2</td>
   </tbody>
</table>
<table class="milestone_routing">
   <tbody>
      <tr>
         <td class="invisible">Or</td>
         <td class="invisible"></td>
         <td class="invisible"></td>
         <td class="invisible"></td>
         <td class="invisible"></td>
         <td class="invisible"></td>
         <td class="invisible"></td>
      </tr>
      <tr>
         <td>3 x2</td>
         <td class="arrow">→</td>
         <td>2 x2</td>
         <td class="arrow">→</td>
         <td>1</td>
      </tr>
      <tr>
         <td>1</td>
         <td class="arrow">→</td>
         <td>4 x2</td>
   </tbody>
</table>

### Convergents to Square Root 2 (CSR2)

#### CSR2 Overview

<p> This custom theory was released at the same time as Euler's Formula. CSR2 is based on approximations of square root 2 using recurrent formulae. As the approximations improve, the qdot and rhodot improve, increasing tau. An explanation of each section of the equations are shown below:</p>

#### CSR2 Equation Description

\\(\dot{rho} = q_1^{1.15}q_2q\\)

\\(\dot{q} = c_1c_2^2 X |\sqrt{2} - \frac{N_m}{D_m}|^{-1}\\) 
\\(N_m = 2N_{m-1} + N_{m-2}, N_0 = 1, N_1 = 3\\)
\\(D_m = 2D_{m-1} + D_{m-2}, D_0 = 1, D_1 = 2\\)
\\(m = n + log_2{(c_2)}\\)
<br><br>

<p> The first line is self explanatory. The exponents on q1 are from milestones. 'q' will increase during the publication. 
<br>
For the second line, both the variable c2 and its exponents are from milestones. The absolute value section on the right describes the approximation of Nm / Dm to square root 2. As Nm / Dm get closer to square root 2, the entire right section gets larger and larger (because of the -1 power). 
<br>
The third and fourth lines are recurrence relations on Nm and Dm. This means that the current value of Nm and Dm depend on their previous values. We start with N0 = 1, N1 = 3. The equation will then read as:<br>
N2 = 2N1 + N0 -> N2 = 2 x 3 + 1 = 7. 
Then N3 = 2N2 + N1 -> 2 x 7 + 3 = 17. 
Similar logic is applied to Dm equations. 

This occurs until we reach Nm and Dm reach whatever 'm' values we have. This is shown in the next equation:

The fourth equation relates 'm' as described above. We can see that as we buy n and c2, our m will increase, so the 2 recurrence equations above will 'repeat' more often and Nm, Dm will increase. From how n and c2 values are calculated, buying 1 level of n or c2 will increase m by 1.


</p>

#### CSR2 Variable Description
<p>Approximate variable strengths on rhodot with all milestones are as follows:</p>
<p>
q1: About 7% increase in rhodot per level (instantaneous).
q2: Doubles rhodot per level (instantaneous).
n: Long term will multiply rhodot by 6 times! However, it is not instantaneous.
c1: About 7% increase in rhodot per level; not instantaneous. This is the weakest variable. 
c2: Approximately 22 times increase in rhodot per level! Not instantaneous. This is the strongest variable by quite a lot.


</p>

#### CSR2 strategy

##### Idle

<p>
For idle, we simply autobuy all. The idle strategy doesn't change much. If you'd like to be more efficient while still being idle, you can remove milestones and stack them into the q exponent milestones when you're about to publish (from around e80 to e500). Don't forget to change milestones back after publishing!

Once you have all milestones, autobuy all!

</p>

##### Active

<p>
The active strategies is much more involved. Depending on how active you'd like to be, there are several strategies to cater. There's the standard doubling chasing CSRd, which is just autobuy all except c1 and q1, where you buy them when they are less than 10% cost of minimum(c2, q2, n). 

There's also a milestone swapping strategy. The general idea is to switch milestones from c2 and its exponents, to q1 exponent milestones whenever we are 'close' to a powerful upgrade. Please see the Theory Strategies section of the guide for how to perform milestone swapping.
</p>

##### CSR2 Milestone Swapping Explanation

<p>This theory has a milestone swapping strategy before full milestones. We have q1 exponent milestones, which increase rhodot straight away. We also have c2 related milestones, which increases the q variable, which increases rhodot. 

The reason milestone swapping works is because the benefits of using c2 related milestones (having high q), remain when you switch to q1 exponent milestones. If we only use q1 exponent, then we have really low q. If we only use c2 related milestones, then we have high q, but low rhodot. If we regularly swap them, we can increase q through c2 related milestones, then take advantage of the q1 exponent milestones, while keeping the high value of q we've accumulated earlier!

For a more detailed explanation on how to actually do the strategy, please see the Theory Strategies section of the guide.

</p>

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
         <td>1 x3</td>
         <td class="arrow">→</td>
         <td>3 x3</td>
         <td class="arrow">→</td>
         <td>2</td>
      </tr>
   </tbody>
</table>



<style>


p {

   font-size: 0.8rem;
}

h4 {
   font-size: 1.2rem;
}
h3 {
   font-size: 1.5rem;
}
</style>


