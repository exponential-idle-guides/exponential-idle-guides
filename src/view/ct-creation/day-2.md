---
title: "A Theory of Your Own"
description: "Introduction to custom theory creation."
author: "prop"
contributors: "the Amazing Community"
---

Good morning. It is dawn of the second day.

Today, we're going to create a simple theory with a couple of upgrades, and until the end of this week, we will be fleshing it out, bit by bit. By the end, hopefully it will be one to be proud of.

Let's start by creating a folder in the SDK directory. Any name would do. Inside the folder, create a new file named **my_theory.js**. This shall be your first theory.

**Note:** Within the community, the term 'variable' is used for variables in an equation. However, in this guide, they will be called 'upgrades', as not only are they canonically called this way in the API, the term 'variable' is used to refer to variables in programming. When referring to an upgrade's value, the word 'term' or 'factor' shall be used, depending on the equation.

**Note:** I will be using ellipses (...) to truncate any code that was already previously written. Do not blindly copy these!

I know. I wish I could say 'variables' all the time too.

## The first ritual

Let's start with the necessities. Import the following modules:

```js
import { BigNumber } from '../api/BigNumber';
import { ExponentialCost, FreeCost } from '../api/Costs';
import { theory } from '../api/Theory';
import { Utils } from '../api/Utils';
```

- **BigNumber** is the game's BigNumber class. Normal numbers can only store values up to +-1.79e308 (the double precision floating point limit), so BigNumbers are very much essential to the idle game experience.
- Classes **ExponentialCost** and **FreeCost** are cost models provided by the game. While FreeCost stays free forever, ExponentialCost advances an upgrade's cost every level. Exponentially, of course.
- **theory** is the variable representative of the whole theory, and holds a lot of important controls. Only from this variable can we create new upgrades, milestones and achievements, update the equations, clear the graph, etc.
- **Utils** provide miscellaneous functions such as LaTeX rendering, logging, and calculating certain functions.

Next, is the basic information for this theory. Aside from **id**, you are free to rename everything else. If you rename the ID and send to the game, it will show up as a completely new theory.

```js
var id = 'my_theory';
var name = 'My Theory';
var description = 'The one and only.';
var authors = 'Stuart Clickus';
```

## The first upgrade

Now, let's declare a few basic things: a currency, and your first upgrade, a clicker! You want the clicker to give you exactly 1 unit of currency whenever you level it up.

First, let's create a currency with **theory.createCurrency**. No arguments are provided, so the default symbol of rho ($\rho$) is used.

```js
let currency;

let init = () =>
{
    currency = theory.createCurrency();
}
```

Not that difficult, right? Let's next declare the clicker, using **theory.createUpgrade**. This function takes 3 arguments:

- **id**: the upgrade's numerical identifier. Has to be unique among **regular** upgrades.
- **currency**: which currency to use to buy this upgrade. This is required even if the cost is free.
- **cost**: the cost model. In this case, we will use a **FreeCost**.

```js
let currency;
let clicker;

let init = () =>
{
    currency = theory.createCurrency();

    {
        clicker = theory.createUpgrade(0, currency, new FreeCost);
        clicker.description = Utils.getMath('\\rho \\leftarrow \\rho + 1');
        clicker.info = 'Increase currency by 1.';
    }
}
```

By the way, although right now we don't need any variables inside an enclosed scope that would warrant an extra code block, let's make it a habit, in case that's needed in the future.

For its description and info, since we don't need to update them, we will assign a string to two properties of the clicker: **description** and **info**. Their 'dynamic' counterparts are **getDescription** and **getInfo** respectively, which can only be assigned to arrow functions.

In the description, we'd want to make it look 'mathsy', so we are going to use the arrow syntax for assignment: $\rho \leftarrow \rho + 1$. For the LaTeX syntax, we use **Utils.getMath** to wrap a normal string in a pair of **\\(** and **\\)** for inline LaTeX display. You can use these markers normally without this function as well.

Programmatically though, it would look something more like this: **currency.value += 1**. In fact, this is what we would like to trigger every time we buy the clicker. And for that, we can use the upgrade's **bought** trigger:

```js
clicker.bought = (amount) => currency.value += 1;
```

Although the currency's value is a BigNumber, keep in mind that BigNumbers can also inter-operate with (normal) numbers: addition, subtraction, multiplication, division, etc. In all cases, the result is always going to be a BigNumber, except for when a **NaN** could be triggered.

```js
let currency;
let clicker;

let init = () =>
{
    currency = theory.createCurrency();

    {
        clicker = theory.createUpgrade(0, currency, new FreeCost);
        clicker.description = Utils.getMath('\\rho \\leftarrow \\rho + 1');
        clicker.info = 'Increase currency by 1.';
        clicker.bought = (amount) => currency.value += 1;
    }
}
```

Having a button is nearly enough, except that you'd also want to tell the players to click it, and introduce some visual feedback when they do. So let's define a primary equation, and feed some graph coordinates to the game:

```js
var getPrimaryEquation = () => `\\text{Click the clicker!}`;

var get2DGraphValue = () => currency.value.sign *
(BigNumber.ONE + currency.value.abs()).log10().toNumber();
```

As the primary equation automatically assumes the LaTeX maths mode, any normal text must be wrapped around a **\\\\text{}** command.

