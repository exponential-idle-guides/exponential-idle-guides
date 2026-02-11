---
title: "From Complicated to Simple, From Bruteforce to General"
subtitle: "A New Direction to Approach MF CT"
author: "Hackzzzzzz"
contributors: "the Amazing Community and those in the acknowledgements at bottom."
order: 8
draft: true
tags: T9+ Research
---

###### Modified From [[LONG POST 1/2] From Complicated to Simple, From Bruteforce to General - A New Direction to Approach MF CT](https://redd.it/1qrd4oa) and [Post 2/2](https://redd.it/1qrd9ue)

###### Revised by LE★Baldy

**TLDR:**

- There are mainly 3 reset patterns used in MF CT depending on the $\rho$ of publication, namely $e4.5/1\ v_2$ reset, $e9/2\ v_2$ reset, and $e6/1\ v_4$ reset.
- A definite criterion of $c_2$ and $a_2$ by comparing their cost and the cost for buying all $v$ variables before a reset is found, a similar criterion with excellent confidence has been found for $\delta$, there is a moderate confidence of criterion when comparing $c_1$ cost and the cost for buying all $v$ variables before a reset, and $a_1$ has no relationship with reset as it does not impact $\rho$ growth after a sufficiently long time when $I$ reached cap, which was determined by the level $a_2$.
- A publication table, like Basal Problem (BaP CT), is not likely but still possible in MF CT, where the theory published specific position may shorten total completion time.

### Abstract

Magnetic Field (MF CT) is a custom theory which is inspired by electromagnetism in physics. Despite the simple physics concept implemented in MF CT, the theory has additional reset features which complicated the theory in terms of the reset pattern, its influence on other variables (namely $c_1$, $c_2$, $a_1$, $a_2$, and $\delta$) and the length of a publication. Hence, a generalized investigation throughout the span of 9 months was conducted to explore the undiscovered criteria concerning the above-mentioned aspects of MF CT. Do note that the conversion of $\rho$ and $\tau$ in MF CT is in 1 to 1 ratio, hence $\rho$ (preferred) and $\tau$ described in MF CT may be used interchangeably in subsequent sections.

The following abbreviations will be used throughout the subsequent section:

- Reset pattern – A rule in which a particle reset occurs when the rule is satisfied
- $e4.5/1\ v_2$ reset – A reset pattern of which a particle resets when an additional level of $v_2$, and all $v_1$, $v_3$, $v_4$ level with cost lower than that of additional level of $v_2$ are all purchased, $e4.5$ is indicated for the gain of rho between reset as the cost of every $v_2$ reset differ by a magnitude of $e4.5$
- $e9/2\ v_2$ reset – A reset pattern of which a particle resets when 2 additional levels of $v_2$, and all $v_1$, $v_3$, $v_4$ level with cost lower than that of 2nd additional level of $v_2$ are all purchased, $e9$ is indicated for the gain of rho between reset as the cost of every 2 $v_2$ reset differ by a magnitude of $e9$
- $e6/1\ v_4$ reset – A reset pattern of which a particle resets when an additional level of $v_4$, and all $v_1$, $v_2$, $v_3$ level with cost lower than that of additional level of $v_4$ are all purchased, $e6$ is indicated for the gain of rho between reset as the cost of every $v_4$ reset differ by a magnitude of $e6$
- Reset cost – The total cost of purchasing $v_1$, $v_2$, $v_3$, and $v_4$ for a reset
- $\rho$ of publication – The value of $\rho$ of last publication, i.e., the "Input" in sim 3.0
- $\rho$ gain – The value of the gain of $\rho$ in the current publication
- "Before" – The last level of designated variable purchased before the reset
- "After" – The first level of designated variable purchased after the reset

### Methodology

#### Data collection

A series of MF CT publication was simulated in sim 3.0 from $0\rho$ to $e600\rho$ with step interval $1$ using best overall strategy (MF<green>dCoast</green> Depth: 0 $c_1$: xxx, MF<green>d2Coast</green> Depth: 0 $c_1$: xxx and MF<green>d3Coast</green> Depth: 0 $c_1$:xxx) in depth 0 (No bruteforce). Due to the purpose of this investigation and my technical difficulties, investigation involving a higher depth was not used. Then, data set entries consist of the detail of reset positions, variable purchase positions, gain of $\rho$ of each of the 601 publications are obtained.

#### Data analysis and selection criteria

Data sets related to resets are isolated from the crude list to investigate the pattern of reset in each of the publication. The $\log_{10}{\rho}$ gain between reset is calculated and the reset data sets are excluded if the $\log_{10}{\rho}$ gain yields a result of $15$ or above, in which most of the data set are caused by rapid changes of $\rho$ and the reset pattern cannot be followed strictly by the simulator due to its manipulation limitation at the very start of a publication.

Subsequently, data sets related to resets, as well as the data entry which consist of a $c_1$ "Before", a reset, and a $c_1$ "After" is isolated for determination of a criterion to compare the cost of $c_1$ levels and the cost of reset using ratio (i.e., "relative cost ratio" between $c_1$, and reset cost before a reset.). The set of entry is included only if all three above-mentioned elements is included (i.e. a $c_1$ "Before", a reset, and a $c_1$ "After"). For example, with the reference of *Table 1* where the $c_1$ "Before", a reset, and the $c_1$ "After" had been isolated. The relative cost ratio of $c_1$ "Before" compared to reset cost can be calculated by $\frac{2.52e264}{1.45e265} = 0.17379$, while the relative cost ratio of $c_1$ "After" compared to reset cost can be calculated by $\frac{5.04e264}{1.45e265} = 0.34759$.

