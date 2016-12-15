import { Component } from '@angular/core';

@Component({
    selector: "my-app",
    template: "<event-view event={{event}}></event-view>"
})

export class AppComponent {
    event: {
        title: "Hello World!"
    }
};
