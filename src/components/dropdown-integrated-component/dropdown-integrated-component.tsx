import { Component, h, Element, Watch, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'dropdown-integrated-component',
  // styleUrl: 'dropdown-integrated-component.css',
  shadow: true,
})
export class DropdownIntegratedComponent {
  @Element() el: HTMLElement;
  @Prop({ attribute: 'resetValue', reflect: true }) resetValue: boolean; //CHECK this attribute
  @Prop() data: string | [];
  private options: [];
  @Prop({ attribute: 'selected-value', reflect: true, mutable: true }) selectedValue: string;
  @Event({
    // eventName: 'onChangeSelectedItems',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  getChangeSelectedItems: EventEmitter<string>;

  @Watch('data')
  dataDidChangeHandler(newValue: [] | string) {
    if (typeof newValue === 'string') {
      this.options = JSON.parse(newValue);
    } else {
      this.options = newValue;
    }
  }
  componentWillLoad() {
    this.dataDidChangeHandler(this.data);
  }

  @Watch('selectedValue')
  onSelectedValueChanged(newValue: string, oldValue: string) {
    if (newValue !== oldValue) {
      this.selectedValue = newValue;
    }
  }

  onUserSelection(event: Event) {
    this.selectedValue = (event.target as HTMLSelectElement).value;
    this.getChangeSelectedItems.emit(this.selectedValue);
    return this.selectedValue;
  }

  render() {
    let listOptions = this.options.map(option => {
      return (
        <option value={option}>
          {option}
        </option>
      );
    });
    return [<select onChange={this.onUserSelection.bind(this)}>{listOptions}</select>];
  }
}
