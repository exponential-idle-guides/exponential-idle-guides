---
title: "A Possible Idle RZ Theory By Time"
description: "Evaluating the effect of time for implementing black hole on RZ CT progression."
author: "Hackzzz118"
contributors: "the Amazing Community"
order: 6
draft: true
tags: T9+ Research
---


###### Originally From [[LONG POST] A Possible Idle RZ Theory By Time - Evaluating the Effect of Time for Implementing Black Hole on RZ CT Progression](https://redd.it/1juk67i)

###### Revised From [Evaluating the Effect of Time for Implementing Black Hole on Rho Progression of RZ CT](https://docs.google.com/document/d/1XlRLMZWcGToxlQcoHqaov_ttTC4Yozgn/) and [Evaluating the Effect of Time for Implementing Black Hole on Delta Progression of RZ CT](https://docs.google.com/document/d/1Z1D-LC_lsgN5WBh0V-CX40kjJqY_x5mU/)


**TLDR:** If u are going to full idle RZ CT, get an approximation of how long the pub will be, convert it into in-game $t$, and multiply by 60% or 0.6, then compare to a table of "good" black hole $t$ to use with throughout your pub. **DO NOT** use it in a semi-idle/active situation.

### Abstract

Implementing black hole at the correct time is very essential for progression of RZ $\rho$ and $\delta$, and hence $\tau$ at an efficient way. Due to technological difficulties of myself, several major assumptions are made in the process to ensure a fair comparison between data sets, **including the effect of the variables $c_1$, $c_2$, $w_1$, $w_2$, $w_3$, and $b$ remain the same throughout the publication.** After a series of calculation, it will be practical and ideal with **black hole implemented at 60% of the publication.**

### Methodology

A data set of $t$, $z$ and $z'$ had been obtained and undergo the manipulation of $\dot{\rho}$ and $\dot{\delta}$ respectively via. the formula provided in game, i.e.,  $\dot{\rho} = (time\ interval) * \frac{t}{\frac{z}{2^b} + 0.01}$ & $\dot{\delta} = (time interval) * z'^b$. Then, cumulative $\rho/\delta$ up to an arbitrary time, $t$, was manipulated by summing up all $\dot{\rho}/\dot{\delta}$ up to the time $t$. Finally, by fixing $\dot{\rho}/\dot{\delta}$ after time $t$, which mimicked the effect of implementing black hole, cumulative $\rho/\delta$ was manipulated by summing up all $\dot{\rho}/\dot{\delta}$ from $t = 0$ until the end of the publication.

Take an example of $t = 900$ simulation, given $\dot{\delta}$ formula in the game, $\delta$ can be manipulated as

$$\delta = \sum^{900/\Delta t}_{t=0}\dot{\delta}(t)\Delta t = \Delta t\sum^{900/\Delta t}_{t=0}w_1(t)w_2(t)z'(t)^b$$

In real game, the formula had already been its most simplified form as the power of $w_1$ and $w_2$ varies when purchased. In this simulation, the **assumption of the effect $w_1$ and $w_2$ to be the same throughout the publication** had been made. After black hole was implemented at an arbitrary time $a$, $z'$ were fixed, formula for cumulative $\delta$ could be simplified as

$$\begin{flalign}
  \delta &= \Delta t\sum^{900/\Delta t}_{t=0}w_1(t)w_2(t)z'(t)^b &\\
  &= \Delta t\sum^{a}_{t=0}w_1(t)w_2(t)z'(t)^b + \Delta t\sum^{900/\Delta t}_{t=a}w_1(t)w_2(t)z'(t)^b &&\\
  &= \Delta tw_1w_2\sum^{a}_{t=0}z'(t)^b + \Delta tw_1w_2z'(a)^b\sum^{900/\Delta t}_{t=a}1&&\\
  &= \Delta tw_1w_2\sum^{a}_{t=0}z'(t)^b + \Delta tw_1w_2z'(a)^b\left(\frac{900}{\Delta t}-a\right)&&\\
  &= w_1w_2\left(\Delta t\sum^{a}_{t=0}z'(t)^b + z'(a)^b(900-a\Delta t)\right)&&
\end{flalign}$$

Do note that $w_3$ behaves the same as $w_2$ with a larger interval of purchasing. It has been omitted in the above-shown formula due to the fact that this study was prepared before the effect of $w_3$ was fully interpret by myself. Meanwhile, $w_3$ has no effect on $\rho$ progression, so not accounting $w_3$ base on the assumption and formula given in game will have no net effect on $\rho$ progression.

Next, a publication data set had been simulated with the following settings: Given a publication that had **the same levels of $w_1$ and $w_2$ throughout**, the cumulative $\rho/\delta$ at the end of the publication had been manipulated with **black hole implemented at varying $t$ towards the end of the publication.** Then, the result could be visualized and represented by **plotting a graph of cumulative $\rho/\delta$ at the end of the publication against the time for implementing the black hole.**

In short, one should interpret the graphs as the following:

- $y$-axis is the **maximum $\rho/\delta$ (in arbitrary unit) obtained at the end of the publication**

- $x$-axis is the **time, in $t$, when black hole is being implemented**

It is worth noting that $y$-axis for cumulative $\rho$ and cumulative $\delta$ are in **arbitrary units**, and they **deviate from the real result by a linear factor** (affected by $c_1$, $c_2$, $w_1$, $w_2$, and $w_3$).

**The above calculations are all performed in Microsoft Excel with formula implemented** in all data sets.

### Result

#### Evaluating the effect of the time of implementing black hole on $\rho$ & $\delta$ progression under constant $b$

4 different data sets were tested with the simulation of $b = 1.5$ and the results were obtained, they were:

1. A publication at $t = 40,000$ with **time interval 1**.
  Maximum cumulative $\rho$ resulted at $t = 40,000$ if black hole is implemented at $t = 18,047$ (**45.1%**; Graph 1a).
  Maximum cumulative $\delta$ resulted at $t = 40,000$ if black hole is implemented at $t = 14,304$ (**35.8%**; Graph 1b).

