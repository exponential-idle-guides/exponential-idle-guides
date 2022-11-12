---
title: "Visualizing Variable Power Throughout the Game"
description: "Using graphs to show how the power of variables changes throughout the purchase of y power upgrades, the psi3 upgrades, why we buy y during recovery, and the eventual domination of the y variable."
author: "spqcey"
contributors: "the Amazing Community"
draft: false
order: 3
---
##### Initial Publication on November 1X, 2022

## Introduction
Let's start by defining which variables we're discussing. We will discuss the main-game variables, (\\(x-\xi\\)), NOT the upgrades bought in theories.<br><br>
We can split the progression through the game into three sections.<br><br>
The first section, from the start to ee4310, includes the unlocking of all of the variables, which finishes with the unlocking of \\(\xi\\) at ee791. It also includes the purchase of \\(y\\) power upgrades, of which we will discuss more later.<br><br>
The second section is from ee9160 to ee47362, and is the range when we buy supremacy upgrades known as "psi3" upgrades.<br><br>
The final section is after ee47362, where we see the title of strongest variable change hands a few more times with a final change at ~ee70000.

### Program
To visualize the power of each variable throughout the game, I've created a script in Python that can compute the strength of all variables at any given \\(f(t)\\). It does this by simulating the purchase of all of the variable levels it can, stopping when it costs more than can be afforded. It then computes the power the variable has at the level it has. It does this for every variable.<br><br>
To create the graphs seen shortly, I repeated this computation at many different \\(f(t)\\) points, then graphed the power of each variable across an \\(f(t)\\) interval.<br><br>
Something to note about the program is that it computes the base power, \\(x\\), not \\(x_8\\) which is used in the main equation to compute \\(f(t)\\). Because of how \\(x_8\\) is computed in-game, it can't be universally represented in these graphs. However, this has no effect on which variable is strongest, so it doesn't matter given the purpose of this guide extension.




## Unlocking Variables (0 - ee791)
The cost of the first levels of each variable range from <kbd>Free</kbd> to an expensive ee791. Here's a table with the cost of the first level of each variable:
<table class="newwords">
  <thead>
    <tr>
        <th class="invisible"></th>
        <th>Cost of First Level</th>
        <th class="invisible"></th>
        <th class="invisible"></th>
        <th>Cost of First Level</th>
    </tr>
  </thead>
  <tbody>
    <tr>
        <td class="leftHeader">x</td>
        <td>Free</td>
        <th class="invisible"></th>
        <td class="leftHeader">δ</td>
        <td>ee78.793</td>
    </tr>
    <tr>
        <td class="leftHeader">y</td>
        <td>1.04</td>
        <th class="invisible"></th>
        <td class="leftHeader">ε</td>
        <td>ee100.90</td>
    </tr>
    <tr>
        <td class="leftHeader">z</td>
        <td>1.08</td>
        <th class="invisible"></th>
        <td class="leftHeader">ζ</td>
        <td>ee153.79</td>
    </tr>
    <tr>
        <td class="leftHeader">s</td>
        <td>10.00</td>
        <th class="invisible"></th>
        <td class="leftHeader">η</td>
        <td>ee218.41</td>
    </tr>
    <tr>
        <td class="leftHeader">u</td>
        <td>ee4.2871</td>
        <th class="invisible"></th>
        <td class="leftHeader">θ</td>
        <td>ee255.19</td>
    </tr>
    <tr>
        <td class="leftHeader">v</td>
        <td>ee10.045</td>
        <th class="invisible"></th>
        <td class="leftHeader">ι</td>
        <td>ee337.79</td>
    </tr>
    <tr>
        <td class="leftHeader">w</td>
        <td>ee18.379</td>
        <th class="invisible"></th>
        <td class="leftHeader">κ</td>
        <td>ee432.59</td>
    </tr>
    <tr>
        <td class="leftHeader">α</td>
        <td>ee29.365</td>
        <th class="invisible"></th>
        <td class="leftHeader">λ</td>
        <td>ee539.71</td>
    </tr>
    <tr>
        <td class="leftHeader">β</td>
        <td>ee43.064</td>
        <th class="invisible"></th>
        <td class="leftHeader">ν</td>
        <td>ee659.31</td>
    </tr>
    <tr>
        <td class="leftHeader">γ</td>
        <td>ee59.526</td>
        <th class="invisible"></th>
        <td class="leftHeader">ξ</td>
        <td>ee791.49</td>
    </tr>
  </tbody>
</table>

