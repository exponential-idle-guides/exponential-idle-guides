---
title: "Day 7: Polishing"
description: "Introduction to custom theory creation."
author: "prop"
contributors: "the Amazing Community"
---

Hey. We're nearly there. Let's finish this theory today with some polishing touches. Today we're going to learn how to implement achievements, display story chapters, switch screens, and more.

## Achievements

Achievements are ways to mark your progress, as well as provide the player with extra challenges. Achievements in a custom theory are accessible through the theory's information panel. Click the 'two arrows' icon on the top-left, scroll down until you see 'My Theory', then click on the cog. You will see the theory's description, author, and source. Right below the information panel are two buttons: Delete and Reset. The Achievements button will appear here after we implement our first.

An achievement is defined using the **createAchievement()** function, and its anatomy goes as follows:
- **id**: its unique identifier.
- **category**: the category (which you'll need to create using **createAchievementCategory()**). This is optional, and you can set it as **null**.
- **name**: its name.
- **description**: its description.
- **unlockCondition**: its trigger, in the form of a boolean-returning arrow function. This will be checked once every second or so.
- **progress**: the progress towards unlocking this achievement, shown as a percentage. This is optional, and in the form of an arrow function returning a Number between 0 and 1.

Let's define our first one inside of **init()**, before the call to **updateAvailability()**. This one will make us wait 20 minutes before it unlocks automatically, by checking our **t** variable:

```js
let patienceAch;

let init = () =>
{
    ...

    patienceAch = theory.createAchievement(0, null, 'Patience', 'Wait for 20 minutes.', () => t >= 1200, () => Math.max(0, Math.min(t / 1200, 1)));

    ...
}
```

Now, let's reload our theory, and then wait, wait,... Wait. It's triggered already? Well I suppose us humans are quite patient indeed. If you now go to the theory's information panel, you will be able to check out this new achievement. To the right, you can see a star if you've unlocked it, and a progress percentage if you haven't. If you click on it, you can also see the unlock date (in case it's unlocked).

Next, let's implement a secret achievement, 'Lewd', this time within a category, 'Lewd'. First, let's create the category, specifying its identifier and name:

```js
let lewdAchCat;

let init = () =>
{
    ...

    lewdAchCat = theory.createAchievementCategory(0, 'Lewd');

    ...
}
```

With the category defined, let's define our secret achievement belonging to the category. Note that instead of a progress indicator, secret achievements can have a **hint** when you check it out, and this parameter sits between the description and the unlock condition. Let's write the hint as 'Nice', because everyone will understand the reference. I know, this won't be much of a secret then.

```js
let lewdAch;

let init = () =>
{
    ...

    lewdAch = theory.createSecretAchievement(1, lewdAchCat, 'Lewd', 'Reach sixty and nine levels on the clicker.', 'Nice', () => clicker.level >= 69);

    ...
}
```

You know what to do with this one. Remember that the unlock condition is checked only once per second, so setting it up exactly as **clicker.level == 69** makes it much harder to unlock, due to autobuy and timing issues.

Now, if you go to the SDK's command line and type in this, you will be able to check whether or not this achievement is unlocked:

```js
log(lewdAch.isUnlocked);
```

By using the **isUnlocked** property, we can also add more requirements to an achievement, by making it depend on another achievement to be unlocked. Go wild.

## Story Chapters

Story chapters are dialogues that can pop up throughout the game according to your progression. They're quite similar to achievements in this sense, and use **createStoryChapter()** to declare. Compared to achievements, they are much simpler to declare, and can't be made secret:
- **id**: its unique identifier.
- **title**: its title.
- **text**: its contents. If you write multiple lines (with **\n**), clicking the screen once will skip one line at a time.
- **unlockCondition**: its trigger. Works the same way as achievements.

Let's create an example achievement that unlocks when the $q$ unlock milestone is purchased:

```js
let qChap;

let init = () =>
{
    ...

    qChap = theory.createStoryChapter(0, 'Queued up', 'The theory is now queued up.\n\nGet it?\nQ, the letter?\n\nAnyway.', () => qMs.level > 0);

    ...
}
```

