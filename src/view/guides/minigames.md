---
title: "Minigames: How to Solve"
description: "Guide on how to solve by LE★Baldy"
author: "LE★Baldy"
contributors: "Eaux Tacous for the arrow puzzle algorithms and The Amazing Community"
draft: true
order: 8
---

## Overall settings

These tips in general are very helpful when starting out and further down the line. These are not required, but do help, some more than others.

<table class="newwords">
    <thead>
        <tr>
            <th class="invisible"></th>
            <th>15-Puzzle</th>
            <th>Torus</th>
            <th>Arrow</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="leftHeader">Visual Scheme</td>
            <td>Fringe</td>
            <td>Insertion</td>
            <td>Grayscale+Numbers</td>
        </tr>
        <tr>
            <td class="leftHeader">Hover/Slide Control</td>
            <td>Enabled</td>
            <td>Enabled</td>
            <td>-</td>
        </tr>
        <tr>
            <td class="leftHeader">Animation</td>
            <td>Disabled</td>
            <td>Disabled</td>
            <td>Disabled</td>
        </tr>
    </tbody>
</table>

## Minigame rewards

These are the base star reward for each difficulty level of each minigame.

<table class="newnumbers">
    <thead>
        <tr>
            <th class="invisible"></th>
            <th>15-Puzzle</th>
            <th>Torus</th>
            <th>Arrow</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="leftHeader">Easy</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
        </tr>
        <tr>
            <td class="leftHeader">Medium</td>
            <td>3</td>
            <td>8</td>
            <td>8</td>
        </tr>
        <tr>
            <td class="leftHeader">Hard</td>
            <td>6</td>
            <td>14</td>
            <td>14</td>
        </tr>
        <tr>
            <td class="leftHeader">Expert</td>
            <td>-</td>
            <td>-</td>
            <td>25</td>
        </tr>
    </tbody>
</table>

## 15-Puzzle

### All Difficulties

The algorithm goes as follows:
<ol type="1">
  <li>Solve the top row.</li>
  <li>Solve the left column.</li>
  <li>Repeat Steps 1. and 2. for each additional layer until you reach the last 2x2.</li>
  <li>Solve last 2x2 by picking clockwise or counterclockwise and keep rotating until finish.</li>
  <ol type="a">
    <li>This size does not matter which direction gaurunteeing finish in 4 or less full rotations.</li>
    <li>However, in most cases, there is a better direction to spin but is less important than the previous steps.</li>
  </ol>
</ol>

##### This algorithm works for all difficulties and is a greater impact on the larger boards than smaller boards. 

#### Example


## Torus Puzzle

### Easy



### Medium



### Hard


## Arrow Puzzle

### Easy

The algorithm goes as follows:
<ol type="one">
  <li>Solve top row then the middle tapping tiles below the row.</li>
  <ol type="a">
    <li>Make the center tile of a row the same as one edge tile.</li>
    <li>Make the row all the same number.</li>
    <li>Solve the row.</li>
  </ol>
  <li>Solve bottom row the same way but using the middle row. Then using the top row, finish the solve.</li>
</ol>

#### Example



### Medium

The algorithm goes as follows:
<ol type="1">
  <li>Solve the top three rows after another tapping tiles below the row.</li>
  <ol type="a">
    <li>Make the center tile the same as its adjacent edge tile.</li>
    <li>Make the other center tile the same as its adjacent edge tile.</li>
    <li>Solve the left two tiles by pressing.</li>
    <li>Solve the right two tiles by pressing.</li>
  </ol>
  <li>Solve the bottom row the same way but by using the bottom row itself. Then using the first and second row, finish the solve.</li>
</ol>

##### Tip: When you solve during step 2, tap the first row the same number of times as the bottom row. You can then use row 2 to finish the solve.

#### Example

### Propogation (for Hard and Expert)

The algorithm goes as follows:
<ol type="1">
  <li>Solve the rop row tapping tiles directly below the row.</li>
  <ol type="a">
    <li>Solve the center tile.</li>
    <li>Solve the tile to the left of the center tile.</li>
    <li>Solve the tile two spaces to the left of the center tile.</li>
    <li>Solve the tile three spaces to the left of the center tile.</li>
    <li>Repeat steps b-d but to the right of the center tile.</li>
  </ol>
  <li>Repeat step 1 for every row until the bottom row (don't solve bottom row).</li>
</ol>

##### To verify there is no mistake:
- When you are done, your board will be symmetric.
- The two tiles adjacent to the bottom center tile wll always be 1 or 4.

#### Example



### Hard and Expert

You will want to read [how to propogate](https://exponential-idle-guides.netlify.app/guides/minigames/#propogation-for-hard-and-expert) before continuing. The algorithm goes as follows:
<ol type="1">
  <li>Propogate.</li>
  <li>Label the bottom right cells (from left to right): <em>A</em>, <em>B</em>, <em>C</em>, <em>D</em>. Label the top right cells (from left to right): <em>a</em>, <em>b</em>, <em>c</em>, <em>d</em>. We will be tapping the top row to encode the bottom row onto it.
  <ol type="a">
    <li>Tap <em>a</em> so that a is the same as <em>C</em>.</li>
    <li>Tap <em>b</em> and <em>d</em> the number of times you will need to solve <em>C</em>.</li>
    <li>Tap <em>a</em> the number of times you would need to solve <em>D</em>.</li>
    <li>If <em>B</em> + <em>D</em> is odd, tap <em>c</em> three times (once in Hard). Otherwise, skip this step.</li>
  </ol>
  <li>Propogate.</li>
</ol>

#### Example