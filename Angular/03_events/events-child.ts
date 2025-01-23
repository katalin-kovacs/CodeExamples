import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-child",
  template: `<button (click)="notifyParent()">Notify Parent</button>`,
})
export class ChildComponent {
  @Output() notify = new EventEmitter<string>();

  notifyParent() {
    this.notify.emit("Child clicked!");
  }
}
