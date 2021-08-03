---
title: "Theory 2 (25σ / 6k)"
author: "LE★Baldy & Snaeky"
contributors: "The Amazing Community"
order: 2
---

### Overview

This second theory is focusing on derivatives. Derivatives in
mathematics are the rate of change of the function they are the
derivative of. For the case of \\(q_1\\)  and \\(q_2\\), \\(q_2\\) is
the derivative of \\(q_1\\). This follows the power rule for derivatives:

\\[q=at^n ↔ q’=nat^{n-1}\\]

In simpler terms, it works similar to how
\\(x_i\\) upgrades work for \\(f(t)\\) equation with continuous addition
of the previous \\(term*dt\\) to the next \\(x_{i+1}\\) term, but with
continuous addition of \\(q_i*dt\\) to the term above \\(q_{i-1}\\).
These two values of \\(r_1\\) and \\(q_1\\) are multiplied to produce the derivative
of rho(\\(ρ\\)), shown by the newton derivative form \\(\dot{ρ}\\). This would give the
equation of \\(ρ\\) to be \\(ρ(t+dt)=\dot{ρ}+ρ1*dt\\). The other milestones besides more \\(q\\)
and \\(r\\) derivatives increase the exponent of \\(q\\) and \\(r\\) respectively. The
reason why \\(q\\) and \\(r\\) derivatives are more powerful long-term than the
exponents is that they take time to build up and eventually overtake and
keep increasing \\(q_1\\) and \\(r_1\\) while the exponents have a never-changing
boost.

### Formula milestones

#### Initial

\\[q_1(t+dt)=q_1+q_2*dt\\]

\\[r_1(t+dt)=r_1+r_2*dt\\]

\\[\dot{ρ}=q_1r_1\\]

#### First milestone

\\[q_1(t+dt)=q_1+q_2*dt+12q_3dt^2\\]

\\[r_1(t+dt)=r_1+r_2*dt\\]

\\[\dot{ρ}=q_1r_1\\]

#### Second milestone

\\[q_1(t+dt)=q_1+q_2*dt+12q_3dt^2+16q_4dt^3\\]

\\[r_1(t+dt)=r_1+r_2*dt\\]

\\[\dot{ρ}=q_1r\\]

#### Third and forth milestones

\\[q_1(t+dt)=q_1+q_2*dt+12q_3dt^2+16q_4dt^3\\]

\\[r_1(t+dt)=r_1+r_2*dt+12r_3dt^2+16r_4dt^3\\]

\\[\dot{ρ}=q_1r_1\\]

#### Fifth to seventh milestones

\\[q_1(t+dt)=q_1+q_2*dt+12q_3dt^2+16q_4dt^3\\]

\\[r_1(t+dt)=r_1+r_2*dt+12r_3dt^2+16r_4dt^3\\]

\\[\dot{ρ}=q_1r_1^{1.15}\\]

#### Eight to tenth milestones

\\[q_1(t+dt)=q_1+q_2*dt+12q_3dt^2+16q_4dt^3\\]

\\[r_1(t+dt)=r_1+r_2*dt+12r_3dt^2+16r_4dt^3\\]

\\[\dot{ρ}=q_1^{1.15}r_1^{1.1}\\]

### Strategy

The optimal multiplier is pretty high and is not known before \\(e30\\).
The multipliers for active play we know at the moment are:\\(e25\\)-\\(e100\\)
is \\(1k\\) to \\(10k\\); \\(e100\\)-\\(e175\\) \\(10k\\)-\\(100k\\).

#### Idle
For the idle strategy, you want to prioritize your milestones on x/x/0/0
with \\(q_{3}\\) and \\(q_{4}\\) being more important than \\(r_{3}\\)
and \\(r_{4}\\). If you have more than 5 milestones, you will prioritize
\\(q\\) exponent over the \\(r\\) exponent. You will want to publish at
about a \\(1000\\) multiplier, but larger multipliers are fine.

#### Active
The goal of the active strategy is to grow \\(q_1\\) and \\(r_1\\) as
much as possible while being able to take advantage of the exponent
milestones. The active for T2 is on a 1-minute cycle: 40 seconds on
0/0/x/x milestones and 10-20 sec on x/x/0/0 milestones. You will start a
publication on 0/0/x/x as the cost of the x/x/0/0 milestone upgrades are
too large for you to get right away. When you can afford them, you will
start the cycle. This is what you will do for the following number of
milestones:

 - 1 and 2 milestones; 0/0/1(2)/0 (40s) → 1(2)/0/0/0  (10s) → 0/1(2)/0/0 (10s)  → Repeat (1 min total)
 - 3 milestones; 0/0/3/0  (40s) → 2/1/0/0 (20s) → 0/0/3/0  (40s) → 1/2/0/0 (20s) → Repeat (2min total / 2 1min’s)
 - 4 milestones; 0/0/3/1  (40s) → 2/2/0/0 (20s) → Repeat (1 min total)
 - 5+ milestones; you do the same thing as 4, but with more milestones in 0/0/x/x when you go to 2/2/0/0

Past \\(e175\\), the active strat will become exponentially less
effective. At \\(e250\\), you would start to idle T2 overnight only.
Until you are \\(1e350\\)+ \\(τ\\) for theory 2, this is the best theory
to run idle overnight.

### Milestone Route
 - 0/0/0/0 → 1/0/0/0 → [2/0/0/0 →  2/2/0/0 → 2/2/3/0 → 2/2/3/2] → 2/2/3/3, or equivalently
 - 1 → [1 → 2 → 2 → 3 → 3 → 3 → 4 → 4] → 4
