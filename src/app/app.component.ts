import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  siteName = 'Ripples Angular';
  image1Url = "https://github.com/kluczka-l/angular-jpznfv/blob/master/src/assets/ripples.jpg?raw=true";
  image2Url = "https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(97).jpg";

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
