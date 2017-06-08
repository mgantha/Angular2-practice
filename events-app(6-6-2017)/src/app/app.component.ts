import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>{{title}}</h1>
              <button (click)="onClickConsole()">clickforconsole</button><br/><br/>
              <button (click)="onClick()">clickformsg</button><br/><br/>
               {{clickMessage}}
               <button (click)="onChange()">clickforimage</button><br/><br/>
               <div *ngIf="show">  
                 <img [src]="picture" width=300 height=200>
                </div>`
})
export class AppComponent {
 public  title = 'welcome to events concept';
 show:boolean;
 picture:string;
 clickMessage = '';

   constructor()
    {this.show=false;}

   onClickConsole(){
     console.log('Button clicked');
 
    }

doSomething(){

}
   onClick()
   {
    
    this.clickMessage = 'This is the evevt message';
   

   }
    onChange()
   {

    this.show=true;
   this.picture="../assets/Jellyfish.jpg";

   }
}
