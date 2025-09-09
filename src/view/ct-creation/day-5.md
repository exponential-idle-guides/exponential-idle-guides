---
title: "The Power of Stacking"
description: "Introduction to custom theory creation."
author: "prop"
contributors: "the Amazing Community"
---

Hola. It is dawn of the fifth day.

Today we are going to bring the theory down to earth, because admittedly, big numbers are very bland, and in this guide, you have to listen to me, because this world needs saving from meaningless dopamine-inducing divergence.

In this lesson, we will learn about a way to look at the theory's balance, so that we can fix its divergence. Then, we will continue by implementing a new term that utilises the theory's storage, called the internal state.

## A new framework

When it comes to balancing, there is a rudimentary yet suprising way of balancing devised by me, which has yet to be talked about within these circles. That is, viewing each term as a contribution to the total income 'power'. Let me introduce the concept:

Your tau is represented by 100%, a goal to be beaten. Within a publication, your terms and publication multiplier combine together to try to get past this goal, within finite time. The stronger they are, the less time it takes to reach your previous high score. So disregarding the initial cost of upgrades and that finite time, we can represent the theory's total power as the **sum of each term's power**, expressed logarithmically (remember this). The total power is usually a number close to 1, or 100%, where the theory does not decay. The lower it is from 100%, the faster it decays, e.g. 90% decays faster than 95%; while it always diverges with a total power greater than 100%.

When applying this framework:

- It requires that all of your **significant** terms are multiplied together in the currency income formula.
- **Non-significant terms** - ones that are relatively finite (a constant, or otherwise does not scale exponentially, such as time) - do not count towards the total power.
- Initial upgrade costs are ignored, as their effect on the power is also a constant.

Let's examine a term's growth, starting with the simplest upgrade: $c_2 = 2^x$. I will give the formula for its power as $1/\text{cost progress}$, and this will make sense as I give examples. Imagine that $c_2$ had a cost progress of 1, which means each level is twice as expensive as the previous. However, when you buy a level, your income doubles, which means that the next level will cost the same amount of time as the previous, and the next of the next, ad infinitum. In this case, $c_2$'s power is calculated to be $1/1 = 1$, exactly 100%. Indeed, if your theory consists of only this $c_2$, it shall never decay.

Let's change the cost progress to 2. Each level is now four times as expensive, so the next level will take $4/2 = 2$ times the amount of time to reach as the previous level. In this case, $c_2$'s power is calculated to be $1/2 = 0.5$, or 50%.

Got the hang of it?

Next, let's examine the upgrade $c_1$, a stepwise upgrade with base 2 and length 5. For this upgrade, 5 levels are needed for it to nearly double in value, which means that asymptotically, its power has a formula of $1/(\text{length} \times \text{cost progress})$. For example, a $c_1$ upgrade with a cost progress of 1, and base 2 length 5 as before, has a power of $1/(5\times1) = 0.2$, or 20%.

For variations of $c_2$ with a different base than 2, such as $e^x$ or $3^x$, the power formula becomes $\log_2^\text{base}/\text{cost progress}$. This is the case with our upgrade $f$, which is proportionate to $\phi^x$ ($\phi$ being the golden ratio), and so its power is represented as $\log_2^\phi/\text{cost progress}$.

For the publication multiplier, the added power is simply tau's exponent in the formula, scaled according to the currency-to-tau conversion rate.

### With our powers combined

Let's apply this framework to our theory.

