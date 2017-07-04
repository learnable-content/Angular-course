import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home.component";
import { EventViewComponent } from "./events/event-view.component";
import { AdViewComponent } from "./ads/ad-view.component";
import { AdReportComponent } from "./ads/report.component";

import { CategoryFilterPipe } from "./shared/category-filter.pipe";

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
        FormsModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        EventViewComponent,
        AdViewComponent,
        AdReportComponent,
        CategoryFilterPipe
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {};
