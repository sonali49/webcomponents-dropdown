import { r as registerInstance, h, f as Host } from './index-88ebd8d7.js';

const buttonElementCss = "button{background:#fff;border:none;height:47px;min-width:207px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:14px;line-height:16px;letter-spacing:-0.01em;padding:16px;color:#171719;cursor:pointer;text-align:start}button:hover{background:#F6F6F9}button:active{background:#C1C6D8}";

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
