import { HttpClientModule } from '@angular/common/http';
import {LOCALE_ID, DEFAULT_CURRENCY_CODE, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ConverterCardComponent } from './components/converter-card/converter-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CurrencyConverterComponent } from './pages/currency-converter/currency-converter.component';
import localePt from '@angular/common/locales/pt';
import {registerLocaleData} from '@angular/common';

registerLocaleData(localePt)

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CurrencyConverterComponent,
    ConverterCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    {
        provide: LOCALE_ID,
        useValue: 'pt-BR'
    },

    {
        provide:  DEFAULT_CURRENCY_CODE,
        useValue: 'BRL'
    },
],
  bootstrap: [AppComponent]
})
export class AppModule { }
