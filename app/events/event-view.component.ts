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

    onClick(): boolean {
        this.analytics.event("click", "event", this.event.ticket_url);
        return true;
    }

    isFree(): boolean {
        return !this.event.price;
    }

    imageUrl(): string {
        return this.event.image_url.replace("160x160", "280x280");
    }
}
