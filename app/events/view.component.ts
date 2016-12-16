import { Component, Input } from '@angular/core';
import { AnalyticsService } from '../shared/analytics.service';
import { Event } from '../shared/event';

@Component({
    selector: 'event-view',
    template: require('./view.template.html'),
    providers: [AnalyticsService]
})
export class EventViewComponent {
    constructor (private analytics: AnalyticsService) {
    }

    @Input() event;

    onClick(): boolean {
        this.analytics.event('click', 'event', this.event.url);
        return true;
    }

    imageUrl(): string {
        return this.event.image_url.replace('160x160', '150x150');
    }

    isFree(): boolean {
        return !this.event.price;
    }
}
