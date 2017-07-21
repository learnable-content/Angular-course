/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from './app.module';
import * as i2 from './app.component';
import * as i3 from './examples/example.component.ngfactory';
import * as i4 from './home.component.ngfactory';
import * as i5 from './ads/report.component.ngfactory';
import * as i6 from './app.component.ngfactory';
import * as i7 from '@angular/common';
import * as i8 from '@angular/platform-browser';
import * as i9 from '@angular/animations/browser';
import * as i10 from '@angular/platform-browser/animations';
import * as i11 from '@angular/http';
import * as i12 from '@angular/forms';
import * as i13 from '@angular/animations';
import * as i14 from '@swimlane/ngx-datatable/release/services/scrollbar-helper.service';
import * as i15 from '@angular/router';
import * as i16 from './home.component';
import * as i17 from './ads/report.component';
import * as i18 from './examples/example.component';
import * as i19 from './examples/example.module';
import * as i20 from '@swimlane/ngx-datatable/release/datatable.module';
export const AppModuleNgFactory:i0.NgModuleFactory<i1.AppModule> = i0.ɵcmf(i1.AppModule,
    [i2.AppComponent],(_l:any) => {
      return i0.ɵmod([i0.ɵmpd(512,i0.ComponentFactoryResolver,i0.ɵCodegenComponentFactoryResolver,
          [[8,[i3.ExampleComponentNgFactory,i4.HomeComponentNgFactory,i5.AdReportComponentNgFactory,
              i6.AppComponentNgFactory]],[3,i0.ComponentFactoryResolver],i0.NgModuleRef]),
          i0.ɵmpd(5120,i0.LOCALE_ID,i0.ɵm,[[3,i0.LOCALE_ID]]),i0.ɵmpd(4608,i7.NgLocalization,
              i7.NgLocaleLocalization,[i0.LOCALE_ID]),i0.ɵmpd(5120,i0.APP_ID,i0.ɵf,
              ([] as any[])),i0.ɵmpd(5120,i0.IterableDiffers,i0.ɵk,([] as any[])),
          i0.ɵmpd(5120,i0.KeyValueDiffers,i0.ɵl,([] as any[])),i0.ɵmpd(4608,i8.DomSanitizer,
              i8.ɵe,[i8.DOCUMENT]),i0.ɵmpd(6144,i0.Sanitizer,(null as any),[i8.DomSanitizer]),
          i0.ɵmpd(4608,i8.HAMMER_GESTURE_CONFIG,i8.HammerGestureConfig,([] as any[])),
          i0.ɵmpd(5120,i8.EVENT_MANAGER_PLUGINS,(p0_0:any,p1_0:any,p2_0:any,p2_1:any) => {
            return [new i8.ɵDomEventsPlugin(p0_0),new i8.ɵKeyEventsPlugin(p1_0),new i8.ɵHammerGesturesPlugin(p2_0,
                p2_1)];
          },[i8.DOCUMENT,i8.DOCUMENT,i8.DOCUMENT,i8.HAMMER_GESTURE_CONFIG]),i0.ɵmpd(4608,
              i8.EventManager,i8.EventManager,[i8.EVENT_MANAGER_PLUGINS,i0.NgZone]),
          i0.ɵmpd(135680,i8.ɵDomSharedStylesHost,i8.ɵDomSharedStylesHost,[i8.DOCUMENT]),
          i0.ɵmpd(4608,i8.ɵDomRendererFactory2,i8.ɵDomRendererFactory2,[i8.EventManager,
              i8.ɵDomSharedStylesHost]),i0.ɵmpd(5120,i9.AnimationDriver,i10.ɵc,([] as any[])),
          i0.ɵmpd(5120,i9.ɵAnimationStyleNormalizer,i10.ɵd,([] as any[])),i0.ɵmpd(4608,
              i9.ɵAnimationEngine,i10.ɵb,[i9.AnimationDriver,i9.ɵAnimationStyleNormalizer]),
          i0.ɵmpd(5120,i0.RendererFactory2,i10.ɵe,[i8.ɵDomRendererFactory2,i9.ɵAnimationEngine,
              i0.NgZone]),i0.ɵmpd(6144,i8.ɵSharedStylesHost,(null as any),[i8.ɵDomSharedStylesHost]),
          i0.ɵmpd(4608,i0.Testability,i0.Testability,[i0.NgZone]),i0.ɵmpd(4608,i8.Meta,
              i8.Meta,[i8.DOCUMENT]),i0.ɵmpd(4608,i8.Title,i8.Title,[i8.DOCUMENT]),
          i0.ɵmpd(4608,i11.BrowserXhr,i11.BrowserXhr,([] as any[])),i0.ɵmpd(4608,i11.ResponseOptions,
              i11.BaseResponseOptions,([] as any[])),i0.ɵmpd(5120,i11.XSRFStrategy,
              i11.ɵb,([] as any[])),i0.ɵmpd(4608,i11.XHRBackend,i11.XHRBackend,[i11.BrowserXhr,
              i11.ResponseOptions,i11.XSRFStrategy]),i0.ɵmpd(4608,i11.RequestOptions,
              i11.BaseRequestOptions,([] as any[])),i0.ɵmpd(5120,i11.Http,i11.ɵc,[i11.XHRBackend,
              i11.RequestOptions]),i0.ɵmpd(4608,i12.ɵi,i12.ɵi,([] as any[])),i0.ɵmpd(4608,
              i12.FormBuilder,i12.FormBuilder,([] as any[])),i0.ɵmpd(4608,i13.AnimationBuilder,
              i10.ɵBrowserAnimationBuilder,[i0.RendererFactory2]),i0.ɵmpd(4608,i14.ScrollbarHelper,
              i14.ScrollbarHelper,[i8.DOCUMENT]),i0.ɵmpd(5120,i15.ActivatedRoute,i15.ɵf,
              [i15.Router]),i0.ɵmpd(4608,i15.NoPreloading,i15.NoPreloading,([] as any[])),
          i0.ɵmpd(6144,i15.PreloadingStrategy,(null as any),[i15.NoPreloading]),i0.ɵmpd(135680,
              i15.RouterPreloader,i15.RouterPreloader,[i15.Router,i0.NgModuleFactoryLoader,
                  i0.Compiler,i0.Injector,i15.PreloadingStrategy]),i0.ɵmpd(4608,i15.PreloadAllModules,
              i15.PreloadAllModules,([] as any[])),i0.ɵmpd(5120,i15.ROUTER_INITIALIZER,
              i15.ɵi,[i15.ɵg]),i0.ɵmpd(5120,i0.APP_BOOTSTRAP_LISTENER,(p0_0:any) => {
            return [p0_0];
          },[i15.ROUTER_INITIALIZER]),i0.ɵmpd(512,i7.CommonModule,i7.CommonModule,
              ([] as any[])),i0.ɵmpd(1024,i0.ErrorHandler,i8.ɵa,([] as any[])),i0.ɵmpd(1024,
              i0.NgProbeToken,() => {
                return [i15.ɵb()];
              },([] as any[])),i0.ɵmpd(512,i15.ɵg,i15.ɵg,[i0.Injector]),i0.ɵmpd(1024,
              i0.APP_INITIALIZER,(p0_0:any,p0_1:any,p1_0:any) => {
                return [i8.ɵc(p0_0,p0_1),i15.ɵh(p1_0)];
              },[[2,i8.NgProbeToken],[2,i0.NgProbeToken],i15.ɵg]),i0.ɵmpd(512,i0.ApplicationInitStatus,
              i0.ApplicationInitStatus,[[2,i0.APP_INITIALIZER]]),i0.ɵmpd(131584,i0.ɵe,
              i0.ɵe,[i0.NgZone,i0.ɵConsole,i0.Injector,i0.ErrorHandler,i0.ComponentFactoryResolver,
                  i0.ApplicationInitStatus]),i0.ɵmpd(2048,i0.ApplicationRef,(null as any),
              [i0.ɵe]),i0.ɵmpd(512,i0.ApplicationModule,i0.ApplicationModule,[i0.ApplicationRef]),
          i0.ɵmpd(512,i8.BrowserModule,i8.BrowserModule,[[3,i8.BrowserModule]]),i0.ɵmpd(512,
              i11.HttpModule,i11.HttpModule,([] as any[])),i0.ɵmpd(1024,i15.ɵa,i15.ɵd,
              [[3,i15.Router]]),i0.ɵmpd(512,i15.UrlSerializer,i15.DefaultUrlSerializer,
              ([] as any[])),i0.ɵmpd(512,i15.ChildrenOutletContexts,i15.ChildrenOutletContexts,
              ([] as any[])),i0.ɵmpd(256,i15.ROUTER_CONFIGURATION,{},([] as any[])),
          i0.ɵmpd(1024,i7.LocationStrategy,i15.ɵc,[i7.PlatformLocation,[2,i7.APP_BASE_HREF],
              i15.ROUTER_CONFIGURATION]),i0.ɵmpd(512,i7.Location,i7.Location,[i7.LocationStrategy]),
          i0.ɵmpd(512,i0.Compiler,i0.Compiler,([] as any[])),i0.ɵmpd(512,i0.NgModuleFactoryLoader,
              i0.SystemJsNgModuleLoader,[i0.Compiler,[2,i0.SystemJsNgModuleLoaderConfig]]),
          i0.ɵmpd(1024,i15.ROUTES,() => {
            return [[{path:'',redirectTo:'/events',pathMatch:'full'},{path:'events',
                component:i16.HomeComponent},{path:'report',component:i17.AdReportComponent},
                {path:'examples',component:i18.ExampleComponent}]];
          },([] as any[])),i0.ɵmpd(1024,i15.Router,i15.ɵe,[i0.ApplicationRef,i15.UrlSerializer,
              i15.ChildrenOutletContexts,i7.Location,i0.Injector,i0.NgModuleFactoryLoader,
              i0.Compiler,i15.ROUTES,i15.ROUTER_CONFIGURATION,[2,i15.UrlHandlingStrategy],
              [2,i15.RouteReuseStrategy]]),i0.ɵmpd(512,i15.RouterModule,i15.RouterModule,
              [[2,i15.ɵa],[2,i15.Router]]),i0.ɵmpd(512,i12.ɵba,i12.ɵba,([] as any[])),
          i0.ɵmpd(512,i12.FormsModule,i12.FormsModule,([] as any[])),i0.ɵmpd(512,i12.ReactiveFormsModule,
              i12.ReactiveFormsModule,([] as any[])),i0.ɵmpd(512,i10.BrowserAnimationsModule,
              i10.BrowserAnimationsModule,([] as any[])),i0.ɵmpd(512,i19.ExampleModule,
              i19.ExampleModule,([] as any[])),i0.ɵmpd(512,i20.NgxDatatableModule,
              i20.NgxDatatableModule,([] as any[])),i0.ɵmpd(512,i1.AppModule,i1.AppModule,
              ([] as any[]))]);
    });
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL2hvbWUvcnVkb2xmby9Db2RlL0FuZ3VsYXItY291cnNlL2FwcC9hcHAubW9kdWxlLm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL2hvbWUvcnVkb2xmby9Db2RlL0FuZ3VsYXItY291cnNlL2FwcC9hcHAubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIiAiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9