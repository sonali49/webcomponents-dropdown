import { Component, Host, Prop, h, Element, Event, EventEmitter, Watch } from '@stencil/core';

@Component({
  tag: 'dropdown-dialog',
  styleUrl: 'dropdown-dialog.css',
  shadow: true,
})
export class MyDialog {
  @Element() el: HTMLElement;
  @Prop({ reflect: true, mutable: true }) open: boolean = false;

  @Watch('open')
  openChangedHandler(open: boolean) {
    this.openChanged.emit({ open });
  }

  @Event() openChanged: EventEmitter;
  render() {
    return (
      <Host>
        {/* Add a button with a click listener */}
        <button-element
          onClick={() => {
            this.open = !this.open;
          }}
        >
          <slot name="activator">Activate</slot>
        </button-element>

        <dialog open={this.open}>
          <slot></slot>
        </dialog>
      </Host>
    );
  }
}
