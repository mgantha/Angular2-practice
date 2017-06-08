import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {TutorialComponent} from './tutorial.component';
import {ButtonComponent} from  './button.component';
import { EventsappComponent } from './eventsapp/eventsapp.component';
 
@NgModule({
  declarations: [
    AppComponent,
    TutorialComponent,
    ButtonComponent,
    EventsappComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
