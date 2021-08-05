import { p as promiseResolve, b as bootstrapLazy } from './index-68d84b98.js';

/*
 Stencil Client Patch Esm v2.6.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["button-element_5",[[1,"dropdown-integrated-component",{"resetValue":[516,"resetvalue"],"data":[1],"selectedValue":[1537,"selected-value"]}],[1,"dropdown-menu",{"title":[1537],"items":[32],"open":[32]}],[1,"dropdown-menu-item",{"option":[1537],"open":[1540]}],[1,"dropdown-dialog",{"open":[1540]}],[1,"button-element"]]]], options);
  });
};

export { defineCustomElements };
