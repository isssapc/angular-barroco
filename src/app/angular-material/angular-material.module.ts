import { NgModule } from '@angular/core';

import {
  MdMenuModule,
  MdCheckboxModule,
  MdRadioModule,
  MdIconModule,
  MdToolbarModule,
  MdSidenavModule,
  MdButtonModule,
  MdTabsModule,
  MdListModule,
  MdExpansionModule,
  MdSlideToggleModule,
  MdCardModule,
  MdInputModule,
  MdSelectModule
} from "@angular/material";

@NgModule({
  imports: [
    MdMenuModule,
    MdCheckboxModule,
    MdRadioModule,
    MdIconModule,
    MdToolbarModule,
    MdSidenavModule,
    MdButtonModule,
    MdTabsModule,
    MdListModule,
    MdExpansionModule,
    MdSlideToggleModule,
    MdCardModule,
    MdInputModule,
    MdSelectModule
  ],
  exports: [
    MdMenuModule,
    MdCheckboxModule,
    MdRadioModule,
    MdIconModule,
    MdToolbarModule,
    MdSidenavModule,
    MdButtonModule,
    MdTabsModule,
    MdListModule,
    MdExpansionModule,
    MdSlideToggleModule,
    MdCardModule,
    MdInputModule,
    MdSelectModule
  ]
})
export class AngularMaterialModule { }
