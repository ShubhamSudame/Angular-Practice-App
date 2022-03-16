export class CreditCard {
    constructor(public cardOwnerName: string, public cardNumber: string, public expiryMM: number, public expiryYY: number, private cvv: number) {

    }
}