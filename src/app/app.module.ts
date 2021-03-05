import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { ScreenComponent } from './screen/screen.component';
import { SimplecalculatorComponent } from './simplecalculator/simplecalculator.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    ScreenComponent,
    SimplecalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
