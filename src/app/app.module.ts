import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ConverterCardComponent } from './components/converter-card/converter-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CurrencyConverterComponent } from './pages/currency-converter/currency-converter.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CurrencyConverterComponent,
    ConverterCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
