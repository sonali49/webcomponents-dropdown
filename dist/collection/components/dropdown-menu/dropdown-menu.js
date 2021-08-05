import { Component, Element, Host, State, h, Prop, Watch, Event } from '@stencil/core';
export class MyMenu {
  constructor() {
    this.items = [];
    this.open = false;
  }
  handleToggle(event) {
    this.open = event.detail.open;
  }
  openChangedHandler(open) {
    this.openChanged.emit({ open });
  }
  componentWillLoad() {
    this.el.shadowRoot.addEventListener("slotchange", () => {
      this.items = Array.from(this.el.querySelectorAll("dropdown-menu-item"));
      this.items.forEach((item, i) => {
        item.slot = `item-${i}`;
        item.onclick = () => {
          this.title = item.option;
        };
      });
    });
  }
  render() {
    return (h(Host, null,
      h("slot", null),
      h("dropdown-dialog", { onOpenChanged: (event) => this.handleToggle(event) },
        h("slot", { slot: "activator", name: "label" },
          this.title,
          h("svg", { viewBox: "0 0 100 66", "aria-label": this.open ? "Expanded" : "Collapsed" },
            h("polygon", { points: this.open ? "0 66.6, 100 66.6, 50 0" : "0 0, 100 0, 50 66.6" }))),
        h("menu", { onClick: () => (this.open = !this.open) }, this.items.map((_, i) => (h("li", null,
          h("slot", { name: `item-${i}` }))))))));
  }
  static get is() { return "dropdown-menu"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["dropdown-menu.css"]
  }; }
  static get styleUrls() { return {
    "$": ["dropdown-menu.css"]
  }; }
  static get properties() { return {
    "title": {
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
      "attribute": "title",
      "reflect": true
    }
  }; }
  static get states() { return {
    "items": {},
    "open": {}
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
}
