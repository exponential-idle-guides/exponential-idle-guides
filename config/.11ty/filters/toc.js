const pluginTOC = require('eleventy-plugin-toc');
const pluginNestingTOC = require('eleventy-plugin-nesting-toc');
const cheerio = require('cheerio');
const { MathJax_to_regular } = require('../MathJax');

const toc_regex = String.raw`<\s*a[^>]*href\s*=\s*"(#[^"]*)">(.*).s*(Permalink: [^<]*)#<\s*/\s*a\s*>`;
const mathjax_regex = String.raw`L(?:\u00ad|\&shy;)?A(?:\u00ad|\&shy;)?T(?:\u00ad|\&shy;)?E(?:\u00ad|\&shy;)?X(?:\u00ad|\&shy;)?D(?:\u00ad|\&shy;)?O(?:\u00ad|\&shy;)?L(?:\u00ad|\&shy;)?L(?:\u00ad|\&shy;)?A(?:\u00ad|\&shy;)?R.*?L(?:\u00ad|\&shy;)?A(?:\u00ad|\&shy;)?T(?:\u00ad|\&shy;)?E(?:\u00ad|\&shy;)?X(?:\u00ad|\&shy;)?D(?:\u00ad|\&shy;)?O(?:\u00ad|\&shy;)?L(?:\u00ad|\&shy;)?L(?:\u00ad|\&shy;)?A(?:\u00ad|\&shy;)?R`

module.exports = function(config) {
  config.addPlugin(pluginTOC);
  config.addPlugin(pluginNestingTOC);

  config.addFilter("cleanTOC", (content) => {
    const toc = config.getFilter("toc");
    const originalHTML = toc(content);
    
    if (!originalHTML) return '';
    
    /*Output expanded
      <a href="#header-id">
        Header
        <span class="visually-hidden" style="display:none;">
          Permalink: header-id
        </span>
      </a>
    */
    const replaced_HTML = originalHTML.replace(
      new RegExp(toc_regex, "g"),
      (match, id, header, perma) => 
        `<a href="${id}" aria-label="${perma}">${
          header.replace(
            new RegExp(mathjax_regex, "gi"),
            (mj) => `<span class="MathJax"><code>${mj}</code></span>`
          )
        }<span class="visually-hidden" style="display:none;">${perma}</span></a>`
    );
    const $ = cheerio.load(replaced_HTML);

    $("nav > ol > li").each((i, li) => {
      const title = $(li).contents().filter(function() {
        return this.type === 'tag' && this.name === 'a';
      });

      const sublist = $(li).find('ol');
      $(li).before(`<h4 id="${title[0].attribs.href.slice(1)}tocsidebar">${title}</h4>`);
      if (sublist.length) {
        $(li).after(sublist);
      }
      $(li).remove();
    })
    $("nav > ol").children().unwrap();
    $('ul:empty').remove();
    return $("body").html();
  });
}