Class: newwords;
ID: table-1;

| INVIS | INVIS | INVIS | INVIS | INVIS | INVIS |
| - | - | - | - | - | - |
| [style="border-top:5px solid black;";]$c_1$ | [style="border-top:5px solid black;";]877 | [style="border-top:5px solid black;";]$2.52e264\ \rho$ | [style="border-top:5px solid black;";]Before | [style="border-top:5px solid black;";]0.1737931 | [style="border-top:5px solid black;";]MFd3 |
| Reset at<br>V=139,59,117,36 | 44 | $1.45e265\ \rho$ | | | |
| $c_1$ | 878 | $5.04e264\ \rho$ | After | 0.3475862 | MFd3 |
| | | | | | [FOOT;]Table 1: An example illustrating the calculation of relative cost ratio |

To determine the strength of a cost criterion as a cutoff, a Receiver-operating Characteristic Curve (ROC) is plotted using a series of cutoffs and the Area Under Curve (AUC) of the ROC is calculated. The exact cutoff position will be then determined by exploring the list of "Before" and "After" data with the aid of a box and whisker diagram. The approach is repeated for $c_2$, $a_1$, $a_2$, and $\delta$. More detailed explanations on the nature and interpretation of graphs will be explained subsequently.

Lastly, the reset pattern and the $\log_{10}{\rho}$ gain of each of the 601 publications will be retrieved for analysis of publication behavior and explore the relationship between $\rho$ of publication and the reset pattern used, which will be useful for predicting the pattern used in a publication $\rho$ without referring to the simulator.

#### Receiver-operating Characteristic (ROC) Curve

A Receiver-operating Characteristic (ROC) curve is a common graphical plot visualizing the performance of a binary classifier by plotting True Positive Rate (Sensitivity; $\frac{\text{no. of true positive}}{\text{Total no. of positive}}$) against False Positive Rate (1 – Specificity; $\frac{\text{no. of false positive}}{\text{Total no. of negative}}$) across all classification thresholds, mainly in machine learning and the medical field. It demonstrates the trade-off between sensitivity and specificity, with higher curves indicating better classification accuracy.

With the aid of the above concept, we can design a threshold which is to effectively and correctly separate the list of variables purchased before and after a reset by their relative cost ratio (e.g., $c_1$ cost divided by reset cost). Take an example of $c_1$ as the variable and $0.1$ as the relative cost ratio threshold, the interpretation of result can be referenced by *Table 2* and a set of data regarding "True Positive Rate" $(y-axis)$ and "False Positive Rate" $(x-axis)$, or a point of ROC Curve, can be obtained.

Class: strat_separated;
ID: table-2;

| INVIS | $c_1$ relative cost ratio $\geq 0.1$ <br>("Detection Positive") | $c_1$ relative cost ratio $\lt 0.1$ <br>("Detection Negative") |
| --- | --- | --- |
| relative cost ratio of $c_1$ "After"<br>simulated by sim v3.0<br>("Total Positive") | $c_1$ "After" purchased in-line with the result from sim v3.0<br>("True Positive") | $c_1$ "After" wrongly purchased before the reset instead of after the reset<br>("False Negative") |
| relative cost ratio of $c_1$ "Before"<br>simulated by sim v3.0<br>("Total Positive") | $c_1$ "Before" wrongly purchased after the reset instead of before the reset<br>("False Positive") | $c_1$ "Before" purchased in-line with the result from sim v3.0<br>("True Negative") |
| | | [FOOT;]Sensitivity $=\frac{\text{"True Positive"}}{\text{"Total Positive"}}$<br>False Positive rate $= 1-\text{Specificity}=\frac{\text{"False Positive"}}{\text{"Total Negative"}}$<br>Table 2: Definitions and implications of positives and negatives with $c_1$ relative cost ratio as an example |

Next, repeat the calculation with a variety of relative cost ratio threshold and obtain a set of data points regarding "True Positive Rate" and "False Positive Rate". Plotting the dots in a graph will yield a ROC Curve. The Area Under the Curve (AUC) of a ROC curve is calculated to measure overall performance. An AUC of a ROC of $1$ indicates a perfect identification of "Positive" and "Negative" exists, while the AUC of a ROC of $0.5$ is no better than random guessing. The larger the AUC of a ROC, the better the performance of a classification threshold, if appropriately set. In summary, one can interpret a ROC Curve as indicated in *Graph 1*.

![Graph 1: Interpretation of ROC Curve](/images/mf/graph_1.png)

| |
| - |
| [FOOT;]Graph 1: Interpretation of ROC curve |

There are three approaches to determine the preferred threshold when no definite threshold can be established (i.e. AUC of ROC Curve less than $1$), namely Youden's Index approach, minimal distance approach (MDA), and weighted approach. The Youden’s Index is calculated by Sensitivity $+$ Specificity $– 1$ (i.e., Sensitivity $–$ "False Positive rate"). Then the threshold will be determined when Youden’s Index reached maximum.

