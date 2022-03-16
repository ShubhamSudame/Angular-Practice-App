import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { CreditCard } from "./credit-card.model";

@Injectable({
    providedIn: 'root'
})
export class CreditCardInfoService {
    private creditCards: CreditCard[] = [
        new CreditCard('Shubham Sandeep Sudame', '1112223334445556', 8, 30, 312)
    ];
    selectedCreditCard = new Subject<number>();
    creditCardsChanged = new Subject<CreditCard[]>();
    constructor() {}

    public updateCreditCard(index: number, creditCard: CreditCard) {
        this.creditCards[index] = creditCard;
        this.creditCardsChanged.next(this.creditCards);
    }

    public addCreditCard(creditCard: CreditCard) {
        this.creditCards.push(creditCard);
        this.creditCardsChanged.next(this.creditCards);
    }

    public getCreditCard(index: number) {
        return this.creditCards[index];
    }

    public getCreditCards() {
        return this.creditCards.slice();
    }
}