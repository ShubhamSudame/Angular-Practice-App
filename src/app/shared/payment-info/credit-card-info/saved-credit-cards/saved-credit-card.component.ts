import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { CreditCardInfoService } from "../credit-card-info.service";
import { CreditCard } from "../credit-card.model";

@Component({
    selector: 'app-saved-credit-cards',
    templateUrl: './saved-credit-card.component.html'
})
export class SavedCreditCardsComponent implements OnInit, OnDestroy {
    creditCards: CreditCard[];
    private cardsChanged: Subscription;
    constructor(private ccs: CreditCardInfoService) {}

    ngOnInit(): void {
        this.creditCards = this.ccs.getCreditCards();
        this.cardsChanged = this.ccs.creditCardsChanged.subscribe((creditCards: CreditCard[]) => {
            this.creditCards = creditCards;
        });
    }

    ngOnDestroy(): void {
        this.cardsChanged.unsubscribe();
    }
    

    public onSelectCreditCard(event: any) {
        console.log(event);
        this.ccs.selectedCreditCard.next(event);
    }
}