import { Component, Input } from "@angular/core";
import { AnalyticsService } from "../shared/analytics.service";
import { UniverseEvent } from "../shared/universe-event";

@Component({
    selector: "event-view",
    templateUrl: "./event-view.template.html",
    styleUrls: ["./event-view.style.less"],
    providers: [AnalyticsService],
    host: {
        "class": "event-view"
    }
})
export class EventViewComponent {
    constructor (private analytics: AnalyticsService) {
    }

    @Input() event: UniverseEvent;
}
