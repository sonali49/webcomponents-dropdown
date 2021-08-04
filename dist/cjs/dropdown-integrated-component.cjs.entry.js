'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-eb5f3da3.js');

const DropdownIntegratedComponent = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.getChangeSelectedItems = index.createEvent(this, "getChangeSelectedItems", 7);
  }
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
      return (index.h("option", { value: option }, option));
    });
    return [index.h("select", { onChange: this.onUserSelection.bind(this) }, listOptions)];
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "data": ["dataDidChangeHandler"],
    "selectedValue": ["onSelectedValueChanged"]
  }; }
};

exports.dropdown_integrated_component = DropdownIntegratedComponent;
