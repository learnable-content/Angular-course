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
        this.universe.getEventsThisWeek().subscribe(event => {
            this.events.push(event);
        });
        this.universe.getEventsLaterThisMonth().subscribe(event => {
            this.moreEvents.push(event);
        });
        Observable.interval(3000).subscribe(iteration => {
            this.ads[0].title = `Awesome Concert #${iteration}`;
            this.ads[1].title = `Sponsored Event #${iteration}`;
        })
    }

    getAdAtIndex(i: number): Ad {
        if (!this.hasAdAtIndex(i)) {
            return null;
        }
        return this.ads[Math.round(Math.random())];
    }

    hasAdAtIndex(i: number): boolean {
        return i % 4 === 0;
    }

    private events: UniverseEvent[];
    private moreEvents: UniverseEvent[];
    private ads: Ad[] = [
        {
            title: `Sponsored Event`,
            image_url: "/assets/images/placeholder-150x150.png",
            url: "http://localhost:3000/events"
        },
        {
            title: `Awesome Ad`,
            image_url: "/assets/images/placeholder-150x150.png",
            url: "http://localhost:3000/events"
        }
    ];

    private eventClicked(event: UniverseEvent): void {
        console.log("Event clicked on the homepage: " + event.id);
    }
};
