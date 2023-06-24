import { Component, Input, OnInit } from "@angular/core";
import { CurrencyConversionData } from "src/app/models/currencyConversionData.entity";

@Component({
    selector: "app-converter-card",
    templateUrl: './converter-card.component.html',
    styleUrls: ['./converter-card.component.css']
})

export class ConverterCardComponent implements OnInit {
    @Input('currencyConversionCardData') currencyConversionCardData: CurrencyConversionData[] = []

    constructor() {}

    ngOnInit() {
        setTimeout(() => console.log("=>", this.currencyConversionCardData), 1000)
       // console.log("=>", this.currencyConversionCardData)
    }
}