import { LightningElement, api } from 'lwc';

export const encryptPaymentMethod = (request) => {
    return {
        "type":"paymentProfile",
        "encryptedRequest":request
    }
}
export default class Encrypt extends LightningElement {
    @api
    encryptPaymentMethod(paymentMethod) {
        return encryptPaymentMethod(paymentMethod);
    }
}
