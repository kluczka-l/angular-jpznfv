import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  siteName = 'Ripples Angular';
 
  topbarImageUrl = "https://github.com/kluczka-l/angular-jpznfv/blob/master/src/assets/ripples.jpg?raw=true";
  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);
}