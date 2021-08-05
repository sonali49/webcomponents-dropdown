import { Component, Element, Host, State, h, Prop, Watch, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: "dropdown-menu",
  styleUrl: "dropdown-menu.css",
  shadow: true,
})
export class MyMenu {
  @Element() el: HTMLElement;

  @State() items: HTMLDropdownMenuItemElement[] = [];
  @State() open = false;

  private handleToggle(event: CustomEvent) {
    this.open = event.detail.open;
  }
  @Watch("open")
  openChangedHandler(open: boolean) {
    this.openChanged.emit({ open });
  }

  componentWillLoad() {
    this.el.shadowRoot.addEventListener("slotchange", () => {
      this.items = Array.from(this.el.querySelectorAll("dropdown-menu-item"));
      this.items.forEach((item, i) => {
        item.slot = `item-${i}`;
        item.onclick = () => {
          this.title = item.option;
        }
      });
    });
  }
  @Prop({ reflect: true, mutable: true }) title: string;
  @Event() openChanged: EventEmitter;
  render() {
    return (
      <Host>
        <slot></slot>
        <dropdown-dialog onOpenChanged={(event) => this.handleToggle(event)}>
          <slot slot="activator" name="label">
            {this.title}
            <svg
              viewBox="0 0 100 66"
              aria-label={this.open ? "Expanded" : "Collapsed"}
            >
              <polygon
                points={
                  this.open ? "0 66.6, 100 66.6, 50 0" : "0 0, 100 0, 50 66.6"
                }
              />
            </svg>
          </slot>
          <menu onClick={() => (this.open = !this.open)}>
            {this.items.map((_, i) => (
              <li>
                <slot name={`item-${i}`}></slot>
              </li>
            ))}
          </menu>
        </dropdown-dialog>
      </Host>
    );
  }
}
