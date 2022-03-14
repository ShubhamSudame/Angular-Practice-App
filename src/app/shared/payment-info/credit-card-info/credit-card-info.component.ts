import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: 'app-credit-card-info',
    templateUrl: './credit-card-info.component.html',
    styleUrls: ['./credit-card-info.component.css']
})
export class CreditCardInfoComponent implements OnInit{
    creditcardForm: FormGroup;

    constructor() {

    }

    ngOnInit(): void {
        this.creditcardForm = new FormGroup({
            cardOwnerName: new FormControl(null, Validators.required),
            cardNumber: new FormControl(null, Validators.required),
            expiryMM: new FormControl(null, Validators.required),
            expiryYY: new FormControl(null, Validators.required),
            cvv: new FormControl(null, Validators.required)
        });
    }

    onSubmit() {
        //add current form details as a credit card object.
        console.log(this.creditcardForm.value);
    }
}