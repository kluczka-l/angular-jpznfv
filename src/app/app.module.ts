import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { KardComponent } from './kard/kard.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CardsComponent } from './cards/cards.component';
import { HomeComponent } from './home/home.component';
import { AoiManagementComponent } from './aoi-management/aoi-management.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'cards', pathMatch: 'full', component: CardsComponent},
      { path: 'aoi', pathMatch: 'full', component: AoiManagementComponent}
    ]) ],
  declarations: [ AppComponent, KardComponent, TopBarComponent, CardsComponent, HomeComponent, AoiManagementComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
