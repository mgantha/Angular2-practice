import { Component } from '@angular/core';

@Component({
    selector: 'my-tutorials',
    template: `<h2>{{title}}</h2>
                <img [src]="imglink">
              <div [class.myclass]="applyclass">ApplyClass</div>
              <div [style.color]="applyblue? 'blue' : 'orange'">this is style binding</div>`,

    styles:[`.myclass{
        color:red;
    }`]
                
})

export class TutorialComponent{
    public title="this is mouni....from the property ";
    public imglink="http://lorempixel.com/400/200";
    public applyclass=true;
    public applyblue=true;

}