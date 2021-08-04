'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-eb5f3da3.js');

const buttonElementCss = ":host{--background:var(--button-background, #fff);--background-hover:var(--button-background-hover, #F6F6F9);--color:var(--button-color, #171719)}button{background:var(--background);border:none;height:47px;min-width:207px;color:var(--color);cursor:pointer;text-align:start;border-radius:4px}button:hover{--background:var(--background-hover)}";

const ButtonElement = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("button", null, index.h("slot", null))));
  }
};
ButtonElement.style = buttonElementCss;

exports.button_element = ButtonElement;