![Graph 1a: a publication of $t = 40,000$, with cumulative $\rho$ plotted against time of implementing black hole in linear scale](/images/rz-black-hole/graph_1a.png)

###### Graph 1a: a publication of $t = 40,000$, with cumulative $\rho$ plotted against time of implementing black hole in linear scale

![Graph 1b: a publication of $t = 40,000$, with cumulative $\delta$ plotted against time of implementing black hole in linear scale ($b = 3$)](/images/rz-black-hole/graph_1b.png)

###### Graph 1b: a publication of $t = 40,000$, with cumulative $\delta$ plotted against time of implementing black hole in linear scale ($b = 3$)

2. A publication at $t = 900$ (i.e., a publication with **1 hour in real time**) with **time interval 0.01**.
  Maximum cumulative $\rho$ resulted at $t = 900$ if black hole is implemented at $t = 466.56$ (**51.8%**; Graph 2a).
  Maximum cumulative $\delta$ resulted at t = 900 if black hole is implemented at t = 480.40 (53.3%; Graph 2b).

![Graph 2a: a publication of $t = 900$, with cumulative $\rho$ plotted against time of implementing black hole in linear scale](/images/rz-black-hole/graph_2a.png)

###### Graph 2a: a publication of $t = 900$, with cumulative $\rho$ plotted against time of implementing black hole in linear scale

![Graph 2b: a publication of $t = 900$, with cumulative $\delta$ plotted against time of implementing black hole in linear scale ($b = 3$)](/images/rz-black-hole/graph_2b.png)

###### Graph 2b: a publication of $t = 900$, with cumulative $\delta$ plotted against time of implementing black hole in linear scale ($b = 3$)

3. A publication at $t = 1,800$ (i.e., a publication with **2 hours in real time**) with **time interval 0.01**.
  Maximum cumulative $\rho$ resulted at $t = 1,800$ if black hole is implemented at $t = 957.5$ (**53.2%**; Graph 3a).
  Maximum cumulative $\delta$ resulted at $t = 1,800$ if black hole is implemented at $t = 652.21$ (**36.2%**; Graph 3b).

![Graph 3a: a publication of $t = 1,800$, with cumulative $\rho$ plotted against time of implementing black hole in linear scale](/images/rz-black-hole/graph_3a.png)

###### Graph 3a: a publication of $t = 1,800$, with cumulative $\rho$ plotted against time of implementing black hole in linear scale

![Graph 3b: a publication of $t = 1,800$, with cumulative $\delta$ plotted against time of implementing black hole in linear scale ($b = 3$)](/images/rz-black-hole/graph_3b.png)

###### Graph 3b: a publication of $t = 1,800$, with cumulative $\delta$ plotted against time of implementing black hole in linear scale ($b = 3$)

4. A publication at $t = 1,500$ (i.e., a publication with **100 minutes in real time**) with **time interval 0.01**.
  Maximum cumulative $\rho$ resulted at $t = 1,500$ if black hole is implemented at $t = 762.69$ (**50.8%**; Graph 4a).
  Maximum cumulative $\delta$ resulted at $t = 1,500$ if black hole is implemented at $t = 652.21$ (**43.5%**; Graph 4b).

![Graph 4a: a publication of $t = 1,500$, with cumulative $\rho$ plotted against time of implementing black hole in linear scale](/images/rz-black-hole/graph_4a.png)

###### Graph 34: a publication of $t = 1,500$, with cumulative $\rho$ plotted against time of implementing black hole in linear scale

![Graph 4b: a publication of $t = 1,500$, with cumulative $\delta$ plotted against time of implementing black hole in linear scale ($b = 3$)](/images/rz-black-hole/graph_4b.png)

###### Graph 4b: a publication of $t = 1,500$, with cumulative $\delta$ plotted against time of implementing black hole in linear scale ($b = 3$)

