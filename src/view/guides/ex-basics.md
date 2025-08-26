---
title: "Exponential Idle Basics"
description: "A guide for stars, prestiges, supremacies, minigames, and the basics of the game."
author: "LE★Baldy and Snaeky"
contributors: "The Amazing Community"
draft: false
order: 0
eylanding: "basics"
---

This intro and following guide are designed to help you play through the 1 to ee2000
section of the game. This introduction will give you some fundamentals to help you progress
while playing this section of the game.

If you don't want to have spoilers for the later game, don't read
further ahead than you are already.

### Variables and Upgrades

Variables are the main purchases in the game. They will be the most important to buy, and you should buy them as priority because they increase __Lifetime f(t)__ faster. All of the variables purchasable are below. You will not be able to get all of them right away but will be able to get them all as you keep playing. This screen is found by pressing the <kbd>\<Upgrades\></kbd> button between the upgrades and the main equation graph.

Upgrades are where additional boosts to variables lie. They are crucial to progress and should be bought often. You will be able to see items that can be purchased with __f(t)__, \\(\mu\\), and \\(\psi\\) on that page in that order. You can navigate to that tab by pressing the <kbd>\<Variables\></kbd> button between the variables and the main equation graph.

### Variable Names and Uses

Class: breakdown;
last_row: false;

|                      |       |                           |         |                      | Variable Names      |
| -------------------- | ----- | ------------------------- | ------- | -------------------- | ------------------- |
| [class="bheader";]x        | x     | [class="bheader";]$\gamma$      | gamma   | [class="bheader";]$\nu$    | nu                  |
| [class="bheader";]y        | y     | [class="bheader";]$\delta$      | delta   | [class="bheader";]$\xi$    | xi                  |
| [class="bheader";]z        | z     | [class="bheader";]$\varepsilon$ | epsilon | [class="bheader";]$\mu$    | mu                  |
| [class="bheader";]s        | s     | [class="bheader";]$\zeta$       | zeta    | [class="bheader";]$\psi$   | psi                 |
| [class="bheader";]u        | u     | [class="bheader";]$\eta$        | eta     | [class="bheader";]$\sigma$ | sigma               |
| [class="bheader";]v        | v     | [class="bheader";]$\theta$      | theta   | [class="bheader";]$\phi$   | phi                 |
| [class="bheader";]w        | w     | [class="bheader";]$\iota$       | iota    | [class="bheader";]$\tau$   | tau                 |
| [class="bheader";]$\alpha$ | alpha | [class="bheader";]$\kappa$      | kappa   | [class="bheader";]$\rho$   | rho                 |
| [class="bheader";]$\beta$  | beta  | [class="bheader";]$\lambda$     | lambda  | [class="bheader";]$t$      | t                   |

Class: breakdown;
last_row: false;

|                            |          |                                 |          |                            | Variable Uses |
| -------------------------- | -------- | ------------------------------- | -------- | -------------------------- | ------------- |
| [class="bheader";]x        | main var | [class="bheader";]$\gamma$      | main var | [class="bheader";]$\nu$    | main var      |
| [class="bheader";]y        | main var | [class="bheader";]$\delta$      | main var | [class="bheader";]$\xi$    | main var      |
| [class="bheader";]z        | main var | [class="bheader";]$\varepsilon$ | main var | [class="bheader";]$\mu$    | prestiges     |
| [class="bheader";]s        | main var | [class="bheader";]$\zeta$       | main var | [class="bheader";]$\psi$   | supremacies   |
| [class="bheader";]u        | main var | [class="bheader";]$\eta$        | main var | [class="bheader";]$\sigma$ | <details><summary><red>SPOILERS</red>: ee2k+</summary>graduations</details> |
| [class="bheader";]v        | main var | [class="bheader";]$\theta$      | main var | [class="bheader";]$\phi$   | <details><summary><red>SPOILERS</red>: ee2k+</summary>graduations</details> |
| [class="bheader";]w        | main var | [class="bheader";]$\iota$       | main var | [class="bheader";]$\tau$   | <details><summary><red>SPOILERS</red>: ee5k+</summary>theories</details>    |
| [class="bheader";]$\alpha$ | main var | [class="bheader";]$\kappa$      | main var | [class="bheader";]$\rho$   | <details><summary><red>SPOILERS</red>: ee5k+</summary>theories</details>    |
| [class="bheader";]$\beta$  | main var | [class="bheader";]$\lambda$     | main var | [class="bheader";]$t$      | time          |

