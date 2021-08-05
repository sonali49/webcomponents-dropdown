import { r as registerInstance, e as createEvent, h, f as Host, g as getElement } from './index-88ebd8d7.js';

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
          this.label = item.option;
        };
      });
    });
  }
  render() {
    return (h(Host, null, h("slot", null), h("dropdown-dialog", { onOpenChanged: (event) => this.handleToggle(event) }, h("slot", { slot: "activator", name: "label" }, this.label, h("svg", { viewBox: "0 0 100 66", "aria-label": this.open ? "Expanded" : "Collapsed" }, h("polygon", { points: this.open ? "0 66.6, 100 66.6, 50 0" : "0 0, 100 0, 50 66.6" }))), h("menu", { onClick: () => (this.open = !this.open) }, this.items.map((_, i) => (h("li", null, h("slot", { name: `item-${i}` }))))))));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "open": ["openChangedHandler"]
  }; }
};
MyMenu.style = dropdownMenuCss;

export { MyMenu as dropdown_menu };
