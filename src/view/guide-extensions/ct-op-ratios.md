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

In this entire article, I will use $\log$ for the base 10 logarithm and $\ln$ for the base $e$ logarithm.

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

Now, for any non-divergent theory, $z + x \le 1$. If a theory can be approximated as balanced, i.e. decay is negligible, then we have $z + x \approx 1$, then $\frac{z}{1-x} \approx 1$. In this case, the optimal publication multiplier can be approximated as:

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

$$\log{\rho}=x\log{\rho}+(y+1)\log{t}+b\log{\Pi}$$

## Calculating the OP ratio for Official Custom Theories

Now that we set the baseline on how to calculate the OP ratio for a given theory, let's put it in practice to calculate the OP ratio of official custom theories.

Throughout this section, I will use the symbol $K$ to represent any constant holding parameters that are not relevant to our study, namely parameters that don't depend on $\Pi$ nor $t$. I will reuse the same symbol to avoid having to create many of them.

### WSP

$$\begin{alignat*}{2}
  \dot{q}& &=& K \\
  \Rightarrow q& &=& Kt \\
  \dot{\rho} =& &K& \Pi q =K\Pi t \\
  \Rightarrow \rho =& &K& \Pi t^2 \\
  OP& &=& 2
\end{alignat*}$$

### SL

$$\begin{alignat*}{1}
  \dot{\rho _3} &= K\\
  \Rightarrow \rho _3 &= Kt
\end{alignat*}$$

$$\begin{alignat*}{1}
  \dot{\rho}_2 &= K \times {1.96}^{-\ln\rho _3} \\
  \dot{\rho}_2 &= K {\rho _3}^{-\ln1.96} \\
  \dot{\rho}_2 &= K t^{-\ln1.96} \\
  \Rightarrow \rho_2 &= Kt^{1-\ln1.96} \\
  \frac{1}{e - \gamma} &= K\rho _3 = Kt
\end{alignat*}$$

Now:

$$\begin{alignat*}{1}
  \dot{\rho _1} &= \Pi\rho _2^{0.53} \times \frac{1}{e - \gamma} \\
  \dot{\rho _1} &= K\Pi t^{0.53 \times (1-\ln1.96) + 1} \\
  \rho _1 &= K\Pi t^{2 + 0.53 \times (1-\ln1.96)}
\end{alignat*}$$

$$\begin{alignat*}{1}
  OP &= 2 + 0.53 \times (1-\ln1.96) \\
  OP &\approx 2.173
\end{alignat*}$$

### EF

Calculating EF's OP factor is comparatively harder due to it having multiple currencies. In general, to study theories with multiple currencies, we use linear algebra in logarithmic space.

$$\begin{alignat*}{1}
  \dot{q} &= \Pi q_1 q_2\\
  \Rightarrow q &= K\Pi q_1 q_2 t
\end{alignat*}$$

Late-game, in EF's $\dot{\rho}$ equation's square root, only the $tq^2$ term is significant:

$$\begin{alignat*}{1}
  \dot{\rho} &= \Pi (a_1 a_2 a_3)^{1.5} t^{0.5}q\\
  \Rightarrow \dot{\rho} &= \Pi^2 (a_1 a_2 a_3)^{1.5} q_1 q_2 t^{1.5}\\
  \Rightarrow \rho &= \Pi^2 (a_1 a_2 a_3)^{1.5} q_1 q_2 t^{2.5}\\
  \dot{R} &= K \Pi (b_1 b_2)^2\\
  \Rightarrow R &= K \Pi (b_1 b_2)^2 t\\
  \dot{I} &= K \Pi (c_1 c_2)^2\\
  \Rightarrow I &= K \Pi (c_1 c_2)^2 t
\end{alignat*}$$

Now, let's express the system in logarithmic form, to turn it into a linear system:

$$\begin{alignat*}{1}
  \log{\rho} &= K + 1.5(\log{a_1} + \log{a_2} + \log{a_3}) + \log{q_1} + \log{q_2} + 2\log{\Pi} + 2.5\log{t}\\
  \log{R} &= K + 2(\log{b_1} + \log{b_2}) + \log{\Pi} + \log{t}\\
  \log{I} &= K + 2(\log{c_1} + \log{c_2}) + \log{\Pi} + \log{t}\\
\end{alignat*}$$

We have:
$$\begin{alignat*}{1}
  \log{a_1}, \log{q_1}, \log{q_2} &\propto \log{\rho}\\
  \log{a_2}, \log{b_1}, \log{b_2} &\propto \log{R}\\
  \log{a_3}, \log{c_1}, \log{c_2} &\propto \log{I}\\
