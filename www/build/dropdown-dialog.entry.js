import { r as registerInstance, e as createEvent, h, f as Host, g as getElement } from './index-88ebd8d7.js';

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
  get el() { return getElement(this); }
  static get watchers() { return {
    "open": ["openChangedHandler"]
  }; }
};
MyDialog.style = dropdownDialogCss;

export { MyDialog as dropdown_dialog };
