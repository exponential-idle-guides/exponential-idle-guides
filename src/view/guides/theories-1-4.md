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

$$q=a*t^n ↔ q’=n*a*t^{n-1}$$

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

{{ yt.embed('kqnBfdOI34c') }}

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
<caption>Brief summary of variable strengths of Theory 4.</caption>
   <thead><tr>
   <th class="invisible"></th>
   <th colspan="2" style="text-align:center">Brief Description</th>
   </tr></thead>
   <tbody>
      <tr>
         <th>c<sub><small>1</small></sub></th>
         <td>About 7% increase on the <mjx-container class="MathJax" jax="SVG" style="direction: ltr; position: relative;"><svg style="overflow: visible; min-height: 1px; min-width: 1px; vertical-align: -0.673ex;" xmlns="http://www.w3.org/2000/svg" width="5.979ex" height="2.573ex" role="img" focusable="false" viewBox="0 -840.1 2642.8 1137.4" aria-hidden="true"><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="msubsup"><g data-mml-node="mi"><path data-c="1D450" d="M34 159Q34 268 120 355T306 442Q362 442 394 418T427 355Q427 326 408 306T360 285Q341 285 330 295T319 325T330 359T352 380T366 386H367Q367 388 361 392T340 400T306 404Q276 404 249 390Q228 381 206 359Q162 315 142 235T121 119Q121 73 147 50Q169 26 205 26H209Q321 26 394 111Q403 121 406 121Q410 121 419 112T429 98T420 83T391 55T346 25T282 0T202 -11Q127 -11 81 37T34 159Z" style="stroke-width: 3;"></path></g><g data-mml-node="TeXAtom" transform="translate(466,369.2) scale(0.707)" data-mjx-texclass="ORD"><g data-mml-node="mn"><path data-c="31" d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z" style="stroke-width: 3;"></path><path data-c="2E" d="M78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60Z" transform="translate(500,0)" style="stroke-width: 3;"></path><path data-c="31" d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z" transform="translate(778,0)" style="stroke-width: 3;"></path><path data-c="35" d="M164 157Q164 133 148 117T109 101H102Q148 22 224 22Q294 22 326 82Q345 115 345 210Q345 313 318 349Q292 382 260 382H254Q176 382 136 314Q132 307 129 306T114 304Q97 304 95 310Q93 314 93 485V614Q93 664 98 664Q100 666 102 666Q103 666 123 658T178 642T253 634Q324 634 389 662Q397 666 402 666Q410 666 410 648V635Q328 538 205 538Q174 538 149 544L139 546V374Q158 388 169 396T205 412T256 420Q337 420 393 355T449 201Q449 109 385 44T229 -22Q148 -22 99 32T50 154Q50 178 61 192T84 210T107 214Q132 214 148 197T164 157Z" transform="translate(1278,0)" style="stroke-width: 3;"></path></g></g><g data-mml-node="mn" transform="translate(466,-297.3) scale(0.707)"><path data-c="31" d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z" style="stroke-width: 3;"></path></g></g><g data-mml-node="msub" transform="translate(1773.2,0)"><g data-mml-node="mi"><path data-c="1D450" d="M34 159Q34 268 120 355T306 442Q362 442 394 418T427 355Q427 326 408 306T360 285Q341 285 330 295T319 325T330 359T352 380T366 386H367Q367 388 361 392T340 400T306 404Q276 404 249 390Q228 381 206 359Q162 315 142 235T121 119Q121 73 147 50Q169 26 205 26H209Q321 26 394 111Q403 121 406 121Q410 121 419 112T429 98T420 83T391 55T346 25T282 0T202 -11Q127 -11 81 37T34 159Z" style="stroke-width: 3;"></path></g><g data-mml-node="mn" transform="translate(466,-150) scale(0.707)"><path data-c="32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z" style="stroke-width: 3;"></path></g></g></g></g></svg><mjx-assistive-mml unselectable="on" display="inline" style="top: 0px; left: 0px; clip: rect(1px, 1px, 1px, 1px); -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; position: absolute; padding: 1px 0px 0px 0px; border: 0px; display: block; width: auto; overflow: hidden;"><math xmlns="http://www.w3.org/1998/Math/MathML"><msubsup><mi>c</mi><mn>1</mn><mrow data-mjx-texclass="ORD"><mn>1.15</mn></mrow></msubsup><msub><mi>c</mi><mn>2</mn></msub></math></mjx-assistive-mml></mjx-container> term. Instantaneous.</td>
      </tr>
      <tr>
         <th>c<sub><small>2</small></sub></th>
         <td>Doubles the <mjx-container class="MathJax" jax="SVG" style="direction: ltr; position: relative;"><svg style="overflow: visible; min-height: 1px; min-width: 1px; vertical-align: -0.673ex;" xmlns="http://www.w3.org/2000/svg" width="5.979ex" height="2.573ex" role="img" focusable="false" viewBox="0 -840.1 2642.8 1137.4" aria-hidden="true"><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="msubsup"><g data-mml-node="mi"><path data-c="1D450" d="M34 159Q34 268 120 355T306 442Q362 442 394 418T427 355Q427 326 408 306T360 285Q341 285 330 295T319 325T330 359T352 380T366 386H367Q367 388 361 392T340 400T306 404Q276 404 249 390Q228 381 206 359Q162 315 142 235T121 119Q121 73 147 50Q169 26 205 26H209Q321 26 394 111Q403 121 406 121Q410 121 419 112T429 98T420 83T391 55T346 25T282 0T202 -11Q127 -11 81 37T34 159Z" style="stroke-width: 3;"></path></g><g data-mml-node="TeXAtom" transform="translate(466,369.2) scale(0.707)" data-mjx-texclass="ORD"><g data-mml-node="mn"><path data-c="31" d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z" style="stroke-width: 3;"></path><path data-c="2E" d="M78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60Z" transform="translate(500,0)" style="stroke-width: 3;"></path><path data-c="31" d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z" transform="translate(778,0)" style="stroke-width: 3;"></path><path data-c="35" d="M164 157Q164 133 148 117T109 101H102Q148 22 224 22Q294 22 326 82Q345 115 345 210Q345 313 318 349Q292 382 260 382H254Q176 382 136 314Q132 307 129 306T114 304Q97 304 95 310Q93 314 93 485V614Q93 664 98 664Q100 666 102 666Q103 666 123 658T178 642T253 634Q324 634 389 662Q397 666 402 666Q410 666 410 648V635Q328 538 205 538Q174 538 149 544L139 546V374Q158 388 169 396T205 412T256 420Q337 420 393 355T449 201Q449 109 385 44T229 -22Q148 -22 99 32T50 154Q50 178 61 192T84 210T107 214Q132 214 148 197T164 157Z" transform="translate(1278,0)" style="stroke-width: 3;"></path></g></g><g data-mml-node="mn" transform="translate(466,-297.3) scale(0.707)"><path data-c="31" d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z" style="stroke-width: 3;"></path></g></g><g data-mml-node="msub" transform="translate(1773.2,0)"><g data-mml-node="mi"><path data-c="1D450" d="M34 159Q34 268 120 355T306 442Q362 442 394 418T427 355Q427 326 408 306T360 285Q341 285 330 295T319 325T330 359T352 380T366 386H367Q367 388 361 392T340 400T306 404Q276 404 249 390Q228 381 206 359Q162 315 142 235T121 119Q121 73 147 50Q169 26 205 26H209Q321 26 394 111Q403 121 406 121Q410 121 419 112T429 98T420 83T391 55T346 25T282 0T202 -11Q127 -11 81 37T34 159Z" style="stroke-width: 3;"></path></g><g data-mml-node="mn" transform="translate(466,-150) scale(0.707)"><path data-c="32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z" style="stroke-width: 3;"></path></g></g></g></g></svg><mjx-assistive-mml unselectable="on" display="inline" style="top: 0px; left: 0px; clip: rect(1px, 1px, 1px, 1px); -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; position: absolute; padding: 1px 0px 0px 0px; border: 0px; display: block; width: auto; overflow: hidden;"><math xmlns="http://www.w3.org/1998/Math/MathML"><msubsup><mi>c</mi><mn>1</mn><mrow data-mjx-texclass="ORD"><mn>1.15</mn></mrow></msubsup><msub><mi>c</mi><mn>2</mn></msub></math></mjx-assistive-mml></mjx-container> term. Instantaneous. Note that this doesn't mean double ρ dot. </td>
      </tr>
      <tr>
         <th>c<sub><small>3</small></sub></th>
         <td> Doubles the <mjx-container class="MathJax" jax="SVG" style="direction: ltr; position: relative;"><svg style="overflow: visible; min-height: 1px; min-width: 1px; vertical-align: -0.439ex;" xmlns="http://www.w3.org/2000/svg" width="3.008ex" height="1.439ex" role="img" focusable="false" viewBox="0 -442 1329.6 636" aria-hidden="true"><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="msub"><g data-mml-node="mi"><path data-c="1D450" d="M34 159Q34 268 120 355T306 442Q362 442 394 418T427 355Q427 326 408 306T360 285Q341 285 330 295T319 325T330 359T352 380T366 386H367Q367 388 361 392T340 400T306 404Q276 404 249 390Q228 381 206 359Q162 315 142 235T121 119Q121 73 147 50Q169 26 205 26H209Q321 26 394 111Q403 121 406 121Q410 121 419 112T429 98T420 83T391 55T346 25T282 0T202 -11Q127 -11 81 37T34 159Z" style="stroke-width: 3;"></path></g><g data-mml-node="mn" transform="translate(466,-150) scale(0.707)"><path data-c="33" d="M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z" style="stroke-width: 3;"></path></g></g><g data-mml-node="mi" transform="translate(869.6,0)"><path data-c="1D45E" d="M33 157Q33 258 109 349T280 441Q340 441 372 389Q373 390 377 395T388 406T404 418Q438 442 450 442Q454 442 457 439T460 434Q460 425 391 149Q320 -135 320 -139Q320 -147 365 -148H390Q396 -156 396 -157T393 -175Q389 -188 383 -194H370Q339 -192 262 -192Q234 -192 211 -192T174 -192T157 -193Q143 -193 143 -185Q143 -182 145 -170Q149 -154 152 -151T172 -148Q220 -148 230 -141Q238 -136 258 -53T279 32Q279 33 272 29Q224 -10 172 -10Q117 -10 75 30T33 157ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z" style="stroke-width: 3;"></path></g></g></g></svg><mjx-assistive-mml unselectable="on" display="inline" style="top: 0px; left: 0px; clip: rect(1px, 1px, 1px, 1px); -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; position: absolute; padding: 1px 0px 0px 0px; border: 0px; display: block; width: auto; overflow: hidden;"><math xmlns="http://www.w3.org/1998/Math/MathML"><msub><mi>c</mi><mn>3</mn></msub><mi>q</mi></math></mjx-assistive-mml></mjx-container> term. Instantaneous. </td>
      </tr>
      <tr>
         <th>c<sub><small>4</small></sub></th>
         <td>Doubles the <mjx-container class="MathJax" jax="SVG" style="direction: ltr; position: relative;"><svg style="overflow: visible; min-height: 1px; min-width: 1px; vertical-align: -0.439ex;" xmlns="http://www.w3.org/2000/svg" width="4.11ex" height="2.326ex" role="img" focusable="false" viewBox="0 -833.9 1816.8 1027.9" aria-hidden="true"><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="msub"><g data-mml-node="mi"><path data-c="1D450" d="M34 159Q34 268 120 355T306 442Q362 442 394 418T427 355Q427 326 408 306T360 285Q341 285 330 295T319 325T330 359T352 380T366 386H367Q367 388 361 392T340 400T306 404Q276 404 249 390Q228 381 206 359Q162 315 142 235T121 119Q121 73 147 50Q169 26 205 26H209Q321 26 394 111Q403 121 406 121Q410 121 419 112T429 98T420 83T391 55T346 25T282 0T202 -11Q127 -11 81 37T34 159Z" style="stroke-width: 3;"></path></g><g data-mml-node="mn" transform="translate(466,-150) scale(0.707)"><path data-c="34" d="M462 0Q444 3 333 3Q217 3 199 0H190V46H221Q241 46 248 46T265 48T279 53T286 61Q287 63 287 115V165H28V211L179 442Q332 674 334 675Q336 677 355 677H373L379 671V211H471V165H379V114Q379 73 379 66T385 54Q393 47 442 46H471V0H462ZM293 211V545L74 212L183 211H293Z" style="stroke-width: 3;"></path></g></g><g data-mml-node="msup" transform="translate(869.6,0)"><g data-mml-node="mi"><path data-c="1D45E" d="M33 157Q33 258 109 349T280 441Q340 441 372 389Q373 390 377 395T388 406T404 418Q438 442 450 442Q454 442 457 439T460 434Q460 425 391 149Q320 -135 320 -139Q320 -147 365 -148H390Q396 -156 396 -157T393 -175Q389 -188 383 -194H370Q339 -192 262 -192Q234 -192 211 -192T174 -192T157 -193Q143 -193 143 -185Q143 -182 145 -170Q149 -154 152 -151T172 -148Q220 -148 230 -141Q238 -136 258 -53T279 32Q279 33 272 29Q224 -10 172 -10Q117 -10 75 30T33 157ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z" style="stroke-width: 3;"></path></g><g data-mml-node="mn" transform="translate(543.7,363) scale(0.707)"><path data-c="32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z" style="stroke-width: 3;"></path></g></g></g></g></svg><mjx-assistive-mml unselectable="on" display="inline" style="top: 0px; left: 0px; clip: rect(1px, 1px, 1px, 1px); -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; position: absolute; padding: 1px 0px 0px 0px; border: 0px; display: block; width: auto; overflow: hidden;"><math xmlns="http://www.w3.org/1998/Math/MathML"><msub><mi>c</mi><mn>4</mn></msub><msup><mi>q</mi><mn>2</mn></msup></math></mjx-assistive-mml></mjx-container> term. Instantaneous. </td>
      </tr>
      <tr>
         <th>c<sub><small>5</small></sub></th>
         <td>Doubles the <mjx-container class="MathJax" jax="SVG" style="direction: ltr; position: relative;"><svg style="overflow: visible; min-height: 1px; min-width: 1px; vertical-align: -0.439ex;" xmlns="http://www.w3.org/2000/svg" width="4.11ex" height="2.324ex" role="img" focusable="false" viewBox="0 -833.2 1816.8 1027.2" aria-hidden="true"><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="msub"><g data-mml-node="mi"><path data-c="1D450" d="M34 159Q34 268 120 355T306 442Q362 442 394 418T427 355Q427 326 408 306T360 285Q341 285 330 295T319 325T330 359T352 380T366 386H367Q367 388 361 392T340 400T306 404Q276 404 249 390Q228 381 206 359Q162 315 142 235T121 119Q121 73 147 50Q169 26 205 26H209Q321 26 394 111Q403 121 406 121Q410 121 419 112T429 98T420 83T391 55T346 25T282 0T202 -11Q127 -11 81 37T34 159Z" style="stroke-width: 3;"></path></g><g data-mml-node="mn" transform="translate(466,-150) scale(0.707)"><path data-c="35" d="M164 157Q164 133 148 117T109 101H102Q148 22 224 22Q294 22 326 82Q345 115 345 210Q345 313 318 349Q292 382 260 382H254Q176 382 136 314Q132 307 129 306T114 304Q97 304 95 310Q93 314 93 485V614Q93 664 98 664Q100 666 102 666Q103 666 123 658T178 642T253 634Q324 634 389 662Q397 666 402 666Q410 666 410 648V635Q328 538 205 538Q174 538 149 544L139 546V374Q158 388 169 396T205 412T256 420Q337 420 393 355T449 201Q449 109 385 44T229 -22Q148 -22 99 32T50 154Q50 178 61 192T84 210T107 214Q132 214 148 197T164 157Z" style="stroke-width: 3;"></path></g></g><g data-mml-node="msup" transform="translate(869.6,0)"><g data-mml-node="mi"><path data-c="1D45E" d="M33 157Q33 258 109 349T280 441Q340 441 372 389Q373 390 377 395T388 406T404 418Q438 442 450 442Q454 442 457 439T460 434Q460 425 391 149Q320 -135 320 -139Q320 -147 365 -148H390Q396 -156 396 -157T393 -175Q389 -188 383 -194H370Q339 -192 262 -192Q234 -192 211 -192T174 -192T157 -193Q143 -193 143 -185Q143 -182 145 -170Q149 -154 152 -151T172 -148Q220 -148 230 -141Q238 -136 258 -53T279 32Q279 33 272 29Q224 -10 172 -10Q117 -10 75 30T33 157ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z" style="stroke-width: 3;"></path></g><g data-mml-node="mn" transform="translate(543.7,363) scale(0.707)"><path data-c="33" d="M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z" style="stroke-width: 3;"></path></g></g></g></g></svg><mjx-assistive-mml unselectable="on" display="inline" style="top: 0px; left: 0px; clip: rect(1px, 1px, 1px, 1px); -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; position: absolute; padding: 1px 0px 0px 0px; border: 0px; display: block; width: auto; overflow: hidden;"><math xmlns="http://www.w3.org/1998/Math/MathML"><msub><mi>c</mi><mn>5</mn></msub><msup><mi>q</mi><mn>3</mn></msup></math></mjx-assistive-mml></mjx-container> term. Instantaneous.</td>
      </tr>
      <tr>
         <th>c<sub><small>6</small></sub></th>
         <td>Doubles the <mjx-container class="MathJax" jax="SVG" style="direction: ltr; position: relative;"><svg style="overflow: visible; min-height: 1px; min-width: 1px; vertical-align: -0.439ex;" xmlns="http://www.w3.org/2000/svg" width="4.11ex" height="2.343ex" role="img" focusable="false" viewBox="0 -841.7 1816.8 1035.7" aria-hidden="true"><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="msub"><g data-mml-node="mi"><path data-c="1D450" d="M34 159Q34 268 120 355T306 442Q362 442 394 418T427 355Q427 326 408 306T360 285Q341 285 330 295T319 325T330 359T352 380T366 386H367Q367 388 361 392T340 400T306 404Q276 404 249 390Q228 381 206 359Q162 315 142 235T121 119Q121 73 147 50Q169 26 205 26H209Q321 26 394 111Q403 121 406 121Q410 121 419 112T429 98T420 83T391 55T346 25T282 0T202 -11Q127 -11 81 37T34 159Z" style="stroke-width: 3;"></path></g><g data-mml-node="mn" transform="translate(466,-150) scale(0.707)"><path data-c="36" d="M42 313Q42 476 123 571T303 666Q372 666 402 630T432 550Q432 525 418 510T379 495Q356 495 341 509T326 548Q326 592 373 601Q351 623 311 626Q240 626 194 566Q147 500 147 364L148 360Q153 366 156 373Q197 433 263 433H267Q313 433 348 414Q372 400 396 374T435 317Q456 268 456 210V192Q456 169 451 149Q440 90 387 34T253 -22Q225 -22 199 -14T143 16T92 75T56 172T42 313ZM257 397Q227 397 205 380T171 335T154 278T148 216Q148 133 160 97T198 39Q222 21 251 21Q302 21 329 59Q342 77 347 104T352 209Q352 289 347 316T329 361Q302 397 257 397Z" style="stroke-width: 3;"></path></g></g><g data-mml-node="msup" transform="translate(869.6,0)"><g data-mml-node="mi"><path data-c="1D45E" d="M33 157Q33 258 109 349T280 441Q340 441 372 389Q373 390 377 395T388 406T404 418Q438 442 450 442Q454 442 457 439T460 434Q460 425 391 149Q320 -135 320 -139Q320 -147 365 -148H390Q396 -156 396 -157T393 -175Q389 -188 383 -194H370Q339 -192 262 -192Q234 -192 211 -192T174 -192T157 -193Q143 -193 143 -185Q143 -182 145 -170Q149 -154 152 -151T172 -148Q220 -148 230 -141Q238 -136 258 -53T279 32Q279 33 272 29Q224 -10 172 -10Q117 -10 75 30T33 157ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z" style="stroke-width: 3;"></path></g><g data-mml-node="mn" transform="translate(543.7,363) scale(0.707)"><path data-c="34" d="M462 0Q444 3 333 3Q217 3 199 0H190V46H221Q241 46 248 46T265 48T279 53T286 61Q287 63 287 115V165H28V211L179 442Q332 674 334 675Q336 677 355 677H373L379 671V211H471V165H379V114Q379 73 379 66T385 54Q393 47 442 46H471V0H462ZM293 211V545L74 212L183 211H293Z" style="stroke-width: 3;"></path></g></g></g></g></svg><mjx-assistive-mml unselectable="on" display="inline" style="top: 0px; left: 0px; clip: rect(1px, 1px, 1px, 1px); -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; position: absolute; padding: 1px 0px 0px 0px; border: 0px; display: block; width: auto; overflow: hidden;"><math xmlns="http://www.w3.org/1998/Math/MathML"><msub><mi>c</mi><mn>6</mn></msub><msup><mi>q</mi><mn>4</mn></msup></math></mjx-assistive-mml></mjx-container> term. Instantaneous.</td>
      </tr>
      <tr>
         <th>q<sub><small>1</small></sub></th>
         <td>About 7% increase on <mjx-container class="MathJax" jax="SVG" style="direction: ltr; position: relative;"><svg style="overflow: visible; min-height: 1px; min-width: 1px; vertical-align: -0.439ex;" xmlns="http://www.w3.org/2000/svg" width="1.041ex" height="2.174ex" role="img" focusable="false" viewBox="0 -767 460 961" aria-hidden="true"><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="TeXAtom" data-mjx-texclass="ORD"><g data-mml-node="mover"><g data-mml-node="mi"><path data-c="1D45E" d="M33 157Q33 258 109 349T280 441Q340 441 372 389Q373 390 377 395T388 406T404 418Q438 442 450 442Q454 442 457 439T460 434Q460 425 391 149Q320 -135 320 -139Q320 -147 365 -148H390Q396 -156 396 -157T393 -175Q389 -188 383 -194H370Q339 -192 262 -192Q234 -192 211 -192T174 -192T157 -193Q143 -193 143 -185Q143 -182 145 -170Q149 -154 152 -151T172 -148Q220 -148 230 -141Q238 -136 258 -53T279 32Q279 33 272 29Q224 -10 172 -10Q117 -10 75 30T33 157ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z" style="stroke-width: 3;"></path></g><g data-mml-node="mo" transform="translate(316.8,-2) translate(-250 0)"><path data-c="2D9" d="M190 609Q190 637 208 653T252 669Q275 667 292 652T309 609Q309 579 292 564T250 549Q225 549 208 564T190 609Z" style="stroke-width: 3;"></path></g></g></g></g></g></svg><mjx-assistive-mml unselectable="on" display="inline" style="top: 0px; left: 0px; clip: rect(1px, 1px, 1px, 1px); -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; position: absolute; padding: 1px 0px 0px 0px; border: 0px; display: block; width: auto; overflow: hidden;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mrow data-mjx-texclass="ORD"><mover><mi>q</mi><mo>˙</mo></mover></mrow></math></mjx-assistive-mml></mjx-container>. Note that because of the square root relationship between time and<mjx-container class="MathJax CtxtMenu_Attached_0" jax="CHTML" tabindex="0" ctxtmenu_counter="56" style="font-size: 119.9%; position: relative;"><mjx-math class="MJX-TEX" aria-hidden="true"><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D45E TEX-I"></mjx-c></mjx-mi></mjx-math><mjx-assistive-mml unselectable="on" display="inline"><math xmlns="http://www.w3.org/1998/Math/MathML"><mi>q</mi></math></mjx-assistive-mml></mjx-container>mentioned earlier, this translates to about 3.5% increase in long term q. No instantaneous effect on <mjx-container class="MathJax" jax="SVG" style="direction: ltr; position: relative;"><svg style="overflow: visible; min-height: 1px; min-width: 1px; vertical-align: -0.489ex;" xmlns="http://www.w3.org/2000/svg" width="1.17ex" height="2.224ex" role="img" focusable="false" viewBox="0 -767 517 983" aria-hidden="true"><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="TeXAtom" data-mjx-texclass="ORD"><g data-mml-node="mover"><g data-mml-node="mi"><path data-c="1D70C" d="M58 -216Q25 -216 23 -186Q23 -176 73 26T127 234Q143 289 182 341Q252 427 341 441Q343 441 349 441T359 442Q432 442 471 394T510 276Q510 219 486 165T425 74T345 13T266 -10H255H248Q197 -10 165 35L160 41L133 -71Q108 -168 104 -181T92 -202Q76 -216 58 -216ZM424 322Q424 359 407 382T357 405Q322 405 287 376T231 300Q217 269 193 170L176 102Q193 26 260 26Q298 26 334 62Q367 92 389 158T418 266T424 322Z" style="stroke-width: 3;"></path></g><g data-mml-node="mo" transform="translate(341.8,-2) translate(-250 0)"><path data-c="2D9" d="M190 609Q190 637 208 653T252 669Q275 667 292 652T309 609Q309 579 292 564T250 549Q225 549 208 564T190 609Z" style="stroke-width: 3;"></path></g></g></g></g></g></svg><mjx-assistive-mml unselectable="on" display="inline" style="top: 0px; left: 0px; clip: rect(1px, 1px, 1px, 1px); -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; position: absolute; padding: 1px 0px 0px 0px; border: 0px; display: block; width: auto; overflow: hidden;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mrow data-mjx-texclass="ORD"><mover><mi>ρ</mi><mo>˙</mo></mover></mrow></math></mjx-assistive-mml></mjx-container>.</td>
      </tr>
      <tr>
         <th>q<sub><small>2</small></sub></th>
         <td>Doubles the instantaneous value of <mjx-container class="MathJax" jax="SVG" style="direction: ltr; position: relative;"><svg style="overflow: visible; min-height: 1px; min-width: 1px; vertical-align: -0.439ex;" xmlns="http://www.w3.org/2000/svg" width="1.041ex" height="2.174ex" role="img" focusable="false" viewBox="0 -767 460 961" aria-hidden="true"><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="TeXAtom" data-mjx-texclass="ORD"><g data-mml-node="mover"><g data-mml-node="mi"><path data-c="1D45E" d="M33 157Q33 258 109 349T280 441Q340 441 372 389Q373 390 377 395T388 406T404 418Q438 442 450 442Q454 442 457 439T460 434Q460 425 391 149Q320 -135 320 -139Q320 -147 365 -148H390Q396 -156 396 -157T393 -175Q389 -188 383 -194H370Q339 -192 262 -192Q234 -192 211 -192T174 -192T157 -193Q143 -193 143 -185Q143 -182 145 -170Q149 -154 152 -151T172 -148Q220 -148 230 -141Q238 -136 258 -53T279 32Q279 33 272 29Q224 -10 172 -10Q117 -10 75 30T33 157ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z" style="stroke-width: 3;"></path></g><g data-mml-node="mo" transform="translate(316.8,-2) translate(-250 0)"><path data-c="2D9" d="M190 609Q190 637 208 653T252 669Q275 667 292 652T309 609Q309 579 292 564T250 549Q225 549 208 564T190 609Z" style="stroke-width: 3;"></path></g></g></g></g></g></svg><mjx-assistive-mml unselectable="on" display="inline" style="top: 0px; left: 0px; clip: rect(1px, 1px, 1px, 1px); -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; position: absolute; padding: 1px 0px 0px 0px; border: 0px; display: block; width: auto; overflow: hidden;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mrow data-mjx-texclass="ORD"><mover><mi>q</mi><mo>˙</mo></mover></mrow></math></mjx-assistive-mml></mjx-container>. Note that because of the square root relationship between time and<mjx-container class="MathJax CtxtMenu_Attached_0" jax="CHTML" tabindex="0" ctxtmenu_counter="56" style="font-size: 119.9%; position: relative;"><mjx-math class="MJX-TEX" aria-hidden="true"><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D45E TEX-I"></mjx-c></mjx-mi></mjx-math><mjx-assistive-mml unselectable="on" display="inline"><math xmlns="http://www.w3.org/1998/Math/MathML"><mi>q</mi></math></mjx-assistive-mml></mjx-container>mentioned earlier, this translates to about 41% increase in long term q. No instantaneous effect on <mjx-container class="MathJax" jax="SVG" style="direction: ltr; position: relative;"><svg style="overflow: visible; min-height: 1px; min-width: 1px; vertical-align: -0.489ex;" xmlns="http://www.w3.org/2000/svg" width="1.17ex" height="2.224ex" role="img" focusable="false" viewBox="0 -767 517 983" aria-hidden="true"><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="TeXAtom" data-mjx-texclass="ORD"><g data-mml-node="mover"><g data-mml-node="mi"><path data-c="1D70C" d="M58 -216Q25 -216 23 -186Q23 -176 73 26T127 234Q143 289 182 341Q252 427 341 441Q343 441 349 441T359 442Q432 442 471 394T510 276Q510 219 486 165T425 74T345 13T266 -10H255H248Q197 -10 165 35L160 41L133 -71Q108 -168 104 -181T92 -202Q76 -216 58 -216ZM424 322Q424 359 407 382T357 405Q322 405 287 376T231 300Q217 269 193 170L176 102Q193 26 260 26Q298 26 334 62Q367 92 389 158T418 266T424 322Z" style="stroke-width: 3;"></path></g><g data-mml-node="mo" transform="translate(341.8,-2) translate(-250 0)"><path data-c="2D9" d="M190 609Q190 637 208 653T252 669Q275 667 292 652T309 609Q309 579 292 564T250 549Q225 549 208 564T190 609Z" style="stroke-width: 3;"></path></g></g></g></g></g></svg><mjx-assistive-mml unselectable="on" display="inline" style="top: 0px; left: 0px; clip: rect(1px, 1px, 1px, 1px); -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; position: absolute; padding: 1px 0px 0px 0px; border: 0px; display: block; width: auto; overflow: hidden;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mrow data-mjx-texclass="ORD"><mover><mi>ρ</mi><mo>˙</mo></mover></mrow></math></mjx-assistive-mml></mjx-container>.</td>
      </tr>
   </tbody>
