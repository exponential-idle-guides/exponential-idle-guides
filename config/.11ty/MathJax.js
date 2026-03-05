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
  "LATEXTILDE": "~~",
  //"LATEXVERTICALBAR": "|",
  //"LATEXMINUS": "-",
  //"LATEXPLUS": "+",
  //"LATEXLIST": "",
  "LATEXBACKTICK": "`",
};
const LaTeX_replacement_regex = Object.keys(LaTeX_replacements).join("|");
const block_math_regex = /\$\$(?:[^\$]*\$[^\$]+|\s*\\\$|[^\$])+\$\$/gmu;
const LaTeX_replace = (str) => {
  return str
    .replaceAll(/`/g,"&#96;")
    .replaceAll(/([^\\])\((r|c)\)/g,"$1( $2 )")  // (r),(c) in converts to r inside circle
    .replace(/((?:(?:^|[^\\])\\(?:\\{2})*\\)|[^\\])\*/g, "$1LATEXASTERISK")
    .replace(/((?:(?:^|[^\\])\\(?:\\{2})*\\)|[^\\])_/g, "$1LATEXUNDERSCORE")
    .replace(/((?:(?:^|[^\\])\\(?:\\{2})*\\)|[^\\])~~/g, "$1LATEXTILDE")
    .replace(/((?:(?:^|[^\\])\\(?:\\{2})*\\)|[^\\])`/g, "$1LATEXBACKTICK")
    .replace(/([\n\f]\s*)>([^\n\f\v]*)/g, "$1\\gt$2")
    .replace(/((?:(?:^|[^\\])\\(?:\\{2})*\\)|[^\\])\\,/g, "$1\\\\,")
    .replaceAll("$", "LATEXDOLLAR");
}
const wrap = (str, type, p) => {
  const replaced = LaTeX_replace(str);
  const type_wrapped = type === "block" 
    ? `<br><div class="MathJax"><pre><code>${replaced}</code></pre></div><br>`
    : `<span class="MathJax"><code>${replaced}</code></span>`;
  if (p) {
    console.log(type_wrapped);
    console.log(`<div class="MathJax"><pre><code>${replaced}</code></pre></div>\n`);
  }
  return type_wrapped;
};
const wrap_regex = '< *(span|div) +class *= *" *MathJax *" *>(?: *< *pre *> *)? *< *code *> *(.*?) *< */ *code *>(?: *< */ *pre *> *)? *</ *\\1 *>';

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

function wrap_specials(text, specials) {
  let output = text.slice(1,-1);
  for (const special of specials) {
    switch(special) {
      case "_":
      case "*":
        // No need to add italics
        break;
      case "___":
      case "***":
        // No need to add italics
      case "__":
      case "**":
      case "em":
        output = `\\boldsymbol{${output}}`;
        break;
      case "u":
        // Underline will be taken care of by the html <u> tag.
        // No reason to double the underlining.
        //output = `\\underline{${output}}`;
        break;
      case "sub":
        output = `{}_{${output}}`;
        break;
      case "sup":
        output = `{}^{${output}}`;
        break;
      case "~~":
        output = `\\enclose{horizontalstrike}{${output}}`;
        break;
    }
  }
  return `$${output}$`
}

