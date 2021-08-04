import { Component, Host, h } from '@stencil/core';
export class ButtonElement {
  render() {
    return (h(Host, null,
      h("button", null,
        h("slot", null))));
  }
  static get is() { return "button-element"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["button-element.css"]
  }; }
  static get styleUrls() { return {
    "$": ["button-element.css"]
  }; }
}
