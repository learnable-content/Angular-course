import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

@Injectable()
export class UniverseService {
    // location of London, UK
    private latitude = 51.50735;
    private longitude = -0.12776;

    private apiUrl = "https://discover.universe.com/api/v2/discover_events";

    constructor (private http: Http) {
    }

    getTodayEvents(): Promise<any> {
        let today = Math.floor(Date.now() / 1000);
        let tomorrow = today + 60 * 60 * 24;
        return this.http.get(`${this.apiUrl}?latitude=${this.latitude}&longitude=${this.longitude}&limit=30&after=${today}&before=${tomorrow}`)
            .toPromise()
            .then(this.extractEvents);
    }

    getFutureEvents(days: number = 7): Promise<any> {
        let today = Math.floor(Date.now() / 1000);
        let tomorrow = today + 60 * 60 * 24;
        let limit = tomorrow + 60 * 60 * 24 * days;
        return this.http.get(`${this.apiUrl}?latitude=${this.latitude}&longitude=${this.longitude}&limit=30&after=${tomorrow}&before=${limit}`)
            .toPromise()
            .then(this.extractEvents);
    }

    private extractEvents(response: Response) {
        let body = response.json();
        return body.discover_events || [];
    }
};
