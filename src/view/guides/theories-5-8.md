---
title: "Theories 5-8"
description: "Our guide for routing through and understanding theories 5 to 8. We provide some strategies to help you make progress."
author: "LE★Baldy, Snaeky, & Xelaroc"
contributors: "the Amazing Community"
draft: true
order: 5
---

{% import "embed-yt.njk" as yt %}

### Graduation routing

Remember to follow our routing advice from the [introduction to graduation](https://exponential-idle-guides.netlify.app/guides/intro-to-grad/#graduation-routing).

<table class="graduation_routing">
   <tbody>
      <tr>
         <td>9k</td>
         <td class="arrow">→</td>
         <td>9.4k</td>
         <td class="arrow">→</td>
         <td>9.8k</td>
         <td class="arrow">→</td>
         <td>10k</td>
      </tr>
      <tr>
         <td>10k</td>
         <td class="arrow">→</td>
         <td>10.4k</td>
         <td class="arrow">→</td>
         <td>10.6k</td>
         <td class="arrow">→</td>
         <td>11k</td>
      </tr>
      <tr>
         <td>11k</td>
         <td class="arrow">→</td>
         <td>12.4k</td>
         <td class="arrow">→</td>
         <td>13.4k</td>
         <td class="arrow">→</td>
         <td>14k</td>
      </tr>
   </tbody>
</table>
<div class="table graduation_routing">
   <div class="tr">
      <div class="td"></div>
      <div class="td"></div>
      <div class="td" style="row-span:2;"><a href="https://exponential-idle-guides.netlify.app/guides/theories-5-8/#theory-8-skipping">Skip T8</a></div>
      <div class="td"></div>
      <div class="td"></div>
      <div class="td"></div>
   </div>
</div>
<table class="graduation_routing">
   <tbody>
      <tr>
         <td>14k</td>
         <td class="arrow">→</td>
         <td>14.8k</td>
         <td class="arrow">→</td>
         <td>15.6k</td>
         <td class="arrow">→</td>
         <td>16k</td>
      </div>
      <tr>
         <td>16k</td>
         <td class="arrow">→</td>
         <td>16.8k</td>
         <td class="arrow">→</td>
         <td>18k</td>
      </tr>
      <tr>
         <td>18k</td>
         <td class="arrow">→</td>
         <td>20k</td>
      </tr>
   </tbody>
</table>

### Student routing with R9

All routing follows the [student calculator](https://conicgames.github.io/exponentialidle/students.html) (by Niedzielan, AfuroZamurai, and Milla) and
[star calculator](https://conicgames.github.io/exponentialidle/stars.html) (by Eaux Tacous#1021). When you are not pushing \\(f(t)\\) you should always have the 9th research option maxed (after Theory 8). When pushing \\(f(t)\\), you should be R9 swapping (below).

There is also the [theory simulator](https://tredec.github.io/sim-3.0/) by XLII, which works both below max milestones and after max milestones for all theories.

#### How to push F(t) with R9 swapping

###### Memorize your student distributions with and without 10/20/30 R9 students. Use the [student calculator](https://conicgames.github.io/exponentialidle/students.html) if needed. You will commonly see people refer to this as R9 seaping as a long held name of the strategy.

1. Wait till \\(f(t)\\) stops growing with students in R9 pushing \\(\tau\\).
2. Start accel (preferably keep it between prestiges).
3. Potentially sit here to stack t for bigger \\(\varphi_2\\) when you have students in \\(\varphi_2\\). Only do this when you are near a graduation mark. This is not useful if you will not swap into \\(\varphi_2\\).
4. Respec all 10/20/30 students from R9.
5. Wait for the autoprestige to prestige and swap back students to R9.
6. Repeat.

This method allows you to push \\(f(t)\\) with almost no loss of R9
uptime or pushing power. This is harder with fewer levels of R9 but
still helps if you get used to it.

#### R9 autoprestige expression

You can find the autoprestige used for R9 Swapping here: [Equation](https://exponential-idle-guides.netlify.app/guides/intro-to-grad/#new-autoprestige-expression). If you don't have this expression, then you will have to manually prestige each swap.

###### Reference [R9 Swapping Autoprestige Explanation](https://exponential-idle-guides.netlify.app/guides/intro-to-grad/#autoprestige-explanation)

{{ yt.embed('Klw9lLPNqdY') }}

### Theory 1

You will not touch this theory until after ee14k. Once you begin pushing T1 after ee14k, begin using the [Theory Sim](https://tredec.github.io/sim-3.0/) and the [Theory Sim Guide](https://exponential-idle-guides.netlify.app/guides/theory-sim/) to give the best strategy and multiplier for the next publication.

### Theory 2

This theory will be used as overnight until 1e350 Tau where it will not be touched until after ee14k. See our earlier guide for an overview for [theory 2](/guides/theories-1-4/#theory-2-25s-6k).

### Theory 3

See our earlier guide for an overview for [theory 3](/guides/theories-1-4/#theory-3-30s-7k).

### Theory 4

See our earlier guide for an overview for [theory 4](/guides/theories-1-4/#theory-4-35s-8k).

### Theory 5 (40σ / 9k)

#### Theory 5 Overview

Theory 5 is based on logistic function. This theory is slow early, but becomes very powerful later on in the game. It is recommended to keep pushing this theory as high as possible before reaching ee14k ft. Make sure to carefully read the behaviour of c1 and c2 variables in this theory, as the behaviours are quite unique.

<br>

#### Theory 5 Equation Description

\\(\dot{\rho} = q_1^{1.15}q_2q\\)

\\(\dot{q} = (c_1/c_2)q(c_3^{1.1} - q/c_2)\\)

<br>

The first line states that the rate of change of rho is the product of some \\(q_1, q_2, q\\). Note that \\(q_1\\) and \\(q_2\\) are variables that you can buy directly, while \\(q\\) is a separate variable that is based off something else.

<br>

The second line defines this theory. It describes the behaviour of a typical logistic function. A logistic function typically has slow growth at the beginning, then fast growth in the middle, then it flattens out at the end. Here we have \\(c_1\\), which speeds up the rate at which we reach the maximum value of \\(q\\). Note it DOES NOT increase the actual maximum value of \\(q\\) itself. We also have \\(c_2\\). This increases the maximum value of \\(q\\). However, it HALVES the speed at which this maximum value is reached. Therefore we must be careful to not buy too many at once.

<br>

\\(c_3\\) is similar to \\(c_2\\) in which buying it increases the maximum value of \\(q\\). However it does not have the drawback that \\(c_2\\) has. So we can buy this unconditionally.

<br>

The maximum value of \\(q\\) is \\(c_2c_3^{1.1}\\). Once \\(q\\) reaches this maximum value, \\(q\\) dot will be zero and \\(q\\) will not grow anymore until we buy either more \\(c_2, c_3\\).

Approximate variable strengths on \\(\dot\rho\\) with all milestones are as follows:

<table class="T2">
<caption>Brief summary of variable strengths of Theory 5.</caption>
   <thead><tr>
   <th class="invisible"></th>
   <th colspan="2" style="text-align:center">Brief Description</th>
   </tr></thead>
   <tbody>
      <tr>
         <th>q1<sub><sub><small>1</small></sub></sub></th>
         <td>About 7% increase on <mjx-container class="MathJax" jax="SVG" style="direction: ltr; position: relative;"><svg style="overflow: visible; min-height: 1px; min-width: 1px; vertical-align: -0.489ex;" xmlns="http://www.w3.org/2000/svg" width="1.17ex" height="2.224ex" role="img" focusable="false" viewBox="0 -767 517 983" aria-hidden="true"><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="TeXAtom" data-mjx-texclass="ORD"><g data-mml-node="mover"><g data-mml-node="mi"><path data-c="1D70C" d="M58 -216Q25 -216 23 -186Q23 -176 73 26T127 234Q143 289 182 341Q252 427 341 441Q343 441 349 441T359 442Q432 442 471 394T510 276Q510 219 486 165T425 74T345 13T266 -10H255H248Q197 -10 165 35L160 41L133 -71Q108 -168 104 -181T92 -202Q76 -216 58 -216ZM424 322Q424 359 407 382T357 405Q322 405 287 376T231 300Q217 269 193 170L176 102Q193 26 260 26Q298 26 334 62Q367 92 389 158T418 266T424 322Z" style="stroke-width: 3;"></path></g><g data-mml-node="mo" transform="translate(341.8,-2) translate(-250 0)"><path data-c="2D9" d="M190 609Q190 637 208 653T252 669Q275 667 292 652T309 609Q309 579 292 564T250 549Q225 549 208 564T190 609Z" style="stroke-width: 3;"></path></g></g></g></g></g></svg><mjx-assistive-mml unselectable="on" display="inline" style="top: 0px; left: 0px; clip: rect(1px, 1px, 1px, 1px); -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; position: absolute; padding: 1px 0px 0px 0px; border: 0px; display: block; width: auto; overflow: hidden;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mrow data-mjx-texclass="ORD"><mover><mi>ρ</mi><mo>˙</mo></mover></mrow></math></mjx-assistive-mml></mjx-container> on average - instantaneous.</td>
      </tr>
      <tr>
         <th>q2<sub><sub><small>2</small></sub></sub></th>
         <td>Doubles <mjx-container class="MathJax" jax="SVG" style="direction: ltr; position: relative;"><svg style="overflow: visible; min-height: 1px; min-width: 1px; vertical-align: -0.489ex;" xmlns="http://www.w3.org/2000/svg" width="1.17ex" height="2.224ex" role="img" focusable="false" viewBox="0 -767 517 983" aria-hidden="true"><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="TeXAtom" data-mjx-texclass="ORD"><g data-mml-node="mover"><g data-mml-node="mi"><path data-c="1D70C" d="M58 -216Q25 -216 23 -186Q23 -176 73 26T127 234Q143 289 182 341Q252 427 341 441Q343 441 349 441T359 442Q432 442 471 394T510 276Q510 219 486 165T425 74T345 13T266 -10H255H248Q197 -10 165 35L160 41L133 -71Q108 -168 104 -181T92 -202Q76 -216 58 -216ZM424 322Q424 359 407 382T357 405Q322 405 287 376T231 300Q217 269 193 170L176 102Q193 26 260 26Q298 26 334 62Q367 92 389 158T418 266T424 322Z" style="stroke-width: 3;"></path></g><g data-mml-node="mo" transform="translate(341.8,-2) translate(-250 0)"><path data-c="2D9" d="M190 609Q190 637 208 653T252 669Q275 667 292 652T309 609Q309 579 292 564T250 549Q225 549 208 564T190 609Z" style="stroke-width: 3;"></path></g></g></g></g></g></svg><mjx-assistive-mml unselectable="on" display="inline" style="top: 0px; left: 0px; clip: rect(1px, 1px, 1px, 1px); -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; position: absolute; padding: 1px 0px 0px 0px; border: 0px; display: block; width: auto; overflow: hidden;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mrow data-mjx-texclass="ORD"><mover><mi>ρ</mi><mo>˙</mo></mover></mrow></math></mjx-assistive-mml></mjx-container> - instantaneous.</td>
      </tr>
      <tr>
         <th>c1</th>
         <td>This variable allows you to reach the maximum value of <mjx-container class="MathJax CtxtMenu_Attached_0" jax="CHTML" tabindex="0" ctxtmenu_counter="56" style="font-size: 119.9%; position: relative;"><mjx-math class="MJX-TEX" aria-hidden="true"><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D45E TEX-I"></mjx-c></mjx-mi></mjx-math><mjx-assistive-mml unselectable="on" display="inline"><math xmlns="http://www.w3.org/1998/Math/MathML"><mi>q</mi></math></mjx-assistive-mml></mjx-container> faster. Note that it DOES NOT increase the maximum value of <mjx-container class="MathJax CtxtMenu_Attached_0" jax="CHTML" tabindex="0" ctxtmenu_counter="56" style="font-size: 119.9%; position: relative;"><mjx-math class="MJX-TEX" aria-hidden="true"><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D45E TEX-I"></mjx-c></mjx-mi></mjx-math><mjx-assistive-mml unselectable="on" display="inline"><math xmlns="http://www.w3.org/1998/Math/MathML"><mi>q</mi></math></mjx-assistive-mml></mjx-container> itself. If <mjx-container class="MathJax CtxtMenu_Attached_0" jax="CHTML" tabindex="0" ctxtmenu_counter="56" style="font-size: 119.9%; position: relative;"><mjx-math class="MJX-TEX" aria-hidden="true"><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D45E TEX-I"></mjx-c></mjx-mi></mjx-math><mjx-assistive-mml unselectable="on" display="inline"><math xmlns="http://www.w3.org/1998/Math/MathML"><mi>q</mi></math></mjx-assistive-mml></mjx-container> is close to its maximum value already, there's no point in buying this variable. </td>
      </tr>
      <tr>
         <th>c2</th>
         <td>Doubles the maximum value of <mjx-container class="MathJax CtxtMenu_Attached_0" jax="CHTML" tabindex="0" ctxtmenu_counter="56" style="font-size: 119.9%; position: relative;"><mjx-math class="MJX-TEX" aria-hidden="true"><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D45E TEX-I"></mjx-c></mjx-mi></mjx-math><mjx-assistive-mml unselectable="on" display="inline"><math xmlns="http://www.w3.org/1998/Math/MathML"><mi>q</mi></math></mjx-assistive-mml></mjx-container>. However it also HALVES the speed. We must be careful to not buy too many, as this can cause <mjx-container class="MathJax CtxtMenu_Attached_0" jax="CHTML" tabindex="0" ctxtmenu_counter="56" style="font-size: 119.9%; position: relative;"><mjx-math class="MJX-TEX" aria-hidden="true"><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D45E TEX-I"></mjx-c></mjx-mi></mjx-math><mjx-assistive-mml unselectable="on" display="inline"><math xmlns="http://www.w3.org/1998/Math/MathML"><mi>q</mi></math></mjx-assistive-mml></mjx-container> growth to be too slow. At the same time, we can't just ignore this variable, as otherwise the maximum value of <mjx-container class="MathJax CtxtMenu_Attached_0" jax="CHTML" tabindex="0" ctxtmenu_counter="56" style="font-size: 119.9%; position: relative;"><mjx-math class="MJX-TEX" aria-hidden="true"><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D45E TEX-I"></mjx-c></mjx-mi></mjx-math><mjx-assistive-mml unselectable="on" display="inline"><math xmlns="http://www.w3.org/1998/Math/MathML"><mi>q</mi></math></mjx-assistive-mml></mjx-container> will never go up. </td>
      </tr>
      <tr>
         <th>c3</th>
         <td>Doubles the maximum value of <mjx-container class="MathJax CtxtMenu_Attached_0" jax="CHTML" tabindex="0" ctxtmenu_counter="56" style="font-size: 119.9%; position: relative;"><mjx-math class="MJX-TEX" aria-hidden="true"><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D45E TEX-I"></mjx-c></mjx-mi></mjx-math><mjx-assistive-mml unselectable="on" display="inline"><math xmlns="http://www.w3.org/1998/Math/MathML"><mi>q</mi></math></mjx-assistive-mml></mjx-container>. No drawbacks.</td>
      </tr>
   </tbody>
</table>

#### Bicycle Analogy (alternative explanation) of c1 and c2 interactions

Think of buying \\(c_1\\) as throttling on the bicycle faster. Buying \\(c_2\\) is similar to shifting the bicycle gear up by 1 gear.

<br>

If all we do is buy \\(c_1\\) and never \\(c_2\\), then we're stuck in gear 1 forever and make no progress.
However, if all we do is buy \\(c_2\\) and never \\(c_1\\), then this is similar to trying to ride from highest gear from 0 speed, which we know takes a long time and a lot of effort.

<br>

Therefore using the bicycle analogy, we should buy \\(c_2\\) only when we have the speed to support it; not too early and not too late. Furthermore, later in the publication, we should buy only 1 level of \\(c_2\\) at a time. We should buy \\(c_1\\) only right after buying \\(c_2\\) (shifting up gear).

<br>

When deciding when to buy \\(c_1, c_2\\), think of \\(c_1\\) as throttling a bicycle, and \\(c_2\\) as shifting up gear by 1 level.

#### Theory 5 strategy

The strengths of each variable are as follows:

\\(c_3\\) ~= \\(q_2\\) ≈ \\(c_2 \\) > \\(q_1 \\) > \\(c_1 \\)

Note that \\(c_1\\) and \\(c_2\\) have special interactions.

<br>

##### Manual buying c2 - READ THIS BEFORE DOING THE STRATEGIES

For step 2 of the semi-idle and active strategies below, you should be manually buying \\(c_2\\). If you're over e150 \\(\rho\\), start with buy 10x variables at a time. Otherwise buy 1 level of c2 at a time.

<br>

You want to buy \\(c_2\\) until the value of \\(q\\) increases slowly. The pattern should be:

1. Buy \\(c_2\\). \\(q\\) should increase.
2. Once \\(q\\) increases slowly (or stops increasing), buy more \\(c_2\\).

<br>

If you buy a \\(c_2\\) and the value of \\(q\\) is increasing even slower than before, this means you bought too many levels of \\(c_2\\). Wait for \\(q\\) to stabilise and then continue buying \\(c_2\\).

<br>

Once you've reached within e5 of the previous publication point, you can safely autobuy \\(c_2\\) for the rest of the publication. Remember to untick \\(c_2\\) autobuy at the end of the publication when you click 'publish'!

##### Idle

It is not recommended to idle theory 5 (see explanation on \\(c_1\\) and \\(c_2\\) above). Do try the semi-idle strategy below.

<br>

For each publication: autobuy \\(c_3\\) and \\(q_2\\).

1. For the first 10 seconds, autobuy everything except \\(c_2\\).
2. Afterwards, simply autobuy all until publish.

<br>

##### Semi-Idle

Semi idle is similar to idle, but we do manual \\(c_2\\) buying and disabling \\(c_1\\) once the theory is recovered.

<br>

For each publication: autobuy \\(c_3\\) and \\(q_2\\).

1. For the first 10 seconds, autobuy everything except \\(c_2\\).
2. Then we want to manually buy \\(c_2\\). See [Manual Buying c2](https://exponential-idle-guides.netlify.app/guides/theories-5-8/#theory-5-strategy). Do this until it slows down and you're within about e5 \\(\rho\\) under last publication mark.
3. Then we autobuy all until \\(\rho \\) has reached its previous publication value (finished recovery).
4. Afterwards, deactivate \\(c_1\\) and autobuy the rest until publish.

<br>

##### Active

Here's a simple yet effective active strategy that can be used right until endgame. If you want more optimised strategies, please see [List of theory strategies](https://exponential-idle-guides.netlify.app/guides/theory-strategies/).

<br>

For each publication: autobuy \\(c_3\\) and \\(q_2\\). Buy \\(c_1\\) ONLY right after buying \\(c_2\\) from steps 2 onwards. Practically, everytime you buy a level of \\(c_2\\) from steps 2 onwards, you'd buy about 5-6 levels of \\(c_1\\). <br>
Note that for faster speed, for the first part of step 2, you may buy 10 levels at a time

1. For the first 10 seconds, autobuy everything except \\(c_2\\).
2. Then we want to manually buy \\(c_2\\). See [Manual Buying c2](https://exponential-idle-guides.netlify.app/guides/theories-5-8/#theory-5-strategy).
3. Then we autobuy \\(c_3, q_2, c_2\\). Out of these 3 variables, find the one with the cheapest cost. Then buy \\(q_1\\) until its cost exceeds 15% of the cheapest variable you found above. Buy \\(c_1\\) ONLY right after buying a level of \\(c_2\\). 
4. Once the theory has recovered to its previous publication mark, you can slowly put less emphasis on \\(c_1\\). When in doubt, have \\(c_1\\)'s cost be similar to \\(q_1\\)'s cost. Continue doing step 2 until publish.

<br>

#### Theory 5 milestone route

All milestones into the 2nd milestone to unlock \\(c_3\\). Then into 1st milestone because \\(q_1\\) variable is higher value than \\(c_3\\) variable, finally put the rest into the last milestones. This theory does not have a known effective milestone swapping strategy. <br>

<table class="milestone_routing">
   <tbody>
      <tr>
         <td>0/1/0</td>
         <td class="arrow">→</td>
         <td>3/1/0</td>
         <td class="arrow">→</td>
         <td>3/1/2</td>
      </tr>
</table>

###### Commentary
(By Snaeky)
{{ yt.embed('AYI4U7Aob6o') }}

###### No commentary
(By Snaeky)
{{ yt.embed('pM-pjSnMByw') }}

(By Playspout)
{{ yt.embed('PWjEADc1P7M') }}

T5 will always give its best results from active play. However, after
step 3, you can still get good results while autobuying \\(q_1\\) and
manually purchasing \\(c_1\\) every 10-15min. This makes the theory slightly less active and easier to deal with.

**Warning**: Do not overnight this theory. It has terrible decay after passing a good publication mark and will not give good results. T5i is only viable very late/endgame.

##### Additional information

Purchase \\(c_2\\) when  \\(1.5q > c_2*c_3^{m_3}\\). \\(m_3\\) is
the number of milestone 3.

\\(q\\) begins to slow down when you reach \\(2q > c_2*c_3^{m_3}\\).

Strategy constructed by: Snaeky, Marks, Baldy, and Nerdy

### Theory 6 (45σ / 10k)

#### T6 Overview

T6 has the lowest decay of all the theories. It will be second place to T5 until about e750 and is the only theory that can
get to \\(>e1100τ\\). You should overnight this and T4 after you get your T2 to \\(e350+\\).

At first, T6 only finds the area under the curve of the graph \\(f(q)\\) from \\(0\\) to \\(q\\), which is essentially a 2d plane.
This is done using a definite integral, an integral that is bound between 2 values giving a single output. This does the
opposite of what a derivative does, but within a specific bound. With later milestones, this will include the variable \\(r\\),
this new equation is finding the volume of the graph within the bounds of planes \\(f(q)\\) and \\(f ( r ) \\) from \\(0\\) to \\(q\\) and
\\(0\\) to \\(r\\) respectively.

The \\(-C\\) variable outside of the integral is defined as the sum of the instantaneous change in \\(\rho\\) caused by all of the \\(c_i\\)
upgrades that you have purchased. It is very closely related to the sum of the costs of upgrades of all \\(c_i\\) upgrades, but is
slightly different. It is negative because purchasing \\(c_i\\) upgrades will increase the value of the integral, thus
\\(\rho\\), by the change in \\(c_i\\) instantly. \\(-C\\) is used to offset this so that \\(\rho\\) does not diverge. For example,
lets say that the integral is equal to \\(10\\) and that you can buy the first upgrade (cost \\(10\\)). After buying it, the integral will
be equal to \\(20\\). But, at this point, the currency should be \\(0\\), so \\(C\\) needs to be equal to \\(20\\).

[Video of T6 at Endgame](https://bit.ly/t6endgame)

#### T6 strategy

The optimal multipler varies between 6-12, but spikes depending on what variable is dominant at the time and how close you are to a milestone.
If you want an accurate multiplier, check with [the sim](https://tredec.github.io/sim-3.0/).

<table class="spqcey">
<thead>
   <tr>
      <th class="invisible"></th>
      <th colspan="2" style="text-align:center">T6 Strategy</th>
   </tr>
</thead>
   <tbody>
      <tr>
         <td class="leftHeader"></td>
         <td class="topHeader">Idle</td>
         <td class="rightHeader">Active</td>
     </tr>
      <tr>
         <td class="leftHeader">1ρ-e7ρ</td>
         <td>Buy All</td>
         <td>Buy All with q<sub><sub><small>1</small></sub></sub> bought at 1/10 of q<sub><sub><small>2</small></sub></sub> cost</td>
      </tr>
      <tr>
         <td class="leftHeader">e7ρ-e25ρ</td>
         <td>Turn off c<sub><sub><small>1</small></sub></sub> and c<sub><sub><small>2</small></sub></sub> when you unlock c<sub><sub><small>3</small></sub></sub></td>
         <td>Buy q<sub><sub><small>1</small></sub></sub> when 1/10 of q<sub><sub><small>2</small></sub></sub> cost and stop buying c<sub><sub><small>1</small></sub></sub> and c<sub><sub><small>2</small></sub></sub> when you unlock c<sub><sub><small>3</small></sub></sub></td>
      </tr>
      <tr>
         <td class="leftHeader">e25ρ-e100ρ</td>
         <td>Turn off c<sub><sub><small>1</small></sub></sub>, c<sub><sub><small>2</small></sub></sub>, and c<sub><sub><small>3</small></sub></sub> when you unlock c<sub><sub><small>4</small></sub></sub></td>
         <td>Buy q<sub><sub><small>1</small></sub></sub> (and r<sub><sub><small>1</small></sub></sub> past e50) when they are 1/10 of q<sub><sub><small>2</small></sub></sub>, r<sub><sub><small>2</small></sub></sub> costs respectively and stop buying c<sub><sub><small>1</small></sub></sub>, c<sub><sub><small>2</small></sub></sub>, and c<sub><sub><small>3</small></sub></sub> when you unlock c<sub><sub><small>4</small></sub></sub></td>
      </tr>
      <tr>
         <td class="leftHeader">e100ρ-e130ρ</td>
         <td>Turn off c<sub><sub><small>3</small></sub></sub> and c<sub><sub><small>4</small></sub></sub></td>
         <td>Buy q<sub><sub><small>1</small></sub></sub> and r<sub><sub><small>1</small></sub></sub> when they are 1/10 of q<sub><sub><small>2</small></sub></sub>, r<sub><sub><small>2</small></sub></sub> costs respectively and turn off c<sub><sub><small>3</small></sub></sub>, c<sub><sub><small>4</small></sub></sub> and c<sub><sub><small>5</small></sub></sub></td>
      </tr>
      <tr>
         <td class="leftHeader">e130ρ+</td>
         <td>Turn off c<sub><sub><small>3</small></sub></sub> and c<sub><sub><small>4</small></sub></sub></td>
         <td>Buy q<sub><sub><small>1</small></sub></sub> and r<sub><sub><small>1</small></sub></sub> when they are 1/10 of q<sub><sub><small>2</small></sub></sub>, r<sub><sub><small>2</small></sub></sub> costs respectively and turn off c<sub><sub><small>3</small></sub></sub> and c<sub><sub><small>4</small></sub></sub></td>
      </tr>
   </tbody>
</table>
<br /> <br />

#### T6 milestone route

 <table class="milestone_routing">
   <tbody>
      <tr>
         <td>0/0/0</td>
         <td class="arrow">→</td>
         <td>0/1/0</td>
         <td class="arrow">→</td>
         <td>1/1/0/0</td>
      </tr>
      <tr>
         <td>1/1/0/0</td>
         <td class="arrow">→</td>
         <td>1/1/1/0</td>
         <td class="arrow">→</td>
         <td>1/0/0/3</td>
      </tr>
      <tr>
         <td>1/0/0/3</td>
         <td class="arrow">→</td>
         <td>1/0/1/3</td>
         <td class="arrow">→</td>
         <td>1/1/1/3</td>
      </tr>
   </tbody>
</table>
<table class="milestone_routing">
   <tbody>
      <tr>
         <td class="invisible"><strong>Or</strong></td>
         <td class="invisible"></td>
         <td class="invisible"></td>
         <td class="invisible"></td>
         <td class="invisible"></td>
         <td class="invisible"></td>
         <td class="invisible"></td>
      </tr>
      <tr>
         <td>2</td>
         <td class="arrow">→</td>
         <td>1</td>
         <td class="arrow">→</td>
         <td>3</td>
      </tr>
      <tr>
         <td>3</td>
         <td class="arrow">→</td>
         <td>4 {2&3→4}</td>
         <td class="arrow">→</td>
         <td>3</td>
         <td class="arrow">→</td>
         <td>2</td>
      </tr>
   </tbody>
</table>

### Theory 7 (50σ / 11k)

#### T7 overview

T7 can be summarized as a maximization problem : given a surface in 3-dimensional space,
you want to find its highest altitude by moving along the surface, always in the direction
of steepest ascent (that's basically a gradient ascent).
The function \\(g(x,y)\\) can be seen as a surface in \\(\mathbb{R}^{3}\\) (considering the set
of points \\((x,y,g(x,y))\\), see attached image).
\\((\rho_1,\rho_2,g(\rho_1,\rho_2))\\) is a point on this surface. Our goal is to
maximize \\(g(\rho_1,\rho_2)\\), i.e. to find \\((\rho_1,\rho_2)\\) that maximize \\(g(\rho_1,\rho_2)\\).
Notice that the function \\(g\\) is unbounded, i.e. you can't find a proper maximum (we say that the maximization problem is ill-conditioned); so one way to maximize \\(g(\rho_1,\rho_2)\\) is to move \\((\rho_1,\rho_2)\\) towards the direction of steepest ascent.
This is what is precisely done by setting \\(\dot{\mathbf{\rho}}\\) (which is the direction the
point \\(\mathbf{\rho}=(\rho_1,\rho_2)\\) will move toward) to \\(\nabla g(\rho_1,\rho_2)\\)
(i.e. the gradient of \\(g\\) evaluated at \\((\rho_1,\rho_2)\\), which gives the direction of
steepest ascent of \\(g\\) at the point \\((\rho_1,\rho_2)\\).

![T7 Graph of function](/images/T7-graph.png)

This is the graph of the function \\(g\\), taken after the first four milestones have been unlocked
(Note: here, coefficients like \\(c_1,c_2\ldots\\) are ignored. The effect of those coefficients is
simply making the graph steeper in \\(x\\) or \\(y\\) direction, depending on the value of each coef).

#### T7 strategy

The optimal publication multiplier is \\(4\\)-\\(6\\). You will swap from 0/1/1 → 0/0/2 at near the 2/3 mark of your next milestone. The strategy for
manual buy before 4 milestones is to only manual buy \\(q_1\\) and \\(c_1\\)
cheap (e1 less \\(\rho\\)) and the rest full auto. After milestone 5, turn it on full autobuy for idle. For active, you will follow the strat described in the [theory sim guide](https://exponential-idle-guides.netlify.app/guides/theory-sim/) or watch the video below.

{{ yt.embed('wnKLkd0zXwI') }}

#### T7 milestone route

<table class="milestone_routing">
   <tbody>
      <tr>
         <td>0/0/0</td>
         <td class="arrow">→</td>
         <td>0/1/0</td>
         <td class="arrow">→</td>
         <td>0/1/1</td>
      </tr>
      <tr>
         <td>0/1/1</td>
         <td class="arrow">→</td>
         <td>0/0/2</td>
         <td class="arrow">→</td>
         <td>0/0/3</td>
      </tr>
      <tr>
         <td>0/0/3</td>
         <td class="arrow">→</td>
         <td>0/1/3</td>
         <td class="arrow">→</td>
         <td>1/1/1/1/1</td>
      </tr>
      <tr>
         <td>1/1/1/1/1</td>
         <td class="arrow">→</td>
         <td>1/1/1/1/2</td>
         <td class="arrow">→</td>
         <td>1/1/1/1/3</td>
      </tr>
   </tbody>
</table>
<table class="milestone_routing">
   <tbody>
      <tr>
         <td class="invisible"><strong>Or</strong></td>
         <td class="invisible"></td>
         <td class="invisible"></td>
         <td class="invisible"></td>
         <td class="invisible"></td>
         <td class="invisible"></td>
         <td class="invisible"></td>
      </tr>
      <tr>
         <td>3</td>
         <td class="arrow">→</td>
         <td>3</td>
         <td class="arrow">→</td>
         <td>3</td>
      </tr>
      <tr>
         <td>2</td>
         <td class="arrow">→</td>
         <td>1 {5→3&4}</td>
         <td class="arrow">→</td>
         <td>3</td>
      </tr>
      <tr>
         <td>3</td>
         <td class="arrow">→</td>
         <td>2</td>
      </tr>
   </tbody>
</table>

### Theory 8 skipping

Temporarily skipping T8 is significantly faster than buying T8 right away because of how slow T8 is from 0-e60 (don't worry, you will still buy it, just at 14k, not 12k). T8 is very slow until you get to about \\(e60\\) (it took the sim 16 hours to get that far into the theory without R9). We highly recommend buying t8 for the achievement, then selling it right away and using those students for \\(\varphi\\). You will need
about e1350 \\(\tau\\) in order to get R9 (\\(ee14k\\)) without T8, which will help you get
through T8 faster than before. **You will need to buy T8 again to get R9, and you should start R9 right away after that**
The current recommendation for your \\(\tau\\) distribution for T8 skip is as follows:

#### Idle

<table class="newwords">
   <thead>
      <tr>
         <th class="invisible"></th>
         <th>Tau</th>
         <th class="invisible"></th>
         <th class="invisible"></th>
         <th>Tau</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td class="leftHeader">T1</td>
         <td>e200 τ</td>
         <th class="invisible"></th>
         <td class="leftHeader">T5</td>
         <td>e240 τ</td>
      </tr>
      <tr>
         <td class="leftHeader">T2</td>
         <td>e295 τ</td>
         <th class="invisible"></th>
         <td class="leftHeader">T6</td>
         <td>e172 τ</td>
      </tr>
      <tr>
         <td class="leftHeader">T3</td>
         <td>e133 τ</td>
         <th class="invisible"></th>
         <td class="leftHeader">T7</td>
         <td>e145 τ</td>
      </tr>
      <tr>
         <td class="leftHeader">T4</td>
         <td>e165 τ</td>
         <th class="invisible"></th>
         <td class="leftHeader">T8</td>
         <td>Skip</td>
      </tr>
   </tbody>
</table>

#### Active

<table class="newwords">
   <thead>
      <tr>
         <th class="invisible"></th>
         <th>Tau</th>
         <th class="invisible"></th>
         <th class="invisible"></th>
         <th>Tau</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td class="leftHeader">T1</td>
         <td>e200 τ</td>
         <th class="invisible"></th>
         <td class="leftHeader">T5</td>
         <td>e265 τ</td>
      </tr>
      <tr>
         <td class="leftHeader">T2</td>
         <td>e290 τ</td>
         <th class="invisible"></th>
         <td class="leftHeader">T6</td>
         <td>e165 τ</td>
      </tr>
      <tr>
         <td class="leftHeader">T3</td>
         <td>e130 τ</td>
         <th class="invisible"></th>
         <td class="leftHeader">T7</td>
         <td>e145 τ</td>
      </tr>
      <tr>
         <td class="leftHeader">T4</td>
         <td>e155 τ</td>
         <th class="invisible"></th>
         <td class="leftHeader">T8</td>
         <td>Skip</td>
      </tr>
   </tbody>
</table>

If your numbers are different, that is fine. You just need to reach 1e1350
\\(\Pi\tau\\) to get to R9 at 14k.

### Theory 8 (55σ / 12k)

#### T8 strategy

The optimal publication multiplier is 2.5-5 depending on how close you
are to the next milestone. This theory is extremely slow at the start
which is why we skip until we obtain R9. It is also the only one with a
\\(1e20\\) milestone step. It will speed up once you hit \\(1e60\\) and
even faster at \\(1e80\\) and \\(1e100\\) etc. until ~\\(e250\\)-\\(e300\\).
The worst part is the \\(1e50\\)-\\(1e60\\) grind. The grind to \\(1e60\\)
will take a good bit of time but is faster with R9.

At the start, manual buy prioritizes \\(c_2\\) then \\(c_1\\) then rest.
Once you get to 0/0/0/2, prioritize \\(c_2\\) and \\(c_5\\) then \\(c_1\\) then the
rest. Once at 2/0/3/0, you will prioritize \\(c_2\\) and \\(c_4\\) then \\(c_1\\) then
the rest after. This continues to max at 2/3/3/3.

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

#### T8 milestone route

<table class="milestone_routing">
   <tbody>
      <tr>
         <td>0/0/0/0</td>
         <td class="arrow">→</td>
         <td>1/0/0/0</td>
         <td class="arrow">→</td>
         <td>2/0/0/0</td>
      </tr>
      <tr>
         <td>2/0/0/0</td>
         <td class="arrow">→</td>
         <td>0/0/0/2</td>
         <td class="arrow">→</td>
         <td>0/0/0/3</td>
      </tr>
      <tr>
         <td>0/0/0/3</td>
         <td class="arrow">→</td>
         <td>1/0/0/3</td>
         <td class="arrow">→</td>
         <td>2/0/3/0</td>
      </tr>
      <tr>
         <td>2/0/3/0</td>
         <td class="arrow">→</td>
         <td>2/3/3/0</td>
         <td class="arrow">→</td>
         <td>2/3/3/3</td>
      </tr>
   </tbody>
</table>
<table class="milestone_routing">
   <tbody>
      <tr>
         <td class="invisible"><strong>Or</strong></td>
         <td class="invisible"></td>
         <td class="invisible"></td>
         <td class="invisible"></td>
         <td class="invisible"></td>
         <td class="invisible"></td>
         <td class="invisible"></td>
      </tr>
      <tr>
         <td>1x2</td>
         <td class="arrow">→</td>
         <td>{1→4}</td>
         <td class="arrow">→</td>
         <td>4</td>
      </tr>
      <tr>
         <td>4</td>
         <td class="arrow">→</td>
         <td>1</td>
         <td class="arrow">→</td>
         <td>1 {4→3}</td>
         <td class="arrow">→</td>
         <td>1</td>
      </tr>
      <tr>
         <td>1</td>
         <td class="arrow">→</td>
         <td>2 x3</td>
         <td class="arrow">→</td>
         <td>4 x3</td>
      </tr>
   </tbody>
</table>

Note: the 2/0/0/0 → 0/0/0/2 swap happens at e52 tau.

### Final Push to ee20k

In general, you will need about e2050 \\(\tau\\) in order to get to 20k easily. Make sure that you are R9 Swapping and holding accel when you can. Recommended values for your theories \\(\tau\\) is as follows. Being above or below these values is fine, just as long as you have e2050 tau.

#### Active

<table class="newwords">
   <thead>
      <tr>
         <th class="invisible"></th>
         <th>Tau</th>
         <th class="invisible"></th>
         <th class="invisible"></th>
         <th>Tau</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td class="leftHeader">T1</td>
         <td>e243 τ</td>
         <th class="invisible"></th>
         <td class="leftHeader">T5</td>
         <td>e361 τ</td>
      </tr>
      <tr>
         <td class="leftHeader">T2</td>
         <td>e295 τ</td>
         <th class="invisible"></th>
         <td class="leftHeader">T6</td>
         <td>e194 τ</td>
      </tr>
      <tr>
         <td class="leftHeader">T3</td>
         <td>e221 τ</td>
         <th class="invisible"></th>
         <td class="leftHeader">T7</td>
         <td>e227 τ</td>
      </tr>
      <tr>
         <td class="leftHeader">T4</td>
         <td>e232 τ</td>
         <th class="invisible"></th>
         <td class="leftHeader">T8</td>
         <td>e277 τ</td>
      </tr>
   </tbody>
</table>

#### Idle

<table class="newwords">
   <thead>
      <tr>
         <th class="invisible"></th>
         <th>Tau</th>
         <th class="invisible"></th>
         <th class="invisible"></th>
         <th>Tau</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td class="leftHeader">T1</td>
         <td>e237 τ</td>
         <th class="invisible"></th>
         <td class="leftHeader">T5</td>
         <td>e360 τ</td>
      </tr>
      <tr>
         <td class="leftHeader">T2</td>
         <td>e290 τ</td>
         <th class="invisible"></th>
         <td class="leftHeader">T6</td>
         <td>e204 τ</td>
      </tr>
      <tr>
         <td class="leftHeader">T3</td>
         <td>e221 τ</td>
         <th class="invisible"></th>
         <td class="leftHeader">T7</td>
         <td>e235 τ</td>
      </tr>
      <tr>
         <td class="leftHeader">T4</td>
         <td>e227 τ</td>
         <th class="invisible"></th>
         <td class="leftHeader">T8</td>
         <td>e276 τ</td>
      </tr>
   </tbody>
</table>
