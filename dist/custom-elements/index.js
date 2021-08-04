import { attachShadow, h, Host, createEvent, proxyCustomElement } from '@stencil/core/internal/client';
export { setAssetPath, setPlatformOptions } from '@stencil/core/internal/client';

const buttonElementCss = ":host{--background:var(--button-background, #fff);--background-hover:var(--button-background-hover, #F6F6F9);--color:var(--button-color, #171719)}button{background:var(--background);border:none;height:47px;min-width:207px;color:var(--color);cursor:pointer;text-align:start;border-radius:4px}button:hover{--background:var(--background-hover)}";

const ButtonElement$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    attachShadow(this);
  }
  render() {
    return (h(Host, null, h("button", null, h("slot", null))));
  }
  static get style() { return buttonElementCss; }
};

const DropdownIntegratedComponent$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    attachShadow(this);
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
  get el() { return this; }
  static get watchers() { return {
    "data": ["dataDidChangeHandler"],
    "selectedValue": ["onSelectedValueChanged"]
  }; }
};

const ButtonElement = /*@__PURE__*/proxyCustomElement(ButtonElement$1, [1,"button-element"]);
const DropdownIntegratedComponent = /*@__PURE__*/proxyCustomElement(DropdownIntegratedComponent$1, [1,"dropdown-integrated-component",{"resetValue":[516,"resetvalue"],"data":[1],"selectedValue":[1537,"selected-value"]}]);
const defineCustomElements = (opts) => {
  if (typeof customElements !== 'undefined') {
    [
      ButtonElement,
  DropdownIntegratedComponent
    ].forEach(cmp => {
      if (!customElements.get(cmp.is)) {
        customElements.define(cmp.is, cmp, opts);
      }
    });
  }
};

export { ButtonElement, DropdownIntegratedComponent, defineCustomElements };
