import { Component, Input, Output, EventEmitter } from "@angular/core";
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

    @Output() afterClick: EventEmitter<any> = new EventEmitter();
    onClick(): boolean {
        this.analytics.event("click", "event", this.event.ticket_url);
        this.afterClick.emit(this.event);
        return true;
    }

    get isFree(): boolean {
        return !this.event.price;
    }

    get imageUrl(): string {
        return this.event.image_url.replace("160x160", "280x280");
    }
}

