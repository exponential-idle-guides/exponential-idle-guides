---
title: "Misc posts"
description: "Our guide for routing through and understanding theories 5 to 8. We provide some strategies to help you make progress."
author: "LE★Baldy, Snaeky, & Xelaroc"
contributors: "the Amazing Community"
draft: true
order: 11
---

{% import "embed-yt.njk" as yt %}d

## Distribution Overpushing

### What is distribution overpushing?

A naive way to push a theory distribution is to push all 8 original theories until they have similar tau/hour gains. Distribution overpushing is when you push certain theories such that their tau/hours are less than others. This seems to contradict optimal play, as generally you'd gain more students quicker if you push all theories to equal rates. However, some theories do not benefit as much from the 3rd level of the 9th Research in the Students tab (3R9). Therefore it makes more sense to push theories that don't benefit much from additional students first. This allows us to use the additional students to accelerate the rates of theories that do benefit significantly from 3R9. 

### How theories are affected by additional students

We will compare the effect of students on taudot, vs the effect of time on taudot for each theory. For the equations below, 'K' and 'A' are just constants, 'S' is the multiplier gained from having students (3R9 multiplier).

### Theory 1

We know that in theory 1, the c4 term dominates late game: <br>
\\(\dot{\rho} = KS\rho^{0.3}\\)
\\(\rho = (KSt)^{0.7}\\)

Despite the 0.7 power, we can conclude that sigma and time affect rho equally. 


### Theory 2

\\(\dot{q_4} and \dot{r_4) = A; so q_4 and r_4 ~= At\\)

By the same logic: <br>
\\(\dot{q_3} and \dot{r_3) = At; so q_3 and r_3 ~= At^2\\)
\\(\dot{q_2} and \dot{r_2) = A; so q_2 and r_2 ~= At^3\\)
\\(\dot{q_1} and \dot{r_1) = A; so q_1 and r_1 ~= At^4\\)
\\(\dot{\rho} ~= (At^{4}At^{4})^{1.15} ~= At^{9.2}\\)
\\(\rho ~= KSt^{10.2}\\)

Here we see that time affects rho 10.2 magnitude higher than extra sigma. 

### Theory 3

\\(all \dot{\rho} ~= A so \rho ~= KSt\\)

Sigma and time affect rho equally. 

### Theory 4

Late game c3 term dominates so: <br>

\\(\dot{\rho} ~= Ac_3q \\)
\\(\dot{q} ~= \frac{A}{1+q} \\)

Solving the differential equation yields q is proportional to \\(\sqrt{t} \\) <br>

\\(\dot{\rho} ~= Ac_3\sqrt{t}\\)
\\(\rho ~= KSt^{1.5}\\)

Time affects rho 1.5 magnitude more than sigma.

### Theory 5

Late game we can treat c2 gains as instantaneous, so q is treated as a constant.<br>

So \\(\dot{rho} ~= A only\\)
\\(\rho ~= KSt\\)

Sigma and time affect rho equally. 

### Theory 6

Late game c5 term dominates. <br>

\\(\rho ~= Ac_5qr^2 after integrating\\)
\\(\dot{r} and \dot{q} ~= A, so r and q ~= At\\)
\\(\rho ~= KSt^3\\)

Time affects rho 3 magnitude more than sigma.

### Theory 7

Late game c6 term dominates. <br>

\\(\dot{\rho} ~= Ac_6\sqrt{\frac{\rho_2}{\rho_1}} after partial differentiation\\) 

However rho2 / rho1 is effectively constant. This is because if rho2 is higher than rho1, rho1 will eventually catch up to rho2 and vice versa. <br>

Therefore: \\(\dot{\rho} ~= Ac_6\\)
\\(\rho ~= KSt\\)

Sigma and time affect rho equally. 

### Theory 8

The cost value scalings for c3, c4, c5 are the same. Since they are additive with each other, we can simplify the equation as: <br>

\\(\dot{\rho} ~= A\sqrt{Bc3}\\)
\\(\dot{\rho} ~= A\\)
\\(\rho ~= KSt \\)

Sigma and time affect rho equally. 
