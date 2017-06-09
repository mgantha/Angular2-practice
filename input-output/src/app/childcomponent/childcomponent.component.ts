import { Component} from '@angular/core';
import { EventEmitter} from '@angular/core';
 

@Component({
  selector: 'app-childcomponent',
  template: `<h1>child App Component</h1>
              Enter child app component value:<input type="text" #ctext (keyup)="onChange(ctext.value)">
              <p>value from child component is:
             </p>
             {{parentData}}`,
  inputs: [`parentData`],
  outputs: [`childEvent`]
})
export class ChildcomponentComponent  {

public parentData:string;
childEvent =new EventEmitter<string>();

onChange(value:string){
  this.childEvent.emit(value);
}


  }


