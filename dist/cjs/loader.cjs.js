'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bda003ac.js');

/*
 Stencil Client Patch Esm v2.6.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["button-element_5.cjs",[[1,"dropdown-integrated-component",{"resetValue":[516,"resetvalue"],"data":[1],"selectedValue":[1537,"selected-value"]}],[1,"dropdown-menu",{"label":[1537],"items":[32],"open":[32]}],[1,"dropdown-menu-item",{"option":[1537],"open":[1540]}],[1,"dropdown-dialog",{"open":[1540]},[[8,"click","handleWindowClick"]]],[1,"button-element"]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
