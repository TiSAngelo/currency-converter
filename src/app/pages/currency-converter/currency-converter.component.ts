import { Component, OnInit } from "@angular/core";
import { CurrencyConversionData } from "src/app/models/currencyConversionData.entity";
import { ConverterService } from "src/app/services/converter.service";

@Component({
    selector: "app-converter",
    templateUrl: './currency-converter.component.html',
    styleUrls: ['./currency-converter.component.css']
})

export class CurrencyConverterComponent implements OnInit {

    //cards = ["card1", "card2", "card3"]

    CAN_DOLLAR_TO_BRA_REAL_TYPE: string = "CAD-BRL"
    ARG_PESO_TO_BRA_REAL_TYPE: string = "ARS-BRL"
    ENG_LIB_TO_BRA_REAL_TYPE: string = "GBP-BRL"

    CURRENCY_TYPE_LIST:string = ""

    currencyConversionCardData: CurrencyConversionData[] = []

    isLoading: boolean = false
    hasData: boolean = false

    constructor(
        private converterService: ConverterService
    ) {
        this.CURRENCY_TYPE_LIST = `${this.CAN_DOLLAR_TO_BRA_REAL_TYPE},${this.ARG_PESO_TO_BRA_REAL_TYPE},${this.ENG_LIB_TO_BRA_REAL_TYPE}`
    }

    ngOnInit() {
        this.loadCurrencyConversion(this.CURRENCY_TYPE_LIST)
        setInterval(() => this.loadCurrencyConversion(this.CURRENCY_TYPE_LIST), 180000)
    }

    loadCurrencyConversion(currencyTypeList: string) {
        this.currencyConversionCardData = []
        this.hasData = false
        this.isLoading = true
        this.converterService.getConversionByCurrencyType(currencyTypeList).subscribe(
            result => {

                Object.keys(result).forEach(key => {
                    this.currencyConversionCardData.push(result[key])
                })

                this.currencyConversionCardData.forEach(currency => {
                    currency.bidFloat = this.formatBRLValue(currency.bid)
                    currency.bid = parseFloat(currency.bid).toLocaleString('pt-BR', {currency: 'BRL', minimumFractionDigits: 2, maximumFractionDigits: 2})
                    currency.name = this.formatCurrencyName(currency.name)
                })

                this.hasData = true
                this.isLoading = false
                
            },
            err => {
                this.isLoading = false
            }
        )
    }

    formatBRLValue(bid: string) {
        let stringToFloat = parseFloat(bid)
        return this.formattedDecimals(stringToFloat, 2)
    }

    formattedDecimals(bidFloat: number, decimals: number) {
        const ORDER_OF_MAGNITUDE = Math.pow(10, decimals)
        return Math.trunc(bidFloat * ORDER_OF_MAGNITUDE) / ORDER_OF_MAGNITUDE
    }

    formatCurrencyName(name: string) {
        let nameArray = name.split('/')
        let formattedCurrencyName = nameArray[0]
        return formattedCurrencyName
    }

    refreshData(refreshDataSubmit: boolean) {
        console.log("refresh", refreshDataSubmit)
    }
}