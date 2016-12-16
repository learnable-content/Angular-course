export interface Event {
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
};

export let exampleEvent = {
    address: '11 Example St, Los Angeles, California',
    category: 'music',
    cover_photo_url: '',
    currency: 'GBP',
    description: 'An example event description',
    end_time: '2016-12-17T20:00:00.000-05:00',
    formatted_duration: 'Sat, Oct 22 at 8 - 8pm',
    formatted_price: '$32.00',
    host_image_url: '',
    host_name: 'The Host of the Event',
    image_url: '',
    location: 'Some Cool Location',
    price: 32.0,
    start_time: '2016-10-22T20:00:00.000-04:00',
    ticket_url: 'https://www.universe.com/events/future-tense-series-2-show-50-pass-nov-19-dec-17-tickets-67YCP4',
    title: 'Cool Event Title Goes Here'
};
