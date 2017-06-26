import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable, Subject, Subscriber } from "rxjs/Rx";
import { UniverseEvent } from "./universe-event";

@Injectable()
export class UniverseService {
    private apiBaseUrl: string;

    constructor (private http: Http) {
    }

    getMoreEvents() {
    }

    getEventsThisWeek() {
    }

    getEventsLaterThisMonth() {
    }
};
