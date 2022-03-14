import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: 'app-paytm-info',
    templateUrl: './paytm-info.component.html',
    styleUrls: ['./paytm-info.component.css']
})
export class PaytmInfoComponent implements OnInit{
    paytmForm: FormGroup;

    constructor() {

    }

    ngOnInit(): void {
        this.paytmForm = new FormGroup({
            accountType: new FormControl('domestic', Validators.required),
            upiAddress: new FormControl(null, Validators.required)
        });
    }

    onSubmit() {
        // on submit saves the PayTM account details
    }
}