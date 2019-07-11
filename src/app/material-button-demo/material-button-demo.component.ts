import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-material-button-demo',
  templateUrl: './material-button-demo.component.html',
  styleUrls: ['./material-button-demo.component.css']
})
export class MaterialButtonDemoComponent implements OnInit {
@ViewChild('submitButton', {static: false}) submitButton;

centered = false;
   disabled = false;
   unbounded = false;
   radius: number;
   color: string;
   
  constructor() { }

  ngOnInit() {
  }

  changeEvent(el: ElementRef){
    this.submitButton.focus();
  //window.alert(this.el);

 }
}