import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidationMessagesComponent } from './validation-messages/validation-messages.component';
import { ValidationMessageComponent } from './validation-message/validation-message.component';
import { FormDirective } from './form/form.directive';
import { REACTIVE_VALIDATION_MODULE_CONFIGURATION_TOKEN } from './reactive-validation-module-configuration-token';
import * as i0 from "@angular/core";
export class ReactiveValidationModule {
    static forRoot(configuration) {
        return {
            ngModule: ReactiveValidationModule,
            providers: [{
                    provide: REACTIVE_VALIDATION_MODULE_CONFIGURATION_TOKEN, useValue: configuration
                }]
        };
    }
}
ReactiveValidationModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: ReactiveValidationModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ReactiveValidationModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: ReactiveValidationModule, declarations: [ValidationMessagesComponent,
        ValidationMessageComponent,
        FormDirective], imports: [CommonModule], exports: [ValidationMessagesComponent,
        ValidationMessageComponent,
        FormDirective] });
ReactiveValidationModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: ReactiveValidationModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: ReactiveValidationModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        ValidationMessagesComponent,
                        ValidationMessageComponent,
                        FormDirective
                    ],
                    exports: [
                        ValidationMessagesComponent,
                        ValidationMessageComponent,
                        FormDirective
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3RpdmUtdmFsaWRhdGlvbi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9hbmd1bGFyLXJlYWN0aXZlLXZhbGlkYXRpb24vc3JjL2xpYi9yZWFjdGl2ZS12YWxpZGF0aW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDbEcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDL0YsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXRELE9BQU8sRUFBRSw4Q0FBOEMsRUFBRSxNQUFNLGtEQUFrRCxDQUFDOztBQWlCbEgsTUFBTSxPQUFPLHdCQUF3QjtJQUNuQyxNQUFNLENBQUMsT0FBTyxDQUFDLGFBQXFEO1FBQ2xFLE9BQU87WUFDTCxRQUFRLEVBQUUsd0JBQXdCO1lBQ2xDLFNBQVMsRUFBRSxDQUFDO29CQUNWLE9BQU8sRUFBRSw4Q0FBOEMsRUFBRSxRQUFRLEVBQUUsYUFBYTtpQkFDakYsQ0FBQztTQUNILENBQUM7SUFDSixDQUFDOztxSEFSVSx3QkFBd0I7c0hBQXhCLHdCQUF3QixpQkFWakMsMkJBQTJCO1FBQzNCLDBCQUEwQjtRQUMxQixhQUFhLGFBTGIsWUFBWSxhQVFaLDJCQUEyQjtRQUMzQiwwQkFBMEI7UUFDMUIsYUFBYTtzSEFHSix3QkFBd0IsWUFiakMsWUFBWTsyRkFhSCx3QkFBd0I7a0JBZnBDLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7cUJBQ2I7b0JBQ0QsWUFBWSxFQUFFO3dCQUNaLDJCQUEyQjt3QkFDM0IsMEJBQTBCO3dCQUMxQixhQUFhO3FCQUNkO29CQUNELE9BQU8sRUFBRTt3QkFDUCwyQkFBMkI7d0JBQzNCLDBCQUEwQjt3QkFDMUIsYUFBYTtxQkFDZDtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBWYWxpZGF0aW9uTWVzc2FnZXNDb21wb25lbnQgfSBmcm9tICcuL3ZhbGlkYXRpb24tbWVzc2FnZXMvdmFsaWRhdGlvbi1tZXNzYWdlcy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBWYWxpZGF0aW9uTWVzc2FnZUNvbXBvbmVudCB9IGZyb20gJy4vdmFsaWRhdGlvbi1tZXNzYWdlL3ZhbGlkYXRpb24tbWVzc2FnZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGb3JtRGlyZWN0aXZlIH0gZnJvbSAnLi9mb3JtL2Zvcm0uZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgUmVhY3RpdmVWYWxpZGF0aW9uTW9kdWxlQ29uZmlndXJhdGlvbiB9IGZyb20gJy4vcmVhY3RpdmUtdmFsaWRhdGlvbi1tb2R1bGUtY29uZmlndXJhdGlvbic7XHJcbmltcG9ydCB7IFJFQUNUSVZFX1ZBTElEQVRJT05fTU9EVUxFX0NPTkZJR1VSQVRJT05fVE9LRU4gfSBmcm9tICcuL3JlYWN0aXZlLXZhbGlkYXRpb24tbW9kdWxlLWNvbmZpZ3VyYXRpb24tdG9rZW4nO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGVcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgVmFsaWRhdGlvbk1lc3NhZ2VzQ29tcG9uZW50LFxyXG4gICAgVmFsaWRhdGlvbk1lc3NhZ2VDb21wb25lbnQsXHJcbiAgICBGb3JtRGlyZWN0aXZlXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBWYWxpZGF0aW9uTWVzc2FnZXNDb21wb25lbnQsXHJcbiAgICBWYWxpZGF0aW9uTWVzc2FnZUNvbXBvbmVudCxcclxuICAgIEZvcm1EaXJlY3RpdmVcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZWFjdGl2ZVZhbGlkYXRpb25Nb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZ3VyYXRpb24/OiBSZWFjdGl2ZVZhbGlkYXRpb25Nb2R1bGVDb25maWd1cmF0aW9uKTogTW9kdWxlV2l0aFByb3ZpZGVyczxSZWFjdGl2ZVZhbGlkYXRpb25Nb2R1bGU+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBSZWFjdGl2ZVZhbGlkYXRpb25Nb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW3tcclxuICAgICAgICBwcm92aWRlOiBSRUFDVElWRV9WQUxJREFUSU9OX01PRFVMRV9DT05GSUdVUkFUSU9OX1RPS0VOLCB1c2VWYWx1ZTogY29uZmlndXJhdGlvblxyXG4gICAgICB9XVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19