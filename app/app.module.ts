import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EventViewComponent } from './events/view.component';

@NgModule({
    imports: [ BrowserModule ],
    declarations: [
        AppComponent,
        EventViewComponent
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule {};