The minimal distance approach calculates the distance between dot plots of ROC Curve and an imaginary ideal situation (i.e., $(0, 1)$ on a ROC plot) via. the formula $\sqrt{(1-\text{Sensitivity}) ^{2}+(1-\text{Specificity}) ^{2}}$, The threshold will be determined when the distance between the two mentioned point is at minimum. The final approach takes account of weighted factors in each situation, such as the time loss due to "incorrect" variable purchases. Since the factors and the weighting of each factor is subjective and can differ from user to user, this method will be omitted in subsequent considerations of relative cost ratio threshold.

#### Box and whisker diagram

A Box and whisker diagram is another common graphic plot visualizing the dispersion of a sets of discrete data, as well as the range, Lower Quartile (Q1), Median (Q2), Upper Quartile (Q3) and outliers, if any, of a data set in statistical analysis. In this investigation, a box and whisker diagram will illustrate the spread of data set, as well as giving an approximate picture of how a relative cost ratio threshold perform when compared to sim 3.0. With a box and whisker diagram, one can interpret as below in *Graph 2*.

![Graph 2: Interpretation of a box and whisker diagram](/images/mf/graph_2.png)

| |
| - |
| [FOOT;]Graph 2: Interpretation of a box and whisker diagram |

### Results

A cumulative number of $83, 736$ data set entries were obtained from sim v3.0. The data was further refined based on the aim of different investigations. Further details are presented in corresponding sections.

#### Reset pattern vs. $\log_{10}{\rho}$ of publication

A total of $20, 032$ data sets related to resets are isolated from the crude list corresponding to the $\rho$ of publication to investigate the pattern of reset in each of the publication. There are mainly three types of reset patterns used in different MF CT publication $(n = 601)$, they are $e4.5/1\ v_2$ reset $(233/601, 38.77\%)$, $e9/2\ v_2$ reset $(274/601, 45.59\%)$, and $e6$/$1\ v_4$ reset $(94/601, 15.64\%)$. The use of three types of reset patterns in their respective $\rho$ of publication is presented below (*Graph 3*), excluding outliers, one can summarize that $e4.5/1\ v_2$ reset are the main pattern used before $e220\rho$, then the pattern gradually shifts to $e9/2\ v_2$ reset and become the mainstream pattern after $e265\rho$. The pattern continues until $e480$, when $e6/1\ v_4$ reset started to be increasingly used until $e600\rho$. The trend of usage of reset pattern is illustrated in *Graph 4*.

![Graph 3: Reset patterns (y) plotted against log10 ρ of publication (x)](/images/mf/graph_3.png)

| |
| - |
| [FOOT;]Graph 3: Reset patterns $(y)$ plotted against $\log_{10}{\rho}$ of publication $(x)$ |

![Graph 4: Moving-average percentage (y) of reset pattern used in previous 20 publications, each differs by e1ρ of publication](/images/mf/graph_4.png)

| |
| - |
| [FOOT;]Graph 4: Moving-average percentage $(y)$ of reset pattern used in previous 20 publications, each differing by $e1\rho$ of publication |

#### $c_1$ cost vs. reset cost

A total of $1,121$ sets of data entries consisting of a $c_1$ "Before", a reset, and a $c_1$ "After" were identified from the crude data set and the relative cost ratio of $c_1$ "Before" and $c_1$ "After" were calculated and compared. A ROC Curve were plotted (*Graph 5*) and AUC were calculated to be $0.731$ indicating a moderate-strength threshold, if appropriately set, exists for $c_1$ cost vs. reset cost with a considerable number of inconsistencies. The accuracy of identifying $c_1$ "Before" and $c_1$ "After" using a series of relative cost ratio thresholds ranging from $0.01$ to $2.00$ with interval of $0.01$ $(x-axis)$ and the corresponding Youden's Index and MDA $(y-axis)$ are displayed in *Graph 6* and *Graph 7* respectively.

While Youden’s Index achieves maximum when $c_1$ relative cost ratio threshold is set at $0.19$ (Similar value interval $0.17 – 0.23$), distance from ideal via. MDA reaches minimum at $c_1$ relative cost ratio threshold of $0.29$ (Similar value interval $0.19 – 0.67$). Since Youden’s Index measures the greatest vertical distance between ROC curve and random guessing line (i.e., straight line connecting $(0, 0)$ and $(1, 1)$ of a ROC curve), using the lower $c_1$ relative cost ratio threshold calculated with Youden’s Index Approach ensures more $c_1$ "After" to be identified $(1, 024/1, 121, 91.35\%)$ while the accuracy of identifying $c_1$ "Before" is significantly lower $(475/1, 121, 42.37\%)$. On the other hand, using threshold from MDA usually ensures a balanced result, especially for skewed data. In this case, both identifying $c_1$ "Before" $(590/1, 121, 52.63\%)$ and $c_1$ "After" $(830/1, 121, 74.04\%)$ are considerably appropriate with the threshold of $0.29$ calculated above.

A notable mention is the minimum distance calculated in MDA remains at a low plateau from $c_1$ relative cost ratio $0.19$ to $0.67$, in response to this, two additional $c_1$ relative cost ratios of $0.40$ and $0.50$ are evaluated. For $c_1$ relative cost ratio of $0.40$, accuracies of identifying $c_1$ "Before" and $c_1$ "After" being $66.37\% (744/1, 121)$ and $56.74\% (636/1, 121)$, while those for $c_1$ relative cost ratio of $0.50$ are $75.02\% (841/1, 121)$ and $51.20\% (574/1, 121)$ respectively. A box and whisker diagram comparing $c_1$ "Before" and $c_1$ "After" is illustrated below as supplementary information (*Graph 8*).

