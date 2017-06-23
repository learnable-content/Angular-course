import { Component, OnInit } from "@angular/core";
import { AnalyticsService } from "./shared/analytics.service";

@Component({
    templateUrl: "./home.template.html",
    styleUrls: ["./home.style.less"],
    providers: [UniverseService, AnalyticsService]
})
export class HomeComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
    }
};
