/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
import * as i0 from './event-view.style.less.shim.ngstyle';
import * as i1 from '@angular/core';
import * as i2 from '../../../app/events/event-view.component';
import * as i3 from '@angular/common';
import * as i4 from '../../../app/shared/analytics.service';
import * as i5 from '@angular/http';
var styles_EventViewComponent = [i0.styles];
export var RenderType_EventViewComponent = i1.ɵcrt({ encapsulation: 0,
    styles: styles_EventViewComponent, data: {} });
function View_EventViewComponent_1(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵted(null, ['\n        The price is ', '.\n      ']))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.event.formatted_price;
        _ck(_v, 0, 0, currVal_0);
    });
}
export function View_EventViewComponent_0(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 21, 'a', [['target',
                '_blank']], [[8, 'href', 4]], [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.onClick() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), i1.ɵted(null, ['\n  '])), (_l()(),
            i1.ɵeld(0, null, null, 3, 'header', [['class', 'event-info']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n    '])), (_l()(), i1.ɵeld(0, null, null, 0, 'img', [['class',
                'event-image']], [[8, 'src', 4]], null, null, null, null)),
        (_l()(), i1.ɵted(null, ['\n  '])), (_l()(), i1.ɵted(null, ['\n  '])),
        (_l()(), i1.ɵeld(0, null, null, 13, 'section', [['class', 'event-more-info']], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['\n    '])), (_l()(), i1.ɵeld(0, null, null, 1, 'span', [['class', 'event-title']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['', ''])), (_l()(),
            i1.ɵted(null, ['\n    at\n    '])), (_l()(), i1.ɵeld(0, null, null, 1, 'span', [['class', 'event-location']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['', ''])), (_l()(), i1.ɵted(null, ['\n    '])), (_l()(), i1.ɵeld(0, null, null, 4, 'span', [['class', 'event-description'], ['div', '']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n      (', ').\n      '])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_EventViewComponent_1)), i1.ɵdid(16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, 'ngIf'] }, null),
        (_l()(), i1.ɵted(null, ['\n    '])), (_l()(), i1.ɵted(null, ['\n  '])),
        (_l()(), i1.ɵted(null, ['\n'])), (_l()(), i1.ɵted(null, ['\n']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_5 = !_co.isFree;
        _ck(_v, 18, 0, currVal_5);
    }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = i1.ɵinlineInterpolate(1, '', _co.event.ticket_url, '');
        _ck(_v, 0, 0, currVal_0);
        var currVal_1 = i1.ɵinlineInterpolate(1, '', _co.imageUrl, '');
        _ck(_v, 4, 0, currVal_1);
        var currVal_2 = _co.event.title;
        _ck(_v, 10, 0, currVal_2);
        var currVal_3 = _co.event.location;
        _ck(_v, 13, 0, currVal_3);
        var currVal_4 = _co.event.formatted_duration;
        _ck(_v, 16, 0, currVal_4);
    });
}
export function View_EventViewComponent_Host_0(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 2, 'event-view', [['class',
                'event-view']], null, null, null, View_EventViewComponent_0, RenderType_EventViewComponent)), i1.ɵprd(512, null, i4.AnalyticsService, i4.AnalyticsService, [i5.Http]), i1.ɵdid(49152, null, 0, i2.EventViewComponent, [i4.AnalyticsService], null, null)], null, null);
}
export var EventViewComponentNgFactory = i1.ɵccf('event-view', i2.EventViewComponent, View_EventViewComponent_Host_0, { event: 'event' }, { afterClick: 'afterClick' }, []);
//# sourceMappingURL=event-view.component.ngfactory.js.map