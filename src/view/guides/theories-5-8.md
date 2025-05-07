---
title: "Theories 5-8"
description: "Our guide for routing through and understanding theories 5 to 8. We provide some strategies to help you make progress."
author: "LE★Baldy, Snaeky, & Xelaroc"
contributors: "the Amazing Community"
draft: true
order: 5
---

{% import "embed-yt.njk" as yt %}

### Graduation routing

Remember to follow our routing advice from the [introduction to graduation](/guides/intro-to-grad/#graduation-routing).

Class: graduation_routing;
last_row: false;

|      |       |       |       |       |       |       |
| ---- | ----- | ----- | ----- | ----- | ----- | ----- |
| 9k   | ARROW | 9.4k  | ARROW | 9.8k  | ARROW | 10k   |
| 10k  | ARROW | 10.4k | ARROW | 8k    | ARROW | 11k   |
| 11k  | ARROW | 12.4k | ARROW | 8.6k  | ARROW | 14k   |
| | | | | | | [style="text-align: center;";][Skip T8](#theory-8-skipping) |
| 14k  | ARROW | 14.8k | ARROW | 15.6k | ARROW | 16k   |
| 16k  | ARROW | 16.8k | ARROW | 18k   | INVIS | INVIS |
| 18k  | ARROW | 20k   | INVIS | INVIS | INVIS | INVIS |

### Theory 1

You will not touch this theory until after ee14k. Once you begin pushing T1 after ee14k, begin using the [Theory Sim](https://exponential-developers.github.io/sim-3.0/) and the [Theory Sim Guide](/guides/theory-sim) to give the best strategy and multiplier for the next publication.

### Theory 2

This theory will be used as overnight until 1e350 $\tau$ where it will not be touched until after ee14k. See our earlier guide for an overview for [theory 2](/guides/theories-1-4/#theory-2-25s-6k).

### Theory 3

See our earlier guide for an overview for [theory 3](/guides/theories-1-4/#theory-3-30s-7k).

### Theory 4

See our earlier guide for an overview for [theory 4](/guides/theories-1-4/#theory-4-35s-8k).

### Theory 5 (40σ / 9k)

#### Theory 5 Overview

The optimal publish multiplier for T5 is between 2-3 and 6-10, please check with [The Sim](https://exponential-developers.github.io/sim-3.0/) for accuracy. Theory 5 is based on logistic function. This theory is slow early, but becomes very powerful later on in the game. It is recommended to keep pushing this theory as high as possible before reaching ee14k ft. Make sure to carefully read the behavior of c1 and c2 variables in this theory, as the behaviors are quite unique.

#### Theory 5 Equation Description

$\dot{\rho} = q_1^{1.15}q_2q$

$\dot{q} = (c_1/c_2)q(c_3^{1.1} - q/c_2)$

The first line states that the rate of change of $\rho$ is the product of some $q_1, q_2, q$. Note that $q_1$ and $q_2$ are variables that you can buy directly, while $q$ is a separate variable that is based off something else.

The second line defines this theory. It describes the behavior of a typical logistic function. A logistic function typically has slow growth at the beginning, then fast growth in the middle, then it flattens out at the end. Here we have $c_1$, which speeds up the rate at which we reach the maximum value of $q$. Note it DOES NOT increase the actual maximum value of $q$ itself. We also have $c_2$. This increases the maximum value of $q$. However, it HALVES the speed at which this maximum value is reached. Therefore we must be careful to not buy too many at once.

$c_3$ is similar to $c_2$ in which buying it increases the maximum value of $q$. However it does not have the drawback that $c_2$ has. So we can buy this unconditionally.

The maximum value of $q$ is $c_2c_3^{1.1}$. Once $q$ reaches this maximum value, $q$ dot will be zero and $q$ will not grow anymore until we buy either more $c_2, c_3$.

Approximate variable strengths on $\dot\rho$ with all milestones are as follows:

Class: breakdown;
Caption: Brief summary of variable strengths of Theory 5.;
last_row: false;

| INVIS | Brief Description |
| ----- | ----------------- |
| [type="th";]$q_1$ | ~7% increase on $\dot{\rho}$ on average (instantaneous). |
| [type="th";]$q_2$ | Doubles $\dot{\rho}$ (instantaneous). |
| [type="th";]$c_1$ | $c_1$ reduces time to maximum value of $q$. Note that it DOES NOT increase the maximum value of $q$ itself. If $q$ is close to maximum value already, there is no point in buying $c_1$. |
| [type="th";]$c_2$ | Doubles the maximum value of $q$, however, it also HALVES $\dot{q}$. Be careful to not buy too much $c_2$ as this can cause $\dot{q}$ to be too low. Do not ignore $c_2$ as, otherwise, the maximum value of $q$ will never increase. |
| [type="th";]$c_3$ | Doubles the maximum value of $q$. No drawbacks. |

#### Bicycle Analogy (alternative explanation) of c1 and c2 interactions

Think of buying $c_1$ as throttling on the bicycle faster. Buying $c_2$ is similar to shifting the bicycle gear up by 1 gear.<br>

If all one does is buy $c_1$ and never $c_2$, then they are stuck in gear 1 forever and make no progress.
However, if all one does is buy $c_2$ and never $c_1$, then this is similar to trying to ride from highest gear from 0 speed, which takes a long time and a lot of effort.<br>

Therefore using the bicycle analogy, buy $c_2$ only when $\dot{q}$, speed, is enough to support it; not too early and not too late. Furthermore, later in the publication, buy only 1 level of $c_2$ at a time. Buy $c_1$ only right after buying $c_2$ (shifting up gear).<br>

When deciding when to buy $c_1, c_2$, think of $c_1$ as throttling a bicycle, and $c_2$ as shifting up gear by 1 level.

#### Theory 5 strategy

The strengths of each variable are as follows:

$c_3$ ~= $q_2$ ≈ $c_2 $ > $q_1 $ > $c_1 $

Note that $c_1$ and $c_2$ have special interactions.

##### Manual buying c2 - READ THIS BEFORE DOING THE STRATEGIES

For step 2 of the semi-idle and active strategies below, you should be manually buying $c_2$. If you're over $e150$ $\rho$, start with buying 10x variables at a time. Otherwise buy 1 level of $c_2$ at a time.<br>

You want to buy $c_2$ until the value of $q$ increases slowly. The pattern should be:

1. Buy $c_2$. $q$ should increase.
2. Once $q$ increases slowly (or stops increasing), buy more $c_2$.<br>

If you buy a $c_2$ and the value of $q$ is increasing even slower than before, this means you bought too many levels of $c_2$. Wait for $q$ to stabilize and then continue buying $c_2$<br>

Once you've reached within $e5$ of the previous publication point, you can safely autobuy $c_2$ for the rest of the publication. Remember to untick $c_2$ autobuy at the end of the publication when you click <kbd>publish</kbd>!

##### Idle

It is not recommended to idle theory 5 (see explanation on $c_1$ and $c_2$ above). Do try the semi-idle strategy below.<br>

For each publication: autobuy $c_3$ and $q_2$.

1. For the first 10 seconds, autobuy everything except $c_2$.
2. Afterwards, simply autobuy all until publish.

##### Semi-Idle

Semi-idle is similar to idle, but once the theory is recovered, manual buy $c_2$ and disable $c_1$.<br>

For each publication: autobuy $c_3$ and $q_2$.

1. For the first 10 seconds, autobuy everything except $c_2$.
2. Then we want to manually buy $c_2$. See [Manual Buying c2](/guides/theories-5-8/#theory-5-strategy). Do this until it slows down and you're within ~$e5\ \rho$ under last publication mark.
3. Then we autobuy all until $\rho$ has reached its previous publication value (finished recovery).
4. Afterwards, deactivate $c_1$ and autobuy the rest until publish.

##### Active

Here's a simple yet effective active strategy that can be used right until endgame. To find more optimized strategies, please see the [List of theory strategies](/guides/theory-strategies).<br>

For each publication: autobuy $c_3$ and $q_2$. Buy $c_1$ ONLY right after buying $c_2$ from steps 2 onwards. Practically, everytime level of $c_2$ is bought from steps 2 onwards, ~5-6 levels of $c_1$ would be bought.<br>

Note that for faster speed, during the first part of step 2, 10 levels can be bought at a time.

1. For the first 10 seconds, autobuy everything except $c_2$.
2. Then we want to manually buy $c_2$. See [Manual Buying c2](/guides/theories-5-8/#theory-5-strategy).
3. Then we autobuy $c_3,q_2,c_2$. Out of these 3 variables, find the one with the cheapest cost. Then buy $q_1$ until its cost exceeds 15% of the cheapest variable found above. Buy $c_1$ ONLY right after buying a level of $c_2$.
4. Once the theory has recovered to its previous publication mark, slowly put less emphasis on $c_1$. When in doubt, have $c_1$'s cost be similar to $q_1$'s cost. Continue doing step 2 until publish.

#### Theory 5 milestone route

All milestones into the 2nd milestone to unlock $c_3$. Then into 1st milestone because $q_1$ variable is higher value than $c_3$ variable, finally put the rest into the last milestones. This theory does not have a known effective milestone swapping strategy.

Class: milestone_routing;
last_row: false;

|       |       |       |       |       |
| ----- | ----- | ----- | ----- | ----- |
| 0/1/0 | ARROW | 3/1/0 | ARROW | 3/1/2 |

###### Commentary
(By Snaeky)
{{ yt.embed('AYI4U7Aob6o') }}

###### No commentary
(By Snaeky)
{{ yt.embed('pM-pjSnMByw') }}

(By Playspout)
{{ yt.embed('PWjEADc1P7M') }}

T5 will always give its best results from active play. However, after
step 3, you can still get good results while autobuying $q_1$ and
manually purchasing $c_1$ every 10-15min. This makes the theory slightly less active and easier to deal with.

**Warning**: Do not overnight this theory. It has terrible decay after passing a good publication mark and will not give good results. T5i is only viable very late/endgame.

##### Additional information

Purchase $c_2$ when  $1.5q > c_2*c_3^{m_3}$. $m_3$ is
the number of milestone 3.

$q$ begins to slow down upon reaching $2q > c_2*c_3^{m_3}$.

Strategy constructed by: Snaeky, Marks, Baldy, and Nerdy

### Theory 6 (45σ / 10k)

#### T6 Overview

T6 has the lowest decay of all the theories. It will be second place to T5 until ~$e750$ and is the only theory that can
get to $>e1300τ$. You should overnight this and T4 after you get your T2 to $e350+$.

At first, T6 only finds the area under the curve of the graph $f(q)$ from $0$ to $q$, which is essentially a 2d plane.
This is done using a definite integral, an integral that is bound between 2 values giving a single output. This does the
opposite of what a derivative does, but within a specific bound. With later milestones, this will include the variable $r$,
this new equation is finding the volume of the graph within the bounds of planes $f(q)$ and $f(r)$ from $0$ to $q$ and
$0$ to $r$ respectively.

The $-C$ variable outside of the integral is defined as the sum of the instantaneous change in $\rho$ caused by all of the $c_i$
upgrades that you have purchased. It is very closely related to the sum of the costs of upgrades of all $c_i$ upgrades, but is
slightly different. It is negative because purchasing $c_i$ upgrades will increase the value of the integral, thus
$\rho$, by the change in $c_i$ instantly. $-C$ is used to offset this so that $\rho$ does not diverge. For example,
let's say that the integral is equal to $10$ and that you can buy the first upgrade (cost $10$). After buying it, the integral will
be equal to $20$. But, at this point, the currency should be $0$, so $C$ needs to be equal to $20$.

[Video of T6 at Endgame](https://bit.ly/t6endgame)

#### T6 strategy

The optimal multiplier varies between 6-12, but spikes depending on what variable is dominant at the time and how close you are to a milestone.
For an accurate multiplier, check with [the sim](https://exponential-developers.github.io/sim-3.0/).

Class: breakdown;
last_row: false;
Caption: T6 Strategy;

|                     |                                                                                    |
| ------------------- | ---------------------------------------------------------------------------------- |
|                     | [class="category";]Idle                                                            |
| $1\rho-e7\rho$      | [style="text-align:left;";]Buy All.                                                |
| $e7\rho-e25\rho$    | [style="text-align:left;";]Turn off $c_1$ and $c_2$ when you unlock $c_3$.         |
| $e25\rho-e100\rho$  | [style="text-align:left;";]Turn off $c_1$, $c_2$, and $c_3$ when you unlock $c_4$. |
| $e100\rho-e130\rho$ | [style="text-align:left;";]Turn off $c_3$ and $c_4$.                               |
| $e130\rho+$         | [style="text-align:left;";]Turn off $c_3$ and $c_4$.                               |
|                     | [class="category";]Active                                                                                                                                                         |
| $1\rho-e7\rho$      | [style="text-align:left;";]Buy All with $q_1$ bought at $\frac{1}{10}$ of $q_2$ cost.                                                                                             |
| $e7\rho-e25\rho$    | [style="text-align:left;";]Buy $q_1$ when $\frac{1}{10}$ of $q_2$ cost. Stop buying $c_1$ and $c_2$ when you unlock $c_3$.                                                        |
| $e25\rho-e100\rho$  | [style="text-align:left;";]Buy $q_1$ and $r_1$, past $e50$, when $\frac{1}{10}$ of $q_2$ and $r_2$ costs respectively. Stop buying $c_1$, $c_2$, and $c_3$ when you unlock $c_4$. |
| $e100\rho-e130\rho$ | [style="text-align:left;";]Buy $q_1$ and $r_1$, past $e50$, when $\frac{1}{10}$ of $q_2$ and $r_2$ costs respectively. Turn off $c_3$, $c_4$, and $c_5$.                          |
| $e130\rho+$         | [style="text-align:left;";]Buy $q_1$ and $r_1$, past $e50$, when $\frac{1}{10}$ of $q_2$ and $r_2$ costs respectively. Turn off $c_3$ and $c_4$.                                  |

#### T6 milestone route

Class: milestone_routing;
last_row: false;

|         |       |         |       |         |
| ------- | ----- | ------- | ----- | ------- |
| 0/0/0   | ARROW | 0/1/0   | ARROW | 1/1/0/0 |
| 1/1/0/0 | ARROW | 1/1/1/0 | ARROW | 1/0/0/3 |
| 1/0/0/3 | ARROW | 1/0/1/3 | ARROW | 1/1/1/3 |

Class: milestone_routing;
last_row: false;

|    |       |            |       |       |       |       |
| -- | ----- | ---------- | ----- | ----- | ----- | ----- |
| OR | INVIS | INVIS      | INVIS | INVIS | INVIS | INVIS |
| 2  | ARROW | 1          | ARROW | 3     | INVIS | INVIS |
| 3  | ARROW | 4*  | ARROW | 3     | ARROW | 2     |
| | | | | | | [FOOT;]* Swap 1/1/1/0 → 1/0/0/3 |

### Theory 7 (50σ / 11k)

#### T7 overview

T7 can be summarized as a maximization problem : given a surface in 3-dimensional space,
you want to find its highest altitude by moving along the surface, always in the direction
of steepest ascent (that's basically a gradient ascent).
The function $g(x,y)$ can be seen as a surface in $\mathbb{R}^{3}$ (considering the set
of points $(x,y,g(x,y))$, see attached image).
$(\rho_1,\rho_2,g(\rho_1,\rho_2))$ is a point on this surface. Our goal is to
maximize $g(\rho_1,\rho_2)$, i.e. to find $(\rho_1,\rho_2)$ that maximize $g(\rho_1,\rho_2)$.
Notice that the function $g$ is unbounded, i.e. you can't find a proper maximum (we say that the maximization problem is ill-conditioned); so one way to maximize $g(\rho_1,\rho_2)$ is to move $(\rho_1,\rho_2)$ towards the direction of steepest ascent.
This is what is precisely done by setting $\dot{\mathbf{\rho}}$ (which is the direction the
point $\mathbf{\rho}=(\rho_1,\rho_2)$ will move toward) to $\nabla g(\rho_1,\rho_2)$
(i.e. the gradient of $g$ evaluated at $(\rho_1,\rho_2)$, which gives the direction of
steepest ascent of $g$ at the point $(\rho_1,\rho_2)$.

![T7 Graph of function](/images/T7-graph.png)

This is the graph of the function $g$, taken after the first four milestones have been unlocked
(Note: here, coefficients like $c_1,c_2\ldots$ are ignored. The effect of those coefficients is
simply making the graph steeper in $x$ or $y$ direction, depending on the value of each coef).

#### T7 strategy

The optimal publication multiplier is $4$-$6$. You will swap from 0/1/1 → 0/0/2 near $e67$. The strategy for manual buy before 4 milestones is to only manual buy $q_1$ and $c_1$ cheap ($e1$ less $\rho$) and the rest full auto. After milestone 5, turn it on full autobuy for idle. For active, follow the strat described in the [theory sim guide](/guides/theory-sim) or watch the video below.

{{ yt.embed('wnKLkd0zXwI') }}

#### T7 milestone route

Class: milestone_routing;
last_row: false;

|           |       |           |       |           |
| --------- | ----- | --------- | ----- | --------- |
| 0/0/0     | ARROW | 0/1/0     | ARROW | 0/1/1     |
| 0/1/1     | ARROW | 0/0/2*    | ARROW | 0/0/3     |
| 0/0/3     | ARROW | 0/1/3     | ARROW | 1/1/1/1/1 |
| 1/1/1/1/1 | ARROW | 1/1/1/1/3 | INVIS | INVIS     |

Class: milestone_routing;
last_row: false;

|           |       |       |       |       |       |       |
| --------- | ----- | ----- | ----- | ----- | ----- | ----- |
| OR        | INVIS | INVIS | INVIS | INVIS | INVIS | INVIS |
| 2         | ARROW | 3*    | ARROW | 3     | ARROW | 2     |
| 2         | ARROW | 1**   | ARROW | 3 x2  | INVIS | INVIS |
| | | | | | | [FOOT;]* Swap 0/1/1 → 0/0/2 at ~$e67$ |
| | | | | | | [FOOT;]** Swap 0/1/3 → 1/1/1/1/1 |

### Theory 8 skipping

Temporarily skipping T8 is significantly faster than buying T8 right away because of how slow T8 is from $0-e60$ (don't worry, you will still buy it, just at $ee14k$, not $ee12k$). T8 is very slow until you get to ~$e60$ (it took the sim 16 hours to get that far into the theory without R9). We highly recommend buying T8 for the achievement, then selling it right away to use those students for $\varphi$. You will need ~$e1350\ \tau$ in order to get R9 ($ee14k$) without T8, which will help you get through T8 faster than before. **You will need to buy T8 again to get R9, and you should start R9 right away after that** The current recommendation for your $\tau$ distribution for T8 skip is as follows:

Class: strat;
Caption: T8 skip $\tau$ recommendations;

| INVIS | Idle            | Active          |
| ----- | --------------- | --------------- |
| T1    | $e200\tau$      | $e200\tau$      |
| T2    | $e295\tau$      | $e290\tau$      |
| T3    | $e133\tau$      | $e130\tau$      |
| T4    | $e165\tau$      | $e155\tau$      |
| T5    | $e240\tau$      | $e265\tau$      |
| T6    | $e172\tau$      | $e165\tau$      |
| T7    | $e145\tau$      | $e145\tau$      |
| T8    | <red>Skip</red> | <red>Skip</red> |
| | | [FOOT;style="width:20vw;";]If your numbers are different, that is fine. You just need to reach $1e1350\ \Pi\tau$ to get to R9 at $ee14k$. |

### Student routing with R9

All routing follows the [student calculator](https://conicgames.github.io/exponentialidle/students.html) (by Niedzielan, AfuroZamurai, and Milla) and
[star calculator](https://conicgames.github.io/exponentialidle/stars.html) (by Eaux Tacous#1021). When you are not pushing $f(t)$ you should always have the 9th research option maxed (after Theory 8). When pushing $f(t)$, you should be R9 swapping (below).

There is also the [theory simulator](https://exponential-developers.github.io/sim-3.0/) originally by XLII and now developed by the Exponential Developers, which works both below max milestones and after max milestones for all theories.

![R9 Location](/images/R9.png)

#### How to push F(t) with R9 swapping

###### Memorize your student distributions with and without 10/20/30 R9 students. Use the [student calculator](https://conicgames.github.io/exponentialidle/students.html) if needed. You will commonly see people refer to this as R9 seaping as a long held name of the strategy.

1. Wait till $f(t)$ stops growing with students in R9 pushing $\tau$.
2. Start accel (preferably keep it between prestiges).
3. Potentially sit here to stack t for bigger $\varphi_2$ when you have students in $\varphi_2$. Only do this when you are near a graduation mark. This is not useful if you will not swap into $\varphi_2$.
4. Respec all 10/20/30 students from R9.
5. Wait for the autoprestige to prestige and swap back students to R9.
6. Repeat.

This method allows you to push $f(t)$ with almost no loss of R9
uptime or pushing power. This is harder with fewer levels of R9 but
still helps if you get used to it.

#### R9 autoprestige expression

You can find the autoprestige used for R9 Swapping here: [Equation](/guides/intro-to-grad/#new-autoprestige-expression). If you don't have this expression, then you will have to manually prestige each swap.

###### Reference [R9 Swapping Autoprestige Explanation](/guides/intro-to-grad/#autoprestige-explanation)

{{ yt.embed('Klw9lLPNqdY') }}

### Theory 8 (55σ / 12k)

#### T8 strategy

The optimal publication multiplier is 2.5-5 depending on how close you
are to the next milestone. This theory is extremely slow at the start
which is why we skip until we obtain R9. It is also the only one with a
$1e20$ milestone step. It will speed up once you hit $1e60$ and
even faster at $1e80$ and $1e100$ etc. until ~$e250$-$e300$.
The worst part is the $1e50$-$1e60$ grind. The grind to $1e60$
will take a good bit of time but is faster with R9.

At the start, manual buy prioritizes $c_2$ then $c_1$ then rest.
Once you get to 0/0/0/2, prioritize $c_2$ and $c_5$ then $c_1$ then the
rest. Once at 2/0/3/0, you will prioritize $c_2$ and $c_4$ then $c_1$ then
the rest after. This continues to max at 2/3/3/3.

Class: breakdown;
Caption: T8 Attractor Information;

| INVIS   | Starting Positions   | Time Step |
| ------- | -------------------- | --------- |
| Lorenz  | (-6, -8, 26)         | 0.02      |
| Chen    | (-10.6, -4.4, -28.6) | 0.002     |
| Rössler | (-6, 15, 0)          | 0.00014   |

#### T8 milestone route

Class: milestone_routing;
last_row: false;

|         |       |          |       |         |
| ------- | ----- | -------- | ----- | ------- |
| 0/0/0/0 | ARROW | 1/0/0/0  | ARROW | 2/0/0/0 |
| 2/0/0/0 | ARROW | 0/0/0/2* | ARROW | 0/0/0/3 |
| 0/0/0/3 | ARROW | 1/0/0/3  | ARROW | 2/0/3/0 |
| 2/0/3/0 | ARROW | 2/3/3/0  | ARROW | 2/3/3/3 |

Class: milestone_routing;
last_row: false;

|           |       |       |       |       |       |       |
| --------- | ----- | ----- | ----- | ----- | ----- | ----- |
| OR        | INVIS | INVIS | INVIS | INVIS | INVIS | INVIS |
| 1x2*      | ARROW | 4     | ARROW | 1     | ARROW | 1**   |
| 1**       | ARROW | 1     | ARROW | 2 x3  | ARROW | 4 x3  |
| | | | | | | [FOOT;]* Swap 2/0/0/0 → 0/0/0/2 at $e52\tau$ |
| | | | | | | [FOOT;]** Swap 1/0/0/3 →2 /0/3/0 |

### Final Push to ee20k

In general, you will need ~$e2050\ \tau$ in order to get to 20k easily. Make sure that you are R9 Swapping and holding accel when you can. Recommended values for your theories $\tau$ is as follows. Being above or below these values is fine, just as long as you have ~$e2050\ \tau$.

Class: strat;
Caption: $ee20$k $\tau$ recommendations;

| INVIS | Idle       | Active      |
| ----- | -----------| ----------- |
| T1    | $e237\tau$ | $e243\tau$  |
| T2    | $e290\tau$ | $e295\tau$  |
| T3    | $e221\tau$ | $e221\tau$  |
| T4    | $e227\tau$ | $e232\tau$  |
| T5    | $e360\tau$ | $e361\tau$  |
| T6    | $e204\tau$ | $e194\tau$  |
| T7    | $e234\tau$ | $e227\tau$  |
| T8    | $e276\tau$ | $e277\tau$ |
| | | [FOOT;style="width:20vw;";]Being above or below these values is fine, just as long as you have ~$e2050\ \tau$. |
