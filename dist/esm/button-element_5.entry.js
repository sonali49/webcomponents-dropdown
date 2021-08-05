import { r as registerInstance, h, H as Host, c as createEvent, g as getElement } from './index-68d84b98.js';

const buttonElementCss = "button{background:#fff;border:none;height:47px;min-width:207px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:14px;line-height:16px;letter-spacing:-0.01em;padding:16px;color:#171719;cursor:pointer;text-align:start}button:hover{background:#F6F6F9}button:active{background:#C1C6D8}";

const ButtonElement = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("button", null, h("slot", null))));
  }
};
ButtonElement.style = buttonElementCss;

const dropdownDialogCss = ":host{position:relative}dialog{border:1px solid #E2E2E4;border:none;box-shadow:0px 2px 3px rgba(0, 0, 0, 0.1);display:none;inline-size:max-content;padding:0;position:absolute}dialog[open]{display:block;border-radius:10px}";

const MyDialog = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.openChanged = createEvent(this, "openChanged", 7);
    this.open = false;
  }
  openChangedHandler(open) {
    this.openChanged.emit({ open });
  }
  render() {
    return (h(Host, null, h("button-element", { onClick: () => {
        this.open = !this.open;
      } }, h("slot", { name: "activator" }, "Activate")), h("dialog", { open: this.open }, h("slot", null))));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "open": ["openChangedHandler"]
  }; }
};
MyDialog.style = dropdownDialogCss;

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
      h("dropdown-menu", { title: this.selectedValue }, listOptions),
    ];
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "data": ["dataDidChangeHandler"],
    "selectedValue": ["onSelectedValueChanged"]
  }; }
};

const dropdownMenuCss = ":host{display:block;width:207px;border-top:1px solid #e2e2e4;border-bottom:1px solid #e2e2e4;border-radius:4px}menu{list-style:none;padding:0;margin:0;}slot[name=\"label\"]{align-items:center;display:flex}slot[name=\"label\"] svg{fill:currentcolor;block-size:1em;inline-size:0.666em;margin-inline-start:1ex}";

const MyMenu = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
          this.title = item.option;
        };
      });
    });
  }
  render() {
    return (h(Host, null, h("slot", null), h("dropdown-dialog", { onOpenChanged: (event) => this.handleToggle(event) }, h("slot", { slot: "activator", name: "label" }, this.title, h("svg", { viewBox: "0 0 100 66", "aria-label": this.open ? "Expanded" : "Collapsed" }, h("polygon", { points: this.open ? "0 66.6, 100 66.6, 50 0" : "0 0, 100 0, 50 66.6" }))), h("menu", { onClick: () => (this.open = !this.open) }, this.items.map((_, i) => (h("li", null, h("slot", { name: `item-${i}` }))))))));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "open": ["openChangedHandler"]
  }; }
};
MyMenu.style = dropdownMenuCss;

const dropdownMenuItemCss = ":host{display:block;height:47px;width:208px;border-top:1px solid #E2E2E4;background-color:#fff}";

const MyMenuItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
};
MyMenuItem.style = dropdownMenuItemCss;

export { ButtonElement as button_element, MyDialog as dropdown_dialog, DropdownIntegratedComponent as dropdown_integrated_component, MyMenu as dropdown_menu, MyMenuItem as dropdown_menu_item };
