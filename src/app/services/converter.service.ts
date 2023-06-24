import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";


@Injectable({
    providedIn: 'root'
})

export class QuotesService {
    
    constructor( private apiService: ApiService) {}

    getConversionByCurrencyType(currencyTypeList: string) {
        return this.apiService.get(`last/${currencyTypeList}`)
    }
}