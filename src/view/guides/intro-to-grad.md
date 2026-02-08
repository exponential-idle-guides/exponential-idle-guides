---
title: "Introduction to Graduation"
author: "LE★Baldy & Snaeky"
contributors: "The Amazing Community"
order: 2
eylanding: "IntroToGrad"
---

These guides are designed to help you play through the phi ($\varphi$) and theories sections of Exponential Idle. This introduction will give you some fundamentals to help you progress while playing this section of the game.

If you don't want to have spoilers for the later game, don't read further ahead than you are already.

### New autoprestige expression

<button class="copy-btn" onClick="copyText('ap_eq');">Copy Text</button>

<blockquote id="ap_eq">
timer(pt * d(ln(ln(db / b + 1))) &lt; 1)<br>
&gt; 3 * tr &amp;&amp; db &gt; b &amp;&amp;<br>
((d(smooth(10^10^10^(phi * tau), 1)) &gt; 1<br>
&amp;&amp; timer(abs(d(log10(phi + 1))) &lt; 50) &gt; 15<br>
&amp;&amp; phi &gt; 1) || phi &lt;= 1 ||<br>
(0.8 * log10(log10(lf)) &gt; log10(log10(gf)) ||<br>
0.8 * log10(log10(gf)) &gt; log10(log10(sf))))
</blockquote>

#### Autoprestige explanation

This is the new expression for prestige. It looks intimidating, but it will work normally and you never have to turn it off (you would have to if you didn't use this one later on). Here is an explanation for all parts except the normal expression which has an [explanation](/guides/ex-basics/#autoprestige-explanation) already.

<blockquote style="font-family:monospace;">((d(smooth(10^10^10^(phi * tau), 1)) > 1</blockquote>

This returns true if phi and/or tau grows a very very small amount more than the max reached that prestige. The many "10^" is to make any tiny changes explode into very large numbers so that they will never be less than 1, especially if you are far into a graduation or endgame. This also prevents you from early prestiging from dropping accel or moving students around as they make phi drop in value.

<blockquote style="font-family:monospace;">timer(abs(d(log10(phi + 1))) < 50) > 15))</blockquote>

This part prevents prestiging if phi were to change by more than e5 within 1 tick. It will then wait 15 seconds before checking if it can prestige again. This will allow you to swap R9 or students freely without needing to worry about accidentally prestiging for a very small amount of $b$.

<blockquote style="font-family:monospace;">|| phi &lt;= 1 ||</blockquote>

If phi is equal to 1, then it uses the normal autoprestige expression. We don't have "=" in the expressions, so we had to work around it by using <= (less than). Phi can never be less than 1 so if $phi <= 1$, $phi = 1$. This means that, even if you don't have any phi upgrades, it will allow you to prestige like normal and not require you to swap out of theories (or R9 until the end of a graduation).

<blockquote style="font-family:monospace;">(0.8 * log10(log10(lf)) > log10(log10(gf)) ||<br>0.8 * log10(log10(gf)) > log10(log10(sf))))</blockquote>

This lets the normal expression work when you supremacy or graduate up to 80% of $log10(log10(lifetime$ $ft$ $or$ $graduation$ $ft$)) allowing you to recover faster than normal. The $timer(abs(d(log10(phi + 1))) < 50) > 15))$ part of the expression above does not allow the normal expression to prestige for 15 seconds after a graduation or prestige, because phi can, and will, grow more than e5 in 1 tick. So, we allow the normal expression to work like normal while recovering.

###### Reference [Cumulative Maximum Smooth()](/guides/ex-basics/#method-3-cumulative-maximum)

###### Note: If you don't know what R9 is, you will find out later in the game

### Autosupremacy

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

**Do a manual supremacy when you input this expression and never enter the edit expression field again afterwards. Make sure autobuyers are on x1 or xMax.**

###### Reference [Locking Smooth()](/guides/ex-basics/#method-2-lock)

