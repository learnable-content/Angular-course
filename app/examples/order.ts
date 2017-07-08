import { Address } from "./address";

export class Order {
    firstName = "";
    lastName = "";
    billingAddress: Address;
    shippingAddress: Address;

    constructor() {
        this.billingAddress = new Address();
        this.shippingAddress = new Address();
    }

    get shippingSameAsBillingAddress() {
        return this.billingAddress.streetAddress === this.shippingAddress.streetAddress &&
            this.billingAddress.city === this.shippingAddress.city;
    }
}
