import { EventEmitter } from '../../stencil-public-runtime';
export declare class DropdownIntegratedComponent {
  el: HTMLElement;
  resetValue: boolean;
  data: string | [];
  private options;
  selectedValue: string;
  getChangeSelectedItems: EventEmitter<string>;
  dataDidChangeHandler(newValue: [] | string): void;
  componentWillLoad(): void;
  onSelectedValueChanged(newValue: string, oldValue: string): void;
  onUserSelection(event: Event): string;
  render(): any[];
}
