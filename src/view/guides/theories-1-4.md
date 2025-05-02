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

Publications are equivalent to prestiges for $f(t)$ so don't be afraid to
use them. However, the best publication multipliers vary from theory to theory and will
change over time. If you are close to a multiplier you want, turn off autobuyer
and let $\rho$ increase without buying upgrades for a faster short-term increase
before the publication (turn on after you publish). This is known and referenced as "cruising".
Total $τ$, found in the equation or at the top of the screen, is a multiplicative
combination of all $τ$ from each theory.

__Don’t be afraid to skip getting all milestones to work on the next or a
better theory.__

### Graduation routing

Remember to follow our routing advice from [Introduction to Graduation](/guides/intro-to-grad/#graduation-routing).

Class: graduation_routing;
last_row: false;

|      |       |      |       |      |       |       |       |       |
| ---- | ----- | ---- | ----- | ---- | ----- | ----- | ----- | ----- |
| 5k   | ARROW | 5.2k  | ARROW | 5.6k | ARROW | 5.8k  | ARROW | 6k    |
| 6k   | ARROW | 7k   | ARROW | 8k   | INVIS | INVIS | INVIS | INVIS |
| 8k   | ARROW | 8.4k | ARROW | 8.6k | ARROW | 8.8k  | ARROW | 9k    |

### Theory 1 (20σ / 5k)

#### T1 Overview

In mathematics, a recurrence relation is an equation that relies on an
initial term and a previous term to change.
We start with the current tick’s term, $ρ_{n}$, and a constant add-on to
obtain the value of the next tick, $ρ_{n+1}$. This gives us an equation
equivalent to $ρ=at+constant$, with a changing value $a$ and a constant
that is the initial value of 1. Later when we add the $c_{3}ρ_{n-1}^{0.2}$ term,
this is now saying that we are now adding each tick the value of $ρ$ from
the previous tick ago with a constant $c_{3}$ put to the power of $0.2$. This
is the same with the next term $c_{4}ρ_{n-2}^{0.3}$, with the value of $ρ$ two ticks
ago and a multiplier $c_4$ put to the power $0.3$. When we multiply the
$c_1c_2$ term by the term $1+ln(ρ)/100$ changing the constant addition to
being based on the value of $ρ$ from the previous tick with the value of
$1+ln(ρ)/100$. The final milestone upgrade raises the exponent of $c_1$ from
$1.00$ to $1.05$ to $1.10$ to $1.15$.

This theory also has its adjusted tickspeed calculated by $q_{1}*q_{2}$. This
lengthens the normal tick length of $0.1/sec$ to that value which speeds
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
but here is known: 4-6 to start; 3-4 between $1e100$ and $1e150$; the
publication multiplier oscillates between 2.5 and 5 past $e150$. Once you
get your first milestone, you can turn off $c_1$ and $c_2$ until $e150$ active strat.

The active strat follows but only works when you have all milestones
past $e150$. T1 is the only theory where the recent value of $ρ$
influences the rate of change of $ρ$ therefore buying a variable as
soon as you can afford it will slow your progress. Lategame, buying
upgrades immediately will slow you more than the benefit of the upgrade
because $c_3$ and $c_4$ dominate. If the next level costs $10ρ$
and you have $11ρ$, buying that level will reduce $ρ_{n+1}$ to $1$. This reduces your $ρ_{n+1}$ by roughly a factor of $10$.
There are $3$ terms that influence the rate of change of $ρ$, and all are affected by the previous state of $ρ$. The active strategy around this is known as T1<span style="color:#41AD21">Ratio</span>. The values in the chart found [here](/guides/theory-strategies/#t1ratio) are to be
only used when you are past $e150 τ$ and max milestones. They represent how to purchase each variable based on the state of the theory at the time of purchase.

Note: If you are not doing the active strat, then simply turn off $c_1$ and $c_2$ after milestone 1 ($e25\tau$) and autobuy rest until ee6k.

__The video below is only good for early $\tau_{1}$ between $1e150$ and $1e250$.__

{{ yt.embed('lFSAFIpWkb0') }}

#### T1 milestone route

Class: milestone_routing;
last_row: false;

|         |       |         |       |         |
| ------- | ----- | ------- | ----- | ------- |
| 0/0/1   | ARROW | 0/0/1/1 | ARROW | 0/1/1/1 |
| 0/1/1/1 | ARROW | 3/1/1/1 | INVIS | INVIS   |

Class: milestone_routing;
last_row: false;

|    |       |       |       |       |
| -- | ----- | ----- | ----- | ----- |
| OR | INVIS | INVIS | INVIS | INVIS |
| 3  | ARROW | 4     | ARROW | 2     |
| 2  | ARROW | 1x3   | INVIS | INVIS |

### Theory 2 (25σ / 6k)

#### T2 Overview

This second theory is focusing on derivatives. Derivatives in
mathematics are the rate of change of the function they are the
derivative of. For the case of $q_1$  and $q_2$, $q_2$ is
the derivative of $q_1$. This follows the power rule for derivatives:

$$q=a*t^n ↔ q’=n*a*t^{n-1}$$

In simpler terms, it works similar to how
$x_i$ upgrades work for $f(t)$ equation with continuous addition
of the previous $term\*dt$ to the next $x_{i+1}$ term, but with
continuous addition of $q_i\*dt$ to the term above $q_{i-1}$.
These two values of $r_1$ and $q_1$ are multiplied to produce the derivative
of $ρ(t)$, shown by Newton's derivative notation $\dot{ρ}$. This would give the
equation of $ρ$ to be $ρ(t+dt)=ρ+\dot{ρ}*dt$. The other milestones besides more $q$
and $r$ derivatives increase the exponent of $q$ and $r$ respectively. The
reason why $q$ and $r$ derivatives are more powerful long-term than the
exponents is that they take time to build up and eventually overtake and
keep increasing $q_1$ and $r_1$ while the exponents have a never-changing
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

The optimal multiplier is pretty high and is not known before $e30$. The theory sim will recommend publication multipliers below these values, but the sim's T2<span style="color:#41AD21">MS</span> does not currently have coasting.
The multipliers for active play (which do use coasting) we know at the moment are:<br />
- $e25$-$e100$ is $1k$ to $10k$ <br />
- $e100$-$e175$ is $10k$-$100k$

__For both strategies the milestones are listed in the order X>Y, where X and Y are the milestones as numerically ordered top to bottom in-game, are to be maxed in order from left to right.__

##### Idle

For the idle strategy, you want to prioritize buying milestone levels of 1>2. If you have more than 4 milestones, you will prioritize
milestone 1>2>3>4. You will want to publish at
about 10-100 multiplier before $e75$ and about a $1000$ multiplier after $e75$, but larger multipliers are fine.
If possible, swap to milestones 3>4>1>2 at the end before publishing for an additional boost.

##### Active

The goal of the active strategy is to grow $q_1$ and $r_1$ as
much as possible while being able to take advantage of the exponent
milestones too, yielding a large boost from that growth. The active for T2 is on a 50-second cycle between two milestone sets: 10 seconds for
exponent priority (Milestones 3 and 4) and 40 seconds for derivative priority (Milestones 1 and 2) . You will start a publication with exponent priority as the cost of the variables gained from milestones 1 and 2 are
too large for you to get right away. When you can afford them, you will
start the cycle. The full cycle is listed below:

**1-3 Milestones**
<blockquote style="font-family:monospace;">3>4 (10s) → 1 (40s) → 3>4 (10s) → 2 (40s) → <br>repeat → coast and publish</blockquote>

**4+ Milestones**
<blockquote style="font-family:monospace;">3>4>1>2 (10s) → 1>2>3>4 (40s) → <br>3>4>1>2 (10s) → 2>1>3>4 (40s) → <br>repeat →  coast and publish</blockquote>

Past $e175$, the active strat will become exponentially less
effective. At $e250$, you would start to idle T2 overnight only.
Until you have over $1e350\tau$ from theory 2, this is the best theory
to run idle overnight.

When you get to Theory 3 at ee7k, move on to pushing Theory 3 when active and running T2 overnight. The above is simply an option if you rather not work on T3 now.

{{ yt.embed('XcatIVPd8Jg') }}

#### T2 milestone route

Class: milestone_routing;
last_row: false;

|         |       |         |       |         |
| ------- | ----- | ------- | ----- | ------- |
| 2/0/0/0 | ARROW | 2/2/0/0 | ARROW | 2/2/3/0 |
| 2/2/3/0 | ARROW | 2/2/3/3 | INVIS | INVIS   |

Class: milestone_routing;
last_row: false;

|      |       |       |       |       |
| ---- | ----- | ----- | ----- | ----- |
| OR   | INVIS | INVIS | INVIS | INVIS |
| 1 x2 | ARROW | 2 x2  | ARROW | 3 x3  |
| 3 x3 | ARROW | 4 x3  | INVIS | INVIS |

### Theory 3 (30σ / 7k)

#### T3 Overview

The basis of this theory and understanding how it works is based on
matrix multiplication. The following color-coding helps displays
how matrix multiplication works:

$$\begin{bmatrix}
   \dot{\rho_1}\\
   \dot{\rho_2}
\end{bmatrix} =
\begin{bmatrix}
   \colorbox{yellow}{\color{black}{$c_{11}$  $c_{12}$}}\\
   \colorbox{cyan}{\color{black}{$c_{11}$  $c_{12}$}}
\end{bmatrix}
\begin{bmatrix}
   \colorbox{orange}{$\begin{align}
      \color{black}{b_1}\nonumber\\
      \color{black}{b_2}\nonumber
   \end{align}$}
\end{bmatrix} =
\begin{bmatrix}
   \left(
      \colorbox{yellow}{\color{black}{$c_{11}$}}\colorbox{orange}{\color{black}{$b_1$}}
      +\colorbox{yellow}{\color{black}{$c_{12}$}}\colorbox{orange}{\color{black}{$b_2$}}
   \right)\\
   \left(
      \colorbox{cyan}{\color{black}{$c_{21}$}}\colorbox{orange}{\color{black}{$b_1$}}
      +\colorbox{cyan}{\color{black}{$c_{22}$}}\colorbox{orange}{\color{black}{$b_2$}}
   \right)
\end{bmatrix}$$

$$\begin{bmatrix}
   \dot{\rho_1}\\
   \dot{\rho_2}\\
   \dot{\rho_3}
\end{bmatrix} =
\begin{bmatrix}
   \colorbox{yellow}{\color{black}{$c_{11}$  $c_{12}$  $c_{13}$}}\\
   \colorbox{cyan}{\color{black}{$c_{21}$  $c_{22}$  $c_{23}$}}\\
   \colorbox{pink}{\color{black}{$c_{31}$  $c_{32}$  $c_{33}$}}
\end{bmatrix}
\begin{bmatrix}
   \colorbox{orange}{$\begin{align}
      \color{black}{b_1}\nonumber\\
      \color{black}{b_2}\nonumber\\
      \color{black}{b_3}\nonumber
   \end{align}$}
\end{bmatrix} =
\begin{bmatrix}
   \left(
         \colorbox{yellow}{\color{black}{$c_{11}$}}\colorbox{orange}{\color{black}{$b_1$}}
         +\colorbox{yellow}{\color{black}{$c_{12}$}}\colorbox{orange}{\color{black}{$b_2$}}
         +\colorbox{yellow}{\color{black}{$c_{13}$}}\colorbox{orange}{\color{black}{$b_3$}}
   \right)\\
   \left(
         \colorbox{cyan}{\color{black}{$c_{21}$}}\colorbox{orange}{\color{black}{$b_1$}}
         +\colorbox{cyan}{\color{black}{$c_{22}$}}\colorbox{orange}{\color{black}{$b_2$}}
         +\colorbox{cyan}{\color{black}{$c_{23}$}}\colorbox{orange}{\color{black}{$b_3$}}
   \right)\\
   \left(
         \colorbox{pink}{\color{black}{$c_{31}$}}\colorbox{orange}{\color{black}{$b_1$}}
         +\colorbox{pink}{\color{black}{$c_{32}$}}\colorbox{orange}{\color{black}{$b_2$}}
         +\colorbox{pink}{\color{black}{$c_{33}$}}\colorbox{orange}{\color{black}{$b_3$}}
   \right)
\end{bmatrix}$$

###### [Original Image (April 2021 - May 2025)](/images/matrix-multiplication.png)

This gives the basis for why certain upgrades are more powerful than
others. The exponents on $b_1$, $b_2$, and $b_3$
all directly affect $ρ_1$ production which is used for $\tau$. An extra
dimension roughly gives $50%$ more $\tau$ production as it adds an extra term
to the $ρ_1$ production.

#### T3 strategy

The optimal publication multiplier is about 2-3 without cruising and 3-4
with cruising. If you decide to play actively, there is a form of
exponent swapping strat to be aware of. This is a difficult
strategy because it requires you to notice when a certain threshold
happens. It happens when the following occurs:

\\[c_{11}*b_{1}^{1.05\text{ or }1.1}<c_{12}*b_{2}^{1.05\text{ or }1.1}\\]

When this happens swap your exponents from $b_1$ to $b_2$ and you will get a
little upgrade boost. It also allows for a slight push of $ρ_2$ for
upgrades to $b_2$ and $c_{12}$, but this is a lot less impactful and less
noticeable. This strategy also works with $b_3$ and $c_{13}$ but is usually
not as common.

If you decide to buy manually, the focus areas are buying $b_1$, $b_2$, and $b_3$ when their cost is
e1 lower than $c_{11}$, $c_{12}$, and $c_{13}$ respectively. These all directly boost the production
of $ρ_1$ which is used for $\tau$. After this, if you are doing the active exponent
swapping strategy described in the previous paragraph, your next focus will be on $c_{21}$,
$c_{22}$, and $c_{23}$ as these boost $b_2$ production which increases the likelihood
for the exponent swap to occur. This leaves the $c_{31}$, $c_{32}$, and $c_{33}$
upgrades at the lowest priority. If you are not using the exponent
swapping strategy from the previous paragraph, then all the remaining
upgrades should be bought at equivalent priority.

At the end of any publication, around a 2-3 multiplier, you should turn
off $b_1$ and $c_{31}$ as they cost $ρ_1$. You will cruise until you get to a
3-4 multiplier. Publish and turn back on $ρ_1$ costing variables and
repeat.

###### Commentary

{{ yt.embed('kqnBfdOI34c') }}

#### T3 milestone route

Class: milestone_routing;
last_row: false;

|         |       |         |       |         |
| ------- | ----- | ------- | ----- | ------- |
| 0/2/0   | ARROW | 0/2/2   | ARROW | 1/2/2   |
| 1/2/2/0 | ARROW | 1/2/2/2 | INVIS | INVIS   |

Class: milestone_routing;
last_row: false;

|      |       |       |       |       |
| ---- | ----- | ----- | ----- | ----- |
| OR   | INVIS | INVIS | INVIS | INVIS |
| 2 x2 | ARROW | 3 x2  | ARROW | 1     |
| 1    | ARROW | 4 x2  | INVIS | INVIS |

### Theory 4 (35σ / 8k)

#### Theory 4 Overview

Theory 4 is based on Polynomials, which contain terms of the form $x^a+x^b+x^c$ etc. In this case, instead of 'x' it's 'q'. The strategies for this theory are quite simple compared to the previous theory, especially late game strategies.

#### Theory 4 Equation Description

$\dot{\rho} = c_1^{1.15}c_2 + c_3q + c_4q^2 + c_5q^3 + c_6q^4$

$\dot{q} = 8q_1q_2 / (1 + q)$

The first line states that the rate of change of $\rho$ is the sum of a bunch of polynomial terms. We have a bunch of 'c' variables multiplied by 'q'. We can increase $q$ by buying $q_1$ and $q_2$ upgrades. Note that this is with all milestones. You'll not have all of these at the beginning.

The second line is more unique. It says that $\dot{q}$ is proportional to the inverse of $q$ itself! This means that the more $q$ we have, the slower $q$ grows, as $\dot{q}$ decreases. This means that $q_1$ and $q_2$ are not as strong as they first appear. However, we still want to buy them in general unless stated otherwise as slow growth is better than no growth.

For the more mathematically observant reader, we may integrate the $\dot{q}$ equation and conclude that $q$ is proportional to the square root of time. This means that even though $\dot{q}$ grows slower with increasing $q$, there is theoretically no finite limit on the maximum value of $q$.

#### Theory  Variable Description

Approximate variable strengths on $\dot\rho$ with all milestones are as follows:

Class: breakdown;

| INVIS | Brief Description |
| ----- | ----------------- |
| [type="th";]$c_1$ | ~7% increase on the $c_1^{1.15}c_2$ term. Instantaneous. |
| [type="th";]$c_2$ | Doubles the $c_1^{1.15}c_2$ term. Instantaneous. Note that this doesn't mean double $\dot{\rho}$ |
| [type="th";]$c_3$ | Doubles the $c_3q$ term. Instantaneous. |
| [type="th";]$c_4$ | Doubles the $c_4q$ term. Instantaneous. |
| [type="th";]$c_5$ | Doubles the $c_5q$ term. Instantaneous. |
| [type="th";]$c_6$ | Doubles the $c_6q$ term. Instantaneous. |
| [type="th";]$q_1$ | ~7% increase on $\dot{q}$. Note that because of the square root relationship between time and $q$ mentioned earlier, this translates to \~3.5% increase in long term $q$. No instantaneous effect on $\dot{\rho}$. |
| [type="th";]$q_2$ | Doubles the instantaneous value of $\dot{q}$. Note that because of the square root relationship between time and $q$ mentioned earlier, this translates to ~41% increase in long term $q$. No instantaneous effect on $\dot{\rho}$. |

#### Theory 4 strategy

The strengths of each variable are as follows:

<u>Early game (before 14k <i>f(t)</i>):</u>

&ensp;&ensp;$c_6$ > $c_5$ > $c_4$ > $q_2$ > $c_2$ > $q_1$ > $c_3$ > $c_1$

<u>From 14k <i>f(t)</i> to mid-late game (about <i>e350</i>+ T4):</u>

&ensp;&ensp;$c_2$ > $c_3$ > $q_2$ > $c_1$ > $q_1$ > everything else

<u>From <i>e350</i>+ T4 to end game:</u>

&ensp;&ensp;$c_3$ > $q_2$ > $q_1$ > everything else

##### Idle

T4 is quite idle friendly compared to T3 and T1. Here are some simple idle strategies for T4:

<u>Start to <i>e25</i>:</u>

Autobuy $c_1$, $c_2$. DON'T buy $c_3$, $q_1$, $q_2$! The $c_3q$ term is bad early on. Publish at ~2.5-3 if possible.

<u><i>e25</i> to <i>e175</i>:</u>

Get the 'Add the term' milestones. Prioritize these ones first until maximum. Now autobuy $c_4$, $q_1$, $q_2$ ONLY. Best publication multiplier is ~6-7.

When $c_5$ and $c_6$ are unlocked, add $c_5$ and $c_6$ to the autobuy variables. DON'T autobuy $c_3$, $c_2$, $c_1$! Prioritize the $\dot{q}$ milestones over the $c_1$ exponents. Try to publish between 12-20.

<u><i>e175</i> to endgame:</u>

Simply autobuy $c_3$, $q_1$, $q_2$ ONLY. Buy 1 level of $c_1$ to start the theory. Publish at ~4-5.

##### Semi-Idle

There's no strategic difference between semi-idle and idle for this theory. The main difference is with semi-idle, we would publish more often since we check the game more often. We wouldn't overshoot the optimal multiplier as much.

##### Active

T4 active is more involved. However it is not as demanding as T3 or T1 active.

<u>Start to <i>e75</i>:</u>

Autobuy $c_2$. DON'T buy $c_3$, $q_1$, $q_2$! The $c_3q$ term is bad early on. Buy $c_1$ until its cost exceeds about 15% of $c_2$ cost. Publish at about 2.5-3 if possible. When we reach $e25$ $\rho$, we get the $c_1$ exponent milestone (note the difference between this strategy and the idle strategy). With the $c_1$ exponent milestone, the $c_1c_2$ term remains the strongest term IF we can babysit and publish often (at about 2.5-3). The strategy remains the same otherwise. Note that since we're only buying $c_1$ and $c_2$ (NO $c_3$, $c_4$, $c_5$, $c_6$, $q_1$, $q_2$!), all the 'q' related milestones are useless for now.

<u><i>e75</i> to <i>e175</i> OR 14k <i>f(t)</i>:</u>

Now here is where we can apply some more advanced strategies. Consider that the $c_1c_2$ term is strong early on, but falls off as the value of $q$ increases. Then we can conclude that we can start with the same strategy as before. But once we reach our previous publication point, we can switch to the following strategy:

1. Do the same strategy as before until we reach our previous publication point.
2. Take point(s) out of the $c_1$ exponent milestones and unlock all the terms (the first milestone). We should now have access to $c_6$.
3. Autobuy $c_4$, $c_5$, $c_6$, $q_2$.
4. If you want to optimize a bit more, you can buy $q_1$ until its cost exceeds about 15% of $q_2$. Otherwise it's ok to also autobuy $q_1$.
5. DO NOT autobuy $c_1$, $c_2$, $c_3$.
6. Publish at ~10-20. Once published, remember to take out the milestone point and put it back into the $c_1$ exponent to repeat step 1.

If done right, this strategy is significantly faster than the idle strategies above. The logic with this strategy is that the $c_4$, $c_5$, $c_6$ terms scale well with 'q'. However we need enough $\rho$ to buy a lot of q. So in the beginning we buy only $c_1c_2$ as usual to accumulate enough $\rho$ so that we can buy $q_1q_2$ to stack q. Once we have enough q, the $c_4$, $c_5$, $c_6$ terms will outscale. Note that after e14k $f(t)$, we will unlock certain upgrades that make $c_1c_2$ better again.

<u><i>e175</i> OR 14k <i>f(t)</i> to ~<i>e300</i> T4</u>

We will do the exact same strategy as in the #start to $e75$ section above. This is because $c_1c_2$ become really strong again and the $c_4c_5c_6$ terms take too long to outscale. Note that we still don't buy $c_3$.

<u>~<i>e300</i> to endgame</u>

At this point the $c_3$ term starts to become dominant. Therefore we will prioritize buying $c_3$, $q_1$, $q_2$. We will NOT buy anything else except 1 level of $c_1$ to start the theory. If you wish, you can buy $q_1$ at about 15% ratio to $q_2$ cost. It is also ok to autobuy $q_1$. The $c_3$ term will remain dominant until endgame.

#### T4 milestone route

Class: milestone_routing;
last_row: false;

|       |       |       |       |       |
| ----- | ----- | ----- | ----- | ----- |
| 3/0/0 | ARROW | 3/0/3 | ARROW | 3/1/3 |

Class: milestone_routing;
last_row: false;

|      |       |       |       |       |
| ---- | ----- | ----- | ----- | ----- |
| OR   | INVIS | INVIS | INVIS | INVIS |
| 1 x3 | ARROW | 3 x3  | ARROW | 2     |

### Theory tier list (Pre-9k+)

Before you reach 9k, these are the recommended values for each theory.
You may not hit the values and have a different distribution, but work on getting these theories up to these values later. This list is in order of priority.

Class: breakdown;
last_row: false;

| INVIS | Approximate $\tau$ |
| ----- | ------------------ |
| [style="border-right:$table-border-thin;";]T2    | $e240-e300\ \tau$  |
| [style="border-right:$table-border-thin;";]T1    | $e205-e215\ \tau$  |
| [style="border-right:$table-border-thin;";]T3    | $e150\ \tau$       |
| [style="border-right:$table-border-thin;";]T4    | $e150\ \tau$       |
