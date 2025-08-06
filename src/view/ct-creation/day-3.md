---
title: "Day 3: Fibonacci Friend"
description: "Introduction to custom theory creation."
author: "prop"
contributors: "the Amazing Community"
order: 3
---

Buongiorno a tutti. It is dawn of the third day.

Across your window, a man wearing a blue head scarf is waving at you. You may recognise him from your maths textbooks - his name is Leonardo Bonacci (maybe), also known as Fibonacci! Today, we are going to make a new upgrade based on his famous Fibonacci sequence. But first, we will implement publications for our theory.

**Caution:** Before heading into today's contents, it is advised to back up your save files somewhere.

## Publications

Let's think about our theory's progression.

We have two upgrades, with their individual personalities. While this alone might make for some interesting conversations within your player base, without some sort of reset mechanic - a staple of many idle games - you'll be stuck tapping the same buttons forever. And in Exponential Idle, the reset mechanic available to theories is called `Publications`.

Let's introduce publications to our theory, by defining several key functions:

```js
const pubPower = 0.1;

var getPublicationMultiplier = (tau) => tau.pow(pubPower);

var getPublicationMultiplierFormula = (symbol) => `{${symbol}}^{${pubPower}}`;

var getTau = () => currency.value;

var getCurrencyFromTau = (tau) =>
[
    tau.max(BigNumber.ONE),
    currency.symbol
];
```

For this theory, the tau value shall simply be the maximum currency reached, with 1-to-1 conversion. Then, we shall define publication power as 0.1 (10%). This will be important later, when we try to balance the theory. For now, let's simply understand that with 1-to-1 tau conversion, a publication power of 0.1 means that publications make up around 10% of rho's growing power, logarithmically speaking, while the upgrades make up the rest.

To enable publications, let's implement our publication upgrade. It is a permanent upgrade, so their identifier set is different from regular upgrades, which means we can start from 0 again:

```js
let init = () =>
{
    ...
    theory.createPublicationUpgrade(0, currency, BigNumber.from('1e7'));
}
```

Finally, modify the tick function to include the publication bonus, and add a secondary equation for it:

```js
var tick = (elapsedTime, multiplier) =>
{
    let dt = BigNumber.from(elapsedTime * multiplier);
    let bonus = theory.publicationMultiplier;
    currency.value += dt * bonus * getc1(c1.level) * getc2(c2.level) * (BigNumber.ONE + getf(f.level));
}

var getSecondaryEquation = () => `${theory.latexSymbol} = \\max\\rho`;
```

Done. Now we can publish our theory and gain quicker progress on the next run! Although... we don't seem to be able to reach it easily...

## A gift from Fibonacci

The scarved man throws you a marble across the window. You catch it swiftly. He throws another. And then two at the same time, and then three, then five... You realise what he wants from you, and so you sprint back to your desk and start implementing his idea - the Fibonacci sequence.

Let's define this upgrade as **f** ($f$), and set its identifier to 2:

```js
let f;

let init = () =>
{
    ...
    {
        f = theory.createUpgrade(2, currency, new ExponentialCost(200, 1.618034));
        let getDesc = (level) => `f = ${getf(level).toString(0)}`;
        f.getDescription = (amount) => Utils.getMath(getDesc(f.level));
        f.getInfo = (amount) => Utils.getMathTo(getDesc(f.level),
        getDesc(f.level + amount));
    }
}
```

Let's also define the value of $f$ for each level, which should be the n-th Fibonacci number. Remember, the Fibonacci numbers are a type of **recurrence relation**, in which a term is defined as the sum of previous terms:

```js
let getf = (level) =>
{
    if(level == 0)
        return BigNumber.ZERO;
    if(level == 1)
        return BigNumber.ONE;

    return getf(level - 1) + getf(level - 2);
};
```

Finally, change the tick function and the primary equation to implement our new upgrade:

```js
var tick = (elapsedTime, multiplier) =>
{
    ...
    currency.value += dt * getc1(c1.level) * getf(f.level);
}

var getPrimaryEquation = () => `\\dot{\\rho} = c_1f`;
```

### Remember, multiplications!

