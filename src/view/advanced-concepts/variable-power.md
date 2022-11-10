---
title: "Visualizing Variable Power Throughout the Game"
description: "Using graphs to show how the power of variables changes throughout the purchase of y power upgrades, the psi3 upgrades, why we buy y during recovery, and the eventual domination of the y variable."
author: "spqcey"
contributors: "the Amazing Community"
draft: true
order: 3
---

## Introduction
Let's start by defining which variables we're discussing. We will discuss the main-game variables, (\\(x-\xi\\)), NOT the upgrades bought in theories.<br><br>
We can split the progression through the game into three sections.<br><br>
The first section, from the start to ee4310, includes the unlocking of all of the variables, which finishes with the unlocking of \\(\xi\\) at ee791. It also includes the purchase of \\(y\\) power upgrades, of which we will discuss more later.<br><br>
The second section is from ee9160 to ee47362, and is the range when we buy supremacy upgrades known as "psi3" upgrades.<br><br>
The final section is after ee47362, where we see the title of strongest variable change a few more times before it changes for the final time at ~ee70000.

### Program
To visualize the power of each variable throughout the game, I've created a script in Python that can compute the strength of all variables at any given \\(f(t)\\). It does this by simulating the purchase of all of the variable levels it can, stopping when it costs more than can be afforded. It then computes the power the variable has at the level it has. It does this for every variable.<br><br>
To create the graphs seen shortly, I repeated this computation at many different \\(f(t)\\) points, then graphed the power of each variable across an \\(f(t)\\) interval.<br><br>
Something to note about the program is that it computes the base power, \\(x\\), not \\(x_8\\) which is used in the main equation to compute \\(f(t)\\). Because of how \\(x_8\\) is computed in-game, it can't be universally represented in these graphs. However, this has no effect on which variable is strongest, so it doesn't matter given the purpose of this post.

## Unlocking Variables and y Power Upgrades (0 - ee4310)

### Unlocking Variables (0 - ee791)
The first levels of each variable range in cost from <kbd>Free</kbd> to a costly ee791. Here's a table with the cost of the first level of each variable:
<table class="spqcey">
<thead>
  <th></th>
  <th>Cost of First Level</th>
</thead>
   <tbody>
      <tr>
         <td class="leftHeader">x</td>
         <td>Free</td>
      </tr>
      <tr>
         <td class="leftHeader">y</td>
         <td>1.04</td>
      </tr>
      <tr>
         <td class="leftHeader">z</td>
         <td>1.08</td>
      </tr>
      <tr>
         <td class="leftHeader">s</td>
         <td>10.00</td>
      </tr>
      <tr>
         <td class="leftHeader">u</td>
         <td>ee4.2871</td>
      </tr>
      <tr>
         <td class="leftHeader">v</td>
         <td>ee10.045</td>
      </tr>
      <tr>
         <td class="leftHeader">w</td>
         <td>ee18.379</td>
      </tr>
      <tr>
         <td class="leftHeader">α</td>
         <td>ee29.365</td>
      </tr>
      <tr>
         <td class="leftHeader">β</td>
         <td>ee43.064</td>
      </tr>
      <tr>
         <td class="leftHeader">γ</td>
         <td>ee59.526</td>
      </tr>
      <tr>
         <td class="leftHeader">δ</td>
         <td>ee78.793</td>
      </tr>
      <tr>
         <td class="leftHeader">ε</td>
         <td>ee100.90</td>
      </tr>
      <tr>
         <td class="leftHeader">ζ</td>
         <td>ee153.79</td>
      </tr>
      <tr>
         <td class="leftHeader">η</td>
         <td>ee218.41</td>
      </tr>
      <tr>
         <td class="leftHeader">θ</td>
         <td>ee255.19</td>
      </tr>
      <tr>
         <td class="leftHeader">ι</td>
         <td>ee337.79</td>
      </tr>
      <tr>
         <td class="leftHeader">κ</td>
         <td>ee432.59</td>
      </tr>
      <tr>
         <td class="leftHeader">λ</td>
         <td>ee539.71</td>
      </tr>
      <tr>
         <td class="leftHeader">ν</td>
         <td>ee659.31</td>
      </tr>
      <tr>
         <td class="leftHeader">ξ</td>
         <td>ee791.49</td>
      </tr>
   </tbody>
</table>

###### F(t) values courtesy of the [Exponential Idle Wiki](https://exponential-idle.fandom.com/wiki/Instructions).

<br><br>

Here's a graph of variable power up to a \\(f(t)\\) of ee50. The initial purchase of variables \\(y\\) through \\(\beta\\) can be seen.

![Variable power up to ee50](/images/variable-power/ee50.png)
###### Computed every ee1 from ee1 to ee50.

And here's a graph of variable power up to the purchase of the final variable at ee791:

![Variable power up to ee850](/images/variable-power/ee850.png)
###### Computed every ee1 from ee1 to ee850.

You may be wondering about the abrupt jumps in the power of all of variables. Well, that's what we'll discuss in our next section, about the \\(y\\) power upgrades.

### y Power Upgrades (ee50 - ee4310)

## Psi3 Upgrades (ee9160 - ee47362)

## Post-Psi3 Variable Power (ee47362+)

## Why We Buy y During Endgame Graduation Recovery
