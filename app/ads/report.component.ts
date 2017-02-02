import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { AnalyticsService, ReportDataRow } from "../shared/analytics.service";
import { DatatableComponent } from "@swimlane/ngx-datatable";

@Component({
    selector: "ads-report",
    template: require("./report.template.html"),
    providers: [AnalyticsService],
    styles: [require("./report.style.less")]
})
export class AdReportComponent implements OnInit, AfterViewInit {
    @ViewChild(DatatableComponent) table: DatatableComponent;
    constructor(private analytics: AnalyticsService) {
    }

    ngOnInit() {
        for (let i = 0; i < 5; i += 1) {
            setTimeout(() => this.loadMoreRows(), 100 * i);
        }
    }

    ngAfterViewInit() {
        this.table.bodyHeight = 400;
    }

    loadMoreRows() {
        this.loading = true;
        this.analytics.report().then(rows => {
            this.rows = this.rows.concat(rows);
            this.loading = false;
        });
    }

    private loading: boolean;
    private rows: ReportDataRow[] = [];
    private columns: any[] = [
        { prop: "date" },
        { prop: "eventClicks" },
        { prop: "adClicks" },
        { prop: "revenue" }
    ];
};
