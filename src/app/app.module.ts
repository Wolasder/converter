import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CalculateCurrencyModule} from './components/calculate-currency/calculate-currency.module';
import {CurrencyModule} from './components/currency/currency.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, CurrencyModule, CalculateCurrencyModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
