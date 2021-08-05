import { Component, Host, Prop, h, Element, Event, Watch, Listen, } from "@stencil/core";
export class MyDialog {
  constructor() {
    this.open = false;
  }
  openChangedHandler(open) {
    this.openChanged.emit({ open });
  }
  handleWindowClick(event) {
    // Only close if we click outside the shadow root
    if (!event.composedPath().includes(this.el.shadowRoot)) {
      this.open = false;
    }
  }
  render() {
    return (h(Host, null,
      h("button-element", { onClick: () => {
          this.open = !this.open;
        } },
        h("slot", { name: "activator" }, "Activate")),
      h("dialog", { open: this.open },
        h("slot", null))));
  }
  static get is() { return "dropdown-dialog"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["dropdown-dialog.css"]
  }; }
  static get styleUrls() { return {
    "$": ["dropdown-dialog.css"]
  }; }
  static get properties() { return {
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
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "open",
      "methodName": "openChangedHandler"
    }]; }
  static get listeners() { return [{
      "name": "click",
      "method": "handleWindowClick",
      "target": "window",
      "capture": false,
      "passive": false
    }]; }
}
