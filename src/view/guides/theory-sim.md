---
title: "Theory Simulator: How to Read Results"
description: "Our guide for running the theory simulator and understanding the results."
author: "LE★Baldy, Snaeky, and Gaunter"
contributors: "Antharion for the original simulator, Xelaroc for the dedicated continuation, XLII for the current simulator, and the many others whom have developed strategies"
draft: true
order: 7
---

**This section will be updated to accommodate the new simulator and its features. Please read the link's instructions.**

### Before you start

The current theory simulator is made by XLII and is run on a [website](https://theory-simulator.tredec.repl.co/). Below will go through the individual parts of the output.

### **τ/h Active / Idle**

This refers to the \\(\tau/hour\\) that you will gain from the active strategy of that theory.
This is defined as \\(log(\tau\\) \\(gained)/publication\\) \\(time\\) \\(in\\) \\(hours\\).
For example, if you gain 1e10 \\(\tau\\) over a 2 hr run then your rate for that theory is 5 \\(\tau/hr\\).
Use these values to compare to other theories if you plan to do active strategies for that following publication.

### **Ratio**

This is the ratio of the manual:auto for \\(\tau\\) gain (2nd column/3rd column).
For ratios closer to 1, you should consider only running these theories while offline/idle.
For ratios much larger than 1, you should consider only running these theories while actively or semi-actively playing the game and not while offline.
This is the reason why T5 is considered an active theory and T2 is considered an idle theory.

### **Multi Active / Idle**

This is the optimal multiplier that you should publish at for the given active strategy for that **single publication**.
The multiplier can change drastically between publications based on theory, when variables are purchased, and more.
You may want to do multiple simulations after each publication for some theories but is not necessary.

### **Strat Active / Idle**

Full documentation of strategies that are not listed here as well as the full collection is very long. The strategies can be found in the [Theory Strategies Guide](https://spqcey-additions--exponential-idle-guides.netlify.app/guides/theory-strategies/).

### **Time Active / Idle and Pub Time**

This is the time it took the simulator to publish for the active or idle strategy. This is a mere approximation for humans due to not being perfect and due to offline play.

### **Δτ Active / Idle**

This will tell you how much \\(\tau\\) is gained between publications for the active or idle strategy.

\\(\Delta\tau\\) is defined as the quantity \\(\frac{\tau_{final}}{\tau_{initial}}\\) or \\(log_{10}(\tau_{final})\\) - \\(log_{10}(\tau_{initial})\\).
Ex: If \\(\Delta\tau\\) was equal to 1e3 and the starting \\(\tau\\) was e100, the sim published at e103 \\(\tau\\).

**You should not publish at this \\(\tau\\) value** in most circumstances. Many theories can vary from human execution due to the sim be­ing perfect or nearly perfect at the specific strategy. This is most apparent most when publications are still too fast to do the active strats properly. If you input your tau as 1eXXXX, then you should definitely not publish at this unless your tau is exactly 1eXXXX and not x.xxeXXXX. Use this number as a reference for when to look out for the multiplier instead of an exact figure.