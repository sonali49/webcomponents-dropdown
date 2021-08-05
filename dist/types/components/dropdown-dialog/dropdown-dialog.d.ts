import { EventEmitter } from "../../stencil-public-runtime";
export declare class MyDialog {
  el: HTMLElement;
  open: boolean;
  openChangedHandler(open: boolean): void;
  handleWindowClick(event: MouseEvent): void;
  openChanged: EventEmitter;
  render(): any;
}
