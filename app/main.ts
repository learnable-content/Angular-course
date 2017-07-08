import "./polyfills";

import { enableProdMode } from "@angular/core";
import { platformBrowser } from "@angular/platform-browser";
import { AppModuleNgFactory } from "../aot/app/app.module.ngfactory";

enableProdMode();

document.addEventListener("DOMContentLoaded", function() {
    platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
});
