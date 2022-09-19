import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialExampleModule } from '../material.module';
import {
  DialogAnimationsExample,
  DialogAnimationsExampleDialog,
} from './dialog-animations-example';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { AccordionModule } from './lib/accordion/accordion.module';

@NgModule({
  declarations: [DialogAnimationsExample, DialogAnimationsExampleDialog],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AccordionModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [DialogAnimationsExample],
})
export class AppModule {}
