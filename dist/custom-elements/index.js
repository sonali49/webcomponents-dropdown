import { attachShadow, h, Host, createEvent, proxyCustomElement } from '@stencil/core/internal/client';
export { setAssetPath, setPlatformOptions } from '@stencil/core/internal/client';

const buttonElementCss = "button{background:#fff;border:none;height:47px;min-width:207px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:14px;line-height:16px;letter-spacing:-0.01em;padding:16px;color:#171719;cursor:pointer;text-align:start}button:hover{background:#F6F6F9}button:active{background:#C1C6D8}";

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

const dropdownDialogCss = ":host{position:relative}dialog{border:1px solid #E2E2E4;border:none;box-shadow:0px 2px 3px rgba(0, 0, 0, 0.1);display:none;inline-size:max-content;padding:0;position:absolute}dialog[open]{display:block;border-radius:10px}";

const MyDialog = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    attachShadow(this);
    this.openChanged = createEvent(this, "openChanged", 7);
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
    return (h(Host, null, h("button-element", { onClick: () => {
        this.open = !this.open;
      } }, h("slot", { name: "activator" }, "Activate")), h("dialog", { open: this.open }, h("slot", null))));
  }
  get el() { return this; }
  static get watchers() { return {
    "open": ["openChangedHandler"]
  }; }
  static get style() { return dropdownDialogCss; }
};

const DropdownIntegratedComponent$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    attachShadow(this);
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
  get el() { return this; }
  static get watchers() { return {
    "data": ["dataDidChangeHandler"],
    "selectedValue": ["onSelectedValueChanged"]
  }; }
};

const dropdownMenuCss = ":host{display:block;width:207px;border-top:1px solid #e2e2e4;border-bottom:1px solid #e2e2e4;border-radius:4px}menu{list-style:none;padding:0;margin:0;}slot[name=\"label\"]{align-items:center;display:flex}slot[name=\"label\"] svg{fill:currentcolor;block-size:1em;inline-size:0.666em;margin-inline-start:1ex}";

const MyMenu = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    attachShadow(this);
    this.openChanged = createEvent(this, "openChanged", 7);
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
          this.label = item.option;
        };
      });
    });
  }
  render() {
    return (h(Host, null, h("slot", null), h("dropdown-dialog", { onOpenChanged: (event) => this.handleToggle(event) }, h("slot", { slot: "activator", name: "label" }, this.label, h("svg", { viewBox: "0 0 100 66", "aria-label": this.open ? "Expanded" : "Collapsed" }, h("polygon", { points: this.open ? "0 66.6, 100 66.6, 50 0" : "0 0, 100 0, 50 66.6" }))), h("menu", { onClick: () => (this.open = !this.open) }, this.items.map((_, i) => (h("li", null, h("slot", { name: `item-${i}` }))))))));
  }
  get el() { return this; }
  static get watchers() { return {
    "open": ["openChangedHandler"]
  }; }
  static get style() { return dropdownMenuCss; }
};

const dropdownMenuItemCss = ":host{display:block;height:47px;width:208px;border-top:1px solid #E2E2E4;background-color:#fff}";

const MyMenuItem = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    attachShadow(this);
    this.openChanged = createEvent(this, "openChanged", 7);
    this.open = false;
  }
  openChangedHandler(open) {
    this.openChanged.emit({ open });
  }
  render() {
    return (h(Host, { open: this.open }, h("slot", null, this.option)));
  }
  static get watchers() { return {
    "open": ["openChangedHandler"]
  }; }
  static get style() { return dropdownMenuItemCss; }
};

const ButtonElement = /*@__PURE__*/proxyCustomElement(ButtonElement$1, [1,"button-element"]);
const DropdownDialog = /*@__PURE__*/proxyCustomElement(MyDialog, [1,"dropdown-dialog",{"open":[1540]},[[8,"click","handleWindowClick"]]]);
const DropdownIntegratedComponent = /*@__PURE__*/proxyCustomElement(DropdownIntegratedComponent$1, [1,"dropdown-integrated-component",{"resetValue":[516,"resetvalue"],"data":[1],"selectedValue":[1537,"selected-value"]}]);
const DropdownMenu = /*@__PURE__*/proxyCustomElement(MyMenu, [1,"dropdown-menu",{"label":[1537],"items":[32],"open":[32]}]);
const DropdownMenuItem = /*@__PURE__*/proxyCustomElement(MyMenuItem, [1,"dropdown-menu-item",{"option":[1537],"open":[1540]}]);
const defineCustomElements = (opts) => {
  if (typeof customElements !== 'undefined') {
    [
      ButtonElement,
  DropdownDialog,
  DropdownIntegratedComponent,
  DropdownMenu,
  DropdownMenuItem
    ].forEach(cmp => {
      if (!customElements.get(cmp.is)) {
        customElements.define(cmp.is, cmp, opts);
      }
    });
  }
};

export { ButtonElement, DropdownDialog, DropdownIntegratedComponent, DropdownMenu, DropdownMenuItem, defineCustomElements };
