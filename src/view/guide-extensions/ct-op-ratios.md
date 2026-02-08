---
title: "Overpush Ratios for Official Custom Theories"
description: "Research about overpush ratios of official custom theories."
author: "Mathis S."
contributors: "the Amazing Community"
order: 6
tags: T9+ Research
---

## Introduction

Before reading this page, I would strongly recommend to read the [Distribution Overpushing](/guide-extensions/distribution-overpushing) guide first, as well as pacowoc's article [On the Middle-Term Mod­el­ing of En­dgame The­or­ies and the Op­timal Pub­lic­a­tion Mul­ti­plier](/guide-extensions/optimal-pub).

The overpush ratios are a core part of the endgame strategy for pushing main theories. However, overpushing is not relevant for Custom Theories as they aren't affected by R9.

It is still possible to calculate the overpushing coefficients for official custom theories. In addition of interesting the curious, calculating them can help understanding how the publication multiplier affects official CTs and explaining the publication multiplier to publish at. This is what I'm gonna do in this article.

In this article, I will refer to the publication multiplier as $\Pi$, a notation used by Gaunter in the Laplace Transforms CT.

## Generalities about the OP coefficient and how to calculate it

As you have read in the [Distribution Overpushing](/guide-extensions/distribution-overpushing) guide, the overpushing coefficient measures the effect of the publication multiplier on $\dot{\tau}$, vs the effect of time on $\dot{\tau}$ for each theory. More concretely, the OP coefficient is the base 10 logarithm of the number you should multiply the publication multiplier by to multiply the theory's $\tau$/hour rates by 10. A simpler way to put it : if you multiply the publication multiplier by $a$, the $\tau$/hour rate will be multiplied by $a^{\frac{1}{OP}}$.

