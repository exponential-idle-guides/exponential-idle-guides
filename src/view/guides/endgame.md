---
title: "Theory 9 to Endgame"
subtitle: "The World of Grinding, R9 Boost, and Custom Theories"
description: "Our guide for progressing once you have reached Theory 9 and the endgame."
author: "LE★Baldy and Snaeky"
contributors: "the Amazing Community"
draft: true
order: 6
---

{% import "embed-yt.njk" as yt %}

**DO T9 BEFORE EE50k**

### Theory 9

There is no theory 9 guide and this is a guide for what to do after theory 9. Have fun figuring out T9 for yourself and remove students when finished and put back into R9 and phi.

### Graduation routing

Routing is based on your current Tau (\\(\tau\\)) and Phi (\\(\varphi\\)) numbers.

Make sure to use the <button class="rsc-link" onclick="openSidebar(['ResourceSidebar','GuideSidebar','HeaderSidebar'],'SidebarHeaders')">calculators and simulators</button> for optimal graduation, student, star, and theory options.

### Push F(t) with 3R9 swapping

###### Memorize your student distributions with and without 30 R9 students. Use the [student calculator](https://conicgames.github.io/exponentialidle/students.html) if needed. You will commonly see people refer to this as R9 seaping as a long held name of the strategy.

1. Wait till \\(F(t)\\) stops growing with students in R9 pushing \\(\tau\\).
2. Start accel (preferably keep it between prestiges).
3. Potentially sit here to stack t for bigger \\(\varphi_2\\) when you have students in \\(\varphi_2\\). Only do this when you are near a graduation mark.
4. Respec all 30 students from R9.
5. Wait for the autoprestige to prestige and swap back students to R9.
6. Repeat.

###### Also see [t stacking](https://exponential-idle-guides.netlify.app/guides/endgame/#t-stacking)

#### R9 autoprestige expression

