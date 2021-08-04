import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'button-element',
  styleUrl: 'button-element.css',
  shadow: true,
})
  
export class ButtonElement {
  render() {
    return (
      <Host>
        <button>
        <slot></slot>
        </button>
      </Host>
    );
  }

}
