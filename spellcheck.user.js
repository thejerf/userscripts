// ==UserScript==
// @name        Kill Spellcheck w/ Recursive iframe Traversal
// @description Recursively remove spellcheck attributes through iframes.
// @author      Jeremy Bowers
// @namespace   jerf
// @match       https://nothing.invalid/
// @version     1.0
// ==/UserScript==

function crawlIframes(node) {
  node.contentDocument.querySelectorAll("iframe").forEach(crawlIframes);
  
  node.contentDocument.querySelectorAll('[spellcheck="false"]').forEach((spellNode) => {
    console.log("spellcheck removed");
    spellNode.removeAttribute("spellcheck")
  });
}

function removeSpellcheckRestrictions() {
  document.querySelectorAll("iframe").forEach(f => crawlIframes(f));
}

window.setInterval(removeSpellcheckRestrictions, 1000);
