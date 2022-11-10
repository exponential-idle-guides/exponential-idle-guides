---
title: "Visualizing Variable Power Throughout the Game"
description: "Using graphs to show how the power of variables changes throughout the purchase of y power upgrades, the psi3 upgrades, why we buy y during recovery, and the eventual domination of the y variable."
author: "spqcey"
contributors: "the Amazing Community"
draft: true
order: 3
---

## Introduction
Let's start by defining which variables we're discussing. We will discuss the main-game variables, (\\(x-\xi\\)), NOT the upgrades bought in theories.
We can split the progression through the game into three sections.
The first section, from the start to ee4310, includes the unlocking of all of the variables, which finishes with the unlocking of \\(\xi\\) at ee791. It also includes the purchase of \\(y\\) power upgrades, of which we will discuss more later.
The second section is from ee9160 to ee47362, and is the range when we buy supremacy upgrades known as "psi3" upgrades.
The final section is after ee47362, where we see the title of strongest variable change a few more times before it changes for the final time at ~\\(ee70000\\)

### Program
To visualize the power of each variable throughout the game, I've created a script in Python that can compute the strength of all variables at any given \\(f(t)\\). It does this by simulating the purchase of all of the variable levels it can, stopping when it costs more than can be afforded. It then computes the power the variable has at the level it has. It does this for every variable.
To create the graphs seen shortly, I repeated this computation at many different \\(f(t)\\) points, then graphed the power of each variable across an \\(f(t)\\) interval.
Something to note about the program is that it computes the base power, \\(x\\), not \\(x_8\\) which is used in the main equation to compute \\(f(t)\\). Because of how \\(x_8\\) is computed in-game, it can't be universally represented in these graphs. However, this has no effect on which variable is strongest, so it doesn't matter given the purpose of this post.


## Unlocking Variables (0 - ee791)

## Unlocking y Power Upgrades (ee50 - ee4310)

## Psi3 Upgrades (ee9160 - ee47362)

## Post-Psi3 Variable Power (ee47362+)

## Why We Buy y During Endgame Graduation Recovery