The OP coefficient also has a close relationship with the optimal publication multiplier of the theory, as seen in [this section](/guide-extensions/optimal-pub/#how-to-deduce-the-optimal-publication-multiplier-in-the-endgame-of-a-theory-from-the-model) of pacowoc's article.

In this representation, a theory can be modeled as :

$$\frac{d\rho}{dt}=K\rho^{x}t^{y}\rho^{z}_{pub}$$

While this model is great, it has one flaw to analyze official CTs, as it assumes $\Pi = \rho^{z}_{pub}$, or in other words that $\frac{d\rho}{dt} \propto \Pi$, which is not the case for every CT. Let's decompose $z = ab$, where $a$ is such that $\Pi \propto \rho^{a}$. In this case, we have $\frac{d\rho}{dt} \propto \Pi^b$ or $\Pi^{b} = \rho^{z}_{pub}$, a more general model.

In pacowoc's article, the optimal publication multiplier was found to be:

$$e^{\frac{z(y+1)}{1-x}}$$

But this is the optimal multiplier for $\rho^{z}_{pub} = \Pi^{b}$, so the optimal publication multiplier, the optimal multiplier for $\Pi$, would instead be:

$$e^{\frac{z(y+1)}{b(1-x)}}$$

Now, for any non-divergent theory, $z + x \le 1$. If a theory can be approximated as balanced, i.e. decay is negligible, then we have $z + x \simeq 1$, then $\frac{z}{1-x} \simeq 1$. In this case, the optimal publication multiplier can be approximated as:

$$e^{\frac{y+1}{b}}$$

It turns out that $\frac{y+1}{b}$, the ratio between the time contribution to the publication multiplier contribution, is exactly the OP factor of the theory. Therefore, we can approximate the optimal publication multiplier as $e^{OP}$.

Note that in practice, due to $z + x \lt 1$ along with other factors, the optimal multiplier fluctuates and is generally lower than that.

### Proof that $\frac{y+1}{b}$ is the overpush ratio

Let's prove that $\frac{y+1}{b}$ is indeed the overpush ratio. We'll prove that multiplying the pub mult $\Pi$ by some factor $m$ increases the theory speed by $m^{\frac{1}{OP}}$, which is the same as proving that the time to gain the same amount of $\rho$ is divided by $m^{\frac{1}{OP}}$ when $\Pi$ is multiplied by $m$.

To prove this, we'll start from equation (3-3) of pacowoc's guide:

$$\rho = (K'(1-x)\rho^{z}_{pub}t^{y+1})^{\frac{1}{1-x}}$$

We substitute $\rho^{z}_{pub}$ by $\Pi^{b}$:

$$\rho = (K'(1-x)\Pi^{b}t^{y+1})^{\frac{1}{1-x}}$$

Now we solve for $t$:

$$t = \left(\frac{\rho^{1-x}}{K'(1-x)}\Pi^{-b}\right)^{\frac{1}{y+1}}
= \left(\frac{\rho^{1-x}}{K'(1-x)}\right)^{\frac{1}{y+1}}\Pi^{-\frac{b}{y+1}}$$

Now let's calculate $t'$ where we replace $\Pi$ by $m\Pi$:

$$\begin{gather*}
  \begin{aligned}
    t'&=\left(\frac{\rho^{1-x}}{K'(1-x)}\right)^{\frac{1}{y+1}}m^{-\frac{b}{y+1}}\Pi^{-\frac{b}{y+1}} \\
    \frac{t'}{t}&=\frac{1}{m^{\frac{b}{y+1}}}
  \end{aligned}
\end{gather*}$$

We can see that, when multiplying the pub mult by $m$, the time to reach the same $\rho$ is divided by $m^{\frac{b}{y+1}}$.

Therefore, $\frac{y+1}{b}$ is indeed the overpush ratio of the theory.

### How to calculate the overpush ratio in practice

From pacowoc's model:

$$\frac{d\rho}{dt}=K\rho^{x}t^{y}\Pi^{b}$$

We can immediately find the overpush ratio: $\frac{y+1}{b}$.

We can also treat $\rho^{x}$ as a constant, as it is dependant on upgrades and doesn't correspond to $\rho$ directly. Therefore, if we integrate:

$$\rho=K\rho^{x}t^{y+1}\Pi^{b}$$

Now the OP ratio is directly visible.

For some theories, we'll have to go to the logarithmic space. If we apply log10 to the previous equation:

$$\log(\rho)=x\log(\rho)+(y+1)\log(t)+b\log(\Pi)$$

## Calculating the OP ratio for Official Custom Theories

Now that we set the baseline on how to calculate the OP ratio for a given theory, let's put it in practice to calculate the OP ratio of official custom theories.

Throughout this section, I will use the symbol $K$ to represent any constant holding parameters that are not relevant to our study, namely parameters that don't depend on $\Pi$ nor $t$. I will reuse the same symbol to avoid having to create many of them.

### WSP

$$\dot{q}=K \Rightarrow q=Kt$$
$$\dot{\rho}=K\Pi q =K\Pi t$$
$$\Rightarrow \rho = K\Pi t^2$$
$$OP = 2$$

### SL

$$\dot{\rho _3} = K \Rightarrow \rho _3 = Kt$$
$$\dot{\rho _2} = K \times {1.96}^{-\ln(\rho _3)} = K {\rho _3}^{-\ln(1.96)} = Kt^{-\ln(1.96)}$$
$$\Rightarrow \rho _2 = Kt^{1-\ln(1.96)}$$
$$\frac{1}{e - \gamma} = K\rho _3 = Kt$$

Now:

$$\dot{\rho _1} = \Pi\rho _2^{0.53} \times \frac{1}{e - \gamma}$$
$$\dot{\rho _1} = K\Pi t^{0.53 \times (1-\ln(1.96)) + 1}$$
$$\rho _1 = K\Pi t^{2 + 0.53 \times (1-\ln(1.96))}$$
$$OP = 2 + 0.53 \times (1-\ln(1.96))$$
$$OP \simeq 2.173$$
