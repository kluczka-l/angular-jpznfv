import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { KardComponent } from './kard/kard.component';
import { TopBarComponent } from './top-bar/top-bar.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,RouterModule.forRoot([
      { path: '', component: AppComponent },
    ]) ],
  declarations: [ AppComponent, KardComponent, TopBarComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
