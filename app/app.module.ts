import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { Angular2DataTableModule } from 'angular2-data-table';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { EventViewComponent } from './events/view.component';
import { AdViewComponent } from './ads/view.component';
import { AdReportComponent } from './ads/report.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: 'events', component: HomeComponent },
    { path: 'report', component: AdReportComponent }
];

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule.forRoot(appRoutes),
        Angular2DataTableModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        EventViewComponent,
        AdViewComponent,
        AdReportComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {};
