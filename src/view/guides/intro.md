---
title: "Introduction to Graudation"
author: "LE★Baldy & Snaeky"
contributors: "The Amazing Community"
order: 2
---

These guides are designed to help you play through the phi and theories sections
of Exponential Idle. This introduction will give you some fundamentals to help you progress
while playing this section of the game.

If you don't want to have spoilers for the later game, don't read
further ahead than you are already.

### The New Autoprestige Equation

```
((timer(d(ln(db / b + 1) / pt) < 0)
> 3 * tr && db > b && 
((d(smooth(10^10^10^(phi * tau), 1)) > 1) 
&& timer(abs(d(log10(phi + 1))) < 50) > 15)) 
&& phi > 1) || 
((timer(d(ln(db / b + 1) / pt) < 0)
> 3 * tr) &&(phi >= 1 && phi <= 1))
```

#### Autoprestige Explaination
This is the new equation for prestige. It looks intimidating, but it will works normally and you never have to turn it off. Here is an explaination for all parts except the normal equation which has an [explanation](https://exponential-idle-guides.netlify.app/guides/basics/#autoprestige-explaination) already.

```
((d(smooth(10^10^10^(phi * tau), 1)) > 1)
```

This returns true if phi and/or tau grows a very very small amount. The many "10^" is to make any tiny changes explode into very large numbers so that they will never be less than 1, especially if you are far into a graduation or endgame. This also prevents you from early prestiging from dropping accel as it drops phi drop in value.

```
timer(abs(d(log10(phi + 1))) < 50) > 15))
```

This part makes it so if phi were to change more than e5 within 1 tick, then wait 15 sec before prestiging. This will allow you to swap R9 freely without needing to worry about accidentally prestiging for a very small amount of b.

```
((timer(d(ln(db / b + 1) / pt) < 0) > 3 * tr) && (phi >= 1 && phi <= 1)
```

If phi is equal to 1, then it uses the normal autoprestige equation. We don't have "=" in the equations, so we had to work around it by using both >= (greater than or equal to) and <= (less than or equal to). This means that, even if you don't have any phi upgrades, it will allow you to prestige like normal and not require you to swap out of R9 or theories until the end of a graduation.

###### Note: If you don't know what R9 is, you will find out later in the game.

### Graduation routing
When you are within ee5 of the graduation, turn off autoprestige. It is faster
to cruise than recover and push. Best bet is use the [Graduation
calculator](https://replit.com/@LEBaldy2002/gradcalc). Please [contribute to the Phi\*Tau sheet](https://docs.google.com/forms/d/12ldZ22WXQrmsHVt_269-a55KTir-KvT65gmX2JXTYpQ/edit) before graduating.

### Student use routing
Buy **all** available theories unless
explicitly stated otherwise because theories are important to start as soon
as possible as they function outside of the main game.

Use the [student calculator](https://conicgames.github.io/exponentialidle/students.html) (by Niedzielan, AfuroZamurai, and Milla) and
[star calculator](https://conicgames.github.io/exponentialidle/stars) (by Eaux Tacous) for optimal distributions.

### Theory routing
Publications are equivalent to prestiges for \\(f(t)\\) so don't be afraid to
use them. However, the best publication multiplier is not known at the
time, but it does decrease over time. If you are close to a multiplier
you want, turn off autobuyer and let \\(\rho\\) increase without buying
upgrades for a faster short-term increase before the publication (turn
on after you publish). Total \\(τ\\), found in the equation or at the top
of the screen, is a multiplicative combination of all \\(τ\\) from each
theory.

Don’t be afraid to skip getting all milestones to work on the next or a
better theory.

### Respecing students
The button at the bottom labeled “Respec” removes all used \\(σ\\) in
Research and gives you back without consequence. This allows for testing
or reallocating easily, but it will remove __ALL__ of your students from 
everything including theories. On the bottom right is located a list-shaped
button. Pressing this will reveal the <kbd>-</kbd> buttons. These
<kbd>-</kbd> buttons remove x levels from the selected research option.
The amount of levels removed is based on the x1, x10, x25, x100, xMax
cost option selected in the top right. On the right side of each
research option, you can also see the total levels.

### Respecing milestones
Unlike students, all Milestone sections already have the <kbd>-</kbd> button.
This works in the same way as above. Here you can also find how many
unused Milestones available at the top. On the right side of each
Milestone, you can also find the current and max levels of each.

### Variable Names
Variable | Name | Variable | Name | Variable | Name
--- | --- | --- | --- | --- | ---
\\(x\\) | x | \\(\beta\\) | beta | \\(\kappa\\) | kappa
\\(y\\) | y | \\(\gamma\\) | gamma | \\(\lambda\\) | lambda
\\(z\\) | z | \\(\delta\\) | delta | \\(\nu\\) | nu
\\(s\\) | s | \\(ε\\) | epsilon | \\(\xi\\) | xi
\\(u\\) | u | \\(\zeta\\) | zeta | \\(\mu\\) | mu
\\(v\\) | v | \\(\eta\\) | eta | \\(\psi\\) | psi
\\(w\\) | w | \\(\theta\\) | theta | \\(\varphi\\) | phi
\\(α\\) | alpha | \\(\iota\\) | iota | \\(\tau\\) | tau
