webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var platform_browser_dynamic_1 = __webpack_require__(1);
	var app_module_1 = __webpack_require__(23);
	document.addEventListener('DOMContentLoaded', function () {
	    platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
	});


/***/ },

/***/ 23:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var platform_browser_1 = __webpack_require__(21);
	var http_1 = __webpack_require__(24);
	var router_1 = __webpack_require__(25);
	var angular2_data_table_1 = __webpack_require__(57);
	var app_component_1 = __webpack_require__(353);
	var home_component_1 = __webpack_require__(356);
	var view_component_1 = __webpack_require__(360);
	var view_component_2 = __webpack_require__(362);
	var report_component_1 = __webpack_require__(365);
	var appRoutes = [
	    { path: '', redirectTo: '/events', pathMatch: 'full' },
	    { path: 'events', component: home_component_1.HomeComponent },
	    { path: 'report', component: report_component_1.AdReportComponent }
	];
	var AppModule = (function () {
	    function AppModule() {
	    }
	    return AppModule;
	}());
	AppModule = __decorate([
	    core_1.NgModule({
	        imports: [
	            platform_browser_1.BrowserModule,
	            http_1.HttpModule,
	            router_1.RouterModule.forRoot(appRoutes),
	            angular2_data_table_1.Angular2DataTableModule
	        ],
	        declarations: [
	            app_component_1.AppComponent,
	            home_component_1.HomeComponent,
	            view_component_1.EventViewComponent,
	            view_component_2.AdViewComponent,
	            report_component_1.AdReportComponent
	        ],
	        bootstrap: [app_component_1.AppComponent]
	    }),
	    __metadata("design:paramtypes", [])
	], AppModule);
	exports.AppModule = AppModule;
	;


/***/ },

/***/ 353:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var AppComponent = (function () {
	    function AppComponent() {
	    }
	    return AppComponent;
	}());
	AppComponent = __decorate([
	    core_1.Component({
	        selector: "my-app",
	        template: __webpack_require__(354),
	        styles: [__webpack_require__(355)]
	    }),
	    __metadata("design:paramtypes", [])
	], AppComponent);
	exports.AppComponent = AppComponent;
	;


/***/ },

/***/ 354:
/***/ function(module, exports) {

	module.exports = "<header>\n  <h1 class=\"headline\">The Local Paper</h1>\n  <nav>\n    <a routerLink=\"/events\" routerLinkActive=\"active\">Events</a>\n    <a routerLink=\"/report\" routerLinkActive=\"active\">Reports</a>\n  </nav>\n\n</header>\n<section class=\"content\">\n  <router-outlet></router-outlet>\n</section>\n"

/***/ },

/***/ 355:
/***/ function(module, exports) {

	module.exports = ".heading {\n    font-size: 48px;\n}\n\n.content {\n}\n\nnav a {\n    text-decoration: none;\n    padding: 1rem 2rem;\n    font-size: 20px;\n}\n\nnav a,\nnav a:visited {\n    color: blue;\n}\n\nnav .active {\n    font-weight: bold;\n    box-shadow: 0px 3px 10px #cccccc;\n}\n"

/***/ },

/***/ 356:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var universe_service_1 = __webpack_require__(357);
	var HomeComponent = (function () {
	    function HomeComponent(universe) {
	        this.universe = universe;
	    }
	    HomeComponent.prototype.ngOnInit = function () {
	        this.loadEvents();
	    };
	    HomeComponent.prototype.loadEvents = function () {
	        var _this = this;
	        this.universe.getTodayEvents().then(function (events) { return _this.events = events; });
	        this.universe.getFutureEvents().then(function (events) {
	            _this.moreEvents = events;
	        });
	    };
	    HomeComponent.prototype.getAdAtIndex = function (i) {
	        if (!this.hasAdAtIndex(i)) {
	            return null;
	        }
	        return {
	            title: 'Sponsored Event',
	            image_url: '/assets/images/ad-150x150.png',
	            url: 'http://localhost:3000/events'
	        };
	    };
	    HomeComponent.prototype.hasAdAtIndex = function (i) {
	        return i % 3 === 0;
	    };
	    return HomeComponent;
	}());
	HomeComponent = __decorate([
	    core_1.Component({
	        template: __webpack_require__(358),
	        styles: [__webpack_require__(359)],
	        providers: [universe_service_1.UniverseService]
	    }),
	    __metadata("design:paramtypes", [universe_service_1.UniverseService])
	], HomeComponent);
	exports.HomeComponent = HomeComponent;
	;


