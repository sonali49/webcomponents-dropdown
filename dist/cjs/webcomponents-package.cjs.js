'use strict';

const index = require('./index-bda003ac.js');

/*
 Stencil Client Patch Browser v2.6.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('webcomponents-package.cjs.js', document.baseURI).href));
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["button-element_5.cjs",[[1,"dropdown-integrated-component",{"resetValue":[516,"resetvalue"],"data":[1],"selectedValue":[1537,"selected-value"]}],[1,"dropdown-menu",{"label":[1537],"items":[32],"open":[32]}],[1,"dropdown-menu-item",{"option":[1537],"open":[1540]}],[1,"dropdown-dialog",{"open":[1540]},[[8,"click","handleWindowClick"]]],[1,"button-element"]]]], options);
});
