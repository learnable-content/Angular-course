import { Injectable } from "@angular/core";
import { Http, Response, URLSearchParams } from "@angular/http";
import { Observable, Subject, Subscriber } from "rxjs/Rx";
import { UniverseEvent } from "./universe-event";

@Injectable()
export class UniverseService {
    private eventStream: Subject<UniverseEvent> = null;
    private LOCATION = { // Toronto, Canada
        latitude: 43.6656,
        longitude: -79.383,
    };

    private apiBaseUrl = "https://discover.universe.com/api/v2/discover_events";

    constructor (private http: Http) {
        this.eventStream = new Subject();
        const pageSize = 5;
        this.getMoreEvents(1, pageSize);
    }

    getMoreEvents(page: number, pageSize: number): void {
        const params: URLSearchParams = new URLSearchParams();
        const options = { search: params };

        const { latitude, longitude } = this.LOCATION;
        const { today, endOfMonth } = this.getDates();
        params.set("latitude", latitude.toString());
        params.set("longitude", longitude.toString());
        params.set("limit", pageSize.toString());
        params.set("page", page.toString());
        params.set("after", today.toString());
        params.set("before", endOfMonth.toString());

        this.http.get(this.apiBaseUrl, options)
            .map(response => response.json())
            .map(json => json.discover_events)
            .subscribe(events => {
                for (let i = 0; i < events.length; i += 1) {
                    this.eventStream.next(events[i]);
                }
            });
    }

    private getDates(): any {
        const today = Math.floor(Date.now() / 1000);
        return {
            today,
            endOfWeek: today + 60 * 60 * 24 * 7,
            endOfMonth: today + 60 * 60 * 24 * 30,
        };
    }

    private eventUnixTime(event: UniverseEvent) {
        return (new Date(event.start_time)).getTime() / 1000;
    }

    getEventsThisWeek(): Observable<UniverseEvent> {
        const { today, endOfWeek } = this.getDates();
        return this.eventStream
            .distinct(e => e.id)
            .filter(event => {
                const time = this.eventUnixTime(event);
                return today <= time && time <= endOfWeek;
            });
    }

    getEventsLaterThisMonth(): Observable<UniverseEvent> {
        const { endOfWeek } = this.getDates();
        return this.eventStream
            .distinct(e => e.id)
            .filter(event => {
                const time = this.eventUnixTime(event);
                return endOfWeek <= time;
            })
            .take(8);
    }
};