\end{alignat*}$$

Therefore, there exists a 3x3 matrix $A$ such that:
$$AP = M\log{\Pi} + T\log{t}$$

With:
$$P = \begin{bmatrix} \log{\rho} \\ \log{R} \\ \log{I} \end{bmatrix},
M = \begin{bmatrix} 2 \\ 1 \\ 1 \end{bmatrix},
T = \begin{bmatrix} 2.5 \\ 1 \\ 1 \end{bmatrix}$$

Therefore:
$$P = A^{-1}M\log{\Pi} + A^{-1}T\log{t}$$

To find EF's OP factor, we need an expression of the form $\log{\rho} = \alpha\log{\Pi} + \beta\log{t}$. Therefore, we need to calculate the first coefficient of $A^{-1}M$ and $A^{-1}T$. To do that, we need to express, then inverse $A$. Note that, since we only care about the first coefficient, we only need to calculate the top row of $A^{-1}$.

To compute $A^{-1}$, we can use the [adjugate of A](https://en.wikipedia.org/wiki/Adjugate_matrix): $A^{-1} = \frac{1}{\det{A}}\text{adj}{A}$. The equation becomes:
$$P = \frac{1}{\det{A}}\text{adj}{A}\cdot M\log{\Pi} + \frac{1}{\det{A}}\text{adj}{A}\cdot T\log{t} \qquad (1)$$

Since we only care about the first row of the adjugate, we only the first column of the cofactor matrix, therefore we don't need the first column of $A$.

From the previous system, we have:

$$A = \begin{bmatrix}
* & -1.5\frac{\log{a_2}}{\log{R}} & -1.5\frac{\log{a_3}}{\log{I}} \\
* & 1 - 2\frac{\log{b_1} + \log{b_2}}{\log{R}} & 0 \\
* & 0 & 1 - 2\frac{\log{c_1} + \log{c_2}}{\log{I}}
\end{bmatrix}$$

Let's now compute how the variables we need scale with their currencies. To do so, we use this model:

- An exponential variable $u$ of power $p$ and cost scaling $c$, bought with currency $C$ is approximated as $\log{u} = \frac{\log{p}}{\log{c}} \cdot \log{C}$
- A stepwise variable $v$ of power $p$, cycle length $n$ and cost scaling $c$, bought with currency $C$ is approximated as $\log{v} = \frac{\log{p}}{n\log{c}} \cdot \log{C}$

Therefore we can calculate the following:

- $a_2$ is a stepwise variable of power 40, cycle length 10 and cost scaling $2^{2.2}$: $\log{a_2} = \frac{\log{40}}{22\log{2}} \cdot \log{R}$
- $a_3$ is an exponential variable of power 2 and cost scaling $2^{2.2}$: $\log{a_3} = \frac{1}{2.2} \cdot \log{I}$
- $b_1$ is a stepwise variable of power 2, cycle length 10 and cost scaling 200: $\log{b_1} = \frac{\log{2}}{10\log{200}} \cdot \log{R}$
- $b_2$ is an exponential variable of power 1.12 and cost scaling 2: $\log{b_2} = \frac{\log{1.12}}{\log{2}} \cdot \log{R}$
- $c_1$ is a stepwise variable of power 2, cycle length 10 and cost scaling 200: $\log{b_1} = \frac{\log{2}}{10\log{200}} \cdot \log{I}$
- $c_2$ is an exponential variable of power 1.125 and cost scaling 2: $\log{c_2} = \frac{\log{1.125}}{\log{2}} \cdot \log{I}$

Now we can substitute in $A$:
$$A = \begin{bmatrix}
* & -\frac{1.5\log{40}}{22\log{2}} & -\frac{1.5}{2.2} \\
* & 1 - 2\left(\frac{\log{2}}{10\log{200}} + \frac{\log{1.12}}{\log{2}}\right) & 0 \\
* & 0 & 1 - 2\left(\frac{\log{2}}{10\log{200}} + \frac{\log{1.125}}{\log{2}}\right)
\end{bmatrix}$$

These expressions will be heavy to manipulate so let's set it to:
$$A = \begin{bmatrix}
* & -d_{12} & -d_{13} \\
* & d_{22} & 0 \\
* & 0 & d_{33}
\end{bmatrix}$$

The cofactor matrix is then given by:
$$\begin{bmatrix}
d_{22}d_{33} & * & * \\
d_{12}d_{33} & * & * \\
d_{13}d_{22} & * & *
\end{bmatrix}$$

Finally, the adjugate matrix is given by:
$$\text{adj}{A} = \begin{bmatrix}
d_{22}d_{33} & d_{12}d_{33} & d_{13}d_{22} \\
* & * & * \\
* & * & *
\end{bmatrix}$$

Now:
$$\text{adj}{A}\cdot M = \begin{bmatrix} 2d_{22}d_{33} + d_{12}d_{33} + d_{13}d_{22} \\ * \\ * \end{bmatrix}$$
$$\text{adj}{A}\cdot T = \begin{bmatrix} 2.5d_{22}d_{33} + d_{12}d_{33} + d_{13}d_{22} \\ * \\ * \end{bmatrix}$$

Let's substitute these results in the first row of the matrix equatio (1):
$$\log{\rho} = \frac{1}{\det{A}}\left[(2d_{22}d_{33} + d_{12}d_{33} + d_{13}d_{22})\log{\Pi} 
        + (2.5d_{22}d_{33} + d_{12}d_{33} + d_{13}d_{22})\log{t} \right]$$

We can finally express EF's OP factor:
$$\begin{alignat*}{1}
OP &= \frac{2.5d_{22}d_{33} + d_{12}d_{33} + d_{13}d_{22}}{2d_{22}d_{33} + d_{12}d_{33} + d_{13}d_{22}} \\
OP &= 1 + \frac{0.5d_{22}d_{33}}{2d_{22}d_{33} + d_{12}d_{33} + d_{13}d_{22}} \\
OP &= 1 + \frac{1}{2\left(2 + \frac{d_{12}}{d_{22}} + \frac{d_{13}}{d_{23}}\right)} \\
OP &= 1 + \frac{1}{4 + 2\frac{d_{12}}{d_{22}} + 2\frac{d_{13}}{d_{23}}} \\
\end{alignat*}$$

For those who want to see what it looks like if we replace those $d_i$:

$$OP = 1 + \frac{1}{4 + 
  \frac{3\log{40}}{22\log{2}}\frac{1}{1 - 2\left(\frac{\log{2}}{10\log{200}} + \frac{\log{1.12}}{\log{2}}\right)}
  + \frac{3}{2.2}\frac{1}{1 - 2\left(\frac{\log{2}}{10\log{200}} + \frac{\log{1.125}}{\log{2}}\right)}}$$

Finally,
$$OP \approx 1.137$$

### CSR2

$$\begin{alignat*}{2}
  \dot{q}& &=& K\Pi \\
  \Rightarrow q& &=& K\Pi t \\
  \dot{\rho} =& &K& \Pi q =K\Pi^2 t \\
  \Rightarrow \rho =& &K& \Pi^2 t^2 \\
  OP& &=& 1
\end{alignat*}$$

### FI

$$\begin{alignat*}{1}
  \dot{q} &= K\\
  \Rightarrow q &= Kt\\
  \dot{r} &= K\\
  \Rightarrow r &= Kt
\end{alignat*}$$

$$\int _{0}^{q}{g(x)dx} = Kq^6 = Kt^6$$
$$\sqrt[\pi]{\int_{0}^{ q }g(x)dx} = Kt^{\frac{6}{\pi}}$$

$$\begin{alignat*}{1}
  \dot{\rho} &= K\Pi rt\sqrt[\pi]{\int_{0}^{ q }g(x)dx}\\
  \dot{\rho} &= K\Pi t^{2+\frac{6}{\pi}}\\
  \Rightarrow \rho &= K\Pi t^{3+\frac{6}{\pi}}
\end{alignat*}$$

$$\begin{alignat*}{1}
  OP &= 3 + \frac{6}{\pi} \\
  OP &\approx 4.91
\end{alignat*}$$

### FP

$$\begin{alignat*}{1}
  \dot{q} &= K\\
  \Rightarrow q &= Kt\\
  \dot{r} &= K\\
  \Rightarrow r &= Kt
\end{alignat*}$$

$$\begin{alignat*}{1}
  \dot{\rho} &= K\Pi qrt\\
  \dot{\rho} &= K\Pi t^3\\
  \Rightarrow \rho &= K\Pi t^4
\end{alignat*}$$

$$OP = 4$$

### RZ

TBA

### MF

To determine the OP factor of MF, we first need to determine if, long-term, $I$ is capped or not.

$$\begin{alignat*}{1}
  \dot{I} &= \frac{a_1^{1.01}}{400}\left(10^{-15}-\frac{I}{a_2}\right) \\
  \dot{I} &= \frac{a_1^{1.01}}{400 a_2}(10^{-15}a_2-I) \\
  \dot{I} &= K\frac{a_1^{1.01}}{a_2}(I_\text{cap}-I)
\end{alignat*}$$

To determine if $I$ is capped or not, we need to study the behavior of $\frac{a_1^{1.01}}{a_2}$ at large rho.
- If it goes to $+\infty$, then $I$ will almost instantly cap at large rho.
- If it converges to $0$, then $I \ll I_\text{cap}$ at large rho.

Let's now calculate how $a_1$ and $a_2$ scale with rho.

$a_1$ is a stepwise variable with a power of 2, a cycle length of 5 and a cost scaling of 25. Its power is given by:

$$\log{a_1} = \frac{\log{2}}{2\log{25}} \times \log{\rho}$$

$a_2$ is an exponential variable with a power of 1.25 and a cost scaling of 100. Its power is given by:

$$\begin{alignat*}{1}
  \log{a_2} &= \frac{\log{1.25}}{\log{100}} \times \log{\rho} \\
  &= \frac{\log{1.25}}{2} \times \log{\rho}
\end{alignat*}$$

Now:

$$\begin{alignat*}{1}
  \log{\left(\frac{a_1^{1.01}}{a_2}\right)} &= 1.01\log{a_1} - \log{a_2} \\
  &= \log{\rho} \times \left(\frac{1.01\log{2}}{2\log{25}} - \frac{\log{1.25}}{2}\right)
\end{alignat*}$$

If we compute this, we find that $\log{\left(\frac{a_1^{1.01}}{a_2}\right)} \approx -0.005 \times \log{\rho}$.

Therefore, as $\rho \to +\infty$, $\log{\left(\frac{a_1^{1.01}}{a_2}\right)} \to -\infty$ so $\frac{a_1^{1.01}}{a_2} \to 0$.

We can then conclude that $I \ll I_\text{cap}$ at large rho, which means we can simplify $\dot{I}$:

$$\dot{I} = K\frac{a_1^{1.01}}{a_2}I_\text{cap} = K$$

Therefore $I = Kt$.

With that out of the way, let's calculate MF's OP factor.

$$\begin{alignat*}{1}
  \dot{x} &= K\\
  \Rightarrow x &= Kt\\
\end{alignat*}$$

$$\omega = KI = Kt$$

$$\begin{alignat*}{1}
  \dot{\rho} &= K\Pi \omega^{4.4}x^{3.4}\\
  \dot{\rho} &= K\Pi t^{7.8}\\
  \Rightarrow \rho &= K\Pi t^{8.8}
\end{alignat*}$$

$$OP = 8.8$$

### BaP

To compute BaP's overpush factor, we first need to determine the limit of $a$ as $\rho \to \infty$.

After the last milestone, we have:
$$a=2\cdot\frac{6}{\pi^2}-\left(\sum_{i=1}^n\frac{1}{i^2}\right)^{-1}$$

As $n \to \infty$, $\left(\sum_{i=1}^n\frac{1}{i^2}\right) \to \frac{\pi^2}{6}$, then $\left(\sum_{i=1}^n\frac{1}{i^2}\right)^{-1} \to \frac{6}{\pi^2}$.

Therefore, as $\rho \to \infty$, $a \to \frac{6}{\pi^2}$.

Now let's calculate BaP's OP factor.

$$\begin{alignat*}{1}
  \dot{q_9} &= K\\
  \Rightarrow q_9 &= Kt\\
  \dot{q_8} &= Kq_9 = Kt\\
  \Rightarrow q_8 &= Kt^2\\
  &\dots\\
  q_1 &= Kt^9\\
  \dot{r} &= K\\
  \Rightarrow r &= Kt
\end{alignat*}$$

$$\begin{alignat*}{1}
  \dot{\rho} &= \Pi t(q_1 r)^a \\
  &= K\Pi t\cdot (t^{10})^{\frac{6}{\pi^2}}\\
  &= K\Pi t^{1+\frac{60}{\pi^2}}\\
  \Rightarrow \rho &= K\Pi t^{2+\frac{60}{\pi^2}}
\end{alignat*}$$

$$\begin{alignat*}{1}
  OP &= 2+\frac{60}{\pi^2}\\
  OP &\approx 8.079
\end{alignat*}$$