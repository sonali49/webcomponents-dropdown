import {
  Component,
  Host,
  Prop,
  h,
  Element,
  Event,
  EventEmitter,
  Watch,
  Listen,
} from "@stencil/core";

@Component({
  tag: "dropdown-dialog",
  styleUrl: "dropdown-dialog.css",
  shadow: true,
})
export class MyDialog {
  @Element() el: HTMLElement;
  @Prop({ reflect: true, mutable: true }) open: boolean = false;

  @Watch("open")
  openChangedHandler(open: boolean) {
    this.openChanged.emit({ open });
  }
  @Listen("click", { target: "window" })
  handleWindowClick(event: MouseEvent) {
    // Only close if we click outside the shadow root
    if (!event.composedPath().includes(this.el.shadowRoot)) {
      this.open = false;
    }
  }

  @Event() openChanged: EventEmitter;
  render() {
    return (
      <Host>
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
