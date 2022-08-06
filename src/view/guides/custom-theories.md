---
title: "Custom Theories"
description: "Our guide for understanding and doing official custom theories."
author: "Playspout"
contributors: "the Amazing Community"
draft: true
order: 8
---
{% import "embed-yt.njk" as yt %}

### Custom Theory Basics


Custom theories are theories made by players in the community. As of July 30th 2022, there are 4 official 
custom theories. These are Weierstrass Sine Product made by Xelaroc (WSP), Sequential Limits by Ellipsis (SL), Euler's Formula by Peanut, Snaeky, and XLII (EF), and Convergents to Square Root 2 by Solarion. The theories will be abbreviated as WSP, SL, EF, and CSR2 from now on.



Official custom theories contribute to tau in-game. WSP, SL, and CSR2 have contributions of 
\\(\tau\\) = \\(\rho^{0.1}\\) while EF has a tau contribution of \\(\tau\\) = \\(\rho^{0.4}\\)



### Which Custom Theories (CTs) should I do?
<p> In general, use XLII's sim from <a href="https://theory-simulator.tredec.repl.co/"> here. </a>
The author is in the process of updating the sim with early theory strategies. <br>
From the sim results, the 3 most important columns are: <br>
active tau/hours, <br>
idle tau/hours, <br>
publication time, <br><br>
If you have active time, try to do the CT with the highest active tau/hour.<br><br>
 
 For daytime idles, do the one with the highest idle tau/hour, with preference toward EF and SL. For example, if SL has 2 tau/hour and CSR2 also has 2 tau/hour, ideally we would pick SL. The reason we prefer SL and EF is because these theories contain multiple growing variables. This means the theories generally require less babysitting as the variables grow by themselves. The assumption of daytime idle is that we can check and publish a theory every 2 hours or so. If you can only check every 8 hours idle, please see the overnight strategy just below.<br><br>
 For overnight, do the one with the highest publication time, with preference toward EF and SL once again. The reason is that not publishing a theory becomes more and more inefficient the longer we run a theory pass its ideal publication point. As an example, if the simulation recommends publishing after 1 hour. We would've wasted almost 7 hours if we overnight for 8 hours. This is terribly inefficient. <br>

</p>

### Weierstrass Sine Product (WSP)

#### WSP Overview

The very first official custom theory; WSP was developed by Xelaroc, who also came up with some of the strategies used in the theory. The idea behind the theory is to use the factorization of sine to increase rho. There are multiple equations with this theory, and some may look daunting, so we'll have a look at each one.<br><br>

\\(\dot{\rho} = q_1^{1.04}q_2q\\)

\\(\dot{q} = c_2s_n({\chi}) / sin({\chi})\\)

\\(s_n({x}) := x\prod_{k=1}^{n}(1-\frac{x}{k\pi}^2)\\)

\\(\chi = \pi\frac{c_1n}{c_1+n/3^{3}}+1\\)

The first line states that the rate of change in rho is \\(q_1^{1.04}q_2q\\). Initially it's simply \\(q_1q_2q\\) without any exponent. With milestones we add more exponents. 

For the second line, the higher the \\(\chi\\) (pronounced 'chi'), the higher the \\(s_n({\chi})\\). We want to increase \\(\chi\\) by increasing n and c1. The signs of \\(s_n({\chi})\\) and \\(sin({\chi})\\) will always match, so the fraction can't be negative. Additionally, the c2 variable is a milestone which is not initially available. 

The third line is the most complicated. Generally we can factorize an equation when its graph touches the x-axis. For a sine curve, it touches the x-axis starting from x = 0, and repeats every x= \\(\pi\\). These multiplied factors form the basis of the Weierstrass Sine Product. A simpler interpretation is that we can see 'x' appearing both outside and inside the products in the numerator. Since \\(\chi\\) is 'x' here, the higher the \\(\chi\\), the higher the \\(s_n({\chi})\\) as stated earlier. 

Finally, the actual \\(\chi\\) equation: increasing c1 and n increases \\(\chi\\). Note that from the fraction, we don't want to increase only c1 or only n. Rather we should increase both. Using standard strategies this should be no problem. The \\(n/3^{3}\\) part in the denominator is a milestone term. This means that n is better than c1 as more n/3 milestones are accumulated. <br><br>

