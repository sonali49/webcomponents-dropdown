import { EventEmitter } from "../../stencil-public-runtime";
export declare class MyMenuItem {
  option: string;
  open: boolean;
  openChangedHandler(open: boolean): void;
  openChanged: EventEmitter;
  render(): any;
}