The graph for now will be displaying the currency's value on a logarithmic scale. An absolute value is used, since you can't have logarithm of a negative number. It is then added to 1 before logging, since the logarithm of 0 is minus infinity, and the logarithm of anything between 0 and 1 is negative, thus, we don't want the graph to jump around or become undefined when the currency value is between -1 and 1. Finally, as the 2D graph coordinates use numbers, we convert the BigNumber to a number using **toNumber**.

Finally, don't forget to call **init** at the end of the file:

```js
init();
```

Now, send it to the SDK! You can see that whenever you buy the clicker, the currency increases, and the graph also goes up!

## The second upgrade

That was great! Clicking that button a hundred times surely lifted my spirit! But would I like to do it forever? One of the good feelings someone can get from an idle game is when they can finally stop doing something they previously had to do begrudgingly. So let's define a new upgrade **c1** ($c_1$) that will outclass this clicker, and set its identifier to 1:

```js
let c1;

let init = () =>
{
    ...
    {
        c1 = theory.createUpgrade(1, currency, new ExponentialCost(10, 1));
    }
}
```

This time, we'll be using an exponentially scaling cost. The arguments for an **ExponentialCost** constructor are as follows:

- **initialCost**: the first level's cost.
- **progress**: the cost multiplier from a level to the next, but as an exponent of two: a progress of 1 means that the cost doubles ($2^1$) per level, a progress of 2 means that the cost quadruples ($2^2$), etc.

We are also going to define the **getc1** function to get $c_1$'s power, by using **getStepwisePowerSum**:

```js
let getc1 = (level) => Utils.getStepwisePowerSum(level, 2, 5, 0);
```

A stepwise power sum is a power sum that has been stretched so that each term appears multiple times. With reference to the power sum of base 2:

$1 + 2 + 2^2 + 2^3 + 2^4 + 2^5 + 2^6 +...$,

a stepwise power sum of base 2 and length 3 repeats each power 3 times:

$1 + 1 + 1 + 2 + 2 + 2 + 2^2 + 2^2 + 2^2 +...$

Each upgrade level simply adds a term to the sum. Programmatically, obtaining the value of a stepwise power sum requires four arguments:

- **level**: the number of terms in the sum.
- **basePower**: the power sum's base.
- **stepLength**: the number of repeats for each power.
- **offset**: this value is simply added to the sum.

All stepwise upgrades in the base game are of base 2 and length 10, but custom theory developers often try to experiment with them. This time, we're using base 2 and length 5, which scales twice as fast as base 2 and length 10. 

Now, let's assign the description and info to $c_1$. As $c_1$'s value changes every time the upgrade is bought, we will be using **getDescription** and **getInfo** so these texts will periodically update, around 10 times per second.

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
}
```

**Note:** An arrow function like this, if they're assigned to an object's property, often means to 'update 10 times per second'. Globally defined functions such as **init**, normally don't get called 10 times per second (although there are exceptions, such as **tick**).

For the description, we want to show something like $c_1 = x$, and for the info, we want to show the change in power when we level up the upgrade as $c_1 = x \rightarrow c_1 = y$. Since there is a common part in these two texts, $c_1 = ...$, we will be creating a reuseable function **getDesc** to shorten the code.

This function here returns a special type of string: a template literal, which are wrapped by backticks (**\`**). Template literals have two special powers: multi-line strings, and formatting. By using the syntax **${}** inside a template literal, and put an expression inside the brackets, we can format the string based on the expression's result. In this case, the string will take whatever **getc1(level).toString(0)** (string representation of $c_1$ with no decimals) evaluates to. If the value of $c_1$ is 9, the returned string will be 'c_1 = 9', for instance.

In the assignment of `getInfo`, we also see a new utility being used: **Utils.getMathTo**, which is a doubled version of **Utils.getMath**, with a right-facing arrow in the middle. We'll be using it to generate our $c_1 = x \rightarrow c_1 = y$.

Finally, let's implement $c_1$'s effect so that we won't be wasting money on it. We will be using **tick** to increment the currency according to the $c_1$ term:

```js
var tick = (elapsedTime, multiplier) =>
{
    let dt = BigNumber.from(elapsedTime * multiplier);
    currency.value += dt * getc1(c1.level);
}
```

Let's change the primary equation to reflect this change:

```js
var getPrimaryEquation = () => `\\dot{\\rho} = c_1`;
```

The dot notation was defined by Isaac Newton as a derivative of a variable with respect to time ($t$). In-game, we can simply treat $c_1$ as the currency's 'velocity'.

Now, load it through the SDK! You can now see the new $c_1$ upgrade available for purchase, and that it can affect the currency.

## Aftermath

This theory is still going pretty slowly. I bet you're tempted to hack in some more currency. I shall see you [tomorrow](../day-3/), where we will be implementing even more upgrades for the theory!

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
let c1;

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
}

let getc1 = (level) => Utils.getStepwisePowerSum(level, 2, 5, 0);

var tick = (elapsedTime, multiplier) =>
{
    let dt = BigNumber.from(elapsedTime * multiplier);
    currency.value += dt * getc1(c1.level);
}

var getPrimaryEquation = () => `\\dot{\\rho} = c_1`;

var get2DGraphValue = () => currency.value.sign *
(BigNumber.ONE + currency.value.abs()).log10().toNumber();

init();
```
