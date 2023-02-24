import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';

import localePl from '@angular/common/locales/pl'; //pobieramy lokalizacje polski
import { FormsModule } from '@angular/forms';

registerLocaleData(localePl); //rejestrujemy lokalizacje polski

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [
    //ustawiamy domyslna date na polski
    { provide: LOCALE_ID, useValue: 'pl-PL' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
