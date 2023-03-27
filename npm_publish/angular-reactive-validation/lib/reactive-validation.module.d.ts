import { ModuleWithProviders } from '@angular/core';
import { ReactiveValidationModuleConfiguration } from './reactive-validation-module-configuration';
import * as i0 from "@angular/core";
import * as i1 from "./validation-messages/validation-messages.component";
import * as i2 from "./validation-message/validation-message.component";
import * as i3 from "./form/form.directive";
import * as i4 from "@angular/common";
export declare class ReactiveValidationModule {
    static forRoot(configuration?: ReactiveValidationModuleConfiguration): ModuleWithProviders<ReactiveValidationModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ReactiveValidationModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<ReactiveValidationModule, [typeof i1.ValidationMessagesComponent, typeof i2.ValidationMessageComponent, typeof i3.FormDirective], [typeof i4.CommonModule], [typeof i1.ValidationMessagesComponent, typeof i2.ValidationMessageComponent, typeof i3.FormDirective]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<ReactiveValidationModule>;
}
