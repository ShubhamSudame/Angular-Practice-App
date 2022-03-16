import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CreditCardInfoComponent } from "./credit-card-info/credit-card-info.component";
import { NetbankingInfoComponent } from "./netbanking-info/netbanking-info.component";
import { PaytmInfoComponent } from "./paytm-info/paytm-info.component";
import { MatTooltipModule } from '@angular/material/tooltip';
import { SlicePipe } from "../slice.pipe";
import { CreditCardInfoModule } from "./credit-card-info/credit-card-info.module";

@NgModule({
    declarations: [
        PaytmInfoComponent,
        NetbankingInfoComponent,
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        MatTooltipModule,
        CreditCardInfoModule
    ],
    exports: [
        PaytmInfoComponent,
        NetbankingInfoComponent,
    ]
})
export class PaymentInfoModule {

}