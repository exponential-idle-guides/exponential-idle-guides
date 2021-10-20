---
title: "Minigames: How to Solve"
description: "Guide on how to solve by LE★Baldy"
author: "LE★Baldy"
contributors: "Eaux Tacous for the arrow puzzle algorithms and The Amazing Community"
draft: true
order: 8
---

## Overall Tips
These tips in general are very helpful when starting out and further down the line. These are not required, but do help, some more than others.
<ol type="1">
  <li>Color Scheme</li>
  <ol type="a">
    <table>
      <tr>
        <th>15-Puzzle</th>
        <th>Torus Puzzle</th>
        <th>Arrow Puzzle</th>
      </tr>
      <tr>
        <td>Emil</td>
        <td>Tobias</td>
        <td>Linus</td>
      </tr>
    </table>

<style>
  .beta {
    text-align: center  
  }
  .beta .invisible {
      border: none;
      background-color:transparent;
  }
  .beta .leftHeader {
      font-weight: bold;
      background-color:#303030;
  }
  .beta th {
      background-color:#303030;
      text-align: center  
  }
</style>

<table class="beta">
    <thead>
        <tr>
            <th class="beta invisible"></th>
            <th>15-Puzzle</th>
            <th>Torus</th>
            <th>Arrow</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="leftHeader"><b>Visual Scheme</b></td>
            <td>Fringe</td>
            <td>Last Row (change to ingame)</td>
            <td>Numbers</td>
        </tr>
        <tr>
            <td class="leftHeader">Movement Style</td>
            <td>Slide</td>
            <td>Free-scroll</td>
            <td>N/A</td>
        </tr>
    </tbody>
</table>
    </table>
  </ol>
  <li>Solve bottom row the same way but using the middle row. Then using the top row, finish the solve.</li>
</ol>

## 15-Puzzle
### Easy
The algorithm goes as follows:
<ol type="1">
  <li></li>
  <ol type="a">
    <li>Make the center tile of a row the same as one edge tile.</li>
    <li>Make the row all the same number.</li>
    <li>Solve the row.</li>
  </ol>
  <li>Solve bottom row the same way but using the middle row. Then using the top row, finish the solve.</li>
</ol>


## Torus Puzzle



## Arrow Puzzle
### Easy
The algorithm goes as follows:
<ol type="1">
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



#### Hard and Expert
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