export declare class DropdownIntegratedComponent {
  el: HTMLElement;
  resetValue: boolean;
  data: string | [];
  selectedValue: string;
  private options;
  dataDidChangeHandler(newValue: [] | string): void;
  onSelectedValueChanged(newValue: string, oldValue: string): void;
  componentWillLoad(): void;
  render(): any[];
}
