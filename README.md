Guides for [Exponential Idle](https://conicgames.github.io/exponentialidle/)
hosted at [https://exponential-idle-guides.netlify.app/](https://exponential-idle-guides.netlify.app/).

The guide's content has been written by Snaeky and LE⭐Baldy with
contributions from the Exponential Idle community. The website
was created by [TickleThePanda](https://ticklethepanda.dev).

The site is built using [11ty](https://www.11ty.dev) and hosted on
[Netlify](https://www.netlify.com/).

### Prerequisites

Pre-requisites to build and develop this site:
 - Install [Node](https://nodejs.org/en/)
 - Add Node to your PATH

### Building

To build to website, run:
```
npm run build
```

This will build the contents of the site to `_site`.

### Developing

For an easy development workflow, run:
```
npm run dev
```

This will build the site, run a server on port 8000, and rebuild the
changes when anything changes. You will need to refresh the page to see
the changes.

Once you have run the command, visit `http://localhost:8000`

#### Updating the guides

Each guide file has a few different elements:
 - Front matter data which describes some things about the page. This is
   written in yaml format.
   ```
   ---
   title: <title>
   author: <author>
   contributors: <contributors>
   order: <relative order>
   ---
   ```
 - [Markdown](https://daringfireball.net/projects/markdown/) content,
   written below the second `---`
 - Mathematical formula using [MathJax tex](https://docs.mathjax.org/en/v2.7-latest/tex.html):
   - Inline using `\\(` to open and `\\)` to close
   - On its own lines using `\\[` and `\\]`

If you want to create a new guide, add a new `.md` file in the
`src/view/guides` directory with the header content as above, replacing
`<>` as appropriate. The content is written below the second `---`.

### Adding a translation

Use [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language
codes as the key.

1. Update all files in the `src/_data` with your language key and associated values.
2. Make a new directory `src/<lang>`.
3. Add a `src/<lang>/<lang>.json` file with the content:
   ```json
   {
     "locale": "<lang>"
   }
   ```
4. Add a guides file in `src/<lang>/guides.json`, making sure to update the `<lang>`
   value.
   ```json
   {
     "tags": "guide_<lang>",
     "layout": "guide"
   }
   ```
5. Copy the `src/en/index.njk` to `src/<lang>/index.njk` and translate the content.
6. Copy the `src/en/guides/*.md` to `src/<lang>/guides/` and translate the content.

### License

These are the licenses for this website:
 - Guide content copyright LE★Baldy & Snaeky
 - Website code licensed under MIT
 - `src/image/sun.svg` is licensed under [Apache License, Version 2.0](https://www.apache.org/licenses/LICENSE-2.0) by Google Inc.


