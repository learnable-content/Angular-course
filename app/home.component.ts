import { Component, OnInit } from "@angular/core";
import { Ad } from "./shared/ad";
import { UniverseEvent } from "./shared/universe-event";
import { UniverseService } from "./shared/universe.service";

@Component({
    template: require("./home.template.html"),
    styles: [require("./home.style.less")],
    providers: [UniverseService]
})
export class HomeComponent implements OnInit {
    constructor (private universe: UniverseService) {
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
    }

    getAdAtIndex(i: number): Ad {
        if (!this.hasAdAtIndex(i)) {
            return null;
        }
        return {
            title: "Sponsored Event",
            image_url: "/assets/images/placeholder-150x150.png",
            url: "http://localhost:3000/events"
        };
    }

    hasAdAtIndex(i: number): boolean {
        return i % 3 === 0;
    }

    private events: UniverseEvent[];
    private moreEvents: UniverseEvent[];
    private ads: Ad[];
};
