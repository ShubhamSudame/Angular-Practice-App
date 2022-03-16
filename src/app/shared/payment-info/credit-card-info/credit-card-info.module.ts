import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { SlicePipe } from "../../slice.pipe";
import { CreditCardInfoComponent } from "./credit-card-info.component";
import { SavedCreditCardsComponent } from "./saved-credit-cards/saved-credit-card.component";

@NgModule({
    declarations: [
        CreditCardInfoComponent,
        SavedCreditCardsComponent,
        SlicePipe
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    exports: [
        CreditCardInfoComponent,
        SavedCreditCardsComponent
    ]
})
export class CreditCardInfoModule {

}