import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AlertComponent } from "./alert/alert.component";
import { DropdownDirective } from "./dropdown.directive";
import { LoadingSpinnerComponent } from "./loading-spinner/loading-spinner.component";
import { ReactiveFormsModule } from '@angular/forms';
import { PaymentInfoComponent } from "./payment-info/payment-info.component";
import { PaymentInfoModule } from "./payment-info/payment-info.module";
import { AddressModule } from "./address/address.module";

@NgModule({
    declarations: [
        AlertComponent,
        LoadingSpinnerComponent,
        DropdownDirective,
        PaymentInfoComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        PaymentInfoModule,
        //AddressModule
    ],
    exports: [
        AlertComponent,
        LoadingSpinnerComponent,
        DropdownDirective,
        PaymentInfoComponent
    ]
})
export class SharedModule {

}