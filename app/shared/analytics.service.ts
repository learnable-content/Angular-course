import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

type EventType = "click";
type EventTarget = "ad" | "event";

@Injectable()
export class AnalyticsService {
    constructor (private http: Http) {
    }

    event(eventType: EventType, eventTarget: EventTarget, id: string) {
        console.debug(`analytics logged event: ${eventType} - ${id}`);
    }
};