### What does ee mean?

You start out with normal numbers and quickly work your way up to $X.xxeX$ notation. This notation is scientific notation. It stands for $X.xx*10^X$. Later you are introduced to $X.xxeeX$. This is a custom game notation that stands for $X.xx*10^{10^X}$.

### Achievements and Minigames

* Achievements are just that. They are goals to reach that give you stars as reward.
* Minigames are puzzles that you can solve that will give you stars as a reward for solving them. Check out the [Minigame Guide](/guides/asd) for how to solve each puzzle and more resources.

### Stars and Star upgrades

* Stars are a currency that operates outside of the main game that you use to purchase star upgrades.
  These upgrades range from QoL (Quality of Life) features to boosts to the gameplay. For the most part, you should
  prioritize new variables as soon as you can, __EXCEPT__ for Autoprestige. Autoprestige is a huge
  boost in progress due to impossible to replicate levels of optimization, and you should prioritize it over variables of a similar cost. More details on
  star upgrades to prioritize can be found in following guides.

### Autoprestige expression

#### Autoprestige ex­pres­sion

<button class="copy-btn" onClick="copyText('ap_eq');">Copy Equation Text</button>

<blockquote id='ap_eq'>
timer(pt * d(ln(ln(db / b + 1))) &lt; 1)<br>
&gt; 3 * tr &amp;&amp; db &gt; b
</blockquote>

#### Autoprestige explanation

The idea behind \\(d(ln(db/b+1)/pt) < 0\\) is clearer if you consider a different term \\(d((db/b+1)^{(1/pt)}) < 0\\).
They measure the same thing, but the second one is just raised to the exponent, base e. They are
equivalent because \\(e^x\\) (and \\(ln (x)\\)) are both strictly increasing functions on the domain
\\(x > 0\\), so applying those functions will not change where the local maximum is located
(when \\(d\\) changes sign).

\\(db/b+1\\) is better explained with \\((b + db)/b\\). \\(b + db\\) is the new \\(b\\) value you would
get after prestige, and \\(b\\) is the old \\(b\\) value you currently have. If you prestige, your
\\(b\\) is multiplied by that exact value. That is, your \\(b\\) grows with ratio \\((b + db)/b\\) if
you were to prestige.

The general idea of a good expression would be to "maximize \\(f\\) growth over time," and it would
be the same as "maximize \\(b\\) growth over time." To measure \\(b\\) growth over time, in this approach
we take the growth of \\(b\\) that can result from current prestige only and take \\((b + db)/b\\) as the
ratio of growth.

We could divide the ratio by time, but that doesn't make sense because ratios are applied
multiplicatively (e.g. ratio \\(r\\) per second means \\(r^5\\) in \\(5\\) seconds, not \\(5*r\\)). Hence,
instead of dividing, we take the power \\(1/pt\\) (\\(pt\\) being the time since prestige) to get the
correct value of ratio.

