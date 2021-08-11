---
title: "Theory Simulator: How to Read Results"
author: "LE★Baldy, Snaeky, and Gaunter"
contributors: "Antharion for the simulator itself"
draft: true
order: 4
---

**NOTE: THE SIM ASSUMES THAT YOU HAVE ALL MILESTONES AND AD BONUS! IF YOU DO NOT HAVE THESE IT WILL GIVE YOU INCORRECT VALUES FOR RESPECTIVE THEORY**

#### Example Output
The top image is from the [website version](https://bit.ly/anthsim) and the bottom from the discord bot or when you request a png from the website.

![Theory Sim Example Outputs](/images/TheorySimExampleOutputs.png)

#### Column Explanations
##### Manual
This refers to the Tau/hour that you will gain from the active strategy of that theory. 
This is defined as log(tau gained)/publication time (hours). 
For example, if you gain 1e10 tau over a 2 hr run then your rate for that theory is 5 tau/hr.
Use these values to compare to other theories if you plan to do active strategies for that following publication.

##### Auto
This is the Tau/hour that you will gain from the idle strategy of the theory. 
This is defined the same way as Manual.
Use these values to compare to other theories if you plan to do active strategies for that following publication.

##### Ratio
This is the ratio of the manual:auto for tau gain (2nd column/3rd column). 
For ratios closer to 1, you should consider only running these theories while offline/idle.
For ratios much larger than 1, you should consider only running these theories while actively or semi-actively playing the game and not while offline. 
This is the reason why T5 is considered an active theory and T2 is considered an idle theory.

##### Multi Manual
This is the optimal multiplier that you should publish at for the given manual strategy for that **single publication**. 
The multiplier can change drastically between publications based on theory, when variables are purchased, and more.
You may want to do multiple simulations after each publication for some theories but is not nessesary.

##### Multi Auto
This is the optimal multiplier that you should publish at for the given active strategy for that **single publication**. 
The multiplier can change drastically between publications based on theory, when variables are purchased, and more.
You may want to do multiple simulations after each publication for some theories but is not nessesary.

##### Strategy Manual and Strategy Auto
This is the optimal strategy for active or idle playing (for auto) of that publication. Table below for what each part means.

--- | Explaination | Notes
--- |     ---      |  ---
**Theory Name**
T1, T2, etc           |                            The theory the strategy belongs to                         | It will always match the theory in that row.
**Listed Variables**
C1C2C3, C4, Q1Q2, etc |            These variables you autobuy. Remaining variables turn off.                 | ---
**Listed Variables with no**
noC4C5C6, noC3C4, etc |               These variables you turn off. Rest you keep on autobuy.                 | ---
d
T8d, T1d, etc         | Chasing doublings means to buy the non-doubling when e1 lower than its doubling pair. | Doubling pairs example: T1's \\(q_1\\) & \\(q_2\\). One is \\(2^x\\) per 1 upgrade and one is \\(2^x\\) every 10 upgrades.
**Just Theory Name**
T2, T8, etc           |                                   Autobuy all variables                               | ---
**T8  Attractor**
T8C, T8L, or T8       |          The C, L, and R represent the three attactors and which to have on.          | {toggle}Rare to see anything but T8R, but it has happened.

###### Variables to never not buy:
Theory | Variables
--- | ---
T1 | q1, q2, c4
T2 | all variables
T3 | b1, b2, b3, c11, c13, c21, c33
T4 | q1, q2, c3
T5 | q1, q2, c3
T6 | r1, r2, q1, q2
T7 | q1, c4, c5, c6
T8 | c1, c2

\*The exception is during the cruise phase of the end of a publication

\*\*Table excludes variables that are bought sometimes, but not always such as T5 active

##### Time Manual and Time Auto
This is the time (in hours) it should take to publish for the active or idle strategy.

The simulator only runs up to 720 hours per theory per manual/auto section. 
Any results from a 720 hour simulation should be treated with caution as they never finished their publication.
If you get a negative /hour result from hitting this 720 hour cap, this is because it never got back to the publication mark to push tau so rho ended below tau.

##### Delta Active and Delta Idle
This will tell you how much tau you are expected to gain for the active or idle strategy. 

- **Note:** Delta Active and Delta Idle are defined as the quantity \\(tau_{final}\\)/\\(tau_{initial}\\) instead of \\(tau_{final}\\) - \\(tau_{initial}\\). 
So if delta active was equal to 1e3 and the starting tau was e100, the sim publishes at e103 tau. 
**You should NOT publish at this tau value** since it's very likely your starting tau will be different from what is actually used in the sim due to your input being 1eXXXX not x.xxxeXXXX. 
This should not be confused with log(tau).
