import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

declare var PRODUCTION: boolean;
if (PRODUCTION) {
    enableProdMode();
}

document.addEventListener('DOMContentLoaded', function() {
    platformBrowserDynamic().bootstrapModule(AppModule);
});
