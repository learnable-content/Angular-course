import { Component, OnInit } from "@angular/core";
import { Ad } from "./shared/ad";
import { UniverseEvent } from "./shared/universe-event";
import { UniverseService } from "./shared/universe.service";
import { AnalyticsService } from "./shared/analytics.service";
import { Observable } from "rxjs";

@Component({
    templateUrl: "./home.template.html",
    providers: [UniverseService, AnalyticsService]
})
export class HomeComponent implements OnInit {
    constructor(private universe: UniverseService, private analytics: AnalyticsService) {
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

    setCategory(category: string): void {
        console.debug(category);
    }

     categories: string[] = [
        "events",
        "concerts",
        "food tours"
    ];
    selectedCategory: string = this.categories[0];
    eventPassesFilter(event: UniverseEvent): boolean {
        return event.category === this.selectedCategory;
    }
    getFilteredEvents(events: UniverseEvent[]): UniverseEvent[] {
        if (this.selectedCategory === "events") {
            return events;
        }
        return events.filter(this.eventPassesFilter.bind(this));
    }

    events: UniverseEvent[];
    moreEvents: UniverseEvent[];
    ads: Ad[] = [
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

    loadMoreButtonAlreadyClicked: boolean = false;
    loadMoreButtonClick(): void {
        this.loadMoreButtonAlreadyClicked = true;
        this.universe.getMoreEvents(2, 5);
        this.universe.getMoreEvents(3, 5);
        this.analytics.event("click", "event", "load-more");
    }

    eventClicked(event: UniverseEvent): void {
        console.log("Event clicked on the homepage: " + event.id);
    }

    today: string = "Today's Date";
};