You can find the autoprestige used for R9 Seaping here: [Equation](https://exponential-idle-guides.netlify.app/guides/intro-to-grad/#new-autoprestige-expression). If you don't have this expression, then you will have to manually prestige each time (turn it off before seaping).

###### Reference [R9 Swapping Autoprestige Explanation](https://exponential-idle-guides.netlify.app/guides/intro-to-grad/#autoprestige-explanation)

{{ yt.embed('https://youtube.com/embed/c8ekMzXWD_g') }}

### How to properly use the Graduation Calculator

The [graduation calculator](https://replit.com/@LEBaldy2002/gradcalc) is a great tool to be able to get the best \\(F(t)\\) to graduate at given your \\(\varphi\\), \\(\tau\\), and students. It also has additional features such as difference in R9 boost upon graduation. The calculator is for the \\(\varphi\\) you are using to push. This means use the \\(\varphi\\) without any levels in R9. The calculator also already takes into account supremacy upgrades and [skipped students](https://exponential-idle-guides.netlify.app/guides/endgame/#skipped-students-routing) so no extra work needs to be done.

#### Three Steps To Getting The Best Result

1. After your progress has slowed after recoverying from a graudation and nearing the next graduation, get results from the calculator. Only the F(t) output here is useful.
2. Upon arriving to the most recent output, get a new set of results from the calculator.
3. Repeat Step 2 until output is the same \\(F(t)\\) you are currently at. This is when you should graduate.

**Note:** You may run into a Tau is higher than Phi result, or similar to this, but this is due to data running that portion of the calculator being old and before Custom Theories were introduced which shifted the relative amounts. This will be fixed in the future with more data ([submit here after any graduation](https://forms.gle/4cntT4VG8TjCmrNU6)).

### Theory routing and strategies

For best theory routing and pushing, use the [Theory Sim](https://theory-simulator.tredec.repl.co/) and the [Theory Sim Guide](https://spqcey-additions--exponential-idle-guides.netlify.app/guides/theory-sim/) to give the best strategy and multiplier for the next publications. Human T5 is below

#### T5 routing

Running the active strats will make this the number one theory for a while
and eventual number two after T6 takes over (e750-770+). A step-by-step on how to
progress the theory is below.

Steps Created by: Snaeky, Marks, Baldy, and Nerdy

1. x10 buy \\(c_2\\) manually and autobuy the rest until within ~\\(e10\\) of your previous publication.
2. Around your last pub mark within ~\\(e10\\), start autobuying \\(c_2\\) and stop autobuying \\(c_1\\) & \\(q_1\\). At this point:
   1. buy \\(q_1\\) up to \\(15\%\\) of the cost of the next doubling purchase (\\(2^x\\) purchase),
   2. and buy \\(c_1\\) after you purchase \\(c_2\\) up to \\(e1\\) lower than \\(q\\). This limit will increase as you get higher \\(\tau\\) and further into a publication.
3. Once you reach the desired publication point, publish.
4. Repeat this for stonks.

###### Commentary

{{ yt.embed('https://www.youtube.com/embed/AYI4U7Aob6o') }}

###### No commentary

{{ yt.embed('https://www.youtube.com/embed/pM-pjSnMByw') }}

T5 will always give its best results from active play. However, after
step 3, you can still get good results while autobuying \\(q_1\\) and manually
purchasing \\(c_1\\) every 10-15min. This makes the theory slightly less active and easier to deal with.

##### Additional Information

Purchase \\(c_2\\) when  \\(1.5q > c_2*c_3^{1.1}\\).

\\(q\\) begins to slow down when you reach \\(2q > c_2*c_3^{1.1}\\).

Strategy constructed by: Snaeky, Marks, Baldy, and Nerdy

### t Stacking

A useful strategy in the later stages of a graduation is \\(t\\) stacking. It refers to [swapping](https://exponential-idle-guides.netlify.app/guides/theories-5-8/#how-to-push-with-r9-seapping) multiple times during a single prestige, the quantity will increase as you gain more \\(F(t)\\). At about 50k, you should start to do this at least once per prestige near the end of a graduation to recover faster. Past 55k, you might need to do this more than once. The more often the better, as the main goal is to increase \\(F(t)\\) with the swap, thus giving us more \\(dt\\), allowing for more \\(t\\), then just letting \\(t\\) build up over time. This can be repeated multiple times and results in faster progress for \\(t\\), especially as each swap inbetween profits from more \\(\varphi\\) due to additional dt and \\(t\\). Overall this speeds up the time a prestige needs to reach a high enough value for \\(t\\) to do a final swap compared to letting the game run fully idle.

### Skipped Students Routing

Once you have enough students to always have R4 to R7 maxed out (about 30k), you will want to look for "Bigmas", students that will yields a larger than normal amount of \\(\varphi\\), and "Skipmas", students that will yield 0 extra \\(\varphi\\), as they cannot be used for optimal student distribution. These students may change if you do not use accel, or your star values are drastically different from the norm. So, to check if you have a Skipma or a Bigma, you will need check the calculator at the \\(F(t)\\) that you just graduated at for the students that you have not, and the next student that you will get, if the distribution has an extra student, then it is a Skipma, if it has a larger than normal change in \\(\varphi\\) (normally 1e9 difference), then it is a Bigma. You want to graduate on a Bigma, and skip Skipmas.

Due to fluctuations with stars, accel, t, and more, Skipma and Bigma can be situation dependant. Below is a chart with normal accel and stars, but the students to skip due to Bigma and Skipma based on varying levels of deviation from normal t for that \\(F(t)\\). This does change based on CT's as they shift data, but it is not the largest difference.

##### Note: The best way to decide a bigma skipma is to either calculate phi distribution yourself or use the [graduation calculator](https://replit.com/@LEBaldy2002/gradcalc#main.py) which will automatically ask for information for this calculation if you are on 1dσ.

<table class="newwords">
   <thead>
      <th class="invisible"></th>
      <th>Students to Skip</th>
   </thead>
   <tbody>
      <td class="leftHeader">Always Skipped</td>
      <td>144, 146, 149, 152, 155, 158, 161, 164</td>
   </tbody>
   <tbody>
      <td class="leftHeader"></td>
      <td>166, 168, 172, 176, 180, 184, 188, 190</td>
   </tbody>
   <tbody>
      <td class="leftHeader"></td>
      <td>193, 198, 203, 208, 213, 216, 218, 220</td>
   </tbody>
   <tbody>
      <td class="leftHeader"></td>
      <td>224, 230, 236, 240, 242, 246, 248, 251</td>
   </tbody>
   <tbody>
      <td class="leftHeader"></td>
      <td>256, 261, 268, 275, 279, 282, 289, 296, 298</td>
   </tbody>
   <tbody>
      <td class="leftlastHeader"></td>
      <td class="last_row">304, 312, 320, 324, 326, 328, 334, 336, 344</td>
   </tbody>
   <tbody>
      <td class="leftlastHeader">High t (5x)</td>
      <td class="last_row">307, 310</td>
   </tbody>
   <tbody>
      <td class="leftlastHeader">Mid-High t (1x+)</td>
      <td class="last_row">316</td>
   </tbody>
   <tbody>
      <td class="leftlastHeader">Low-High t (1x-)</td>
      <td class="last_row">286, 292</td>
   </tbody>
   <tbody>
      <td class="leftlastHeader">Low t (0.5x)</td>
      <td class="last_row">318</td>
   </tbody>

   <thead>
      <th class="invisible"></th>
      <th>F(t) to Skip</th>
   </thead>
   <tbody>
      <td class="leftHeader">Always Skipped</td>
      <td>29.8k, 30.2k, 30.8k, 31.4k, 32.0k, 32.6k</td>
   </tbody>
   <tbody>
      <td class="leftHeader"></td>
      <td>33.2k, 33.8k, 34.2k, 34.6k, 35.4k, 36.2k</td>
   </tbody>
   <tbody>
      <td class="leftHeader"></td>
      <td>37.0k, 37.8k, 38.6k, 39.0k, 39.6k, 40.6k</td>
   </tbody>
   <tbody>
      <td class="leftHeader"></td>
      <td>41.6k, 42.6k, 43.6k, 44.2k, 44.6k, 45.0k</td>
   </tbody>
   <tbody>
      <td class="leftHeader"></td>
      <td>45.8k, 47.0k, 48.2k, 49.0k, 49.4k, 50.2k</td>
   </tbody>
   <tbody>
      <td class="leftHeader"></td>
      <td>50.6k, 51.2k, 52.2k, 53.2k, 54.6k, 56.0k</td>
   </tbody>
   <tbody>
      <td class="leftHeader"></td>
      <td>56.8k, 57.4k, 58.8k, 60.2k, 60.6k, 61.8k, 63.4k</td>
   </tbody>
   <tbody>
      <td class="leftlastHeader"></td>
      <td>65.0k, 65.8k, 66.2k, 66.6k, 67.8k, 68.2k, 69.8k</td>
   </tbody>
   <tbody>
      <td class="leftlastHeader">High t (5x)</td>
      <td>62.4k, 63.0k</td>
   </tbody>
   <tbody>
      <td class="leftlastHeader">Mid-High t (1x+)</td>
      <td>64.2k</td>
   </tbody>
   <tbody>
      <td class="leftlastHeader">Low-High t (1x-)</td>
      <td>58.2k, 59.4k</td>
   </tbody>
   <tbody>
      <td class="leftlastHeader">Low t (0.5x)</td>
      <td>64.6k</td>
   </tbody>
</table>

Explanation by: Snaeky and AfuroZamurai

Calculations by: LE★Baldy

### Supremacy Equation Past 48k

When you get to ee48k, you will have all of the \\(\psi\\) upgrades and you can get rid of the old Autosupremacy Equation. The old Autosuprem Equation is very inefficient, but its the best that we have right now due to how Supremacy upgrades are spaced before the final \\(\psi\\) upgrade. It is not worth pushing past an upgrade as there is no bonus to \\(\varphi\\) from \\(\psi\\), only d\\(\psi\\). When you hit about ft 50k you can skip buying most \\(\psi\\) upgrades and be able to recover fairly quickly. The Supremacy Equations for the F(t) that we know are as follows:

Suprem Equation past ee48k:

```
(costUpS(1)<e52&&psi+dpsi>e52)
||(costUpS(3)<e411&&psi+dpsi>e411)
||(costUpS(3)<e511&&psi+dpsi>e511)
||(costUpS(3)<e531&&psi+dpsi>e531)
||(costUpS(3)<e551&&psi+dpsi>e551)
||(costUpS(3)<e571&&psi+dpsi>e571)
```

Suprem Equation past ee52k:

```
(costUpS(1)<e52&&psi+dpsi>e52)
||(costUpS(3)<e511&&psi+dpsi>e511)
||(costUpS(3)<e571&&psi+dpsi>e571)
```

Suprem Equation past ee58-60k:

```
(costUpS(1)<e52&&psi+dpsi>e52)
||(costUpS(3)<e571&&psi+dpsi>e571)
```

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
