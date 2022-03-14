import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "src/app/auth/auth.service";
import { DataStorageService } from "../../data-storage.service";
import { CreditCardExpiryMMValidator } from "./credit-card-validator.directive";

@Component({
    selector: 'app-credit-card-info',
    templateUrl: './credit-card-info.component.html',
    styleUrls: ['./credit-card-info.component.css']
})
export class CreditCardInfoComponent implements OnInit{
    creditcardForm: FormGroup;

    constructor(private auth: AuthService,
                private ds: DataStorageService) {

    }

    ngOnInit(): void {
        const user_id = this.auth.user.value.id;

        this.ds.getCreditCardInfo().subscribe(creditCard => {
            console.log(creditCard.data);
            if (creditCard.userid === user_id) {
              this.creditcardForm = new FormGroup({
                cardOwnerName: new FormControl(creditCard.data.cardOwnerName, Validators.required),
                cardNumber: new FormControl(creditCard.data.cardNumber, Validators.required),
                expiryMM: new FormControl(creditCard.data.expiryMM, [Validators.required,  CreditCardExpiryMMValidator]),
                expiryYY: new FormControl(creditCard.data.expiryYY, Validators.required),
                cvv: new FormControl(creditCard.data.cvv, Validators.required)
              });
            }
          });

        this.creditcardForm = new FormGroup({
            cardOwnerName: new FormControl(null, Validators.required),
            cardNumber: new FormControl(null, Validators.required),
            expiryMM: new FormControl(null, [Validators.required, Validators.min(1), Validators.max(12), CreditCardExpiryMMValidator]),
            expiryYY: new FormControl(null, [Validators.required, Validators.min(new Date().getFullYear() - 2000), Validators.max(new Date().getFullYear() + 10 - 2000)]),
            cvv: new FormControl(null, [Validators.required, Validators.maxLength(3), Validators.minLength(3)])
        });
    }

    onSubmit() {
        //add current form details as a credit card object.
        console.log(this.creditcardForm.value);
        this.ds.storeCreditCardInfo(this.auth.user.value.id, this.creditcardForm.value);
    }
}