![Graph 5: ROC curve of c1 cost vs reset cost (n = 1,121), with AUC = 0.731](/images/mf/graph_5.png)

| |
| - |
| [FOOT;]Graph 5: ROC curve of $c_1$ cost vs. reset cost $(n=1,121)$, with AUC $=0.731$ |

![Graph 6: Youden’s Index (y) plotted against c1 relative cost ratio, interval 0.01 (x)](/images/mf/graph_6.png)

| |
| - |
| [FOOT;]Graph 6: Youden's Index $(y)$ plotted against $c_1$ relative cost ratio, interval 0.01 $(x)$ |

![Graph 7: Distance from ideal situation (y) plotted against c1 relative cost ratio, interval 0.01 (x)](/images/mf/graph_7.png)

| |
| - |
| [FOOT;]Graph 7: Distance from ideal situation $(y)$ plotted against $c_1$ relative cost ratio, interval 0.01 $(x)$ |

![Graph 8: Box and whisker diagram of c1 relative cost ratio for c1 "Before" and c1 "After" (n = 1, 121)](/images/mf/graph_8.png)

| |
| - |
| [FOOT;]Graph 8: Box and whisker diagram of $c_1$ relative cost ratio for $c_1$ "Before" and $c_1$ "After" $(n=1,121)$ |

#### $c_2$ cost vs. reset cost

A total of $1,056$ sets of data entries consisting of a $c_2$ "Before", a reset, and a $c_2$ "After" were identified from the crude data set and the relative cost ratio of $c_2$ "Before" and $c_2$ "After" were calculated and compared. A ROC Curve was plotted (*Graph 9*) and AUC were calculated to be $1.000$ indicating a perfect threshold exists for $c_2$ cost vs. reset cost. With reference to a box and whisker diagram comparing $c_2$ "Before" and $c_2$ "After" (*Graph 10*), a subsequent threshold of relative cost ratio was set to be $1.0$ and the accuracy of identifying $c_2$ "Before" and $c_2$ "After" were $100\%$ and $100\%$ respectively. This result can be interpreted as a threshold of relative cost ratio $1.0$ is definite for $c_2$ cost vs reset cost.

![Graph 9: ROC curve of c2 cost vs reset cost (n = 1,056), with AUC = 1.000](/images/mf/graph_9.png)

| |
| - |
| [FOOT;]Graph 9: ROC curve of $c_2$ cost vs. reset cost $(n=1,056)$, with AUC $=1.000$ |

![Graph 10: Box and whisker diagram of c2 relative cost ratio for c2 "Before" and c2 "After" (n = 1,056)](/images/mf/graph_10.png)

| |
| - |
| [FOOT;]Graph 10: Box and whisker diagram of $c_2$ relative cost ratio for $c_2$ "Before" and $c_2$ "After" $(n=1,056)$ |

#### $a_1$ cost vs. reset cost

A total of $1, 095$ sets of data entries consisting of a $a_1$ "Before", a reset, and a $a_1$ "After" were identified from the crude data set and the relative cost ratio of $a_1$ "Before" and $a_1$ "After" were calculated and compared. A ROC Curve were plotted (*Graph 11*) and AUC were calculated to be $0.865$ indicating a moderate-to-good-strength threshold, if appropriately set, exists for $a_1$ cost vs. reset cost with a considerable number of inconsistencies. Since the relative cost ratio of $a_1$ spans across a considerable range of magnitudes, the relative cost ratio has been converted to $\log_{10}$ to facilitate easier comparisons. The accuracy of identifying $a_1$ "Before" and $a_1$ "After" using a series of relative cost ratio thresholds ranging from $-5.00$ to $2.00$ with interval of $0.01$ $(x-axis)$ and the corresponding Youden's Index and MDA $(y-axis)$ are displayed in *Graph 12* and *Graph 13* respectively. A similar methodology described in "$c_1$ cost vs reset cost" section was adopted. Both Youden's Index Approach and MDA gives a consensus of an $a_1$ relative cost ratio threshold at $-1.05 \log_{10}$, which indicates $10^{-1.05}= 0.112$ for the actual $a_1$ relative cost ratio threshold. In this case, both accuracies in identifying $a_1$ "Before" $(917/1, 095, 83.74\%)$ and $a_1$ "After" $(798/1, 095, 72.88\%)$ are relatively good with the threshold of $0.112$ calculated above. With a box and whisker diagram comparing $a_1$ "Before" and $a_1$ "After" illustrated below (*Graph 14*), it may be more sensible to set a threshold of $10^{-1.30}= 0.05$, in which achieve an accuracy of $77.17\% (845/1, 095)$ for identifying $a_1$ "Before" and $77.63\% (850/1, 095)$ for identifying $a_1$ "After".

![Graph 11: ROC curve of a1 cost vs reset cost (n = 1,095), with AUC = 0.865](/images/mf/graph_11.png)

| |
| - |
| [FOOT;]Graph 11: ROC curve of $a_1$ cost vs. reset cost $(n=1,095)$, with AUC $=0.865$ |

![Graph 12: Youden’s Index (y) plotted against a1 relative cost ratio, interval 0.01 (x)](/images/mf/graph_12.png)

| |
| - |
| [FOOT;]Graph 12: Youden's Index $(y)$ plotted against $a_1$ relative cost ratio, interval 0.01$(x)$ |

![Graph 13: Distance from ideal situation (y) plotted against a1 relative cost ratio, interval 0.01 (x)](/images/mf/graph_13.png)

