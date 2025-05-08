Guides for [Exponential Idle](https://conicgames.github.io/exponentialidle/)
hosted at [https://exponential-idle-guides.netlify.app/](https://exponential-idle-guides.netlify.app/).

The guide's content has been written by [Snaeky](https://github.com/Snaeks) and [LE★Baldy](https://github.com/LEBaldy) with
contributions from the Exponential Idle community and the rest of the [Exponential Idle Guides Team](https://github.com/orgs/exponential-idle-guides/people).
The website was created by [TickleThePanda](https://ticklethepanda.dev).

The site is built using [11ty](https://www.11ty.dev) and hosted on
[Netlify](https://www.netlify.com/).

[![Netlify Status](https://api.netlify.com/api/v1/badges/fb7747da-e60f-4e04-b0da-dcd4eb597e08/deploy-status)](https://app.netlify.com/sites/exponential-idle-guides/deploys)

# Prerequisites

Pre-requisites to build and develop this site:

- Install [Node](https://nodejs.org/en/)
- Add Node to your PATH

# Building

To build to website, run:

```text
npm run build
```

This will build the contents of the site to `_site`.

# Developing

For an easy development workflow, run:

```text
npm run dev
```

This will build the site, run a server on port 8000, and rebuild the
changes when anything changes. You will need to refresh the page to see
the changes.

Once you have run the command, visit `http://localhost:8000`

## Updating the guides

Each guide file has a few different elements:

- Front matter data which describes some things about the page. This is
  written in yaml format.

Example is below, but it can vary depending on guide type.

```text
---
title: <title>
author: <author>
contributors: <contributors>
order: <relative order>
---
```
  
- [Markdown](https://daringfireball.net/projects/markdown/) content,
  written below the second `---`
- Mathematical formula using [MathJax tex](https://docs.mathjax.org/en/latest/index.html) using :
  - Inline using `$` to open and to close. Can also use `\\(` to open and `\\)` to close.
  - On its own lines using `$$` to open and to close. Can also use `\\[` to open and `\\]` to close.

If you want to create a new guide, add a new `.md` file in the
`src/view/guides` directory with the header content as above, replacing
`<>` as appropriate. The content is written below the second `---`.
There is also `src/view/guide-extensions`, `src/view/ranking-news`, and `src/view/season-news`
directories for guide extensions, rankings, and seasons respectively.

Please follow the format within `---` for each respectively type of guide
(model off other `.md` in same directory).

## Custom Markdown Table Syntax

### Vanilla Markdown reference

A normal markdown table looks as following:

```html
| Header | Goes | Here |
| ------ | ---- | ---- |
| Rows   | Go   | Here |
```

with equivalent html:

```html
<table>
  <thead>
    <tr>
      <th>Header</th>
      <th>Goes</th>
      <th>Here</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Rows</td>
      <td>Go</td>
      <td>Here</td>
    </tr>
  </tbody>
</table>
```

### Parameter paragraph

Before you even type the table, it will be preceeded by an (optional) paragraph with parameters one can add or not. This will be 1 paragraph, `<p>`, element after building site. It can include line-breaks.

The following can be in any order. You can also exclude some (or all) and it still work. Excluding `Class` will result in a no class table. Excluding all will not result in errors as there is detection built-in to the RegEx.

`last_row` is a boolean whether to add the `last_row` class to the... last row of the table. This simply adds a bottom border on the table.

`align` gives choice of `left`, `middle`, and `right` alignment of the table (default `middle`).

```html
Caption: caption;
ID: id;
Class: class(es);
last_row: True/False (any capitalization);
align: left/right/middle;
```

### Cell modifiers

Then comes the table syntax itself.

Within each element input, you can preface it with some modifiers as to change. The baseline syntax is:

```html
[modifiers]actual table cell contents
modifier_name = "modifier_values";    // note the `;`
```

The implemented modifiers are discussed below. You can have spaces between parts and it functions. Only one of each modifier is allowed.

`classes` and `style` take the same formatting as regular html (and can handle multiple between the `"`).

`type` changes the type of the element to the designated type. This is normally `td` ↔ `th`, but this isn't restricted.

### Shorthands
There are a few shorthands to inject built-in (all can also be `th`).

#### Cell shorthands

```html
| INVIS | → <td class="invisible"></td>  // Transparent/matching background w/ no contents used for spacing
| ARROW | → <td class="arrow">→</td>     // Note the →
| CHECK | → <td>✓</td>
| REDX | or | RED_X | → <td>X</td>
| OR | → <td><strong>Or</strong></td>    // Used primarily for milestone routing
```

These can all be prefaced by the `[additional modifiers]` and work. Ex: `| [type="th"]INVIS |` results in an invisible element changed to a `th`.

#### Modfier shorthands

There are also shorthands within the modifiers (discussed earlier). These are as listed:

```html
| [FOOT;]text | or | [FOOTER;]text |     // Moves the table row into the tfoot of the table (creates if not present).
                                         // Note that you only need 1 of these per row.
| [PERM;]text | → <td class="perm_upg">text</td>  // Used for red text on CT permenant upgrades for milestone routing
```

These DO NOT require the `modifier_name = modifier_value;` syntax and simply follow `modifier_shorthand;` syntax.

### Colspan

In addition to the above, you can also designate a `colspan` to be added. `rowspan` is not implemented.
**Note that cells will only merge (into a rowspan) with any empty cells to their left (not right).**
Empty cells cannot include any of the modifier syntax, pre-existing classes, pre-existing ids, etc.
Empty cells must be the same type as the cell they are merging into. Ex: `td` + `td` :yes:. `th` + `td` :no:.
Colspan Example Syntax:

```html
| Header | Goes | Here    |
| ------ | ---- | ------- |
|        |      | colspan |
bottom row → <td colspan="3">colspan<td>
```

#### Note: LaTex syntax through Mathjax (as we use) DOES work within these tables, but still does not within the pure html tables.

### Example:

#### Custom syntax

```html
Caption: Some caption idfk;
ID: example-id;
Class: breakdown-simplified;

| INVIS         | Name    | INVIS         | Name   |
| -----         | ----    | -----         | ----   |
| [type="th";]w | w       | [type="th";]x | x      |
| [type="th";]y | y       | [type="th";]z | z      |
| | | | [class="category";type="td";style="color:red;";]Example Category |
| ↓INVIS↓       | ↓ARROW↓ | ↓CHECK↓       | ↓REDX↓ |
| INVIS         | ARROW   | CHECK         | REDX   |
```

#### Equivalent HTML

```html
<table id="example-id" class="breakdown-simplified">
  <caption>Some caption idfk</caption>
  <thead>
    <tr>
      <th class="invisible"></th>
      <th>Name</th>
      <th class="invisible"></th>
      <th>Name</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>w</th>
      <td>w</td>
      <th>x</th>
      <td>x</td>
    </tr>
    <tr>
      <th>y</th>
      <td>y</td>
      <th>z</th>
      <td>z</td>
    </tr>
    <tr>
      <td colspan="4" class="category" style="color:red !important;">Ex­ample Cat­egory</td>
    </tr>
    <tr>
      <td>↓IN­VIS↓</td>
      <td>↓AR­ROW↓</td>
      <td>↓CHECK↓</td>
      <td>↓REDX↓</td>
    </tr>
    <tr class="last_row">
      <td class="invisible"></td>
      <td class="arrow">→</td>
      <td>:heavy_check_mark:</td>
      <td>:x:</td>
    </tr>
  </tbody>
</table>
```

![alt text](/src/images/example_custom_table.png)

## Custom HTML Tags

There are a number of new tags to use as shorthands (primarily used for coloring text).

### New Syntax

```html
<green>Text</green>
<red>Text</red>
<blue>Text</blue>
<orange>Text</orange>
<bw>Text</bw> OR <blackwhite>Text</blackwhite>
```

### Equivalent Syntax

```html
<span style="color:#41AD21;">Text</span>                        // green
<span style="color:var(--palette-stroke-warning);">Text</span>  // red
<span style="color:#4665F0;">Text</span>                        // blue
<span style="color:#FF9600;">Text</span>                        // orange
<span style="color:var(--black-white);">Text</span>             // black in light mode. white in dark mode.
```

# License

These are the licenses for this website:

- Guide content copyright LE★Baldy & Snaeky
- Website code licensed under MIT
- `src/image/sun.svg` is licensed under [Apache License, Version 2.0](https://www.apache.org/licenses/LICENSE-2.0) by Google Inc.
