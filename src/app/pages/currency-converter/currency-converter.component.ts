import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-converter",
    templateUrl: './currency-converter.component.html',
    styleUrls: ['./currency-converter.component.css']
})

export class CurrencyConverterComponent implements OnInit {

    cards = ["card1", "card2", "card3"]

    constructor() {}

    ngOnInit() {}
}

/*     MONEY_LIST: string = "CAD-BRL,ARS-BRL,GBP-BRL"
    
    constructor (
        private quotesService: QuotesService
    ) {}

    ngOnInit() {
        this.loadMoneyQuotes(this.MONEY_LIST)
    }

    loadMoneyQuotes(moneyList: any) {
        this.quotesService.getQuotesByLocaleMoneyList(moneyList).subscribe(
            result => {
                console.log("result", result)
            },
            err => console.log("err", err)
        )
    } *///