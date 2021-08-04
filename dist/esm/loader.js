import { p as promiseResolve, b as bootstrapLazy } from './index-c92880d1.js';

/*
 Stencil Client Patch Esm v2.6.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["button-element",[[1,"button-element"]]],["dropdown-integrated-component",[[1,"dropdown-integrated-component",{"resetValue":[516,"resetvalue"],"data":[1],"selectedValue":[1537,"selected-value"]}]]]], options);
  });
};

export { defineCustomElements };
