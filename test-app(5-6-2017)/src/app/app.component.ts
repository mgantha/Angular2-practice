import { Component } from '@angular/core';
import {TutorialComponent} from './tutorial.component'

@Component({
  selector: 'app-root',
  template: `<h1>{{title1}}</h1>
              <my-tutorials></my-tutorials>`,
  styles: [`h1 {
    color:orange;
}`]
 // templateUrl: './app.component.html',
//  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public title1=" welcome to angular from property binding";
}
