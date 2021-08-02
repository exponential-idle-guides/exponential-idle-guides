---
title: "Theories 1 to 4"
author: "LE★Baldy & Snaeky"
contributors: "The Amazing Community"
---

If you have any questions about the guide. You may DM Snaeky
(SnaekySnacks#1161) or Baldy (LE★Baldy#5759) on Discord.

### Graduation Routing
When within ee5 of the graduation, turn off autoprestige. It is faster
to cruise than recover and push. Best bet is use the Graduation
calculator on the [Phi*Tau Sheet]. Please [contribute to the Phi*Tau]
sheet before graduating.

 - 5k → 5.2k → 5.6k → 5.8k → 6k  (5.8k → 6k is a long stretch)
 - 6k → 7k
 - 7k → 8k
 - 8k → 8.4k →8.6k → 8.8k → 9k

### Student use routing
All routing below assumes you buy **all** available theories unless
explicitly stated because theories are important to start as soon as
possible as they function outside of the main game.

Use the [star calculator] (by Niedzielan, AfuroZamurai, and Milla) and
[student calculator] (by Eaux Tacous#1021).

Marks to use phi1 over phi3 (Above this \\(f(t)\\), \\(phi1>phi3\\)):

For a closer calculation base on your star count use the calculator above.

\\(f(t)\\) | Star Count (★) | Star Count (★) w/Accel(x2.85)
---        | ---            | ---
ee5k       | 1.38M          | 3.94M
ee5.5k     | 1.67M          | 4.76M
ee6k       | 1.99M          | 5.67M
ee6.5k     | 2.33M          | 6.65M
ee7k       | 2.70M          | 7.72M
ee7.5k     | 3.10M          | 8.86M
ee8k       | 3.53M          | 10.1M
ee8.5k     | 3.99M          | 11.4M
ee9k       | 4.47M          | 12.8M

### Theory Routing
Publications are equivalent to prestiges for \\(f(t)\\) so don't be afraid to
use them. However, the best publication multiplier is not known at the
time, but it does decrease over time. If you are close to a multiplier
you want, turn off autobuyer and let rho increase without buying
upgrades for a faster short-term increase before the publication (turn
on after you publish). Total \\(τ\\), found in the equation or at the top
of the screen, is a multiplicative combination of all \\(τ\\) from each
theory.

Don’t be afraid to skip getting all milestones to work on the next or a
better theory.

#### Theory 1 (20σ / 5k)
We start with the current tick’s term, \\(ρ_{n}\\), and a constant add-on to
obtain the value of the next tick, \\(ρ_{n+1}\\). This gives us an equation
equivalent to \\(ρ=at+constant\\), with a changing value \\(a\\) and a constant
that is the initial value of 1. Later when we add the \\(c_{3}ρ_{n-1}{}^{0.2}\\) term,
this is now saying that we are now adding each tick the value of \\(ρ\\) from
the previous tick ago with a constant \\(c_{3}\\) put to the power of \\(0.2\\). This
is the same with the next term \\(c_{4}ρ_{n-2}{}^{0.3}\\), with the value of \\(ρ\\) two ticks
ago and a multiplier \\(c_4\\) put to the power \\(0.3\\). When we multiply the
\\(c_1c_2\\) term by the term \\(1+ln(ρ)/100\\) changing the constant addition to
being based on the value of \\(ρ\\) from the previous tick with the value of
\\(1+ln(ρ)/100\\). The final milestone upgrade raises the exponent of \\(c_1\\) from
\\(1.00\\) to \\(1.05\\) to \\(1.10\\) to \\(1.15\\).

This theory also has its own tickspeed calculated by \\(q_{1}*q_{2}\\). This
lengthens the normal tick length of \\(0.1/sec\\) to that value which speeds
up the theory.

 - Initial
   \\[ρ_{n+1} = ρ_n + c_1c_2\\]
 - First Milestone
   \\[ρ_{n+1} = ρ_n + c_1c_2 + c_3ρ_{n-1}{}^{0.2}\\]
 - Second Milestone
   \\[ρ_{n+1} = ρ_n + c_1c_2 + c_3ρ_{n-1}{}^{0.2} + c_4ρ_{n-2}^{0.3}\\]
 - Third and Fouth Milestone
   \\[ρ_{n+1} = ρ_n + c_1{}^{1.05 or 1.10}c_2 + c_3ρ_{n-1}{}^{0.2} + c_4ρ_{n-2}{}^{0.3}\\]
 - Fifth Milestone
   \\[ρ_{n+1} = ρ_n + c_1{}^{1.10}c_2 \left( 1+\frac{ln(ρn)}{100} \right) \\\ + c_3ρ_{n-1}{}^{0.2} + c_4ρ_{n-2}{}^{0.3}\\]
 - Sixth and Final Milestone
   \\[ρ_{n+1} = ρ_n + c_1{}^{1.15}c_2 \left( 1+\frac{ln(ρn)}{100} \right) \\\ + c_3ρ_{n-1}{}^{0.2} + c_4ρ_{n-2}{}^{0.3}\\]

##### Strategy
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

Milestone Route
 - 0/0/1 → 0/0/1/1 → 0/1/1/1 → 3/1/1/1 or equivalently
 - 3 → 4 → 2 → 1 → 1 → 1


#### Theory 2 (25σ / 6k)
Overview:
This second theory is focusing on derivatives. Derivatives in mathematics are the rate of change of the function they are the derivative of. For the case of q1  and q2, q2 is the derivative of q1. This follows the power rule for derivatives q=atn ↔ q’=natn-1. In simpler terms, it works similar to how xi upgrades work for f(t) equation with continuous addition of the previous term*dt to the next xi+1 term, but with continuous addition of qi*dt to the term above qi-1. These two values of r1 and q1 are multiplied to produce the derivative of rho(ρ), shown by the newton derivative form ρ. This would give the equation of ρ to be ρ(t+dt)=ρ+ρ*dt. The other milestones besides more q and r derivatives increase the exponent of q and r respectively. The reason why q and r derivatives are more powerful long-term than the exponents is that they take time to build up and eventually overtake and keep increasing q1 and r1 while the exponents have a never-changing boost.
0 milestones:                             1 milestones:                  2 milestones:
q1(t+dt)=q1+q2*dt                 q1(t+dt)=q1+q2*dt+12q3dt2          q1(t+dt)=q1+q2*dt+12q3dt2+16q4dt3
 r1(t+dt)=r1+r2*dt                 r1(t+dt)=r1+r2*dt                  r1(t+dt)=r1+r2*dt
ρ=q1r1                         ρ=q1r1                      ρ=q1r
3-4 milestones:                 5-7 milestones:                  8-10 milestones:
q1(t+dt)=q1+q2*dt+12q3dt2+16q4dt3    q1(t+dt)=q1+q2*dt+12q3dt2+16q4dt3   q1(t+dt)=q1+q2*dt+12q3dt2+16q4dt3
r1(t+dt)=r1+r2*dt+12r3dt2+16r4dt3             r1(t+dt)=r1+r2*dt+12r3dt2+16r4dt3          r1(t+dt)=r1+r2*dt+12r3dt2+16r4dt3
ρ=q1r1                              ρ=q1r11.15                          ρ=q11.15r11.1
Strategy:
The optimal multiplier is pretty high and is not known before e30. The multipliers for active play we know at the moment are: e25-e100 is 1k to 10k; e100-e175 10k-100k.
Idle:
    For the Idle strategy, you want to prioritize your milestones on x/x/0/0 with q34 being more important than r34. If you have more than 5 milestones, you will prioritize q exponent over the r exponent. You will want to publish at about a 1000 multiplier, but larger multipliers are fine.
    Active:
    The goal of the active strategy is to grow q1 and r1 as much as possible while being able to take advantage of the exponent milestones. The active for T2 is on a 1-minute cycle: 40 seconds on 0/0/x/x milestones and 10-20 sec on x/x/0/0 milestones. You will start a publication on 0/0/x/x as the cost of the x/x/0/0 milestone upgrades are too large for you to get right away. When you can afford them, you will start the cycle. This is what you will do for the following number of milestones:
1 and 2 milestones; 0/0/1(2)/0 (40s) → 1(2)/0/0/0  (10s) → 0/1(2)/0/0 (10s)  → Repeat (1 min total)
3 milestones; 0/0/3/0  (40s) → 2/1/0/0 (20s) → 0/0/3/0  (40s) → 1/2/0/0 (20s) → Repeat (2min total / 2 1min’s)
4 milestones; 0/0/3/1  (40s) → 2/2/0/0 (20s) → Repeat (1 min total)
5+ milestones; you do the same thing as 4, but with more milestones in 0/0/x/x when you go to 2/2/0/0

Past e175, the active strat will become exponentially less effective. At e250, you would start to idle t2 overnight only. Until you are 1e350+ tau(τ) for theory 2, this is the best theory to run idle overnight.
Milestone Route:
0/0/0/0 → 1/0/0/0 → [2/0/0/0 →  2/2/0/0 → 2/2/3/0 → 2/2/3/2] → 2/2/3/3
or equivalently 1 → [1 → 2 → 2 → 3 → 3 → 3 → 4 → 4] → 4
Theory 3 (30σ / 7k):
Overview:
The basis of this theory and understanding how it works is based on matrix multiplication. Below I have put a color-coded image to display how matrix multiplication works: This gives the basis for why certain upgrades are more powerful than others. The exponents on b1, b2, and b3 are all directly affecting ρ1 production which is used for tau. An extra dimension roughly gives 50% more tau production as it adds an extra term to the ρ1 production.






Strategy:
    The optimal publication multiplier is about 2-3 without cruising and 3-4 with cruising. If you decide to play actively, there is a form of exponent swapping start to be aware of. This is not a difficult strategy, but it requires you to notice when a certain threshold happens. It happens when c11*b11.05 or 1.1<c12*b21.05 or 1.1 occurs. When this happens swap your exponents from b1 to b2 and you will get a little upgrade boost. It also allows for a slight push of ρ2 for upgrades to b2 and c12, but this is a lot less impactful and less noticeable. This strategy also works with b3 and c13 but is oftentimes not as common and good to note anyways.
    If you decide to buy manually, the focus areas are b1, b2, and b3 when e1 lower than c11, c12, and c13. These all directly boost the production of ρ1 which is used for tau. After this, if doing the active exponent swapping strat in the previous paragraph, the next focus will be on c21, c22, and c23 as these boost b2 production which is the more likely cause for the exponent swap to occur. This leaves the c31, c32, and c33 upgrades as the last priority. If you are not using the exponent swapping strat in the previous paragraph, then all the remaining upgrades are at equivalent priority.
    At the end of any publication, around a 2-3 multiplier, you should turn off b1 and c31 as they cost rho1. You will cruise until you get to a 3-4 multiplier. Publish and turn back on rho1 costing variables and repeat.

Milestone Route:
Active:
0/0/0 → [0/0/2 → 1/0/2/0 → 1/2/2/0 → 1/2/2/1] → 1/2/2/2
or equivalently [3 → 3 → 1 → 2 → 2 → 4] → 4
    Idle:
0/0/0 → 0/0/2 → 0/2/2 → 1/2/2/0 → 1/2/2/2
or equivalently 3 → 3 → 2 → 2 → 1 → 4 → 4


Theory 4 (35σ / 8k):
Overview:
    We start out with just one term of constants c1c2 and a changing term c3q with q being equal to q(t+dt)=q+q*dt with dt=0.1 for each tick. qis equal to an inverse equation of q=q1q21+qwith q being the current value. The first milestone increases the power of c1 from 1.00 to 1.15. The next 3 milestones we grab add more terms to the ρ equation with c4q2, c5q3, and c6q4. We end by increasing qby a factor of 2^x up to 23 or 8.
Initial:                    First Milestone:            Second Milestone:
ρ=c1c2+c3q                ρ=c1c2+c3q+c4q2            ρ=c1c2+c3q+c4    q2+c5q3
q(t+dt)=q+q1q21+q*dt            q(t+dt)=q+q1q21+q*dt            q(t+dt)=q+q1q21+q*dt
3rd Milestone:            4th-6th Milestone:            7th Milestone:
ρ=c1c2+c3q+c4    q2+c5q3+c6q4        ρ=c1c2+c3q+c4q2+c5q3+c6q4        ρ=c11.15c2+c3q+c4q2+c5q3+c6q4
q(t+dt)=q+q1q21+q*dt            q(t+dt)=q+23*q1q21+q*dt            q(t+dt)=q+23*q1q21+q*dt
Strategy:
    The optimal publication multiplier is 4-6. During publications, start with x/1/3. After you will switch to 3/0/x. This will be repeated back and forth throughout the publication. If you decide to manually buy and don’t have max milestones, focus on q1 and q2. The next priority is going from the highest cx upgrade down to c1. Each lower priority should be bought e1 cheaper than the priority tier above. If you decide to manually buy at max milestones, at the beginning of publications, buy c1, c2, c3, q1, and q4. Once you are within e1-e2 of your publication mark, swap to only buying c3, q1, and q2.
Milestone Route
0/0/0 → [3/0/0 → 3/0/2] → 3/0/3 → 3/1/3
or equivalently 1 → 1 → 1 → 3 → 3 → 3 → 2

Theory Tier List (Pre-9k+):
Includes where you should be around by 9k.
Theory 2 (Up to e300-e350)
Theory 1 (e200-215)
Theory 3 and Theory 4 (Up to e100-150 each)

How To Respec:
Students:
The button at the bottom labeled “Respec” removes all used phi(φ) in Research and gives you back without consequence. This allows for testing or reallocating easily. On the bottom right is located a list-shaped button. Pressing this will reveal the [-] buttons. These [-] buttons remove x levels from the selected research option. The amount of levels removed is based on the x1, x10, x25, x100, xMax cost option selected in the top right. On the right side of each research option, you can also see the total levels.
Milestones:
Unlike students, all Milestone sections already have the [-] button. This works in the same way as above. Here you can also find how many unused Milestones available at the top. On the right side of each Milestone, you can also find the current and max levels of each.

[Phi*Tau sheet]: https://docs.google.com/spreadsheets/d/1lz_V0rCr3usm1Wyqn2DEJdw6_7lhWIxXCYFmUbArV1c/edit#gid=305781148
[contribute to the Phi*Tau]: https://docs.google.com/forms/d/e/1FAIpQLSdDctG_t6NfaJ0XfaoJgIt_nBjX4alm7ID_koQSLf9u669gcQ/viewform
[star calculator]: https://conicgames.github.io/exponentialidle/students.html
[student calculator]: https://conicgames.github.io/exponentialidle/stars.html