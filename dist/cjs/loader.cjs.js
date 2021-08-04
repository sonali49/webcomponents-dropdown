'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-eb5f3da3.js');

/*
 Stencil Client Patch Esm v2.6.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["button-element.cjs",[[1,"button-element"]]],["dropdown-integrated-component.cjs",[[1,"dropdown-integrated-component",{"resetValue":[516,"resetvalue"],"data":[1],"selectedValue":[1537,"selected-value"]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