###### F(t) values courtesy of the [Exponential Idle Wiki](https://exponential-idle.fandom.com/wiki/Instructions).

<br>

Here's a graph of variable power up to a \\(f(t)\\) of ee50. The initial purchase of variables \\(y\\) through \\(\beta\\) can be seen.

![Variable power up to ee50](/images/variable-power/ee50.png)
###### Computed every ee1 from ee1 to ee50.

And here's a graph with the same \\(f(t)\\) range, but instead of the power of each variable, it graphs the percentage of total power each variable has at any given \\(f(t)\\)

![Percentage variable power up to ee50](/images/variable-power/ee50_2.png)
###### Computed every ee1 from ee1 to ee50.

And here's a graph of variable power up to the purchase of the final variable at ee791:

![Variable power up to ee850](/images/variable-power/ee850.png)
###### Computed every ee1 from ee1 to ee850.

And the percentage graph:

![Percentage variable power up to ee850](/images/variable-power/ee850_2.png)
###### Computed every ee1 from ee1 to ee850.
A bit more spiky ;)
<br>
You may be wondering about the abrupt jumps in the power of all of variables. Well, that's what we'll discuss in our next section, about the \\(y\\) power upgrades.



## \\(y\\) Power Upgrades (ee50 - ee4310)
After we supremacy for the first time at ee50, we are given a currency \\(\psi\\) (psi). With this new currency, we can buy upgrades to increase the exponent on \\(y\\). Each upgrade raises the exponent by \\(0.2\\), so the initial supremacy at ee50 turns \\(y\\) into \\(y^{1.2}\\). The upgrades continue all the way up to \\(y^{9.0}\\) at ~ee4310, for a total of 40 levels.<br><br>
Because the power each variable has is propagated down all of its lower variables (ex. \\(z\\) -> \\(y\\) -> \\(x\\)), the change in exponent affects how strong all of the variables are. <br><br>
The cost of each upgrade from \\(y^{1.2}\\) through \\(y^{1.8}\\) is calculated using this formula, where x is the level you are buying starting at 1:

\\(\psi = 1.5 \times 2^{2(x-1)}\\)

The cost model changes after this, and from \\(y^{2.0}\\) through \\(y^{4.0}\\) is this formula:

\\(\psi = 0.488281 \times 2^{3(x-1)}\\)

The cost model changes one final time, and from \\(y^{4.2}\\) to \\(y^{9.0}\\) is this formula:

\\(\psi = 7.94093e-8 \times 2^{5(x-1)}\\)

With all of these calculations in place, here is the new variable power graph, now ranging up to ee5000:

![Variable power up to ee5000](/images/variable-power/ee5000.png)
###### Computed every ee1 from ee1 to ee5000.
<br>

Each small jump present in the graph marks the purchase of an added \\(0.2\\) to the exponent of \\(y\\).
<br><br>

And finally, here is the percentage of total power for each variable:

![Percentage variable power up to ee5000](/images/variable-power/ee5000_2.png)
###### Computed every ee1 from ee1 to ee5000.
Very spiky!

## Psi3 Upgrades (ee9160 - ee47362)
After we buy \\(y^{9.0}\\) at around ee4310, we don't have anything to buy with \\(\psi\\) until ee9160 \\(f(t)\\), when we can finally afford the first Psi3 upgrade. This time, instead of 40 levels to buy, there's only 24 upgrades. However, each upgrade separated by e20\\(\psi\\), so the last level, bought with e570\\(\psi\\), is all the way up at ee47362 \\(f(t)\\). <br><br>
These upgrades help delay the decay players would otherwise experience from ee20k-ee50k as their theories slow down and they gain less \\(\tau\\).<br><br>
The first psi3 upgrade increases \\(z\\)'s exponent to \\(z^{1.04}\\), and the second upgrade increases it further to \\(z^{1.08}\\). The third and fourth upgrade increase \\(s\\)'s exponent to \\(1.08\\), and so on until the final upgrade increases \\(\eta\\)'s exponent to \\(1.08\\). <br>
To illustrate the effect these purchases have, let's use an example.
<br><br>
Let's say these are the current equations for your first five variables:

\\(x = 4.7893e7y^9 + 2^3 \times 165.2\\)<br>
\\(y = 19891z^{1.08} + 2^{419} \times 87522\\)<br>
\\(z = 18082s^{1.04} + 2^{376} \times 70017\\)<br>
\\(s = 16433u + 2^{341} \times 56007\\)<br>
\\(u = 14933v + 2^{323} \times 48973\\)<br>

And let's say that shortly afterward you purchased a new psi3 level:

