import { Component } from "@angular/core";
import { AnalyticsService } from "../shared/analytics.service";

@Component({
    selector: "ads-report",
    templateUrl: "./report.template.html",
    providers: [AnalyticsService],
    styleUrls: ["./report.style.less"]
})
export class AdReportComponent {
    constructor(private analytics: AnalyticsService) {
    }
};
