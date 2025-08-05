---
title: "Day 4: Fibonacci Foil"
description: "Introduction to custom theory creation."
author: "prop"
contributors: "the Amazing Community"
order: 4
tags: other
---

Top of the mooning. It is dawn of the fourth day.

I know you cannot sleep. Across the window, the wind is howling at all the drying lines strewn across the alleyway, hung between two pedestrian houses. A cricket chirps under the speckled indigo sky. There is no moon for you to see tonight. Instead, you see various clouds peeking over the horizon, flowing sharply like blades of grass. Wait, isn't that the Exponential Idle graph?

You wake up from your sleep. You have to find out who did this to your theory. Only then could you resume powering up its progression using a new tool, called milestones.

### Finding the culprit

Let's take a look at the theory's code to see which part might be causing the problem.

The theory primarily runs the tick function 10 times per second. Usually, this will be the heaviest part of your theory. Looks like it only has 3 lines, calculating the various upgrades. Each of these value retrieval functions (`getc1` or `getc2`) get called once. Let's look at the `init` function. These upgrades' description and information are updated 10 times per second as well, and each of them also tries to retrieve their values once or twice. Hum...

Let's take a look at them now. Naively, we can try to count the number of lines. Although this is not the best tactic to gauge overall performance, in this case we might be able to gleam some insight into the problem:

While `getc1` and `getc2` both consist of 1 line, `f`'s value retrieval function has at least 3 lines: the level 0 case, the level 1 case, and the general case. But wait! In the general case, the function calls itself at a lower level! This is called *recursion*, and while it's a useful tactic in programming, we can't ignore the effect on performance if we are recoursing more than once, like we do here. Each function call spawns up to two smaller function calls, which means the total number of calls very much exceeds the 3 lines we see... In fact, the higher the level, the number of function calls performed grows exponentially? Actually, it is proportional to the Fibonacci numbers themselves! This is not good.

### Stopping Fibonacci's foil

Let's look at how we can optimise these calculations. While we can store our Fibonacci numbers in a lookup table to avoid recursion, not only does this approach consume more memory as we level the upgrade, we may also hit the JavaScript interpreter's computational limits (which will be explained at a later date). Besides, this wouldn't be a guide about a maths game without me making an excuse to introduce any mathematical formulae. And turns out, we can calculate a Fibonacci term fairly quickly using one, known as Binet's formula, which was derived by Jacques Philippe Marie Binet, in some year, somewhere:

`F(n) = (((1+sqrt(5))/2)^n - ((1-sqrt(5))/2)^n) / sqrt(5)`

An explanation of how this formula came to be can be found [here](https://artofproblemsolving.com/wiki/index.php/Binet%27s_Formula). In the theory, let's implement this formula by first assigning reusable constants globally, and then calculating the term using them:

```js
const fibSqrt5 = BigNumber.FIVE.sqrt();
const fibA = (BigNumber.ONE + fibSqrt5) / BigNumber.TWO;
const fibB = (BigNumber.ONE - fibSqrt5) / BigNumber.TWO;

let getf = (level) => (fibA.pow(level) - fibB.pow(level)) / fibSqrt5;
```

Now, let's head in game and check it out!

Unfortunately, it seems like we have encountered our first error. Pressing on the warning sign in the game gives us a clue of what error we have encountered, as well as what line of code it is on. Additionally, the error will also be logged inside the SDK. Mine says:

`Error: (Line 65, Col 4) Exception of type 'ExponentialIdle.BigNumber+BigNumberException' was thrown.`

This is an arithmetic exception. We know that while negative numbers can be raised to an integer power, and `fibB` is a negative number (approximatly -0.618) raised to an integer `level`, the game simply does not allow us to do this. This is because in JavaScript, integers don't exist, but are part of the Number class, which are actually double precision floating point numbers (doubles for short), analogous to real numbers. In mathematics, raising a negative real number to another real number's power doesn't usually yield a real number, unless the power is also an integer, so this exception is thrown to prevent such an operation. Let's circumvent this by pretending fibB is positive, and then checking for the power's parity (whether it's even or odd) to give the power a sign:

```js
const fibSqrt5 = BigNumber.FIVE.sqrt();
const fibA = (BigNumber.ONE + fibSqrt5) / BigNumber.TWO;
const fibB = (fibSqrt5 - BigNumber.ONE) / BigNumber.TWO;

let getf = (level) =>
{
    if(level % 2 == 0)
        return (fibA.pow(level) - fibB.pow(level)) / fibSqrt5;
    return (fibA.pow(level) + fibB.pow(level)) / fibSqrt5;
};
```

Marvellous! The Binet formula works, and we no longer have to deal with the lag caused by these Fibonacci numbers!

### Continuing with progression

Yesterday, we talked about the progression in idle games. However, since we were halted by our performance problem, we didn't have enough time to implement the automations of progression. In an Exponential Idle theory, we're given two tools: the Buy All button, and the Auto-buyer. Like Publications, these can be created using functions provided by the API:

```js
let init = () =>
{
    ...
    theory.createBuyAllUpgrade(1, currency, BigNumber.from('1e12'));
    theory.createAutoBuyerUpgrade(2, currency, BigNumber.from('1e17'));
}
```

These upgrades will now be available for purchase in the Permanent tab, along with Publications. The Buy All upgrade unlocks a button at the bottom of the screen that allows you to purchase all upgrades at once when clicked, while the Autobuyer will periodically perform that action for you. Because of this, the Autobuyer is the 'evolution' of the Buy All button, and should be set up to unlock at a later point than the Buy All upgrade (for example, `1e17` from `1e12`, as shown above).

Unless, you're the one who created Riemann Zeta Function (curse you).

### Power up with a milestone

Aside from reset and automation tools, the Theory API also gives us another tool to provide power-ups to progression. These are called milestones, and they are unlocked according to progression in the theory's tau value, which is essentially your high score for the theory. Common effects for a milestone include:

- Unlocking a new term
- Powering an existing term
- Unlocking an entirely new mechanic

Today, we will be creating our first milestone - a simple power increase for our `c1`. Start by specifying where milestone points are rewarded:

```js
import { ExponentialCost, FreeCost, LinearCost } from '../api/Costs';

let init = () =>
{
    ...
    theory.setMilestoneCost(new LinearCost(15, 15));
}
```

While our normal upgrades use exponentially scaling costs, milestones often use a different model called `LinearCost`, and the way their costs are calculated is on a log10 scale. In this case, where the first point is rewarded corresponds not to 15 tau, but `1e15`, and the next points' costs will be multiply by `1e15` each, starting at `1e30`, `1e45`, etc.

Next, let's create the milestone using `theory.createMilestoneUpgrade` so we can have something to spend on:

```js
import { Localization } from '../api/Localization';

let c1ExpMs;

let init = () =>
{
    ...
    {
        c1ExpMs = theory.createMilestoneUpgrade(0, 5);
        c1ExpMs.description = Localization.getUpgradeIncCustomExpDesc('c_1', '0.03');
        c1ExpMs.info = Localization.getUpgradeIncCustomExpInfo('c_1', '0.03');
        c1ExpMs.boughtOrRefunded = (_) => theory.invalidatePrimaryEquation();
    }
}
```

This milestone will add 0.03 to the exponent of `c1` every level, up to 5 levels. For the description and information, we use the `Localization` class to get the strings suitable for this milestone ('Increases {0} exponent by {1}'), and as these strings do not need to be refreshed, instead of assigning them to `getDescription` and `getInfo`, we assign them to `description` and `info`. When we put a point into the milestone or take away from it, we should also update the primary equation manually with `theory.invalidatePrimaryEquation` to reflect the information shown on screen. But what information? We haven't even implemented the power increase:

```js
let getc1Exp = (level) => 1 + 0.03 * level;

var tick = (elapsedTime, multiplier) =>
{
    ...
    currency.value += dt * bonus * getc1(c1.level).pow(getc1Exp(c1ExpMs.level)) * getc2(c2.level) * (BigNumber.ONE + getf(f.level));
}

var getPrimaryEquation = () => `\\dot{\\rho} = c_1${c1ExpMs.level ? `^{${getc1Exp(c1ExpMs.level)}}` : ''}c_2(1+f)`;
```

Now in the primary equation, we see our first use of a ternary operator `x ? y : z`, which takes in a condition (boolean), and returns one of two values depending on whether the condition is true. Here, the condition is specified as a number, which is only equivalent to false when it is 0. This means that the exponent will not display when the milestone's level is 0 (`c1`'s exponent is at 1), since displaying a power of 1 is redundant.

With the first implementation of a milestone done, you can take a break and play the theory until you can buy it and test it out. We can verify that our income increases as we buy the milestone, and that it displays `c1`'s exponent on screen.

While your house burns down as the theory skyrockets into infinity, let's add a quality of life feature: to be able to view `c1`'s value after the milestone when the `(i)` button is pressed. To do this, let's modify its `getInfo`:

```js
let init = () =>
{
    ...
    {
        c1 = theory.createUpgrade(1, currency, new ExponentialCost(10, 1));
        let getDesc = (level) => `c_1 = ${getc1(level).toString(0)}`;
        let getInfo = (level) =>
        {
            if(c1ExpMs.level)
                return `c_1^{${getc1Exp(c1ExpMs.level)}}=
                ${getc1(level).pow(getc1Exp(c1ExpMs.level)).toString()}`;
            return getDesc(level);
        }

        c1.getDescription = (amount) => Utils.getMath(getDesc(c1.level));
        c1.getInfo = (amount) => Utils.getMathTo(getInfo(c1.level),
        getInfo(c1.level + amount));
    }
}
```

Save the file. You will see that when you hold down the `(i)` button on screen, it shows `c1`'s exponent and its value after the milestone is applied.

### Aftermath

The theory is slowly getting more complete. Although, with it seemingly skyrocketing without stopping (in other words, diverging), we can't really add any more content. The theory at this point is not very compelling to play either. Join me [tomorrow](../ct-creation-day-5/) on a quest to find the perfect balance for it.