All 4 data sets showed similar results that **maximum cumulative $\rho$ was obtained at the end of the publication if black hole is implemented at 50% of the publication**, while they showed distinct results that **maximum cumulative $\delta$ was obtained at the end of the publication if black hole is implemented at different time** (depend on $z'$ and $b$). No conclusion can be drawn for $\delta$ progression.

#### Evaluating the effect of varying $b$ on cumulative $\rho$ & $\delta$

As **$b$ has no effect on $\dot{\rho}$ after black hole is implemented**, it can be concluded that $b$ has no alteration on the result on the time of implementing black hole for maximum cumulative $\rho$ to be obtained based on the major assumption of constant effect of $c_1$, $c_2$, $w_1$, $w_2$, and $w_3$ throughout the publication.

The 4 above-mentioned data sets were repeated with the simulation of $b = 1.5$ (i.e., **Level 3**), $b = 2$ (i.e., **Level 4**), $b = 2.5$ (i.e., **Level 5**), and $b = 3$ (i.e., **Level 6**). The results were obtained and were

1. A publication at $t = 40,000$ with **time interval 1** (Graph 5).

![Graph 5: a publication of $t = 40,000$, with cumulative $\delta$ plotted against time of implementing black hole in log scale](/images/rz-black-hole/graph_5.png)

###### Graph 5: a publication of $t = 40,000$, with cumulative $\delta$ plotted against time of implementing black hole in log scale

2. A publication at $t = 900$ (i.e., a publication with **1 hour in real time**) with **time interval 0.01** (Graph 6).

![Graph 6: a publication of $t = 900$, with cumulative $\delta$ plotted against time of implementing black hole in log scale](/images/rz-black-hole/graph_6.png)

###### Graph 6: a publication of $t = 900$, with cumulative $\delta$ plotted against time of implementing black hole in log scale

3. A publication at $t = 1,800$ (i.e., a publication with **2 hours in real time**) with **time interval 0.01** (Graph 7).

![Graph 7: a publication of $t = 1,800$, with cumulative $\delta$ plotted against time of implementing black hole in log scale](/images/rz-black-hole/graph_7.png)

###### Graph 7: a publication of $t = 1,800$, with cumulative $\delta$ plotted against time of implementing black hole in log scale

4. A publication at $t = 1,500$ (i.e., a publication with **100 minutes in real time**) with **time interval 0.01** (Graph 8).

![Graph 8: a publication of $t = 1,500$, with cumulative $\delta$ plotted against time of implementing black hole in log scale](/images/rz-black-hole/graph_8.png)

###### Graph 8: a publication of $t = 1,500$, with cumulative $\delta$ plotted against time of implementing black hole in log scale

The result can be summarized as the following table:

<table class="spqcey">
  <thead>
    <tr>
         <th class="invisible"></th>
         <th class="leftMainHeader"><mjx-container class="MathJax" jax="SVG" style="direction: ltr; position: relative;"><svg style="overflow: visible; min-height: 1px; min-width: 1px; vertical-align: -0.65ex;" xmlns="http://www.w3.org/2000/svg" width="8.843ex" height="2.066ex" role="img" focusable="false" viewBox="0 -626 3908.8 913.2" aria-hidden="true"><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="msub"><g data-mml-node="mi"><path data-c="1D461" d="M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z" style="stroke-width: 3;"></path></g><g data-mml-node="TeXAtom" transform="translate(394,-150) scale(0.707)" data-mjx-texclass="ORD"><g data-mml-node="mi"><path data-c="1D45D" d="M23 287Q24 290 25 295T30 317T40 348T55 381T75 411T101 433T134 442Q209 442 230 378L240 387Q302 442 358 442Q423 442 460 395T497 281Q497 173 421 82T249 -10Q227 -10 210 -4Q199 1 187 11T168 28L161 36Q160 35 139 -51T118 -138Q118 -144 126 -145T163 -148H188Q194 -155 194 -157T191 -175Q188 -187 185 -190T172 -194Q170 -194 161 -194T127 -193T65 -192Q-5 -192 -24 -194H-32Q-39 -187 -39 -183Q-37 -156 -26 -148H-6Q28 -147 33 -136Q36 -130 94 103T155 350Q156 355 156 364Q156 405 131 405Q109 405 94 377T71 316T59 280Q57 278 43 278H29Q23 284 23 287ZM178 102Q200 26 252 26Q282 26 310 49T356 107Q374 141 392 215T411 325V331Q411 405 350 405Q339 405 328 402T306 393T286 380T269 365T254 350T243 336T235 326L232 322Q232 321 229 308T218 264T204 212Q178 106 178 102Z" style="stroke-width: 3;"></path></g><g data-mml-node="mi" transform="translate(503,0)"><path data-c="1D462" d="M21 287Q21 295 30 318T55 370T99 420T158 442Q204 442 227 417T250 358Q250 340 216 246T182 105Q182 62 196 45T238 27T291 44T328 78L339 95Q341 99 377 247Q407 367 413 387T427 416Q444 431 463 431Q480 431 488 421T496 402L420 84Q419 79 419 68Q419 43 426 35T447 26Q469 29 482 57T512 145Q514 153 532 153Q551 153 551 144Q550 139 549 130T540 98T523 55T498 17T462 -8Q454 -10 438 -10Q372 -10 347 46Q345 45 336 36T318 21T296 6T267 -6T233 -11Q189 -11 155 7Q103 38 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z" style="stroke-width: 3;"></path></g><g data-mml-node="mi" transform="translate(1075,0)"><path data-c="1D44F" d="M73 647Q73 657 77 670T89 683Q90 683 161 688T234 694Q246 694 246 685T212 542Q204 508 195 472T180 418L176 399Q176 396 182 402Q231 442 283 442Q345 442 383 396T422 280Q422 169 343 79T173 -11Q123 -11 82 27T40 150V159Q40 180 48 217T97 414Q147 611 147 623T109 637Q104 637 101 637H96Q86 637 83 637T76 640T73 647ZM336 325V331Q336 405 275 405Q258 405 240 397T207 376T181 352T163 330L157 322L136 236Q114 150 114 114Q114 66 138 42Q154 26 178 26Q211 26 245 58Q270 81 285 114T318 219Q336 291 336 325Z" style="stroke-width: 3;"></path></g><g data-mml-node="mi" transform="translate(1504,0)"><path data-c="1D459" d="M117 59Q117 26 142 26Q179 26 205 131Q211 151 215 152Q217 153 225 153H229Q238 153 241 153T246 151T248 144Q247 138 245 128T234 90T214 43T183 6T137 -11Q101 -11 70 11T38 85Q38 97 39 102L104 360Q167 615 167 623Q167 626 166 628T162 632T157 634T149 635T141 636T132 637T122 637Q112 637 109 637T101 638T95 641T94 647Q94 649 96 661Q101 680 107 682T179 688Q194 689 213 690T243 693T254 694Q266 694 266 686Q266 675 193 386T118 83Q118 81 118 75T117 65V59Z" style="stroke-width: 3;"></path></g><g data-mml-node="mi" transform="translate(1802,0)"><path data-c="1D456" d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z" style="stroke-width: 3;"></path></g><g data-mml-node="mi" transform="translate(2147,0)"><path data-c="1D450" d="M34 159Q34 268 120 355T306 442Q362 442 394 418T427 355Q427 326 408 306T360 285Q341 285 330 295T319 325T330 359T352 380T366 386H367Q367 388 361 392T340 400T306 404Q276 404 249 390Q228 381 206 359Q162 315 142 235T121 119Q121 73 147 50Q169 26 205 26H209Q321 26 394 111Q403 121 406 121Q410 121 419 112T429 98T420 83T391 55T346 25T282 0T202 -11Q127 -11 81 37T34 159Z" style="stroke-width: 3;"></path></g><g data-mml-node="mi" transform="translate(2580,0)"><path data-c="1D44E" d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z" style="stroke-width: 3;"></path></g><g data-mml-node="mi" transform="translate(3109,0)"><path data-c="1D461" d="M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z" style="stroke-width: 3;"></path></g><g data-mml-node="mi" transform="translate(3470,0)"><path data-c="1D456" d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z" style="stroke-width: 3;"></path></g><g data-mml-node="mi" transform="translate(3815,0)"><path data-c="1D45C" d="M201 -11Q126 -11 80 38T34 156Q34 221 64 279T146 380Q222 441 301 441Q333 441 341 440Q354 437 367 433T402 417T438 387T464 338T476 268Q476 161 390 75T201 -11ZM121 120Q121 70 147 48T206 26Q250 26 289 58T351 142Q360 163 374 216T388 308Q388 352 370 375Q346 405 306 405Q243 405 195 347Q158 303 140 230T121 120Z" style="stroke-width: 3;"></path></g><g data-mml-node="mi" transform="translate(4300,0)"><path data-c="1D45B" d="M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z" style="stroke-width: 3;"></path></g></g></g></g></g></svg><mjx-assistive-mml unselectable="on" display="inline" style="top: 0px; left: 0px; clip: rect(1px, 1px, 1px, 1px); -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; position: absolute; padding: 1px 0px 0px 0px; border: 0px; display: block; width: auto; overflow: hidden;"><math xmlns="http://www.w3.org/1998/Math/MathML"><msub><mi>t</mi><mrow data-mjx-texclass="ORD"><mi>p</mi><mi>u</mi><mi>b</mi><mi>l</mi><mi>i</mi><mi>c</mi><mi>a</mi><mi>t</mi><mi>i</mi><mi>o</mi><mi>n</mi></mrow></msub></math></mjx-assistive-mml></mjx-container></th>
         <th class="rightMainHeader">40,000</th>
         <th class="rightMainHeader">1,800</th>
         <th class="rightMainHeader">1,500</th>
         <th class="rightMainHeader">900</th>
      </tr>
  </thead>
   <tbody>
      <tr>
         <td rowspan="2" class="topHeader" style="vertical-align: center;"><br/><mjx-container class="MathJax" jax="SVG" style="direction: ltr; position: relative;"><svg style="overflow: visible; min-height: 1px; min-width: 1px; vertical-align: -0.186ex;" xmlns="http://www.w3.org/2000/svg" width="6.879ex" height="1.756ex" role="img" focusable="false" viewBox="0 -694 3040.6 776" aria-hidden="true"><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><path data-c="1D44F" d="M73 647Q73 657 77 670T89 683Q90 683 161 688T234 694Q246 694 246 685T212 542Q204 508 195 472T180 418L176 399Q176 396 182 402Q231 442 283 442Q345 442 383 396T422 280Q422 169 343 79T173 -11Q123 -11 82 27T40 150V159Q40 180 48 217T97 414Q147 611 147 623T109 637Q104 637 101 637H96Q86 637 83 637T76 640T73 647ZM336 325V331Q336 405 275 405Q258 405 240 397T207 376T181 352T163 330L157 322L136 236Q114 150 114 114Q114 66 138 42Q154 26 178 26Q211 26 245 58Q270 81 285 114T318 219Q336 291 336 325Z" style="stroke-width: 3;"></path></g><g data-mml-node="mo" transform="translate(706.8,0)"><path data-c="3D" d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z" style="stroke-width: 3;"></path></g><g data-mml-node="mn" transform="translate(1762.6,0)"><path data-c="31" d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z" style="stroke-width: 3;"></path><path data-c="2E" d="M78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60Z" transform="translate(500,0)" style="stroke-width: 3;"></path><path data-c="35" d="M164 157Q164 133 148 117T109 101H102Q148 22 224 22Q294 22 326 82Q345 115 345 210Q345 313 318 349Q292 382 260 382H254Q176 382 136 314Q132 307 129 306T114 304Q97 304 95 310Q93 314 93 485V614Q93 664 98 664Q100 666 102 666Q103 666 123 658T178 642T253 634Q324 634 389 662Q397 666 402 666Q410 666 410 648V635Q328 538 205 538Q174 538 149 544L139 546V374Q158 388 169 396T205 412T256 420Q337 420 393 355T449 201Q449 109 385 44T229 -22Q148 -22 99 32T50 154Q50 178 61 192T84 210T107 214Q132 214 148 197T164 157Z" transform="translate(778,0)" style="stroke-width: 3;"></path></g></g></g></svg><mjx-assistive-mml unselectable="on" display="inline" style="top: 0px; left: 0px; clip: rect(1px, 1px, 1px, 1px); -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; position: absolute; padding: 1px 0px 0px 0px; border: 0px; display: block; width: auto; overflow: hidden;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mi>b</mi><mo>=</mo><mn>1.5</mn></math></mjx-assistive-mml></mjx-container></td>
         <td class="leftHeader"><mjx-container class="MathJax" jax="SVG" style="direction: ltr; position: relative;"><svg style="overflow: visible; min-height: 1px; min-width: 1px; vertical-align: -0.025ex;" xmlns="http://www.w3.org/2000/svg" width="0.817ex" height="1.441ex" role="img" focusable="false" viewBox="0 -626 361 637" aria-hidden="true"><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><path data-c="1D461" d="M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z" style="stroke-width: 3;"></path></g></g></g></svg><mjx-assistive-mml unselectable="on" display="inline" style="top: 0px; left: 0px; clip: rect(1px, 1px, 1px, 1px); -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; position: absolute; padding: 1px 0px 0px 0px; border: 0px; display: block; width: auto; overflow: hidden;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mi>t</mi></math></mjx-assistive-mml></mjx-container></td>
         <td>14,304</td>
         <td>652.21</td>
         <td>652.21</td>
         <td>480.4</td>
      </tr>
      <tr>
         <td class="leftHeader">Cumulative <mjx-container class="MathJax" jax="SVG" style="direction: ltr; position: relative;"><svg style="overflow: visible; min-height: 1px; min-width: 1px; vertical-align: -0.023ex;" xmlns="http://www.w3.org/2000/svg" width="1.005ex" height="1.645ex" role="img" focusable="false" viewBox="0 -717 444 727" aria-hidden="true"><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><path data-c="1D6FF" d="M195 609Q195 656 227 686T302 717Q319 716 351 709T407 697T433 690Q451 682 451 662Q451 644 438 628T403 612Q382 612 348 641T288 671T249 657T235 628Q235 584 334 463Q401 379 401 292Q401 169 340 80T205 -10H198Q127 -10 83 36T36 153Q36 286 151 382Q191 413 252 434Q252 435 245 449T230 481T214 521T201 566T195 609ZM112 130Q112 83 136 55T204 27Q233 27 256 51T291 111T309 178T316 232Q316 267 309 298T295 344T269 400L259 396Q215 381 183 342T137 256T118 179T112 130Z" style="stroke-width: 3;"></path></g></g></g></svg><mjx-assistive-mml unselectable="on" display="inline" style="top: 0px; left: 0px; clip: rect(1px, 1px, 1px, 1px); -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; position: absolute; padding: 1px 0px 0px 0px; border: 0px; display: block; width: auto; overflow: hidden;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mi>δ</mi></math></mjx-assistive-mml></mjx-container></td>
         <td>17,669,273.86</td>
         <td>119,349.2729</td>
         <td>89,947.45292</td>
         <td>36,084.73598</td>
      </tr>
      <tr>
         <td rowspan="2" class="topHeader" style="vertical-align: center;"><br/><mjx-container class="MathJax" jax="SVG" style="direction: ltr; position: relative;"><svg style="overflow: visible; min-height: 1px; min-width: 1px; vertical-align: -0.186ex;" xmlns="http://www.w3.org/2000/svg" width="5.119ex" height="1.756ex" role="img" focusable="false" viewBox="0 -694 2262.6 776" aria-hidden="true"><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><path data-c="1D44F" d="M73 647Q73 657 77 670T89 683Q90 683 161 688T234 694Q246 694 246 685T212 542Q204 508 195 472T180 418L176 399Q176 396 182 402Q231 442 283 442Q345 442 383 396T422 280Q422 169 343 79T173 -11Q123 -11 82 27T40 150V159Q40 180 48 217T97 414Q147 611 147 623T109 637Q104 637 101 637H96Q86 637 83 637T76 640T73 647ZM336 325V331Q336 405 275 405Q258 405 240 397T207 376T181 352T163 330L157 322L136 236Q114 150 114 114Q114 66 138 42Q154 26 178 26Q211 26 245 58Q270 81 285 114T318 219Q336 291 336 325Z" style="stroke-width: 3;"></path></g><g data-mml-node="mo" transform="translate(706.8,0)"><path data-c="3D" d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z" style="stroke-width: 3;"></path></g><g data-mml-node="mn" transform="translate(1762.6,0)"><path data-c="32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z" style="stroke-width: 3;"></path></g></g></g></svg><mjx-assistive-mml unselectable="on" display="inline" style="top: 0px; left: 0px; clip: rect(1px, 1px, 1px, 1px); -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; position: absolute; padding: 1px 0px 0px 0px; border: 0px; display: block; width: auto; overflow: hidden;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mi>b</mi><mo>=</mo><mn>2</mn></math></mjx-assistive-mml></mjx-container></td>
         <td class="leftHeader"><mjx-container class="MathJax" jax="SVG" style="direction: ltr; position: relative;"><svg style="overflow: visible; min-height: 1px; min-width: 1px; vertical-align: -0.025ex;" xmlns="http://www.w3.org/2000/svg" width="0.817ex" height="1.441ex" role="img" focusable="false" viewBox="0 -626 361 637" aria-hidden="true"><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><path data-c="1D461" d="M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z" style="stroke-width: 3;"></path></g></g></g></svg><mjx-assistive-mml unselectable="on" display="inline" style="top: 0px; left: 0px; clip: rect(1px, 1px, 1px, 1px); -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; position: absolute; padding: 1px 0px 0px 0px; border: 0px; display: block; width: auto; overflow: hidden;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mi>t</mi></math></mjx-assistive-mml></mjx-container></td>
         <td>14,304</td>
         <td>652.21</td>
         <td>652.21</td>
         <td>480.4</td>
      </tr>
      <tr>
         <td class="leftHeader">Cumulative <mjx-container class="MathJax" jax="SVG" style="direction: ltr; position: relative;"><svg style="overflow: visible; min-height: 1px; min-width: 1px; vertical-align: -0.023ex;" xmlns="http://www.w3.org/2000/svg" width="1.005ex" height="1.645ex" role="img" focusable="false" viewBox="0 -717 444 727" aria-hidden="true"><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><path data-c="1D6FF" d="M195 609Q195 656 227 686T302 717Q319 716 351 709T407 697T433 690Q451 682 451 662Q451 644 438 628T403 612Q382 612 348 641T288 671T249 657T235 628Q235 584 334 463Q401 379 401 292Q401 169 340 80T205 -10H198Q127 -10 83 36T36 153Q36 286 151 382Q191 413 252 434Q252 435 245 449T230 481T214 521T201 566T195 609ZM112 130Q112 83 136 55T204 27Q233 27 256 51T291 111T309 178T316 232Q316 267 309 298T295 344T269 400L259 396Q215 381 183 342T137 256T118 179T112 130Z" style="stroke-width: 3;"></path></g></g></g></svg><mjx-assistive-mml unselectable="on" display="inline" style="top: 0px; left: 0px; clip: rect(1px, 1px, 1px, 1px); -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; position: absolute; padding: 1px 0px 0px 0px; border: 0px; display: block; width: auto; overflow: hidden;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mi>δ</mi></math></mjx-assistive-mml></mjx-container></td>
         <td>152,436,399.5</td>
         <td>536,797.6358</td>
         <td>401,239.6211</td>
         <td>145,114.0593</td>
      </tr>
      <tr>
         <td rowspan="2" class="topHeader" style="vertical-align: center;"><br/><mjx-container class="MathJax" jax="SVG" style="direction: ltr; position: relative;"><svg style="overflow: visible; min-height: 1px; min-width: 1px; vertical-align: -0.186ex;" xmlns="http://www.w3.org/2000/svg" width="6.879ex" height="1.756ex" role="img" focusable="false" viewBox="0 -694 3040.6 776" aria-hidden="true"><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><path data-c="1D44F" d="M73 647Q73 657 77 670T89 683Q90 683 161 688T234 694Q246 694 246 685T212 542Q204 508 195 472T180 418L176 399Q176 396 182 402Q231 442 283 442Q345 442 383 396T422 280Q422 169 343 79T173 -11Q123 -11 82 27T40 150V159Q40 180 48 217T97 414Q147 611 147 623T109 637Q104 637 101 637H96Q86 637 83 637T76 640T73 647ZM336 325V331Q336 405 275 405Q258 405 240 397T207 376T181 352T163 330L157 322L136 236Q114 150 114 114Q114 66 138 42Q154 26 178 26Q211 26 245 58Q270 81 285 114T318 219Q336 291 336 325Z" style="stroke-width: 3;"></path></g><g data-mml-node="mo" transform="translate(706.8,0)"><path data-c="3D" d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z" style="stroke-width: 3;"></path></g><g data-mml-node="mn" transform="translate(1762.6,0)"><path data-c="32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z" style="stroke-width: 3;"></path><path data-c="2E" d="M78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60Z" transform="translate(500,0)" style="stroke-width: 3;"></path><path data-c="35" d="M164 157Q164 133 148 117T109 101H102Q148 22 224 22Q294 22 326 82Q345 115 345 210Q345 313 318 349Q292 382 260 382H254Q176 382 136 314Q132 307 129 306T114 304Q97 304 95 310Q93 314 93 485V614Q93 664 98 664Q100 666 102 666Q103 666 123 658T178 642T253 634Q324 634 389 662Q397 666 402 666Q410 666 410 648V635Q328 538 205 538Q174 538 149 544L139 546V374Q158 388 169 396T205 412T256 420Q337 420 393 355T449 201Q449 109 385 44T229 -22Q148 -22 99 32T50 154Q50 178 61 192T84 210T107 214Q132 214 148 197T164 157Z" transform="translate(778,0)" style="stroke-width: 3;"></path></g></g></g></svg><mjx-assistive-mml unselectable="on" display="inline" style="top: 0px; left: 0px; clip: rect(1px, 1px, 1px, 1px); -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; position: absolute; padding: 1px 0px 0px 0px; border: 0px; display: block; width: auto; overflow: hidden;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mi>b</mi><mo>=</mo><mn>2.5</mn></math></mjx-assistive-mml></mjx-container></td>
         <td class="leftHeader"><mjx-container class="MathJax" jax="SVG" style="direction: ltr; position: relative;"><svg style="overflow: visible; min-height: 1px; min-width: 1px; vertical-align: -0.025ex;" xmlns="http://www.w3.org/2000/svg" width="0.817ex" height="1.441ex" role="img" focusable="false" viewBox="0 -626 361 637" aria-hidden="true"><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><path data-c="1D461" d="M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z" style="stroke-width: 3;"></path></g></g></g></svg><mjx-assistive-mml unselectable="on" display="inline" style="top: 0px; left: 0px; clip: rect(1px, 1px, 1px, 1px); -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; position: absolute; padding: 1px 0px 0px 0px; border: 0px; display: block; width: auto; overflow: hidden;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mi>t</mi></math></mjx-assistive-mml></mjx-container></td>
         <td>14,304</td>
         <td>1,178.45</td>
         <td>652.21</td>
         <td>480.4</td>
      </tr>
      <tr>
         <td class="leftHeader">Cumulative <mjx-container class="MathJax" jax="SVG" style="direction: ltr; position: relative;"><svg style="overflow: visible; min-height: 1px; min-width: 1px; vertical-align: -0.023ex;" xmlns="http://www.w3.org/2000/svg" width="1.005ex" height="1.645ex" role="img" focusable="false" viewBox="0 -717 444 727" aria-hidden="true"><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><path data-c="1D6FF" d="M195 609Q195 656 227 686T302 717Q319 716 351 709T407 697T433 690Q451 682 451 662Q451 644 438 628T403 612Q382 612 348 641T288 671T249 657T235 628Q235 584 334 463Q401 379 401 292Q401 169 340 80T205 -10H198Q127 -10 83 36T36 153Q36 286 151 382Q191 413 252 434Q252 435 245 449T230 481T214 521T201 566T195 609ZM112 130Q112 83 136 55T204 27Q233 27 256 51T291 111T309 178T316 232Q316 267 309 298T295 344T269 400L259 396Q215 381 183 342T137 256T118 179T112 130Z" style="stroke-width: 3;"></path></g></g></g></svg><mjx-assistive-mml unselectable="on" display="inline" style="top: 0px; left: 0px; clip: rect(1px, 1px, 1px, 1px); -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; position: absolute; padding: 1px 0px 0px 0px; border: 0px; display: block; width: auto; overflow: hidden;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mi>δ</mi></math></mjx-assistive-mml></mjx-container></td>
         <td>1,325,576,801</td>
         <td>2,528,099.281</td>
         <td>1,818,056.847</td>
         <td>597,028.0944</td>
      </tr>
      <tr>
         <td rowspan="2" class="topHeader" style="vertical-align: center;"><br/><mjx-container class="MathJax" jax="SVG" style="direction: ltr; position: relative;"><svg style="overflow: visible; min-height: 1px; min-width: 1px; vertical-align: -0.186ex;" xmlns="http://www.w3.org/2000/svg" width="5.119ex" height="1.756ex" role="img" focusable="false" viewBox="0 -694 2262.6 776" aria-hidden="true"><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><path data-c="1D44F" d="M73 647Q73 657 77 670T89 683Q90 683 161 688T234 694Q246 694 246 685T212 542Q204 508 195 472T180 418L176 399Q176 396 182 402Q231 442 283 442Q345 442 383 396T422 280Q422 169 343 79T173 -11Q123 -11 82 27T40 150V159Q40 180 48 217T97 414Q147 611 147 623T109 637Q104 637 101 637H96Q86 637 83 637T76 640T73 647ZM336 325V331Q336 405 275 405Q258 405 240 397T207 376T181 352T163 330L157 322L136 236Q114 150 114 114Q114 66 138 42Q154 26 178 26Q211 26 245 58Q270 81 285 114T318 219Q336 291 336 325Z" style="stroke-width: 3;"></path></g><g data-mml-node="mo" transform="translate(706.8,0)"><path data-c="3D" d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z" style="stroke-width: 3;"></path></g><g data-mml-node="mn" transform="translate(1762.6,0)"><path data-c="33" d="M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z" style="stroke-width: 3;"></path></g></g></g></svg><mjx-assistive-mml unselectable="on" display="inline" style="top: 0px; left: 0px; clip: rect(1px, 1px, 1px, 1px); -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; position: absolute; padding: 1px 0px 0px 0px; border: 0px; display: block; width: auto; overflow: hidden;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mi>b</mi><mo>=</mo><mn>3</mn></math></mjx-assistive-mml></mjx-container></td>
         <td class="leftHeader"><mjx-container class="MathJax" jax="SVG" style="direction: ltr; position: relative;"><svg style="overflow: visible; min-height: 1px; min-width: 1px; vertical-align: -0.025ex;" xmlns="http://www.w3.org/2000/svg" width="0.817ex" height="1.441ex" role="img" focusable="false" viewBox="0 -626 361 637" aria-hidden="true"><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><path data-c="1D461" d="M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z" style="stroke-width: 3;"></path></g></g></g></svg><mjx-assistive-mml unselectable="on" display="inline" style="top: 0px; left: 0px; clip: rect(1px, 1px, 1px, 1px); -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; position: absolute; padding: 1px 0px 0px 0px; border: 0px; display: block; width: auto; overflow: hidden;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mi>t</mi></math></mjx-assistive-mml></mjx-container></td>
         <td>14,304</td>
         <td>1,178.45</td>
         <td>652.21</td>
         <td>652.21</td>
      </tr>
      <tr>
         <td class="leftHeader">Cumulative <mjx-container class="MathJax" jax="SVG" style="direction: ltr; position: relative;"><svg style="overflow: visible; min-height: 1px; min-width: 1px; vertical-align: -0.023ex;" xmlns="http://www.w3.org/2000/svg" width="1.005ex" height="1.645ex" role="img" focusable="false" viewBox="0 -717 444 727" aria-hidden="true"><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><path data-c="1D6FF" d="M195 609Q195 656 227 686T302 717Q319 716 351 709T407 697T433 690Q451 682 451 662Q451 644 438 628T403 612Q382 612 348 641T288 671T249 657T235 628Q235 584 334 463Q401 379 401 292Q401 169 340 80T205 -10H198Q127 -10 83 36T36 153Q36 286 151 382Q191 413 252 434Q252 435 245 449T230 481T214 521T201 566T195 609ZM112 130Q112 83 136 55T204 27Q233 27 256 51T291 111T309 178T316 232Q316 267 309 298T295 344T269 400L259 396Q215 381 183 342T137 256T118 179T112 130Z" style="stroke-width: 3;"></path></g></g></g></svg><mjx-assistive-mml unselectable="on" display="inline" style="top: 0px; left: 0px; clip: rect(1px, 1px, 1px, 1px); -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; position: absolute; padding: 1px 0px 0px 0px; border: 0px; display: block; width: auto; overflow: hidden;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mi>δ</mi></math></mjx-assistive-mml></mjx-container></td>
         <td>11,563,388,612</td>
         <td>12,889,476.7</td>
         <td>8,301,046.207</td>
         <td>2,537,932.77</td>
      </tr>
   </tbody>
</table>

###### Table: The time of implementing black hole, $t$, and maximum cumulative $\delta$ obtained (Cumulative $\delta$; in arbitrary units) for 4 Data sets with varying $b$

### Conclusion and Discussion

#### Conclusion

The above investigations illustrate the fact that **implementing black hole at different times does affect the cumulative $\rho$ obtained at the end of the publication**, thus affecting the time required for publication and efficiency of gaining $\tau$ for growth. Simulation across different data sets also demonstrates the **consistency of implementing black hole at 50% of the publication for optimization**, and the hypothesis that **the duration of publication seems to be independent to the absolute time of implementing the black hole (only the relative duration does).**

**Implementing black hole at different times does not consistently affect the cumulative $\delta$ obtained at the end of the publication.** Calculations across different data sets demonstrate **fluctuating result on the time implementing the black hole.** Graphs 5–8 reveal a fact that **the value of $b$ is a major factor affecting the time for implementing black hole** to obtain maximum cumulative $\delta$, which is different from that by manipulating cumulative rho.

#### Evaluating the Effect of $c_1$, $c_2$, $w_1$, $w_2$, and $w_3$

The above simulations took on a major assumption of a publication that had **the same levels of $c_1$, $c_2$, $w_1$, $w_2$, and $w_3$ throughout**, which allowed the manipulation of cumulative $\rho/\delta$ in a **single independent variable setting** and hence validated the fair comparison among independent variables. However, such assumption was **practically impossible** during the actual situation. As the effect of variables on the cumulative $\rho$ is **complex** and **highly dependent on the activeness of player**, it was also theoretically challenging to simulate the exact effects on all available data I had in my excel. To evaluate the general/rough effects of $c_1$, $c_2$, $w_1$, $w_2$, $w_3$, and $b$, I will explore them **in the view of the equation of $\dot{\rho}$ and $\dot{\delta}$ in-game** and in turn **evaluate the effect of such on the graphs**, hence provide a more refined hypothesis.

1. **The cost of purchasing $c_1$, $c_2$, $w_1$, $w_2$, $w_3$, and $b$ has no effect on the graphs**, as the graphs plot the cumulative $\rho/\delta$, not the $\rho/\delta$ a player have at a specific $t$.

2. **The effect of $c_1$, $c_2$, and $w_1$ will shift the graphs of cumulative $\rho$ upward and rightward** at a non-linear scale, as $\dot{\rho}$ directly depends on $c_1$, $c_2$, and $w_1$.

3. **$c_1$ and $c_2$ has no effect on the graphs of cumulative $\delta$**, as they have no relationship on $\dot{\delta}$.

4. **The effect of $w_1$, $w_2$, and $w_3$ will shift the graphs of cumulative $\delta$ upward and rightward** at a non-linear scale, as $\dot{\delta}$ directly depends on $w_1$, $w_2$, and $w_3$.

5. **The effect of $b$ will shift the graph of cumulative $\rho$ upward at a non-linear scale and cumulative $\delta$ upward at an exponential scale**, as it directly influences $\dot{\delta}$ in an exponential manner and hence $\dot{\rho}$ indirectly.

6. **The effect of shortened time buying the variables will shift the graphs of cumulative $\rho$ and $\delta$ leftward** at a non-linear scale, as it allows an earlier growth for cumulative $\rho$ and $\delta$ in a repeatable manner.

Overall, purchasing $c_1$, $c_2$, $w_1$, $w_2$, $w_3$, and $b$ have an effect of **shifting graphs upward and slightly rightward**, indicating the **implement of black hole is possible to be pushed back slightly for optimization.**

**The above-mentioned effects were later verified by the sim** (with the most optimal strategy implemented by brute-forcing different $t$ for implementing black hole on a pub), which takes into the account of the effects of variable purchases (i.e., $c_1$, $c_2$, $w_1$, $w_2$, $w_3$, and $b$) and usage of level chasing strategy (Using a ratio of approximately 4x in terms of levels for $c_1$ over $c_2$). The duration of a publication, the time of implementing black hole and their relative percentage, $\frac{t_{bh}}{t_{pub}}$, has been calculated and plotted as a graph of relative duration against $\tau$ (Graph 9).

![Graph 9: Relative time of implementing black hole plotted against different $\tau$, with orange horizontal line as 60% line and yellow plots as 30 moving average for relative time](/images/rz-black-hole/graph_9.png)

###### Graph 9: Relative time of implementing black hole plotted against different $\tau$, with orange horizontal line as 60% line and yellow plots as 30 moving average for relative time

The plot supports the **consistency of implementing black hole at 60% of the publication for achieving a more ideal outcome** by optimization of cumulative $\rho$. One point worth noting is that the relative duration for black hole implementation temporarily spiked up upon a $w_3$ and/or $b$ upgrade, indicating a longer publication, and hence a later time for implementing black hole.

#### Evaluating the Actual Time for Implementing Black Hole

Implementing the black hole at the right time is essential for $\rho/\tau$ growth since it fixes $z'$ as well. However, the continuity of the publication duration does not have the same nature of the discreteness of the solution for $z = 0$, which may **lead to suboptimal $z'$ if the hypothesis is strictly followed.**

In response of this, there are also data from [Discord](https://discord.gg/S9UheTC) about $z = 0$ with particularly higher $z'$ as a list. One can consider **selectively setting t with $z = 0$ and high $z'$ as the time of implementing black hole** instead of the theoretical values obtained from the hypothesis. From the graphs above, it can be observed that **selecting a time for implementing black hole that slightly deviates from the hypothesized time minimally affect the cumulative $\rho/\delta$** obtained at the end of the publication.

#### Proposing a Possible New Idle Route for Completion of RZ CT

Base on the discussion and all available data we have at this moment, it may be reasonable to **propose a new idle route of publication** for completion of RZ CT after e600 $\rho$  the general routing will be as follow:

1. **Take an estimate on the duration** of the upcoming publication wish to be idled. **Calculate the hypothesized time** for implementing black hole (i.e., 60% of your publication time. **Do estimate a longer time if a $w_3$ and/or $b$ upgrade is close to your previous publication point).**

2. **Set the time for implementing black hole that is $z = 0$ and has a high $z'$** and is sufficiently close to the hypothesized time calculated from previous step.

3. Start playing the publication with **autobuy all** (as missing $c_1$ and $w_1$ purchases affect the progress heavily if it is missed for a significant portion of time).

4. When the black hole is implemented, **continue to autobuy until the end of publication.**

5. Repeat the progress if the next publication is also designated to be idled.

### Acknowledgement

Lastly, I would like to give a huge thanks to the following people/group of people for assisting the verification of hypothesis and further findings on RZ CT:

- Prop
  - For designing the RZ CT, providing data for processing and verifying the hypothesis, and refining on the accuracy of the hypothesis.

- Hotab, Mathis S.
  - For designing the simulation for RZ CT and suggesting the concept of deviating from theoretical time and selecting $t$ with high $z'$.

- invalid.user_, Megaminx
  - For suggesting the point of assessing the effect of $b$ on cumulative $\rho$ and $\delta$, and bringing up several points in discussion section to investigate with.

- Axiss, lll333, Black Seal, Mathis S., Megamin, Maimai
  - For willing to test my hypothesis with their save and bringing up several points on my hypothesis. (ofc, thanks Maimai for enlightening of RZyoyoyo lol)

- All other people
  - For providing experimental data and providing support whenever I need them.
