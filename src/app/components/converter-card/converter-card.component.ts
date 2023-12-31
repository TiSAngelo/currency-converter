import { Component, EventEmitter, Input, Output } from "@angular/core";
import { CurrencyConversionData } from "src/app/data/models/currencyConversionData.entity";

@Component({
    selector: "app-converter-card",
    templateUrl: './converter-card.component.html',
    styleUrls: ['./converter-card.component.css']
})

export class ConverterCardComponent {
    @Input('isLoading') isLoading: boolean = true
    @Input('hasData') hasData: boolean = false
    @Input('card') card: CurrencyConversionData = new CurrencyConversionData()
    @Output() refreshEmmiter: EventEmitter<any> = new EventEmitter()


    constructor() {}

    refreshData(refreshDataSubmit: boolean) {
        this.refreshEmmiter.emit(refreshDataSubmit)
    }

}