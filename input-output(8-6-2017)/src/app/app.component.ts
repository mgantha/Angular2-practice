import { Component } from '@angular/core';
import {ChildcomponentComponent} from './childcomponent/childcomponent.component';

@Component({
  selector: 'app-root',
  template: `<h1>Parent App Component</h1>
              Enter parent app component value:<input type="text" #ptext (keyup)="0">
              <p>value from child component is:</p>
              {{childData}}
              <app-childcomponent  (childEvent)="childData=$event" [parentData]="ptext.value"></app-childcomponent>`
})
export class AppComponent {
  title = 'app';
  public childData:string;

}