###### Reference [<green>True</green>/<red>False</red> auto expression evaluation](/guides/ex-basics/#truefalse-auto-expression-evaluation)

#### Autosupremacy explanation

Autosupremacy works the same as autoprestige, but more complicated due to the staircase nature of supremacy progress. This is due to it not progressing unless max $f(t)$ during that supremacy is increased, but due to prestiges, this $f(t)$ isn't being pushed during prestige recovery which is why we use [smooth() locking](/guides/ex-basics/#method-2-lock) and general smooth() to mitigate this phenomenon. The autosupremacy also is lined up with the end of a prestige so that we get the maximum amount of $f(t)$ out of that prestige to make sure it is time to supremacy.

### Star spending

Upon unlocking all variables, you can use the [star calculator](https://conicgames.github.io/exponentialidle/stars) (by Eaux Tacous) for optimal distribution. This will not be useful if you don't have all star upgrades.

#### When to recalculate star distribution

[Your star distribution](https://conicgames.github.io/exponentialidle/stars) does not need to be updated the most often but should be done if it has been a while since you last did. A good rule of measurement is every ee1000 to ee2000 gain to your highest reached $f(t)$, as any closer between breaks normally won't be significant enough. The exception to this is during the ee6000 push which, similar to the ee5000 push, redistribution can be handy as it is a long push.

### Graduation routing

When you are within ee5 of the graduation, turn off autoprestige. It is faster
to cruise than recover and push. Best bet is to use the [Graduation
calculator](https://replit.com/@LEBaldy2002/gradcalc?v=1) (instructions below). Please [contribute to the Phi\*Tau sheet](https://docs.google.com/forms/d/12ldZ22WXQrmsHVt_269-a55KTir-KvT65gmX2JXTYpQ/edit) before graduating.

#### How to use the graduation calculator

Because of replit changes, you can no longer simply click play and it runs the calculator (linked above). You can still use it, but it will be through the following steps:

1. Make a replit account (or login to an existing account).
2. Fork the graduation calculator.
3. On the fork you made, go to the shell terminal.
4. Type in the command below to start the calculator:

<blockquote id="grad_command">
python main.py
</blockquote>

<button class="copy-btn" onClick="copyText('grad_command');">Copy Text</button>

5. Use the calculator as you would previously.

### Student use routing

Buy **all** available theories unless explicitly stated otherwise because theories are important to start as soon as possible as they function outside of the main game.

Use the [student calculator](https://conicgames.github.io/exponentialidle/students.html) (by Niedzielan, AfuroZamurai, and Milla) for optimal distribution for $\varphi$.

### Respecing students

The button at the bottom labeled “Respec” removes all used $\sigma$ in Research and gives it back to you without any consequences. This allows for testing or reallocating easily, but it will remove **ALL** of your students from everything including theories. On the bottom left is located a list-shaped button. Pressing this will reveal the <kbd>-</kbd> buttons. These <kbd>-</kbd> buttons remove x levels from the selected research option. The amount of levels removed is based on the x1, x10, x25, x100, xMax cost option selected in the top right. On the right side of each research option, you can also see the total levels.

### Theory basics

Publications are equivalent to prestiges for $f(t)$ so don't be afraid to use them. However, the best publication multipliers vary from theory to theory and will decrease over time. If you are close to a multiplier you want, turn off autobuyer and let $\rho$ increase without buying upgrades for a faster short-term increase before the publication (turn on after you publish). This is known and referenced as "cruising". Total $\tau$, found in the equation or at the top of the screen, is a multiplicative combination of all $\tau$ from each theory.

**Don’t be afraid to skip getting all milestones to work on the next or a better theory.**

### Respecing milestones

Unlike students, all Milestone sections already have the <kbd>-</kbd> button. This works in the same way as above. Here you can also find how many unused Milestones are available at the top. On the right side of each Milestone, you can also find the current and max levels of each.
