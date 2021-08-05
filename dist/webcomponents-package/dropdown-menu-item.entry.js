import { r as registerInstance, e as createEvent, h, f as Host } from './index-88ebd8d7.js';

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

export { MyMenuItem as dropdown_menu_item };
