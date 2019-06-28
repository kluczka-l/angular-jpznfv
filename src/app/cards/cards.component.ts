import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
kard1 = { title: 'App 1 Title',
          subTitle: 'App 1 Sub Title',
          description: 'App 1 Description',
          imageUrl: "https://github.com/kluczka-l/angular-jpznfv/blob/master/src/assets/ripples.jpg?raw=true",
          footer: "App 1 Footer" };

kard2 = { title: 'App 2 Title',
          subTitle: 'App 2 Sub Title',
          description: 'App 2 Description',
          imageUrl: "https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(97).jpg",
          footer: "" };

  constructor() { }

  ngOnInit() {
  }

  clearCard(f: NgForm) {


    window.alert("hello" );

  }

}