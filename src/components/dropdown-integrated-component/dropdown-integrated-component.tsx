import {
  Component,
  h,
  Element,
  Watch,
  Prop,
} from "@stencil/core";

@Component({
  tag: "dropdown-integrated-component",
  // styleUrl: 'dropdown-integrated-component.css',
  shadow: true,
})
export class DropdownIntegratedComponent {
  @Element() el: HTMLElement;
  @Prop({ attribute: "resetValue", reflect: true }) resetValue: boolean; //CHECK this attribute
  @Prop() data: string | [];
  @Prop({ attribute: "selected-value", reflect: true, mutable: true })
  selectedValue: string;

  private options: [];
  @Watch("data")
  dataDidChangeHandler(newValue: [] | string) {
    if (typeof newValue === "string") {
      this.options = JSON.parse(newValue);
    } else {
      this.options = newValue;
    }
  }

  @Watch("selectedValue")
  onSelectedValueChanged(newValue: string, oldValue: string) {
    if (newValue !== oldValue) {
      this.selectedValue = newValue;
    }
  }

  componentWillLoad() {
    this.dataDidChangeHandler(this.data);
  }

  render() {
    let listOptions = this.options.map((option) => {
      return (
        <dropdown-menu-item
          option={option}
          onClick={() => {
            this.selectedValue = option;
          }}
        >
          <button-element>{option}</button-element>
        </dropdown-menu-item>
      );
    });
    return [
      <dropdown-menu title={this.selectedValue}>{listOptions}</dropdown-menu>,
    ];
  }
}
