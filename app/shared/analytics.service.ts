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

    report(): Promise<ReportDataRow[]> {
        return this.http.get("/assets/report-data.json")
            .toPromise()
            .then(this.extractRows);
    }

    private extractRows(response: Response) {
        let body = response.json();
        return body.rows || [];
    }
};

export interface ReportDataRow {
    adClicks: number;
    date: string;
    eventClicks: number;
    revenue: string;
};
