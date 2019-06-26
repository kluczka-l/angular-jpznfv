import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { KCardComponent } from './kcard.component';
import { KardComponent } from './kard/kard.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, KCardComponent, KardComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
