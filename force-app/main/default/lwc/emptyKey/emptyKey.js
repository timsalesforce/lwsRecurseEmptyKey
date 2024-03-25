import { LightningElement } from 'lwc';

export default class EmptyKey extends LightningElement {
    connectedCallback() {
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
        }

        const encryptedPaymentMethod = {
            "type":"",
            "encryptedRequest":paymentMethod
        }

        paymentMethod[encryptedPaymentMethod.type] = encryptedPaymentMethod.encryptedRequest;
        console.log(`===== paymentMethod: ${JSON.stringify(paymentMethod)}`);
    }
}