import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { CurrencyConversionData } from "src/app/models/currencyConversionData.entity";

@Component({
    selector: "app-converter-card",
    templateUrl: './converter-card.component.html',
    styleUrls: ['./converter-card.component.css']
})

export class ConverterCardComponent implements OnInit {
    @Input('isLoading') isLoading: boolean = true
    @Input('hasData') hasData: boolean = false
    @Input('card') card: CurrencyConversionData = new CurrencyConversionData()
    @Output() refreshEmmiter: EventEmitter<any> = new EventEmitter()


    constructor() {}

    ngOnInit() {
        if(this.card) {
/*             this.isLoading = false
            this.hasData = false */
        }
    }

    refreshData(refreshDataSubmit: boolean) {
        this.refreshEmmiter.emit(refreshDataSubmit)
    }

}