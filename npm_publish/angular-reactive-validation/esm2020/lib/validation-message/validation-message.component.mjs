import { Component, Input, ViewEncapsulation, Optional } from '@angular/core';
import { getFormControlFromContainer, isControlContainerVoidOrInitialized } from '../get-form-control-from-container';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
/**
 * The ValidationMessageComponent lets the developer specify a custom visual style and custom error message
 * for edge-cases where the standard style or message capabilities do not suffice.
 *
 * TODO: Trigger revalidation by parent whenever [for] changes.
 */
export class ValidationMessageComponent {
    constructor(controlContainer) {
        this.controlContainer = controlContainer;
        this.initializeForOnInit = () => { };
    }
    set for(control) {
        if (!isControlContainerVoidOrInitialized(this.controlContainer)) {
            this.initializeForOnInit = () => this.for = control;
            return;
        }
        this._for = typeof control === 'string' ? getFormControlFromContainer(control, this.controlContainer) : control;
    }
    get for() {
        return this._for;
    }
    ngOnInit() {
        this.initializeForOnInit();
    }
    canHandle(error) {
        return (!this.for || error.control === this.for) && error.key === this.key;
    }
    show(error) {
        this._context = error.errorObject;
    }
    reset() {
        this._context = undefined;
    }
    /**
     * The ValidationErrors object that contains contextual information about the error, which can be used for
     * displaying, e.g. the minimum length within the error message.
     */
    get context() {
        return this._context;
    }
}
ValidationMessageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: ValidationMessageComponent, deps: [{ token: i1.ControlContainer, optional: true }], target: i0.ɵɵFactoryTarget.Component });
ValidationMessageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: ValidationMessageComponent, selector: "arv-validation-message", inputs: { for: "for", key: "key" }, ngImport: i0, template: "<div *ngIf=\"context\">\r\n  <ng-content></ng-content>\r\n</div>\r\n", dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: ValidationMessageComponent, decorators: [{
            type: Component,
            args: [{ selector: 'arv-validation-message', encapsulation: ViewEncapsulation.None, template: "<div *ngIf=\"context\">\r\n  <ng-content></ng-content>\r\n</div>\r\n" }]
        }], ctorParameters: function () { return [{ type: i1.ControlContainer, decorators: [{
                    type: Optional
                }] }]; }, propDecorators: { for: [{
                type: Input
            }], 
        /**
         * The name of the returned validation object property for which the custom validation message should be shown.
         */
        key: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi1tZXNzYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItcmVhY3RpdmUtdmFsaWRhdGlvbi9zcmMvbGliL3ZhbGlkYXRpb24tbWVzc2FnZS92YWxpZGF0aW9uLW1lc3NhZ2UuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYW5ndWxhci1yZWFjdGl2ZS12YWxpZGF0aW9uL3NyYy9saWIvdmFsaWRhdGlvbi1tZXNzYWdlL3ZhbGlkYXRpb24tbWVzc2FnZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFJdEYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLG1DQUFtQyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7Ozs7QUFPdEg7Ozs7O0dBS0c7QUFDSCxNQUFNLE9BQU8sMEJBQTBCO0lBMkJyQyxZQUFnQyxnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQWtCMUQsd0JBQW1CLEdBQUcsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDO0lBbEIrQixDQUFDO0lBekJ2RSxJQUtJLEdBQUcsQ0FBQyxPQUFnRDtRQUN0RCxJQUFJLENBQUMsbUNBQW1DLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUU7WUFDL0QsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDO1lBQ3BELE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxPQUFPLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQywyQkFBMkIsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztJQUNsSCxDQUFDO0lBQ0QsSUFBSSxHQUFHO1FBQ0wsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFhRCxRQUFRO1FBQ04sSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVELFNBQVMsQ0FBQyxLQUFzQjtRQUM5QixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxPQUFPLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUM3RSxDQUFDO0lBRUQsSUFBSSxDQUFDLEtBQXNCO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQztJQUNwQyxDQUFDO0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDO0lBQzVCLENBQUM7SUFJRDs7O09BR0c7SUFDSCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQzs7dUhBckRVLDBCQUEwQjsyR0FBMUIsMEJBQTBCLGtHQ2pCdkMsc0VBR0E7MkZEY2EsMEJBQTBCO2tCQVh0QyxTQUFTOytCQUNFLHdCQUF3QixpQkFFbkIsaUJBQWlCLENBQUMsSUFBSTs7MEJBbUN4QixRQUFROzRDQXBCakIsR0FBRztzQkFMTixLQUFLOztRQWlCTjs7V0FFRztRQUNILEdBQUc7c0JBSkYsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBPcHRpb25hbCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFVudHlwZWRGb3JtQ29udHJvbCwgVmFsaWRhdGlvbkVycm9ycywgQ29udHJvbENvbnRhaW5lciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7IFZhbGlkYXRpb25FcnJvciB9IGZyb20gJy4uL3ZhbGlkYXRpb24tZXJyb3InO1xyXG5pbXBvcnQgeyBnZXRGb3JtQ29udHJvbEZyb21Db250YWluZXIsIGlzQ29udHJvbENvbnRhaW5lclZvaWRPckluaXRpYWxpemVkIH0gZnJvbSAnLi4vZ2V0LWZvcm0tY29udHJvbC1mcm9tLWNvbnRhaW5lcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Fydi12YWxpZGF0aW9uLW1lc3NhZ2UnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi92YWxpZGF0aW9uLW1lc3NhZ2UuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuLyoqXHJcbiAqIFRoZSBWYWxpZGF0aW9uTWVzc2FnZUNvbXBvbmVudCBsZXRzIHRoZSBkZXZlbG9wZXIgc3BlY2lmeSBhIGN1c3RvbSB2aXN1YWwgc3R5bGUgYW5kIGN1c3RvbSBlcnJvciBtZXNzYWdlXHJcbiAqIGZvciBlZGdlLWNhc2VzIHdoZXJlIHRoZSBzdGFuZGFyZCBzdHlsZSBvciBtZXNzYWdlIGNhcGFiaWxpdGllcyBkbyBub3Qgc3VmZmljZS5cclxuICpcclxuICogVE9ETzogVHJpZ2dlciByZXZhbGlkYXRpb24gYnkgcGFyZW50IHdoZW5ldmVyIFtmb3JdIGNoYW5nZXMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgVmFsaWRhdGlvbk1lc3NhZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKVxyXG4gIC8qKlxyXG4gICAqIFRoZSBGb3JtQ29udHJvbCBmb3Igd2hpY2ggYSBjdXN0b20gdmFsaWRhdGlvbiBtZXNzYWdlIHNob3VsZCBiZSBzaG93bi4gVGhpcyBpcyBvbmx5IHJlcXVpcmVkIHdoZW4gdGhlIHBhcmVudFxyXG4gICAqIFZhbGlkYXRpb25NZXNzYWdlc0NvbXBvbmVudCBoYXMgbXVsdGlwbGUgRm9ybUNvbnRyb2xzIHNwZWNpZmllZC5cclxuICAgKi9cclxuICBzZXQgZm9yKGNvbnRyb2w6IFVudHlwZWRGb3JtQ29udHJvbCB8IHN0cmluZyB8IHVuZGVmaW5lZCkge1xyXG4gICAgaWYgKCFpc0NvbnRyb2xDb250YWluZXJWb2lkT3JJbml0aWFsaXplZCh0aGlzLmNvbnRyb2xDb250YWluZXIpKSB7XHJcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZUZvck9uSW5pdCA9ICgpID0+IHRoaXMuZm9yID0gY29udHJvbDtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fZm9yID0gdHlwZW9mIGNvbnRyb2wgPT09ICdzdHJpbmcnID8gZ2V0Rm9ybUNvbnRyb2xGcm9tQ29udGFpbmVyKGNvbnRyb2wsIHRoaXMuY29udHJvbENvbnRhaW5lcikgOiBjb250cm9sO1xyXG4gIH1cclxuICBnZXQgZm9yKCk6IFVudHlwZWRGb3JtQ29udHJvbCB8IHN0cmluZyB8IHVuZGVmaW5lZCB7XHJcbiAgICByZXR1cm4gdGhpcy5fZm9yO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICAvKipcclxuICAgKiBUaGUgbmFtZSBvZiB0aGUgcmV0dXJuZWQgdmFsaWRhdGlvbiBvYmplY3QgcHJvcGVydHkgZm9yIHdoaWNoIHRoZSBjdXN0b20gdmFsaWRhdGlvbiBtZXNzYWdlIHNob3VsZCBiZSBzaG93bi5cclxuICAgKi9cclxuICBrZXk6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuXHJcbiAgcHJpdmF0ZSBfY29udGV4dDogVmFsaWRhdGlvbkVycm9ycyB8IHVuZGVmaW5lZDtcclxuICBwcml2YXRlIF9mb3I6IFVudHlwZWRGb3JtQ29udHJvbCB8IHVuZGVmaW5lZDtcclxuXHJcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgcHJpdmF0ZSBjb250cm9sQ29udGFpbmVyOiBDb250cm9sQ29udGFpbmVyKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmluaXRpYWxpemVGb3JPbkluaXQoKTtcclxuICB9XHJcblxyXG4gIGNhbkhhbmRsZShlcnJvcjogVmFsaWRhdGlvbkVycm9yKSB7XHJcbiAgICByZXR1cm4gKCF0aGlzLmZvciB8fCBlcnJvci5jb250cm9sID09PSB0aGlzLmZvcikgJiYgZXJyb3Iua2V5ID09PSB0aGlzLmtleTtcclxuICB9XHJcblxyXG4gIHNob3coZXJyb3I6IFZhbGlkYXRpb25FcnJvcikge1xyXG4gICAgdGhpcy5fY29udGV4dCA9IGVycm9yLmVycm9yT2JqZWN0O1xyXG4gIH1cclxuXHJcbiAgcmVzZXQoKSB7XHJcbiAgICB0aGlzLl9jb250ZXh0ID0gdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbml0aWFsaXplRm9yT25Jbml0ID0gKCkgPT4ge307XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBWYWxpZGF0aW9uRXJyb3JzIG9iamVjdCB0aGF0IGNvbnRhaW5zIGNvbnRleHR1YWwgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGVycm9yLCB3aGljaCBjYW4gYmUgdXNlZCBmb3JcclxuICAgKiBkaXNwbGF5aW5nLCBlLmcuIHRoZSBtaW5pbXVtIGxlbmd0aCB3aXRoaW4gdGhlIGVycm9yIG1lc3NhZ2UuXHJcbiAgICovXHJcbiAgZ2V0IGNvbnRleHQoKTogYW55IHtcclxuICAgIHJldHVybiB0aGlzLl9jb250ZXh0O1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2ICpuZ0lmPVwiY29udGV4dFwiPlxyXG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuPC9kaXY+XHJcbiJdfQ==