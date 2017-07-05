import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Order } from "./order";

@Component({
    selector: "example-form",
    templateUrl: "./example-form.template.html"
})
export class ExampleFormComponent {
    orderForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {
        const order = new Order();
        order.firstName = "First Name";
        order.lastName = "Last Name";
        order.billingAddress.streetAddress = "123 Street";
        order.billingAddress.city = "City";
        order.shippingAddress.streetAddress = "123 Street";
        order.shippingAddress.city = "Second City";

        this.createForm(order);
    }

    createForm(order: Order) {
        this.orderForm = this.formBuilder.group({
            firstName: order.firstName,
            lastName: order.lastName,
            shippingSameAsBillingAddress: order.shippingSameAsBillingAddress,
            billingAddress: this.formBuilder.group(order.billingAddress),
            shippingAddress: this.formBuilder.group(order.shippingAddress)
        });
    }

    get shippingSameAsBilling() {
        return this.orderForm.value.shippingSameAsBillingAddress;
    }

    shippingSameAsBillingAddressChanged(checked: boolean) {
        if (checked) {
            const billingAddress = this.orderForm.value.billingAddress;
            this.orderForm.patchValue({
                shippingAddress: {
                    streetAddress: billingAddress.streetAddress,
                    city: billingAddress.city
                }
            });
        }
    }

    get orderFormAsJSON() {
        return JSON.stringify(this.orderForm.value);
    }
};
