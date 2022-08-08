import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DirectivesAssignComponent } from './directives-assign/directives-assign.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectivesAssignComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
