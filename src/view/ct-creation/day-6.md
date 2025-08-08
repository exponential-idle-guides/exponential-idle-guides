---
title: "Day 6: Dimension Expansion"
description: "Introduction to custom theory creation."
author: "prop"
contributors: "the Amazing Community"
---

Hi class. Now that we've dealt with our previous problems, today we're going to pick up the pace. First, I will introduce you to the most common player strategies, and through a new milestone, implement it in our theory. Then, we will implement a quality of life feature, in the form of a timer.

## Introduction to player strategies

Every game ever conceived is, and will be, subjected to the evolution of strategies within its circle of players. Idle games are no exception, as despite its apparent name, a lot of them are designed to reward player activity, often with a faster rate of progress than simply idling about. And in Exponential Idle, where everything is broken down into fundamental arithmetics, this becomes much easier to see.

Considering the upgrades we have within our theory:
- $c_1$: stepwise, doubles every 5 levels.
- $c_2$: doubles every level.
- $f$: multiplies by $\phi$ every level.
- $\dot{q}$: stepwise, doubles every 10 levels, but does not instantaneously affect income, due to the cumulative nature of $q$.

As you can see, each upgrade scales in a different way. However, our autobuy does not care, and instead treat every upgrade the same, always buying the cheapest one possible, even though they aren't worth the same. This gave rise to a strategy that is now common within the community: the doubling chase, denoted by a lower case **d** in strategy nomenclature. This strategy tells the player to save for the strongest upgrade (usually a doubling, hence the name), while only manually buying worse upgrades at a fraction of that price, and toggling autobuy off for them. In our theory, $c_2$ is the strongest per-level upgrade, therefore every other upgrade should be delayed according to the doubling chase strategy.

For stepwise upgrades such as $c_1$ and $\dot{q}$, there is also another strategy to buy them depending on where they are in the stepwise cycle. These are called **mod x** in strategy nomenclature, with x corresponding to the cycle length. More information about strategies involving stepwise upgrades can be found [here](../../guide-extensions/stepwise-variables/).

## Milestone swapping

