import { Component, OnInit } from "@angular/core";
import { CurrencyConversionData } from "src/app/data/models/currencyConversionData.entity";
import { ConverterService } from "src/app/data/services/converter.service";

@Component({
    selector: "app-converter",
    templateUrl: './currency-converter.component.html',
    styleUrls: ['./currency-converter.component.css']
})

export class CurrencyConverterComponent implements OnInit {

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
        this.isLoading = true
        this.hasData = false

        this.currencyConversionCardData = []
        
        this.converterService.getConversionByCurrencyType(currencyTypeList).subscribe(
            result => {

                for(let prop in result) {
                    result[prop].bid = parseFloat(result[prop].bid)
                    result[prop].name = this.loadCurrencyName(result[prop].name)
                    this.currencyConversionCardData.push(result[prop])
                }

                this.hasData = true
                this.isLoading = false

            },
            err => {
                this.currencyConversionCardData.push({name: 'Dólar Canadense', bid: null},{name: 'Peso Argentino', bid: null},{name: 'Libra Esterlina', bid: null} )
                this.isLoading = false
            },
        )
    }

    loadCurrencyName(name: string) {
        let nameArray = name.split('/')
        let formattedCurrencyDescription = nameArray[0]
        return formattedCurrencyDescription
    }

    refreshData(refreshDataSubmit: boolean) {
        if(refreshDataSubmit) this.loadCurrencyConversion(this.CURRENCY_TYPE_LIST)
    }

}