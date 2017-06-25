import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { ExampleComponent } from "./example.component";
import { ExampleFormComponent } from "./example-form.component";
import { ExampleAnimationComponent } from "./example-animation.component";

@NgModule({
    providers: [],
    declarations: [
        ExampleComponent,
        ExampleFormComponent,
        ExampleAnimationComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        BrowserAnimationsModule
    ],
    exports: [
        ExampleComponent
    ],
    entryComponents: [
        ExampleComponent
    ],
    bootstrap: [],
    schemas: [],
    id: "example_module"
})
export class ExampleModule {};
