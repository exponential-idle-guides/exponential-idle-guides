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

There is no theory 9 guide and this is a guide for what to do after theory 9. Have fun figuring out T9 for yourself and remove students when finished and put back into R9 and $\varphi$.

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

{{ yt.embed('d7mWhOkD7TM') }}

###### Also see [t stacking](/guides/endgame/#t-stacking)

#### R9 autoprestige expression

You can find the autoprestige used for R9 Seaping here: [Equation](/guides/intro-to-grad/#new-autoprestige-expression). If you don't have this expression, then you will have to manually prestige each time (turn it off before seaping).

###### Reference [R9 Swapping Autoprestige Explanation](/guides/intro-to-grad/#autoprestige-explanation)

{{ yt.embed('c8ekMzXWD_g') }}

### How to properly use the Graduation Calculator

The [graduation calculator](https://replit.com/@LEBaldy2002/gradcalc) is a great tool to be able to get the best \\(F(t)\\) to graduate at given your \\(\varphi\\), \\(\tau\\), and students. It also has additional features such as difference in R9 boost upon graduation. The calculator is for the \\(\varphi\\) you are using to push. This means use the \\(\varphi\\) without any levels in R9. The calculator also already takes into account supremacy upgrades and [skipped students](/guides/endgame/#skipped-students-routing) so no extra work needs to be done. Instructions on how to run are found in [Introduction to Graduation](/guides/intro-to-grad/#graduation-routing).

#### Three Steps To Getting The Best Result

1. After your progress has slowed after recovering from a graduation and nearing the next graduation, get results from the calculator. Only the \\(F(t)\\) output here is useful.
2. Upon arriving to the most recent output, get a new set of results from the calculator.
3. Repeat Step 2 until output is the same \\(F(t)\\) you are currently at. This is when you should graduate.

**Note:** You may run into a Tau is higher than Phi result, or similar to this, but this is due to data running that portion of the calculator being old and before Custom Theories were introduced which shifted the relative amounts. This will be fixed in the future with more data ([submit here after any graduation](https://forms.gle/4cntT4VG8TjCmrNU6)).

### Theory routing and strategies

For best theory routing and pushing, use the [Theory Sim](https://exponential-developers.github.io/sim-3.0/) and the [Theory Sim Guide](/guides/theory-sim) to give the best strategy and multiplier for the next publications. Human T5 is below:

#### T5 routing

Running the active strats will make this the number one theory for a while
and eventual number two after T6 takes over (e750-770+). A step-by-step on how to
progress the theory is below.

Steps Created by: Snaeky, Marks, Baldy, and Nerdy

1. x10 buy \\(c_2\\) manually and autobuy the rest until within ~\\(e10\\) of your previous publication.
2. Around your last pub mark within ~\\(e10\\), start autobuying \\(c_2\\) and stop autobuying \\(c_1\\) and \\(q_1\\). At this point:
   1. buy \\(q_1\\) up to \\(15\%\\) of the cost of the next doubling purchase (\\(2^x\\) purchase),
   2. and buy \\(c_1\\) after you purchase \\(c_2\\) up to \\(e1\\) lower than \\(q\\). This limit will increase as you get higher \\(\tau\\) and further into a publication.
3. Once you reach the desired publication point, publish.
4. Repeat this for stonks.

###### Commentary

{{ yt.embed('AYI4U7Aob6o') }}

###### No commentary

{{ yt.embed('pM-pjSnMByw') }}

T5 will always give its best results from active play. However, after
step 3, you can still get good results while autobuying \\(q_1\\) and manually
purchasing \\(c_1\\) every 10-15min. This makes the theory slightly less active and easier to deal with.

##### Additional Information

Purchase \\(c_2\\) when  \\(1.5q > c_2*c_3^{1.1}\\).

\\(q\\) begins to slow down when you reach \\(2q > c_2*c_3^{1.1}\\).

Strategy constructed by: Snaeky, Marks, Baldy, and Nerdy

### t stacking

A useful strategy in the later stages of a graduation is \\(t\\) stacking. It refers to [swapping](/guides/theories-5-8/#how-to-push-with-r9-seapping) multiple times during a single prestige, the quantity will increase as you gain more \\(F(t)\\). At about 50k, you should start to do this at least once per prestige near the end of a graduation to recover faster. Past 55k, you might need to do this more than once. The more often the better, as the main goal is to increase \\(F(t)\\) with the swap, thus giving us more \\(dt\\), allowing for more \\(t\\), then just letting \\(t\\) build up over time. This can be repeated multiple times and results in faster progress for \\(t\\), especially as each swap in between profits from more \\(\varphi\\) due to additional \\(dt\\) and \\(t\\). Overall this speeds up the time a prestige needs to reach a high enough value for \\(t\\) to do a final swap compared to letting the game run fully idle.

### Skipped students routing

Once you have enough students to always have R4 to R7 maxed out (about 30k), you will want to look for "Bigmas", students that will yields a larger than normal amount of \\(\varphi\\), and "Skipmas", students that will yield 0 extra \\(\varphi\\), as they cannot be used for optimal student distribution. These students may change if you do not use accel, or your star values are drastically different from the norm. So, to check if you have a Skipma or Bigma, you will need check the calculator at the \\(F(t)\\) that you just graduated at for both the students that you have now and the next student that you will get. If the distribution has an extra student, then it is a Skipma. If it has a larger than normal change in \\(\varphi\\) (normally 1e9 difference), then it is a Bigma. You want to graduate on a Bigma, and skip Skipmas.

The chart below lists out all of the Bigma to skip. Skipmas will not be listed as they are only ever viable if you are at the extreme endgame with very low rates which has not been the case since pre-1.4.21 (January 2022).

##### Note: The best way to decide a bigma skipma is to either calculate $\varphi$ distribution yourself or use the [graduation calculator](https://replit.com/@LEBaldy2002/gradcalc#main.py) which will automatically ask for information for this calculation if you are on 1dσ. Instructions to run are found in [Introduction to Graduation](/guides/intro-to-grad/#graduation-routing).

Class: newwords;

| Students                          | [style="border-right:\$table-border-thin;";]$F(t)$ |
| --------------------------------- | ------------------------------------------------- |
| 144, 146, 149, 152, 155, 158, 161 | 29.8k, 30.2k, 30.8k, 31.4k, 32.0k, 32.6k, 33.2k   |
| 164, 168, 172, 176, 180, 184, 188 | 33.8k, 34.6k, 35.4k, 36.2k, 37.0k, 37.8k, 38.6k   |
| 193, 198, 203, 208, 213, 218, 224 | 39.6k, 40.6k, 41.6k, 42.6k, 43.6k, 44.6k, 45.8k   |
| 230, 236, 242, 248, 261, 268, 275 | 47.0k, 48.2k, 49.4k, 50.6k, 53.2k, 54.6k, 56.0k   |
| 282, 289, 296, 304, 312, 320, 328 | 57.4k, 58.8k, 60.2k, 61.8k, 63.4k, 65.0k, 66.6k   |
| 336, 344, 353, 362, 371, 380, 389 | 68.2k, 69.8k, 71.6k, 73.4k, 75.2k, 77.0k, 78.8k   |
| | [FOOT;style="text-align:left;";]Due to fluctuations with stars, accel, \\(t\\), and more, Bigma can be situation dependant. This chart uses normal accel and stars, but the students to skip due to Bigma based on varying levels of deviation from normal t for that \\(F(t)\\). This does change based on CT's as they shift data, but it is not the largest difference. |

Explanation by: Snaeky and AfuroZamurai

Calculations by: LE★Baldy

### Supremacy Equation Past 48k

When you get to ee48k, you will have all of the \\(\psi\\) upgrades and you can get rid of the old Autosupremacy Equation. The old Autosuprem Equation is very inefficient, but its the best that we have right now due to how Supremacy upgrades are spaced before the final \\(\psi\\) upgrade. It is not worth pushing past an upgrade as there is no bonus to \\(\varphi\\) from \\(\psi\\), only \\(d\psi\\). When you hit about \\(f(t)\\) ee50k you can skip buying most \\(\psi\\) upgrades and be able to recover fairly quickly. The Supremacy Equations for the \\(F(t)\\) that we know are as follows:

Suprem Equation past ee48k:

<blockquote id="as-post-48k">
(costUpS(1)&lt;e52&amp;&amp;psi+dpsi&gt;e52)<br>
||(costUpS(3)&lt;e411&amp;&amp;psi+dpsi&gt;e411)<br>
||(costUpS(3)&lt;e511&amp;&amp;psi+dpsi&gt;e511)<br>
||(costUpS(3)&lt;e531&amp;&amp;psi+dpsi&gt;e531)<br>
||(costUpS(3)&lt;e551&amp;&amp;psi+dpsi&gt;e551)<br>
||(costUpS(3)&lt;e571&amp;&amp;psi+dpsi&gt;e571)<br>
</blockquote>

<button class="copy-btn" onClick="copyText('as-post-48k');">Copy Text</button>

Suprem Equation past ee52k:

<blockquote id="as-post-52k">
(costUpS(1)&lt;e52&amp;&amp;psi+dpsi&gt;e52)<br>
||(costUpS(3)&lt;e511&amp;&amp;psi+dpsi&gt;e511)<br>
||(costUpS(3)&lt;e571&amp;&amp;psi+dpsi&gt;e571)<br>
</blockquote>

<button class="copy-btn" onClick="copyText('as-post-52k');">Copy Text</button>

Suprem Equation past ee58-60k:

<blockquote id="as-post-58-60k">
(costUpS(1)&lt;e52&amp;&amp;psi+dpsi&gt;e52)<br>
||(costUpS(3)&lt;e571&amp;&amp;psi+dpsi&gt;e571)<br>
</blockquote>

<button class="copy-btn" onClick="copyText('as-post-58-60k');">Copy Text</button>

Suprem Equation past ee75k:

<blockquote id="as-post-75k">
costUpS(1)&lt;e52&amp;&amp;psi+dpsi&gt;e52
</blockquote>

<button class="copy-btn" onClick="copyText('as-post-75k');">Copy Text</button>

### How to respec

See the [introduction guide](/guides/intro-to-grad/#respecing-students) for respecing students and
milestones.

#### Lemma

All Lemma sections already have the <kbd>-</kbd> buttons unlocked. This gives
back the full price paid into the upgrade. This allows for upgrade
swapping or dropping upgrades at the very end to hit the lemma limit
early. The amount respeced is based on the x1, x10, x25, x100, xMax in
the top right. On the right side, you can see the total levels bought.
There is also a free reset top right if a mistake is made.
