import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  siteName = 'Ripples Angular';
  imiageUrl = "https://github.com/kluczka-l/angular-jpznfv/blob/master/src/assets/ripples.jpg?raw=true";

  k_card_type_desired = "not basic";
  cardTitleTypeLocal = "basic";

  changeCard() {
    if ( this.cardTitleTypeLocal == "basic") {
      this.cardTitleTypeLocal = "not basic";
    } else {
      this.cardTitleTypeLocal = "basic";
    }
    console.log(this.cardTitleTypeLocal)
  }
  
}