- $c_1$ is a stepwise upgrade with base 2 length 5, and progress 1. Its power is $1/(5\times1) = 0.2$, or 20%.
- $c_2$ is an exponential upgrade with base 2 and progress 3. Its power is $1/3 = 0.333$, or 33.33%.
- $f$ is an exponential upgrade with base $\phi$ and progress $\phi$. Its power is $\log_2^\phi/\phi = 0.429$, or 42.9%.
- The publication multiplier corresponds to 10% of $\tau$, as defined in [Day 3](../day-3/#publications>).

Summating all the terms yields a total power of 1.062, or 106.2%. No wonder it's skyrocketing so hard. We haven't even taken into account the milestone that we had implemented yesterday (in this case, the exponent 1.15 would be multiplied to $c_1$ to yield 23%).

We can see that $f$ is quite the most powerful upgrade in our theory. While we want to reduce its power overall, we don't want it to become so bad that the early game slows down to a crawl. Let's introduce a new tool to our balancing toolkit: **composite costs**. These allow the theory to split the upgrade into two layers, each with its own cost model:

```js
import { CompositeCost, ExponentialCost, FreeCost, LinearCost } from '../api/Costs';

let init = () =>
{
    ...
    {
        f = theory.createUpgrade(2, currency, new CompositeCost(30,
        new ExponentialCost(100, 1.618034),
        new ExponentialCost(1e16, 1.618034 * 1.5)));
        ...
    }
}
```

The arguments for an **CompositeCost** constructor are as follows:

- **maxfirstCostLevel**: the amount of levels until it switches from the first model to the second, in this case 30.
- **firstCost**: the first cost model.
- **secondCost**: the second cost model.

These models can be of any type, from exponential to linear, to free, or even to another composite cost. We will also be making the first model faster by reducing the initial cost from 200 to 100. Now, in game, you won't see this in action yet, since your levels may be well over a million, but you can reset the theory in its settings in order to play again.

To do this, head to the theory selection menu by pressing the switch symbol at the top left corner, then heading to **My Theory**. Click on the cog to access the settings, then simply hit **Reset**. You will go back to 0 tau and all other progress has been reset. And as you begrudgingly go through the trenches of... Oh? You need hacks? Take this line, try pasting it onto SDK's command line (in the bottom left corner).

```js
currency.value *= 10;
```

As you reach $f$ level 30, you notice that $f$'s cost jumps down as the composite cost switches to the second model. This won't affect anything, but your players might be annoyed by that. Simply set the second cost's initial cost to something higher, or just leave it be, because who doesn't want lower costs to go faster?

### Calculating rebalanced powers

Let's take a look at each term's power again:

- $c_1$ goes from 20% to 23% due to the milestone. Let's assume the maximum of 23%.
- $c_2$ is at 33.33%.
- For $f$, since the first cost model only exists for a few levels, this would be considered negligible in the long run. For the second cost model, the progression is $\phi\times1.5$, so $f$'s new power would be: $\log_2^\phi/(\phi\times1.5) = 0.286$, or 28.6%.
- Publications are at 10%.

Summating all terms yields 0.9493, or 94.93%. Congratulations! We have successfully created a margin for new upgrades to be included in the future.

## Time to accumulate new friends

So far, our upgrades have been quite straight forward: click, and the income grows instantly. However, in many theories, both base game and custom ones, there are a number of upgrades that grows the value of another term, which is then multiplied to the income. These are called cumulative upgrades, and are commonly called $q$ because of the name (do not listen to those who name their instant upgrades $q$!)

Since the early game is quite covered, let's position the $q$ upgrade a bit further into progression. One of the ways to do this, is to require a milestone to unlock the upgrade. Let's make a milestone that unlocks $q$:

```js
let qMs;

let init = () =>
{
    ...
    {
        qMs = theory.createMilestoneUpgrade(1, 1);
        qMs.description = Localization.getUpgradeAddTermDesc('q');
        qMs.info = Localization.getUpgradeAddTermInfo('q');
        qMs.boughtOrRefunded = (_) =>
        {
            theory.invalidatePrimaryEquation();
            updateAvailability();
        }
    }

    updateAvailability();
}

var updateAvailability = () => {};
```

Similar to the $c_1$ exponent milestone, we assign static strings, and update the primary equation when we buy or refund it. However, in order to make the $q$ upgrade also appear and disappear (although at this point we haven't programmed it), let's make an **updateAvailability** function and call it here, as well as at the end of **init**. Let's leave it empty for now.

Next, let's add an upgrade for $q$ before the term itself, so that we have something to put into **updateAvailability**:

```js
let qdot;

let init = () =>
{
    ...
    {
        qdot = theory.createUpgrade(4, currency, new ExponentialCost(1e45, 2.5));
        let getDesc = (level) => `\\dot{q} = ${getqdot(level).toString(0)}`;
        qdot.getDescription = (amount) => Utils.getMath(getDesc(qdot.level));
        qdot.getInfo = (amount) => Utils.getMathTo(getDesc(qdot.level),
        getDesc(qdot.level + amount));
    }
}

var updateAvailability = () =>
{
    qdot.isAvailable = qMs.level > 0;
};

let getqdot = (level) => Utils.getStepwisePowerSum(level, 2, 10, 0);
```

Although I have been calling the upgrade $q$, its proper name is $\dot{q}$ ('q dot'), which indicates the change of $q$ according to time. This is called the dot notation, or Newton's notation, after Isaac Newton. The game uses this notation because it is much more compact compared to Leibniz's notation ($dq/dt$).

Now, let's actually implement the $q$ term, and display its value on screen:

```js
let q = BigNumber.ONE;

var tick = (elapsedTime, multiplier) =>
{
    ...
    // Don't forget to double check your implementation!
    let dq = qMs.level ? dt * getqdot(qdot.level) : BigNumber.ZERO;
    q += dq;

    currency.value += dt * bonus * getc1(c1.level).pow(getc1Exp(c1ExpMs.level)) * getc2(c2.level) * (BigNumber.ONE + getf(f.level)) * (qMs.level ? q : BigNumber.ONE);

    theory.invalidateTertiaryEquation();
}

var getPrimaryEquation = () => `\\dot{\\rho} = c_1${c1ExpMs.level ? `^{${getc1Exp(c1ExpMs.level)}}` : ''}c_2(1+f)${qMs.level ? 'q' : ''}`;

var getTertiaryEquation = () => qMs.level ? `q = ${q.toString()}` : '';

var postPublish = () =>
{
    q = BigNumber.ONE;
}
```

This snippet of code has a lot to unpack. The simple idea is that, for every tick, an amount of $dq$ is added onto our cumulative variable $q$, which is calculated by our $\dot{q}$ upgrade times the amount of time passed. Our income is then multiplied by $q$ amongst other terms. However, what happens when we don't have the milestone, is that $q$ has to stop growing ($dq$ is substituted with zero), and $q$ in the income formula is substituted with one since we do not have the term unlocked. The primary and tertiary equations are also reflective of these changes, and the tertiary equation specifically needs to be updated every tick to track the $q$ value. Finally, $q$ should be reset every time we hit Publish, in the **postPublish** function.

## A theory's internal state

Now, hit Save again on your theory file (without changing anything) and wait for the SDK to upload it. Notice that your $q$ has been reset back to one! (I am such a mean teacher). The reason why this happens, is that unlike upgrade levels, currencies, or milestones, terms like $q$ are just regular programming variables, which aren't saved anywhere outside of the scope that it's running in. In order to save these variables, the game provides us a way to store (serialise) them, in the form of an internal state. The internal state is stored as a string, and is loaded once after everything in the theory file has been loaded (which means it is run even after **init**).

The theory provides two functions for handling the internal state:

- **getInternalState** saves (serialises) variables of your choosing into a string that's stored in your save file. This function is called every 60 seconds while the theory is running, and once when you switch to another theory.
- **setInternalState** loads (deserialises) this state string from your save file. It is called once after everything else has loaded (upgrades, milestones, etc). You do not need to manually call either of these functions.

In most examples of theory implementations you've seen, either in the samples folder, or even custom theories, the internal state is often laid out in a straight line. While this can save space, it will definitely be a pain in your tooshie if you decide to change the state format by inserting or rearranging elements. Because of this, I will introduce to you the JSON method, which allows the internal state to be saved in a key-and-value format:

```js
var getInternalState = () => JSON.stringify
({
    q: q.toBase64String()
});

var setInternalState = (stateStr) =>
{
    if(!stateStr)
        return;

    let state = JSON.parse(stateStr);
    q = BigNumber.fromBase64String(state.q) ?? q;
}
```

This uses JavaScript's JSON namespace, with **stringify** to serialise, and **parse** to deserialise. You may notice that I'm also using other mysterious methods here: **toBase64String** and **fromBase64String**. In JavaScript, unlike plain objects, instances of a class (such as **BigNumber**, or even your own classes) can't innately be serialised into JSON[^1]. Instead, **BigNumber** (of which the **q** variable is an instance) uses **toBase64String** to serialise into a string, and **fromBase64String** to deserialise from it. So, contained in this **state** object is a key $q$, which stores the base 64 representation of the variable **q**, which can be accessed with **state.q**.

In this snippet, we also encounter a new syntax: the double question mark **??**. This is called the nullish coalescence, and it is used where we don't want null to be assigned to our variable, and instead, the right hand side would be what that assignment defaults to, if the left side happens to be null.

Now, save the theory, and let it run for a minute. Thanks to the internal state, whenever you go offline or switch to another theory, $q$'s value should be preserved.

## Aftermath

Before we end our session today, let's take a look at what we had discussed earlier: term powers. $\dot{q}$ is a stepwise upgrade of base 2 length 10, with a cost progress of 2.5. Under this framework, it should have a power of $1/(10\times2.5) = 0.04$, or 4%, which brings the total power of the theory from 94.93% to 98.93%. While how much $q$'s cumulative nature enhances its power (or whether it even does so at all) is still a mystery, we can be sure that we did make progress today, so I shall see you [tomorrow](../day-6/).

Meanwhile, the source code after today's work can be found here:

```js
import { BigNumber } from '../api/BigNumber';
import { CompositeCost, ExponentialCost, FreeCost, LinearCost } from '../api/Costs';
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
let qdot;
let c1ExpMs, qMs;

let q = BigNumber.ONE;

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
        f = theory.createUpgrade(2, currency, new CompositeCost(30,
        new ExponentialCost(100, 1.618034),
        new ExponentialCost(1e16, 1.618034 * 1.5)));
        let getDesc = (level) => `f = ${getf(level).toString(0)}`;
        f.getDescription = (amount) => Utils.getMath(getDesc(f.level));
        f.getInfo = (amount) => Utils.getMathTo(getDesc(f.level),
        getDesc(f.level + amount));
    }

    {
        qdot = theory.createUpgrade(4, currency, new ExponentialCost(1e45, 2.5));
        let getDesc = (level) => `\\dot{q} = ${getqdot(level).toString(0)}`;
        qdot.getDescription = (amount) => Utils.getMath(getDesc(qdot.level));
        qdot.getInfo = (amount) => Utils.getMathTo(getDesc(qdot.level),
        getDesc(qdot.level + amount));
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

    {
        qMs = theory.createMilestoneUpgrade(1, 1);
        qMs.description = Localization.getUpgradeAddTermDesc('q');
        qMs.info = Localization.getUpgradeAddTermInfo('q');
        qMs.boughtOrRefunded = (_) =>
        {
            theory.invalidatePrimaryEquation();
            updateAvailability();
        }
    }

    updateAvailability();
}

var updateAvailability = () =>
{
    qdot.isAvailable = qMs.level > 0;
};

let getc1 = (level) => Utils.getStepwisePowerSum(level, 2, 5, 0);
let getc1Exp = (level) => 1 + 0.03 * level;

let getc2 = (level) => BigNumber.TWO.pow(level);

let getqdot = (level) => Utils.getStepwisePowerSum(level, 2, 10, 0);

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

    let dq = qMs.level ? dt * getqdot(qdot.level) : BigNumber.ZERO;
    q += dq;

    currency.value += dt * bonus * getc1(c1.level).pow(getc1Exp(c1ExpMs.level)) * getc2(c2.level) * (BigNumber.ONE + getf(f.level)) * (qMs.level ? q : BigNumber.ONE);

    theory.invalidateTertiaryEquation();
}

var getPrimaryEquation = () => `\\dot{\\rho} = c_1${c1ExpMs.level ? `^{${getc1Exp(c1ExpMs.level)}}` : ''}c_2(1+f)${qMs.level ? 'q' : ''}`;

var getSecondaryEquation = () => `${theory.latexSymbol} = \\max\\rho`;

var getTertiaryEquation = () => qMs.level ? `q = ${q.toString()}` : '';

var postPublish = () =>
{
    q = BigNumber.ONE;
}

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

var getInternalState = () => JSON.stringify
({
    q: q.toBase64String()
});

var setInternalState = (stateStr) =>
{
    if(!stateStr)
        return;

    let state = JSON.parse(stateStr);
    q = BigNumber.fromBase64String(state.q) ?? q;
}

init();
```

[^1] Classes can be serialised, if the **toJSON** method is defined to convert them into objects first, but **BigNumber** doesn't have this method. For primitive variables (strings and numbers), serialisation looks much easier, as you can omit keys to automatically assign the variables' names to them:

```js
let abc = 3;
let str = 'def';

var getInternalState = () => JSON.stringify
({
    abc,
    str
})

var setInternalState = (stateStr) =>
{
    if(!stateStr)
        return;

    let state = JSON.parse(stateStr);
    abc = state.abc ?? abc;
    str = state.str ?? str;
}
```
