---
title: "Simulating a Theory"
description: "Introduction to custom theory creation."
author: "prop"
contributors: "Mathis for the draft, and then the Amazing Community"
---

Hello. Welcome to the evolutionary remnants of my stomach for this week.

Today, we are going to use the Theory Simulator to test out our theory. The Theory Simulator is a web-based tool created and maintained by the Exponential Idle community that allows users to simulate and program strategies for various theories.

**Note:** The Theory Simulator is undergoing constant changes. As such, this appendix's contents are also under construction.

## Prerequisites

1. **Node.js & npm**

[Node.js](https://nodejs.org/) is a JavaScript runtime environment for servers and web applications. Its installation is needed to run the simulator locally and implement our theory.

[npm](https://www.npmjs.com/) is the package manager for Node.js. It should be already installed along with Node.js. 

2. **TypeScript**

[TypeScript](https://www.typescriptlang.org/) is a variant of JavaScript that enforces types on variables to prevent bugs related to type mismatch or conversion. It is available as an npm package.

For a better experience, install the TypeScript extension/add-on (if available) for your editor.

## Installation

Head to your command line interface (terminal), head to the desired directory using **cd** or a similar command, then type in this line:

```
git clone https://github.com/exponential-developers/sim-3.0.git
```

This will download the Theory Simulator for local usage. If git is not installed, you can also visit the [repository](https://github.com/exponential-developers/sim-3.0), press the **Code** button, then download it as a ZIP file.

After the download is finished, head into the folder with your terminal. Open the folder in your editor as a project, in case that feature is supported. Then, after checking that the terminal is at the project folder, run these commands in succession:

```
npm install
npm audit fix
npm run build
```

The first command installs the needed packages for the project. The second command fixes various issues after installing them. Finally, the third command builds the project.

### Hosting the simulator

We've managed to build the project. However, as it is a web application, to be able to run it, we need a way to host a server locally. We can use an npm package for this:

```
npm install -g http-server
```

The **-g** option will install the http-server package globally on our machine, so that regardless of what project we're working on, we can host a server. To do so, use this simple command (while the terminal is at the project folder, of course):

```
http-server
```

Upon using this command, one or more links will be output. Simply copy this link onto a browser to open the Theory Simulator. The first thing to do after it's opened is to open the settings menu (cog icon), then tick on the option 'Show unofficial CTs'. This will allow us to simulate unofficial custom theories, including our theory, after we have implemented it.

# Implementing a theory

All contents below are work in progress.

### Introduction to the number system used by the sim

In the sim, there is no `BigNumber` class. Instead, to represent large numbers such as `1e800`, we work with log values.
For example, `1e800` will be represented as `800`, and `2e25` will be represented as `log10(2e25) = 25 + log10(2)`. `1` is represented as `0`.
Since we work with log values, you may use `+` for multiplication and `*` to raise to a power.
For addition and subtraction, the sim has the functions `add(a, b)`for a+b and `subtract(a, b)` for a-b.
Since you may need to use `Math.log10` many times, it is shortened to `l10`.
It is important to keep track of what value is a normal value and what value is a log value.

### Register your theory and its strats

First, you need to edit `src/Data/data.json` to add your new theory.
You need to add a new key in `theories`, named with the initials of your CT, with the same model as other theories.
Here is what each item does:

- `tauFactor`: the sim supports tau formulas of the form tau=rho^exp, so `tauFactor` is "exp".
- `UI_visible` indicates if the theory should be visible without using the "show unofficial CTs" settings in the sim.
- `strats` are the different strategies that the sim will test. To start, have only one strat, with the same name as the theory, with `stratFilterCondition = "true"`.

### Create the sim file

To add your new custom theory to the sim, you need to create a `.ts` sim file for it. It should use the CT's initials. For example: `FS.ts`.
It should be put in `src/Theories/Unofficial-CTs`. I suggest to copy `BT.ts` to get a template.
Now it's time to edit this file to implement your CT.

- At the top of the file, you will find a function with the keyword `export`. This is the main function of the file, that will be called by the sim.
Rename this function to the initials of your CT.
- Change `type theory` to match the initials of your CT as you added them to `data.json`.
- Rename the class to `...Sim` where `...` are the initials of your CT.

In the sim class, you may add attributes for anything the sim may need, like `q` for example.

You fill find several methods in the class. Here is what they are for and how should you edit them.

### Default attributes of the sim class

There are the main default attributes of the sim class you want to know about.

- `rho` is usually where rho is stored as a log value
- `pubUnlock` is the rho value at which publications are unlocked. This prevents the sim from publishing before this point.

- `lastPub` stores the value of rho (in log form) from the last publication.
- `totMult` stores the publication multiplier (in log form)
- `dt` is the equivalent of `elapsedTime * multiplier` in the sim
- `t` is the elapsed time of the publication in seconds
- `maxRho` stores the maximum rho reached in the publication (in log form)
- `variables` is an array that stores the theory's variables
- `varNames` is an array that stores the name of the variables
- `milestones` is an array that stores the levels of each milestone

#### The constructor

The role of the constructor is to initialize the attributes of the sim class.

The main part you need to change is the declaration of the variables and variable names.

The sim has a `Variable` class to handle upgrades. Each variable is initialized with a `cost` and a `valueScaling`.
The sim provides easy-to-use classes for the main cost and value models. The values you pass in them shouldn't be logged.

Important notice for `Exponential Cost`:

- `new ExponentialCost(a, Math.log2(b))` in the CT code becomes `new ExponentialCost(a, b)` in the sim.
- `new ExponentialCost(a, b)` in the CT code becomes `new ExponentialCost(a, b, true)` in the sim.

#### `getBuyingConditions()`

This function returns the conditions that must be met for the sim to buy variables.
`conditions` must have a key for every strat you defined in `data.json`.
To each strat is associated an array of conditions for each variable.

Conditions can be a boolean or a function that returns a boolean. Use the latter if you want a dynamic condition.

If you want a full idle strat, you can fill the array with `true`.

#### `getMilestoneConditions()`

This function returns whether a variable is available to purchase or not, depending on milestones for example.
Same as `getBuyingConditions`, conditions can be a boolean or a function that returns a boolean.
It does not depend on the strat.

#### `getTotMult()`

This function should return the publication multiplier as a log value. It is the equivalent of `getPublicationMultiplier` in the CT code.

#### `updateMilestones()`

This function should update `this.milestones` to match the milestones a player would have at this point.

#### `simulate()`

This function contains the simulation loop and the publication conditions.
You don't need to edit it unless you want to change the publication conditions.

#### `tick()`

This is the equivalent of the `tick()` function of the CT. Only edit the part before `this.t += this.dt / 1.5`.

#### `buyVariables()`

This function makes the sim buy variables.
You don't need to edit it unless you are working with multiples currencies or need to do certain actions when a variable is bought.

### Registering the sim file

Now that your sim file is ready, go to `src/Sim/main.ts`.

Add a new import to import the `export` function of your sim file.

Now, find the `singleSim` function and add a new case in the `switch` statement following the same model as other theories.

The sim should now have your CT correctly registered.

### Compile and test

Any time you want to test your changes, compile by running `npm run build`.
