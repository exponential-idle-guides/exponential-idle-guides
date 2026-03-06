const pluginTOC = require('eleventy-plugin-toc');
const pluginNestingTOC = require('eleventy-plugin-nesting-toc');
const cheerio = require('cheerio');

const toc_regex = String.raw`<\s*a[^>]*href\s*=\s*"(#[^"]*)">(.*).s*(Permalink: [^<]*)#<\s*/\s*a\s*>`;

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
    return originalHTML.replace(
      new RegExp(toc_regex, "g"),
      (match, id, header, perma) => 
        `<a href="${id}" aria-label="${perma}">${header}<span class="visually-hidden" style="display:none;">${perma}</span></a>`
    );
  });
}; 