/***/ },

/***/ 357:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var http_1 = __webpack_require__(24);
	var UniverseService = (function () {
	    function UniverseService(http) {
	        this.http = http;
	        // location of London, UK
	        this.latitude = 51.50735;
	        this.longitude = -0.12776;
	        this.apiUrl = 'https://discover.universe.com/api/v2/discover_events';
	    }
	    UniverseService.prototype.getTodayEvents = function () {
	        var today = Math.floor(Date.now() / 1000);
	        var tomorrow = today + 60 * 60 * 24;
	        return this.http.get(this.apiUrl + "?latitude=" + this.latitude + "&longitude=" + this.longitude + "&limit=30&after=" + today + "&before=" + tomorrow)
	            .toPromise()
	            .then(this.extractEvents);
	    };
	    UniverseService.prototype.getFutureEvents = function (days) {
	        if (days === void 0) { days = 7; }
	        var today = Math.floor(Date.now() / 1000);
	        var tomorrow = today + 60 * 60 * 24;
	        var limit = tomorrow + 60 * 60 * 24 * days;
	        return this.http.get(this.apiUrl + "?latitude=" + this.latitude + "&longitude=" + this.longitude + "&limit=30&after=" + tomorrow + "&before=" + limit)
	            .toPromise()
	            .then(this.extractEvents);
	    };
	    UniverseService.prototype.extractEvents = function (response) {
	        var body = response.json();
	        return body.discover_events || [];
	    };
	    return UniverseService;
	}());
	UniverseService = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [http_1.Http])
	], UniverseService);
	exports.UniverseService = UniverseService;
	;


/***/ },

/***/ 358:
/***/ function(module, exports) {

	module.exports = "<h2>Check out cool events in London, UK!</h2>\n<section class=\"today\">\n  <h3 class=\"date\">{{today}}</h3>\n  <section class=\"events-container\">\n    <template ngFor let-event [ngForOf]=\"events\" let-i=\"index\">\n      <sponsored-event *ngIf=\"hasAdAtIndex(i)\" [ad]=\"getAdAtIndex(i)\"></sponsored-event>\n      <event-view [event]=\"event\"></event-view>\n    </template>\n  </section>\n</section>\n\n<section class=\"more-events\">\n  <h3>More Events</h3>\n  <section class=\"events-container\">\n    <template ngFor let-event [ngForOf]=\"moreEvents\">\n      <event-view [event]=\"event\"></event-view>\n    </template>\n  </section>\n</section>\n"

/***/ },

/***/ 359:
/***/ function(module, exports) {

	module.exports = ".today {\n    float: left;\n    width: 75%;\n    background-color: #eeeeee;\n    flex-wrap: wrap;\n    padding: 1rem;\n}\n\n.today .date {\n}\n\n.more-events {\n    float: left;\n    width: 15%;\n    padding: 1rem;\n    border-left: 1px solid #aaaaaa;\n}\n\n.events-container {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: stretch;\n}\n\n.events-container event-view,\n.events-container sponsored-event {\n    flex-grow: 1;\n    padding: 1rem;\n    max-width: 200px;\n    overflow: hidden;\n}\n"

/***/ },

/***/ 360:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var analytics_service_1 = __webpack_require__(363);
	var EventViewComponent = (function () {
	    function EventViewComponent(analytics) {
	        this.analytics = analytics;
	    }
	    EventViewComponent.prototype.onClick = function () {
	        this.analytics.event('click', 'event', this.event.url);
	        return true;
	    };
	    EventViewComponent.prototype.imageUrl = function () {
	        return this.event.image_url.replace('160x160', '150x150');
	    };
	    EventViewComponent.prototype.isFree = function () {
	        return !this.event.price;
	    };
	    return EventViewComponent;
	}());
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Object)
	], EventViewComponent.prototype, "event", void 0);
	EventViewComponent = __decorate([
	    core_1.Component({
	        selector: 'event-view',
	        template: __webpack_require__(361),
	        providers: [analytics_service_1.AnalyticsService]
	    }),
	    __metadata("design:paramtypes", [analytics_service_1.AnalyticsService])
	], EventViewComponent);
	exports.EventViewComponent = EventViewComponent;


/***/ },

