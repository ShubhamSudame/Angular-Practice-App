import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { ShoppingListComponent } from "./shopping-list.component";
import { WizardComponent } from "./wizard/wizard.component";
import { NgWizardModule, NgWizardConfig, THEME } from 'ng-wizard';
import { CreditCardInfoComponent } from "../shared/payment-info/credit-card-info/credit-card-info.component";
import { AddressComponent } from "../shared/address/address.component";
import { AddressModule } from "../shared/address/address.module";
import { PaymentInfoModule } from "../shared/payment-info/payment-info.module";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { ShoppingCartComponent } from "./shopping-cart/shopping-cart.component";

const ngWizardConfig: NgWizardConfig = {
    theme: THEME.default
  };

@NgModule({
    declarations: [
        ShoppingListComponent,
        ShoppingEditComponent,
        ShoppingCartComponent,
        WizardComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            { path: '', component: ShoppingListComponent},
        ]),
        NgWizardModule.forRoot(ngWizardConfig),
        AddressModule,
        PaymentInfoModule,
        MatCheckboxModule
    ]
})
export class ShoppingListModule {

}