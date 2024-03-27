import { LightningElement } from 'lwc';
import * as encrypt from 'c/encrypt';

const paymentMethod = {
    "type":"PAYMENT_PROFILE",
    "paymentProfile":{
        "paySource":{
            "sourceUser":"vc7267",
            "sourceSystem":"SFORCECC",
            "sourceLocation":"CS"
        },
        "profileOwnerId":"NEWCONNECT-SF-Manual_2024322171_1rkp7u98",
        "profileName":"American Express ...0126"
    }
};

export default class EmptyKey extends LightningElement {

    encryptPaymentMethod(request, encrypter) {
        if (encrypter) {
            return encrypter.encryptPaymentMethod(request);
        }
        return encrypt.encryptPaymentMethod(request);
    }

    encryptWithImport() {
        const encryptedPaymentMethod = this.encryptPaymentMethod(paymentMethod);
        paymentMethod[encryptedPaymentMethod.type] = encryptedPaymentMethod.encryptedRequest;
        console.log(`===== paymentMethod: ${JSON.stringify(paymentMethod)}`);
    }

    encryptWithCmp() {
        const encrypt = this.template.querySelector("c-encrypt");
        const encryptedPaymentMethod = this.encryptPaymentMethod(paymentMethod, encrypt);
        paymentMethod[encryptedPaymentMethod.type] = encryptedPaymentMethod.encryptedRequest;
        console.log(`===== paymentMethod: ${JSON.stringify(paymentMethod)}`);
    }
}