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
import { MaterialDemoComponent } from './material-demo/material-demo.component';
import { MaterialDesignInfoComponent } from './material-design-info/material-design-info.component';
import { MaterialCheckboxDemoComponent } from './material-checkbox-demo/material-checkbox-demo.component';

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
      { path: 'aoi', pathMatch: 'full', component: AoiManagementComponent},
      { path: 'amd', pathMatch: 'full', component: MaterialDemoComponent},
      { path: 'mdi', pathMatch: 'full', component: MaterialDesignInfoComponent},
      { path: 'app-material-checkbox-demo', pathMatch: 'full', component: MaterialCheckboxDemoComponent},
    ]) ],
  declarations: [ AppComponent, KardComponent, CardsComponent, HomeComponent, AoiManagementComponent, MaterialDemoComponent, MaterialDesignInfoComponent, MaterialCheckboxDemoComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