Previously, in [Day 4](../day-4/#power-up-with-a-milestone), we were introduced to milestones, a way to lock power boosts behind progression. Notice that unlike similar unlock systems in other games such as skill trees, milestones can be freely refunded. While this is primarily intended to allow experimentation, players have found that in specific situations, switching between different milestones can facilitate much faster progress than just sticking to one milestone. This is called milestone swapping.

In theories, the most commonly implemented form of milestone swapping is where there is a milestone that boosts instant income, and another that boosts a cumulative term. In our theory, the cumulative term is $q$, and the instant terms are $c_1$, $c_2$, and $f$. As we already have a milestone that boosts $c_1$, let's implement another that boosts $\dot{q}$. To prevent the theory's power from being affected by this milestone, let's make it a constant boost by 2x per level, instead of raising an exponent:

```js
let qdotMs;

let init = () =>
{
    ...
    {
        qdotMs = theory.createMilestoneUpgrade(2, 3);
        qdotMs.description = Localization.getUpgradeMultCustomDesc('\\dot{q}', '2');
        qdotMs.info = Localization.getUpgradeMultCustomInfo('\\dot{q}', '2');
    }
}

let getqdot = (level) => Utils.getStepwisePowerSum(level, 2, 10, 0) * Math.pow(2, qdotMs.level);
```

Now, if you reload, you will see that in the milestone menu, the milestone will be shown as $\times \dot{q} \text{ by } 2$. However, there is still a problem. You may notice that you can take this milestone, even if its prerequisite ($\text{Unlock } q$) is not taken. Let's fix it.

Every kind of upgrade you can implement in this game has a visibility attribute. This is called **isAvailable**, and it controls whether or not an upgrade is displayed on screen. Let's modify **qdotMs** so that its visibility is controlled by **qMs**:

```js
let init = () =>
{
    ...
    {
        ...
        qdotMs.isAvailable = false;
    }
}

var updateAvailability = () =>
{
    ...
    qdotMs.isAvailable = qMs.level > 0;
};
```

If we reload the theory now, the $\dot{q}$ milestone will disappear from the menu, unless we have a point in the $q$ unlock milestone. Success!

Let's also make it so that the $q$ unlock milestone can't be refunded when we have also taken the $\dot{q}$ milestone, by using the **canBeRefunded** attribute, which constantly updates when we assign to it an arrow function:

```js
let init = () =>
{
    ...
    {
        ...
        qMs.canBeRefunded = () => qdotMs.level == 0;
    }
}
```

Now that we've successfully implemented the new milestone, let's take a look at how we can utilise the milestone swap strategy to make our progress faster. Let's assume we are at a high score of 1e45 tau. We would have three milestone points, and we can also start to purchase $\dot{q}$. Our first point should be spent on unlocking $q$, which leaves us two points. Now, suppose we were to spend the two points on $c_1$ exponent (our milestone configuration would be **2/1/0**). We would have a lot of income for $\rho$, but our $q$ growth would be much less than if we were to spend those points on $\dot{q}$. So now we have a $q$ deficit. We transfer those two points to $\dot{q}$ (our configuration would be **0/1/2**), which would maximise $q$'s growth. But then, after a while, our $\rho$ would be at a deficit, so we switch back to **2/1/0**. This is the essence of milestone swapping, boosting our progress further than if we were to stay all the time on only one configuration[^1].

## Timer time

Now that our theory is complete in terms of content, let's divert our attention towards quality of life and polishing for the rest of the week. Today, we will be implementing a timer to show how much time we've spent in a publication. It won't be in the form of a UI element (like in Riemann Zeta Function), as custom UI is out of the scope for this week. Instead, we will be utilising the quaternary area provided by the API. This area can be seen in Theory 2 (Differential Calculus), where cumulative terms $q_1$ to $q_4$ and $r_1$ to $r_4$ are displayed in a column.

First, let's create a time variable. Call it **t**. **t** shall increase whenever **tick()** is called, and reset whenever we publish:

```js
let t = 0;

var tick = (elapsedTime, multiplier) =>
{
    t += elapsedTime;
    ...
}

var postPublish = () =>
{
    t = 0;
    ...
}
```

Since **t** is also a normal variable like **q**, to prevent losing it, we should also save it in the internal state:

```js
var getInternalState = () => JSON.stringify
({
    t,
    ...
});

var setInternalState = (stateStr) =>
{
    ...
    t = state.t ?? t;
}
```

Now, while our variable is functional, we have yet to display it on screen. Let's define a quaternary entry, then update it along with **tick()**. A quaternary entry is defined with two fields: its **name** and its **value**, displaying as the left and right side of the equal sign respectively.

```js
let quaternary =
[
    new QuaternaryEntry('t', null)
];

var tick = (elapsedTime, multiplier) =>
{
    ...    
    theory.invalidateQuaternaryValues();
}

var getQuaternaryEntries = () =>
{
    quaternary[0].value = t.toFixed(1);
    return quaternary;
}
```

Now, we finally see our publication time displayed on the right side of the screen. The **toFixed()** method allows us to round the number to one decimal place, so we don't have to watch floating point precision go wild. Try publishing!

### Wait a minute

Hold on. Notice that if we go past 60 seconds, the timer always displays the whole number of seconds. This is useless information. We would like to divide this timer display to at least hours, minutes and seconds. Which means, we will need three quaternary entries.

```js
let quaternary =
[
    new QuaternaryEntry('h', null),
    new QuaternaryEntry('m', null),
    new QuaternaryEntry('s', null)
];
```

Now, let's figure out how to count the number of hours and minutes when we have the total number of seconds. There are 60 seconds in a minute, and 60 minutes in an hour. First, let's count the minutes from the seconds, and from the minutes, we then count the hours:

```js
var getQuaternaryEntries = () =>
{
    let minutes = Math.floor(t / 60);
    let seconds = t - minutes * 60;
    let hours = Math.floor(minutes / 60);
    minutes -= hours * 60;

    quaternary[0].value = hours;
    quaternary[1].value = minutes;
    quaternary[2].value = seconds.toFixed(1);
    return quaternary;
}
```

Success! We have managed to display the minutes and hours.

## Extra Assignments

To exercise what you've learned, let's work on some polishing touches:

1. Try counting the number of days.
2. Move these entries closer together by inserting an invisble quaternary entry on each side.
  - Hint: Try defining the entry's name as **null**. The equal sign won't appear.
3. Display a leading zero if the number of hours/minutes/seconds is less than 10. That's how digital watches work, right?

## Aftermath

Today, we have learned about player strategies, and how they impact the way we design our theories. We were also introduced to the last part of the equation UI: the quaternary entries. I shall see you [tomorrow](../day-7/) for the finishing touches on this theory.

Meanwhile, the source code after today's work can be found here. This code does not contain solutions to assignments.

```js
import { BigNumber } from '../api/BigNumber';
import { CompositeCost, ExponentialCost, FreeCost, LinearCost } from '../api/Costs';
import { Localization } from '../api/Localization';
import { QuaternaryEntry, theory } from '../api/Theory';
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
let c1ExpMs, qMs, qdotMs;

let q = BigNumber.ONE;
let t = 0;

let quaternary =
[
    new QuaternaryEntry('h', null),
    new QuaternaryEntry('m', null),
    new QuaternaryEntry('s', null)
];

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
        qMs.canBeRefunded = () => qdotMs.level == 0;
    }

    {
        qdotMs = theory.createMilestoneUpgrade(2, 3);
        qdotMs.description = Localization.getUpgradeMultCustomDesc('\\dot{q}', '2');
        qdotMs.info = Localization.getUpgradeMultCustomInfo('\\dot{q}', '2');
        qdotMs.isAvailable = false;
    }

    updateAvailability();
}

var updateAvailability = () =>
{
    qdot.isAvailable = qMs.level > 0;
    qdotMs.isAvailable = qMs.level > 0;
};

let getc1 = (level) => Utils.getStepwisePowerSum(level, 2, 5, 0);
let getc1Exp = (level) => 1 + 0.03 * level;

let getc2 = (level) => BigNumber.TWO.pow(level);

let getqdot = (level) => Utils.getStepwisePowerSum(level, 2, 10, 0) * Math.pow(2, qdotMs.level);

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
    t += elapsedTime;
    let dt = BigNumber.from(elapsedTime * multiplier);
    let bonus = theory.publicationMultiplier;

    let dq = qMs.level ? dt * getqdot(qdot.level) : BigNumber.ZERO;
    q += dq;

    currency.value += dt * bonus * getc1(c1.level).pow(getc1Exp(c1ExpMs.level)) * getc2(c2.level) * (BigNumber.ONE + getf(f.level)) * (qMs.level ? q : BigNumber.ONE);

    theory.invalidateTertiaryEquation();
    theory.invalidateQuaternaryValues();
}

var getPrimaryEquation = () => `\\dot{\\rho} = c_1${c1ExpMs.level ? `^{${getc1Exp(c1ExpMs.level)}}` : ''}c_2(1+f)${qMs.level ? 'q' : ''}`;

var getSecondaryEquation = () => `${theory.latexSymbol} = \\max\\rho`;

var getTertiaryEquation = () => qMs.level ? `q = ${q.toString()}` : '';

var getQuaternaryEntries = () =>
{
    let minutes = Math.floor(t / 60);
    let seconds = t - minutes * 60;
    let hours = Math.floor(minutes / 60);
    minutes -= hours * 60;

    quaternary[0].value = hours;
    quaternary[1].value = minutes;
    quaternary[2].value = seconds.toFixed(1);
    return quaternary;
}

var postPublish = () =>
{
    t = 0;
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
    t,
    q: q.toBase64String()
});

var setInternalState = (stateStr) =>
{
    if(!stateStr)
        return;

    let state = JSON.parse(stateStr);
    t = state.t ?? t;
    q = BigNumber.fromBase64String(state.q) ?? q;
}

init();
```

[^1] Technically, we have another configuration yet to talk about: **1/1/1**. Whether or not its effectiveness overshadows the milestone swap will need further research into strategies. Still, even that configuration would also need to be reallocated to **2/1/0** to speed up $\rho$ growth towards the end of a publication (this is called coasting). This strategy, although performed only once, also classifies as milestone swapping.