| |
| - |
| [FOOT;]Graph 13: Distance from idea situation $(y)$ plotted against $a_1$ relative cost ratio, interval 0.01 $(x)$ |

![Graph 14: Box and whisker diagram of a1 relative cost ratio for a1 "Before" and a1 "After" (n = 1,095)](/images/mf/graph_14.png)

| |
| - |
| [FOOT;]Graph 14: Box and whisker diagram of $a_1$ relative cost ratio for $a_1$ "Before" and $a_1$ "After" $(n=1,095)$ |

#### $a_2$ cost vs. reset cost

A total of $1, 107$ sets of data entries consisting of a $a_2$ "Before", a reset, and a $a_2$ "After" were identified from the crude data set and the relative cost ratio of $a_2$ "Before" and $a_2$ "After" were calculated and compared. A ROC Curve was plotted (*Graph 15*) and AUC were calculated to be $1.000$ indicating a perfect threshold exists for $a_2$ cost vs. reset cost. With reference to a box and whisker diagram comparing $a_2$ "Before" and $a_2$ "After" (*Graph 16*), a subsequent threshold of relative cost ratio was set to be $1.0$ and the accuracy of identifying $a_2$ "Before" and $a_2$ "After" were $100\%$ and $100\%$ respectively. This result can be interpreted as a threshold of relative cost ratio $1.0$ is definite $a_2$ cost vs. reset cost.

![Graph 15: ROC curve of a2 cost vs reset cost (n = 1,107), with AUC = 1.000](/images/mf/graph_15.png)

| |
| - |
| [FOOT;]Graph 15: ROC curve of $a_2$ cost vs. reset cost $(n=1,107)$, with AUC $=1.000$ |

![Graph 16: Box and whisker diagram of a2 relative cost ratio for a2 "Before" and a2 "After" (n = 1,107)](/images/mf/graph_16.png)

| |
| - |
| [FOOT;]Graph 16: Box and whisker diagram of $a_2$ relative cost ratio for $a_2$ "Before" and $a_2$ "After" $(n=1,107)$ |

#### $\delta$ cost vs. reset cost

A total of $941$ sets of data entries consisting of a $\delta$ "Before", a reset, and a $\delta$ "After" were identified from the crude data set and the relative cost ratio of $\delta$ "Before" and $\delta$ "After" were calculated and compared. A ROC Curve was plotted (*Graph 17*) and AUC were calculated to be $0.999$ indicating an excellent threshold, if appropriately set, exists for $\delta$ cost vs. reset cost with occasional inconsistencies. With reference to a box and whisker diagram comparing $\delta$ "Before" and $\delta$ "After" (*Graph 18*), a subsequent threshold of relative cost ratio was set to be $1.0$ and the accuracy of identifying $\delta$ "Before" and $\delta$ "After" were $100\%$ and $98.62\%$ respectively. This result can be interpreted as a threshold of relative cost ratio $1.0$ is excellent for $\delta$ cost vs. reset cost. The accuracy of identifying $\delta$ "Before" and $\delta$ "After" using other relative cost ratio thresholds and the corresponding Youden's Index and MDA are displayed in *Table 3*. Both Youden’s Index and MDA are coherent in setting the relative cost ratio threshold as $1.0$ is more ideal than any other thresholds. The inconsistency of failure to identifying $\delta$ "After" was retrospectively found to be in some resets between $e86$ to $e95$ and $e152$ publications. Using the relative cost ratio threshold as $1.0$ for $\delta$ may result in time difference compared to the simulation result.

![Graph 17: ROC curve of δ cost vs reset cost (n = 941), with AUC = 0.999](/images/mf/graph_17.png)

| |
| - |
| [FOOT;]Graph 17: ROC curve of $\delta$ cost vs reset cost $(n = 941)$, with AUC $= 0.999$ |

![Graph 18: Box and whisker diagram of δ relative cost ratio for δ "Before" and δ "After" (n = 941)](/images/mf/graph_18.png)

| |
| - |
| [FOOT;]Graph 18: Box and whisker diagram of $\delta$ relative cost ratio for $\delta$ "Before" and $\delta$ "After" $(n = 941)$ |

Class: newwords;
ID: table-3;

| Relative cost ratio threshold | Accuracy in identifying $\delta$ "Before" | Accuracy in identifying $\delta$ "After" | Youden's Index | MDA |
| --- | --- | --- | --- | --- |
| 0.6 | 835/941, 84.74% | 941/941, 100% | 0.8874 | 0.1126 |
| 0.7 | 872/941, 92.67% | 934/941, 99.26% | 0.9192 | 0.0737 |
| 0.8 | 900/941, 95.64% | 934/941, 99.26% | 0.9490 | 0.0442 |
| 0.9 | 925/941, 98.30% | 933/941, 99.15% | 0.9745 | 0.0190 |
| 1.0 | 941/941, 100% | 928/941, 98.62% | 0.9862 | 0.0138 |
| | | | | [FOOT;]Table 3: Tables showing accuracies, Youden’s Index, and MDA in sets of relative cost ratio threshold for $\delta$ |

#### $\rho$ gain vs $\rho$ of publication

