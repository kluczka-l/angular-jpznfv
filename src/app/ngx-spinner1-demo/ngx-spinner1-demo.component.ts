import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-ngx-spinner1-demo',
  templateUrl: './ngx-spinner1-demo.component.html',
  styleUrls: ['./ngx-spinner1-demo.component.css']
})
export class NgxSpinner1DemoComponent implements OnInit {

  
  ngOnInit() {
  }

spinner1 = 'sp1';
  constructor(private spinner: NgxSpinnerService) { }

  //showSpinner(name: string) {
  //  this.spinner.show(name);
  //}

  hideSpinner(name: string) {
    this.spinner.hide(name);
  }

  showSpinner(name: string) {
    this.spinner.show(name);
    setTimeout(() => {
      this.spinner.hide(name);
    }, 4000);
  }
}