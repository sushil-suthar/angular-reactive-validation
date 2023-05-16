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
    constructor(controlContainer) {
        this.controlContainer = controlContainer;
        this.initializeForOnInit = () => { };
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
ValidationMessageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ValidationMessageComponent, deps: [{ token: i1.ControlContainer, optional: true }], target: i0.ɵɵFactoryTarget.Component });
ValidationMessageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: ValidationMessageComponent, selector: "arv-validation-message", inputs: { for: "for", key: "key" }, ngImport: i0, template: "<div *ngIf=\"context\">\r\n  <ng-content></ng-content>\r\n</div>\r\n", dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ValidationMessageComponent, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi1tZXNzYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItcmVhY3RpdmUtdmFsaWRhdGlvbi9zcmMvbGliL3ZhbGlkYXRpb24tbWVzc2FnZS92YWxpZGF0aW9uLW1lc3NhZ2UuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYW5ndWxhci1yZWFjdGl2ZS12YWxpZGF0aW9uL3NyYy9saWIvdmFsaWRhdGlvbi1tZXNzYWdlL3ZhbGlkYXRpb24tbWVzc2FnZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFJdEYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLG1DQUFtQyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7Ozs7QUFPdEg7Ozs7O0dBS0c7QUFDSCxNQUFNLE9BQU8sMEJBQTBCO0lBRXJDLElBS0ksR0FBRyxDQUFDLE9BQWdEO1FBQ3RELElBQUksQ0FBQyxtQ0FBbUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtZQUMvRCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUM7WUFDcEQsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLE9BQU8sS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLDJCQUEyQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO0lBQ2xILENBQUM7SUFDRCxJQUFJLEdBQUc7UUFDTCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQVdELFlBQWdDLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBa0IxRCx3QkFBbUIsR0FBRyxHQUFHLEVBQUUsR0FBRSxDQUFDLENBQUM7SUFsQitCLENBQUM7SUFFdkUsUUFBUTtRQUNOLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCxTQUFTLENBQUMsS0FBc0I7UUFDOUIsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxLQUFLLENBQUMsR0FBRyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDN0UsQ0FBQztJQUVELElBQUksQ0FBQyxLQUFzQjtRQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7SUFDcEMsQ0FBQztJQUVELEtBQUs7UUFDSCxJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQztJQUM1QixDQUFDO0lBSUQ7OztPQUdHO0lBQ0gsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7O3VIQXJEVSwwQkFBMEI7MkdBQTFCLDBCQUEwQixrR0NqQnZDLHNFQUdBOzJGRGNhLDBCQUEwQjtrQkFYdEMsU0FBUzsrQkFDRSx3QkFBd0IsaUJBRW5CLGlCQUFpQixDQUFDLElBQUk7OzBCQW1DeEIsUUFBUTs0Q0FwQmpCLEdBQUc7c0JBTE4sS0FBSzs7UUFpQk47O1dBRUc7UUFDSCxHQUFHO3NCQUpGLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiwgT3B0aW9uYWwsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBVbnR5cGVkRm9ybUNvbnRyb2wsIFZhbGlkYXRpb25FcnJvcnMsIENvbnRyb2xDb250YWluZXIgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBWYWxpZGF0aW9uRXJyb3IgfSBmcm9tICcuLi92YWxpZGF0aW9uLWVycm9yJztcclxuaW1wb3J0IHsgZ2V0Rm9ybUNvbnRyb2xGcm9tQ29udGFpbmVyLCBpc0NvbnRyb2xDb250YWluZXJWb2lkT3JJbml0aWFsaXplZCB9IGZyb20gJy4uL2dldC1mb3JtLWNvbnRyb2wtZnJvbS1jb250YWluZXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcnYtdmFsaWRhdGlvbi1tZXNzYWdlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdmFsaWRhdGlvbi1tZXNzYWdlLmNvbXBvbmVudC5odG1sJyxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcbi8qKlxyXG4gKiBUaGUgVmFsaWRhdGlvbk1lc3NhZ2VDb21wb25lbnQgbGV0cyB0aGUgZGV2ZWxvcGVyIHNwZWNpZnkgYSBjdXN0b20gdmlzdWFsIHN0eWxlIGFuZCBjdXN0b20gZXJyb3IgbWVzc2FnZVxyXG4gKiBmb3IgZWRnZS1jYXNlcyB3aGVyZSB0aGUgc3RhbmRhcmQgc3R5bGUgb3IgbWVzc2FnZSBjYXBhYmlsaXRpZXMgZG8gbm90IHN1ZmZpY2UuXHJcbiAqXHJcbiAqIFRPRE86IFRyaWdnZXIgcmV2YWxpZGF0aW9uIGJ5IHBhcmVudCB3aGVuZXZlciBbZm9yXSBjaGFuZ2VzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFZhbGlkYXRpb25NZXNzYWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KClcclxuICAvKipcclxuICAgKiBUaGUgRm9ybUNvbnRyb2wgZm9yIHdoaWNoIGEgY3VzdG9tIHZhbGlkYXRpb24gbWVzc2FnZSBzaG91bGQgYmUgc2hvd24uIFRoaXMgaXMgb25seSByZXF1aXJlZCB3aGVuIHRoZSBwYXJlbnRcclxuICAgKiBWYWxpZGF0aW9uTWVzc2FnZXNDb21wb25lbnQgaGFzIG11bHRpcGxlIEZvcm1Db250cm9scyBzcGVjaWZpZWQuXHJcbiAgICovXHJcbiAgc2V0IGZvcihjb250cm9sOiBVbnR5cGVkRm9ybUNvbnRyb2wgfCBzdHJpbmcgfCB1bmRlZmluZWQpIHtcclxuICAgIGlmICghaXNDb250cm9sQ29udGFpbmVyVm9pZE9ySW5pdGlhbGl6ZWQodGhpcy5jb250cm9sQ29udGFpbmVyKSkge1xyXG4gICAgICB0aGlzLmluaXRpYWxpemVGb3JPbkluaXQgPSAoKSA9PiB0aGlzLmZvciA9IGNvbnRyb2w7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuX2ZvciA9IHR5cGVvZiBjb250cm9sID09PSAnc3RyaW5nJyA/IGdldEZvcm1Db250cm9sRnJvbUNvbnRhaW5lcihjb250cm9sLCB0aGlzLmNvbnRyb2xDb250YWluZXIpIDogY29udHJvbDtcclxuICB9XHJcbiAgZ2V0IGZvcigpOiBVbnR5cGVkRm9ybUNvbnRyb2wgfCBzdHJpbmcgfCB1bmRlZmluZWQge1xyXG4gICAgcmV0dXJuIHRoaXMuX2ZvcjtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgLyoqXHJcbiAgICogVGhlIG5hbWUgb2YgdGhlIHJldHVybmVkIHZhbGlkYXRpb24gb2JqZWN0IHByb3BlcnR5IGZvciB3aGljaCB0aGUgY3VzdG9tIHZhbGlkYXRpb24gbWVzc2FnZSBzaG91bGQgYmUgc2hvd24uXHJcbiAgICovXHJcbiAga2V5OiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcblxyXG4gIHByaXZhdGUgX2NvbnRleHQ6IFZhbGlkYXRpb25FcnJvcnMgfCB1bmRlZmluZWQ7XHJcbiAgcHJpdmF0ZSBfZm9yOiBVbnR5cGVkRm9ybUNvbnRyb2wgfCB1bmRlZmluZWQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIHByaXZhdGUgY29udHJvbENvbnRhaW5lcjogQ29udHJvbENvbnRhaW5lcikgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5pbml0aWFsaXplRm9yT25Jbml0KCk7XHJcbiAgfVxyXG5cclxuICBjYW5IYW5kbGUoZXJyb3I6IFZhbGlkYXRpb25FcnJvcikge1xyXG4gICAgcmV0dXJuICghdGhpcy5mb3IgfHwgZXJyb3IuY29udHJvbCA9PT0gdGhpcy5mb3IpICYmIGVycm9yLmtleSA9PT0gdGhpcy5rZXk7XHJcbiAgfVxyXG5cclxuICBzaG93KGVycm9yOiBWYWxpZGF0aW9uRXJyb3IpIHtcclxuICAgIHRoaXMuX2NvbnRleHQgPSBlcnJvci5lcnJvck9iamVjdDtcclxuICB9XHJcblxyXG4gIHJlc2V0KCkge1xyXG4gICAgdGhpcy5fY29udGV4dCA9IHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5pdGlhbGl6ZUZvck9uSW5pdCA9ICgpID0+IHt9O1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgVmFsaWRhdGlvbkVycm9ycyBvYmplY3QgdGhhdCBjb250YWlucyBjb250ZXh0dWFsIGluZm9ybWF0aW9uIGFib3V0IHRoZSBlcnJvciwgd2hpY2ggY2FuIGJlIHVzZWQgZm9yXHJcbiAgICogZGlzcGxheWluZywgZS5nLiB0aGUgbWluaW11bSBsZW5ndGggd2l0aGluIHRoZSBlcnJvciBtZXNzYWdlLlxyXG4gICAqL1xyXG4gIGdldCBjb250ZXh0KCk6IGFueSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY29udGV4dDtcclxuICB9XHJcbn1cclxuIiwiPGRpdiAqbmdJZj1cImNvbnRleHRcIj5cclxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbjwvZGl2PlxyXG4iXX0=