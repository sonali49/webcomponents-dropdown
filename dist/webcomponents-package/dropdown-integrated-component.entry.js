import { r as registerInstance, h, g as getElement } from './index-88ebd8d7.js';

const DropdownIntegratedComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
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
        } }, h("button-element", null, option)));
    });
    return [
      h("dropdown-menu", { label: this.selectedValue }, listOptions),
    ];
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "data": ["dataDidChangeHandler"],
    "selectedValue": ["onSelectedValueChanged"]
  }; }
};

export { DropdownIntegratedComponent as dropdown_integrated_component };
