import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`<p [ngClass]="{classOne:cone,classTwo:ctwo}">ng class paragaraph</p>
              <p [ngStyle]="{'font-style':style,'font-size':size}">ngstyle Paragraph</p>`, 
  styles: [`.classOne{color:white}
            .classTwo{background-color:black}`]
})
export class AppComponent {
  title = 'app';
  public cone=true;
  public ctwo=true;
  public style='italic';
  public size='30px';

}
