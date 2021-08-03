---
title: "Theory 1 (20σ / 5k)"
author: "LE★Baldy & Snaeky"
contributors: "The Amazing Community"
order: 1
---

### Overview

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

This theory also has its own tickspeed calculated by \\(q_{1}*q_{2}\\). This
lengthens the normal tick length of \\(0.1/sec\\) to that value which speeds
up the theory.

### Formula milestones

#### Initial
\\[ρ_{n+1} = ρ_n + c_1c_2\\]

#### First Milestone
\\[ρ_{n+1} = ρ_n + c_1c_2 + c_3ρ_{n-1}^{0.2}\\]

#### Second Milestone
\\[ρ_{n+1} = ρ_n + c_1c_2 + c_3ρ_{n-1}^{0.2} + c_4ρ_{n-2}^{0.3}\\]

#### Third and Fouth Milestone
\\[ρ_{n+1} = ρ_n + c_1^{1.05\text{ or }1.10}c_2 + c_3ρ_{n-1}^{0.2} + c_4ρ_{n-2}^{0.3}\\]

#### Fifth Milestone
\\[ρ_{n+1} = ρ_n + c_1^{1.10}c_2 \left( 1+\frac{ln(ρn)}{100} \right) \\\ + c_3ρ_{n-1}^{0.2} + c_4ρ_{n-2}^{0.3}\\]

#### Sixth and Final Milestone
\\[ρ_{n+1} = ρ_n + c_1^{1.15}c_2 \left( 1+\frac{ln(ρn)}{100} \right) \\\ + c_3ρ_{n-1}^{0.2} + c_4ρ_{n-2}^{0.3}\\]

### Strategy
The publication multiplier has no optimal fit, as it fluctuates a lot,
but here is known: 4-6 to start; 3-4 between 1e100 and 1e150; the
publication Multiplier Oscillates between 2.5 and 5 past e150. Once you
get your second milestone, you can turn off \\(c_1\\) and \\(c_2\\).

The active strat follows but only works when you have all milestones
past e150). T1 is the only theory where the recent value of \\(ρ\\)
influences the rate of change of \\(ρ\\) therefore buying a variable as
soon as you can afford it will slow your progress. Lategame, buying
upgrades immediately will slow you more than the benefit of the upgrade
because \\(c_3\\) & \\(c_4\\) dominate. If the next level costs \\(10ρ\\)
and you have \\(11ρ\\) buying it will reduce to \\(ρ_{n+1}\\) to \\(1\\)
you are reducing your \\(ρ_{n+1}\\) by roughly a factor of \\(10\\).
There are \\(3\\) terms that influence the rate of change of \\(ρ\\).
All are affected by the previous state of \\(ρ\\). Let’s ignore the
first since it has such a small influence and consider the above case to
determine when an upgrade would be better. The values below are to be
only used when you are past \\(e150 τ\\) and max milestones. Buy each
variable when \\(ρ_1\\) is \\(x\\) times larger than that variable’s cost.
For example, if \\(q_1\\) costs \\(2\\), buy it when \\(ρ_1\\) is
\\(2*5.0=10 ρ_1\\).

Variable | Multiplier
--- | ---
\\(c_1\\) | 10000
\\(c_2\\) | 1000
\\(c_3\\) | 2
\\(c_4\\) | 1.01
\\(q_1\\) | 5.0
\\(q_2\\) | 1.15

### Milestone Route

 - 0/0/1 → 0/0/1/1 → 0/1/1/1 → 3/1/1/1 or equivalently
 - 3 → 4 → 2 → 1 → 1 → 1
