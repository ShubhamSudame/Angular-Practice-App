import { AbstractControl } from "@angular/forms";

export function CreditCardExpiryMMValidator(control: AbstractControl): {[key: string]: boolean} {
    if(control.value !== null && (isNaN(control.value) || control.value < 1 || control.value > 12)) {
        return {'invalidMonth': true}
    }
    return null;
}

export function CreditCardExpiryYYValidator(control: AbstractControl): {[key: string]: boolean} {
    if(control.value !== null && (isNaN(control.value) || control.value < (new Date().getFullYear() - 2000) || control.value > (new Date().getFullYear() -2000 + 10))) {
        return {'invalidYear': true}
    }
    return null;
}