Oops. It seems like we've caused all progress to halt. Why is this the case?

Our currency ($rho$) growth equation is defined by $c_1 \times f$. But it seems like since $f$ equals zero on the 0th level, $rho$'s growth always ends up being zero. There are many ways to fix this, but we shall go with the cheesiest one: adding one. Let's modify our $rho$ equation:

```js
var tick = (elapsedTime, multiplier) =>
{
    ...
    currency.value += dt * getc1(c1.level) * (BigNumber.ONE + getf(f.level));
}

var getPrimaryEquation = () => `\\dot{\\rho} = c_1(1+f)`;
```

Hurray! It works again.

## A gift in return

Even with the new Fibonacci upgrade, the theory still grows very slowly. Let's give it and $c_1$ another friend, **c2** ($c_2$), with an identifier of 3, and grows according to the powers of 2:

```js
let c2;

let init = () =>
{
    ...
    {
        c2 = theory.createUpgrade(3, currency, new ExponentialCost(500, 3));
        let getDesc = (level) => `c_2 = ${getc2(level).toString(0)}`;
        c2.getDescription = (amount) => Utils.getMath(`c_2 = 2^{${c2.level}}`);
        c2.getInfo = (amount) => Utils.getMathTo(getDesc(c2.level),
        getDesc(c2.level + amount));
    }
}

let getc2 = (level) => BigNumber.TWO.pow(level);
```

c2's value function uses BigNumber's native **pow** method, which raises it to the power of the argument. BigNumber has more of these methods, such as **abs**, which will come in handy soon.

Let's modify our equation accordingly:

```js
var tick = (elapsedTime, multiplier) =>
{
    ...
    currency.value += dt * getc1(c1.level) * getc2(c2.level) * (BigNumber.ONE + getf(f.level));
}

var getPrimaryEquation = () => `\\dot{\\rho} = c_1c_2(1+f)`;
```

Hopefully, with $c_2$, we should get a bit stronger now. Note that you may see the $c_2$ upgrade being listed below $f$ on the screen, which is quite annoying. The order of upgrades is determined by the order in which they were declared in the code (their IDs do not matter, so don't try to change them). Let's move the declaration block of $c_2$ to make it show below $c_1$ and above $f$:

```js
let init = () =>
{
    ...
    {
        c1 = theory.createUpgrade(1, currency, new ExponentialCost(10, 1));
        let getDesc = (level) => `c_1 = ${getc1(level).toString(0)}`;
        c1.getDescription = (amount) => Utils.getMath(getDesc(c1.level));
        c1.getInfo = (amount) => Utils.getMathTo(getDesc(c1.level),
        getDesc(c1.level + amount));
    }

    // Here!
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

    // Not here.
}
```

## Aftermath

As you play the theory, you may notice that the game is starting to slow down. Spooky! What could be the cause? If you feel paranoid, let's switch to another theory to run for now, and we will continue with a solution [tomorrow](../day-4/).

Meanwhile, the source code after today's work can be found here:

```js
import { BigNumber } from '../api/BigNumber';
import { ExponentialCost, FreeCost } from '../api/Costs';
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
        c1.getDescription = (amount) => Utils.getMath(getDesc(c1.level));
        c1.getInfo = (amount) => Utils.getMathTo(getDesc(c1.level),
        getDesc(c1.level + amount));
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
}

let getc1 = (level) => Utils.getStepwisePowerSum(level, 2, 5, 0);

let getc2 = (level) => BigNumber.TWO.pow(level);

let getf = (level) =>
{
    if(level == 0)
        return BigNumber.ZERO;
    if(level == 1)
        return BigNumber.ONE;

    return getf(level - 1) + getf(level - 2);
};

var tick = (elapsedTime, multiplier) =>
{
    let dt = BigNumber.from(elapsedTime * multiplier);
    let bonus = theory.publicationMultiplier;
    currency.value += dt * bonus * getc1(c1.level) * getc2(c2.level) * (BigNumber.ONE + getf(f.level));
}

var getPrimaryEquation = () => `\\dot{\\rho} = c_1c_2(1+f)`;

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
