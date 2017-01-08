import { Component, Input } from "@angular/core";
import { AnalyticsService } from "../shared/analytics.service";
import { Ad } from "../shared/ad";

@Component({
    selector: "sponsored-event",
    template: require("./view.template.html"),
    providers: [AnalyticsService]
})
export class AdViewComponent {
    constructor (private analytics: AnalyticsService) {
    }

    @Input() ad: Ad;

    onClick(): boolean {
        this.analytics.event("click", "ad", this.ad.url);
        return true;
    }
}
