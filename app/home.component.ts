import { Component, OnInit } from "@angular/core";
import { Ad } from "./shared/ad";
import { UniverseEvent } from "./shared/universe-event";
import { UniverseService } from "./shared/universe.service";
import { AnalyticsService } from "./shared/analytics.service";
import { Observable } from "rxjs";

@Component({
    templateUrl: "./home.template.html",
    styleUrls: ["./home.style.less"],
    providers: [UniverseService, AnalyticsService]
})
export class HomeComponent implements OnInit {
    constructor(private universe: UniverseService,
                private analytics: AnalyticsService) {
    }

    ngOnInit() {
        this.events = [];
        this.moreEvents = [];
        this.universe.getEventsThisWeek().subscribe((event: UniverseEvent) => {
            this.events.push(event);
        });
        this.universe.getEventsLaterThisMonth().subscribe((event: UniverseEvent) => {
            this.moreEvents.push(event);
        });
    }

    private events: UniverseEvent[];
    private moreEvents: UniverseEvent[];

    private eventClicked(event: UniverseEvent): void {
        console.log("Event clicked on the homepage: " + event.id);
    }
};
