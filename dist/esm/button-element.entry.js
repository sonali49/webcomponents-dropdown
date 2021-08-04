import { r as registerInstance, h, H as Host } from './index-c92880d1.js';

const buttonElementCss = ":host{--background:var(--button-background, #fff);--background-hover:var(--button-background-hover, #F6F6F9);--color:var(--button-color, #171719)}button{background:var(--background);border:none;height:47px;min-width:207px;color:var(--color);cursor:pointer;text-align:start;border-radius:4px}button:hover{--background:var(--background-hover)}";

const ButtonElement = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("button", null, h("slot", null))));
  }
};
ButtonElement.style = buttonElementCss;

export { ButtonElement as button_element };