</table>

<br><br>

#### Theory 4 strategy

The strengths of each variable are as follows:

<br><u>Early game (before 14k ft)</u>

\\(c_6\\) > \\(c_5\\) > \\(c_4\\) > \\(q_2\\) > \\(c_2\\) > \\(q_1\\) > \\(c_3\\) > \\(c_1\\)

<br><u>From 14k ft to mid-late game (about e350+ T4)</u>

\\(c_2\\) > \\(c_3\\) > \\(q_2\\) > \\(c_1\\) > \\(q_1\\) > everything else

<br><u>From e350+ T4 to end game</u>

\\(c_3\\) > \\(q_2\\) > \\(q_1\\) > everything else

<br>

##### Idle

T4 is quite idle friendly compared to T3 and T1. Here are some simple idle strategies for T4:

<br> <u>Start to e25</u>

Autobuy $c_1$, $c_2$. DON'T buy $c_3$, $q_1$, $q_2$! The \\(c_3q\\) term is bad early on. Publish at about 2.5-3 if possible.

<br><u>e25 to e175</u>

Get the 'Add the term' milestones. Prioritise these ones first until maximum. Now we autobuy $c_4$, $q_1$, $q_2$ ONLY. Best publication multiplier is about 6-7.

<br>When we unlock $c_5$ and $c_6$, we can add these to the autobuy variables. DON'T autobuy $c_3$, $c_2$, $c_1$! Prioritise the qdot milestones over the $c_1$ exponents. Try to publish between 12-20. See the idle section of milestone order below.

