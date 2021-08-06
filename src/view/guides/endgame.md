---
title: "T9 to Endgame"
subtitle: "The World of Grinding and R9 Boost"
author: "LE★Baldy"
contributors: "the Amazing Community"
draft: true
order: 3
---

### Routing

There is no current routing. Figure it out based on your tau and the slowdown of your graduation.

Make sure to use the [calculators and simulators](/#other-resources).

### Push f(t) with 3R9 seapping

1. Memorize your student distributions with and without 30 R9 students.
2. Auto prestige off (if you are using the new equation, you do not need to do this)
3. Wait till f(t) stops growing without student respec
4. Start accel (preferably keep it between prestiges)
5. Respec the 30 students then respec back
6. Potentially sit here to stack t and repeat the previous 2 steps. Only do it when near the grad mark.
7. Prestige (and turn back on)
8. Repeat when prestige catches back up.

<iframe width="560" height="315" src="https://www.youtube.com/embed/d7mWhOkD7TM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### The new prestige equation

```
((timer(d(ln(db/b+1)/pt) < 0) > 3 * tr && db > b && ((d(smooth(10^10^10^phi,1)) > 1) && timer(abs(d(log10(phi+1))) < 50) > 15))&&phi>1) || ((timer(d(ln(db/b+1)/pt) < 0) > 3 * tr) &&(phi >=1 && phi <= 1))
```

### Idle and active buy strats

| | Idle | Active |
| --- | --- | --- |
| T1 | Disable c1 c2 | See [T1 routing](#t1-routing) later in this guide |
| T2 | All on | q4/r4 → q3/r3 → etc |
| T3 | Disable c11, c13, c21, c33 | Same as idle with b2→b3→b1 e1 lower buying + cruising at end |
| T4 | Disable all but c3, q1, q2 | Auto c3 and q2. Manual q1. Disable rest. |
| T5 | See [T5 routing](#t5-routing) later in this guide | Also see T5 routing |
| T6 | Disable c3, c4 | Disable c3 c4. Auto q2, r2, c2, c5. Manual rest when e1 cheaper. |
| T7 | Disable c1, c2, c3 | Same as Idle |
| T8 | All on | Same as Idle but doublings chase with c1, c2. |

### Equation for when to publish

From Big Freeze:

```
ln(tau/smooth(tau, (timer(d(tau)<=0) < 900)*e99) ) / (timer( timer(d(tau)<=0)<900 ) + 900)
```

Pick a time, for example 900s, such that (maximum time between purchases)<900s<(minimum time to get to pub mark)

### Theory comparison graphs

#### Ideal multiplier at 230 students

![Ideal multiplier at 230 students](/images/ideal-multiplier-230-students.png)

#### Tau/hour at 230 students

This shows the current best strategies in a tau/hour graph with 230 students.

![Ideal multiplier at 230 students](/images/tau-hour-230-students.png)

### Relative theory power endgame

All theories were brought down to a tau/hour and recorded the relative
\\(\tau\\) of each. Based [Antharion's Sim](http://bit.ly/anthsim).
These are ordered from the best to worst.

#### T6 Integral Calculus

T6 is the best idle theory coming from its natural ability to hold
consistent growth for very long stretches with minimal publication
decay. This theory has the slowest and best decay rate of any theory.
The higher tau this theory goes the better it becomes relative to
others. It is worse than T5 until ~e750-775 tau, with no c34 buying.
~~[Eaux Tacous](https://media.discordapp.net/attachments/760864357197414410/825487093231910923/Mematic_20210327_225037.jpg)
[simps](https://media.discordapp.net/attachments/760864357197414410/825487093231910923/Mematic_20210327_225037.jpg)
[this theory.](https://media.discordapp.net/attachments/760864357197414410/825487093231910923/Mematic_20210327_225037.jpg)~~
 (~e790-810 tau with c34 buying)

e1 \\(\tau\\)/hour (~e4406 \\(\tau\\)) | e0.5 \\(\tau\\)/hour (~e4716 \\(\tau\\)) | e0.1 \\(\tau\\)/hour (~e5449 \\(\tau\\))
--- | --- | ---
99.52%τ = e766.605 | 105.91%τ=858.22 | 119.56%τ = e1082.799

#### T5 Logistic Function

T5 is very slow in the beginning, but one of the most powerful theories. It is the most active theory with c2 management at the start of publications being key. It is the best theory until ~e750-775 tau.

e1 \\(\tau\\)/hour (~e4406 \\(\tau\\)) | e0.5 \\(\tau\\)/hour (~e4716 \\(\tau\\)) | e0.1 \\(\tau\\)/hour (~e5449 \\(\tau\\))
--- | --- | ---
100%τ = e770.323 | 100%τ = e810.345 | 100%τ = e905.622

#### T1 Recurrence Relations

T1 is a semi-idle theory. It contains some manual buy strats. Without manual buying, this theory is on par with T7 but barely edges it over T3 long run with manual buy strats. Loses to T4 eventually, but takes a long time.

e1 \\(\tau\\)/hour (~e4406 \\(\tau\\)) | e0.5 \\(\tau\\)/hour (~e4716 \\(\tau\\)) | e0.1 \\(\tau\\)/hour (~e5449 \\(\tau\\))
--- | --- | ---
66.33%τ = e510.922 | 66.98%τ = e542.748 | 67.80%τ = e614.044

#### T4 Polynomials

T4 starts behind T1 and T3 but overtakes at about ~e550-580 tau because of a superior decay rate.

e1 \\(\tau\\)/hour (~e4406 \\(\tau\\)) | e0.5 \\(\tau\\)/hour (~e4716 \\(\tau\\)) | e0.1 \\(\tau\\)/hour (~e5449 \\(\tau\\))
--- | --- | ---
65.15%τ = e501.856 | 66.54%τ = e539.169 | 69.68%τ = e631

#### T3 Linear Algebra

T3 has a relatively good recovery rate compared to the other theories but its tau/time decay gets to it.

e1 \\(\tau\\)/hour (~e4406 \\(\tau\\)) | e0.5 \\(\tau\\)/hour (~e4716 \\(\tau\\)) | e0.1 \\(\tau\\)/hour (~e5449 \\(\tau\\))
--- | --- | ---
66.04%τ = e508.699 | 66.21%τ = e536.565 | 67.11%τ = e607.78

#### T7 Numerical Methods

Begins better than most theories, but due to the second-worst decay rate ahead of T8, it falls behind by the soft cap.

e1 \\(\tau\\)/hour (~e4406 \\(\tau\\)) | e0.5 \\(\tau\\)/hour (~e4716 \\(\tau\\)) | e0.1 \\(\tau\\)/hour (~e5449 \\(\tau\\))
--- | --- | ---
62.2%τ = e479.166 | 62.52%τ = e506.63 | 63.24%τ = e572.755

#### T8 Chaos Theory

T8 is great for a quick burst of tau after e60, but has very bad decay leaving T8 at a lot less power.

e1 \\(\tau\\)/hour (~e4406 \\(\tau\\)) | e0.5 \\(\tau\\)/hour (~e4716 \\(\tau\\)) | e0.1 \\(\tau\\)/hour (~e5449 \\(\tau\\))
--- | --- | ---
57.31%τ = e441.501 | 56.49%τ = e457.763 | 55.11%τ = e499.113

#### T2: Differential Calculus

T2 is terrible simply because it has the slowest recovery rate after
publication of any theory (longer than idle T6 oftentimes). T2&#39;s
decay is solid as it is linear, but the recovery rate is just too great.
Overtakes T8 at ~e450-460 tau.

e1 \\(\tau\\)/hour (~e4406 \\(\tau\\)) | e0.5 \\(\tau\\)/hour (~e4716 \\(\tau\\)) | e0.1 \\(\tau\\)/hour (~e5449 \\(\tau\\))
--- | --- | ---
55.5%τ = e427.552 | 57.37%τ = e464.88 | 59.27%τ = e507.78

### Idle vs manual strat efficiency

From Antharion, the ratio represents \\(log(\tau)/hour\\) efficiency of
idle vs manual buying strategies.

| | Manual | Auto | Ratio
|---|---|---|---
| T1 | 1.21579  | 0.965926 | 1.25868
| T2 | 0.677375 | 0.677375 | 1
| T3 | 1.42296  | 1.15424  | 1.23281
| T4 | 0.674164 | 0.589581 | 1.14346
| T5 | 1.31154  | 0.419708 | 3.12489
| T6 | 1.14383  | 0.993886 | 1.15544
| T7 | --       | 1.23645  | TBD
| T8 | 1.51303  | 1.29569  | 1.16774

### Theory Routing

If a theory is not listed below, then use the idle vs manual chart and
the ideal multiplier chart.

#### T1 routing

The optimal multiplier cycles between \\(2.5\\) – \\(5\\). It is lower as you get
closer to buying the next level of \\(c_4\\) and higher shortly after buying
the \\(c_4\\) upgrade. Late game, it is best to publish \\(2\\)-\\(3\\) times per level of
\\(c_4\\) for a total multiplier of \\(20.51\\).

T1 is the only theory where the recent value of \\(ρ\\) influences the
rate of change of \\(ρ\\) therefore buying a
variable as soon as you can afford will slow your progress. Late game
buying upgrades immediately will slow you more than the benefit of the
upgrade because \\(c_3\\) & \\(c_4\\) dominate. If the next level costs \\(10ρ\\) and you
have \\(11ρ\\) buying it will reduce to \\(ρ_{n+1}\\) to \\(1\\) you are reducing your \\(ρ_{n+1}\\)
by roughly a factor of 10.

There are \\(3\\) terms the influence the rate of change of \\(\rho\\) all are
affected by the previous state of \\(\rho\\). Let's ignore the 1st since it
has such a small influence and consider the above case to determine when
an upgrade would be better. For every magnitude of \\(10\\), term \\(2\\) gains
\\(ρ_{n-1}^{2/10} = 1.585x\\) more income and term 3 gains \\(ρ_{n-2}^{3/10} = 1.995x\\)
more income. Therefore, it would only be worth buying an upgrade if it
increases \\(\dot{ρ}\\) by more than 2 times at purchase. Because of this when
actively playing you should only buy a variable when it will not
decrease your ρdot for each upgrade that is approximately at the ratios
detailed below. Buy each upgrade when \\(ρ_n\\) is N times the costs of a
given upgrade:

 - \\(q_1\\): 5.0
 - \\(c_2\\): 1000
 - \\(q_2\\): 1.15
 - \\(c_3\\): 2
 - \\(c_1\\): 10000
 - \\(c_4\\): 1.01

<iframe width="560" height="315" src="https://www.youtube.com/embed/lFSAFIpWkb0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

#### T5 routing

Running the active strats will make this the number one theory for a while
and eventual number two after T6 takes over. A step-by-step on how to
progress the theory is below.

<iframe width="560" height="315" src="https://www.youtube.com/embed/YSvhxcLgv2M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/pM-pjSnMByw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


Steps Created by: Snaeky, Marks, Baldy, and Nerdy

1. x1 (or x10 when above e200) buy \\(c_2\\) manually and autobuy the rest
   until within ~\\(e10\\) of your previous publication. Your graph should
   resemble a linear function on the graph.
2. As purchasing \\(c_2\\) becomes less frequent and \\(q\\) growth will slow down at
   this point you should stop autobuying \\(c_1\\) & \\(q_1\\)
3. Around your last pub mark, you can start autobuying \\(c_2\\). At this
   point, you should:
   1. Buy \\(q_1\\) up to 15% of the cost of the next doubling purchase
      (\\(2^x\\) purchase)
   2. Buy \\(c_1\\) after you purchase \\(c_2\\) until \\(q\\) reaches its new cap
4. Once you reach your desired multiplier, publish. Rinse and repeat
   this for stonks.

T5 will always give its best results from active play however, after
step 3 you can still get good results while auto buying \\(q_1\\) and manually
purchasing \\(c_1\\) every 10-15min. Making the theory slightly less active.

Purchase \\(c_2\\) when  \\(1.5q > c_2*c_3^{m_3}\\). \\(m_3\\) is
the number of milestone 3. \\(q\\) begins to slow down when you reach
\\(2q > c_2*c_3^{m_3}\\).

Created by: Snaeky, Marks, Baldy, and Nerdy

#### Theory 8

The starting positions:
 - Lorenz: -6, -8, 26
 - Chen: -10.6, -4.4, 28.6
 - Rossler: -6, 15, 0

The time steps:
 - Lorenz: 0.02
 - Chen: 0.002
 - Rossler 0.00014

### How To Respec

See the [introduction guide](/guides/intro/) for respecing students and
milestones.

#### Lemma

All Lemma sections already have the [-] buttons unlocked. This gives
back the full price paid into the upgrade. This allows for upgrade
swapping or dropping upgrades at the very end to hit the lemma limit
early. The amount respeced is based on the x1, x10, x25, x100, xMax in
the top right. On the right side, you can see the total levels bought.
There is also a free reset top right if a mistake is made.
