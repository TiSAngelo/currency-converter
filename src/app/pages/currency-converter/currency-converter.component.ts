import { Component, OnInit } from "@angular/core";
import { CurrencyConversionData } from "src/app/models/currencyConversionData.entity";
import { ConverterService } from "src/app/services/converter.service";

@Component({
    selector: "app-converter",
    templateUrl: './currency-converter.component.html',
    styleUrls: ['./currency-converter.component.css']
})

export class CurrencyConverterComponent implements OnInit {

    cards = ["card1", "card2", "card3"]

    CAN_DOLLAR_TO_BRA_REAL_TYPE: string = "CAD-BRL"
    ARG_PESO_TO_BRA_REAL_TYPE: string = "ARS-BRL"
    ENG_LIB_TO_BRA_REAL_TYPE: string = "GBP-BRL"

    CURRENCY_TYPE_LIST:string = ""

    currencyConversionCardData: CurrencyConversionData[] = []

    constructor(
        private converterService: ConverterService
    ) {
        this.CURRENCY_TYPE_LIST = `${this.CAN_DOLLAR_TO_BRA_REAL_TYPE},${this.ARG_PESO_TO_BRA_REAL_TYPE},${this.ENG_LIB_TO_BRA_REAL_TYPE}`
    }

    ngOnInit() {
        this.loadCurrencyConversion(this.CURRENCY_TYPE_LIST)
    }

    loadCurrencyConversion(currencyTypeList: string) {
        this.converterService.getConversionByCurrencyType(currencyTypeList).subscribe(
            result => {
                this.currencyConversionCardData = result
                console.log("currency", this.currencyConversionCardData)
            },
            err => console.log("err", err)
        )
    }
}