<br><u>e175 to endgame</u>

Simply autobuy $c_3$, $q_1$, $q_2$ ONLY. Buy 1 level of $c_1$ to start the theory. Publish at about 4-5.

<br>

##### Semi-Idle

There's no strategic difference between semi-idle and idle for this theory. The main difference is with semi-idle, we would publish more often since we check the game more often. We wouldn't overshoot the optimal multiplier as much.

<br>

##### Active

T4 active is more involved. However it is not as demanding as T3 or T1 active.

<br><u>Start to e75</u>

Autobuy $c_2$. DON'T buy $c_3$, $q_1$, $q_2$! The \\(c_3q\\) term is bad early on. Buy $c_1$ until its cost exceed about 15% of $c_2$ cost. Publish at about 2.5-3 if possible. When we reach e25 rho, we get the $c_1$ exponent milestone (note the difference between this strategy and the idle strategy). With the $c_1$ exponent milestone, the $c_1c_2$ term remains the strongest term IF we can babysit and publish often (at about 2.5-3). The strategy remains the same otherwise. Note that since we're only buying $c_1$ and $c_2$ (NO $c_3$, $c_4$, $c_5$, $c_6$, $q_1$, $q_2$!), all the 'q' related milestones are useless for now.

<br><u>e75 to e175 OR 14k ft</u>

