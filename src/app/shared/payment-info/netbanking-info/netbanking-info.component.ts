import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: 'app-netbanking-info',
    templateUrl: './netbanking-info.component.html',
    styleUrls: ['./netbanking-info.component.css']
})
export class NetbankingInfoComponent {
    netbankingForm: FormGroup;

    constructor() {

    }

    ngOnInit(): void {
        this.netbankingForm = new FormGroup({
            bankName: new FormControl(null, Validators.required)
        });
    }

    onSubmit() {

    }
}