Voilà! Now if you check the game... Behold, passable writing! Okay, now check out the new button for Story Chapters that just popped up in the theory's information panel. Click on the chapter to replay it. Behold, passable writing.

Similar to achievements, you can also check whether or not this story chapter is unlocked from the SDK:

```js
log(qChap.isUnlocked);
```

## Stages

To recap what we've known about the UI up to this point, the equation screen consists of four parts: the primary, secondary, and tertiary equations, and the quaternary entries. But what if we wanted more space to write information? The Theory API gives us a tool that allows us to cycle between different screens, so we can display all the information we want. These screens are called stages. In the base game, stages are being used extensively in the Convergence Test, not only to switch between the seven tests, but even adapt the **tick()** function to run the currently displayed test. However, in this guide, we will only be using stages to manipulate displayed equations.

First, let's define our stage counter, and register it in the internal state:

```js
let stage = 0;

var getInternalState = () => JSON.stringify
({
    ...
    stage
});

var setInternalState = (stateStr) =>
{
    ...
    stage = state.stage ?? stage;
}
```

This won't do anything just yet. In the Theory API, there are four functions to control the stages: **canGoToPreviousStage()**, **goToPreviousStage()**, **canGoToNextStage()**, and **goToNextStage()**. The **canGoTo** functions control the visibility of the stage switching arrows on screen, while the **goTo** functions control their behaviour when clicked. Let's create a stage system using two stages, 0 and 1:

```js
var canGoToPreviousStage = () => stage > 0;

var goToPreviousStage = () => stage -= 1;

var canGoToNextStage = () => stage < 1;

var goToNextStage = () => stage += 1;
```

In this example, when you're on stage 0, the left arrow is unavailable, and clicking the right arrow will add 1 to the stage counter. And on stage 1, likewise, the right arrow is unavailable, and clicking the left arrow will subtract 1 from the stage counter.

Clicking these arrows do nothing to affect the equations yet, so let's implement that. Since we don't actually need space for new equations, let's mangle our existing ones by swapping their sides. To adapt equations according to the stage counter, we can use a simple if-else clause within the equations:

```js
var getPrimaryEquation = () =>
{
    if(stage == 0)
        return `\\dot{\\rho} = c_1${c1ExpMs.level ? `^{${getc1Exp(c1ExpMs.level)}}` : ''}c_2(1+f)${qMs.level ? 'q' : ''}`;
    else
        return `c_1${c1ExpMs.level ? `^{${getc1Exp(c1ExpMs.level)}}` : ''}c_2(1+f)${qMs.level ? 'q' : ''} = \\dot{\\rho}`;
}

var getSecondaryEquation = () =>
{
    if(stage == 0)
        return `${theory.latexSymbol} = \\max\\rho`;
    else
        return `\\max\\rho = ${theory.latexSymbol}`;
}

var getTertiaryEquation = () =>
{
    if(stage == 0)
        return qMs.level ? `q = ${q.toString()}` : '';
    else
        return qMs.level ? `${q.toString()} = q` : '';
}
```

But wait. We notice that aside from the tertiary equation, the other two do not get updated when we switch stages. Remember that these equations don't update by themselves, and we must manually invalidate them. The best way to do so is from within the two **goTo** functions, so that we only do it once when the arrows are clicked:

```js

var goToPreviousStage = () =>
{
    stage -= 1;
    theory.invalidatePrimaryEquation();
    theory.invalidateSecondaryEquation();
}

...

var goToNextStage = () =>
{
    stage += 1;
    theory.invalidatePrimaryEquation();
    theory.invalidateSecondaryEquation();
}
```

Yes! We did it! We managed to make this theory so much more sillier[^1].

## Singular Upgrades

Another API feature that's introduced within the Convergence Test is the singular upgrade. This takes the form of the $\text{Prove lemma}$ button, and allows us to pin some upgrades to the top for convenience[^2].

Setting up a singular upgrade is easy - it is done in the same way as normal upgrades, using the **createSingularUpgrade()** function. For example, we would like to convert the clicker upgrade to a singular upgrade. Simply change **createUpgrade** to **createSingularUpgrade** like so:

