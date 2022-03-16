import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Subscription } from "rxjs";
import { AuthService } from "src/app/auth/auth.service";
import { DataStorageService } from "../../data-storage.service";
import { CreditCardInfoService } from "./credit-card-info.service";
import { CreditCardExpiryMMValidator, CreditCardExpiryYYValidator } from "./credit-card-validator.directive";
import { CreditCard } from "./credit-card.model";

@Component({
    selector: 'app-credit-card-info',
    templateUrl: './credit-card-info.component.html',
    styleUrls: ['./credit-card-info.component.css']
})
export class CreditCardInfoComponent implements OnInit, OnDestroy{
    creditcardForm: FormGroup;
    subscription: Subscription;
    editMode = false;
    editedIndex: number;
    constructor(private auth: AuthService,
                private ds: DataStorageService,
                private ccs: CreditCardInfoService) {

    }

    ngOnInit(): void {
        const user_id = this.auth.user.value.id;
        this.subscription = this.ccs.selectedCreditCard
        .subscribe(
          (index: number) => {
            const creditCard = this.ccs.getCreditCard(index);
            this.editMode = true;
            this.editedIndex = index;
            this.creditcardForm = new FormGroup({
              cardOwnerName: new FormControl(creditCard.cardOwnerName, Validators.required),
              cardNumber: new FormControl(creditCard.cardNumber, [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(16), Validators.maxLength(16)]),
              expiryMM: new FormControl(creditCard.expiryMM, [Validators.required,  CreditCardExpiryMMValidator]),
              expiryYY: new FormControl(creditCard.expiryYY, [Validators.required, CreditCardExpiryYYValidator]),
              cvv: new FormControl(null, Validators.required)
            });
          });
        // this.ds.getCreditCardInfo().subscribe(creditCard => {
        //     console.log(creditCard.data);
        //     if (creditCard.userid === user_id) {
        //       this.creditcardForm = new FormGroup({
        //         cardOwnerName: new FormControl(creditCard.data.cardOwnerName, Validators.required),
        //         cardNumber: new FormControl(creditCard.data.cardNumber, Validators.required),
        //         expiryMM: new FormControl(creditCard.data.expiryMM, [Validators.required,  CreditCardExpiryMMValidator]),
        //         expiryYY: new FormControl(creditCard.data.expiryYY, [Validators.required, CreditCardExpiryYYValidator]),
        //         cvv: new FormControl(creditCard.data.cvv, Validators.required)
        //       });
        //     }
        //   });

        this.creditcardForm = new FormGroup({
            cardOwnerName: new FormControl(null, Validators.required),
            cardNumber: new FormControl(null, [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(16), Validators.maxLength(16)]),
            expiryMM: new FormControl(null, [Validators.required, Validators.min(1), Validators.max(12), CreditCardExpiryMMValidator]),
            expiryYY: new FormControl(null, [Validators.required, Validators.min(new Date().getFullYear() - 2000), Validators.max(new Date().getFullYear() + 10 - 2000), CreditCardExpiryYYValidator]),
            cvv: new FormControl(null, [Validators.required, Validators.maxLength(3), Validators.minLength(3)])
        });
    }

    onSubmit() {
        //add current form details as a credit card object.
        console.log(this.creditcardForm.value);
        this.ds.storeCreditCardInfo(this.auth.user.value.id, this.creditcardForm.value);

        const creditCard = new CreditCard(
          this.creditcardForm.value.cardOwnerName,
          this.creditcardForm.value.cardNumber,
          this.creditcardForm.value.expiryMM,
          this.creditcardForm.value.expiryYY,
          this.creditcardForm.value.cvv);
        if(this.editMode) {
          this.ccs.updateCreditCard(this.editedIndex, creditCard);
        }
        else {
          this.ccs.addCreditCard(creditCard);
        }
    }

    ngOnDestroy(): void {
      this.subscription.unsubscribe();
    }
}