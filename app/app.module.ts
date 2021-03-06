import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { ExampleModule } from "./examples/example.module";

import { AnalyticsService } from "./shared/analytics.service";
import { UniverseService } from "./shared/universe.service";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home.component";
import { EventViewComponent } from "./events/event-view.component";
import { AdViewComponent } from "./ads/ad-view.component";
import { AdReportComponent } from "./ads/report.component";
import { ExampleComponent } from "./examples/example.component";

const appRoutes: Routes = [
    { path: "", redirectTo: "/events", pathMatch: "full" },
    { path: "events", component: HomeComponent },
    { path: "report", component: AdReportComponent },
    { path: "examples", component: ExampleComponent }
];

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule.forRoot(appRoutes),
        FormsModule,
        ExampleModule,
        NgxDatatableModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        EventViewComponent,
        AdViewComponent,
        AdReportComponent
    ],
    providers: [
        AnalyticsService,
        UniverseService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {};