Now here is where we can apply some more advanced strategies. Consider that the $c_1c_2$ term is strong early on, but falls off as the value of $q$ increases. Then we can conclude that we can start with the same strategy as before. But once we reach our previous publication point, we can switch to the following strategy:

<br>

1. Do the same strategy as before until we reach our previous publication point.
2. Take point(s) out of the $c_1$ exponent milestones and unlock all the terms (the first milestone). We should now have access to $c_6$.
3. Autobuy $c_4$, $c_5$, $c_6$, $q_2$.
4. If you want to optimise a bit more, you can buy $q_1$ until its cost exceed about 15% of $q_2$. Otherwise it's ok to also autobuy $q_1$.
5. DO NOT autobuy $c_1$, $c_2$, $c_3$.
6. Publish at about 10-20. Once published, remember to take out the milestone point and put it back into the $c_1$ exponent to repeat step 1.

<br>

If done right, this strategy is significantly faster than the idle strategies above. The logic with this strategy is the $c_4$, $c_5$, $c_6$ terms scale well with 'q'. However we need enough rho to buy a lot of q. So in the beginning we buy only $c_1c_2$ as usual to accumulate enough rho so that we can buy $q_1q_2$ to stack q. Once we have enough q, the $c_4$, $c_5$, $c_6$ terms will outscale. Note that after ee14k ft, we will unlock certain upgrades that make $c_1c_2$ better again.

<br><u>e175 OR 14k ft to ~e300 T4</u>

We will do the exact same strategy as in the #start to e75 section above. This is because $c_1c_2$ become really strong again and the $c_4c_5c_6$ terms take too long to outscale. Note that we still don't buy $c_3$.

<br><u>~e300 to endgame</u>

At this point the $c_3$ term starts to become dominant. Therefore we will prioritise buying $c_3$, $q_1$, $q_2$. We will NOT buy anything else except 1 level of $c_1$ to start the theory. If you wish, you can buy $q_1$ at about 15% ratio to $q_2$ cost. It is also ok to autobuy $q_1$. The $c_3$ term will remain dominant until endgame.

<br>

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
         <td>e240-e300 τ</td>
      </tr>
      <tr>
         <td class="leftHeader">T1</td>
         <td>e205-e215 τ</td>
      </tr>
      <tr>
         <td class="leftHeader">T3</td>
         <td>e150 τ</td>
      </tr>
      <tr>
         <td class="leftHeader">T4</td>
         <td>e150 τ</td>
      </tr>
   </tbody>
</table>
