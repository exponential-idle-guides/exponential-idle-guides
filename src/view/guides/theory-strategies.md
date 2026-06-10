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

## <light-blue>Coast</light-blue> Strategy

Whenever the strategies include the word <light-blue>Coast</light-blue>, it indicates the end point of variable purchases in a publication. It generally appears in all strategies possibly, with the substring after the name of the strategies being the last variable purchase level in the publication. After such conditions are fulfilled, one should not buy any variables and wait until the $\rho$/$\tau$ reaches the indicated location provided by [the sim](https://exponential-developers.github.io/sim-3.0/).

For example, if a result of "T6<yellow>AI</yellow><light-blue>Coast q1: 425 r1: 36</light-blue>" strat and max rho "5e204" are provided by the sim. One should be expected to complete the publication with

- the strategy indication listed in T6<yellow>AI</yellow><light-blue>Coast</light-blue>;
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

[TODO: Insert theory strategies]

#### Idle Strategies

T1<blue>C34</blue> — Autobuy $c_3$ and $c_4$ only
T1<blue>C4</blue> — Autobuy $c_4$ only

### Theory 2: Differential Calculus

#### Strategy Basis

In T2, the theory progresses by using the rate of change of variables for growing the value of the next layer of variables. It works similar to $x_1$ to $x_8$ in $f(t)$ progression. Hence, one should allow time for layers of $q$ and $r$ variables to build up over time, which is the major reason for the long-term idle strategy in T2.

#### Non-Swapping Strategies

[TODO: Insert theory strategies]

#### T2<orange>MS</orange>/T2<orange>QS</orange> <orange>Orange</orange><yellow>Yellow</yellow>

<orange>Orange</orange><yellow>Yellow</yellow>

T2 milestones aid progression of the publication by either increasing a new layer of stacking, or increasing exponents of $q_1$ and $r_1$. By careful observation, one can conclude the effect of each of the milestones.

[TODO: Turn this into a table]
- 1st & 2nd Milestone - Unlock new $q$ and $r$ layers and hence increase $\rho$ <u>gradually over time</u>
- 3rd & 4th Milestone - Increase $q_1$ and $r_1$ exponent and hence increase $\rho$ <u>instantaneously</u>

With the first two milestones affecting $\rho$ gradually over time and the last two milestones affecting $\rho$ instantaneously, one would like to maximize the benefits from both sides by swapping between milestones, which forms the basis of "milestone swapping". By striking a balance between the time used in the two phases, one can benefit maximally from the advantages on both sides. Milestone swapping terminates at e250 $\rho$ when all milestone points are allocated in all available milestone slots.

<u>Milestone Swap Stages and Criteria</u>

Caption: T2<orange>MS</orange>;
Class: breakdown;

| Stage   | Milestone Priority | Duration | Effect             |
| ------- | ------------------ | -------- | ------------------ |
| <orange>Stage 1</orange> | 3 → 4 → 1 → 2 | 10 sec | $\rho$ gain via. $q$, $r$ exponents |
| <orange>Stage 2</orange> | 1 → 2 → 3 → 4 | 40 sec | Boost $q$, $r$ ($q$ priority)       |
| <orange>Stage 1</orange> | 3 → 4 → 1 → 2 | 10 sec | $\rho$ gain via. $q$, $r$ exponents |
| <orange>Stage 2</orange> | 2 → 1 → 3 → 4 | 40 sec | Boost $r$, $q$ ($r$ priority)       |

Caption: T2<orange>QS</orange>
<br>
Swap from <orange>Stage 2</orange> to <orange>Stage 3</orange> whn the corresponding Publication Multiplier is reached.;
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

Similar to other theories, T6 adopts an additive nature to the growth of $\rho$ using integration. Different variables dominate in different parts of the theory, the change continues until $c_5$ finally takes over in lategame due to comparatively slower decay. In response to this change, a variety of T6 strategies are proposed. The activity of a strategy depends on how one appreciates the variable strength during a publication, ranging from active T6<yellow>AI</yellow> strategy to idle univariable autobuy strategies.

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

\* Strategies with <yellow>d</yellow> indicates buy $c_1$ if $c_1$ cost$<u \frac{1}{10}\min{\left(c_2, c_4\right)}$ cost otherwise autobuy.
T8<red>No</red><blue>C35</blue><yellow>d</yellow>, T8<red>No</red><blue>C35</blue> — Autobuy $c_1$\*, $c_2$, $c_4$ only
T8<red>No</red><blue>C5</blue><yellow>d</yellow>, T8<red>No</red><blue>C5</blue> — Autobuy $c_1$\*, $c_2$, $c_3$, $c_4$ only
T8<red>No</red><blue>C3</blue><yellow>d</yellow>, T8<red>No</red><blue>C3</blue> — Autobuy $c_1$\*, $c_2$, $c_4$, $c_5$ only
T8<yellow>d</yellow>, T8 — Autobuy all

## Custom Theories

### Weierstraß Sine Product

[TODO: Insert theory strats]

[TODO: Turn this into a custom table type that auto-adds the — (see colgroup)]
WSP<red>Stop</red><blue>C1</blue><light-blue>PostRecovery</light-blue> — WSP<red>Stop</red><blue>C1</blue> before recovery, WSP<yellow>d</yellow><red>Stop</red><blue>C1</blue> after recovery
WSP — Autobuy all

### Sequential Limits

#### Strategies Summary

[TODO: Insert theory strats]

#### Milestone Swap (<orange>MS</orange>)

[TODO: Insert explanation]

<u>Milestone Swap Stages</u>

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
| e275 - e300 | 2   | REDX | 1    |

### Euler's Formula

[TODO: Insert theory strats]

EF  — Autobuy all

### Convergents to √2

#### Strategies Summary

[TODO: Insert theory strats]

#### Milestone Swap (<orange>MS</orange>)

[TODO: Insert explanation]

<u>Milestone Swap Stages</u>

Class: breakdown;

| Stage                    | Milestone Priority | Effect             |
| ------------------------ | ------------------ | ------------------ |
| <orange>Stage 1</orange> | 2 → 3 → 1          | Boost $\dot{q}$    |
| <orange>Stage 2</orange> | 1 → 2 → 3          | Boost $\dot{\rho}$ |

<u>Milestone Swap Criteria</u>

Start the publication at <orange>Stage 1</orange>. Swap to <orange>Stage 2</orange> if

1. <u>Current</u> $\rho\times\rho\text{ ratio*} < \min{\left(c_2, 2\times n\right)}$ cost;</br>**OR**
2. <u>Current</u> $\rho < \frac{1}{2} q_2$ cost after recovery.

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

#### Double Chase (<yellow>d</yellow>)

[TODO: insert theory strat]

#### Milestone Swap (<orange>MS</orange>)

[TODO: Add Part]

#### Permenant Milestone Swap (<orange>PermaSwap</orange>)

[TODO: Add Part]

### Fractal Patterns

[TODO: Insert theory strats]

### Riemann Zeta Function

[TODO: Insert theory strats]

### Magnetic Fields

[TODO: Insert theory strats]

### Basel Problem

[TODO: Insert theory strats]
