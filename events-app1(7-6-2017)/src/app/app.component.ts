import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
//    template: ` <input type="text" #name (keyup.enter)="onEnter1(name.value1)">
//                <p>{{value1}}</p>
//                <input type="text" #password (keyup.enter)="onEnter2(password.value2)">
//                <p>{{value2}}</p>
//                <button (click)="onClick()">Submmit</button>
//                <h1>{{result}}</h1>`
  template:
            `FirstName:<input  [(ngModel)]="first"/><br/>
            LastName:<input [(ngModel)]="second"/><br/><br/>
            
            
            <button (click)="onClick()">submit</button>
            <div *ngIf="showelement">
              fullname: {{first}} {{second}}
              </div>`
           
         
            
            
          
            
            

 
})
export class AppComponent {
  
//      value1='';
//      value2='';
    showelement=false;
//    public color='red';
//    public colors=['red','blue','green'];
    first:string;
    last:string;
  
    constructor(){
      this.first="";
      this.last="";

      
    }
 
//    onEnter1(value1: string){
//          console.log("first");
//          this.value1=value1;
//    }

//    onEnter2(value2: string){
//          console.log("Second");
//          this.value2=value2;
//    }



  onClick()
   {
      this.showelement=true;
  }




// forswitchcase we have to add this code in template
//  <div [ngSwitch]="color">
//             <p *ngSwitchCase="'red'">red color is shown</p>
//             <p *ngSwitchCase="'blue'">blue color is shown</p>
//             <p *ngSwitchCase="'green'">green color is shown</p>
//             <p *ngSwitchDefault>Invalid</p>
//             </div>
//             <ul>
//             <li *ngFor="let color of colors">{{color}}</li>
           
//             </ul>
}

