import { Component, h, Element, Watch, Prop, Event } from '@stencil/core';
export class DropdownIntegratedComponent {
  dataDidChangeHandler(newValue) {
    if (typeof newValue === 'string') {
      this.options = JSON.parse(newValue);
    }
    else {
      this.options = newValue;
    }
  }
  componentWillLoad() {
    this.dataDidChangeHandler(this.data);
  }
  onSelectedValueChanged(newValue, oldValue) {
    if (newValue !== oldValue) {
      this.selectedValue = newValue;
    }
  }
  onUserSelection(event) {
    this.selectedValue = event.target.value;
    this.getChangeSelectedItems.emit(this.selectedValue);
    return this.selectedValue;
  }
  render() {
    let listOptions = this.options.map(option => {
      return (h("option", { value: option }, option));
    });
    return [h("select", { onChange: this.onUserSelection.bind(this) }, listOptions)];
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
  static get events() { return [{
      "method": "getChangeSelectedItems",
      "name": "getChangeSelectedItems",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      }
    }]; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "data",
      "methodName": "dataDidChangeHandler"
    }, {
      "propName": "selectedValue",
      "methodName": "onSelectedValueChanged"
    }]; }
}
