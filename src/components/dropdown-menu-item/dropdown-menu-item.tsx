import { Component, Host, h, Prop, Watch, Event, EventEmitter } from "@stencil/core";

@Component({
  tag: "dropdown-menu-item",
  styleUrl: "dropdown-menu-item.css",
  shadow: true,
})
export class MyMenuItem {
  @Prop({ reflect: true, mutable: true }) option: string;
  @Prop({ reflect: true, mutable: true }) open: boolean = false;

  @Watch("open")
  openChangedHandler(open: boolean) {
    this.openChanged.emit({ open });
  }

  @Event() openChanged: EventEmitter;

  render() {
    return (
      <Host open={this.open}>
        <slot>{this.option}</slot>
      </Host>
    );
  }
}
