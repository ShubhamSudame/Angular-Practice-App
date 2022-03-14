import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CreditCardInfoComponent } from "./credit-card-info/credit-card-info.component";
import { NetbankingInfoComponent } from "./netbanking-info/netbanking-info.component";
import { PaytmInfoComponent } from "./paytm-info/paytm-info.component";

@NgModule({
    declarations: [
        CreditCardInfoComponent,
        PaytmInfoComponent,
        NetbankingInfoComponent
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule
    ],
    exports: [
        CreditCardInfoComponent,
        PaytmInfoComponent,
        NetbankingInfoComponent
    ]
})
export class PaymentInfoModule {

}