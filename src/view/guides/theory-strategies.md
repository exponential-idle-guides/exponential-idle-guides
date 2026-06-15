---
title: "Theory Strategies Explained"
description: "Our guide for learning what each theory strategy means."
author: "spqcey originally"
contributors: "everyone who has innovated new strategies and the Amazing Community"
draft: false
order: 9
---

The theory sim (simulation) we currently recommend was originally made by XLII, now maintained by the [sim team](https://github.com/exponential-developers), can be [accessed here.](https://exponential-developers.github.io/sim-3.0/)

For help on specific (active) strategies, Hackzzzzzz's [Theory Quick Purchase Testers](https://drive.google.com/drive/folders/1xOpJepkZZVpuk0QEnIVt3ejquGKR09co) can output when to buy variables. Take a look for help with difficult strategies.

For cleaner view of individual strategies, check out the [alternative/old Theory Strategies Explained Guide](/guides/theory-strategies-old).

## Modulus Explanation

A "%" can be seen in the table of some strategies. The “%” indicates modulus, which to simplify, is the remainder of a division.

So,

13 % 10 = 3

21 % 10 = 1

20 % 10 = 0

Because the modulus used is mod10, and we use a base 10 numbering system, we can look at the last digit of the level to easily find the result of the modulus.

So, 214<u>**5**</u> % 10 = <u>**5**</u>

## <light-blue>Coast</light-blue> Strategy

Whenever the strategies include the word <light-blue>Coast</light-blue>, it indicates the end point of variable purchases in a publication. It generally appears in all strategies possibly, with the substring after the name of the strategies being the last variable purchase level in the publication. After such conditions are fulfilled, one should not buy any variables and wait until the $\rho$/$\tau$ reaches the indicated location provided by [the sim](https://exponential-developers.github.io/sim-3.0/).

For example, if a result of "T6<red>No</red><blue>C34</blue><yellow>Mod</yellow><light-blue>Coast q1: 425 r1: 36</light-blue>" strat and max rho "5e204" are provided by the sim. One should be expected to complete the publication with

- the strategy indication listed in T6<red>No</red><blue>C34</blue><yellow>Mod</yellow>;
- last level of $q_1$ and $r_1$ being bought is level 425 and level 36 respectively;
- not buying any variables after the above criteria are satisfied; and
- wait and publish at 5e204 $\rho$.

All strategies with <light-blue>Coast</light-blue> as a part of its name will be represented similar to the example illustrated above, except one theory — BaP. For BaP, coasting starts if current $\rho > \frac{1}{25}$ publication $\rho$.

Once the word <light-blue>Coast</light-blue> appears in the name of a strategy, its activeness is at least semi-idle.

## Main Theories

### Theory 1: Recurrence Relations

#### Strategy Basis

A unique part of T1 is the nature of recursion, in which it includes $\rho$ as part of the manipulation of $\dot{\rho}$. Therefore, previous values of $\rho$ directly affect the growth of $\rho$ after a variable purchase. It is most ideal to strike a balance between damping the recovery by purchasing too early and delaying the effect of variables by purchasing too late. Hence the buying criteria were carefully set as below.

#### Active Strategies

Caption: T1<green>SolarXLII</green>, T1<yellow>Ratio</yellow>;
Class: strat_split;

| INVIS | T1<green>SolarXLII</green> | T1<yellow>Ratio</yellow> |
| ----- | -------------------------- | ------------------------ |
| $q_1$ | Buy if<div style="text-align:left;">(1) $q_1$ cost $\times (6 + \text{lvl}\mod 10) < q_2$ cost; **AND**</br>(2) $q_1$ cost $\times (15 + \text{lvl}\mod 10)<c_4$ cost; **AND**</br>(3) $\rho>5 q_1$ cost | Buy if $\rho > 10 \times q_1$ cost</div> |
| $q_2$ | | Buy if $\rho > 1.11 \times q_2$ cost |
| $c_1$ | | Buy if $\rho > 10 \times c_2$ ratio\* $\times c_1$ cost |
| $c_2$ | | Buy if $\rho > c_2$ ratio\* $\times c_2$ cost |
| $c_3$ | | Buy if $\rho > c_3$ ratio\*\* $\times c_3$ cost |
| $c_4$ | | CHECK |

Class: strat_split;
Caption: $c_2$ ratio\* and $c_3$ ratio\*\*;

| $\rho$ | $c_2$ ratio\* | $c_3$ ratio\*\* |
| ------ | ------------- | --------------- |
| Less than e300 | ![c_2 Ratio](/images/t1ratioc2ratio.png) | 1 |
| e300 - e450 | [style="rowspan:4;";]REDX | 1.1 |
| e450 - e550 | REDX | 2 |
| e550 - e655 | REDX | 5 |
| More than e655 | REDX | 10 |

[TODO: colspan implementation]

#### Idle Strategies

T1<blue>C34</blue> — Autobuy $c_3$ and $c_4$ only
T1<blue>C4</blue> — Autobuy $c_4$ only

### Theory 2: Differential Calculus

#### Strategy Basis

In T2, the theory progresses by using the rate of change of variables for growing the value of the next layer of variables. It works similar to $x_1$ to $x_8$ in $f(t)$ progression. Hence, one should allow time for layers of $q$ and $r$ variables to build up over time, which is the major reason for the long-term idle strategy in T2.

#### Non-Swapping Strategies

T2<light-blue>MC</light-blue>, T2<light-blue>MC2</light-blue>, T2<light-blue>MC3</light-blue>

Caption: Publication Multiplier To Stop Buying Variables At;
class: breakdown;

| INVIS        | T2<light-blue>MC</light-blue> | T2<light-blue>MC2</light-blue> | T2<light-blue>MC3</light-blue> |
| ------------ | ----------------------------- | --------------------------------------------------------------------- | --------------------------------- |
| $q_4$, $r_4$ | 1,150 | 550   | 750   |
| $q_3$, $r_3$ | 2,250 | 2,050 | 1,700 |
| $q_2$, $r_2$ | 2,900 | 2,700 | 2,650 |
| $q_1$, $r_1$ | 4,650 | 3,500 | 3,700 |

#### T2<orange>MS</orange>/T2<orange>SingleMS</orange>

T2 milestones aid progression of the publication by either increasing a new layer of stacking, or increasing exponents of $q_1$ and $r_1$. By careful observation, one can conclude the effect of each of the milestones.

Class: strat_left;

|                                           |                                    |                                              |
| ----------------------------------------- | ---------------------------------- | -------------------------------------------- |
| 1<sup>st</sup> & 2<sup>nd</sup> Milestone | Unlock new $q$ & $r$ layers.       | Increases $\rho$ <u>gradually over time</u>. |
| 3<sup>rd</sup> & 4<sup>th</sup> Milestone | Increases $q_1$ & $r_1$ exponents. | Increases $\rho$ <u>instantaneously</u>.     |

With the first two milestones affecting $\rho$ gradually over time and the last two milestones affecting $\rho$ instantaneously, one would like to maximize the benefits from both sides by swapping between milestones, which forms the basis of "milestone swapping". By striking a balance between the time used in the two phases, one can benefit maximally from the advantages on both sides. Milestone swapping terminates at e250 $\rho$ when all milestone points are allocated in all available milestone slots.

Caption: T2<orange>MS</orange> Stages;
Class: breakdown;

| Stage   | Milestone Priority | Duration | Effect             |
| ------- | ------------------ | -------- | ------------------ |
| <orange>Stage 1</orange> | 3 → 4 → 1 → 2 | 10 sec | $\rho$ gain via. $q$, $r$ exponents |
| <orange>Stage 2</orange> | 1 → 2 → 3 → 4 | 40 sec | Boost $q$, $r$ ($q$ priority)       |
| <orange>Stage 1</orange> | 3 → 4 → 1 → 2 | 10 sec | $\rho$ gain via. $q$, $r$ exponents |
| <orange>Stage 2</orange> | 2 → 1 → 3 → 4 | 40 sec | Boost $r$, $q$ ($r$ priority)       |

T2<orange>SingleMS</orange> — Swap from <orange>Stage 2</orange> to <orange>Stage 3</orange> when the corresponding Publication Multiplier is reached.

Class: breakdown;

| Publication $\rho$ | Publication Multiplier |
| ------------------ | ---------------------- |
| Less than e75      | 10                     |
| e75 - e150         | 200                    |
| e150 - e200        | 600                    |
| e200 - e225        | 100                    |
| e225 - e250        | 25                     |

### Theory 3: Linear Algebra

#### Strategy Basis

With the self-explanatory name of T3, the theory progresses using the concept of matrix multiplications. The theory first progresses with a 2 × 2 matrix with 2 variables ($\rho_1$ and $\rho_2$) followed by a 3 × 3 matrix with 3 variables ($\rho_3$ added), in which the different $\rho$'s assist in buying different variables. Since the result $\dot{\rho}$ growths take an additive nature, it is essential to recognize the dominant term in each of the row entries as well as the influence of a variable which was purchased using the $\rho$ of other row entries. To fully evaluate each of the entries and the relative strength of other entries, a series of strategies were proposed to accompany different stages of T3 when the dominating terms change. The execution of these strategies can have a large variety of activeness, from relatively active T3<yellow>d</yellow><green>Stage</green> and T3<red>No</red><blue>C11C13C21</blue><red>Stop</red><blue>B1C3X</blue> strategies, to relatively idle targeted variable purchase strategies such as T3<blue>ρ2</blue> and T3<red>No</red> derivatives.

Near to the end of the publication, one would like not to purchase any $\rho_1$ variables, as $\rho_1$ is the only $\rho$ variable contributing to $\tau$, the end product of T3. This forms the later part of the story for T3<green>Play</green>, T3<blue>ρ2C23</blue><red>No</red><blue>C32</blue><green>Rcv</green>, and T3<blue>ρ2</blue> strategies, when one discontinued buying variables that require $\rho_1$ currency.

#### T3<yellow>d</yellow><green>Stage</green> (Active)

Caption: T3<yellow>d</yellow><green>Stage</green>;
Class: strat_split;

| INVIS | <orange>Stage 1</orange><br>(Before Recovery) | <orange>Stage 2</orange><br>(Pub. Multi. 1-2) | <orange>Stage 3</orange><br>(Pub. Multi. > 2) |
| ----- | - | - | - |
| $b_1$ | | Buy if $b_1$ cost $<\frac{1}{8}\times c_{31}$ cost | REDX |
| $b_2$ | Buy if<div style="text-align:left;">(1) $b_2$ cost $<\frac{2}{9} \times \min{\left(c_{12},c_{32}\right)}$ cost; **AND**<br>(2) $b_2$ cost $<\frac{4}{9} \times c_{22}$ cost</div> | Buy if<div style="text-align:left;">(1) $b_2$ cost $<\frac{1}{4} \times \min{\left(c_{12},c_{32}\right)}$ cost; **AND**<br>(2) $b_2$ cost $<\frac{1}{2} \times c_{22}$ cost</div> | CHECK |
| $b_3$ | Buy if<div style="text-align:left;">(1) $b_3$ cost $<\frac{1}{8} \times c_{23}$ cost; **AND**<br>(2) $b_3$ cost $<\frac{4}{9} \times c_{33}$ cost</div> | | Buy if<div style="text-align:left;">(1) $b_3$ cost $<\frac{1}{8} \times c_{23}$ cost; **AND**<br>(2) $b_3$ cost $<\frac{1}{2} \times c_{33}$ cost</div> |
| $c_{11}$ | | | REDX |
| $c_{12}$ | | | CHECK |
| $c_{13}$ | | | REDX |
| $c_{21}$ | | | REDX |
| $c_{22}$ | | Buy if $c_{22}$ cost $<\frac{1}{2} \times \min{\left(c_{12},c_{32}\right)}$ cost | CHECK |
| $c_{23}$ | | | CHECK |
| $c_{31}$ | | CHECK | REDX |
| $c_{32}$ | | | CHECK |
| $c_{33}$ | Buy if $c_{33}$ cost $\frac{9}{32} \times c_{23}$ | | Buy if $c_{33}$ cost $\frac{1}{4} \times c_{23}$ |

#### T3<red>No</red><blue>C11C13C21</blue><red>Stop</red><blue>B1C3X</blue> Derivatives (Active)

Caption: T3<red>No</red><blue>C11C13C21</blue><red>Stop</red><blue>B1C3X</blue><green>RcvA</green>, T3<red>No</red><blue>C11C13C21</blue><red>Stop</red><blue>B1C3X</blue>;
Class: strat_split;

| INVIS | Before Recovery | After Recovery |
| ----- | --------------- | -------------- |
| $b_1$ | CHECK | REDX |
| $b_2$ | | CHECK |
| $b_3$ | | CHECK |
| $c_{11}$ | | REDX |
| $c_{12}$ | [class="dashed_b";] Buy if $c_{12}$ cost $<\frac{1}{100} c_{32}$<br>(T3<red>No</red><blue>C11C13C21</blue><red>Stop</red><blue>B1C3X</blue><green>RcvA</green>) | CHECK |
| ROWSPAN | CHECK<br>(T3<red>No</red><blue>C11C13C21</blue><red>Stop</red><blue>B1C3X</blue>) | CHECK |
| $c_{13}$ | | REDX |
| $c_{21}$ | | REDX |
| $c_{22}$ | | CHECK |
| $c_{23}$ | | CHECK |
| $c_{31}$ | CHECK | REDX |
| $c_{32}$ | CHECK | REDX |
| $c_{33}$ | CHECK | REDX |

#### T3<blue>ρ2</blue> Derivatives (Active-Idle)

Caption: T3<blue>ρ2C23</blue><yellow>d</yellow>, T3<blue>ρ2C23</blue>, T3<blue>ρ2C23C33</blue><yellow>d</yellow>, T3<blue>ρ2C23C33</blue>, T3<blue>ρ2C23C31</blue><yellow>d</yellow>, T3<blue>ρ2C23C31</blue>;
Class: strat_split;


| INVIS | T3<blue>ρ2C23</blue><yellow>d</yellow>, T3<blue>ρ2C23</blue> | T3<blue>ρ2C23C33</blue><yellow>d</yellow>, T3<blue>ρ2C23C33</blue> | T3<blue>ρ2C23C31</blue><yellow>d</yellow>, T3<blue>ρ2C23C31</blue> |
| ----- | - | - | - |
| $b_1$ | | REDX | [class="dashed_b";]Buy if $b_1$ cost $<\frac{1}{8} c_{31}$ cost<br>(T3<blue>ρ2C23C31</blue><yellow>d</yellow>) | 
| ROWSPAN | |      | CHECK<br>(T3<blue>ρ2C23C31</blue>) | 
| $b_2$ | | [class="dashed_b";]Buy if $b_2$ cost $<\frac{1}{3}$ min$\left(c_{12},c_{22},c_{32}\right)$ cost<br>(T3<blue>ρ2C23</blue><yellow>d</yellow>, T3<blue>ρ2C23C33</blue><yellow>d</yellow>) | [class="dashed_b";]Buy if $b_2$ cost $<\frac{1}{5}$ min$\left(c_{12},c_{22},c_{32}\right)$ cost<br>(T3<blue>ρ2C23C31</blue><yellow>d</yellow>) |
| ROWSPAN | | | CHECK<br>(T3<blue>ρ2C23</blue>, T3<blue>ρ2C23C33</blue>, T3<blue>ρ2C23C31</blue>) |
| $b_3$ | | [class="dashed_b";]Buy if $b_3$ cost $<\frac{1}{9} c_{23}$ cost<br>(T3<blue>ρ2C23</blue><yellow>d</yellow>, T3<blue>ρ2C23C33</blue><yellow>d</yellow>) | [class="dashed_b";]Buy if $b_3$ cost $<\frac{1}{8} c_{23}$ cost<br>(T3<blue>ρ2C23C31</blue><yellow>d</yellow>) |
| ROWSPAN | | | CHECK<br>(T3<blue>ρ2C23</blue>, T3<blue>ρ2C23C33</blue>, T3<blue>ρ2C23C31</blue>) |
| $c_{11}$ | | | REDX |
| $c_{12}$ | | | CHECK |
| $c_{13}$ | | | REDX |
| $c_{21}$ | | | REDX |
| $c_{22}$ | | | CHECK |
| $c_{23}$ | | | CHECK |
| $c_{31}$ | | REDX | CHECK |
| $c_{32}$ | | | CHECK |
| $c_{33}$ | REDX | CHECK | REDX |

#### T3<red>No</red> Derivatives (Active-Idle)

Caption: T3<red>No</red><blue>C13C32C33</blue><yellow>d</yellow>, T3<red>No</red><blue>C13C32C33</blue>, T3<red>No</red><blue>C13C33</blue><yellow>d</yellow>, T3<red>No</red><blue>C13C33</blue>, T3<red>No</red><blue>C11C13C33</blue><yellow>d</yellow>, T3<red>No</red><blue>C11C13C33</blue>;
Class: strat_split;

| INVIS | T3<red>No</red><blue>C13C32C33</blue><yellow>d</yellow>, T3<red>No</red><blue>C13C32C33</blue> | T3<red>No</red><blue>C13C33</blue><yellow>d</yellow>, T3<red>No</red><blue>C13C33</blue> | T3<red>No</red><blue>C11C13C33</blue><yellow>d</yellow>, T3<red>No</red><blue>C11C13C33</blue> |
| ----- | - | - | - |
| $b_1$ | [class="dashed_b";]Buy if $b_1$ cost $<\frac{1}{8}$ min$\left(c_{11},c_{21},c_{31}\right)$ cost<br>(T3<red>No</red><blue>C13C32C33</blue><yellow>d</yellow>) | [class="dashed_b";]Buy if $b_1$ cost $<\frac{1}{10}$ min$\left(c_{11},c_{21},c_{31}\right)$ cost<br>(T3<red>No</red><blue>C13C33</blue><yellow>d</yellow>, T3<red>No</red><blue>C11C13C33</blue><yellow>d</yellow>) |
| ROWSPAN | | | CHECK<br>(T3<red>No</red><blue>C13C32C33</blue>, T3<red>No</red><blue>C13C33</blue>, T3<red>No</red><blue>C11C13C33</blue>) |
| $b_2$ | [class="dashed_b";]Buy if $b_2$ cost $<\frac{1}{5}$ min$\left(c_{12},c_{22}\right)$ cost<br>(T3<red>No</red><blue>C13C32C33</blue><yellow>d</yellow>) | [class="dashed_b";]Buy if $b_2$ cost $<\frac{1}{4}$ min$\left(c_{12},c_{22},c_{32}\right)$ cost<br>(T3<red>No</red><blue>C13C33</blue><yellow>d</yellow>, T3<red>No</red><blue>C11C13C33</blue><yellow>d</yellow>) |
| ROWSPAN | | | CHECK<br>(T3<red>No</red><blue>C13C32C33</blue>, T3<red>No</red><blue>C13C33</blue>, T3<red>No</red><blue>C11C13C33</blue>) |
| $b_3$ | [class="dashed_b";]Buy if $b_3$ cost $<\frac{1}{8} c_{23}$ cost<br>(T3<red>No</red><blue>C13C32C33</blue><yellow>d</yellow>) | [class="dashed_b";]Buy if $b_3$ cost $<\frac{1}{10} c_{23}$ cost<br>(T3<red>No</red><blue>C13C33</blue><yellow>d</yellow>, T3<red>No</red><blue>C11C13C33</blue><yellow>d</yellow>) |
| ROWSPAN | | | CHECK<br>(T3<red>No</red><blue>C13C32C33</blue>, T3<red>No</red><blue>C13C33</blue>, T3<red>No</red><blue>C11C13C33</blue>) |
| $c_{11}$ | | CHECK | REDX |
| $c_{12}$ | | | CHECK |
| $c_{13}$ | | | REDX |
| $c_{21}$ | | | CHECK |
| $c_{22}$ | | | CHECK |
| $c_{23}$ | | | CHECK |
| $c_{31}$ | | | CHECK |
| $c_{32}$ | REDX | | CHECK |
| $c_{33}$ | | | REDX |

#### Other Strategies (Active-Idle)

Caption: T3<blue>C11C12C21</blue><yellow>d</yellow>, T3<blue>C11C12C21</blue>;
Class: strat_split;

| INVIS | T3<blue>C11C12C21</blue><yellow>d</yellow> | T3<blue>C11C12C21</blue> |
| ----- | ------------------------------------------ | ------------------------ |
| $b_1$ | Buy if $b_1$ cost $<\frac{1}{7}$ min$\left(c_{11},c_{21}\right)$ cost | CHECK |
| $b_2$ | Buy if $b_2$ cost $<\frac{1}{5} c_{12}$ cost | CHECK |
| $b_3$ | | REDX |
| $c_{11}$, $c_{12}$, $c_{21}$ | | CHECK |
| Other Variables | | REDX |

T3 — Autobuy all

### Theory 4: Polynomials

#### Active Strategies

Caption: T4<orange>MS</orange><red>No</red><blue>C3</blue><yellow>d</yellow><red>Stop</red><blue>C12</blue>, T4<red>No</red><blue>C4</blue><yellow>d</yellow><red>Stop</red><blue>C12</blue>, T4<blue>C3</blue><yellow>d</yellow><red>Stop</red><blue>C12</blue>;
Class: strat_split;

| INVIS | Before Recovery | After Recovery |
| ----- | --------------- | -------------- |
| $c_1$ | Buy if $c_1$ cost $<\frac{1}{10} c_2$ cost | REDX |
| $c_2$ | CHECK | REDX |
| $c_3$ | | [class="dashed_b";]CHECK<br>(T4<red>No</red><blue>C4</blue><yellow>d</yellow><red>Stop</red><blue>C12</blue>, T4<blue>C3</blue><yellow>d</yellow><red>Stop</red><blue>C12</blue>) |
| ROWSPAN | | REDX<br>(T4<orange>MS</orange><red>No</red><blue>C3</blue><yellow>d</yellow><red>Stop</red><blue>C12</blue>) |
| $c_4$ | | [class="dashed_b";]CHECK<br>(T4<orange>MS</orange><red>No</red><blue>C3</blue><yellow>d</yellow><red>Stop</red><blue>C12</blue>) |
| ROWSPAN | | REDX<br>(T4<red>No</red><blue>C4</blue><yellow>d</yellow><red>Stop</red><blue>C12</blue>, T4<blue>C3</blue><yellow>d</yellow><red>Stop</red><blue>C12</blue>) |
| $c_5$ | | [class="dashed_b";]CHECK<br>(T4<orange>MS</orange><red>No</red><blue>C3</blue><yellow>d</yellow><red>Stop</red><blue>C12</blue>, T4<red>No</red><blue>C4</blue><yellow>d</yellow><red>Stop</red><blue>C12</blue>) |
| ROWSPAN | | REDX<br>(T4<blue>C3</blue><yellow>d</yellow><red>Stop</red><blue>C12</blue>) |
| $c_6$ | | [class="dashed_b";]CHECK<br>(T4<orange>MS</orange><red>No</red><blue>C3</blue><yellow>d</yellow><red>Stop</red><blue>C12</blue>, T4<red>No</red><blue>C4</blue><yellow>d</yellow><red>Stop</red><blue>C12</blue>) |
| ROWSPAN | | REDX<br>(T4<blue>C3</blue><yellow>d</yellow><red>Stop</red><blue>C12</blue>) |
| $q_1$ | | Buy if $q_1$ cost $<\frac{1}{10} q_2$ cost |
| $q_2$ | | CHECK |
| Milestone Swap<br>(T4<orange>MS</orange><red>No</red><blue>C3</blue><yellow>d</yellow><red>Stop</red><blue>C12</blue>) | 2 → 3 → 1 | [class="dashed_b";]<orange>Stage 1</orange> (1 min): 1 → 3 → 2 |
| | | [class="dashed_b";]<orange>Stage 2</orange> (1 min): 3 → 1 → 2 |

#### Active-Idle Strategy Pairs

Caption: T4<blue>C3</blue><yellow>Mod</yellow>, T4<blue>C3</blue>;
Class: strat_split;

| INVIS | T4<blue>C3</blue> | | [class="dashed_b";]T4<blue>C3</blue><yellow>Mod</yellow> |
| ROWSPAN | ROWSPAN | Before Recovery | After Recovery |
| ----- | ----------------- | --------------- | -------------- |
| $c_3$ | | | CHECK |
| $q_1$ | CHECK | | Buy if $q_1$ cost $\times (10 + $ lvl % $10) <$ min$\left(q_2,c_3\right)$ cost |
| $q_2$ | | CHECK | Buy if $q_2$ cost $<\frac{2}{3} c_3$ cost |
| Other Variables | | | REDX |

Caption: T4<blue>C123</blue><yellow>d</yellow>, T4<blue>C123</blue>;
Class: strat_split;

| INVIS | T4<blue>C123</blue> | T4<blue>C123</blue><yellow>d</yellow> |
| ----- | ----------------- | ----------------------------------- |
| $c_1$ | CHECK | Buy if $c_1$ cost $<\frac{1}{10} c_2$ cost |
| $c_2$ | | CHECK |
| $c_3$ | | CHECK |
| $q_1$ | CHECK | Buy if $q_1$ cost $<\frac{1}{10} q_2$ cost |
| $q_2$ | | CHECK |
| Other Variables | | REDX |

Caption: T4<blue>C12</blue><yellow>d</yellow>, T4<blue>C12</blue>;
Class: strat_split;

| INVIS | T4<blue>C123</blue> | T4<blue>C123</blue><yellow>d</yellow> |
| ----- | ----------------- | ----------------------------------- |
| $c_1$ | CHECK | Buy if $c_1$ cost $<\frac{1}{10} c_2$ cost |
| $c_2$ | | CHECK |
| Other Variables | | REDX |

#### Idle Strategies

T4<blue>C56</blue> — Autobuy $c_5$, $c_6$, $q_1$, and $q_2$ only
T4<blue>C4</blue> — Autobuy $c_4$, $q_1$, and $q_2$ only
T4<blue>C5</blue> — Autobuy $c_5$, $q_1$, and $q_2$ only
T4 — Autobuy all

### Theory 5: Logistic Function

#### Strategy Basis

Exploring the role of $c_2$ in $q$ growth is very essential for progression of the publication in T5. Due to the construction of the $\dot{q}$ formula in T5, one can observe that buying $c_2$ increases the maximum value of $q$ on one hand, yet it decreases/halves the speed of $q$ reaching its maximum value on the other hand. Therefore, it is very essential for one not to buy too many $c_2$ levels at once, especially at the beginning of the publication.

To remind users about the effect of $c_2$ brings to T5, <green>ManageQ</green> will be used in subsequent T5 strategies to represent buying $c_2$ levels at an appropriate speed of not dampening the growth of $q$ too much at the beginning of the publication.

###### For more information, see T5 [equation description](/guides/theories-5-8/#theory-5-equation-description) and [Bicycle Analogy](/guides/theories-5-8/#bicycle-analogy-alternative-explanation-of-and-interactions).

#### Strategies Summary

Caption: T5<green>ManageQ</blue><yellow>Mod</yellow>, T5<green>RcvA</green>, T5
Class: strat_split;

| INVIS | T5 | T5<green>RcvA</green> | T5<green>ManageQ</blue><yellow>Mod</yellow> |
| ----- | -- | --------------------- | ------------------------------------------- |
| $q_1$ | | CHECK | Buy if $q_1$ cost $\times (3+$ lvl % $10) <$ min$\left(q_2,c_2,c_3\right)$ cost |
| $q_2$ | | | CHECK |
| $c_1$ | | CHECK | Buy if $q \times 1.5 < q_{\text{max}}$ |
| $c_2$ | CHECK | Buy if $q \times 1.5 > q_{\text{max}}$ |
| $c_3$ | | | CHECK |
| | | | [FOOT;]$q_{\text{max}} = c_2 \times c_3^{1.1}$ |

###### For more information on the human implementation of the strategies, see [pre-T9](/guides/theories-5-8/#active) or [post-T9](/guides/endgame/#t5-routing) explanations.

For T5<green>RcvA</green>, sim 3.0 will present the result as T5<green>RcvA</green> <blue>xexxx</blue> or <blue>c1: xxx</blue>. The <blue>xexxx</blue> or <blue>c1: xxx</blue> part was the starting point of coast. It mimics the function of [<blue>Coast</blue> strategy](#coast-strategy) and hence will not be repeated here.

### Theory 6: Integral Calculus

#### Strategy Basis

Similar to other theories, T6 adopts an additive nature to the growth of $\rho$ using integration. Different variables dominate in different parts of the theory, the change continues until $c_5$ finally takes over in lategame due to comparatively slower decay. In response to this change, a variety of T6 strategies are proposed. The activity of a strategy depends on how one appreciates the variable strength during a publication, ranging from active T6<red>No</red><blue>C34</blue><yellow>Mod</yellow> strategy to idle univariable autobuy strategies.

#### Active Strategies

Caption: T6<red>No</red><blue>C34</blue><yellow>Mod</yellow>;
Class: strat_split;

|   |   |
| - | - |
| $q_1$ | Buy if $q_1$ cost $\times (7 +$ lvl mod $10) <$ min$\left(q_2,r_2,c_5\right)$ cost |
| $q_2$ | CHECK |
| $r_1$ | Buy if $r_1$ cost $\times (5 +$ lvl mod $10) <$ min$\left(q_2,r_2,c_5\right)$ cost |
| $r_2$ | CHECK |
| $c_1$ | Buy if $c_1$ cost $\times (7 +$ lvl mod $10) < c_2$ cost |
| $c_2$ | Buy if $q_1$ cost $\times c_2$ ratio\* $<$ min$\left(q_2,r_2,c_5\right)$ cost |
| $c_3$ | REDX |
| $c_4$ | REDX |
| $c_5$ | CHECK |
| | [FOOT;]$c_2$ ratio $=\frac{c_5 * r}{c_1^{1.15} * c_2}$ |

#### Active-Idle Strategy Pairs

Caption: T6<blue>C125</blue><yellow>d</yellow>, T6<blue>C125</blue>, T6<blue>C12</blue><yellow>d</yellow>, T6<blue>C12</blue>;
Class: strat_split;

| INVIS | T6<blue>C125</blue>, T6<blue>C12</blue> | T6<blue>C125</blue><yellow>d</yellow>, T6<blue>C12</blue><yellow>d</yellow> |
| ----- | - | - |
| $q_1$ | CHECK | Buy if $q_1$ cost $<\frac{1}{10} q_2$ cost |
| $q_2$ | | CHECK |
| $r_1$ | CHECK | Buy if $r_1$ cost $<\frac{1}{10} r_2$ cost |
| $r_2$ | | CHECK |
| $c_1$ | CHECK | Buy if $c_1$ cost $<\frac{1}{10}$ min$\left(c_2,c_5\right)$ cost |
| $c_2$ | | CHECK |
| $c_5$ | | [class="dashed_b";]CHECK<br>(T6<blue>C125</blue><yellow>d</yellow>, T6<blue>C125</blue>) |
| ROWSPAN | | REDX<br>(T6<blue>C12</blue><yellow>d</yellow>, T6<blue>C12</blue>) |
| Other Variables | | REDX |

Caption: T6<blue>C5</blue><yellow>Mod</yellow>, T6<blue>C5</blue>;
Class: strat_split;

| INVIS | T6<blue>C5</blue> | T6<blue>C5</blue><yellow>Mod</yellow> |
| ----- | - | - |
| $q_1$ | CHECK | Buy if $q_1$ cost $\times (7+$ lvl mod $10) <$ min$\left(q_2,r_2,c_5\right)$ cost |
| $q_2$ | | CHECK |
| $r_1$ | CHECK | Buy if $r_1$ cost $<\frac{1}{5}$ min$\left(q_2,r_2,c_5\right)$ cost |
| $r_2$ | | CHECK |
| $c_5$ | | CHECK |
| Other Variables | | REDX |

Caption: T6<blue>C4</blue><yellow>d</yellow>, T6<blue>C4</blue>;
Class: strat_split;

| INVIS | T6<blue>C4</blue> | T6<blue>C4</blue><yellow>d</yellow> |
| ----- | - | - |
| $q_1$ | CHECK | Buy if $q_1$ cost $<\frac{1}{5}$ min$\left(q_2,r_2,c_4\right)$ cost |
| $q_2$ | | CHECK |
| $r_1$ | CHECK | Buy if $r_1$ cost $<\frac{1}{5}$ min$\left(q_2,r_2,c_4\right)$ cost |
| $r_2$ | | CHECK |
| $c_4$ | | CHECK |
| Other Variables | | REDX |

Caption: T6<blue>C3</blue><yellow>d</yellow>, T6<blue>C3</blue>;
Class: strat_split;

| INVIS | T6<blue>C3</blue> | T6<blue>C3</blue><yellow>d</yellow> |
| ----- | - | - |
| $q_1$ | CHECK | Buy if $q_1$ cost $<\frac{1}{5}$ min$\left(q_2,c_3\right)$ cost |
| $q_2$ | | CHECK |
| $c_4$ | | CHECK |
| Other Variables | | REDX |

#### Hybrid Strategies [TODO: Fix Name]

Caption: Hybrid Strategies;
Class: strat_split;

| INVIS | <orange>Stage 1</orange><br>(indicated <green>xexxx</green>) | <orange>Stage 2</orange><br>(Before Recovery) | <orange>Stage 3</orange><br>(After Recovery) |
| ----- | - | - | - |
| T6<blue>C125</blue><red>Stop</red><blue>C12</blue> | T6<blue>C125</blue> | | T6<blue>C5</blue> |
| T6<blue>C125</blue><yellow>Mod</yellow><red>Stop</red><blue>C12</blue><green>RcvI</green> | T6<blue>C125</blue> | T6<blue>C5</blue> | T6<blue>C5</blue><yellow>Mod</yellow> |
| T6<blue>C5</blue><yellow>Mod</yellow><green>RcvI</green> | | T6<blue>C5</blue> | T6<blue>C5</blue><yellow>Mod</yellow> |
| | | | [FOOT;]For the strategies listed, refer to te respective strategies listed above. |

### Theory 7: Numerical Methods

#### Active-Idle Strategy Pairs

Caption: T7<red>No</red><blue>C12</blue><yellow>d</yellow>, T7<red>No</red><blue>C12</blue>, T7<yellow>Ratio</yellow><green>X</green>;
Class: strat_split;

| INVIS | T7<red>No</red><blue>C12</blue> | T7<red>No</red><blue>C12</blue><yellow>d</yellow> | T7<yellow>Ratio</yellow><green>X</green> |
| ----- | - | - | - |
| $q_1$ | CHECK | | Buy if $q_1$ cost $<\frac{1}{4} c_6$ cost |
| $c_1$ | | REDX | Buy if $c_1$ cost $\times (10+$ lvl mod $10) <c_2$ cost |
| $c_2$ | | REDX | Buy if $c_2$ cost $<\frac{1}{X} c_6$ cost |
| $c_3$ | CHECK | | Buy if $c_3$ cost $<\frac{1}{10} c_6$ cost |
| $c_4$ | CHECK | | Buy if $c_4$ cost $<\frac{1}{10} c_6$ cost |
| $c_5$ | CHECK | | Buy if $c_5$ cost $<\frac{1}{10} c_6$ cost |
| $c_6$ | | | CHECK |

Caption: T7<blue>C3</blue><yellow>d</yellow>, T7<blue>C3</blue>;
Class: strat_split;

| INVIS | T7<blue>C3</blue> | T7<blue>C3</blue><yellow>d</yellow> |
| ----- | ----------------- | ----------------------------------- |
| $q_1$ | CHECK | Buy if $q_1$ cost $<\frac{1}{10} c_3$ cost |
| $c_3$ | | CHECK |
| Other Variables | | REDX |

Caption: T7<blue>C12</blue><yellow>d</yellow>, T7<blue>C12</blue>;
Class: strat_split;

| INVIS | T7<blue>C12</blue> | T7<blue>C12</blue><yellow>d</yellow> |
| ----- | ----------------- | ----------------------------------- |
| $q_1$ | CHECK | Buy if $q_1$ cost $<\frac{1}{10} c_2$ cost |
| $c_1$ | CHECK | Buy if $c_1$ cost $<\frac{1}{8} c_2$ cost |
| $c_2$ | | CHECK |
| Other Variables | | REDX |

#### Idle Strategies

T7<blue>C456</blue> — Autobuy $q_1$, $c_4$, $c_5$, $c_6$ only
T7<blue>C56</blue> — Autobuy $q_1$, $c_5$, $c_6$ only
T7 — Autobuy all

### Theory 8: Chaos Theory

#### Active Strategies

Caption: T8<yellow>Mod</yellow><orange>Reset</orange>, T8<yellow>Mod</yellow>;
Class: strat_split;

| INVIS | T8<yellow>Mod</yellow><orange>Reset</orange> | T8<yellow>Mod</yellow> |
| ----- | -------------------------------------------- | ---------------------- |
| $c_1$ | | Buy if $c_1$ cost $\times [5+0.5\times($ lvl mod $10)] <$ min$\left(c_2,c_4\right)$ cost |
| $c_2$ | | CHECK |
| $c_3$ | | Buy if $c_3$ cost $<\frac{2}{5}$ min$\left(c_2,c_4\right)$ cost |
| $c_4$ | | CHECK |
| $c_5$ | Buy if $c_5$ cost $<\frac{2}{5}$ min$\left(c_2,c_4\right)$ cost | Buy if $c_5$ cost $<\frac{1}{4}$ min$\left(c_2,c_4\right)$ cost |
| Milestone Swap<br>(T8<yellow>Mod</yellow><orange>Reset</orange>) | Remove and add 1 level of 1<sup>st</sup> milestone every 34 seconds. | N/A |

#### Semi-Idle Strategies

Caption: T8<light-blue>MC</light-blue>;
Class: strat_split;

| INVIS | | | Pub. Multi. |
| INVIS | Less than 1.6 | 1.6 - 2.3 | More than 2.3 |
| - | - | - | - |
| $c_1$ | CHECK | | REDX |
| $c_2$ | | | CHECK |
| $c_3$ | | CHECK | REDX |
| $c_4$ | | | CHECK |
| $c_5$ | | | CHECK |

#### Active-Idlel Strategy Pairs

\* Strategies with <yellow>d</yellow> indicates buy $c_1$ if $c_1$ cost$<u \frac{1}{10}\min{\left(c_2, c_4\right)}$ cost otherwise autobuy.
T8<red>No</red><blue>C35</blue><yellow>d</yellow>, T8<red>No</red><blue>C35</blue> — Autobuy $c_1$\*, $c_2$, $c_4$ only
T8<red>No</red><blue>C5</blue><yellow>d</yellow>, T8<red>No</red><blue>C5</blue> — Autobuy $c_1$\*, $c_2$, $c_3$, $c_4$ only
T8<red>No</red><blue>C3</blue><yellow>d</yellow>, T8<red>No</red><blue>C3</blue> — Autobuy $c_1$\*, $c_2$, $c_4$, $c_5$ only
T8<yellow>d</yellow>, T8 — Autobuy all

## Custom Theories

### Weierstraß Sine Product

[TODO: Insert theory strats]

[TODO: Turn this into a custom table type that auto-adds the — (see colgroup)]
WSP<yellow>Mod</yellow><green>RcvI</green> — WSP<red>Stop</red><blue>C1</blue> before recovery, WSP<yellow>Mod</yellow> after recovery
WSP — Autobuy all

### Sequential Limits

#### Strategies Summary

[TODO: Insert theory strats]

#### Milestone Swap (<orange>MS</orange>)

Similar to T2, SL progresses with the aid of different milestones that have different impacts on the equations of SL. With exploration of different milestones, one can conclude the effect of each of the milestones.

Class: strat_left;

|                          |                              |                                                                                     |
| ------------------------ | ---------------------------- | ----------------------------------------------------------------------------------- |
| 1<sup>st</sup> Milestone | Increases $\rho_2$ exponent. | Increases $\rho$ <u>instantaneously</u>.                                            |
| 2<sup>nd</sup> Milestone | Increases $\dot{\rho_2}$.    | Increases $\rho_2$.<br>Amplifies $\rho$ increase in <orange>Stage 3</orange>.       |
| 3<sup>rd</sup> Milestone | Increases $b_1$ exponent.    | Increases $\dot{\rho_3}$, $\rho_3$.<br>Increases $\rho$ <u>gradually over time</u>. |
| 4<sup>th</sup> Milestone | Increases $b_2$ exponent.    | Increases $\dot{\rho_3}$, $\rho_3$.<br>Increases $\rho$ <u>gradually over time</u>. |

With the first two milestones affecting $\rho$ instantaneously and the last two milestones affecting $\rho$ gradually over time, one would like to maximize the benefits from both sides by swapping between milestones. By striking a balance between the time used in the instantaneous phase and gradual phase, one can benefit maximally from the advantage on both sides. Milestone swapping terminates at e300$\rho$ when all milestone points are allocated in all available milestone slots.

Caption: Milestone Swap Stages;
Class: breakdown;

| Stage   | Milestone Priority | Effect                             |
| ------- | ------------------ | ---------------------------------- |
| <orange>Stage 1</orange> | 4 → 3 → 1 → 2      | Boost $e-\gamma$                   |
| <orange>Stage 2</orange> | 2 → 1 → 4 → 3      | Boost $\dot{\rho_2}$               |
| <orange>Stage 3</orange> | 1 → 2 → 4 → 3      | $\rho$ gain via. $\rho_2$ exponent |

<u>Milestone Swap Criteria</u>

1. Swap to next stage if $\rho\times\rho\text{ ratio}* < \min{\left(b_1, b_2\right)}$ cost;</br>**OR**
2. Swap to <orange>Stage 3</orange> directly until publishing if Pub. Multi. $> 4.5$.

Caption: $\rho$ ratio*;
Class: breakdown;

| $\rho$      | <orange>Stage 1</orange> to <orange>Stage 2</orange> | <orange>Stage 2</orange> to <orange>Stage 3</orange> | <orange>Stage 3</orange> to <orange>Stage 1</orange> |
| ----------- | -------------- | -------------- | -------------- |
| e25-e50     | 5   | 4    | 1    |
| e50 - e75   | 7   | 6    | 1    |
| e75 - e100  | 12  | 10   | 1    |
| e100 - e150 | 20  | 15   | 1    |
| e150 - e175 | 8   | 6    | 1    |
| e175 - e200 | 1.5 | 1    | SKIP |
| e200 - e275 | 3   | SKIP | 1    |
| e275 - e300 | 2   | SKIP | 1    |

### Euler's Formula

[TODO: Insert theory strats]

EF  — Autobuy all

### Convergents to √2

#### Strategies Summary

[TODO: Insert theory strats]

#### Milestone Swap (<orange>MS</orange>)

For CTSR2, there are three milestones one can put their milestone points into. With exploration of different milestones, one can conclude the effect of each of the milestones into two main categories.

Class: strat_left;

|                          |                           |                                                                      |
| ------------------------ | ------------------------- | -------------------------------------------------------------------- |
| 1<sup>st</sup> Milestone | Increases $q_1$ exponent. | Increases $\dot{\rho}$ <u>instantaneously</u>.                       |
| 2<sup>nd</sup> Milestone | Adds $c_2$.               | Increases $\dot{q}$.<br>Increases $\rho$ <u>gradually over time</u>. |
| 3<sup>rd</sup> Milestone | Increases $c_2$ exponent. | Increases $\dot{q}$.<br>Increases $\rho$ <u>gradually over time</u>. |

With the first milestone affecting $\rho$ instantaneously and the last two milestones affecting $\rho$ gradually over time, one would like to maximize the benefits from both sides by milestone swapping. However, different from SL, the stacked $q$ during swapping is permanent in the same publication and hence $q$ can be gradually stacked. Milestone swapping terminates at e500$\rho$ when all milestone points are allocated in all available milestone slots.

Caption: Milestone Swap Stages;
Class: breakdown;

| Stage                    | Milestone Priority | Effect             |
| ------------------------ | ------------------ | ------------------ |
| <orange>Stage 1</orange> | 2 → 3 → 1          | Boost $\dot{q}$    |
| <orange>Stage 2</orange> | 1 → 2 → 3          | Boost $\dot{\rho}$ |

<u>Milestone Swap Criteria</u>

Start the publication at <orange>Stage 1</orange>. Swap to <orange>Stage 2</orange> if

1. <u>Current</u> $\rho\times\rho\text{ ratio*} < \min{\left(c_2, 2\times n\right)}$ cost;</br>**OR**
2. <u>Current</u> $\rho <u \frac{1}{2} q_2$ cost after recovery.

Swap bac to <orange>Stage 1</orange> if the criteria is no longer satisfied.

Caption: $\rho$ ratio*;
Class: breakdown;

| Publication $\rho$ | $\rho$ ratio* |
| ------------------ | ------------- |
| Less than e45      | Close to 1    |
| e45 - e80          | 4             |
| e80 - e115         | 8             |
| e115 - e220        | 20            |
| e220 - e500        | 40            |

### Fractional Integration

#### Strategy Basis

[TODO: insert basis]

#### Double Chase (<yellow>Mod</yellow>)

[TODO: insert theory strat]

#### Milestone Swap (<orange>MS</orange>)

Similar to some of the other theories, milestone swapping is possible in FI. However, different from the examples we have demonstrated, the underlying reasons/benefits of <orange>MS</orange> in FI is more insidious, in which,

Class: strat_left;

|                          |                           |                                                                            |
| ------------------------ | ------------------------- | -------------------------------------------------------------------------- |
| 2<sup>nd</sup> Milestone | Adds $K$ term.            | Increases $\dot{r}$, $r$.<br>Increases $\rho$ <u>gradually over time</u>.  |
| 3<sup>rd</sup> Milestone | Increases $q_1$ exponent. | Increases $\dot{q}$.<br>Increases $\dot{\rho}$ <u>gradually over time</u>. |
| 4<sup>th</sup> Milestone | Adds $n$ and $m$.         | Increases $\dot{\rho}$ <u>instantaneously</u>.                             |

With the 4<sup>th</sup> milestone affecting $\rho$ instantaneously and the 2<sup>nd</sup> and 3<sup>rd</sup> milestones affecting $\dot{\rho}$ gradually over time, this creates a potential room for milestone swapping to receive the benefits of stacked $q$, $m$, and $n$. The gradually stacked $q$ during swapping is permanent in the same publication. Milestone swapping (but NOT Perma Swapping) terminates at e1,188$\rho$ when all milestone points are allocated in all available milestone slots.

Caption: Milestone Swap Stages;
Class: breakdown;

| Stage                    | Milestone Priority | Effect             |
| ------------------------ | ------------------ | ------------------ |
| <orange>Stage 1</orange> | 4 → 3              | Boost $m$, $n$     |
| <orange>Stage 2</orange> | 3 → 4              | Boost $\dot{\rho}$ |

<u>Milestone Swap Criteria</u>

Start publication in <orange>Stage 1</orange>.
Swap to <orange>Stage 2</orange> after a $q_2$ purchase.
Swap to <orange>Stage 1</orange> if $q$ has grown to $q$ ratio* of the original $q$ (at swap).

Caption: $q$ ratio*;
Class: breakdown;

| $q_1$ lvl % 23 | $q$ ratio* |
| -------------- | ---------- |
| 1 - 4          | 4          |
| 5 - 9          | 3          |
| 10 - 19        | 2.5        |
| 0, 20 - 22     | 2          |

#### Permanent Milestone Swap (<orange>SingleMS</orange>)

One unique feature about FI is the introduction of Permanent Milestone (Perma). The two permanent milestones in FI are changing of $g(x)$ formula and $\lambda$ formula, which aids the progression of the theory. In most cases, one would prefer using a milestone point into those permanent milestones immediately with $q$ being reset which usually rewards even more than normal milestones in FI, with the exception of one case. The only exception for FI is the 3<sup>rd</sup> level of $g(x)$, where swapping a milestone point into that right after purchasing the permanent milestone at e1,050$\rho$ will NOT benefit the progression of the theory as the 3<sup>rd</sup> level of $g(x)$ performs worse than the 2<sup>nd</sup> level of $g(x)$ until e1,076$\rho$. In response to this, the action of <u>buying the 3<sup>rd</sup> level of $g(x)$ only after e1,076$\rho$</u> was proposed as the strategy FI<orange>SingeMS</orange>.

### Fractal Patterns

#### Strategies Summary

[TODO: Insert theory strats]

#### Milestone Swap (<orange>MS</orange>)

Similar to some of the other theories, milestone swapping is possible in FP. However, the underlying reasons/benefits of <orange>MS</orange> in FP are self-explanatory by the 5<sup>th</sup> milestone. With this, one can swap the milestone in and out for $q$ growth and $\rho$ growth, respectively, before $s$ is sufficiently large (i.e. $s > 2$) from e700 onward. However, as $s$ becomes larger along the progress, the benefit of milestone swapping becomes less significant. Milestone swapping eventually terminates at around e950$\rho$ when $s > 2$ and when the swap is not worth the effort and time in subsequent recovery.

Caption: Milestone Swap Stages;
Class: breakdown;

| Stage                    | Milestone 5 | Effect       |
| ------------------------ | ----------- | ------------ |
| <orange>Stage 1</orange> | CHECK       | Boost $\rho$ |
| <orange>Stage 2</orange> | REDX        | Boost $q$    |

There is no definite indication/criteria of when to swap, the swap becomes less frequent in a publication. When $s>2$, keep milestone 5 purchased at all times.

###### For more information about the FP milestone swapping strategy, check [here.](/guides/custom-theories/#fp-milestone-swapping-explanation)

### Riemann Zeta Function

#### Strategies Summary

[TODO: Insert theory strats]

#### Milestone Swap (<orange>SpiralMS</orange>, <orange>SingleMS</orange>)

If one is a careful observer, one should be able to observe the fact that $\dot{\rho}$ is larger when $\zeta\left(\frac{1}{2}+it\right)$ is closer than 0, while $\dot{\delta}$ is larger when $\zeta'\left(\frac{1}{2}+it\right)$ is larger. In the early game from e50-e400$\rho$, when one does not have sufficient milestone points to allocate into all available positions, it is more ideal to maximize the benefits associated with the aforementioned facts by swapping milestones. The activeness is highly variable from very active RZ<orange>SpiralMS</orange> strategy to less active RZ<orange>SingleMS</orange> strategies.

Caption: Milestone Swap Stages;
Class: breakdown;

| Stage                    | Milestone Priority | Effect               |
| ------------------------ | ------------------ | -------------------- |
| <orange>Stage 1</orange> | 2 → 3 → 1          | Boost $\dot{\delta}$ |
| <orange>Stage 2</orange> | 2 → 1 → 3          | Boost $\dot{\rho}$   |

Caption: Milestone Swap Criteria;
Class: breakdown;

| Stage                    | RZ<orange>SpiralMS</orange> | RZ<orange>SingleMS</orange><yellow>d</yellow>, RZ<orange>SingleMS</orange> |
| ------------------------ | ----------------------------- | -------------------------------------------------------------- |
| <orange>Stage 1</orange> | Otherwise                                       | Start of publication             |
| <orange>Stage 2</orange> | $\zeta\left(\frac{1}{2}+it\right)$ approaches 0 | After $\rho$ provided by the sim |

#### Black Hole Rewind (<orange>BHRewind</orange>, <orange>BH</orange>)

[TODO: Fix after fixes]

A major unique feature for RZ is the implementation of black hole. Once a black hole is unlocked at e600$\rho$, a black hole can be used to lock the particle at the origin, lock the time and $\zeta'\left(\frac{1}{2}+it\right)$ to the moment the particle reaches the origin. This change allows a constant and rapid growth of $\rho$ by fixing $\zeta\left(\frac{1}{2}+it\right)$ to 0 and $\delta$ by fixing $\zeta'\left(\frac{1}{2}+it\right)$. However, $\zeta'\left(\frac{1}{2}+it\right)$ varies throughout the publication and in some certain places it is higher than the one fixed by the black hole. Hence, a strategy of gaining $\delta$ even more rapidly by <u>allowing the particle to repeatedly travel through a short segment with higher local $\zeta'\left(\frac{1}{2}+it\right)$</u> was proposed. Once sufficient $\delta$ is gained to buy the required $w_1$ level, the normal fix by black hole resumes and allows $\rho$ to grow.

1. Progress through the publication as normal.
2. Once the $t$ provided by the sim is reached, use black hole to rewind.
3. Release the black hole manually.
4. Repeat until the required $w_1$ level is bought.

### Magnetic Fields

#### Reset Coast (<light-blue>RC</light-blue>)

[TODO: Insert Theory strats]

#### Depth (<light-blue>Depth: x</light-blue>)

The setting of depth has no influence on the strategy of a MF publication, it is a setting only for the sim to be reminded when to start brute-forcing the strategies (i.e., testing each variable purchase, compare the efficiency of each purchase, and provide a result that is the most optimized).

Class: newwords;

| Depth | Brute Force Starting Point |
| ----- | -------------------------- |
| 0     | None (No brute force)      |
| 1     | e8 before recovery         |
| 2     | e15 before recovery        |
| 3     | e25 before recovery        |
| 4     | e35 before recovery        |
| 5     | e45 before recovery        |

#### Doubling Chase (<yellow>dx</yellow>, <dark-green>Variant</dark-green><yellow>dxdxdx</yellow>)

[TODO: Insert Theory Strats]

#### Idle Strategies

MF — Autobuy $c_1$, $c_2$, $a_1$, $a_2$, and $\delta$. Buy $v_1$, $v_2$, $v_3$, $v_4$ only before a reset.

### Basel Problem

#### Strategy Summary

[TODO: Insert theory strats]

#### Milestone Swap (<orange>MS</orange>)

The basis of milestone swap in BaP takes a combination of FI and T2. The mechanism used in unlocking milestone levels mimics the mechanism of FI, while the underlying reasons and mechanisms in swapping milestones are similar to that of T2. The summary of milestone description are as below,

Class: strat_left;

|                          |                         |                                              |
| ------------------------ | ----------------------- | -------------------------------------------- |
| 1<sup>st</sup> Milestone | Improves $a$ formula.   | Increases $\rho$ <u>instantaneously</u>.     |
| 2<sup>nd</sup> Milestone | Unlocks new $q$ layers. | Increases $\rho$ <u>gradually over time</u>. |

With the first milestone affecting $\rho$ instantaneously and the last two milestones affecting $\rho$ gradually over time, one would like to maximize the benefits from both sides by swapping between milestones by swapping milestones. By striking a balance between the time used in the two phases, one can benefit maximally from the advantages on both sides. Milestone swapping terminates at e250$\rho$ when all milestone points are allocated in all available milestone slots.

###### For more information about the BaP milestone swapping strategy, check [here.](/guides/custom-theories/#milestone-swapping-strategy)