```js
let init = () =>
{
    ...

    {
        clicker = theory.createSingularUpgrade(0, currency, new FreeCost);
        ...
    }

    ...
}
```

Note that singular, normal, permanent, and milestone upgrades don't share any common identifier space, and you can use the same number for different kinds of upgrades. We don't need to change anything on this front.

Now, reload the game. We notice that the clicker has moved above the regular upgrades. The autobuyer also no longer levels the clicker, nor can publishing reset its level. This makes it useful if you want upgrades that don't get tampered by the autobuyer or publications.

## Extra Assignments

Let's do something with our newly acquired knowledge:

1. Create an achievement with its own category. It can be about anything, but one of the requirements is that the 'Lewd' achievement has to be unlocked.
2. Create a story chapter that requires the first chapter to be unlocked.
3. Implement a new singular upgrade that resets the quaternary timer.

## Aftermath

Today, we have learned about what makes a theory silly and polished, with a story, goals to achieve, and proper Quality of Life™ improvements. Thank you for participating in this ritual. Don't forget to give your offerings to **Iosui**, and I hope you will join us another week for more advanced rituals.

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
let lewdAchCat;
let patienceAch, lewdAch;
let qChap;

let q = BigNumber.ONE;
let t = 0;
let stage = 0;

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
        clicker = theory.createSingularUpgrade(0, currency, new FreeCost);
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

    patienceAch = theory.createAchievement(0, null, 'Patience', 'Wait for 20 minutes.', () => t >= 1200, () => Math.max(0, Math.min(t / 1200, 1)));

    lewdAchCat = theory.createAchievementCategory(0, 'Lewd');
    lewdAch = theory.createSecretAchievement(1, lewdAchCat, 'Lewd', 'Reach sixty and nine levels on the clicker.', 'Nice', () => clicker.level >= 69);

    qChap = theory.createStoryChapter(0, 'Queued up', 'The theory is now queued up.\n\nGet it?\nQ, the letter?\n\nAnyway.', () => qMs.level > 0);

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

var getPrimaryEquation = () =>
{
    if(stage == 0)
        return `\\dot{\\rho} = c_1${c1ExpMs.level ? `^{${getc1Exp(c1ExpMs.level)}}` : ''}c_2(1+f)${qMs.level ? 'q' : ''}`;
    else
        return `c_1${c1ExpMs.level ? `^{${getc1Exp(c1ExpMs.level)}}` : ''}c_2(1+f)${qMs.level ? 'q' : ''} = \\dot{\\rho}`;
}

var getSecondaryEquation = () =>
{
    if(stage == 0)
        return `${theory.latexSymbol} = \\max\\rho`;
    else
        return `\\max\\rho = ${theory.latexSymbol}`;
}

var getTertiaryEquation = () =>
{
    if(stage == 0)
        return qMs.level ? `q = ${q.toString()}` : '';
    else
        return qMs.level ? `${q.toString()} = q` : '';
}

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

var canGoToPreviousStage = () => stage > 0;

var goToPreviousStage = () =>
{
    stage -= 1;
    theory.invalidatePrimaryEquation();
    theory.invalidateSecondaryEquation();
}

var canGoToNextStage = () => stage < 1;

var goToNextStage = () =>
{
    stage += 1;
    theory.invalidatePrimaryEquation();
    theory.invalidateSecondaryEquation();
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
    q: q.toBase64String(),
    stage
});

var setInternalState = (stateStr) =>
{
    if(!stateStr)
        return;

    let state = JSON.parse(stateStr);
    t = state.t ?? t;
    q = BigNumber.fromBase64String(state.q) ?? q;
    stage = state.stage ?? stage;
}

init();
```

[^1] We can't actually afford to swap the quaternary entries' sides. The left side is extremely tiny and can contain only 1 letter before clipping.

[^2] As it stands (v1.4.40), there is a bug in the iOS version of the game, where if a singular upgrade is not visible, the entire equation area will be dwarfed by the phantom area that this invisible upgrade had allocated, making the theory unplayable. It is advised that your singular upgrades be visible at all times (**isAvailable** should be true).