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
const wrap = (str, type) => {
  const replaced_backticks = str.replace(/`/g,"&#96;");
  const type_wrapped = type === "inline" 
    ? `<code>${replaced_backticks}</code>`
    : `<pre><code>${replaced_backticks}</code></pre>`;
  return `<span class="MathJax">${type_wrapped}</span>`
};
const wrap_regex = '< *span +class *= *" *MathJax *" *> *< *code *> *(.*?) *< */ *code *> *</ *span *>';

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

function wrap_inline_math(text) {
  let result = "";
  let state = "GROUND"; // GROUND, CODE_BLOCK, MATH
  let tagStack = [];
  let braceDepth = 0;
  let mathBuffer = "";
  
  const singletons = new Set(['br', 'hr', 'img', 'input', 'meta', 'link']);
  const lines = text.split(/\r?\n/);

  for (let l = 0; l < lines.length; l++) {
    const line = lines[l];
    const trimmed = line.trim();

    // 1. Update Global State for Code Blocks
    if (trimmed.startsWith("```")) {
      state = (state === "GROUND") ? "CODE_BLOCK" : "GROUND";
      result += line + (l < lines.length - 1 ? "\n" : "");
      continue; 
    }
    if (state === "CODE_BLOCK") {
      result += line + (l < lines.length - 1 ? "\n" : "");
      continue;
    }

    // 2. Table Detection Logic
    // A: Check for the delimiter row (e.g., |---|---| or | - |)
    const isDelimiterRow = /^\|?[\s\-\|:]+\|?$/.test(trimmed) && trimmed.includes("-");
    
    // B: Check for a standard table row (must have at least two unescaped pipes)
    let pipeCount = 0;
    // If first (non-whitespace) character in a line is not a pipe, then this is not a table row.
    if (line.match(/^[ \t\h]*|/)) {
      for (let j = 0; j < line.length; j++) {
        if (line[j] === '|' && (j === 0 || line[j - 1] !== '\\')) {
          pipeCount++;
          if (pipeCount >= 2) break;
        }
      }
    }
    
    // If it's a table, we skip math extraction but still update the HTML tagStack
    const skipMathOnLine = (pipeCount >= 2) || isDelimiterRow;

    // 3. Process valid lines for Math
    let i = 0;

    while (i < line.length) {
      const char = line[i];
      const slice = line.slice(i);
      const prevChar = i > 0 ? line[i - 1] : null;

      // A: HTML Tag Logic (Updates tagStack regardless of table status)
      if (char === '<' && prevChar !== '\\') {
        const tagMatch = slice.match(/^<(\/?[a-z0-9]+)[^>]*>/i);
        if (tagMatch) {
          let tagName = tagMatch[1].toLowerCase();
          const isClosing = tagName.startsWith('/');
          if (isClosing) tagName = tagName.slice(1);

          if (!singletons.has(tagName)) {
            if (isClosing) {
              if (tagStack[tagStack.length - 1] === tagName) tagStack.pop();
            } else {
              tagStack.push(tagName);
            }
          }

          // Invalidate current math if a tag interrupts it
          // Flush buffer as literal text.
          if (state === "MATH") {
            result += mathBuffer;
            mathBuffer = "";
            state = "GROUND";
          }

          result += tagMatch[0];
          i += tagMatch[0].length;
          continue;
        }
      }

      // B: Math Extraction Logic
      // SELF NOTE ABOUT  && tagStack.length === 0
      if (!skipMathOnLine) {
        if (state === "GROUND") {
          // Start math only if tagStack is empty
          if (char === '$' && prevChar !== '\\' && tagStack.length === 0) {
            state = "MATH";
            mathBuffer = "$";
            braceDepth = 0;
          } else {
            result += char;
          }
        } else if (state === "MATH") {
          mathBuffer += char;
          if (char === '{' && prevChar !== '\\') {
            braceDepth++;
          } else if (char === '}' && prevChar !== '\\') {
            braceDepth = Math.max(0, braceDepth - 1);
          } else if (char === '$' && braceDepth === 0 && prevChar !== '\\') {
            //console.log("\nmathBuffer:", mathBuffer);
            //console.log(wrap(mathBuffer));
            result += wrap(mathBuffer);
            state = "GROUND";
            mathBuffer = "";
          }
        }
      } else {
        // If in a table or inside a tag, just pass characters through
        result += char;
      }
      i++;
    }
    
    // Reset Math state at end of line (prevents multi-line math like $hello)
    if (state === "MATH") {
      result += mathBuffer;
      mathBuffer = "";
      state = "GROUND";
    }

    // Add newline back if not the last line
    if (l < lines.length - 1) result += "\n";
  }

  return result;
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
        }
      );

      //console.log(data);
      let output_content = wrap_inline_math(block_math_replaced);
      if (block_math_arr !== null) {
        block_math_arr.forEach((str, i) => {
          output_content = output_content.replace(
            `LATEX_BLOCK_MATH_${i}`, 
            wrap(str)
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
        //.replace(
        //  new RegExp(LaTeX_replacement_regex, "gm"),
        //  (matched) => LaTeX_replacements[matched])
        .replace(
          new RegExp(wrap_regex, "gs"),
          "$1"
        )
        .replace("&#96;", "`");
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