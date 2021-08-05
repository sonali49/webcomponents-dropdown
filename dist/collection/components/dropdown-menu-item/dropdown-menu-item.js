import { Component, Host, h, Prop, Watch, Event } from "@stencil/core";
export class MyMenuItem {
  constructor() {
    this.open = false;
  }
  openChangedHandler(open) {
    this.openChanged.emit({ open });
  }
  render() {
    return (h(Host, { open: this.open },
      h("slot", null, this.option)));
  }
  static get is() { return "dropdown-menu-item"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["dropdown-menu-item.css"]
  }; }
  static get styleUrls() { return {
    "$": ["dropdown-menu-item.css"]
  }; }
  static get properties() { return {
    "option": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "option",
      "reflect": true
    },
    "open": {
      "type": "boolean",
      "mutable": true,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "open",
      "reflect": true,
      "defaultValue": "false"
    }
  }; }
  static get events() { return [{
      "method": "openChanged",
      "name": "openChanged",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get watchers() { return [{
      "propName": "open",
      "methodName": "openChangedHandler"
    }]; }
}
