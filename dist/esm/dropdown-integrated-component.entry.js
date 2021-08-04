import { r as registerInstance, c as createEvent, h, g as getElement } from './index-c92880d1.js';

const DropdownIntegratedComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.getChangeSelectedItems = createEvent(this, "getChangeSelectedItems", 7);
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
      return (h("option", { value: option }, option));
    });
    return [h("select", { onChange: this.onUserSelection.bind(this) }, listOptions)];
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "data": ["dataDidChangeHandler"],
    "selectedValue": ["onSelectedValueChanged"]
  }; }
};

export { DropdownIntegratedComponent as dropdown_integrated_component };
