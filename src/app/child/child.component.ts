import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input() parentMessageData: string ="";

  @Output() childMessage: EventEmitter<string> = new EventEmitter<string>();

  dataHandler()
  {
    this.childMessage.emit("Hello Child Component....")
  }

}
