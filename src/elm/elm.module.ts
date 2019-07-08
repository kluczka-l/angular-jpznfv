import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HighlightDirectiveFromElm } from './highlight.directive';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HighlightDirectiveFromElm],
  exports: [HighlightDirectiveFromElm],
})
export class ElmModule { }