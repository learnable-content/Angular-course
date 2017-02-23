import { Component, ViewEncapsulation } from "@angular/core";

@Component({
    selector: "my-app",
    template: require("./app.template.html"),
    styles: [require("./app.style.less")],
    encapsulation: ViewEncapsulation.Native
})
export class AppComponent {
};
