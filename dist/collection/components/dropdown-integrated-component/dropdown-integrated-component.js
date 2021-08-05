import { Component, h, Element, Watch, Prop, } from "@stencil/core";
export class DropdownIntegratedComponent {
  dataDidChangeHandler(newValue) {
    if (typeof newValue === "string") {
      this.options = JSON.parse(newValue);
    }
    else {
      this.options = newValue;
    }
  }
  onSelectedValueChanged(newValue, oldValue) {
    if (newValue !== oldValue) {
      this.selectedValue = newValue;
    }
  }
  componentWillLoad() {
    this.dataDidChangeHandler(this.data);
  }
  render() {
    let listOptions = this.options.map((option) => {
      return (h("dropdown-menu-item", { option: option, onClick: () => {
          this.selectedValue = option;
        } },
        h("button-element", null, option)));
    });
    return [
      h("dropdown-menu", { label: this.selectedValue }, listOptions),
    ];
  }
  static get is() { return "dropdown-integrated-component"; }
  static get encapsulation() { return "shadow"; }
  static get properties() { return {
    "resetValue": {
      "type": "boolean",
      "mutable": false,
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
      "attribute": "resetvalue",
      "reflect": true
    },
    "data": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string | []",
        "resolved": "[] | string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "data",
      "reflect": false
    },
    "selectedValue": {
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
      "attribute": "selected-value",
      "reflect": true
    }
  }; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "data",
      "methodName": "dataDidChangeHandler"
    }, {
      "propName": "selectedValue",
      "methodName": "onSelectedValueChanged"
    }]; }
}
