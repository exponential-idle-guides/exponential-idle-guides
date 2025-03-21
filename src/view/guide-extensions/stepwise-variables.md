---
title: "Stepwise Variables"
description: "A guide on Stepwise variables."
author: "Eylanding"
contributors: "the Amazing Community"
order: 0
tags: T9+
---

## What are Stepwise variables?

All variables in Exponential Idle Theories can be classified into 3 types: Direct Multiplication (a.k.a. Direct Multi), Stepwise, and Linear variables.

Which type of variable a given variable is can be mostly determined simply by looking at it. If it is in the form $b^L$ it is a Direct Multiplication variable, but if it is just a number by itself, then it is a Stepwise or Linear variable.

 In order to tell the difference between Stepwise and Linear variables there are a few indicators:

- Stepwise variables are almost always integers.
- Linear variables are almost always very small (<1e6).
- Stepwise variables often have subscript (e.g. $q_1$). In contrast, Linear variables are often by themselves (e.g. $n$).
- Linear variable increase, believe it or not, linearly. If it's not growing linearly, it is not a Linear variable.

However, there indicators are not perfect. $c_1$ in FP grows linearly up to 100, and even though it stays an integer, the linear growth has a low value, growing by 1 per level keeping it small. It is actually a Stepwise variable with an unusually high step length).

For example:
- $c_1 = 2^{52}$ - Direct Multi
- $q_1 = 1.67e91$ - Probably Stepwise
- $r_2 = 7.4^{81}$ - Direct Multi
- $s = 0.25$ - Probably Linear

All variables have the same cost model (exponential). The difference between Stepwise and Direct Multi variables is what happens when you buy an upgrade.

## The simple variables

Direct Multi variables are very simple. When you buy an upgrade, what happens is exactly what you expect to happen. The exponent is increased by one, raising it's value by a factor of it's base (e.g. $3{^4}\rightarrow 3^{5}\rightarrow 3^{6}$ is $3$x increase per level).

Linear variables increase by a set amount per level (e.g. $2\rightarrow3\rightarrow4\rightarrow5$ is $+1$ per level). This is usually very weak, so they are generally in exponents or other exponential functions (or capped).

## Stepwise variables

Stepwise variables are more complicated than Direct Multi variables. It is impossible to know how a Stepwise variable will increase just by looking at it. One needs to examine the code in order to know how it will increase. Stepwise variables can be described with 3 numbers, their initial value (I), their step length (S), and their base power (B).

###### Note: "initial value (I)" is not commonly used, as due to the nature of the game, it does not actually affect any strategy, so it is usually ignored. Furthermore, it does not have a name in code - "initial value" is just a term I personally use.

A Stepwise variable starts with a value of 0. Every time you upgrade it, it will increase by I, it's initial increment. Every S levels, the amount increased per level increases by a factor of B.

This is easiest explained with an example. Let's create a variable $c_1$. This variables will have an initial (I) of 1, a base (B) of 2, and a step (S) of 10. At level 0, $c_1$ has a value of 0. Every upgrade, $c_1$ increases by I, which is 1. Thus, $c_1 = 1$ at level 1, $c_1 = 2$ at level 2, and so on. At level 10, $c_1 = 10$, but something else happens. It's step length (S) is 10. Now the amount $c_1$ increases per level increases by a factor of B, in this case doubling, so $c_1$ increases by 2 per level. At level 11, our variable now hold a value of 12, up to a value of 30 at level 20, where the increment doubles again, increasing by 4 now per level.

| level | value | level | value | level | value |
|-------|-------|-------|-------|-------|-------|
| 0     | 0     | 10    | 10    | 20    | 30    |
| 1     | 1     | 11    | 12    | 21    | 34    |
| 2     | 2     | 12    | 14    | 22    | 38    |
| 3     | 3     | 13    | 16    | 23    | 42    |
| 4     | 4     | 14    | 18    | 24    | 46    |
| 5     | 5     | 15    | 20    | 25    | 50    |
| 6     | 6     | 16    | 22    | 26    | 54    |
| 7     | 7     | 17    | 24    | 27    | 58    |
| 8     | 8     | 18    | 26    | 28    | 62    |
| 9     | 9     | 19    | 28    | 29    | 66    |

###### First 30 levels (0-29) of a variable with initial (I) of 1, base (B) of 2, and step (S) of 10

### Nomenclature

