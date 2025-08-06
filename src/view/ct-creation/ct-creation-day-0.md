---
title: "Day 0: Introduction to Custom Theory Creation"
description: "Introduction to custom theory creation."
author: "prop"
contributors: "the Amazing Community"
order: 0
---

Greetings. So you want to kickstart your game-dev career by creating a mod for your beloved game? Or perhaps you really want to talk about your favourite maths topic, and you have decided that the best way to tell everyone about it is to spoon-feed an abnormally large amount of content, enough to chew through an entire school year?

Enter Exponential Idle custom theories, where the graph makes your family think you're investing in stocks, and the use of Greek letters is enough to send you into a doctor program in linguistics (or a frenzy, which usually comes first).

In this week-long guide, you will be shown the process of creating a simple custom theory. You can either follow the steps exactly, or you can program your own ideas while reading the guide in parallel.

### Prerequisites

1. **JavaScript**

Before you engage with this guide, a basic understanding of JavaScript is required, although keep in mind that custom theory development does not utilise async/await, nor does it support modules, so you may skip through these concepts. A tutorial that I can recommend is at [javascripttutorial.net](https://www.javascripttutorial.net/). For a quick understanding, read from Section 1 to 5, while Sections 6 to 8 can be read later, and then the rest.

2. **Exponential Idle Theory SDK**

The next important tool to acquire is the Exponential Idle [Theory SDK](https://github.com/conicgames/theory-sdk), which provides us with a custom theory API, and allows us to send a theory right to your device in real-time. Without the SDK, the only way to fetch theories would be to host your file on a website, and if it happens to be GitHub, it could take a few minutes to refresh whenever you make a commit.

3. **Source control**

Speaking of commits, while the guide does not assume prior knowledge of source control systems such as [Git](https://git-scm.com/), learning source control is highly recommended. By setting up a repository for your theory, you can keep track of your its history, split it into alternate realities, revert catastrophes that can't be undone with any **Ctrl+Z**, and do so much more.

4. **LaTeX**

[LaTeX](https://www.latex-project.org/) is the typesetting system used by Exponential Idle to render the equations. Keep in mind however, because the game's LaTeX does not include any packages, any tutorial that requires packages such as **amsmath** or **xfrac** is not going to be applicable. Try to take a look around to see how LaTeX is usually written.

5. **A code editor**

I am a scrub. I use [Visual Studio Code](https://code.visualstudio.com/).

Other editors include:
- [Sublime Text](https://www.sublimetext.com/)
- [Notepad++](https://notepad-plus-plus.org/)
- [Vim](https://www.vim.org/) *or something*

### Aftermath

Now that you have a grip on the basics and have installed the necessary tools, the next step would be to check out what a custom theory may look like, and for that, I shall see you [tomorrow](../ct-creation-day-1/).
