const { mathjax } = require('mathjax-full/js/mathjax.js');
const { TeX } = require('mathjax-full/js/input/tex.js');
const { SVG } = require('mathjax-full/js/output/svg.js');
const { jsdomAdaptor } = require('mathjax-full/js/adaptors/jsdomAdaptor.js');
const { RegisterHTMLHandler } = require('mathjax-full/js/handlers/html.js');
const { AllPackages } = require('mathjax-full/js/input/tex/AllPackages.js');
const { JSDOM } = require('jsdom');

// Temporary token replacements to bypass md → html parsing messing with MathJax
const LaTeX_replacements = {
  "LATEXASTERISK": "*",
  "LATEXUNDERSCORE": "_",
  "LATEXTILDE": "~",
  "LATEXVERTICALBAR": "|",
  "LATEXMINUS": "-",
  "LATEXPLUS": "+",
  "LATEXGT": ">",
  "LATEXLIST": "",
  "LATEXBACKTICK": "`",
  "LATEXSPACECOMMA": "\\,"
};
const LaTeX_replacement_regex = Object.keys(LaTeX_replacements).join("|");
const block_math_regex = /\$\$(?:[^\$]*\$[^\$]+|\s*\\\$|[^\$])+\$\$/gmu;
const wrap = (str) => '<span class="MathJax">' + str + '</span>';
const wrap_regex = String.raw`< *span +class *= *" *MathJax *" *>(.*)<\/ *span *>`;

// Custom Macros
const LaTeXMacros = {
  RR: '{\\mathbb{R}}',
  bold: ['{\\mathbf{#1}}', 1],    // Macro with 1 argument
  ee: ['{\\times 10^{#1}}', 1],   // Custom scientific notation
  joinrel: '{\\mathrel{\\mkern-3mu}}',
  relbar: '{-}',
  perm: ['{{}_{#1}\\!P_{#2}}', 2],
  extrarightarrow: ['{\\xrightarrow{\\hspace{#1}}}', 1],
  extraleftarrow: ['{\\xleftarrow{\\hspace{#1}}}', 1],
  fractext: ['{\\text{$\\frac{\\text{#1}}{\\text{#2}}$}}', 2]
};

function extract_inline_math(text) {
  const matches = [];
  let isInside = false;
  let braceDepth = 0;
  let currentMatch = "";
  let startIndex = -1;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (!isInside) {
      if (char === '$' && text[i-1] !== '\\') {
        isInside = true;
        startIndex = i;
        currentMatch = "$";
      }
    } else {
      currentMatch += char;

      if (char === '{') {
        braceDepth++;
      } else if (char === '}') {
        braceDepth = Math.max(0, braceDepth - 1);
      } else if (char === '$' && braceDepth === 0) {
        matches.push(currentMatch);
        isInside = false;
        currentMatch = "";
      } else if (char === '\n') {
        isInside = false;
        braceDepth = 0;
        currentMatch = "";
      }
    }
  }
  return matches;
}