Therefore, we get the expression \\(((b + db)/b)^{(1/pt)}\\) which represents "after last prestige, \\(b\\)
grew by \\(this\\) \\(ratio\\) per second." To maximize this value, we note that this value actually achieves
one local maximum (by working through the behaviors of (\\(f\\) over time) so we may simply take a
derivative (\\(d\\)) and see when it turns negative.

#### Visual representation

![AP graph](/images/AP-graph.png)

### Autosupremacy expression

#### Auto­su­prem­acy ex­pres­sion

<button class="copy-btn" onClick="copyText('as_eq');">Copy Equation Text</button>

<blockquote id="as_eq">
dpsi + psi &gt; min(costUpS(1), <br>
    costUpS(2), costUpS(3)) <br>
&amp;&amp; (((lf &lt; ee48000) <br>
&amp;&amp; ((log10(log10(gf)) &gt;= <br>
    log10(log10(lf))-400) <br>
    || ((log10(log10(gf)) &gt;= <br>
        log10(log10(lf)) * 0.8) <br>
        &amp;&amp; (((dpsi + psi &gt; costUpS(1, 3)) <br>
        || (dpsi + psi &gt; <br>
            (costUpS(2) + costUpS(1, 2)))) <br>
        || ((log10(log10(gf)) &gt;= <br>
                log10(log10(lf))-10000) <br>
            &amp;&amp; (dpsi + psi &gt; costUpS(3, 3))) <br>
        || ((log10(log10(gf)) &gt;= <br>
                log10(log10(lf))-4000) <br>
            &amp;&amp; (dpsi + psi &gt; costUpS(3, 2))) <br>
        || ((log10(log10(gf)) &gt;= <br>
                log10(log10(lf))-1000) <br>
            &amp;&amp; (dpsi + psi &gt; costUpS(3, 1))))) <br>
    || ((log10(log10(gf)) &lt; <br>
        log10(log10(lf)) * 0.8) <br>
    &amp;&amp; (timer(d(ln(db / b + 1) / pt) &lt; 0) <br>
        &gt; 3 * tr &amp;&amp; db &gt; b <br>
    &amp;&amp; dpsi + psi &gt; min(costUpS(1), <br>
        costUpS(2), costUpS(3)) <br>
    &amp;&amp; ln(1 + max(1, log10(sf)) / <br>
        smooth(max(1, log10(gf)), <br>
        (st &gt; tr) * ee99)) / <br>
    max(1, st) &lt; <br>
        smooth(ln(1 + max(1, log10(sf)) / <br>
            smooth(max(1, log10(gf)), <br>
            (st &gt; tr) * ee99)) / <br>
            max(1, st), (pt &gt; tr) * ee99))))) <br>
|| ((lf &gt;= ee48000) <br>
    &amp;&amp; (((lf &lt; ee52000) <br>
            &amp;&amp; ((costUpS(3) &lt; e411 <br>
            &amp;&amp; psi + dpsi &gt; e411) <br>
            || (costUpS(3) &lt; e531 <br>
            &amp;&amp; psi + dpsi &gt; e531) <br>
            || (costUpS(3) &lt; e551 <br>
            &amp;&amp; psi + dpsi &gt; e551))) <br>
        || ((lf &lt; ee58000) <br>
            &amp;&amp; (costUpS(3) &lt; e511 <br>
            &amp;&amp; psi + dpsi &gt; e511)))) <br>
|| ((lf &lt; ee75000) <br>
    &amp;&amp; (costUpS(3) &lt; e571 <br>
    &amp;&amp; psi + dpsi &gt; e571)) <br>
|| (costUpS(1) &lt; e52 <br>
&amp;&amp; psi + dpsi &gt; 4.2e51))
</blockquote>

**Do a manual supremacy when you input this expression and never enter the
edit expression field again afterwards. Make sure autobuyers are on x1
or xMax.**

###### Reference [Locking Smooth()](#method-2-lock)
###### Reference [<green>True</green>/<red>False</red> auto expression evaluation](#truefalse-auto-expression-evaluation)

#### Autosupremacy explanation

The autosupremacy expression is an attempt to do the autoprestige expression, but for supremacy. It tracks the same information, but over multiple prestiges. It is harder to make an autosupremacy expression than an autoprestige expression because after a new prestige, Supremacy \\(f(t)\\) doesn't increase until you get back to the \\(f(t)\\) you left off at. This makes the growth of a supremacy staircase-shaped. This makes it difficult to find the optimal point as we did with autoprestige and is why we time it with the end of a prestige to be sure.

### Smooth() for auto expressions

Internally, smooth is implemented using an exponential moving average. Here are some ways to use this construction.

#### Method 1: Moving average

If a value fluctuates too much, you can use smooth so that the value does not go rampant, triggering some conditions incorrectly. One main example is to use it when you use multiple \\(d()\\) functions on the same expression.

For instance, \\(smooth( d(d(ln(db))), 10)\\) will behave much better than the simple \\(d(d(ln(db)))\\) because using d multiple times creates a lot of fluctuation, due to the discrete nature of \\(d()\\) (not a true derivative, but an extrapolation of slope over the last tick). Of course, this introduces some "lag factor" in the sense that when some threshold is passed, smooth won't display it until a short after.

#### Method 2: Lock

Due to the nature of the expression, if the second input of smooth is very large, then there will be no average at all: instead of taking a normal average, we can skew the weights so that any new value is too small to be noticed. As a very simple example, we can calculate averages like \\(average = 0*(new\\) \\( value)+1* (old\\) \\( value)\\) to preserve old values. On the contrary, if we skew this the other way, then only the new value would appear:  \\(average = 1*(new\\) \\(value)+0* (old\\) \\( value)\\).

A simple expression like \\(smooth(expr, ee99)\\) will first compute expr and keep that value indefinitely until the expression field is reset: upon modifying the expression, every prestige for prestige expressions, and every supremacy for supremacy expressions. This is what we refer to as "lock."

However, we can do better: instead of simply locking values, we can control when the locking mechanism comes in. Using conditions, we can switch back and forth between indefinite locks and instantaneous updates: \\(smooth(expr, ee99*cond)\\). If cond is true, then \\(ee99 *cond\\) will be ee99, thereby activating the lock. If cond is false, then \\(ee99 * cond\\) will be 0, thereby switching to instantaneous updates. The result is that we obtain the value of expr evaluated when the cond was last false.

#### Method 3: Cumulative maximum

If we have two really large values, the average of the two will be in favor of the larger of the two. In fact, if the two numbers are really really big, the average will be indistinguishable from the larger of the two due to finite data storage (term: floating point precision). We can abuse this idea to convert the input of smooth into a very large value, thereby converting averages like \\(average = 0.5 *(new\\) \\(value) + 0.5 * (old\\) \\( value)\\) into the equivalent \\(average = max(new \\) \\(value, old \\) \\(value)\\). The effect is that we obtain the maximum value that the input attained ever since the expression was reset (from modifying the expression or from prestige (resp. supremacy) for prestige expression (resp. supremacy expression)). Of course, we have to cancel out the magnification of the inputs in order to retrieve the value we actually want.

For example, \\(smooth(10^{10^{10^{db}}}, 1)\\) has the input large enough that it displays the largest value of \\(10^{10^{10^{db}}}\\) that occurred so far. However, we wouldn't want db blown up this way, so we can use \\(log_{10}(log_{10}(log_{10}(smooth(10^{10^{10^{db}}}, 1))))\\) to retrieve back the maximum \\(db\\).

#### Reference formula

$$
\begin{align}
smooth(h,c)=\bar{h}_T&=h_T+e^{-\frac{\Delta T}{c_T}}(\bar{h}_{T-\Delta T}-h_T) \\
&=\alpha h_T+(1-\alpha)\bar{h}_{T-\Delta T},\;\alpha=1-e^{-\frac{\Delta T}{c_T}}
\end{align}
$$

### <green>True</green>/<red>False</red> auto expression evaluation

If you enter the autoprestige or autosupremacy field to enter the expression, you will most often notice it evaluate as <red>False</red> and sometimes as <green>True</green>. When the evaluation becomes <green>True</green>, the expression will cause a prestige/supremacy respectively. Any other time when the expression is evaluated, it will evaluate as <red>False</red>. If the expression is evaluating to <red>False</red>, there is no bug, nor is it broken. It is doing exactly what it is meant to do.

###### NOTE: Entering the expression field where it displays the evaluation breaks [smooth() locking](#method-2-lock) which will break all any expression using said technique.
