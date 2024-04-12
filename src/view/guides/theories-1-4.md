---
title: "Theories 1-4"
description: "Our guide for routing through and understanding theories 1 to 4. We provide some strategies to help you make progress."
author: "LE★Baldy & Snaeky"
contributors: "the Amazing Community"
draft: true
order: 4
---

{% import "embed-yt.njk" as yt %}

### Theory basics

Publications are equivalent to prestiges for \\(f(t)\\) so don't be afraid to
use them. However, the best publication multipliers vary from theory to theory and will
change over time. If you are close to a multiplier you want, turn off autobuyer
and let \\(\rho\\) increase without buying upgrades for a faster short-term increase
before the publication (turn on after you publish). This is known and referenced as "cruising".
Total \\(τ\\), found in the equation or at the top of the screen, is a multiplicative
combination of all \\(τ\\) from each theory.

__Don’t be afraid to skip getting all milestones to work on the next or a
better theory.__

###### Note: If you see # → [# → # → #] → # in the milestone route of a theory, this is the section that has an active strategy tied to it.

### Graduation routing

Remember to follow our routing advice from [Introduction to Graduation](https://exponential-idle-guides.netlify.app/guides/intro-to-grad/#graduation-routing).

<table class="graduation_routing">
   <tbody>
      <tr>
         <td>5k</td>
         <td class="arrow">→</td>
         <td>5.2k</td>
         <td class="arrow">→</td>
         <td>5.6k</td>
         <td class="arrow">→</td>
         <td>5.8k</td>
         <td class="arrow">→</td>
         <td>6k</td>
      </tr>
      <tr>
         <td>6k</td>
         <td class="arrow">→</td>
         <td>7k</td>
         <td class="arrow">→</td>
         <td>8k</td>
      </tr>
      <tr>
         <td>8k</td>
         <td class="arrow">→</td>
         <td>8.4k</td>
         <td class="arrow">→</td>
         <td>8.6k</td>
         <td class="arrow">→</td>
         <td>8.8k</td>
         <td class="arrow">→</td>
         <td>9k</td>
      </tr>
   </tbody>
</table>

### Theory 1 (20σ / 5k)

#### T1 Overview

In mathematics, a recurrence relation is an equation that relies on an
initial term and a previous term to change.
We start with the current tick’s term, \\(ρ_{n}\\), and a constant add-on to
obtain the value of the next tick, \\(ρ_{n+1}\\). This gives us an equation
equivalent to \\(ρ=at+constant\\), with a changing value \\(a\\) and a constant
that is the initial value of 1. Later when we add the \\(c_{3}ρ_{n-1}^{0.2}\\) term,
this is now saying that we are now adding each tick the value of \\(ρ\\) from
the previous tick ago with a constant \\(c_{3}\\) put to the power of \\(0.2\\). This
is the same with the next term \\(c_{4}ρ_{n-2}^{0.3}\\), with the value of \\(ρ\\) two ticks
ago and a multiplier \\(c_4\\) put to the power \\(0.3\\). When we multiply the
\\(c_1c_2\\) term by the term \\(1+ln(ρ)/100\\) changing the constant addition to
being based on the value of \\(ρ\\) from the previous tick with the value of
\\(1+ln(ρ)/100\\). The final milestone upgrade raises the exponent of \\(c_1\\) from
\\(1.00\\) to \\(1.05\\) to \\(1.10\\) to \\(1.15\\).

This theory also has its adjusted tickspeed calculated by \\(q_{1}*q_{2}\\). This
lengthens the normal tick length of \\(0.1/sec\\) to that value which speeds
up the theory.

#### T1 formula

##### Initial

\\[ρ_{n+1} = ρ_n + c_1c_2\\]

##### First milestone

\\[ρ_{n+1} = ρ_n + c_1c_2 + c_3ρ_{n-1}^{0.2}\\]

##### Second milestone

\\[ρ_{n+1} = ρ_n + c_1c_2 + c_3ρ_{n-1}^{0.2} + c_4ρ_{n-2}^{0.3}\\]

##### Third milestone

\\[ρ_{n+1} = ρ_n + c_1c_2 \left( 1+\frac{ln(ρ_n)}{100} \right) \\\ + c_3ρ_{n-1}^{0.2} + c_4ρ_{n-2}^{0.3}\\]

##### Fourth to Sixth milestone

\\[ρ_{n+1} = ρ_n + c_1^{1.15}c_2 \left( 1+\frac{ln(ρ_n)}{100} \right) \\\ + c_3ρ_{n-1}^{0.2} + c_4ρ_{n-2}^{0.3}\\]

#### T1 strategy

The publication multiplier has no optimal fit, as it fluctuates a lot,
but here is known: 4-6 to start; 3-4 between 1e100 and 1e150; the
publication multiplier oscillates between 2.5 and 5 past e150. Once you
get your first milestone, you can turn off \\(c_1\\) and \\(c_2\\) until e150 active strat.

The active strat follows but only works when you have all milestones
past e150. T1 is the only theory where the recent value of \\(ρ\\)
influences the rate of change of \\(ρ\\) therefore buying a variable as
soon as you can afford it will slow your progress. Lategame, buying
upgrades immediately will slow you more than the benefit of the upgrade
because \\(c_3\\) and \\(c_4\\) dominate. If the next level costs \\(10ρ\\)
and you have \\(11ρ\\), buying that level will reduce \\(ρ_{n+1}\\) to \\(1\\). This reduces your \\(ρ_{n+1}\\) by roughly a factor of \\(10\\).
There are \\(3\\) terms that influence the rate of change of \\(ρ\\), and all are affected by the previous state of \\(ρ\\). The active strategy around this is known as T1<span style="color:#41AD21">Ratio</span>. The values in the chart found [here](https://exponential-idle-guides.netlify.app/guides/theory-strategies/#t1ratio) are to be
only used when you are past \\(e150 τ\\) and max milestones. They represent how to purchase each variable based on the state of the theory at the time of purchase.

Note: If you are not doing the active strat, then simply turn off \\(c_1\\) and \\(c_2\\) after milestone 1 (e25τ) and autobuy rest until ee6k.

__The video below is only good for early tau between 1e150 and 1e250.__

{{ yt.embed('lFSAFIpWkb0') }}

#### T1 milestone route

<table class="milestone_routing">
   <tbody>
      <tr>
         <td>0/0/1</td>
         <td class="arrow">→</td>
         <td>0/0/1/1</td>
         <td class="arrow">→</td>
         <td>0/1/1/1</td>
      </tr>
      <tr>
         <td>0/1/1/1</td>
         <td class="arrow">→</td>
         <td>3/1/1/1</td>
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
         <td>3</td>
         <td class="arrow">→</td>
         <td>4</td>
         <td class="arrow">→</td>
         <td>2</td>
      </tr>
      <tr>
         <td>2</td>
         <td class="arrow">→</td>
         <td>1 x3</td>
   </tbody>
</table>

### Theory 2 (25σ / 6k)

#### T2 Overview

This second theory is focusing on derivatives. Derivatives in
mathematics are the rate of change of the function they are the
derivative of. For the case of \\(q_1\\)  and \\(q_2\\), \\(q_2\\) is
the derivative of \\(q_1\\). This follows the power rule for derivatives:

\\[q=a*t^n ↔ q’=n*a*t^{n-1}\\]

In simpler terms, it works similar to how
\\(x_i\\) upgrades work for \\(f(t)\\) equation with continuous addition
of the previous \\(term*dt\\) to the next \\(x_{i+1}\\) term, but with
continuous addition of \\(q_i*dt\\) to the term above \\(q_{i-1}\\).
These two values of \\(r_1\\) and \\(q_1\\) are multiplied to produce the derivative
of \\(ρ(t)\\), shown by Newton's derivative notation \\(\dot{ρ}\\). This would give the
equation of \\(ρ\\) to be \\(ρ(t+dt)=ρ+\dot{ρ}*dt\\). The other milestones besides more \\(q\\)
and \\(r\\) derivatives increase the exponent of \\(q\\) and \\(r\\) respectively. The
reason why \\(q\\) and \\(r\\) derivatives are more powerful long-term than the
exponents is that they take time to build up and eventually overtake and
keep increasing \\(q_1\\) and \\(r_1\\) while the exponents have a never-changing
boost.

#### T2 formula

##### Initial

\\[\dot{q_n}=q_{n+1}*dt\\] for n=1

\\[\dot{r_k}=r_{k+1}*dt\\] for k=1

\\[\dot{ρ}=q_1r_1\\]

##### First and Second milestones

\\[\dot{q_n}=q_{n+1}*dt\\] for n=1, 2, 3

\\[\dot{r_k}=r_{k+1}*dt\\] for k=1

\\[\dot{ρ}=q_1r_1\\]

##### Third and Fourth milestones

\\[\dot{q_n}=q_{n+1}*dt\\] for n=1, 2, 3

\\[\dot{r_k}=r_{k+1}*dt\\] for k=1, 2, 3

\\[\dot{ρ}=q_1r_1\\]

##### Fifth to Seventh milestones

\\[\dot{q_n}=q_{n+1}*dt\\] for n=1, 2, 3

\\[\dot{r_k}=r_{k+1}*dt\\] for k=1, 2, 3

\\[\dot{ρ}=q_1^{1.15}r_1\\]

##### Eight to Tenth milestones

\\[\dot{q_n}=q_{n+1}*dt\\] for n=1, 2, 3

\\[\dot{r_k}=r_{k+1}*dt\\] for k=1, 2, 3

\\[\dot{ρ}=q_1^{1.15}r_1^{1.15}\\]

#### T2 strategy

The optimal multiplier is pretty high and is not known before \\(e30\\). The theory sim will recommend publication multipliers below these values, but the sim's T2<span style="color:#41AD21">MS</span> does not currently have coasting.
The multipliers for active play (which do use coasting) we know at the moment are:<br />
- \\(e25\\)-\\(e100\\) is \\(1k\\) to \\(10k\\) <br />
- \\(e100\\)-\\(e175\\) is \\(10k\\)-\\(100k\\)

__For both strategies the milestones are listed in the order X>Y, where X and Y are the milestones as numerically ordered top to bottom in-game, are to be maxed in order from left to right.__

##### Idle

For the idle strategy, you want to prioritize buying milestone levels of 1>2. If you have more than 4 milestones, you will prioritize
milestone 1>2>3>4. You will want to publish at
about 10-100 multiplier before \\(e75\\) and about a \\(1000\\) multiplier after \\(e75\\), but larger multipliers are fine.
If possible, swap to milestones 3>4>1>2 at end before publishing for an additional boost.

##### Active

The goal of the active strategy is to grow \\(q_1\\) and \\(r_1\\) as
much as possible while being able to take advantage of the exponent
milestones too, yeilding a large boost from that growth. The active for T2 is on a 50-second cycle between two milestone sets: 10 seconds for
exponent priority (Milestones 3 and 4) and 40 seconds for derivative priority (Milestones 1 and 2) . You will start a publication with exponent priority as the cost of the variables gained from milestones 1 and 2 are
too large for you to get right away. When you can afford them, you will
start the cycle. The full cycle is listed below:

**1-3 Milestones**
<blockquote style="font-family:monospace;">3>4 (10s) → 1 (40s) → 3>4 (10s) → 2 (40s) → <br>repeat → coast and publish</blockquote>

**4+ Milestones**
<blockquote style="font-family:monospace;">3>4>1>2 (10s) → 1>2>3>4 (40s) → <br>3>4>1>2 (10s) → 2>1>3>4 (40s) → <br>repeat →  coast and publish</blockquote>

Past \\(e175\\), the active strat will become exponentially less
effective. At \\(e250\\), you would start to idle T2 overnight only.
Until you have over \\(1e350\tau\\) from theory 2, this is the best theory
to run idle overnight.

When you get to Theory 3 at ee7k, move on to pushing Theory 3 when active and running T2 overnight. The above is simply an option if you rather not work on T3 now.

{{ yt.embed('XcatIVPd8Jg') }}

#### T2 milestone route

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

### Theory 3 (30σ / 7k)

#### T3 Overview

The basis of this theory and understanding how it works is based on
matrix multiplication. Below I have put a color-coded image to display
how matrix multiplication works.

![Matrix multiplication diagram](/images/matrix-multiplication.png)

This gives the basis for why certain upgrades are more powerful than
others. The exponents on \\(b_1\\), \\(b_2\\), and \\(b_3\\)
all directly affect \\(ρ_1\\) production which is used for \\(\tau\\). An extra
dimension roughly gives \\(50%\\) more \\(\tau\\) production as it adds an extra term
to the \\(ρ_1\\) production.

#### T3 strategy

The optimal publication multiplier is about 2-3 without cruising and 3-4
with cruising. If you decide to play actively, there is a form of
exponent swapping strat to be aware of. This is a difficult
strategy because it requires you to notice when a certain threshold
happens. It happens when the following occurs:

\\[c_{11}*b_{1}^{1.05\text{ or }1.1}<c_{12}*b_{2}^{1.05\text{ or }1.1}\\]

When this happens swap your exponents from \\(b_1\\) to \\(b_2\\) and you will get a
little upgrade boost. It also allows for a slight push of \\(ρ_2\\) for
upgrades to \\(b_2\\) and \\(c_{12}\\), but this is a lot less impactful and less
noticeable. This strategy also works with \\(b_3\\) and \\(c_{13}\\) but is usually
not as common.

If you decide to buy manually, the focus areas are buying \\(b_1\\), \\(b_2\\), and \\(b_3\\) when their cost is
e1 lower than \\(c_{11}\\), \\(c_{12}\\), and \\(c_{13}\\) respectively. These all directly boost the production
of \\(ρ_1\\) which is used for \\(\tau\\). After this, if you are doing the active exponent
swapping strategy described in the previous paragraph, your next focus will be on \\(c_{21}\\),
\\(c_{22}\\), and \\(c_{23}\\) as these boost \\(b_2\\) production which increases the likelihood
for the exponent swap to occur. This leaves the \\(c_{31}\\), \\(c_{32}\\), and \\(c_{33}\\)
upgrades at the lowest priority. If you are not using the exponent
swapping strategy from the previous paragraph, then all the remaining
upgrades should be bought at equivalent priority.

At the end of any publication, around a 2-3 multiplier, you should turn
off \\(b_1\\) and \\(c_{31}\\) as they cost \\(ρ_1\\). You will cruise until you get to a
3-4 multiplier. Publish and turn back on \\(ρ_1\\) costing variables and
repeat.

###### Commentary

{{ yt.embed('kqnBfdOI34c&t') }}

#### T3 milestone route

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
         <td>2 x2</td>
         <td class="arrow">→</td>
         <td>3 x2</td>
         <td class="arrow">→</td>
         <td>1</td>
      </tr>
      <tr>
         <td>1</td>
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
         <td>2 x2</td>
         <td class="arrow">→</td>
         <td>3 x2</td>
         <td class="arrow">→</td>
         <td>1</td>
      </tr>
      <tr>
         <td>1</td>
         <td class="arrow">→</td>
         <td>4 x2</td>
   </tbody>
</table>

### Theory 4 (35σ / 8k)

#### Theory 4 Overview

Theory 4 is based on Polynomials, which contain terms of the form \\(x^a+x^b+x^c\\) etc. In this case, instead of 'x' it's 'q'. The strategies for this theory are quite simple compared to the previous theory, especially late game strategies.
<br><br>

#### Theory 4 Equation Description

\\(\dot{\rho} = c_1^{1.15}c_2 + c_3q + c_4q^2 + c_5q^3 + c_6q^4\\)

\\(\dot{q} = 8q_1q_2 / (1 + q)\\)

<br><br>

The first line statest that the rate of change of rho is the sum of a bunch of polynomial terms. We have a bunch of 'c' variables multiplied by 'q'. We can increase \\(q\\) by buying \\(q_1\\) and \\(q_2\\) upgrades. Note that this is with all milestones. You'll not have all of these at the beginning.

 <br><br>
The second line is more unique. It says that \\(qdot\\) is proportional to the inverse of \\(q\\) itself! This means that the more \\(q\\) we have, the slower \\(q\\) grows, as \\(qdot\\) decreases. This means that \\(q_1\\) and \\(q_2\\) are not as strong as they first appear. However, we still want to buy them in general unless stated otherwise as slow growth is better than no growth. 
 <br><br>
 For the more mathematically observant reader, we may integrate the \\(\dot{q}\\) equation and conclude that \\(q\\) is proportional to the square root of time. This means that even though \\(\dot{q}\\) grows slower with increasing \\(q\\), there is theoretically no finite limit on the maximum value of \\(q\\).

 <br><br>

#### Theory  Variable Description
Approximate variable strengths on \\(\dot\rho\\) with all milestones are as follows:

<table class="T2">
<caption>Brief summary of variable strengths of Theory 5.</caption>
   <thead><tr>
   <th class="invisible"></th>
   <th colspan="2" style="text-align:center">Brief Description</th>
   </tr></thead>
   <tbody>
      <tr>
         <th>c1<sub><sub><small>1</small></sub></sub></th>
         <td>About 7% increase on the \\(c_1^{1.15}c_2\\) term. Instantaneous.</td>
      </tr>
      <tr>
         <th>c2<sub><sub><small>2</small></sub></sub></th>
         <td>Doubles the \\(c_1^{1.15}c_2\\) term. Instantaneous. Note that this doesn't mean double ρ dot. </td>
      </tr>
      <tr>
         <th>c3</th>
         <td> Doubles the \\(c_3q\\) term. Instantaneous. </td>
      </tr>
      <tr>
         <th>c4</th>
         <td>Doubles the \\(c_4q^2\\) term. Instantaneous. </td>
      </tr>
      <tr>
         <th>c5</th>
         <td>Doubles the \\(c_5q^3\\) term. Instantaneous.</td>
      </tr>
      <tr>
         <th>c6</th>
         <td>Doubles the \\(c_6q^4\\) term. Instantaneous.</td>
      </tr>
      <tr>
         <th>q1</th>
         <td>About 7% increase on q dot. Note that because of the square root relationship between time and q mentioned earlier, this translates to about 3.5% increase in long term q. No instantaneous effect on rho dot.</td>
      </tr>
      <tr>
         <th>q2</th>
         <td>Doubles the instantaneous value of q dot. Note that because of the square root relationship between time and q mentioned earlier, this translates to about 41% increase in long term q. No instantaneous effect on rho dot.</td>
      </tr>
   </tbody>
</table>

<br><br>

#### Theory 4 strategy

The strengths of each variable are as follows:

<br><br>

Early game (before 14k ft):
<br><br>

\\(c_6\\) > \\(c_5\\) > \\(c_4\\) > \\(q_2\\) > \\(c_2\\) > \\(q_1\\) > \\(c_3\\) > \\(c_1\\)

<br><br>

From 14k ft to mid-late game (about e350+ T4):

\\(c_2\\) > \\(c_3\\) > \\(q_2\\) > \\(c_1\\) > \\(q_1\\) > everything else <br><br>

From e350+ T4 to end game:

\\(c_3\\) > \\(q_2\\) > \\(q_1\\) > everything else <br><br>

<br><br>

##### Idle

T4 is quite idle friendly compared to T3 and T1. Here are some simple idle strategies for T4:

<br><br> start to e25 <br><br>

Autobuy c1, c2. DON'T buy c3, q1, q2! The \\(c_3q\\) term is bad early on. Publish at about 2.5-3 if possible. 

<br><br> e25 to e175 <br><br>

Get the 'Add the term' milestones. Prioritise these ones first until maximum. Now we autobuy c4, q1, q2 ONLY. Best publication multiplier is about 6-7.

<br>

When we unlock c5 and c6, we can add these to the autobuy variables. DON'T autobuy c3, c2, c1! Prioritise the qdot milestones over the c1 exponents. Try to publish between 12-20. See the idle section of milestone order below.

<br><br> e175 to endgame <br><br>

Simply autobuy c3, q1, q2 ONLY. Buy 1 level of c1 to start the theory. Publish at about 4-5.

<br><br>

##### Semi-Idle

There's no strategic difference between semi-idle and idle for this theory. The main difference is with semi-idle, we would publish more often since we check the game more often. We wouldn't overshoot the optimal multiplier as much.

<br><br>

##### Active

T4 active is more involved. However it is not as demanding as T3 or T1 active.

<br><br> start to e75 <br><br>

Autobuy c2. DON'T buy c3, q1, q2! The \\(c_3q\\) term is bad early on. Buy c1 until its cost exceed about 15% of c2 cost. Publish at about 2.5-3 if possible. When we reach e25 rho, we get the c1 exponent milestone (note the difference between this strategy and the idle strategy). With the c1 exponent milestone, the c1c2 term remains the strongest term IF we can babysit and publish often (at about 2.5-3). The strategy remains the same otherwise. Note that since we're only buying c1 and c2 (NO c3, c4, c5, c6, q1, q2!), all the 'q' related milestones are useless for now.

<br><br> e75 to e175 OR 14k ft <br><br>

Now here is where we can apply some more advanced strategies. Consider that the c1c2 term is strong early on, but falls off as the value of q increases. Then we can conclude that we can start with the same strategy as before. But once we reach our previous publication point, we can switch to the following strategy: <br><br>

1. Do the same strategy as before until we reach our previous publication point.
2. Take point(s) out of the c1 exponent milestones and unlock all the terms (the first milestone). We should now have access to c6.
3. Autobuy c4, c5, c6, q2.
4. If you want to optimise a bit more, you can buy q1 until its cost exceed about 15% of q2. Otherwise it's ok to also autobuy q1.
5. DO NOT autobuy c1, c2, c3.
6. Publish at about 10-20. Once published, remember to take out the milestone point and put it back into the c1 exponent to repeat step 1. 

<br><br>

If done right, this strategy is significantly faster than the idle strategies above. The logic with this strategy is the c4, c5, c6 terms scale well with 'q'. However we need enough rho to buy a lot of q. So in the beginning we buy only c1c2 as usual to accumulate enough rho so that we can buy q1q2 to stack q. Once we have enough q, the c4, c5, c6 terms will outscale. Note that after ee14k ft, we will unlock certain upgrades that make c1c2 better again.

<br><br> e175 OR 14k ft to ~e300 T4 <br><br>

We will do the exact same strategy as in the #start to e75 section above. This is because c1c2 become really strong again and the c4c5c6 terms take too long to outscale. Note that we still don't buy c3.

<br><br> ~e300 to endgame <br><br>

At this point the c3 term starts to become dominant. Therefore we will prioritise buying c3, q1, q2. We will NOT buy anything else except 1 level of c1 to start the theory. If you wish, you can buy q1 at about 15% ratio to q2 cost. It is also ok to autobuy q1. The c3 term will remain dominant until endgame.

<br><br>

#### T4 milestone route

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

### Theory tier list (Pre-9k+)

Before you reach 9k, these are the recommended values for each theory.
You may not hit the values and have a different distribution, but work on getting these theories up to these values later. This list is in order of priority.

<table class="newwords">
   <thead>
      <tr>
         <th class="invisible"></th>
         <th>Approximate Tau</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td class="leftHeader">T2</td>
         <td>e240-e300 𝜏</td>
      </tr>
      <tr>
         <td class="leftHeader">T1</td>
         <td>e205-e215 𝜏</td>
      </tr>
      <tr>
         <td class="leftHeader">T3</td>
         <td>e150 𝜏</td>
      </tr>
      <tr>
         <td class="leftHeader">T4</td>
         <td>e150 𝜏</td>
      </tr>
   </tbody>
</table>
