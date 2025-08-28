---
title: "Minigames"
subtitle: "How to Solve"
description: "Guide on how to solve by LE★Baldy"
author: "LE★Baldy"
contributors: "Eaux Tacous for the arrow puzzle algorithms and The Amazing Community"
draft: false
order: 9
---

import "embed-yt.njk" as yt

<iframe
  width="560"
  height="315"
  src="https://youtube.com/embed/6NfqiX_WFaM"
  title="YouTube video player"
  loading="lazy"
  allowfullscreen>
</iframe>

## Overall setting

These tips in general are very helpful when starting out and further down the line. These are not required, but do help, some more than others.

Class: breakdown;

| INVIS | 15-Puzzle | Torus | Arrow |
| ----- | --------- | ----- | ----- |
| Visual Scheme       | Fringe   | Insertion | Greyscale + Numbers |
| Hover/Slide Control | Enabled  | Enabled   | -                   |
| Animation           | Disabled | Disabled  | Disabled            |

## Minigame rewards

The amount of stars you get from completing a minigame is determined by your current __dt__ and puzzle difficulty. This reward can be increased by using the Acceleration Button, also known as Accel. These are the base star reward for each difficulty level of each minigame.

Class: breakdown;

| INVIS  | 15-Puzzle | Torus | Arrow |
| ------ | --------- | ----- | ----- |
| Easy   | 1         | 1     | 1     |
| Medium | 3         | 8     | 8     |
| Hard   | 6         | 14    | 14    |
| Expert | -         | -     | 25    |

## 15-Puzzle

### All Difficulties

The algorithm goes as follows:

<ol type="1">
  <li>Solve the top row.</li>
  <li>Solve the left column.</li>
  <li>Repeat Steps 1 and 2 for each additional layer until you reach the last 2x2.</li>
  <li>Solve last 2x2 by picking clockwise or counterclockwise and keep rotating until finish.</li>
  <ol type="a">
    <li>This size does not matter which direction guaranteeing finish in 4 or less full rotations.</li>
    <li>However, in most cases, there is a better direction to spin but is less important than the previous steps.</li>
  </ol>
</ol>

##### This algorithm works for all difficulties and has a greater impact on the larger boards than on the smaller boards.

#### Example

yt.embed('e3devm2D-3s')

## Torus Puzzle

### Easy

The algorithm goes as follows:

<ol type="1">
  <li>Solve each row up to the 2nd number.</li>
    <ol type="a">
      <li>Solve top row for 1 and 2.</li>
      <li>Solve middle row for 4 and 5.</li>
      <li>Solve bottom row for 7 and 8.</li>
    </ol>
  <li>Move the final column up or down to finish.</li>
</ol>

#### Example

yt.embed('e8f1ohtGAW8')

### Medium

The algorithm goes as follows:

<ol type="1">
  <li>Solve each row until the last column.</li>
  <ol type="a">
    <li>Solve first row for 1 2 3 4.</li>
    <li>Solve second row for 6 7 8 9.</li>
    <li>Continue solving like a and b for the remaining rows.</li>
  </ol>
  <li>Solve right column with swaps.</li>
  <ol type="a">
    <li>Find a number in the column that is in the wrong position.</li>
    <li>Move the piece into your row left.</li>
    <li>Move this piece from your row into the correct position.</li>
    <li>Repeat a through c until all pieces are in the correct position.</li>
  </ol>
  <li>Move the right column until up or down until solved.</li>
</ol>

##### Be careful to not end up with a mixed up row (ex: 18 19 15 16) after swapping.

#### Example

yt.embed('6mQNMKwsOi8')

### Hard

The algorithm goes as follows:

<ol type="1">
  <li>Solve each row until the last column.</li>
  <ol type="a">
    <li>Solve first row for 1 2 3 4 5.</li>
    <li>Solve second row for 7 8 9 10 11.</li>
    <li>Continue solving like a and b for the remaining rows.</li>
  </ol>
  <li>Solve last column parity case.</li>
  <ol type="a">
    <li>Find a number in the column that is in the wrong position.</li>
    <li>Do repeated swaps of those numbers by following this.</li>
    <ol type="i">
      <li>Pick which numbers you are going to swap.</li>
      <li>Move the top number into the row next to it.</li>
      <li>Move the column up to reach the bottom number.</li>
      <li>Insert the bottom number into the row next to the top number.</li>
      <li>Repeat ↓ ← ↑ ← until numbers are successfully swapped.</li>
    </ol>
    <li>Repeat b until that number is in the correct position.</li>
    <li>Repeat a through c until all numbers are in the correct position.</li>
  </ol>
  <li>Move the last column up or down until solved.</li>
</ol>

#### Example

yt.embed('6NfqiX_WFaM')

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
  <li>Solve bottom row the same way but using the middle row.</li>
  <li>Using the top row, finish the solve.</li>
</ol>

#### Example

yt.embed('p0Jr52NlhFw'}

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
  <li>Solve the bottom row the same way but by using the bottom row itself.</li>
  <li>Using the first and second row, finish the solve.</li>
</ol>

##### Tip: When you solve during step 2, tap the first row the same number of times as the bottom row. You can then use row 2 to finish the solve.

#### Example

yt.embed('n1lXPOeouT4')

### Propagation (for Hard and Expert)

The algorithm goes as follows:

<ol type="1">
  <li>Solve the top row by tapping tiles directly below the row.</li>
  <ol type="a">
    <li>Solve the center tile.</li>
    <li>Solve the tile to the left of the center tile.</li>
    <li>Solve the tile two spaces to the left of the center tile.</li>
    <li>Solve the tile three spaces to the left of the center tile.</li>
    <li>Repeat steps b-d but to the right of the center tile.</li>
  </ol>
  The top row should now be entirely filled with 1s.
  <li>Repeat step 1 for every row until the bottom row (don't solve the bottom row yet).</li>
</ol>

##### To verify there is no mistake:

- When you are done, your board will be symmetric.
- The two tiles adjacent to the bottom center tile will always be 1 or 4.

#### Example

yt.embed('wedx6RXGVz8')

### Hard and Expert

You will want to read [how to propagate](/guides/asd/#propagation-for-hard-and-expert) before continuing. The algorithm goes as follows:

<ol type="1">
  <li>Propagate.</li>
  <li>Label the bottom right cells (from left to right): <em>A</em>, <em>B</em>, <em>C</em>, <em>D</em>. Label the top right cells (from left to right): <em>a</em>, <em>b</em>, <em>c</em>, <em>d</em>. We will be tapping the top row to encode the bottom row onto it.
  <ol type="a">
    <li>Tap <em>a</em> so that a is the same as <em>C</em>.</li>
    <li>Tap <em>b</em> and <em>d</em> the number of times you will need to solve <em>C</em>.</li>
    <li>Tap <em>a</em> the number of times you would need to solve <em>D</em>.</li>
    <li>If <em>B</em> + <em>D</em> is odd, tap <em>c</em> three times (once in Hard). Otherwise, skip this step.</li>
  </ol>
  <li>Propagate from top once more to finish the solve.</li>
</ol>

#### Example

yt.embed('p073qSqL7EU')

#### Hard Lookup Table

Because Hard Arrow only has 8 possible end cases, it is practical to learn and memorize the 8 optimal tapping solutions for each case. Obviously one of the 8 cases is already solved so this really leaves on 7 cases. These are not hard to learn and are learned best through just simply playing Hard Arrow more. Below are the 8 cases.

![Hard Arrow Solution Lookup](/images/hard-arrow-lookup.png)

Video of solves for each case:

yt.embed('dFGlcaV_GNk')
