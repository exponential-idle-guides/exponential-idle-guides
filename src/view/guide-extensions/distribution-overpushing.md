---
title: "Distribution Overpushing"
description: "Introduction to the concept of distribution overpushing."
author: "Playspout"
contributors: "the Amazing Community"
order: 3
tags: T9+ Recommendations
---

## What is distribution overpushing?

A greedy way to push a theory distribution is to push all 8 original theories until they have similar \\(τ\\)/hour gains. However, this is not necessarily optimal for long term \\(τ\\) gains. Distribution overpushing is when you push certain theories such that their \\(τ\\)/hours are less than others. This seems to contradict optimal play, as generally you'd gain more students quicker if you push all theories to equal rates. However, some theories do not benefit as much from the 3rd level of the 9th Research in the Students tab (3R9). Therefore it makes more sense to push theories that don't benefit much from additional students first. This allows us to use the additional students to accelerate the rates of theories that do benefit significantly from 3R9.

## How theories are affected by additional students

We will compare the effect of students on \\(\dot{τ}\\), vs the effect of time on \\(\dot{τ}\\) for each theory. For the equations below, 'K' and 'A' are just constants, 'S' is the multiplier gained from having students (3R9 multiplier).

### Theory 1

We know that in Theory 1, the \\(c_4\\) term dominates late game:

\\(\dot{\rho} = KS\rho^{0.3}\\)

\\(\rho = (KSt)^{0.7}\\)

Despite the 0.7 exponent, we can conclude that σ and time affect \\(\rho\\) equally.

### Theory 2

\\(\dot{q_4}, \dot{r_4} = A; q_4, r_4 ~= At\\)

By the same logic:

\\(\dot{q_3}, \dot{r_3} = At; q_3, r_3 ~= At^2\\)

\\(\dot{q_2}, \dot{r_2} = At^2; q_2, r_2 ~= At^3\\)

\\(\dot{q_1}, \dot{r_1} = At^3; q_1, r_1 ~= At^4\\)

\\(\dot{\rho} ~= (At^{4}At^{4})^{1.15} ~= At^{9.2}\\)

\\(\rho ~= KSt^{10.2}\\)

Here we see that time affects \\(\rho\\) 10.2 magnitudes more than extra σ.

### Theory 3

\\(\dot{\rho_n} ~= A, \rho ~= KSt \\)

Sigma and time affect \\(\rho\\) equally.

### Theory 4

Late game \\(c_3\\) term dominates so:

\\(\dot{\rho} ~= Ac_3q \\)

\\(\dot{q} ~= \frac{A}{1+q} \\)

Solving the differential equation yields $q$ is proportional to \\(\sqrt{t} \\)

\\(\dot{\rho} ~= Ac_3\sqrt{t}\\)

\\(\rho ~= KSt^{1.5}\\)

Time affects \\(\rho\\) 1.5 magnitudes more than σ.

### Theory 5

Late game we can treat \\(c_{2}\\) gains as instantaneous, so $q$ is treated as a constant.

\\(\dot{\rho} ~= A \\) only

\\(\rho ~= KSt\\)

Sigma and time affect \\(\rho\\) equally.

### Theory 6

Late game \\(c_5\\) term dominates.

\\(\rho ~= Ac_5qr^2 \\) after integrating

$\dot{r}, \dot{q} \sim= A;  r, q \sim= At$

\\(\rho ~= KSt^3\\)

Time affects \\(\rho\\) 3 magnitudes more than σ.

### Theory 7

Late game \\(c_4\\) term dominates.

\\(\dot{\rho} ~= Ac_6\sqrt{\frac{\rho_2}{\rho_1}} \\) after partial differentiation

However, \\(\frac{\rho_2}{\rho_1}\\) is effectively constant. This is because if \\(\rho_2\\) is higher than \\(\rho_1\\), \\(\rho_1\\) will eventually catch up to \\(\rho_2\\) and vice versa.

Therefore: \\(\dot{\rho} ~= Ac_6\\)

\\(\rho ~= KSt\\)

Sigma and time affect \\(\rho\\) equally.

### Theory 8

The cost value scaling for \\(c_3\\), \\(c_4\\), \\(c_5\\) are the same. Since they are additive with each other, we can simplify the equation as:

\\(\dot{\rho} ~= A\sqrt{Bc_3}\\)

\\(\dot{\rho} ~= A\\)

\\(\rho ~= KSt \\)

Sigma and time affect \\(\rho\\) equally.

From the equations above, we can conclude that for theories 1, 3, 5, 7, and 8, \\(\dot{\rho}\\) and σ are linearly dependent on each other.

For Theory 4, \\(\dot{\rho}^{1.5}\\) is proportional to σ.

For Theory 6, \\(\dot{\rho}^{3}\\) is proportional to σ.

For Theory 2, \\(\dot{\rho}^{10.2}\\) is proportional to σ.

These conclusions imply that for Theory 2 for example, increasing σ hardly affects \\(\dot{\rho}\\).

## Overpushing Coefficients

From previous workings, the overpushing coefficients are:

Class: strat;
Caption: Overpush Coefficients;

|    |      |    |   |
| -- | ---- | -- | - |
| T1 | 1    | T5 | 1 |
| T2 | 10.2 | T6 | 3 |
| T3 | 1    | T7 | 1 |
| T4 | 1.5  | T8 | 1 |

This means that for 'perfect' overpush, we should push the maximum of {\\(\dot{τ}_1\\), \\(10.2*\dot{τ}_2\\), \\(\dot{τ}_3\\), \\(1.5*\dot{τ}_4\\), \\(\dot{τ}_5\\), \\(3*\dot{τ}_6\\), \\(\dot{τ}_7\\), \\(\dot{τ}_8\\)}. This will maximize long term \\(τ\\) gain, assuming everything else is equal.