function wrap_inline_math(text,p) {
  let result = "";
  let state = "GROUND"; // GROUND, CODE_BLOCK, MATH
  let tagStack = [];
  let mdStack = [];
  let mdBuffer = ["",""]; // [open, close]
  let braceDepth = 0;
  let mathBuffer = "";
  
  const singletons = new Set(['br', 'hr', 'img', 'input', 'meta', 'link']);
  const specials = new Set(['em', 'u', 'sub', 'sup']);
  const md_specials = new Set(['_', '__', '___', '*', '**', '***', '~~']);
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
    const isTableLine = (pipeCount >= 2) || isDelimiterRow;

    if (p) {console.log(`\n${state}\t${braceDepth}\t${tagStack}\n${mdBuffer}\t${mdStack}\n${line}`)}
    const target_line = line == "<u>$\\underline{c_1}$ and $\\underline{c_1}$ Buying</u>";
    // 3. Process valid lines for Math
    let i = 0;

    while (i < line.length) {
      const char = line[i];
      const slice = line.slice(i);
      const prevChar = i > 0 ? line[i - 1] : null;
      if (target_line) console.log(char, char === '<' && prevChar !== '\\');
      // A: HTML Tag Logic (Updates tagStack regardless of table status)
      if (char === '<' && prevChar !== '\\') {
        const tagMatch = slice.match(/^<(\/?[a-z0-9]+)[^>]*>/i);
        if(target_line) console.log(tagMatch, state);
        if (tagMatch) {
          let tagName = tagMatch[1].toLowerCase();
          const isClosing = tagName.startsWith('/');
          if (isClosing) tagName = tagName.slice(1);

          if (!singletons.has(tagName)) {
            if (isClosing) {
              const lastTag = tagStack[tagStack.length - 1];
              if (lastTag === tagName) {
                tagStack.pop();
              } else if (tagName === "ol" || tagName === "ul") {
                const pos = tagStack.lastIndexOf(tagName);
                while (tagStack.length > pos) tagStack.pop();
              }
            } else {
              tagStack.push(tagName);
            }
          }
          if(target_line) {
            console.log(tagName, isClosing, tagStack);
            console.log(tagMatch[0]);
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

      // B: Table Pipe Logic (The "Pipe-Break")
      if (state === "MATH" && isTableLine && char === '|' && prevChar != '\\') {
        // Illegal: Math cannot cross a table pipe. Invalidate and flush.
        result += mathBuffer + char;
        mathBuffer = "";
        state = "GROUND";
        i++;
        continue;
      }

      if (state !== "MATH") {
        const md_open = mdBuffer[0] + char;
        const md_close = mdBuffer[1] + char;
        if ((!md_specials.has(md_close) && mdBuffer[1].length > 0) || (mdStack.lastIndexOf(md_close) < mdStack.lastIndexOf(mdBuffer[1]))) {
          console.assert(mdBuffer[1].length > 0, `mdBuffer[1].length = ${mdBuffer[1].length} `)
          mdStack.splice(mdStack.lastIndexOf(mdBuffer[1]),1);
          mdBuffer[0] = (char !== mdBuffer[1][0] && md_specials.has(char)) ? char : "";
          if (p) console.log("mdBuffer (close):", `'${char}'`, mdBuffer, mdStack);
          mdBuffer[1] = "";
        } else if (!md_specials.has(md_open)) {
          if (char !== mdBuffer[0][0] && !(/\s/.test(char))) {
            if (mdBuffer[0].length > 0) {
              const mdStackSize = mdStack.length;
              mdStack.push(mdBuffer[0]);
              if (p) console.log("mdBuffer (open):", `'${char}'`, mdBuffer, mdStack);
              console.assert(mdStack.length > mdStackSize);
            }
            mdBuffer[0] = md_specials.has(char) ? char : "";
            mdBuffer[1] = md_specials.has(char) ? char : "";
          } else {
            mdBuffer[0] = "";
            mdBuffer[1] = "";
          }
        } else {
          mdBuffer[0] = md_open;
          mdBuffer[1] = mdStack.includes(md_close) ? md_close : "";
        }
      }

      // C: Math Extraction Logic
      // Only pass through if the tag stack is made up of only special html tags
      if ((new Set(tagStack)).isSubsetOf(specials)) {
        if (state === "GROUND") {
          // Start math only if tagStack is empty
          if (char === '$' && prevChar !== '\\') {
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

            if (mathBuffer.length > 2)  {
              const StackSet = new Set([...tagStack,...mdStack]);
              if (tagStack.length > 0 || mdStack.length > 0) {
                if (p) console.log(tagStack, mdStack)
                if (p) console.log(StackSet)
              }
              if (p) console.log("mathBuffer:", mathBuffer);
              mathBuffer = wrap_specials(
                  mathBuffer,
                  new Set([...specials,...md_specials].filter(tag => StackSet.has(tag)))
                );
              if (p) console.log(mathBuffer);
              result += wrap(mathBuffer, "inline", p);
            } else {
              result += mathBuffer;
            }
            mathBuffer = "";
            state = "GROUND";
          }
        }
      } else {
        // If in a tag, just pass characters through
        result += char;
      }
      i++;
    }
    
    // Reset Math state at end of line (prevents multi-line math like $hello)
    if (state === "MATH") {
      result += mathBuffer;
      mathBuffer = "";
      braceDepth = 0;
      state = "GROUND";
    }
    mdBuffer = ["",""];
    mdStack = [];

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
      const target = data.title.trim() == "Custom Theories  ";
      const block_math_arr = content.match(block_math_regex);
      if (target) console.log(`\n${data.title}`);
      block_math_regex.lastIndex = 0;
      let counter = -1;
      const block_math_replaced = block_math_arr === null 
        ? content
        : content.replace(block_math_regex, () => {
          counter++;
          return `LATEX_BLOCK_MATH_${counter}`
        }
      );

      let output_content = wrap_inline_math(block_math_replaced, target);
      if (block_math_arr !== null) {
        block_math_arr.forEach((str, i) => {
          return output_content = output_content.replace(
            `LATEX_BLOCK_MATH_${i}`, 
            wrap(str.replace(/(\\\\[\r\n\f\v]+)/g, "\\\\$1"), "block", target)
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
    packages: [...AllPackages, 'base', 'ams', 'newcommand', 'configmacros', 'color', 'physics', 'float', 'setspace', 'mathptmx', 'amsmath', 'tikz', 'xspace', 'amssymb', 'amsthm', 'enumitem', 'gensymb', 'mathtools', 'multicol', 'multirow', 'hhline', 'nicematrix', 'listings', 'ifthen', 'graphicx', 'pgfplotstable', 'pgfplots', 'enclose', 'boldsymbol'],
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    displayMath: [['$$', '$$'], ['\\[', '\\]']],
    macros: LaTeXMacros
  });
  const svg = new SVG({ fontCache: 'local' });

  config.addTransform("mathjax", async function(content, outputPath) {
    if (!exclusions.includes(outputPath)
      && this.page.outputPath 
      && this.page.outputPath.endsWith(".html") 
      //&& (/[^\$]\$[^\$]+\$[^\$]|\$\$[^\$]+\$\$|\\\((?:[^\\].|\\[^\)])*\\\)|\\\[(?:[^\\][^\]])\\\[/.test(content))
      && /$/.test(content)
    ) {
      const page = this.page
      const target = "/guides/theories-1-4  "
      if (page.filePathStem === target) {
        console.log(page.filePathStem);
      }

      const restored_content = content
        .replace(
          new RegExp(wrap_regex, "gs"),
          function (match, tag, inner) {
            const m = inner
              .replaceAll("LATEXDOLLAR", "$")
              .replaceAll("&#96;", "`")
              .replace(
                new RegExp(LaTeX_replacement_regex, "gm"),
                (matched) => LaTeX_replacements[matched]);
            if (page.filePathStem === target) {
              console.log(inner, m);
            }
            return m;
          }
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