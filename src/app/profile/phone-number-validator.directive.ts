import { AbstractControl, ValidatorFn } from "@angular/forms";

export function PhoneNumberValidator(regex: RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]: boolean} | null => {
        const invalidNumber = regex.test(control.value);
        return invalidNumber ? {'InvalidPhoneNumber': true} : null;
    }
}