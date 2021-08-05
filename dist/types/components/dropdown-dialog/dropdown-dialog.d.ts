import { EventEmitter } from '../../stencil-public-runtime';
export declare class MyDialog {
  el: HTMLElement;
  open: boolean;
  openChangedHandler(open: boolean): void;
  openChanged: EventEmitter;
  render(): any;
}
