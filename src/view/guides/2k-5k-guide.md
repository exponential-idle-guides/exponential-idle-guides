---
title: "ee2k to ee5k"
description: "A guide for stars, prestiging and supremecies, and the route you should take for ee2k to ee5k."
author: "LE★Baldy"
contributors: "The Amazing Community"
draft: true
order: 3
---

### Updating stars

[Star Calculator](https://conicgames.github.io/exponentialidle/stars)
does not need to be updated the most often, but should be done if it has
been a while since you last did.

### Autosupremacy

Do not buy Autosupremacy until more than 118,840 stars. This keeps all
variables when you get autosupremacy..

Do a manual supremacy when you input this expression and never enter the
edit expression field again afterwards. Make sure autobuyers are on x1
or xMax.

Remember to change mode from ratio to expression by clicking
<kbd>Ratio</kbd> twice to cycle. [Explanation of autoprestige expression](https://exponential-idle-guides.netlify.app/guides/basics/#supremacy-equation-explanation)

```
timer(d(ln(db/b+1)/pt) < 0)
> 2 * tr && db > b
&& dpsi + psi > min(min(costUpS(1),
costUpS(2)), costUpS(3))
&& ln(1 + max(1,log10(sf))/
smooth(max(1,log10(gf)),
(st>tr) * ee99))/max(1,st)<
smooth(ln(1 + max(1,log10(sf))/
smooth(max(1,log10(gf)), (st>tr)
* ee99))/max(1,st), (pt>tr) * ee99)
```

### Graduation routing

The graduation route for pre-Theory is:

 - 2k → 3.8k or 4k
 - 3.8k or 4k → 4.6k
 - 4.6k → 5k

If you graduate with 17 students (4.4k) by accident, next graduation is
4.8k → 5k. For the 3.8k vs 4k decision you can also use the
[graduation calculator](https://www.replit.com/@LEBaldy2002/gradcalc) to
find out where your phi lands at the end of your grad, but is not needed.

### Introduction to students
One student is attainable for every ee200 max \\(f(t)\\) you reach
starting with 5 at ee2000. Students are used to purchase phi upgrades
and theories, both of which are found by cycling through the new button
on the bottom of the screen. Some upgrades become available through
further progression of the game.

#### Phi (\\(\varphi\\)) and tau (\\(\tau\\))
![Header](/images/header.jpg)

In the top left, we see \\(\varphi\\) = 1.00. This is the greek letter
phi and is what students are used to upgrade. In the top right, we see
\\(\tau\\) = ????. This is the letter tau and is grown through theories
you will unlock at ee5000.

#### Students row
![Students](/images/students.jpg)

On the left, our current available students is shown by \\(\sigma\\) on
the top. The total students we have is designated by
\\(Total: 19\sigma_t\\).

On the right, the amount of students gained for a graduation at that
moment is shown by \\(d\sigma\\). The \\(f(t)\\) required for the next
graduation is shown on the bottom.

Total students after a graduation is equal to  \\(\sigma_t\\) \\(+\\)
\\(d\sigma\\). When a graduation is available, it will display a message
_Tap to graduate new students_. You do not have to graduate with only
one student and is often times better to graduate for multiple at a time.

#### Phi upgrades
![Phi Upgrades](/images/phiupgrades.jpg)

At the top, we see the equation: \\(\varphi = \prod_{i}\varphi_{i}\\).
This is telling us \\(\varphi\\) value top left is equal to all the
multiplication of all the phi upgrades.

Here we see R1-7 also known as the phi upgrades. These are what
determine what phi value you have in the top left. One strategy is
pressing the <kbd>i</kbd> and comparing phi gain/student cost. However,
we have a [student calculator](https://conicgames.github.io/exponentialidle/students.html)
for phi updates.

When "↑ \\(\varphi\\) exponent by 0.1" is purchased, there will appear
an exponent in the equation at the top (ex: \\(\varphi_{i}^{1.1}\\))
putting the phi value to that exponent.

#### Theories
![Theory](/images/theory.jpg)

These are unlocked at 20 students (ee5k). When you have enough to get
Theory 1, unlock it immediately.

For instructions of how to respec student upgrades please check back to
the [respec instructions](https://exponential-idle-guides.netlify.app/guides/intro/#respecing-students).

### The final push to 5k
First thing is to make sure you are ready for 5k push. You must have 18
or 19 students. If you have 17 students, graduate at 4.8k for 19
students. If you have 16 or less students then graduate at 4.6k for 18
students. Next is to make sure you have the appropriate autoprestige and
autosupremacy equation in and working. If your autosupremacy is already
in then leave it on and don't enter the expression field to reset it.

The final three steps are the most important:
1. Update your phi with the [phi calculator](https://conicgames.github.io/exponentialidle/students.html) while you go and not just in the beginning.
2. Update your star permenant levels with the [star calculator](https://conicgames.github.io/exponentialidle/stars) at least once after ee4600.
3. Mentally prepare for a long push (it can take a while).

#### Additional notes

When you get to ee4995, turn off autoprestige and just cruise until ee5000. Do not turn off earlier or it will be significantly slower or you won't make it.

Never turn off autobuy of variables and upgrades. The F(t) used for graduations can be found in statistics and is cumulative. In other words, it does not decrease with purchases and is only speed up with them so it is in your best interest to continue purchasing.

You can sell your autosupremacy during the 4.6k to 5k push after the final psi upgrade. This is because you can use an additional 100k stars for permenant levels for variables. The next psi 3 upgrade you will see at the bottom is only attainable at ee9160+ so you will not get it for a while.