Meanwhile, the source code after today's work can be found here:

```js
import { BigNumber } from '../api/BigNumber';
import { ExponentialCost, FreeCost, LinearCost } from '../api/Costs';
import { Localization } from '../api/Localization';
import { theory } from '../api/Theory';
import { Utils } from '../api/Utils';

var id = 'my_theory';
var name = 'My Theory';
var description = 'The one and only.';
var authors = 'Stuart Clickus';

let currency;
let clicker;
let c1, c2;
let f;
let c1ExpMs;

let init = () =>
{
    currency = theory.createCurrency();

    {
        clicker = theory.createUpgrade(0, currency, new FreeCost);
        clicker.description = Utils.getMath('\\rho \\leftarrow \\rho + 1');
        clicker.info = 'Increases currency by 1';
        clicker.bought = (amount) => currency.value += 1;
    }

    {
        c1 = theory.createUpgrade(1, currency, new ExponentialCost(10, 1));
        let getDesc = (level) => `c_1 = ${getc1(level).toString(0)}`;
        let getInfo = (level) =>
        {
            if(c1ExpMs.level)
                return `c_1^{${getc1Exp(c1ExpMs.level)}}=
                ${getc1(level).pow(getc1Exp(c1ExpMs.level)).toString()}`;
            return getDesc(level);
        }

        c1.getDescription = (amount) => Utils.getMath(getDesc(c1.level));
        c1.getInfo = (amount) => Utils.getMathTo(getInfo(c1.level),
        getInfo(c1.level + amount));
    }

    {
        c2 = theory.createUpgrade(3, currency, new ExponentialCost(500, 3));
        let getDesc = (level) => `c_2 = ${getc2(level).toString(0)}`;
        c2.getDescription = (amount) => Utils.getMath(`c_2 = 2^{${c2.level}}`);
        c2.getInfo = (amount) => Utils.getMathTo(getDesc(c2.level),
        getDesc(c2.level + amount));
    }

    {
        f = theory.createUpgrade(2, currency, new ExponentialCost(200, 1.618034));
        let getDesc = (level) => `f = ${getf(level).toString(0)}`;
        f.getDescription = (amount) => Utils.getMath(getDesc(f.level));
        f.getInfo = (amount) => Utils.getMathTo(getDesc(f.level),
        getDesc(f.level + amount));
    }

    theory.createPublicationUpgrade(0, currency, BigNumber.from('1e7'));
    theory.createBuyAllUpgrade(1, currency, BigNumber.from('1e12'));
    theory.createAutoBuyerUpgrade(2, currency, BigNumber.from('1e17'));
    
    theory.setMilestoneCost(new LinearCost(15, 15));

    {
        c1ExpMs = theory.createMilestoneUpgrade(0, 5);
        c1ExpMs.description = Localization.getUpgradeIncCustomExpDesc('c_1', '0.03');
        c1ExpMs.info = Localization.getUpgradeIncCustomExpInfo('c_1', '0.03');
        c1ExpMs.boughtOrRefunded = (_) => theory.invalidatePrimaryEquation();
    }
}

let getc1 = (level) => Utils.getStepwisePowerSum(level, 2, 5, 0);
let getc1Exp = (level) => 1 + 0.03 * level;

let getc2 = (level) => BigNumber.TWO.pow(level);

const fibSqrt5 = BigNumber.FIVE.sqrt();
const fibA = (BigNumber.ONE + fibSqrt5) / BigNumber.TWO;
const fibB = (fibSqrt5 - BigNumber.ONE) / BigNumber.TWO;

let getf = (level) =>
{
    if(level % 2 == 0)
        return (fibA.pow(level) - fibB.pow(level)) / fibSqrt5;
    return (fibA.pow(level) + fibB.pow(level)) / fibSqrt5;
};

var tick = (elapsedTime, multiplier) =>
{
    let dt = BigNumber.from(elapsedTime * multiplier);
    let bonus = theory.publicationMultiplier;
    currency.value += dt * bonus * getc1(c1.level).pow(getc1Exp(c1ExpMs.level)) * getc2(c2.level) * (BigNumber.ONE + getf(f.level));
}

var getPrimaryEquation = () => `\\dot{\\rho} = c_1${c1ExpMs.level ? `^{${getc1Exp(c1ExpMs.level)}}` : ''}c_2(1+f)`;

var getSecondaryEquation = () => `${theory.latexSymbol} = \\max\\rho`;

var get2DGraphValue = () => currency.value.sign *
(BigNumber.ONE + currency.value.abs()).log10().toNumber();

const pubPower = 0.1;

var getPublicationMultiplier = (tau) => tau.pow(pubPower);

var getPublicationMultiplierFormula = (symbol) => `{${symbol}}^{${pubPower}}`;

var getTau = () => currency.value;

var getCurrencyFromTau = (tau) =>
[
    tau.max(BigNumber.ONE),
    currency.symbol
];

init();
```