Throughout the 9 months of investigations, several hypotheses concerning the relationship between $\tau$ gain, $\tau$ of publications, and reset patterns have been proposed. First part of this investigation was to evaluate the effect of reset pattern on the $\log_{10}{\rho}$ gain of the publication, it was hypothesized that the rho difference between resets has some influence on the $\log_{10}{\rho}$ gain of the publication, which was disproved by a graph plotting $\frac{\log_{10}{(\rho\text{ gain})}}{\log_{10}{(\text{reset pattern }\rho)}}$ $(y-axis)$ against $\log_{10}{(\rho\text{ of publication})}$ $(x-axis)$ (*Graph 19*). The graph reveals no visible relationship between reset pattern and $\log_{10}{(\rho\text{ gain})}$ of the publication, despite several attempts using arithmetic mean, geometric mean, and root-mean-square (RMS) of data sets.

![Graph 19: [log10 (ρ gain)]/[log10 (reset pattern ρ)] (y) plotted against log10 (ρ of publication) (x)](/images/mf/graph_19.png)

| |
| - |
| [FOOT;]Graph 19: $\frac{\log_{10}{\rho\text{ gain}}}{\log_{10}{\text{reset pattern }\rho}}$ $(y)$ plotted against $\log_{10}{\rho\text{ of publication}}$ $(x)$ |

The second part of this section investigates the effect of $\log_{10}{\tau}$ of publication on $\log_{10}{\tau}$ gain in a publication and, hence, investigates the possibility of a publication table where one can complete MF CT at a shorter time with a series of set publication rhos. To verify the above investigation, the $\log_{10}{\tau}$ gain was obtained and plotted against $\log_{10}{\rho}$ of publication for MF CT and a subsequent moving-average of $\log_{10}{\tau}$ gain of the previous 20 $\tau$ was also plotted (*Graph 20*). Similar graphs were also plotted for Basal Problem (BaP CT; *Graph 21*) where a publication table is verified to be effective in shortening the completion time of BaP CT, and for Weierstrass Sine Product (WSP CT; *Graph 22*) where there is no publication table for comparison.

One can appreciate the moving-average plot for BaP CT is relatively spiky, while that for WSP CT is relatively a straight line with slight up-and-down despite highly fluctuating $\log_{10}{\tau}$ gain values. It is also noticeable that $\log_{10}{\tau}$ gain fluctuates more for publication that goes across a milestone when compared to other $\tau$ of publication when the publication does not go across a milestone.

With the graph plotted for MF CT comparing to the two controlled graphs, one can appreciates the moving-average plot for MF CT remains relatively straight but includes some spikes that has larger amplitudes than those in WSP CT but smaller amplitudes than those in BaP CT, with large fluctuation for publication that goes across a milestone. With the observation, one can conclude a publication table, like BaP CT, is less likely but still possible for MF CT. Finding the designated publication position was out of the scope of this investigation, subsequent investigation would be needed if any other evidence suggests a publication table.

![Graph 20: log10 τ gain (y) plotted against log10 ρ of publication (x) for MF CT](/images/mf/graph_20.png)

| |
| - |
| [FOOT;]Graph 20: $\log_{10}{\tau\text{ gain}}$ $(y)$ plotted against $\log_{10}{\rho\text{of publication}}$ $(x)$ for MF CT |

![Graph 21: log10 τ gain (y) plotted against log10 ρ of publication (x) for BaP CT](/images/mf/graph_21.png)

| |
| - |
| [FOOT;]Graph 21: $\log_{10}{\tau\text{ gain}}$ $(y)$ plotted against $\log_{10}{\rho\text{of publication}}$ $(x)$ for Bap CT |

![Graph 22: log10 τ gain (y) plotted against log10 ρ of publication (x) for WSP CT](/images/mf/graph_22.png)

| |
| - |
| [FOOT;]Graph 22: $\log_{10}{\tau\text{ gain}}$ $(y)$ plotted against $\log_{10}{\rho\text{of publication}}$ $(x)$ for WSP CT |

### Conclusion and Discussion

#### Conclusion

The above investigations illustrate the fact that a generalized reset pattern across different $\log_{10}{\rho}$ of publication can be found in MF CT (with a considerable portion of unexplained exceptional cases). By investigating the relationship of relative cost ratio of $c_1$, $c_2$, $a_1$, $a_2$, and $\delta$ "Before" and "After" to reset cost, using a relative cost ratio threshold of $1.0$ on $c_2$, $a_2$, and $\delta$ is excellent in differentiating "Before" and "After" for a reset. Meanwhile, the strength of a relative cost ratio threshold of $c_1$ and $a_1$ is limited, and a range of the relative cost ratio of $c_1$ and $a_1$ was suggested with variable accuracies which need further evidence-based investigations to discover underlying criteria. The $\log_{10}{\rho}$ gain of the publication has no relationship with reset patterns, and a publication table is less likely but still possible for MF CT.

#### Evaluating the effect of rho of publication on reset patterns

By recalling the formula of MF CT, one can simplify the formula for rho dot as follow,

