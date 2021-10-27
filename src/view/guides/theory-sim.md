---
title: "Theory Simulator: How to Read Results"
description: "Our guide for running the theory simulator and understanding the results."
author: "LE★Baldy, Snaeky, and Gaunter"
contributors: "Antharion for the simulator itself"
draft: true
order: 7
---

### Before you start

The sim assumes that you have all milestones and ad bonus! If you do
not have these it will give you incorrect values for respective theories.

### Example output
The top image is from the [website version](https://bit.ly/anthsim) and
the bottom from the discord bot or when you request a png from the
website.

![Theory Sim Example Outputs](/images/TheorySimExampleOutputs.png)

### Column explanations
#### Manual
This refers to the \\(\tau/hour\\) that you will gain from the active strategy of that theory.
This is defined as \\(log(\tau\\) \\(gained)/publication\\) \\(time\\) \\(in\\) \\(hours\\).
For example, if you gain 1e10 \\(\tau\\) over a 2 hr run then your rate for that theory is 5 \\(\tau/hr\\).
Use these values to compare to other theories if you plan to do active strategies for that following publication.

#### Auto
This is the \\(\tau/hour\\) that you will gain from the idle strategy of the theory.
This is defined the same way as Manual.
Use these values to compare to other theories if you plan to do active strategies for that following publication.

#### Ratio
This is the ratio of the manual:auto for \\(\tau\\) gain (2nd column/3rd column).
For ratios closer to 1, you should consider only running these theories while offline/idle.
For ratios much larger than 1, you should consider only running these theories while actively or semi-actively playing the game and not while offline.
This is the reason why T5 is considered an active theory and T2 is considered an idle theory.

#### Multi Manual
This is the optimal multiplier that you should publish at for the given manual strategy for that **single publication**.
The multiplier can change drastically between publications based on theory, when variables are purchased, and more.
You may want to do multiple simulations after each publication for some theories but is not nessesary.

#### Multi Auto
This is the optimal multiplier that you should publish at for the given active strategy for that **single publication**.
The multiplier can change drastically between publications based on theory, when variables are purchased, and more.
You may want to do multiple simulations after each publication for some theories but is not nessesary.

#### Strategy Manual and Strategy Auto
This is the optimal strategy for active or idle playing (for auto) of
that publication. See below for what each part means.

 - **Theory name**. For example, T1, T2. The theory the strategy
   belongs to. It will always match the theory in that row.
 - **Listed variables**. For example, C1C2C3, C4, Q1Q2.  These variables
   you autobuy. Remaining variables turn off.
 - **Listed Variables with no**. For example noC4C5C6, noC3C4. These
   variables you turn off. Rest you keep on autobuy.
 - **Chasing doublings**. For example, T8d, T1d. Chasing doublings means
   to buy the non-doubling when e1 lower than its doubling pair. Doubling
   pairs example: T1's \\(q_1\\) & \\(q_2\\). One is \\(2^x\\) per 1
   upgrade and one is \\(2^x\\) every 10 upgrades.
 - **Just Theory Name**. For example, T2, T8. Autobuy all variables
 - **T5AI**. For example, T5AI, T5AI4, T5AI5. This just means normal
   active strat as they are sim only strategies. There are 5 simulation
   AI's for T5 based on buying patterns.
 - **T7NoDecay**. For example: T7NoDecay1, T7NoDecay2. This is just another simulator only strategy so just use the normal manual/auto strategy and you are fine.
 - **T8  Attractor**. For example, T8C, T8L, or T8. The C, L, and R
   represent the three attractors and which to have on. Rare to
   see anything but T8R, but it has happened.

##### Variables to always buy

<table class="newwords">
    <thead>
        <tr>
            <th class="invisible"></th>
            <th>Variables</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="leftHeader">T1</td>
            <td>q1, q2, c4</td>
        </tr>
        <tr>
            <td class="leftHeader">T2</td>
            <td>all variables</td>
        </tr>
        <tr>
            <td class="leftHeader">T3</td>
            <td>b1, b2, b3, c12</td>
        </tr>
                <tr>
            <td class="leftHeader"></td>
            <td>c22, c23, c31, c32</td>
        </tr>
        <tr>
            <td class="leftHeader">T4</td>
            <td>q1, q2, c3</td>
        </tr>
        <tr>
            <td class="leftHeader">T5</td>
            <td>q1, q2, c3</td>
        </tr>
        <tr>
            <td class="leftHeader">T6</td>
            <td>r1, r2, q1, q2</td>
        </tr>
        <tr>
            <td class="leftHeader">T7</td>
            <td>q1, c2, c5, c6</td>
        </tr>
        <tr>
            <td class="leftHeader">T8</td>
            <td>c1, c2</td>
        </tr>
    </tbody>
</table>

If sim says T8R34, you still buy \\(c_1\\) and \\(c_2\\). It only outputs number changes for \\(c_3\\), \\(c_4\\), and \\(c_5\\).

\*The exception is during the cruise phase of the end of a publication.

\*\*Table excludes variables that are bought sometimes, but not always such as T5 active.

##### Time Manual and Time Auto
This is the time (in hours) it should take to publish for the active or idle strategy.

The simulator only runs up to 720 hours per theory per manual/auto section.
Any results from a 720 hour simulation should be treated with caution as they never finished their publication.
If you get a negative /hour result from hitting this 720 hour cap, this is because it never got back to the publication mark to push \\(\tau\\) so \\(ρ\\) ended below \\(\tau\\).

##### Delta Active and Delta Idle
This will tell you how much \\(\tau\\) you are expected to gain for the active or idle strategy.

Delta Active and Delta Idle are defined as the quantity \\(\frac{\tau_{final}}{\tau_{initial}}\\) instead of \\(\tau_{final}\\) - \\(\tau_{initial}\\).
So if delta active was equal to 1e3 and the starting \\(\tau\\) was e100, the sim publishes at e103 \\(\tau\\).

**You should NOT publish at this \\(\tau\\) value** since it's very likely your starting \\(\tau\\) will be different from what is actually used in the sim due to your input being 1eXXXX not x.xxxeXXXX.
This should not be confused with log(\\(\tau\\)).