As before, in an attempt for a better explanation, I made my own nomenclature (sorry about that). Here is the universally accepted nomenclature. When talking about Stepwise variables, one usually uses 2 numbers to describe it: its base and its step. It is written like this (B, S). For example, the variable as described before, $c_1$, is a (2, 10) Stepwise variable.

 Whilst the initial value of a Stepwise variable affects the theory and could affect variable competition, when variables are multiplied together—as they are in most theories, the initial value can be factored out and ignored. The initial increment value does not increase how much a variable increases per level as a percentage. For example, (2,10) with an initial of 1 follows: 1, (+100%) 2, (+50%) 3; the same variable with an initial of 10 follows: 10, (+100%) 20, (+50%) 30. Different numbers, same percentage difference.

### What Stepwise variables am I working with?

The easiest way to determine what Stepwise variable you are working with is to look into the code. The code of all main and official custom theories are at ConicGames' GitHub. Main theories are found in the SDK [here](https://github.com/conicgames/theory-sdk/tree/main/samples) and official custom theories are found [here](https://github.com/conicgames/custom-theories/tree/main/official).

In **ALL** official custom theories, all Stepwise variables are (2, 10) Stepwise variables. Furthermore, there are no linear variables.

### Basic Stepwise variable strategy

(2, 10) Stepwise variables increase by on average $7\%$ per upgrade, and in all listed strats in the [Theory Strategies Explained Guide](https://exponential-idle-guides.netlify.app/guides/theory-strategies/) are bought at a 10x ratio to doubling variables (Direct Multi variables with a base of 2). However, due to the nature of Stepwise variables, sometimes it is wise not to follow this ratio.

First of all, Stepwise variables work differently at the very beginning. The first upgrade is usually free and required, as it moves it from 0 to 1. Very early upgrades are usually unusually powerful. For example, the level 3 -> 4 upgrade increases it by $33\%$, much more than the $7\%$ average increase. More importantly is the non-smooth nature of Stepwise power functions.

 Stepwise power functions have a jump at each step length. This jump means that just after getting the increase to their amount per level, they are stronger. For example, a (2, 10) Stepwise variable would be slightly stronger just after each multiple of 10, level 10 -> level 11 is stronger than level 9 -> level 10.

![Stepwise Power Function](images/stepwise.png)

###### $s(x)$ is the (2, 10) Stepwise power function. Red: $s(x)$, Blue: $100\left(\frac{b\left(x+1\right)}{b\left(x\right)}-1\right)$, i.e. the amount s(x) increases when you buy an upgrade starting from upgrade x, as a percentage.

In the above graph, the blue line represents approximately how much $s(x)$ increases after buying a level, start from level $x$. As you can see, this spikes at multiples of 10 (or more generally multiples of S) and goes down from there. From this, one can see that Stepwise variables are more power right a multiple of S and weakest right before it.

With this knowledge, one can adjust their strategy. For (2, 10) Stepwise variables specifically, the recommended ratio to buy them (usually 10) relative to a doubling variable is lower just after a multiple of 10 and higher just before one. For example, let $c_1$ and $c_2$ be Stepwise and doubling variables respectively. If $c_1$ is level 341 and costs $4.86e94$ and $c_2$ is level 57 and costs $3.91e95$, we would usually save for $c_2$, but in this case, because $c_1$ is just after a multiple of 10, one should actually buy $c_1$ first.

More specifically, the ratio is 5x at a multiple of 10, increasing to 10x at 5 more then a multiple of 10, and 15x at 9 more than a multiple of 10.

### Mod10 strategies

Many strategies make use of this understanding of Stepwise variables by changing the ratio bought at depending on where one is in the cycle of these Stepwise variables. This is done using the [modulo operator](https://exponential-idle-guides.netlify.app/guides/theory-strategies/#modulus-explanation), $\%$. Take the above example. $c_1$ is a (2, 10) Stepwise and $c_2$ is a 2x Direct Multi variable. The ratio we want to buy it at is 5x when $c_1$'s current level = 10, 20, 30 etc. and up to 15x when it's current level is 19, 29, 39 etc. Thus, we define the strategy like this

| $c_1 | Buy at $\frac{1}{5 + lvl \% 10}$ of $c_2$ |
| - | - |
| $c_2$ | Always Buy |

This uses a new operation you may not have encounters before, the modulo operator $\%$.

The modulo operator returns the **remainder** of dividing the first number by the second number. For instance, take $11 \% 3$. IF we do 11/3, we get 3 remainder 2. This remainder is what the modulo operator returns, so $11 \% 3 = 2$. Thus, by taking the level of the Stepwise variable mod ($\%$) it's step length (in this case 10), we get how far into the Stepwise cycle that variable is.