$$\begin{gather*}
  \begin{aligned}
    \dot{\rho} &= Cc_1c_2\omega^\alpha x^\beta v^\gamma &\\

    &= Cc_1c_2 \left(\frac{q}{m}B\right)^\alpha \left(v_x t_s\right)^\beta \left(\sqrt{v_x ^{2} + v_y ^{2} + v_z ^{2}}\right)^\gamma &\\

    &= C\left(\frac{q}{m}\right)^\alpha c_1c_2 \left(\mu_0I\delta\right)^\alpha \left(10^{-20} v_1v_2\right)^\beta t_s^\beta \left(10^{-20} v_1v_2 + 10^{-18} v_3v_4\right)^{\frac{\gamma}{2}} &\\

    &= C\left(\frac{q\mu_0}{m}\right)^\alpha c_1c_2\left(10^{-15} a_2\right)^\alpha \delta^\alpha \left(10^{-20} v_1v_2\right)^\beta t_s^\beta \left(10^{-20} v_1v_2 + 10^{-18} v_3v_4\right)^{\frac{\gamma}{2}} &\\

    &= \left[C\left(10^{-15}\right)^\alpha \left(10^{-20}\right)^\beta \left(\frac{q\mu_0}{m}\right)^\alpha\right]c_1c_2a_2^\alpha \delta^\alpha \left(v_1v_2\right)^\beta t_s^\beta \left(10^{-20} v_1v_2 + 10^{-18} v_3v_4\right)^{\frac{\gamma}{2}}
  \end{aligned}
\end{gather*}$$

Where $\alpha$, $\beta$, and $\gamma$ are exponents that only changes when corresponding milestones are used.

The underlying reasons for the transition of $e4.5/1\ v_2$ reset to $e9/2\ v_2$ reset from $e220\rho$ to $e260\rho$ are probably due to the increase dominance of $t$ (via. $x$) in growth of $\dot{\rho}$ in respond to lengthened time between resets and milestone 5 and 6 (at $e275 \rho$ and $e325 \rho$ respectively) which increases the exponent of $x$, hence lengthening the reset time to benefit additional $\dot{\rho}$ due to $t$ by "combining" two $e4.5/1\ v_2$ resets into one single $e9/2\ v_2$ reset. As MF CT progresses, value of $v_4$ gradually increases and significantly account for the growth of $v$ with the effect of milestone 7 and 8 (at $e425$ and $e475\rho$ respectively), such that the effect $v_4$ starts to overcome that of $v_2$ (See *Graph 23*), the reset pattern gradually transits again from $e9/2\ v_2$ reset to $e6/1\ v_4$ reset. However, the above hypothesis has not been verified and require further verification with account for the effect of $t$ on $\dot{\rho}$. The existence of outlier has also not been explained in this investigation; further evaluation is needed and underlying criteria may be yet to be discovered.

![Graph 23: log10 v2 and log10 v4 (y) plotted against ρ of publication (x)](/images/mf/graph_23.png)

| |
| - |
| [FOOT;]Graph 23: $\log_{10}{v_2}$ and $\log_{10}{v_4}$ $(y)$ plotted against $\rho$ of publication $(x)$ |

#### Evaluating the Effect of time of reset

The above simulations were simulated in close to real-life situations when a game with proper $c_1$, $c_2$, $a_1$, $a_2$, and $\delta$ levels being purchased based on the criteria provided by MF<green>d</green>, MF<green>d2</green>, and MF<green>d3</green>. However, the above investigations were conducted in a static manner, while the real game in MF CT is a dynamic game progression with $t_s$ influencing $x$ (together with $v_2$) and, hence, $\dot{\rho}$. With the derivation of formula in previous section, one can conclude $\dot{\rho}$ is proportional to $t_s^\beta$, where $\beta$ depends on the number of milestone (i.e., $\beta = 3.2$ before Milestone 5, $\beta = 3.3$ between Milestone 5 and 6 and $\beta = 3.4$ afterward). This may be the part of the explanation why the transition point from $e9/2\ v_2$ reset to $e6/1\ v_4$ reset at a later-than-expected rho. Further evidence will be needed in order to verify this hypothesis.

#### Evaluating the Effect of strategy used in publication

The MF CT publications were simulated by sim 3.0 using the best rate out of the three strategies developed by players – MF<green>dCoast</green> Depth: 0 $c_1$: xxx $(50/601, 8.32\%)$, MF<green>d2Coast</green> Depth: 0 $c_1$: xxx $(236/601, 39.27\%)$, and MF<green>d3Coast</green> Depth: 0 $c_1$:xxx $(315/601, 52.41\%)$. The use of three types of strategy in their respective $\rho$ of publication is presented below (*Graph 24*). Together with the trend of usage of reset pattern is illustrated in *Graph 25*, one can summarize that MF<green>d2</green> and MF<green>d3</green> were alternatively used throughout MF CT, with MF<green>d3</green> finally dominate over MF<green>d2</green> after $e470 \rho$. The use of MF<green>d</green> were low until a gradual rise after $e560 \rho$, replacing MF<green>d2</green>.

![Graph 24: Strategy used (y) plotted against log10 ρ of publication (x)](/images/mf/graph_24.png)

| |
| - |
| [FOOT;]Graph 24: Strategy used $(y)$ plotted against $\log_{10}{\rho\text{ of publication}}$ $(x)$ |

![Graph 25: Moving-average percentage (y) of strategy used in previous 20 publications, each differs by e1 ρ of publication](/images/mf/graph_25.png)

| |
| - |
| [FOOT;]Graph 25: Moving-average percentage $(y)$ of strategy used in previous 20 publications, each differing by $e1\rho$ of publication |

