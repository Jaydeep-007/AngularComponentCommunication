import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';

  parentMessage: string ="Hello from parent component..";

  childMessage: string = "";

  GetMessage(res : any)
  {
    this.childMessage =res;
  }

}
