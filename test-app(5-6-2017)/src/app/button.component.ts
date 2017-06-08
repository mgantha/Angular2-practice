import { Component } from '@angular/core';


@Component({
    selector: 'button',
    template: `<h1>{{title}}</h1>
                <button (click)="onclick()">click</button>`
})

export class ButtonComponent{
 public title="This is the events example";
 onclick(){
     console.log('Button Clicked');
 }
}