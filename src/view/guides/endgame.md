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

Routing is based on your current Tau (\\(\tau\\)) and Phi (\\(\varphi\\)) numbers.

Make sure to use the [calculators and simulators](/#other-resources) for optimal graduation, student, star, and theory options.

### Push f(t) with 3R9 seapping

###### Memorize your student distributions with and without 30 R9 students. Use the [student calculator](https://conicgames.github.io/exponentialidle/students.html) if needed.
1. Wait till \\(f(t)\\) stops growing without student respec with R9 in pushing \\(\tau\\).
2. Start accel (preferably keep it between prestiges).
3. Potentially sit here to stack t for bigger \\(\phi_2\\) when you have students in \\(\phi_2\\). Only
   do this when you are near a graduation mark.
4. Respec the all 30 students from R9.
5. Wait for the autoprestige to prestige and swap back students to R9. When you are later in a graduation,
    you will ned to prestige manually
6. Repeat.

#### R9 autoprestige expression

You can find the autoprestige used for R9 Seaping here: [Equation](https://exponential-idle-guides.netlify.app/guides/intro-to-grad/#new-autoprestige-expression). If you don't have this expression, then you will have to manually prestige each time (turn it off before seaping).

###### Reference [R9 Seaping Autoprestige Explanation](https://exponential-idle-guides.netlify.app/guides/intro-to-grad/#autoprestige-explanation)

{{ yt.embed('https://youtube.com/embed/c8ekMzXWD_g') }}

### Idle and Active buy strats
For best results use the <a href="https://replit.com/@xelaroc/AnthSim">Theory Sim</a> and <a href="https://exponential-idle-guides.netlify.app/guides/theory-sim/">Sim Guide</a> to give the best strategy and multiplier for the next publications.

<table class="newwords">
    <thead>
        <tr>
            <th class="invisible"></th>
            <th>Idle</th>
            <th>Active</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="leftHeader">T1</td>
            <td>Disable c1/c2</td>
            <td>See <a href="https://exponential-idle-guides.netlify.app/guides/endgame/#t1-routing">T1 routing</a></td>
        </tr>
        <tr>
            <td class="leftHeader">T2</td>
            <td>All variables on</td>
            <td>q4/r4 → q3/r3 → etc manual buy</td>
        </tr>
        <tr>
            <td class="leftHeader">T3</td>
            <td>Disable </td>
            <td>Same as idle but with  </td>
        </tr>
                <tr>
            <td class="leftHeader"></td>
            <td>c11, c13, c21, c33</td>
            <td>b2 → b4 → b1 manual buy</td>
        </tr>
        <tr>
            <td class="leftHeader">T4</td>
            <td>Only q1, q2, c3</td>
            <td>Idle with chasing doublings</td>
        </tr>
        <tr>
            <td class="leftHeader">T5</td>
            <td>See <a href="https://exponential-idle-guides.netlify.app/guides/endgame/#t5-routing">T5 routing</a></td>
            <td>See <a href="https://exponential-idle-guides.netlify.app/guides/endgame/#t5-routing">T5 routing</a></td>
        </tr>
        <tr>
            <td class="leftHeader">T6</td>
            <td>Disable c3, c4</td>
            <td>Idle with chasing doublings</td>
        </tr>
        <tr>
            <td class="leftHeader">T7</td>
            <td>Disable c1, c2, c3</td>
            <td>Disable c1, c2</td>
        </tr>
        <tr>
            <td class="leftHeader">T8</td>
            <td>All variables on</td>
            <td>Idle with chasing doublings</td>
        </tr>
    </tbody>
</table>

### Equation for when to publish

From Big Freeze:

```
ln(tau/smooth(tau, (timer(d(tau)<=0) < 900)*e99) )
/ (timer( timer(d(tau)<=0)<900 ) + 900)
```

Pick a time, for example 900s, such that (maximum time between purchases)<900s<(minimum time to get to pub mark).

### Idle vs Manual strat efficiency

From Antharion, the ratio represents \\(log(\tau)/hour\\) efficiency of
idle vs manual buying strategies. This does not take into account [cruising](https://exponential-idle-guides.netlify.app/guides/intro-to-grad/#theory-basics). T7 is unknown because the current manual strat is very complicated (not human viable) and isn't consistent enough to put on the chart.

<table class="newwords">
   <thead>
      <tr>
         <th class="invisible"></th>
         <th>Idle</th>
         <th>Active</th>
         <th>Ratio</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td class="leftHeader">T1</td>
         <td>1.21579</td>
         <td>0.965926</td>
         <td>1.25868</td>
      </tr>
      <tr>
         <td class="leftHeader">T2</td>
         <td>0.677375</td>
         <td>0.677375</td>
         <td>1</td>
      </tr>
      <tr>
         <td class="leftHeader">T3</td>
         <td>1.42296</td>
         <td>1.15424</td>
         <td>1.23281</td>
      <tr>
         <td class="leftHeader">T4</td>
         <td>0.674164</td>
         <td>0.589581</td></td>
         <td>1.14346</td>
      </tr>
      <tr>
         <td class="leftHeader">T5</td>
         <td>1.31154</td>
         <td>0.419708</td>
         <td>3.12489</td>
      </tr>
      <tr>
         <td class="leftHeader">T6</td>
         <td>1.14383</td>
         <td>0.993886</td></td>
         <td>1.15544</td>
      </tr>
      <tr>
         <td class="leftHeader">T7</td>
         <td>Unknown</td>
         <td>1.23645</td>
         <td>Unknown</td>
      </tr>
      <tr>
         <td class="leftHeader">T8</td>
         <td>1.51303</td>
         <td>1.29569</td>
         <td>1.16774</td>
      </tr>
   </tbody>
</table>

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

<table class="newwords">
   <thead>
      <tr>
         <th class="invisible"></th>
         <th>Multiplier <sub> 2</sub></th>
         <th class="invisible"></th>
         <th class="invisible"></th>
         <th>Multiplier</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td class="leftHeader">c <sub>1</sub></td>
         <td>10,000</td>
         <th class="invisible"></th>
         <td class="leftHeader">c <sub>4</sub></td>
         <td>1.01</td>
      </tr>
      <tr>
         <td class="leftHeader">c <sub>2</sub></td>
         <td>1,000</td>
         <th class="invisible"></th>
         <td class="leftHeader">q <sub>1</sub></td>
         <td>5.0</td>
      </tr>
      <tr>
         <td class="leftHeader">c <sub>3</sub></td>
         <td>2</td>
         <th class="invisible"></th>
         <td class="leftHeader">q <sub>2</sub></td>
         <td>1.15</td>
      </tr>
   </tbody>
</table>

###### *c1 and c2 are not used later because they become detrimental and should be disabled.

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
3. Around your last pub mark, you can start auto-buying \\(c_2\\). At this point, you should:
   1. buy \\(q_1\\) up to \\(15\%\\) of the cost of the next doubling purchase (\\(2^x\\) purchase),
   2. and buy \\(c_1\\) after you purchase \\(c_2\\) until \\(q\\) reaches its new cap.
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

#### Theory 8

Attractor | Starting Positions (reset every pub) | Time Step
--- | --- | ---
**Lorenz** | -6, -8, 26 | 0.02
**Chen** | -10.6, -4.4, 28.6 | 0.002
**Rossler** | -6, 15, 0 | 0.00014

### How to respec

See the [introduction guide](https://exponential-idle-guides.netlify.app/guides/intro-to-grad/#respecing-students) for respecing students and
milestones.

#### Lemma

All Lemma sections already have the <kbd>-</kbd> buttons unlocked. This gives
back the full price paid into the upgrade. This allows for upgrade
swapping or dropping upgrades at the very end to hit the lemma limit
early. The amount respeced is based on the x1, x10, x25, x100, xMax in
the top right. On the right side, you can see the total levels bought.
There is also a free reset top right if a mistake is made.