In this investigation, it is unclear that whether the strategy adopted in a publication altered the results of above investigations, especially on $c_1$ and $a_1$ relative cost ratio due to the three discrete buying criteria used in the three strategies. With respond to this, the $c_1$ and $a_1$ data sets were further divided into three groups based on the strategy used in the publication, their ROC Curves were plotted, their AUC of ROC Curve, Youden's Index approach, and MDA were evaluated and compared, and the significance of the effect of buying strategies for $c_1$ and $a_1$ were compared in *Table 4* and *Table 5* respectively. Since the scale of $c_1$ cost for each $c_1$ level is $2$ and the scale of $a_1$ cost for each $a_1$ level is $25$ throughout MF CT, A box and whisker diagram comparing only $c_1$ "Before" and $a_1$ "Before" for three strategies have been plotted (Graph 26 and Graph 27).

Class: strat_separated;
ID: table-4;

| INVIS | AUC of ROC | Youden's Index threshold | MDA threshold | p value |
| ------------------------- | ----------------------- | ------------------------------------- | ---------------------------------- | -------------------------- |
| MFd $(n=103)$ | 0.756 | 0.55, 0.56 | 0.53 | As comparison |
| MFd2 $(n=338)$ | 0.745 | 0.92 | 0.62 | <0.0001**** |
| MFd3 $(n=603)$ | 0.736 | 0.19 | 0.23 | 0.1935 |
| | | | | [FOOT;]Table 4: Tables of AUC or ROC, Youden’s Index, MDA, and significance for $c_1$ when compared to MF<green>d</green> for MF<green>d</green>, MF<green>d2</green>, and MF<green>d3</green> |

Class: strat_separated;
ID: table-5;

| INVIS | AUC of ROC | Youden's Index threshold | MDA threshold | p value |
| --------------------------- | ----------------------- | ------------------------------------- | ------------------------------------ | -------------------------- |
| MFd $(n=101)$ | 0.973 | -1.03 to -0.99 $\log_{10}$ | -1.03 to -0.97 $\log_{10}$ | As comparison |
| MFd2 $(n=410)$ | 0.890 | -1.62 $\log_{10}$ | -1.62 $\log_{10}$ | <0.0001**** |
| MFd3 $(n=584)$ | 0.856 | -0.87 to -0.84 $\log_{10}$ | -0.87 $\log_{10}$ | 0.06892 |
| | | | | [FOOT;]Table 5: Tables of AUC or ROC, Youden’s Index, MDA, and significance for $a_1$ when compared to MF<green>d</green> for MF<green>d</green>, MF<green>d2</green>, and MF<green>d3</green> |

![Graph 26: Box and whisker diagram of c1 relative cost ratio for c1 "Before" for MFd (n = 103), MFd2 (n = 338), and MFd3 (n = 603)](/images/mf/graph_26.png)

| |
| - |
| [FOOT;]Graph 26: Box and whisker diagram of $c_1$ relative cost ratio for $c_1$ "Before" for MFd $(n=103)$, MFd2 $(n=338)$, and MFd3 $(n=603)$ |

![Graph 27: Box and whisker diagram of a1 relative cost ratio for a1 "Before" for MFd (n = 101), MFd2 (n = 410), and MFd3 (n = 584)](/images/mf/graph_27.png)

| |
| - |
| [FOOT;]Graph 27: Box and whisker diagram of $c_1$ relative cost ratio for $c_1$ "Before" for MFd $(n=101)$, MFd2 $(n=410)$, and MFd3 $(n=584)$ |

By comparing $c_1$ and $a_1$ relative cost ratio of publication using MF<green>d2</green> with those using MF<green>d</green>, one may observe the $c_1$ relative cost ratio threshold used in publication of MF<green>d2</green> is higher than that of MF<green>d</green> while that of $a_1$ is lower, and is statistically significant, reflecting the difference in $c_1$ and $a_1$ buying criteria alters the $c_1$ and $a_1$ relative cost ratio threshold. The comparison between MF<green>d</green> and MF<green>d3</green> is insignificant as they share the same $c_1$ buying criteria in their respective publications. The reason for lower $c_1$ relative cost ratio threshold and higher $a_1$ relative cost ratio threshold in publication using MF<green>d3</green> is yet to be known. To summarize, the adjusted $c_1$ and $a_1$ relative cost ratio should be adjusted accordingly depend on the strategy used in the publication, as described in *Table 6*. However, the underlying mechanism(s) for determination of strategy used in a publication has not been found in these investigations, which is essential for determining the $c_1$ and $a_1$ relative cost ratio threshold.

Class: strat_separated;
ID: table-6;

| INVIS | $c_1$ relative cost ratio threshold | $a_1$ relative cost ratio threshold |
| ------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| MFd | 50\%, or 0.5, or 1/2 | 10\%, or 0.1, or 1/10 |
| MFd2 | 75\%, or 0.75, or 3/4 | 2.5\%, or 0.025, or 1/40 |
| MFd3 | 20\%, or 0.2, or 1/5 | 12.5\%, or 0.125, or 1/8 |
| | | [FOOT;]Table 6: Adjusted $c_1$ and $a_1$ relative cost ratio threshold used in MF<green>d</green>, MF<green>d2</green>, and MF<green>d3</green> |

### Acknowledgement

Lastly, I would like to give a huge thanks to the following people/group of people for assisting the verification of hypothesis and further findings on MF CT:

- Mathis S.
  - For designing the MF CT, suggesting some hypothesis to be verified and designing simulation for MF CT via. sim 3.0 for data retrievals.

- Hotab, basically, i am little cat
  - For designing simulations for MF CT for data retrievals and refine the hypothesis upon testing.

- Maimai, Black Seal
  - For suggesting the strategies used in MF CT.

- All other people
  - For providing experimental data and providing support whenever I need them.