\\(x = 4.7893e7y^9 + 2^3 \times 165.2\\)<br>
\\(y = 19891z^{1.08} + 2^{419} \times 87522\\)<br>
\\(z = 18082s^{1.08} + 2^{376} \times 70017\\)<br>
\\(s = 16433u + 2^{341} \times 56007\\)<br>
\\(u = 14933v + 2^{323} \times 48973\\)<br>

With this new level, the power of \\(s\\) and \\(u\\) will increase, because in their propagation down to \\(x\\) they get boosted by the added \\(0.04\\) on \\(s\\)'s exponent. However, the power of \\(x\\), \\(y\\), and \\(z\\) will get no boost, because they are downstream of the added exponent.<br><br>
But don't just take my word for it. Let's look at the data from the program around this upgrade.

![Variable Power at Psi3 Upgrade](/images/variable-power/ee15000.png)
###### Computed every ee1 from ee13000 to ee15000. For the purpose of this visualization, only the four variables discussed are plotted.
<br>

As can be seen in the image, both \\(y\\) and \\(z\\) get no boost, as we expected. Furthermore, both \\(s\\) and \\(u\\) get an equal boost from the upgrade, as will the subsequent variables all the way down to \\(\xi\\).<br><br>
This leads to an interesting effect where every two psi3 upgrades one of the variable's power stops getting boosted from the upgrade, so we see a line separate from the rest every two jumps:

![Variable Power up to ee50000](/images/variable-power/ee50000.png)
###### Computed every ee1 from ee1 to ee50000. This took a while to run...
<br>
And here's a rather interesting plot with the percentage of total power each variable has.

![Percentage variable power up to ee50000](/images/variable-power/ee50000_2.png)
###### Computed every ee1 from ee1 to ee50000.

## Post-Psi3 Variable Power (ee47362+)
We've made it. The end of the supremacy upgrades is upon us. What's next?<br><br>
Well, now is when \\(f(t)\\) decay really hits. Let's take a look at an updated graph.

![Variable power from ee35000 to ee80000](/images/variable-power/ee80000.png)
###### Computed every ee5 from ee35000 to ee80000.
<br>

Immediately after the final supremacy upgrade, we gain a lot less \\(x\\) per \\(f(t)\\). During the psi3 upgrades, we need an average of **\\(17 f(t)\\) for an \\(e1\\) increase in \\(x\\)**.<br><br>
Shortly afterward, during the period up to ~ee52000, \\(\xi\\) is the most powerful variable. Unfortunately for us, its scaling is absolutely terrible, and it takes **\\(77 f(t)\\) for an \\(e1\\) increase in \\(x\\)**, around 4.5 times worse than during the psi3 upgrades.<br><br>
Fortunately, \\(\xi\\) is quickly dethroned by \\(\eta\\), which is the most powerful variable from ee52000 all the way until ee70000 \\(f(t)\\). For \\(\eta\\), it takes **\\(45 f(t)\\) for an \\(e1\\) increase in \\(x\\)**. This is the section where all current endgame and top players are.<br><br>
Finally, at ee70000, \\(\eta\\) is dethroned by \\(y\\), which will remain the strongest variable for the rest of the game. Many of the top leaderboard players are looking forward to this mark, because for \\(y\\) it only takes **\\(22 f(t)\\) for an \\(e1\\) increase in \\(x\\)**, which is intriguingly close to the \\(17 f(t)\\) the psi3 upgrades offered long ago in our distant past. We'll only truly know how much of a difference this makes when the first players reach ee70000 in maybe 6 months, but that time frame will depend on how many/when new custom theories become official.

<table class="spqcey">
<thead>
  <th></th>
  <th>F(t) Needed to Gain e1 x</th>
</thead>
   <tbody>
      <tr>
         <td class="leftHeader">Psi3</td>
         <td>ee17</td>
      </tr>
      <tr>
         <td class="leftHeader">ξ</td>
         <td>ee77</td>
      </tr>
      <tr>
         <td class="leftHeader">η</td>
         <td>ee45</td>
      </tr>
      <tr>
         <td class="leftHeader">y</td>
         <td>ee22</td>
      </tr>
   </tbody>
</table>

![y, eta, and xi variable power](/images/variable-power/y_xi_eta.png)
###### A plot with only \\(y\\), \\(\eta\\), and \\(\xi\\) to illustrate the difference in their scaling and where each variable becomes dominant.


## Why We Buy \\(y\\) During Endgame Graduation Recovery



## Additional Graphs
(will include the graphs I have with log percentage power for each variable)
