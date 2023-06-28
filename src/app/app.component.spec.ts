import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID, DEFAULT_CURRENCY_CODE } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ConverterCardComponent } from './components/converter-card/converter-card.component';
import { HeaderComponent } from './components/header/header.component';
import { CurrencyConverterComponent } from './pages/currency-converter/currency-converter.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
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
    ]
    
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'currency-converter-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('currency-converter-app');
  });

});