/***/ 361:
/***/ function(module, exports) {

	module.exports = "<a href=\"{{event.ticket_url}}\"\n   (click)=\"onClick()\"\n   target=\"_blank\">\n  <header>\n    <img width=\"150\" height=\"150\" src=\"{{imageUrl()}}\" />\n    <div class=\"event-title\">{{event.title}}</div>\n  </header>\n  <section>\n    <div class=\"event-location\">{{event.location}}</div>\n    <div>{{event.formatted_duration}}\n      <template ngIf=\"!isFree()\">- {{event.formatted_price}}</template>\n    </div>\n  </section>\n</a>\n"

/***/ },

/***/ 362:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var analytics_service_1 = __webpack_require__(363);
	var AdViewComponent = (function () {
	    function AdViewComponent(analytics) {
	        this.analytics = analytics;
	    }
	    AdViewComponent.prototype.onClick = function () {
	        this.analytics.event('click', 'ad', this.ad.url);
	        return true;
	    };
	    return AdViewComponent;
	}());
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Object)
	], AdViewComponent.prototype, "ad", void 0);
	AdViewComponent = __decorate([
	    core_1.Component({
	        selector: 'sponsored-event',
	        template: __webpack_require__(364),
	        providers: [analytics_service_1.AnalyticsService]
	    }),
	    __metadata("design:paramtypes", [analytics_service_1.AnalyticsService])
	], AdViewComponent);
	exports.AdViewComponent = AdViewComponent;


/***/ },

/***/ 363:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var http_1 = __webpack_require__(24);
	var AnalyticsService = (function () {
	    function AnalyticsService(http) {
	        this.http = http;
	    }
	    AnalyticsService.prototype.event = function (eventType, eventTarget, id) {
	        console.debug("analytics logged event: " + eventType + " - " + id);
	    };
	    AnalyticsService.prototype.report = function () {
	        return this.http.get('/assets/report-data.json')
	            .toPromise()
	            .then(this.extractRows);
	    };
	    AnalyticsService.prototype.extractRows = function (response) {
	        var body = response.json();
	        return body.rows || [];
	    };
	    return AnalyticsService;
	}());
	AnalyticsService = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [http_1.Http])
	], AnalyticsService);
	exports.AnalyticsService = AnalyticsService;
	;
	;


/***/ },

/***/ 364:
/***/ function(module, exports) {

	module.exports = "<a (click)=\"onClick()\"\n   [href]=\"ad.url\"\n   target=\"_blank\">\n   <img width=\"150\" height=\"150\"\n        class=\"image\"\n        src=\"{{ad.image_url}}\" />\n   <div class=\"title\">\n     {{ad.title}}\n   </div>\n</a>\n"

/***/ },

/***/ 365:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var analytics_service_1 = __webpack_require__(363);
	var AdReportComponent = (function () {
	    function AdReportComponent(analytics) {
	        this.analytics = analytics;
	        this.rows = [];
	        this.columns = [
	            { prop: 'date' },
	            { prop: 'eventClicks' },
	            { prop: 'adClicks' },
	            { prop: 'revenue' }
	        ];
	    }
	    AdReportComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        for (var i = 0; i < 5; i += 1) {
	            setTimeout(function () { return _this.loadMoreRows(); }, 100 * i);
	        }
	    };
	    AdReportComponent.prototype.loadMoreRows = function () {
	        var _this = this;
	        this.loading = true;
	        this.analytics.report().then(function (rows) {
	            _this.rows = _this.rows.concat(rows);
	            _this.loading = false;
	        });
	    };
	    return AdReportComponent;
	}());
	AdReportComponent = __decorate([
	    core_1.Component({
	        selector: 'ads-report',
	        template: __webpack_require__(366),
	        providers: [analytics_service_1.AnalyticsService],
	        styles: [__webpack_require__(367)]
	    }),
	    __metadata("design:paramtypes", [analytics_service_1.AnalyticsService])
	], AdReportComponent);
	exports.AdReportComponent = AdReportComponent;
	;


/***/ },

/***/ 366:
/***/ function(module, exports) {

	module.exports = "<h1>Analytics Report</h1>\n<p>Table of analytics results:</p>\n<swui-datatable\n  class=\"material\"\n  [rows]=\"rows\"\n  [columns]=\"columns\"\n  [scrollbarV]=\"true\"\n  [rowHeight]=\"50\"\n  [headerHeight]=\"50\"\n  [footerHeight]=\"50\"\n  [loadingIndicator]=\"loading\"\n  ></swui-datatable>\n"

/***/ },

/***/ 367:
/***/ function(module, exports) {

	module.exports = ".datatable {\n    width: 50%;\n}\n"

/***/ }

});