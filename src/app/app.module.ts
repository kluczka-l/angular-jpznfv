import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DemoMaterialModule } from './material-module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ElmModule } from '../elm/elm.module';

import { AppComponent } from './app.component';
import { KardComponent } from './kard/kard.component';

import { CardsComponent } from './cards/cards.component';
import { HomeComponent } from './home/home.component';
import { AoiManagementComponent } from './aoi-management/aoi-management.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    BrowserAnimationsModule,
    ElmModule,
    DemoMaterialModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'cards', pathMatch: 'full', component: CardsComponent},
      { path: 'aoi', pathMatch: 'full', component: AoiManagementComponent}
    ]) ],
  declarations: [ AppComponent, KardComponent, CardsComponent, HomeComponent, AoiManagementComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
