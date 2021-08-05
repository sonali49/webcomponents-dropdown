import { EventEmitter } from '../../stencil-public-runtime';
export declare class MyMenu {
  el: HTMLElement;
  items: HTMLDropdownMenuItemElement[];
  open: boolean;
  private handleToggle;
  openChangedHandler(open: boolean): void;
  componentWillLoad(): void;
  title: string;
  openChanged: EventEmitter;
  render(): any;
}