Approximate variable strengths on rhodot with all milestones are as follows:

q1: About 7% increase on rhodot on average.<br>
q2: Doubles rhodot - instantaneous.<br>
n: Initially about 50% increase similar to c1. Slowly ramps up to 4 times increase in rhodot. At e400 rho and higher it is very close to 4x increase. <br>
c1: Initially about 50% increase. Tends to 0% increase as rho increases. At e400 rho the increase is not noticeable anymore. Early game we still buy them throughout. Late game we only buy for the first 20 seconds or so. <br>
c2: Doubles rhodot - NOT instant.<br>


#### WSP strategy

Early game the variable strengths are ordered as follows: <br>
q2 ~= c2 > n > c1 > q1 <br><br>

Late game these become: <br>
n > q2 ~= c2 > q1 >>> c1 <br><br>

<b>Before you get e400 rho, for idle, simply autobuy all.<b> <br><br>

For a simple active strategy before e400 rho, simply autobuy q2 and c2 since they double the rates long term. n and c1 give approximately 60% boost (with n becoming more powerful with milestones and vice versa for c1). We will buy n and c1 when their costs are less than 50% of the minimum of q2 and c2. 
<br>
For q1, we will buy it when its cost is less than 10% of the minimum of q2 and c2. For example, if q1 costs 1.2e100 and q2 costs 1e101, we would not buy q1 as it's 'too expensive' compared to q2.  <br><br>

Once you have e400 rho, c1 starts to become extremely bad. Because of this, the new idle strategy would be to autobuy all for 20 seconds or so. Then turn c1 OFF. Continue to autobuy the rest of the variables. <br>
<br>
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

SL is the second official custom theory, developed by Ellipsis. This theory uses a variation of Stirling's formula to approximate Euler's number (e~=2.71828). As upgrades are bought, the approximation becomes more precise, increasing rhodot and rho. As with the first official custom theory (WSP), there are several equations in this theory. We'll explore each one now:

\\(\dot{\rho}_1 = \frac{\sqrt{\rho_2^(1.06)}}{e - \gamma}\\)

\\(\gamma = \frac{\rho_3}{\sqrt[\rho_3]{\rho_3!}}\\)

\\(\dot{rho_2} = a_1a_2a_3^{-ln{rho_3}}\\)

\\(\dot{rho_3} = b1^{1.04}b2^{1.04}\\)

\\(a_3 = 1.96\\)

The very first official custom theory; WSP was developed by Xelaroc, who also came up with some of the strategies used in the theory. The idea behind the theory is to use the factorization of sine to increase rho. There are multiple equations with this theory, and some may look daunting, so we'll have a look at each one.<br><br>

\\(\dot{\rho} = q_1^{1.04}q_2q\\)

\\(\dot{q} = c_2s_n({\chi}) / sin({\chi})\\)

\\(s_n({x}) := x\prod_{k=1}^{n}(1-\frac{x}{k\pi}^2)\\)

\\(\chi = \pi\frac{c_1n}{c_1+n/3^{3}}+1\\)


#### SL strategy

The optimal multiplier is pretty high and is not known before \\(e30\\).
The multipliers for active play we know at the moment are:\\(e25\\)-\\(e100\\)
is \\(1k\\) to \\(10k\\); \\(e100\\)-\\(e175\\) \\(10k\\)-\\(100k\\).




#### SL milestone route

<table class="milestone_routing">
   <tbody>
      <tr>
         <td>2/0/0/0</td>
         <td class="arrow">→</td>
         <td>2/2/0/0</td>
         <td class="arrow">→</td>
         <td>2/2/3/0</td>
      </tr>
      <tr>
         <td>2/2/3/0</td>
         <td class="arrow">→</td>
         <td>2/2/3/3</td>
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
      </tr>
      <tr>
         <td>3 x3</td>
         <td class="arrow">→</td>
         <td>4 x3</td>
   </tbody>
</table>

### Euler's Formula (EF)

#### EF Overview



#### EF strategy



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



#### CSR2 strategy



#### CSR2 milestone route

<table class="milestone_routing">
   <tbody>
      <tr>
         <td>3/0/0</td>
         <td class="arrow">→</td>
         <td>3/0/3</td>
         <td class="arrow">→</td>
         <td>3/1/3</td></td>
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


