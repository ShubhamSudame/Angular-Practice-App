import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { ShoppingListComponent } from "./shopping-list.component";
import { WizardComponent } from './wizard/wizard.component';
import { NgWizardModule, NgWizardConfig, THEME } from 'ng-wizard';
 
const ngWizardConfig: NgWizardConfig = {
  theme: THEME.default
};

@NgModule({
    declarations: [
        ShoppingListComponent,
        ShoppingEditComponent,
        WizardComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            { path: '', component: ShoppingListComponent},
        ]),
        NgWizardModule.forRoot(ngWizardConfig)
    ]
})
export class ShoppingListModule {

}