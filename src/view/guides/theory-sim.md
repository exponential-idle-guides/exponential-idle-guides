---
title: "Theory Simulator: How to Read Results"
description: "Our guide for running the theory simulator and understanding the results."
author: "LE★Baldy, Snaeky, and Gaunter"
contributors: "Antharion for the original simulator, Xelorac for the dedicated continuation, XLII for the current simulator, and the many others whom have developed strategies."
draft: true
order: 7
---

**This section will be updated to accomidate the new simulator and its features. Please read the link's instructions.**

### Before you start

The sim assumes that you have all milestones and ad bonus! If you do
not have these it will give you incorrect values for respective theories.

### Example output

The top image is from the [website version](https://theory-simulator.tredec.repl.co/).

![Theory Sim Example Outputs](/images/SimOutputs.png)

### **Column explanations**

#### **Manual**

This refers to the \\(\tau/hour\\) that you will gain from the active strategy of that theory.
This is defined as \\(log(\tau\\) \\(gained)/publication\\) \\(time\\) \\(in\\) \\(hours\\).
For example, if you gain 1e10 \\(\tau\\) over a 2 hr run then your rate for that theory is 5 \\(\tau/hr\\).
Use these values to compare to other theories if you plan to do active strategies for that following publication.

#### **Auto**

This is the \\(\tau/hour\\) that you will gain from the idle strategy of the theory.
This is defined the same way as Manual.
Use these values to compare to other theories if you plan to do active strategies for that following publication.

#### **Ratio**

This is the ratio of the manual:auto for \\(\tau\\) gain (2nd column/3rd column).
For ratios closer to 1, you should consider only running these theories while offline/idle.
For ratios much larger than 1, you should consider only running these theories while actively or semi-actively playing the game and not while offline.
This is the reason why T5 is considered an active theory and T2 is considered an idle theory.

#### **Multi Manual**

This is the optimal multiplier that you should publish at for the given manual strategy for that **single publication**.
The multiplier can change drastically between publications based on theory, when variables are purchased, and more.
You may want to do multiple simulations after each publication for some theories but is not necessary.

#### **Multi Auto**

This is the optimal multiplier that you should publish at for the given active strategy for that **single publication**.
The multiplier can change drastically between publications based on theory, when variables are purchased, and more.
You may want to do multiple simulations after each publication for some theories but is not necessary.

#### **Strategy Manual and Strategy Auto**

Full documentation of strategies that are not listed here as well as the most up-to-date information of the newest strategies not in the sim yet, check out the [Collection of Theory Strategies](https://docs.google.com/document/d/1kr0as58fWb4TIUV8ST_OKtCmyryA3lFsPI4c7j0Tfvo) by Spqcey.

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

#### **Play Strategies**

##### Not all unique strategies are listed here. Full documentation can be found in the [Collection of Theory Strategies](https://docs.google.com/document/d/1kr0as58fWb4TIUV8ST_OKtCmyryA3lFsPI4c7j0Tfvo) by Spqcey.

Play strategies, such as T3Play2, are strategies invented by Playspout, one of the top players. These strategies are usually very active, but will improve theories tau/hour significantly and need to be followed precisely in order to be efficient. The strategies are as follows:

<table class="PlayStrats">
  <thead>
    <th></th>
    <th>T3Play2</th>
  </thead>
  <tbody>
    <tr>
      <td class="leftHeader"></td>
      <td class="topHeader">"Variables purchased with respect to c<sub><sub><small><small>yy</small></small></sub></sub>":<br>buy var when var_cost * ratio ≤ c<sub><sub><small><small>yy</small></small></sub></sub>_cost</td>
    </tr>
    <tr>
      <td class="leftHeader"></td>
      <td>c<sub><sub><small><small>32</small></small></sub></sub> and c<sub><sub><small><small>23</small></small></sub></sub>: autobuy</td>
    </tr>
    <tr>
      <td class="leftHeader"></td>
      <td>Variables purchased with respect to c<sub><sub><small><small>32:</small></small></sub></sub></td>
    </tr>
    <tr>
      <td class="leftHeader"></td>
      <td class="indent">b<sub><sub><small><small>2</small></small></sub></sub>: 5x ratio</td>
    </tr>
    <tr>
      <td class="leftHeader">During Recovery:</td>
      <td class="indent">c<sub><sub><small><small>12</small></small></sub></sub>: 100x ratio</td>
    </tr>
    <tr>
      <td class="leftHeader">(pub multi < 1)</td>
      <td class="indent">c<sub><sub><small><small>22</small></small></sub></sub>: 2.5x ratio</td>
    </tr>
    <tr>
      <td class="leftHeader"></td>
      <td>Variables purchased with respect to c<sub><sub><small><small>23</small></small></sub></sub>:</td>
    </tr>
    <tr>
      <td class="leftHeader"></td>
      <td class="indent">b<sub><sub><small><small>3</small></small></sub></sub>: 8x ratio</td>
    </tr>
    <tr>
      <td class="leftHeader"></td>
      <td class="indent">c<sub><sub><small><small>33</small></small></sub></sub>: 10x ratio</td>
    </tr>
    <tr>
      <td class="leftlastHeader"></td>
      <td class="last_row">Disable remaining variables<br><sub><sub><small><small>* Will have to purchase once at start</small></small></sub></sub></td>
    </tr>
    <tr>
      <td class="leftHeader"></td>
      <td>c<sub><sub><small><small>12</small></small></sub></sub> and c<sub><sub><small><small>23</small></small></sub></sub>: autobuy</td>
    </tr>
    <tr>
      <td class="leftHeader"></td>
      <td>Variables purchased with respect to c<sub><sub><small><small>12:</small></small></sub></sub></td>
    </tr>
    <tr>
      <td class="leftHeader"></td>
      <td class="indent">b<sub><sub><small><small>2</small></small></sub></sub>: 8x ratio</td>
    </tr>
    <tr>
      <td class="leftHeader">Post Recovery:</td>
      <td class="indent">c<sub><sub><small><small>22</small></small></sub></sub>: 8x ratio</td>
    </tr>
    <tr>
      <td class="leftHeader">(pub multi ≥ 1)</td>
      <td class="indent">c<sub><sub><small><small>32</small></small></sub></sub>: 8x ratio</td>
    </tr>
    <tr>
      <td class="leftHeader"></td>
      <td>Variables purchased with respect to c<sub><sub><small><small>23</small></small></sub></sub>:</td>
    </tr>
    <tr>
      <td class="leftHeader"></td>
      <td class="indent">b<sub><sub><small><small>3</small></small></sub></sub>: 8x ratio</td>
    </tr>
    <tr>
      <td class="leftlastHeader"></td>
      <td class="last_row">Disable remaining variables</td>
    </tr>
    <tr>
      <td class="leftHeader">Coasting:</td>
      <td>b<sub><sub><small><small>2</small></small></sub></sub>, b<sub><sub><small><small>3</small></small></sub></sub>, c<sub><sub><small><small>12</small></small></sub></sub>, c<sub><sub><small><small>23</small></small></sub></sub>: autobuy</td>
    </tr>
    <tr>
      <td class="leftlastHeader">(pub multi >2)</td>
      <td class="last_row">Disable Remaining variables</td>
    </tr>
  </tbody>
  <thead>
    <th></th>
    <th>T3NoP1C13rcv (T3Idle)</th>
  </thead>
  <tbody>
    <tr>
      <td class="leftHeader"></td>
      <td class="topHeader">no ρ<sub><sub><small><small>1</small></small></sub></sub>, no c<sub><sub><small><small>13</small></small></sub></sub> with recovery strategy</td>
    </tr>
    <tr>
      <td class="leftHeader">During Recovery:</td>
      <td>b<sub><sub><small><small>2</small></small></sub></sub>, b<sub><sub><small><small>3</small></small></sub></sub>, c<sub><sub><small><small>12</small></small></sub></sub>, c<sub><sub><small><small>22</small></small></sub></sub>, c<sub><sub><small><small>23</small></small></sub></sub>, c<sub><sub><small><small>32</small></small></sub></sub>, c<sub><sub><small><small>33</small></small></sub></sub>: autobuy</td>
    </tr>
    <tr>
      <td class="leftlastHeader">(pub multi < 1)</td>
      <td class="last_row">Disable remaining variables<br><sub><sub><small><small>* Will have to purchase once at start</small></small></sub></sub></td>
    </tr>
    <tr>
      <td class="leftHeader">Post Recovery</td>
      <td>b<sub><sub><small><small>2</small></small></sub></sub>, b<sub><sub><small><small>3</small></small></sub></sub>, c<sub><sub><small><small>12</small></small></sub></sub>, c<sub><sub><small><small>23</small></small></sub></sub>: autobuy</td>
    </tr>
    <tr>
      <td class="leftlastHeader">(pub multi ≥ 1)</td>
      <td class="last_row">Disable remaining variables</td>
    </tr>
  </tbody>
  <thead>
    <th></th>
    <th>T3NoP1C13rcvNoC12 (T3Idle2)</th>
  </thead>
  <tbody>
    <tr>
      <td class="leftHeader"></td>
      <td class="topHeader">no ρ<sub><sub><small><small>1</small></small></sub></sub>, no c<sub><sub><small><small>13</small></small></sub></sub> with recovery strategy<br>buy c<sub><sub><small><small>12</small></small></sub></sub> under additional condition</td>
    </tr>
    <tr>
      <td class="leftHeader">c<sub><sub><small><small>12</small></small></sub></sub> Conditions:</td>
      <td>T3NoP1C13rcv except buy c<sub><sub><small><small>12</small></small></sub></sub> when</td>
    </tr>
    <tr>
      <td class="leftHeader"></td>
      <td>(pub time) ≥ (recovery time of T3NoP1C13rcv)<br><small>* Get recovery time from det mode (=detailed) of the <a href="https://bit.ly/AnthSim">sim</a>.</small></td>
    </tr>
    <tr>
      <td class="leftlastHeader"></td>
      <td class="last_row">Disable remaining variables</td>
    </tr>
  </tbody>
  <thead>
    <th></th>
    <th>T7Play-25</th>
  </thead>
  <tbody>
    <tr>
      <td class="leftHeader"></td>
      <td class="topHeader">"Variables purchased with respect to c<sub><small>yy</small></sub>":<br>buy var when var_cost * ratio ≤ c<sub><small>yy</small></sub>_cost</td>
    </tr>
    <tr>
      <td class="leftHeader"></td>
      <td>c<sub><small>6</small></sub>: autobuy</td>
    </tr>
    <tr>
      <td class="leftHeader">The Strategy:</td>
      <td>Variables purchased with respect to ρ<sub><small>1</small></sub>:</td>
    </tr>
    <tr>
      <td class="leftHeader">(entire pub)</td>
      <td class="indent">c<sub><small>4</small></sub>: 10x ratio</td>
    </tr>
    <tr>
      <td class="leftHeader"></td>
      <td>Variables purchased with respect to c<sub><small>6</small></sub>:</td>
    </tr>
    <tr>
      <td class="leftHeader"></td>
      <td class="indent">q<sub><small>1</small></sub>: 4x ratio</td>
    </tr>
    <tr>
      <td class="leftHeader"></td>
      <td class="indent">c<sub><small>5</small></sub>: 4x ratio</td>
    </tr>
    <tr>
      <td class="leftlastHeader"></td>
      <td class="last_row">Disable remaining variables</td>
    </tr>
  </tbody>
  <thead>
    <th></th>
    <th>T8RPlay</th>
  </thead>
  <tbody>
    <tr>
      <td class="leftHeader"></td>
      <td class="topHeader">"Variables purchased with respect to min(c<sub><sub><small><small>2</small></small></sub></sub>,c<sub><sub><small><small>4</small></small></sub></sub>)":<br>buy var when either of the following are met<br>var_cost*ratio ≤ c<sub><sub><small><small>2</small></small></sub></sub>_cost <b>or</b> var_cost*ratio ≤ c<sub><sub><small><small>4</small></small></sub></sub>_cost</td>
    </tr>
    <tr>
      <td class="leftHeader"></td>
      <td>c<sub><sub><small><small>2</small></small></sub></sub>, c<sub><sub><small><small>4</small></small></sub></sub>: autobuy</td>
    </tr>
    <tr>
      <td class="leftHeader">The Strategy:</td>
      <td>Variables purchased with respect to min(c<sub><sub><small><small>2</small></small></sub></sub>,c<sub><sub><small><small>4</small></small></sub></sub>):</td>
    </tr>
    <tr>
      <td class="leftHeader">(entire pub)</td>
      <td class="indent">c<sub><sub><small><small>1</small></small></sub></sub>: 8x ratio</td>
    </tr>
    <tr>
      <td class="leftHeader"></td>
      <td class="indent">c<sub><sub><small><small>3</small></small></sub></sub>: 2.5x ratio</td>
    </tr>
    <tr>
      <td class="leftHeader"></td>
      <td class="indent">c<sub><sub><small><small>5</small></small></sub></sub>: 4x ratio</td>
    </tr>
    <tr>
      <td class="leftlastHeader"></td>
      <td class="last_row">Disable remaining variables</td>
    </tr>
  </tbody>
</table>

#### **Variables to always buy**

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

#### **Time Manual and Time Auto**

This is the time (in hours) it should take to publish for the active or idle strategy.

The simulator only runs up to 180 days per theory per manual/auto section.
Any results from a 180 day simulation should be treated with caution as they never finished their publication.
If you get a negative /hour result from hitting this 180 day cap, this is because it never got back to the publication mark to push \\(\tau\\) so \\(ρ\\) ended below \\(\tau\\).

#### **Delta Active and Delta Idle**

This will tell you how much \\(\tau\\) you are expected to gain for the active or idle strategy.

Delta Active and Delta Idle are defined as the quantity \\(\frac{\tau_{final}}{\tau_{initial}}\\) instead of \\(\tau_{final}\\) - \\(\tau_{initial}\\).
So if delta active was equal to 1e3 and the starting \\(\tau\\) was e100, the sim publishes at e103 \\(\tau\\).

**You should not publish at this \\(\tau\\) value** in most circumstances. Many theories can vary from real execution due to a simulator being better than a human at timing, purchasing, etc are prevalent. If you input your tau as 1eXXXX, then you should definitely not publish at this unless your actual tau is 1eXXXX and not x.xxeXXXX. Use this number as a reference for when to look out for the multiplier instead of an exact figure.
