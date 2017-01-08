import { Component, Input } from "@angular/core";
import { AnalyticsService } from "../shared/analytics.service";
import { UniverseEvent } from "../shared/universe-event";

@Component({
    selector: "event-view",
    template: require("./view.template.html"),
    styles: [require("./view.style.css")],
    providers: [AnalyticsService]
})
export class EventViewComponent {
    constructor (private analytics: AnalyticsService) {
    }

    @Input() event: UniverseEvent;

    onClick(): boolean {
        this.analytics.event("click", "event", this.event.ticket_url);
        return true;
    }

    imageUrl(): string {
        return this.event.image_url.replace("160x160", "150x150");
    }

    isFree(): boolean {
        return !this.event.price;
    }
}

