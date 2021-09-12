---
title: "Theory 9 to Endgame"
subtitle: "The World of Grinding and R9 Boost"
description: "Our guide for progressing once you have reached Theory 9 and the endgame."
author: "LE★Baldy"
contributors: "the Amazing Community"
draft: true
order: 6
---

{% import "embed-yt.njk" as yt %}

**DO T9 BEFORE EE50k**

### Graduation routing

Routing is based on your current Tau \\(\tau\\) and Phi \\(\varphi\\) numbers.

Make sure to use the [calculators and simulators](/#other-resources) for optimal graduation, student, star, and theory options.

### Push F(t) with 3R9 seapping

###### Memorize your student distributions with and without 30 R9 students. Use the [student calculator](https://conicgames.github.io/exponentialidle/students.html) if needed.
1. Wait till \\(F(t)\\) stops growing without student respec with R9 in pushing \\(\tau\\).
2. Start accel (preferably keep it between prestiges).
3. Potentially sit here to stack t for bigger \\(\phi_2\\) when you have students in \\(\phi_2\\). Only
   do this when you are near a graduation mark.
4. Respec the all 30 students from R9.
5. Wait for the autoprestige to prestige and swap back students to R9. When you are later in a graduation,
    you will ned to prestige manually
6. Repeat.

#### The new autoprestige expression

You can find the autoprestige used for R9 Seaping here: [Equation](https://exponential-idle-guides.netlify.app/guides/intro-to-grad/#new-autoprestige-expression)

###### Reference [R9 Seaping Autoprestige Explaination](https://exponential-idle-guides.netlify.app/guides/intro/#autoprestige-explanation)

{{ yt.embed('https://youtube.com/embed/c8ekMzXWD_g') }}

### Idle and active buy strats
For best results use the <a href="https://replit.com/@xelaroc/AnthSim">Theory Sim</a> and <a href="https://docs.google.com/document/d/1KfrfQzw6w3jecw3b2FCVNbpxdNYHsd-8TFufiUlvQFg/edit">Sim Guide</a> to give the best strategy and multiplier for the next publications.
Theory | Idle | Active
--- | --- | ---
T1 | Disable c1 c2 | See [T1 routing](#t1-routing) later in this guide
T2 | All on | q4/r4 → q3/r3 → etc
T3 | Disable c11, c13, c21, c33 | Same as idle with b2→b3→b1 e1 lower buying + cruising at end
T4 | Disable all but c3, q1, q2 | Auto c3 and q2. Manual q1. Disable rest.
T5 | See [T5 routing](#t5-routing) later in this guide | ← Also see T5 routing
T6 | Disable c3, c4 | Disable c3 c4. Auto q2, r2, c2, c5. Manual rest when e1 cheaper.
T7 | Disable c1, c2, c3 | Same as Idle
T8 | All on | Same as Idle but doublings chase with c1, c2.

### Equation for when to publish

From Big Freeze:

```
ln(tau/smooth(tau, (timer(d(tau)<=0) < 900)*e99) )
/ (timer( timer(d(tau)<=0)<900 ) + 900)
```

Pick a time, for example 900s, such that (maximum time between purchases)<900s<(minimum time to get to pub mark)

### Idle vs manual strat efficiency

From Antharion, the ratio represents \\(log(\tau)/hour\\) efficiency of
idle vs manual buying strategies.

Theory | Manual | Auto | Ratio
---|---|---|---
 T1 | 1.21579  | 0.965926 | 1.25868
 T2 | 0.677375 | 0.677375 | 1
 T3 | 1.42296  | 1.15424  | 1.23281
 T4 | 0.674164 | 0.589581 | 1.14346
 T5 | 1.31154  | 0.419708 | 3.12489
 T6 | 1.14383  | 0.993886 | 1.15544
 T7 | Unknown   | 1.23645  | TBD
 T8 | 1.51303  | 1.29569  | 1.16774

### Theory routing

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

Variable | Multiplier | Variable | Multiplier
--- | --- | --- | ---
\\(c_1\\) | 10000 | \\(c_4\\) | 1.01
\\(c_2\\) | 1000 | \\(q_1\\) | 5.0
\\(c_3\\) | 2 | \\(q_2\\) | 1.15


{{ yt.embed('https://www.youtube.com/embed/lFSAFIpWkb0') }}

#### T5 routing

Running the active strats will make this the number one theory for a while
and eventual number two after T6 takes over (e750-770+). A step-by-step on how to
progress the theory is below.

Steps Created by: Snaeky, Marks, Baldy, and Nerdy

1. x10 buy \\(c_2\\) manually
   and autobuy the rest until within ~\\(e10\\) of your previous
   publication. Your graph should resemble a linear function on the
   graph.
2. As purchasing \\(c_2\\) becomes less frequent and \\(q\\) growth will
   slow down at this point you should stop autobuying \\(c_1\\) & \\(q_1\\)
3. Around your last pub mark, you can start auto-buying \\(c_2\\). At this point, you should
   1. Buy \\(q_1\\) up to \\(15%\\) of the cost of the next doubling purchase (\\(2^x\\) purchase)
   2. Buy \\(c_1\\) after you purchase \\(c_2\\) until \\(q\\) reaches its new cap
4. Once you reach your desired multiplier, publish. 
5. Repeat this for stonks.

###### Commentary



{{ yt.embed('https://www.youtube.com/embed/AYI4U7Aob6o') }}

###### No commentary

{{ yt.embed('https://www.youtube.com/embed/pM-pjSnMByw') }}


T5 will always give its best results from active play however, after
step 3 you can still get good results while auto buying \\(q_1\\) and manually
purchasing \\(c_1\\) every 10-15min. Making the theory slightly less active.

##### Additional Information

Purchase \\(c_2\\) when  \\(1.5q > c_2*c_3^{m_3}\\). \\(m_3\\) is
the number of milestone 3. \\(q\\) begins to slow down when you reach
\\(2q > c_2*c_3^{m_3}\\).

Strategy constructed by: Snaeky, Marks, Baldy, and Nerdy

#### Theory 8

Attractor | Starting Positions (reset every pub) | Time Step
--- | --- | ---
**Lorenz** | -6, -8, 26 | 0.02
**Chen** | -10.6, -4.4, 28.6 | 0.002
**Rossler** | -6, 15, 0 | 0.00014

### How To respec

See the [introduction guide](/guides/intro/) for respecing students and
milestones.

#### Lemma

All Lemma sections already have the <kbd>-</kbd> buttons unlocked. This gives
back the full price paid into the upgrade. This allows for upgrade
swapping or dropping upgrades at the very end to hit the lemma limit
early. The amount respeced is based on the x1, x10, x25, x100, xMax in
the top right. On the right side, you can see the total levels bought.
There is also a free reset top right if a mistake is made.
