import { Component, Input } from '@angular/core';

interface Event {
    address: string,
    category: string,
    cover_photo_url: string,
    currency: string,
    description: string,
    formatted_duration: string,
    formatted_price: string,
    host_image_url: string,
    host_name: string,
    image_url: string,
    location: string,
    price: number,
    ticket_url: string,
    title: string
}

@Component({
    selector: 'event-view',
    template: require('./view.template.html')
})

export class EventViewComponent {
    @Input() event: Event;
}
