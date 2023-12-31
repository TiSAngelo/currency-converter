import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { CurrencyConverterComponent } from './currency-converter.component';


describe('CurrencyConverterComponent', () => {
    let component: CurrencyConverterComponent;
    let fixture: ComponentFixture<CurrencyConverterComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [CurrencyConverterComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CurrencyConverterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});