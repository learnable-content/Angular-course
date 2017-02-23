import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { NgxDatatableModule } from "@swimlane/ngx-datatable";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home.component";
import { EventViewComponent } from "./events/event-view.component";
import { AdViewComponent } from "./ads/ad-view.component";
import { AdReportComponent } from "./ads/report.component";

const appRoutes: Routes = [
    { path: "", redirectTo: "/events", pathMatch: "full" },
    { path: "events", component: HomeComponent },
    { path: "report", component: AdReportComponent }
];

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule.forRoot(appRoutes),
        FormsModule,
        NgxDatatableModule
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
