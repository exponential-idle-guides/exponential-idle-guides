---
title: "Theory Strategies Explained"
description: "Our guide for learning what each theory strategy means."
author: "spqcey originally"
contributors: "everyone who has innovated new strategies and the Amazing Community"
draft: false
order: 9
---

The theory sim (simulation) we currently recommend was originally made by XLII, now maintained by the [sim team](https://github.com/exponential-developers) and can be [accessed here.](https://exponential-developers.github.io/sim-3.0/)

For help on specific (active) strategies, Hackzzzzzz's [Theory Quick Purchase Testers](https://drive.google.com/drive/folders/1xOpJepkZZVpuk0QEnIVt3ejquGKR09co) can output when to buy variables. Take a look for help with difficult strategies.

## Modulus Explanation

A "%" can be seen in the table of some strategies. The “%” indicates modulus, which to simplify, is the remainder of a division.

So,

13 % 10 = 3

21 % 10 = 1

20 % 10 = 0

Because the modulus used is mod10, and we use a base 10 numbering system, we can look at the last digit of the level to easily find the result of the modulus.

So, 214<u>**5**</u> % 10 = <u>**5**</u>

## <green>Coast</green> Strategy

Whenever the strategies include the word <green>Coast</green>, it indicates the end point of variable purchases in a publication. It generally appears in all strategies possibly, with the substring after the name of the strategies being the last variable purchase level in the publication. After such conditions are fulfilled, one should not buy any variables and wait until the $\rho$/$\tau$ reaches the indicated location provided by [the sim](https://exponential-developers.github.io/sim-3.0/).

For example, if a result of "T6<green>AICoast</green> q1: 425 r1: 36" strat and max rho "5e204" are provided by the sim. One should be expected to complete the publication with

- the strategy indication listed in T6<green>AICoast</green>;
- last level of $q_1$ and $r_1$ being bought is level 425 and level 36 respectively;
- not buying any variables after the above criteria are satisfied; and
- wait and publish at 5e204 $\rho$.

All strategies with <green>Coast</green> as a part of its name will be represented similar to the example illustrated above, except one theory — BaP. For BaP, coasting starts if current $\rho > \frac{1}{25}$ publication $\rho$.

Once the word <green>Coast</green> appears in the name of a strategy, its activeness is at least semi-idle.

## Main Theories

### Theory 1: Recurrence Relations

#### Strategy Basis

A unique part of T1 is the nature of recursion, in which it includes $\rho$ as part of the manipulation of $\dot{\rho}$. Therefore, previous values of $\rho$ directly affect the growth of $\rho$ after a variable purchase. It is most ideal to strike a balance between damping the recovery by purchasing too early and delaying the effect of variables by purchasing too late. Hence the buying criteria were carefully set as below.

#### Active Strategies

[TODO: Insert theory strategies]

#### Idle Strategies

T1<blue>C34</blue> — Autobuy $c_3$ and $c_4$ only
T1<blue>C4</blue> — Autobuy $c_4$ only

### Theory 2: Differential Calculus

#### Strategy Basis

In T2, the theory progresses by using the rate of change of variables for growing the value of the next layer of variables. It works similar to $x_1$ to $x_8$ in $f(t)$ progression. Hence, one should allow time for layers of $q$ and $r$ variables to build up over time, which is the major reason for the long-term idle strategy in T2.

#### Non-Swapping Strategies

[TODO: Insert theory strategies]

#### T2<green>MS</green>

T2 milestones aid progression of the publication by either increasing a new layer of stacking, or increasing exponents of $q_1$ and $r_1$. By careful observation, one can conclude the effect of each of the milestones.

[TODO: Turn this into a table]
- 1st & 2nd Milestone - Unlock new $q$ and $r$ layers and hence increase $\rho$ gradually over time
- 3rd & 4th Milestone - Increase $q_1$ and $r_1$ exponent and hence increase $\rho$ instantaneously

With the first two milestones affecting $\rho$ gradually over time and the last two milestones affecting $\rho$ instantaneously, one would like to maximize the benefits from both sides by swapping between milestones, which forms the basis of "milestone swapping". By striking a balance between the time used in the two phases, one can benefit maximally from the advantages on both sides. Milestone swapping terminates at e250 $\rho$ when all milestone points are allocated in all available milestone slots.

**1-3 Milestones**
<blockquote style="font-family:monospace;">3>4 (10s) → 1 (40s) → 3>4 (10s) → 2 (40s) → <br>repeat → coast and publish</blockquote>

**4+ Milestones**
<blockquote style="font-family:monospace;">3>4>1>2 (10s) → 1>2>3>4 (40s) → <br>3>4>1>2 (10s) → 2>1>3>4 (40s) → <br>repeat →  coast and publish</blockquote>

[TODO: insert note to clarify notation]

### Theory 3: Linear Algebra

#### Strategy Basis

With the self-explanatory name of T3, the theory progresses using the concept of matrix multiplications. The theory first progresses with a 2 × 2 matrix with 2 variables ($\rho_1$ and $\rho_2$) followed by a 3 × 3 matrix with 3 variables ($\rho_3$ added), in which the different $\rho$'s assist in buying different variables. Since the result $\dot{\rho}$ growths take an additive nature, it is essential to recognize the dominant term in each of the row entries as well as the influence of a variable which was purchased using the $\rho$ of other row entries. To fully evaluate each of the entries and the relative strength of other entries, a series of strategies were proposed to accompany different stages of T3 when the dominating terms change. The execution of these strategies can have a large variety of activeness, from relatively active T3<green>Play</green> and T3<green>SNAX</green> strategies, to relatively idle targeted variable purchase strategies such as T3<blue>ρ2</blue> and T3<red>No</red> derivatives.

Near to the end of the publication, one would like not to purchase any $\rho_1$ variables, as $\rho_1$ is the only $\rho$ variable contributing to $\tau$, the end product of T3. This forms the later part of the story for T3<green>Play</green>, T3<green>SNAX</green> and T3<blue>ρ2</blue> strategies, when one discontinued buying variables that require $\rho_1$ currency.

#### T3<green>Play</green> Derivatives (Active)

[TODO: Insert theory strategies]

#### T3<green>SNAX</green> Derivatives (Active)

[TODO: Insert theory strategies]

#### T3<red>No</red> Derivatives (Double Chase)

[TODO: Insert theory strategies]

#### Others (Double Chase)

[TODO: Insert theory strategies]

### Theory 4: Polynomials

#### Active Strategies

[TODO: Insert theory strats]

#### Double Chase Strategies

[TODO: Insert theory strats]

#### Idle Strategies

T4<blue>C56</blue> — Autobuy $c_5$, $c_6$, $q_1$, and $q_2$ only
T4<blue>C4</blue> — Autobuy $c_4$, $q_1$, and $q_2$ only
T4<blue>C5</blue> — Autobuy $c_5$, $q_1$, and $q_2$ only
T4 — Autobuy all

### Theory 5: Logistic Function

#### Strategy Basis

Exploring the role of $c_2$ in $q$ growth is very essential for progression of the publication in T5. Due to the construction of the $\dot{q}$ formula in T5, one can observe that buying $c_2$ increases the maximum value of $q$ on one hand, yet it decreases/halves the speed of $q$ reaching its maximum value on the other hand. Therefore, it is very essential for one not to buy too many $c_2$ levels at once, especially at the beginning of the publication.

To remind users about the effect of $c_2$ brings to T5, the word "Delayed" will be used in subsequent T5 strategies to represent buying $c_2$ levels at an appropriate speed of not dampening the growth of $q$ too much at the beginning of the publication.

###### For more information, see T5 [equation description](/guides/theories-5-8/#theory-5-equation-description) and [Bicycle Analogy](/guides/theories-5-8/#bicycle-analogy-alternative-explanation-of-and-interactions).

#### Active Strategies

[TODO: Insert theory strats]

###### For more information on the human implementation of the strategies, see [pre-T9](/guides/theories-5-8/#active) or [post-T9](/guides/endgame/#t5-routing) explanations.

#### Idle Strategies

[TODO: Insert theory strats]

### Theory 6: Integral Calculus

#### Strategy Basis

Similar to other theories, T6 adopts an additive nature to the growth of $\rho$ using integration. Different variables dominate in different parts of the theory, the change continues until $c_5$ finally takes over in lategame due to comparatively slower decay. In response to this change, a variety of T6 strategies are proposed. The activity of a strategy depends on how one appreciates the variable strength during a publication, ranging from active T6<green>AI</green> strategy to idle univariable autobuy strategies.

#### Active Strategies

[TODO: Insert theory strats]

#### Doubling Chase Strategies

[TODO: Insert theory strats]

#### Hybrid Strategies

[TODO: Insert theory strats]

### Theory 7: Numerical Methods

#### Active Strategies

[TODO: Insert theory strats]

#### Doubling Chase Strategies

[TODO: Insert theory strats]

#### Idle Strategies

T7<red>No</red><blue>C12</blue> — Autobuy $q_1$, $c_3$, $c_4$, $c_5$, $c_6$ only
T7<red>No</red><blue>C123</blue> — Autobuy $q_1$, $c_4$, $c_5$, $c_6$ only
T7<red>No</red><blue>C1234</blue> — Autobuy $q_1$, $c_5$, $c_6$ only
T7 — Autobuy all

### Theory 8: Chaos Theory

#### Active Strategies

[TODO: Insert theory strats]

#### Semi-Idle Strategies

[TODO: Insert theory strats]

#### Double Chase Strategies

\* Strategies with <green>d</green> indicates buy $c_1$ if $c_1$ cost$< \frac{1}{10}min(c_2, c_4)$ cost otherwise autobuy.
T8<red>No</red><blue>C35</blue><green>d</green>, T8<red>No</red><blue>C35</blue> — Autobuy $c_1$\*, $c_2$, $c_4$ only
T8<red>No</red><blue>C5</blue><green>d</green>, T8<red>No</red><blue>C5</blue> — Autobuy $c_1$\*, $c_2$, $c_3$, $c_4$ only
T8<red>No</red><blue>C3</blue><green>d</green>, T8<red>No</red><blue>C3</blue> — Autobuy $c_1$\*, $c_2$, $c_4$, $c_5$ only
T8<green>d</green>, T8 — Autobuy all

## Custom Theories

### Weierstraß Sine Product

[TODO: Insert theory strats]

WSP<green>PostRecovery</green><red>Stop</red><blue>C1</blue> — WSP<red>Stop</red><blue>C1</blue> before recovery, WSP<green>d</green><red>Stop</red><blue>C1</blue> after recovery
WSP  — Autobuy all

### Sequential Limits

#### Strategies

[TODO: Insert theory strats]

#### SL<green>MS</green>

[TODO: Insert explanation]

__Milestone Swap Stages__

Class: breakdown;

| Stage   | Milestone Priority | Effect |
| ------- | ------------------ | ------ |
| Stage 1 | 4 → 3 → 1 → 2      | Boost $e-\gamma$ |
| Stage 2 | 2 → 1 → 4 → 3      | Boost $\dot{\rho_2}$ |
| Stage 3 | 1 → 2 → 4 → 3      | $\rho$ gain via. $\rho_2$ exponent |

__Milestone Swap Criteria__

[TODO: Insert criteria]

### Euler's Formula

[TODO: Insert theory strats]

### Convergents to √2

[TODO: Insert theory strats]

### Fractional Integration

[TODO: Insert theory strats]

### Fractal Patterns

[TODO: Insert theory strats]

### Riemann Zeta Function

[TODO: Insert theory strats]

### Magnetic Fields

[TODO: Insert theory strats]

### Basel Problem

[TODO: Insert theory strats]
