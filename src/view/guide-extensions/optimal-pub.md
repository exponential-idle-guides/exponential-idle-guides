---
title: "On the Middle-Term Modeling of Endgame Theories and the Optimal Publication Multiplier"
description: "Constructing a general mathematical model to determine when should we publish in the endgame of each theory in the game."
author: "pacowoc"
contributors: "the Amazing Community"
order: 5
tags: T9+ Research
---
## Introduction

The game features 8 theories each with its distinct characteristics and means of behavior. Although they seem wildly different from each other visually and numerically short-term, the general long-term concept of purchasing variables of exponentially-higher prices to aid the main currency's near-exponential progress remains constant despite the difference of how they actually affect the growth of the theories they belong to.
Therefore, we can use a single model deduced from the Cost and the Effect of all the variables used in a theory to explain the long-term and middle-term behavior of a theory, and make meaningful conclusions from the observed properties of the model about the original theories.

## Required Background Knowledge

1. High school level mathematics
2. [Asymptotic Notations](https://en.wikipedia.org/wiki/Big_O_notation)
3. [The Concept of ODEs](https://en.wikipedia.org/wiki/Ordinary_differential_equation)

## How Variable Upgrades Work in the Long Term?

Almost every upgrade in the game follows a Cost-Level relation of:
$$Cost = ab^{Level}\qquad (1-1)$$
In which \\(a>0\\) and \\(b>1\\) are pre-determined constants.
On the other hand, upgrades have two ways to determine the value of the variable:

### Direct Multiplication:

This type of upgrade has an identical equation to the equation mentioned above, just with different constants in the places of \\(a\\) and \\(b\\). It can be represented as the expression below:
$$Value = cd^{Level}\qquad (1-2)$$
In which \\(c>0\\) and \\(d>1\\) are pre-determined constants.

#### **Lemma 1.1**

If we always buy the \\((L\in\mathbb{N})\\)-th and latest upgrade of a "Direct Multiplication" variable \\(u\\), which indicates \\(\rho = Cost(u,L)\\). Then, the value of \\(u\\) and the peak value of its currency \\(\rho\\) at the purchase follows a relation described by \\(u = K\rho^{r}\\), in which \\(K\in\mathbb{R}^+\\) and \\(r\in\mathbb{R}^+\\), in which \\(r\\) only depends on the exponent part of the Cost and Value equations.

#### **Proof**

From (1-1) we have:
$$\rho = ab^{L}$$
Since \\(a \neq 0\\),
$$\frac{\rho}{a} = b^{L}$$
Since \\(b > 0\\), logarithm with a base of \\(b\\) is defined,
$$log_b(\frac{\rho}{a}) = L$$
Thus,
$$log_b(\rho) - log_b(a) = L\qquad (1-3)$$
From (1-2) and (1-3) we have:
$$u = cd^{log_b(\rho) - log_b(a)}$$
$$= \frac{c}{d^{log_b(a)}}d^{log_b(\rho)}$$
$$= \frac{c}{d^{\frac{log_d(a)}{log_d(b)}}}d^{\frac{log_d(\rho)}{log_d(b)}}$$
$$= \frac{c}{(d^{log_d(a)})^{\frac{1}{log_d(b)}}}(d^{log_d(\rho)})^{\frac{1}{log_d(b)}}$$
$$= \frac{c}{a^{log_b(d)}}\rho^{log_b(d)}$$
We can see that \\(r = log_b(d)\\) only depends on b and d.

Since \\(b>1\\) and \\(d>1\\), \\(log_b(d)>0\\).

Since \\(a>0\\) and \\(c>0\\), \\(\frac{c}{a^{log_b(d)}}>0\\).

Therefore, there exists a pair of \\(K\\) and \\(r\\) that fits the conditions.

#### **Lemma 1.2**

For a "Direct Multiplication" \\(u\\), there exists \\(r \in \mathbb{R}^+\\) so that the value of \\(u\\) and the peak value of its currency \\(\rho\\) meet the expression below:
$$u(\rho) \in {\Theta(\rho^r)}$$

#### **Proof**

Without loss of generality, let's suppose that we have purchased the \\((L>0)\\)-th upgrade of \\(u\\) and we are yet to purchase the\\((L+1)\\)-th upgrade. Thus, we have:
$$ab^{L} \le \rho < ab^{L+1}$$
We can see the upper bound as an expression of a virtual variable \\(u'\\), in which:
$$a' = ab\quad c'= c$$
$$b' = b \quad d'= d$$
According to Lemma 1.1, \\(u\\) and \\(u'\\) share the same exponent \\(r\\), let's name the \\(K\\) for the two variables \\(K\\) and \\(K'\\) respectively.
Since \\(b>1\\), \\(K'< K\\), from Lemma 1.1 we have:
$$K'\rho^r \le u \le K\rho^r$$
Which is the definition  of:
$$u(\rho) \in \Theta(\rho^r)$$

### Step-wise:
This type of variable follows a rather unorthodox path of progression, an explanation of its mechanic is explained [here](/guide-extensions/stepwise-variables). Let's suppose there exist a Stepwise variable \\(v\\) that has the following properties:

1. A cycle of \\(v\\) spans \\(m>0\\) levels.
2. On the first cycle of \\(v\\), it increases by \\(p>0\\) per level.
3. On each cycle, the amount of increase per level gets multiplied by \\(q>1\\).

#### **Lemma 1.3**

For each "Stepwise" variable \\(v\\), there exist \\((c_1, c_2) \in \mathbb{R}^+\\) and \\(d \in \mathbb{R}^+\\) so that for any level \\((L \in \mathbb{N} \ge m)\\), the inequality below holds:
$$c_1d^L \le v_L \le c_2d^L$$

#### **Proof**

Without loss of generality, let's consider the \\((k+1 \ge 2)\\)-th cycle of \\(v\\), therefore, the value of \\(v\\) after the \\((0 < l \in \mathbb{N}\ \le m\\))-th upgrade in the cycle is \\(v_{mk+l}\\): From the definition of a Stepwise variable we have:

$$v_{mk+l} = \frac{1}{q-1}p((m+l(q-1))q^k-m)\qquad (1-4)$$

Since \\(m\\)>0,from (1-4) we have:

$$\begin{eqnarray}
\frac{1}{q-1}p((m+l(q-1))q^k-m)\qquad (1-5) \\
< \frac{1}{q-1}p((m+l(q-1))q^k)=\frac{1}{q-1}mpq^k(1+\frac{l}{m}(q-1))
\end{eqnarray}$$

Since \\(0 \le \frac{l}{m} \le 1\\) and \\(q>1\\),

$$\begin{eqnarray}
\frac{1}{q-1}mpq^k(1+\frac{l}{m}(q-1)) \\
< \frac{1}{q-1}mpq^k(1+(q-1)) = \frac{1}{q-1}mpq^{(k+1)} \\
< \frac{1}{q-1}mpqq^{\frac{mk+l}{m}} = \frac{1}{q-1}mpq(q^\frac{1}{m})^{mk+l}
\end{eqnarray}$$

Therefore,

$$v_{mk+l} < mp\frac{q}{q-1}(q^\frac{1}{m})^{mk+l}\qquad\\(1-6)$$

Since \\(k>1\\), \\(q^{k-1}>1\\), from (1-4) we have:

$$\begin{eqnarray}
\frac{1}{q-1}p((m+l(q-1))q^k-m) \\
> \frac{1}{q-1}p((m+l(q-1))q^k-q^{k-1}m)
\end{eqnarray}$$

$$= \frac{1}{q-1}p(mq^k-mq^{k-1}+l(q-1)q^k) = \frac{1}{q-1}p(m(q-1)q^{k-1}+l(q-1)q^k)$$

$$= mpq^{k-1}(1+\frac{l}{m}q)\qquad (1-7)$$

Since \\(0 \le \frac{l}{m} \le 1\) and \(q>-1\\), we can ap­ply Bernoul­li’s in­equal­ity to get:

$$1+\frac{l}{m}q \ge (1+q)^{\frac{l}{m}}$$

$$mpq^{k-1}(1+\frac{l}{m}q) \ge mpq^{k-1}(1+q)^{\frac{l}{m}}>mpq^{k-1}q^{\frac{l}{m}}$$

$$= \frac{mp}{q}(q^{\frac{1}{m}})^{mk+l}$$

Therefore,

$$v_{mk+l} > \frac{mp}{q}(q^{\frac{1}{m}})^{mk+l}\qquad (1-8)$$

From (1-6) and (1-8) we have: $$\frac{mp}{q}(q^{\frac{1}{m}})^{mk+l} < v_{mk+l} < mp\frac{q}{q-1}(q^\frac{1}{m})^{mk+l}$$ Since \\(mk+l = L\\) in this case, $$\frac{mp}{q}(q^{\frac{1}{m}})^L < v_L < mp\frac{q}{q-1}(q^\frac{1}{m})^L$$ Apparently, \\((\frac{mp}{q},\frac{mpq}{q-1}) \in \mathbb{R}^+\\) and \\(q^\frac{1}{m} \in \mathbb{R}^+\\)

Therefore, there exist \\((c_1,c_2)\\) and \\(d\\) that fit the conditions.

#### **Lemma 1.4**

For a "Step-wise" variable \\(v\\), there exists \\(r \in \mathbb{R}^+\\) so that the value of \\(v\\) and the peak value of its currency \\(\rho\\) meet the expression below:
$$v(\rho) \in {\Theta(\rho^r)}$$

#### **Proof**

From Lemma 1.3 we have:
$$c_1d^L \le v_L \le c_2d^L$$
We can see the upper and lower bound as two virtual variables, let's call them \\(v_1\\) and \\(v_2\\).
$$v_1 \le v \le v_2\qquad (1-9)$$
Since \\(v_1\\) and \\(v_2\\) are both "Direct Multiplication" variables, we can apply Lemma 1.2 on \\(v_1\\) and \\(v_2\\) and get:
$$v_1 \in \Theta(\rho^r)$$
$$v_2 \in \Theta(\rho^r)\qquad \
(1-10)$$
In which \\(r \in \mathbb{R}^+\\).
From (1-9), (1-10) and the definition mentioned in , we have:
$$v(\rho) \in \Theta(\rho^r)$$

From Lemma 1.2 and Lemma 1.4 we can obtain an important conclusion:

### **Lemma 1.5**

For any purchasable variable \\(v\\), there exists \\(r \in \mathbb{R}^+\\) so that the value of \\(v\\) and the peak value of its currency \\(\rho\\) meet the expression below:

$$v(\rho) \in {\Theta(\rho^r)}$$

## How Variables Propagate towards the Main Variable

Theories all have one or more currencies, they are used to purchase variables or interact with other currencies. One shared feature of the theories is that the currencies they contain are either derived from a set of other variables and currencies via arithmetic operations, or that there is some key features in a theory that makes a few un-purchasable variables practically constant in the long term. (For example, the x,y and z in T8 due to Solarswap). Therefore, we can get the relation of a certain currency to the main currency in the long term by factoring in the currencies and variables that contribute in the growth of that specific currency. We can generalize the growth of all but a few derived variables or currencies into.

$$\frac{da_n}{dt} = f(a_1,a_2...,\rho)$$

In which \\(\rho_i\\) are any variable, if the right side of the equation involves the variable itself, the variable is called "self-influenced".

### Normal Cases

#### **Lemma 2.1**

For any Derived Variable \\(a\\) with uniform \\(t\\) exponents and is neither cyclic defined nor self-influenced, there exists \\((x,y) \in \mathbb{R}^+\\) so that:
$$a(\rho,t) \in \Theta(\rho^xt^y)$$

#### **Proof**

Since all the \\(t\\) exponents of the contributing variables are identical as a prerequisite of this Lemma, we only need to discuss the exponents of the main currency to analyze the derived variable asymptotically. Because \\(\frac{∂a}{∂t}\\) is the result of a series of Addition and Multiplication of the variables, we can use the arithmetic laws of polynomial asymptotic notations.

1. Multiplication:  \\(\Theta(\rho^{r_1}) \cdot \Theta(\rho^{r_2}) → \Theta(\rho^{(r_1+r_2)})\\)
2. Addition:  \\(\Theta(\rho^{r_1}) + \Theta(\rho^{r_2}) → \Theta(\rho^{max(r_1,r_2)})\\)

From Lemma 1.5 and the closure under addition of \\(\mathbb{R}^+\\), there will always exist a dominant exponent \\(x \in \mathbb{R}^+\\) so that:
$$\frac{∂ a(\rho,t)}{∂ t} \in \Theta({\rho^x}t^y)$$
Integrate both sides with respect to t,
$$a = \Theta(\rho^xt^y)t+C$$
Therefore,
$$a \in \Theta(\rho^xt^{y+1})$$
Since \\(y \in \mathbb{R}^+\\), \\((y+1) \in \mathbb{R}^+\\).

### Cases with Self-Interference

We can determine the asymptotic notation of a variable of this kind by solving a first order ODE, below is an example with the \\(q\\) variable in T4:
$$\frac{dq}{dt} = \frac{8q_1q_2}{q+1}$$
This is a classic example of a self-influenced variable, fortunately, the ODE is separable:
$$(q+1)dq = 8q_1q_2dt$$
Integrate both sides,
$$\frac{q^2}{2}+q = 8q_1q_2t + C$$
As \\(\rho\\) approaches infinity, we can see that \\(q\\) approaches \\(\sqrt{16q_1q_2t}\\).
We can then do the asymptotic analysis on the entire system normally from here.

### More Complicated Cases

In more complicated cases such as the systems that contain multiple powers of \\(t\\) in the growth of a single variable, the differential equation that corresponds to the main equation often fails to have a closed form solution for us to analyze. Common methods to analyze such a system are:
1. Determine the strongest term by experiment and use the previous two methods (which is how we analyze T6, which has an intricate main equation)
2. Use Numerical Methods (which the Theory Simulator incorporates)
3. Reverse engineer the exponent of \\(\rho\\) of a specific variable from the final Decay Factor experimentally.

If we manage to get everything sorted, we will get a powerful conclusion:

### **Lemma 2.2**

For any theory system in which Lemma 2.1 can apply fully on or can be analyzed asymptotically by other means, there exists \\((x,y) \in \mathbb{R}^+\\) so that:
$$\frac{d\rho}{dt} \in \Theta(\rho^xt^y)$$

## Finally, the Model

Here, we use the concept from Lemma 2.2, and factor in the mechanic of publication. Since all theories have the publication multiplier in the form of:
$$K\rho^{r}_{pub}\qquad (3-1)$$
In which \\(K,r \in \mathbb{R}^+\\), \\(\rho_{pub}\\) is the value of \\(\rho\\) at the last publication
Since the publication multiplier is directly multiplied on the \\(\rho\\) gain of the theory, we can construct a model using Lemma 2.2 and (3-1):
$$\frac{d\rho}{dt} = K\rho^{x}t^{y}\rho^{z}_{pub}\qquad (3-2)$$
In which \\(K,x,y,z \in \mathbb{R}^+\\) are constants.

## How to Deduce the Optimal Publication Multiplier in the Endgame of a Theory From the Model

### **Theorem 1**

For any theory system \\(T\\) that fits the expression below asymptotically

$$\frac{d\rho}{dt}=K\rho^{x}t^{y}\rho^{z}_{pub}$$

the long-term mean Publication Multiplier of \\( T\\) when \\(\rho → ∞\\) is:

$$e^{\frac{z(y+1)}{1-x}}$$

### **Proof**

$$\frac{d\rho}{dt}=K\rho^{x}t^{y}\rho^{z}_{pub}$$
This is a separable differential equation, after some rearrangement we have:
$$\rho^{-x}d\rho = Kt^{y}\rho^{z}_{pub}dt$$
Integrate both sides,
$$\int\rho^{-x}d\rho = \int Kt^{y}\rho^{z}_{pub}dt$$
Since \\(Kt^{y}\rho^{z}_{pub}\\) is a constant in a publication,
$$\int\rho^{-x}d\rho = K\rho^{z}_{pub}\int t^{y}dt$$
Evaluate both Integrals,
$$\frac{\rho^{1-x}}{1-x} = \frac{K\rho^{z}_{pub}}{z+1}t^{y+1} + C$$
In an Endgame situation, \\(t → ∞\\), therefore, \\(C\\) is ignorable.
$$\frac{\rho^{1-x}}{1-x} = K'\rho^{z}_{pub}t^{y+1}$$
We solve the equation to get:
$$\rho = (K'(1-x)\rho^{z}_{pub}t^{y+1})^{\frac{1}{1-x}}\qquad (3-3)$$

The goal of ours is to find the Publication Multiplier that gives the maximum speed measured in a logarithmic scale, which can be expressed with the equation below:
$$Speed ∝ \frac{ln(\rho) - ln(\rho_{pub})}{t}\qquad (3-4)$$
We substitute (3-3) into (3-4) and get:
$$\frac{ln(\rho) - ln(\rho_{pub})}{t} = \frac{ln((K'(1-x)\rho^{z}_{pub}t^{y+1})^{\frac{1}{1-x}}) - ln(\rho_{pub})}{t}$$
$$ = \frac{\frac{ln(K'(1-x))+ln(\rho^{z}_{pub})+ln(t^{y+1})}{1-x} - ln(\rho_{pub})}{t}\qquad (3-5)$$
In the Endgame, \\(ln(K'(1-x))\\) is ignorable:
$$\frac{\frac{ln(K'(1-x))+ln(\rho^{z}_{pub})+ln(t^{y+1})}{1-x} - ln(\rho_{pub})}{t} \simeq \frac{\frac{ln(\rho^{z}_{pub})+ln(t^{y+1})}{1-x} - ln(\rho_{pub})}{t}$$
$$ = \frac{(\frac{z}{1-x} - 1)ln\rho_{pub} + \frac{y+1}{1-x}ln( t )}{t}$$
$$ = \frac{x+z-1}{1-x}ln\rho_{pub}\cdot\frac{1}{t} + \frac{y+1}{1-x}\cdot\frac{ln( t )}{t}\qquad (3-6)$$
We use differentiation to find the maximum of the expression above:
$$\frac{d}{dt}(\frac{x+z-1}{1-x}ln\rho_{pub}\cdot\frac{1}{t} + \frac{y+1}{1-x}\cdot\frac{ln( t )}{t}) = 0$$
$$\frac{x+z-1}{1-x}ln\rho_{pub}\cdot\frac{d}{dt}\frac{1}{t} + \frac{y+1}{1-x}\cdot\frac{d}{dt}\frac{ln( t )}{t} = 0$$
$$\frac{x+z-1}{1-x}ln\rho_{pub}\cdot(-\frac{1}{t^2}) + \frac{y+1}{1-x}\cdot\frac{d}{dt}\frac{\frac{1}{t}\cdot t-ln( t )}{t^2} = 0$$
$$\frac{y+1}{1-x}\frac{1-ln( t )}{t^2} = \frac{x+z-1}{1-x}ln\rho_{pub}\frac{1}{t^2}$$
Since \\(t>0, x \neq 1\\),
$$(y+1)(1-ln( t )) = (x+z-1)ln\rho_{pub}$$
Thus,
$$ln( t ) = 1-\frac{x+z-1}{y+1}ln\rho_{pub}\qquad (3-7)$$
The publication multiplier of the theory is:
$$r = (\frac{\rho}{\rho_{pub}})^z$$
Since \\(r>0\\), we can take the natural logarithm on both sides:
$$ln( r ) = z(ln(\rho)-ln(\rho_{pub}))$$
$$ln( r ) = zt(\frac{x+z-1}{1-x}ln\rho_{pub}\cdot\frac{1}{t} + \frac{y+1}{1-x}\cdot\frac{ln( t )}{t})$$
$$= \frac{x+z-1}{1-x}ln\rho_{pub} + \frac{y+1}{1-x}ln( t )\qquad (3-8)$$
Substitute (3-7) into (3-8),
$$ln( r )=$$
$$z(\frac{x+z-1}{1-x}ln\rho_{pub}+\frac{y+1}{1-x}(1-\frac{x+z-1}{y+1}ln\rho_{pub}))$$
$$ = z(\frac{(x+z-1)ln\rho_{pub} + (y+1)(1-\frac{x+z-1}{y+1}ln\rho_{pub})}{1-x})$$
$$ = z(\frac{(x+z-1)ln\rho_{pub} + (y+1) - (x+z-1)ln\rho_{pub}}{1-x})$$
$$ = \frac{z(y+1)}{1-x}\qquad (3-9)$$
From (3-9), we get:
$$r = e^{\frac{z(y+1)}{1-x}}$$
**Q.E.D.**

## The Observations We Can Get from Theorem 1

1. The more time-sensitive the theory is, which is reflected on a higher \\(y\\),the higher the publication multiplier will be.
2. The lower the intra-publication decay, which is reflected on a higher \\(x\\), the longer the publication will be. If the intra-publication decay is negative, which means the theory is diverging without any aid from publication and \\(x>1\\), the publication multiplier will fall below 1, making publication un-economical.
3. In a balanced theory that is not sensitive to time (All main theories except T2,4,6), the publication multiplier will be slightly lower than \\(e\\), the more severe the decay is, the lower it goes.

## Examples of an Analysis

This section will use the first two theories to explain how you compute the optimal publication multiplier of a theory solely from the information about a theory system.

### Theory 1

The main equation in the Endgame is:
$$\frac{d\rho}{dt} = q_1q_2(c_1^{1.15}c_2 + c_3\rho^{0.2} + c_4\rho^{0.3})$$
Using Lemma 1.5, we can get:
$$q_1, c_1 \in \Theta(\rho^{0.1})$$
$$q_2, c_2 \in \Theta(\rho^{log2})$$
$$c_3 \in \Theta(\rho^{\frac{2}{9}})$$
$$c_4 \in \Theta(\rho^{\frac{1}{8}})$$
Using Lemma 2.2, we can see that the dominant term in the parentheses on the right is \\(c_4\rho^{0.3}\\), and the publication multiplier equation of it is \\(K\rho^{0.164}_{pub}\\)
$$\frac{d\rho}{dt} \in \Theta(\rho^{0.3+0.125+0.1+log2}t^0\rho^{0.164}_{pub})$$
Therfore, \\(x = 0.525+log2, y = 0, z = 0.164\\)

Thus, from Theorem 1 we get:
$$r = e^{\frac{0.164}{0.475-log2}} \simeq 2.5669$$
This is very close to the geometric mean of the results of [Theory Simulator](/guides/theory-sim/) from e1000 to e1500.

### Theory 2

The main equation is:
$$\frac{d\rho}{dt} = (q_1r_1)^{1.15}$$
This theory features four layers of non-main equations, all in the form of:
$$q_{n-1} = c_nq_n$$
or
$$r_{n-1} = d_nr_n$$
In which \\(c_n\\) and \\(d_n\\) are purchasable variables.
Using Lemma 1.5, we can get:
$$c_1, d_1 \in \Theta(\rho^{0.1})$$
$$c_2, d_2 \in \Theta(\rho^{0.1})$$
$$c_3, d_3 \in \Theta(\rho^{\frac{log2}{10log3}})$$
$$c_4, d_4 \in \Theta(\rho^{0.05})$$
Using Lemma 2.2, we can analyze all the layers and factor in the publication multiplier equation of \\(K\rho^{0.198}\\)and get:
$$\frac{d\rho}{dt} \in \Theta(\rho^{1.15*2*(0.1+0.1+\frac{log2}{10log3}+0.05)}t^{9.2}\rho^{0.198}_{pub})$$
Therefore, \\(x \simeq 0.72011 , y = 9.2, z = 0.198\\)

Thus, from Theorem 1 we get:

$$r \simeq e^{\frac{0.198*10.2}{0.27989}} \simeq 1360.61$$

Which is close to the results of [Theory Simulator](/guides/theory-sim/) without T2MC from e1000 to e1500. This behavior is expected since Coasting -- The main concept of T2MC is not considered at all in this analysis.

## Credits

(The people below are not sorted)

### Thanks the following people for their research contribution!

1. Ghost (Playsprout)
2. Spiral (a_spiralist)
3. Megaminx

### Thanks the following people for their feedbacks!

1. Mr. Optimal (NGZ)
2. Speedrunner (Jooo)
3. scide (scbose)
4. Ghost (Playsprout)
5. Helper (Axiss)
6. [nubest](/images/nub.png)

**Thanks the entire community for supporting my on the way of researching and creating such a wonderful environment!**
