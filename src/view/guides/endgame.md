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

### Theory 9

There is no theory 9 guide and this is a guide for what to do after theory 9. Have fun figuring out T9 for yourself and remove students when finished and put back into T9 and phi.

### Graduation routing

Routing is based on your current Tau (\\(\tau\\)) and Phi (\\(\varphi\\)) numbers.

Make sure to use the [calculators and simulators](/#other-resources) for optimal graduation, student, star, and theory options.

### Push f(t) with 3R9 seapping

###### Memorize your student distributions with and without 30 R9 students. Use the [student calculator](https://conicgames.github.io/exponentialidle/students.html) if needed.
1. Wait till \\(f(t)\\) stops growing with students in R9 pushing \\(\tau\\).
2. Start accel (preferably keep it between prestiges).
3. Potentially sit here to stack t for bigger \\(\phi_2\\) when you have students in \\(\phi_2\\). Only
   do this when you are near a graduation mark. This is not useful if you will not swap into \\(\phi_2\\).
4. Respec all 30 students from R9.
5. Wait for the autoprestige to prestige and swap back students to R9.
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

There are \\(3\\) terms that influence the rate of change of \\(\rho\\) all are
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

<table class="newwords">
   <thead>
      <tr>
         <th class="invisible"></th>
         <th>Multiplier</th>
         <th class="invisible"></th>
         <th class="invisible"></th>
         <th>Multiplier</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td class="leftHeader">c<small><sub>1</sub></small></td>
         <td>10,000</td>
         <th class="invisible"></th>
         <td class="leftHeader">c<small><sub>4</sub></small></td>
         <td>1.01</td>
      </tr>
      <tr>
         <td class="leftHeader">c<small><sub>2</sub></small></td>
         <td>1,000</td>
         <th class="invisible"></th>
         <td class="leftHeader">q<small><sub>1</sub></small></td>
         <td>5.0</td>
      </tr>
      <tr>
         <td class="leftHeader">c<small><sub>3</sub></small></td>
         <td>2</td>
         <th class="invisible"></th>
         <td class="leftHeader">q<small><sub>2</sub></small></td>
         <td>1.15</td>
      </tr>
   </tbody>
</table>

###### *c<sub>1</sub> and c<sub>2</sub> are not used later because they become detrimental and should be disabled.

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


T5 will always give its best results from active play, however, after
step 3 you can still get good results while auto buying \\(q_1\\) and manually
purchasing \\(c_1\\) every 10-15min. Making the theory slightly less active.

##### Additional Information

Purchase \\(c_2\\) when  \\(1.5q > c_2*c_3^{m_3}\\). \\(m_3\\) is
the number of milestone 3. \\(q\\) begins to slow down when you reach
\\(2q > c_2*c_3^{m_3}\\).

#### Theory 8 (additional information)

<table class="newwords">
   <thead>
      <tr>
         <th class="invisible"></th>
         <th>Starting Positions</th>
         <th>Time Step</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td class="leftHeader">Lorenz</td>
         <td>(-6, -8, 26)</td>
         <td>0.02</td>
      </tr>
      <tr>
         <td class="leftHeader">Chen</td>
         <td>(-10.6, -4.4, 28.6)</td>
         <td>0.002</td>
      </tr>
      <tr>
         <td class="leftHeader">Rossler</td>
         <td>(-6, 15, 0)</td>
         <td>0.00014</td>
      </tr>
   </tbody>
</table>

### How to respec

See the [introduction guide](https://exponential-idle-guides.netlify.app/guides/intro-to-grad/#respecing-students) for respecing students and
milestones.

### t Stacking

A useful strategy in the later stages of a graduation is \\(t\\) stacking. It refers to [swapping](https://exponential-idle-guides.netlify.app/guides/theories-5-8/#how-to-push-with-r9-seapping) multiple times during a single prestige, the quantity will increase as you gain more \\(f(t)\\). At about 50k, you should start to do this at least once per prestige near the end of a graduation to recover faster. Past 55k, you might need to do this more than once. The more often the better, as the main goal is to increase \\(f(t)\\) with the swap, thus giving us more \\dt\\, allowing for more \\(t\\), then just letting \\(t\\) build up over time. This can be repeated multiple times and results in faster progress for \\(t\\), especially as each swap inbetween profits from more \\(\phi\\) due to additional dt and \\(t\\). Overall this speeds up the time a prestige needs to reach a high enough value for \\(t\\) to do a final swap compared to letting the game run fully idle.

### Graduation Routing

Once you have enough students to always have R4 to R7 maxed out (about 30k), you will want to look for "Bigmas", students that will yields a larger than normal amount of \\(\phi\\), and "Skipmas", students that will yield 0 extra \\(\phi\\), as they cannot be used for optimal student distribution. These students may change if you do not use accel, or your star values are drastically different from the norm. So, to check if you have a Skipma or a Bigma, you will need check the calculator at the \\(f(t)\\) that you just graduated at for the students that you have not, and the next student that you will get, if the distribution has an extra student, then it is a Skipma, if it has a larger than normal change in \\(\phi\\) (normally 1e9 difference), then it is a Bigma. You want to graduate on a Bigma, and Skip Skipmas.

For normal distribition of stars, \\(t\\), and accel usage, the students that you should skip (for 1d\\(\sigma\\):

```
144, 146, 149, 152, 155, 158, 161, 164, 166, 168, 172, 176, 180, 184, 188, 190, 193, 198, 203, 208, 213, 216, 218, 220, 224, 230, 236, 240, 242, 246, 248, 251, 254, 256, 261, 268, 275, 279, 282, 286, 289, 292, 296, 298, 304, 312, 316, 320, 324, 326, 328, 334, 336, 344
```

The \\(f(t)\\) values are:

```
29800, 30200, 30800, 31400, 32000, 32600, 33200, 33800, 34200, 34600, 35400, 36200, 37000, 37800, 38600, 39000, 39600, 40600, 41600, 42600, 43600, 44200, 44600, 45000, 45800, 47000, 48200, 49000, 49400, 50200, 50600, 51200, 51800, 52200, 53200, 54600, 56000, 56800, 57400, 58200, 58800, 59400, 60200, 60600, 61800, 63400, 64200, 65000, 65800, 66200, 66600, 67800, 68200, 69800
```

Explanation by: Snaeky and AfuroZamurai

### Supremacy Equation Past 48k

When you get to ee48k, you will have all of the \\(\psi\\) upgrades and you can get rid of the old Autosupremacy Equation. The old Autosuprem Equation is very inefficient, but its the best that we have right now due to how Supremacy upgrades are spaced before the final \\(\psi\\) upgrade. It is not worth pushing past an upgrade as there is no bonus to phi from \\(\psi\\), only d\\(\psi\\). When you hit about ft 50k you can skip buying most spi upgrads and be able to recover fairly quickly. The Supremacy Equations for the f(t) that we know are as follows:

Suprem Equation For 48k:

```
(costUpS(1)<e52&&psi+dpsi>e52)||(costUpS(3)<e411&&psi+dpsi>e411)||(costUpS(3)<e511&&psi+dpsi>e511)||(costUpS(3)<e531&&psi+dpsi>e531)||(costUpS(3)<e551&&psi+dpsi>e551)||(costUpS(3)<e571&&psi+dpsi>e571)
```

Suprem Equation 52k:

```
(costUpS(1)<e52&&psi+dpsi>e52)||(costUpS(3)<e571&&psi+dpsi>e571)||(costUpS(3)<e511&&psi+dpsi>e511)
```

#### Lemma

All Lemma sections already have the <kbd>-</kbd> buttons unlocked. This gives
back the full price paid into the upgrade. This allows for upgrade
swapping or dropping upgrades at the very end to hit the lemma limit
early. The amount respeced is based on the x1, x10, x25, x100, xMax in
the top right. On the right side, you can see the total levels bought.
There is also a free reset top right if a mistake is made.
