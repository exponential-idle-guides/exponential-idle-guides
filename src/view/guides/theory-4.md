---
title: "Theory 4 (35σ / 8k)"
author: "LE★Baldy & Snaeky"
contributors: "The Amazing Community"
order: 4
---

### Overview

We start out with just one term of constants \\(c_1c_2\\) and a changing term
\\(c_3q\\) with \\(q\\) being equal to \\(q(t+dt)=q+\dot{q}*dt\\) with \\(dt=0.1\\) for each tick. \\(\dot{q}\\) is
equal to an inverse equation of \\(\dot{q}=q_1q_2/1+q\\) with \\(q\\) being the current value.
The first milestone increases the power of \\(c_1\\) from \\(1.00\\) to \\(1.15\\). The
next 3 milestones we grab add more terms to the \\(ρ\\) equation with \\(c_4q_2\\),
\\(c_5q_3\\), and \\(c_6q_4\\). We end by increasing \\(\dot{q}\\) by a factor of \\(2^x\\) up to \\(2^3\\) or \\(8\\).


### Formula milestones

#### Initial

\\[\dot{ρ}=c_1c_2+c_3q\\]

\\[q(t+dt)=q+\frac{q_1q_2}{1+q}*dt\\]

#### First milestone

\\[\dot{ρ}=c_1c_2+c_3q+c_4q^2\\]

\\[q(t+dt)=q+\frac{q_1q_2}{1+q}*dt\\]

#### Second milestone

\\[\dot{ρ}=c_1c_2+c_3q+c_4q^2+c_5q^3\\]

\\[q(t+dt)=q+\frac{q_1q_2}{1+q}*dt\\]

#### Third milestone

\\[\dot{ρ}=c_1c_2+c_3q+c_4q^2+c_5q^3+c_6q^4\\]

\\[q(t+dt)=q+\frac{q_1q_2}{1+q}*dt\\]

#### Forth to sixth milestones

\\[\dot{ρ}=c_1c_2+c_3q+c_4q^2+c_5q^3+c_6q^4\\]

\\[q(t+dt)=q+2^3\frac{q_1q_2}{1+q}*dt\\]

#### Seventh milestone

\\[\dot{ρ}=c_1^{1.15}c_2+c_3q+c_4q^2+c_5q^3+c_6q^4\\]

\\[q(t+dt)=q+2^3\frac{q_1q_2}{1+q}*dt\\]

### Strategy

The optimal publication multiplier is 4-6. During publications, start
with x/1/3. After you will switch to 3/0/x. This will be repeated back
and forth throughout the publication. If you decide to manually buy and
don’t have max milestones, focus on \\(q_1\\) and \\(q_2\\). The next priority is
going from the highest \\(c_x\\) upgrade down to \\(c_1\\). Each lower priority should
be bought \\(e1\\) cheaper than the priority tier above. If you decide to
manually buy at max milestones, at the beginning of publications, buy
\\(c_1\\), \\(c_2\\), \\(c_3\\), \\(q_1\\), and \\(q_4\\). Once you are within \\(e1\\)-\\(e2\\) of your publication
mark, swap to only buying \\(c_3\\), \\(q_1\\), and \\(q_2\\).

### Milestone route

 - 0/0/0 → [3/0/0 → 3/0/2] → 3/0/3 → 3/1/3
 - or equivalently 1 → 1 → 1 → 3 → 3 → 3 → 2
