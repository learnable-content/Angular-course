import { Component } from "@angular/core";
import { animate, state, style, transition, trigger } from "@angular/animations";
import { Observable } from "rxjs/Rx";

@Component({
    selector: "example-animation",
    templateUrl: "./example-animation.template.html",
    animations: [
        trigger("helloWorld", [
            state("initial", style({
                backgroundColor: "#aaaaaa"
            })),
            state("final", style({
                backgroundColor: "#ffffff"
            })),
            transition("initial <=> final", [animate(500)])
        ])
    ]
})
export class ExampleAnimationComponent {
    animationState: string;

    constructor() {
        this.animationState = "initial";
        Observable.interval(1000).subscribe(() => {
            this.animationState = this.animationState == "initial" ? "final" : "initial";
        })
    }
};
