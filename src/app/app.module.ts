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
import { MaterialButtonDemoComponent } from './material-button-demo/material-button-demo.component';
import { MaterialRadioButtonDemoComponent } from './material-radio-button-demo/material-radio-button-demo.component';
import { MaterialDatePickerDemoComponent } from './material-date-picker-demo/material-date-picker-demo.component';


import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { NgxDemoComponent } from './ngx-demo/ngx-demo.component';
import { NgxButtonDemoComponent } from './ngx-button-demo/ngx-button-demo.component';
import { NgxDataPickerDemoComponent } from './ngx-data-picker-demo/ngx-data-picker-demo.component';
import { NgxCheckboxDemoComponent } from './ngx-checkbox-demo/ngx-checkbox-demo.component';
import { NgxRadioButtonDemoComponent } from './ngx-radio-button-demo/ngx-radio-button-demo.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    ButtonsModule.forRoot(),
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
      { path: 'app-material-button-demo', pathMatch: 'full', component: MaterialButtonDemoComponent},
      { path: 'app-material-radio-button-demo', pathMatch: 'full', component: MaterialRadioButtonDemoComponent},
      { path: 'app-material-date-picker-demo', pathMatch: 'full', component: MaterialDatePickerDemoComponent},

      { path: 'ngxd', pathMatch: 'full', component: NgxDemoComponent},
      { path: 'app-ngx-checkbox-demo', pathMatch: 'full', component: NgxCheckboxDemoComponent},
      { path: 'app-ngx-button-demo', pathMatch: 'full', component: NgxButtonDemoComponent},
      { path: 'app-ngx-radio-button-demo', pathMatch: 'full', component: NgxRadioButtonDemoComponent},
      { path: 'app-ngx-date-picker-demo', pathMatch: 'full', component: NgxDataPickerDemoComponent},
    ]) ],
  declarations: [ AppComponent, KardComponent, CardsComponent, HomeComponent, AoiManagementComponent, MaterialDemoComponent, MaterialDesignInfoComponent, MaterialCheckboxDemoComponent, MaterialButtonDemoComponent, MaterialRadioButtonDemoComponent, MaterialDatePickerDemoComponent, NgxDemoComponent, NgxButtonDemoComponent, NgxDataPickerDemoComponent, NgxCheckboxDemoComponent, NgxRadioButtonDemoComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