function math_replace (config) {
  config.addPreprocessor("math-replace", "md", (data, content) => {
    // This runs on the RAW markdown string before any parsing
    if (typeof content === "string" 
      && (/[^\$]\$[^\$]+\$[^\$]|\$\$[^\$]+\$\$|\\\((?:[^\\].|\\[^\)])*\\\)|\\\[(?:[^\\][^\]])\\\[/.test(content))
    ) {
      const block_math_arr = content.match(block_math_regex);

      block_math_regex.lastIndex = 0;
      let counter = -1;
      const block_math_replaced = block_math_arr === null 
        ? content
        : content.replace(block_math_regex, () => {
          counter++;
          return `LATEX_BLOCK_MATH_${counter}`
        })

      let output_content = block_math_replaced;
      const inline_math = extract_inline_math(output_content);
      inline_math.forEach((str) => {
        output_content = output_content.replace(
          str,
          wrap(str
            .replace(/((?:(?:^|[^\\])\\(?:\\{2})*\\)|[^\\])\*/g, "$1LATEXASTERISK")
            .replace(/((?:(?:^|[^\\])\\(?:\\{2})*\\)|[^\\])_/g, "$1LATEXUNDERSCORE")
            .replace(/((?:(?:^|[^\\])\\(?:\\{2})*\\)|[^\\])~/g, "$1LATEXTILDE")
            .replace(/((?:(?:^|[^\\])\\(?:\\{2})*\\)|[^\\])\|/g, "$1LATEXVERTICALBAR")
            .replace(/((?:(?:^|[^\\])\\(?:\\{2})*\\)|[^\\])-/g, "$1LATEXMINUS")
            .replace(/((?:(?:^|[^\\])\\(?:\\{2})*\\)|[^\\])\+/g, "$1LATEXPLUS")
            .replace(/((?:(?:^|[^\\])\\(?:\\{2})*\\)|[^\\])`/g, "$1LATEXBACKTICK")
            .replace(/((?:(?:^|[^\\])\\(?:\\{2})*\\)|[^\\])\\,/g, "$1LATEXSPACECOMMA")
          )
        );
      });

      if (block_math_arr !== null) {
        block_math_arr.forEach((str, i) => {
          output_content = output_content.replace(
            `LATEX_BLOCK_MATH_${i}`, 
            wrap(str
              .replace(/(\\\\[\r\n\f\v]+)/g, "\\\\$1")
              .replace(/((?:(?:^|[^\\])\\(?:\\{2})*\\)|[^\\])\*/g, "$1LATEXASTERISK")
              .replace(/((?:(?:^|[^\\])\\(?:\\{2})*\\)|[^\\])_/g, "$1LATEXUNDERSCORE")
              .replace(/((?:(?:^|[^\\])\\(?:\\{2})*\\)|[^\\])~/g, "$1LATEXTILDE")
              .replace(/((?:(?:^|[^\\])\\(?:\\{2})*\\)|[^\\])\|/g, "$1LATEXVERTICALBAR")
              .replace(/((?:(?:^|[^\\])\\(?:\\{2})*\\)|[^\\])-/g, "$1LATEXMINUS")
              .replace(/((?:(?:^|[^\\])\\(?:\\{2})*\\)|[^\\])\+/g, "$1LATEXPLUS")
              .replace(/([\n\f]\s*)>([^\n\f\v]*)/g, "$1LATEXGT$2")
              .replace(/([\n\f]\s*)(\d[\.\)] )([^\n\f\v]*)/g, "$1LATEXLIST$2$3")
              .replace(/((?:(?:^|[^\\])\\(?:\\{2})*\\)|[^\\])`/g, "$1LATEXBACKTICK")
              .replace(/((?:(?:^|[^\\])\\(?:\\{2})*\\)|[^\\])\\,/g, "$1LATEXSPACECOMMA")
            )
          );
        });
      }
      return output_content
    }
    return content
  });
}

function MathJax (config, exclusions) {
  // Initialize MathJax
  const adaptor = jsdomAdaptor(JSDOM);
  RegisterHTMLHandler(adaptor);

  // Setup Mathjax packages, macros, and delimiters
  const tex = new TeX({ 
    packages: [...AllPackages, 'base', 'ams', 'newcommand', 'configmacros', 'color', 'physics', 'float', 'setspace', 'mathptmx', 'amsmath', 'tikz', 'xspace', 'amssymb', 'amsthm', 'enumitem', 'gensymb', 'mathtools', 'multicol', 'multirow', 'hhline', 'nicematrix', 'listings', 'ifthen', 'graphicx', 'pgfplotstable', 'pgfplots'],
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    displayMath: [['$$', '$$'], ['\\[', '\\]']],
    macros: LaTeXMacros
  });
  const svg = new SVG({ fontCache: 'local' });

  config.addTransform("mathjax", async function(content, outputPath) {
    if (!exclusions.includes(outputPath)
      && this.page.outputPath 
      && this.page.outputPath.endsWith(".html") 
      && (/[^\$]\$[^\$]+\$[^\$]|\$\$[^\$]+\$\$|\\\((?:[^\\].|\\[^\)])*\\\)|\\\[(?:[^\\][^\]])\\\[/.test(content))
    ) {
      const restored_content = content
        .replace(
          new RegExp(LaTeX_replacement_regex, "gm"),
          (matched) => LaTeX_replacements[matched])
        .replace(
          new RegExp(wrap_regex, "gu"),
          "$1"
        );
      // Create DOM and document
      const dom = adaptor.parse(restored_content);
      const html = mathjax.document(dom, {
          InputJax: tex,
          OutputJax: svg,
      });

      // Render the math
      html.render();

      // Check if math was found
      // If not, return original content
      if (Array.from(html.math).length === 0) {return content;}

      // Return the rendered content
      return (
        adaptor.doctype(html.document) + "\n" +
        adaptor.outerHTML(adaptor.root(html.document))
      );
    }
    return content;
  });
}

module.exports = function (config, exclusions) {
  math_replace(config);
  MathJax(config, exclusions);
};