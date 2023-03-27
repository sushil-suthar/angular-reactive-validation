import { Component, ContentChildren, Input, ViewEncapsulation, Optional, Inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { ValidationMessageComponent } from '../validation-message/validation-message.component';
import { ValidationError } from '../validation-error';
import { getFormControlFromContainer, isControlContainerVoidOrInitialized } from '../get-form-control-from-container';
import { REACTIVE_VALIDATION_MODULE_CONFIGURATION_TOKEN } from '../reactive-validation-module-configuration-token';
import { getControlPath } from '../get-control-path';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "../form/form.directive";
import * as i3 from "@angular/common";
/**
 * The ValidationMessagesComponent shows validation messages for one to many FormControls. It either shows
 * messages specified within the reactive form model, or shows custom messages declared using the
 * ValidationMessageComponent.
 */
export class ValidationMessagesComponent {
    constructor(controlContainer, formSubmitDirective, configuration) {
        this.controlContainer = controlContainer;
        this.configuration = configuration;
        this._for = [];
        this.messageComponentsChangesSubscription = new Subscription();
        this.controlStatusChangesSubscription = new Subscription();
        this.formSubmitted = undefined;
        this.formSubmittedSubscription = new Subscription();
        this.initializeForOnInit = () => { };
        if (formSubmitDirective) {
            this.formSubmitted = false;
            this.formSubmittedSubscription.add(formSubmitDirective.submitted.subscribe(() => {
                this.formSubmitted = true;
            }));
        }
    }
    ngOnInit() {
        this.initializeForOnInit();
    }
    ngAfterContentInit() {
        this.messageComponentsChangesSubscription.add(this.messageComponents?.changes.subscribe(this.validateChildren));
        this.validateChildren();
        this._for.forEach(control => {
            this.handleControlStatusChange(control);
        });
    }
    ngOnDestroy() {
        this.messageComponentsChangesSubscription.unsubscribe();
        this.formSubmittedSubscription.unsubscribe();
        this.controlStatusChangesSubscription.unsubscribe();
    }
    isValid() {
        return this.getFirstErrorPerControl().length === 0;
    }
    getErrorMessages() {
        return this.getFirstErrorPerControl().filter(error => error.hasMessage())
            .map(error => error.getMessage());
    }
    set for(controls) {
        if (!isControlContainerVoidOrInitialized(this.controlContainer)) {
            this.initializeForOnInit = () => this.for = controls;
            return;
        }
        if (!Array.isArray(controls)) {
            controls = controls !== undefined ? [controls] : [];
        }
        if (controls.length === 0) {
            throw new Error(`arv-validation-messages doesn't allow declaring an empty array as input to the 'for' attribute.`);
        }
        this._for = controls.map(control => typeof control === 'string' ?
            getFormControlFromContainer(control, this.controlContainer) : control);
        this.validateChildren();
        this.controlStatusChangesSubscription.unsubscribe();
        this.controlStatusChangesSubscription = new Subscription();
        this._for.forEach(control => {
            this.controlStatusChangesSubscription.add(control.statusChanges.subscribe(() => {
                this.handleControlStatusChange(control);
            }));
        });
    }
    getFirstErrorPerControl() {
        return this._for.filter(control => this.configuration && this.configuration.displayValidationMessageWhen ?
            this.configuration.displayValidationMessageWhen(control, this.formSubmitted) : control.touched || this.formSubmitted).map(ValidationError.fromFirstError).filter(value => value !== undefined);
    }
    /**
     * Validates that the child ValidationMessageComponents declare what FormControl they specify a message for (when needed); and
     * that the declared FormControl is actually part of the parent ValidationMessagesComponent 'for' collection (when specified).
     */
    validateChildren() {
        if (!this.messageComponents) {
            return;
        }
        this.messageComponents.forEach(component => {
            if (this._for.length > 1 && component.for === undefined) {
                throw new Error(`Specify the FormControl for which the arv-validation-message element with key '${component.key}' ` +
                    `should show messages.`);
            }
            if (component.for && this._for.indexOf(component.for) === -1) {
                throw new Error(`A arv-validation-messages element with key '${component.key}' attempts to show messages ` +
                    `for a FormControl that is not declared in the parent arv-validation-messages element.`);
            }
        });
    }
    handleControlStatusChange(control) {
        if (!this.messageComponents) {
            return;
        }
        this.messageComponents.filter(component => component.for === control || component.for === undefined)
            .forEach(component => component.reset());
        const error = ValidationError.fromFirstError(control);
        if (!error || error.hasMessage()) {
            return;
        }
        const messageComponent = this.messageComponents.find(component => component.canHandle(error));
        if (messageComponent) {
            messageComponent.show(error);
        }
        else {
            throw new Error(`There is no suitable arv-validation-message element to show the '${error.key}' ` +
                `error of '${getControlPath(error.control)}'`);
        }
    }
}
ValidationMessagesComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: ValidationMessagesComponent, deps: [{ token: i1.ControlContainer, optional: true }, { token: i2.FormDirective, optional: true }, { token: REACTIVE_VALIDATION_MODULE_CONFIGURATION_TOKEN, optional: true }], target: i0.ɵɵFactoryTarget.Component });
ValidationMessagesComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: ValidationMessagesComponent, selector: "arv-validation-messages", inputs: { for: "for" }, queries: [{ propertyName: "messageComponents", predicate: ValidationMessageComponent }], ngImport: i0, template: "<div *ngIf=\"!isValid()\">\r\n  <div class=\"invalid-feedback\">\r\n    <p *ngFor=\"let message of getErrorMessages()\">{{message}}</p>\r\n  </div>\r\n  <ng-content></ng-content>\r\n</div>\r\n", dependencies: [{ kind: "directive", type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: ValidationMessagesComponent, decorators: [{
            type: Component,
            args: [{ selector: 'arv-validation-messages', encapsulation: ViewEncapsulation.None, template: "<div *ngIf=\"!isValid()\">\r\n  <div class=\"invalid-feedback\">\r\n    <p *ngFor=\"let message of getErrorMessages()\">{{message}}</p>\r\n  </div>\r\n  <ng-content></ng-content>\r\n</div>\r\n" }]
        }], ctorParameters: function () { return [{ type: i1.ControlContainer, decorators: [{
                    type: Optional
                }] }, { type: i2.FormDirective, decorators: [{
                    type: Optional
                }] }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [REACTIVE_VALIDATION_MODULE_CONFIGURATION_TOKEN]
                }] }]; }, propDecorators: { messageComponents: [{
                type: ContentChildren,
                args: [ValidationMessageComponent]
            }], for: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi1tZXNzYWdlcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hbmd1bGFyLXJlYWN0aXZlLXZhbGlkYXRpb24vc3JjL2xpYi92YWxpZGF0aW9uLW1lc3NhZ2VzL3ZhbGlkYXRpb24tbWVzc2FnZXMuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYW5ndWxhci1yZWFjdGl2ZS12YWxpZGF0aW9uL3NyYy9saWIvdmFsaWRhdGlvbi1tZXNzYWdlcy92YWxpZGF0aW9uLW1lc3NhZ2VzLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFhLEtBQUssRUFBRSxpQkFBaUIsRUFDM0QsUUFBUSxFQUFFLE1BQU0sRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUU3RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRXBDLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQ2hHLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUd0SCxPQUFPLEVBQUUsOENBQThDLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUNuSCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7Ozs7O0FBT3JEOzs7O0dBSUc7QUFDSCxNQUFNLE9BQU8sMkJBQTJCO0lBVXRDLFlBQWdDLGdCQUFrQyxFQUFjLG1CQUFrQyxFQUNwQyxhQUFvRDtRQURsRyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ1ksa0JBQWEsR0FBYixhQUFhLENBQXVDO1FBUjFILFNBQUksR0FBeUIsRUFBRSxDQUFDO1FBQ2hDLHlDQUFvQyxHQUFHLElBQUksWUFB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LENBQUM7U0FDbEQ7SUFDSCxDQUFDOzt3SEFqSVUsMkJBQTJCLCtHQVdoQiw4Q0FBOEM7NEdBWHpELDJCQUEyQix5SEFDckIsMEJBQTBCLDZCQ3hCN0Msa01BTUE7MkZEaUJhLDJCQUEyQjtrQkFWdkMsU0FBUzsrQkFDRSx5QkFBeUIsaUJBRXBCLGlCQUFpQixDQUFDLElBQUk7OzBCQWlCeEIsUUFBUTs7MEJBQWdELFFBQVE7OzBCQUMxRSxRQUFROzswQkFBSSxNQUFNOzJCQUFDLDhDQUE4Qzs0Q0FWZixpQkFBaUI7c0JBQXJFLGVBQWU7dUJBQUMsMEJBQTBCO2dCQWtEdkMsR0FBRztzQkFETixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDb250ZW50Q2hpbGRyZW4sIFF1ZXJ5TGlzdCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBBZnRlckNvbnRlbnRJbml0LFxyXG4gIE9uRGVzdHJveSwgT3B0aW9uYWwsIEluamVjdCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFVudHlwZWRGb3JtQ29udHJvbCwgQ29udHJvbENvbnRhaW5lciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBWYWxpZGF0aW9uTWVzc2FnZUNvbXBvbmVudCB9IGZyb20gJy4uL3ZhbGlkYXRpb24tbWVzc2FnZS92YWxpZGF0aW9uLW1lc3NhZ2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVmFsaWRhdGlvbkVycm9yIH0gZnJvbSAnLi4vdmFsaWRhdGlvbi1lcnJvcic7XHJcbmltcG9ydCB7IGdldEZvcm1Db250cm9sRnJvbUNvbnRhaW5lciwgaXNDb250cm9sQ29udGFpbmVyVm9pZE9ySW5pdGlhbGl6ZWQgfSBmcm9tICcuLi9nZXQtZm9ybS1jb250cm9sLWZyb20tY29udGFpbmVyJztcclxuaW1wb3J0IHsgRm9ybURpcmVjdGl2ZSB9IGZyb20gJy4uL2Zvcm0vZm9ybS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBSZWFjdGl2ZVZhbGlkYXRpb25Nb2R1bGVDb25maWd1cmF0aW9uIH0gZnJvbSAnLi4vcmVhY3RpdmUtdmFsaWRhdGlvbi1tb2R1bGUtY29uZmlndXJhdGlvbic7XHJcbmltcG9ydCB7IFJFQUNUSVZFX1ZBTElEQVRJT05fTU9EVUxFX0NPTkZJR1VSQVRJT05fVE9LRU4gfSBmcm9tICcuLi9yZWFjdGl2ZS12YWxpZGF0aW9uLW1vZHVsZS1jb25maWd1cmF0aW9uLXRva2VuJztcclxuaW1wb3J0IHsgZ2V0Q29udHJvbFBhdGggfSBmcm9tICcuLi9nZXQtY29udHJvbC1wYXRoJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXJ2LXZhbGlkYXRpb24tbWVzc2FnZXMnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi92YWxpZGF0aW9uLW1lc3NhZ2VzLmNvbXBvbmVudC5odG1sJyxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcbi8qKlxyXG4gKiBUaGUgVmFsaWRhdGlvbk1lc3NhZ2VzQ29tcG9uZW50IHNob3dzIHZhbGlkYXRpb24gbWVzc2FnZXMgZm9yIG9uZSB0byBtYW55IEZvcm1Db250cm9scy4gSXQgZWl0aGVyIHNob3dzXHJcbiAqIG1lc3NhZ2VzIHNwZWNpZmllZCB3aXRoaW4gdGhlIHJlYWN0aXZlIGZvcm0gbW9kZWwsIG9yIHNob3dzIGN1c3RvbSBtZXNzYWdlcyBkZWNsYXJlZCB1c2luZyB0aGVcclxuICogVmFsaWRhdGlvbk1lc3NhZ2VDb21wb25lbnQuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgVmFsaWRhdGlvbk1lc3NhZ2VzQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95LCBPbkluaXQge1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oVmFsaWRhdGlvbk1lc3NhZ2VDb21wb25lbnQpIHByaXZhdGUgbWVzc2FnZUNvbXBvbmVudHM6IFF1ZXJ5TGlzdDxWYWxpZGF0aW9uTWVzc2FnZUNvbXBvbmVudD4gfCB1bmRlZmluZWQ7XHJcblxyXG4gIHByaXZhdGUgX2ZvcjogVW50eXBlZEZvcm1Db250cm9sW10gPSBbXTtcclxuICBwcml2YXRlIG1lc3NhZ2VDb21wb25lbnRzQ2hhbmdlc1N1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcclxuICBwcml2YXRlIGNvbnRyb2xTdGF0dXNDaGFuZ2VzU3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xyXG5cclxuICBwcml2YXRlIGZvcm1TdWJtaXR0ZWQ6IGJvb2xlYW4gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XHJcbiAgcHJpdmF0ZSBmb3JtU3VibWl0dGVkU3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBwcml2YXRlIGNvbnRyb2xDb250YWluZXI6IENvbnRyb2xDb250YWluZXIsIEBPcHRpb25hbCgpIGZvcm1TdWJtaXREaXJlY3RpdmU6IEZvcm1EaXJlY3RpdmUsXHJcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KFJFQUNUSVZFX1ZBTElEQVRJT05fTU9EVUxFX0NPTkZJR1VSQVRJT05fVE9LRU4pIHByaXZhdGUgY29uZmlndXJhdGlvbjogUmVhY3RpdmVWYWxpZGF0aW9uTW9kdWxlQ29uZmlndXJhdGlvbikge1xyXG4gICAgICBpZiAoZm9ybVN1Ym1pdERpcmVjdGl2ZSkge1xyXG4gICAgICAgIHRoaXMuZm9ybVN1Ym1pdHRlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZm9ybVN1Ym1pdHRlZFN1YnNjcmlwdGlvbi5hZGQoZm9ybVN1Ym1pdERpcmVjdGl2ZS5zdWJtaXR0ZWQuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuZm9ybVN1Ym1pdHRlZCA9IHRydWU7XHJcbiAgICAgICAgfSkpO1xyXG4gICAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaW5pdGlhbGl6ZUZvck9uSW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xyXG4gICAgdGhpcy5tZXNzYWdlQ29tcG9uZW50c0NoYW5nZXNTdWJzY3JpcHRpb24uYWRkKHRoaXMubWVzc2FnZUNvbXBvbmVudHM/LmNoYW5nZXMuc3Vic2NyaWJlKHRoaXMudmFsaWRhdGVDaGlsZHJlbikpO1xyXG4gICAgdGhpcy52YWxpZGF0ZUNoaWxkcmVuKCk7XHJcblxyXG4gICAgdGhpcy5fZm9yLmZvckVhY2goY29udHJvbCA9PiB7XHJcbiAgICAgIHRoaXMuaGFuZGxlQ29udHJvbFN0YXR1c0NoYW5nZShjb250cm9sKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLm1lc3NhZ2VDb21wb25lbnRzQ2hhbmdlc1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgdGhpcy5mb3JtU3VibWl0dGVkU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB0aGlzLmNvbnRyb2xTdGF0dXNDaGFuZ2VzU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG5cclxuICBpc1ZhbGlkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0Rmlyc3RFcnJvclBlckNvbnRyb2woKS5sZW5ndGggPT09IDA7XHJcbiAgfVxyXG5cclxuICBnZXRFcnJvck1lc3NhZ2VzKCk6IHN0cmluZ1tdIHtcclxuICAgIHJldHVybiB0aGlzLmdldEZpcnN0RXJyb3JQZXJDb250cm9sKCkuZmlsdGVyKGVycm9yID0+IGVycm9yLmhhc01lc3NhZ2UoKSlcclxuICAgICAgLm1hcChlcnJvciA9PiBlcnJvci5nZXRNZXNzYWdlKCkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbml0aWFsaXplRm9yT25Jbml0ID0gKCkgPT4ge307XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGZvcihjb250cm9sczogVW50eXBlZEZvcm1Db250cm9sIHwgKFVudHlwZWRGb3JtQ29udHJvbHxzdHJpbmcpW10gfCBzdHJpbmcpIHtcclxuICAgIGlmICghaXNDb250cm9sQ29udGFpbmVyVm9pZE9ySW5pdGlhbGl6ZWQodGhpcy5jb250cm9sQ29udGFpbmVyKSkge1xyXG4gICAgICB0aGlzLmluaXRpYWxpemVGb3JPbkluaXQgPSAoKSA9PiB0aGlzLmZvciA9IGNvbnRyb2xzO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGNvbnRyb2xzKSkge1xyXG4gICAgICBjb250cm9scyA9IGNvbnRyb2xzICE9PSB1bmRlZmluZWQgPyBbY29udHJvbHNdIDogW107XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNvbnRyb2xzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYGFydi12YWxpZGF0aW9uLW1lc3NhZ2VzIGRvZXNuJ3QgYWxsb3cgZGVjbGFyaW5nIGFuIGVtcHR5IGFycmF5IGFzIGlucHV0IHRvIHRoZSAnZm9yJyBhdHRyaWJ1dGUuYCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fZm9yID0gY29udHJvbHMubWFwKGNvbnRyb2wgPT4gdHlwZW9mIGNvbnRyb2wgPT09ICdzdHJpbmcnID9cclxuICAgICAgZ2V0Rm9ybUNvbnRyb2xGcm9tQ29udGFpbmVyKGNvbnRyb2wsIHRoaXMuY29udHJvbENvbnRhaW5lcikgOiBjb250cm9sKTtcclxuXHJcbiAgICB0aGlzLnZhbGlkYXRlQ2hpbGRyZW4oKTtcclxuXHJcbiAgICB0aGlzLmNvbnRyb2xTdGF0dXNDaGFuZ2VzU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB0aGlzLmNvbnRyb2xTdGF0dXNDaGFuZ2VzU3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xyXG4gICAgdGhpcy5fZm9yLmZvckVhY2goY29udHJvbCA9PiB7XHJcbiAgICAgIHRoaXMuY29udHJvbFN0YXR1c0NoYW5nZXNTdWJzY3JpcHRpb24uYWRkKGNvbnRyb2wuc3RhdHVzQ2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuaGFuZGxlQ29udHJvbFN0YXR1c0NoYW5nZShjb250cm9sKTtcclxuICAgICAgfSkpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIHByaXZhdGUgZ2V0Rmlyc3RFcnJvclBlckNvbnRyb2woKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZm9yLmZpbHRlcihjb250cm9sID0+IHRoaXMuY29uZmlndXJhdGlvbiAmJiB0aGlzLmNvbmZpZ3VyYXRpb24uZGlzcGxheVZhbGlkYXRpb25NZXNzYWdlV2hlbiA/XHJcbiAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5kaXNwbGF5VmFsaWRhdGlvbk1lc3NhZ2VXaGVuKGNvbnRyb2wsIHRoaXMuZm9ybVN1Ym1pdHRlZCkgOiBjb250cm9sLnRvdWNoZWQgfHwgdGhpcy5mb3JtU3VibWl0dGVkXHJcbiAgICApLm1hcChWYWxpZGF0aW9uRXJyb3IuZnJvbUZpcnN0RXJyb3IpLmZpbHRlcih2YWx1ZSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkKSBhcyBWYWxpZGF0aW9uRXJyb3JbXTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFZhbGlkYXRlcyB0aGF0IHRoZSBjaGlsZCBWYWxpZGF0aW9uTWVzc2FnZUNvbXBvbmVudHMgZGVjbGFyZSB3aGF0IEZvcm1Db250cm9sIHRoZXkgc3BlY2lmeSBhIG1lc3NhZ2UgZm9yICh3aGVuIG5lZWRlZCk7IGFuZFxyXG4gICAqIHRoYXQgdGhlIGRlY2xhcmVkIEZvcm1Db250cm9sIGlzIGFjdHVhbGx5IHBhcnQgb2YgdGhlIHBhcmVudCBWYWxpZGF0aW9uTWVzc2FnZXNDb21wb25lbnQgJ2ZvcicgY29sbGVjdGlvbiAod2hlbiBzcGVjaWZpZWQpLlxyXG4gICAqL1xyXG4gIHByaXZhdGUgdmFsaWRhdGVDaGlsZHJlbigpIHtcclxuICAgIGlmICghdGhpcy5tZXNzYWdlQ29tcG9uZW50cykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5tZXNzYWdlQ29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiB7XHJcbiAgICAgIGlmICh0aGlzLl9mb3IubGVuZ3RoID4gMSAmJiBjb21wb25lbnQuZm9yID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFNwZWNpZnkgdGhlIEZvcm1Db250cm9sIGZvciB3aGljaCB0aGUgYXJ2LXZhbGlkYXRpb24tbWVzc2FnZSBlbGVtZW50IHdpdGgga2V5ICcke2NvbXBvbmVudC5rZXl9JyBgICtcclxuICAgICAgICAgIGBzaG91bGQgc2hvdyBtZXNzYWdlcy5gKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoY29tcG9uZW50LmZvciAmJiB0aGlzLl9mb3IuaW5kZXhPZihjb21wb25lbnQuZm9yIGFzIFVudHlwZWRGb3JtQ29udHJvbCkgPT09IC0xKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBBIGFydi12YWxpZGF0aW9uLW1lc3NhZ2VzIGVsZW1lbnQgd2l0aCBrZXkgJyR7Y29tcG9uZW50LmtleX0nIGF0dGVtcHRzIHRvIHNob3cgbWVzc2FnZXMgYCArXHJcbiAgICAgICAgICBgZm9yIGEgRm9ybUNvbnRyb2wgdGhhdCBpcyBub3QgZGVjbGFyZWQgaW4gdGhlIHBhcmVudCBhcnYtdmFsaWRhdGlvbi1tZXNzYWdlcyBlbGVtZW50LmApO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGFuZGxlQ29udHJvbFN0YXR1c0NoYW5nZShjb250cm9sOiBVbnR5cGVkRm9ybUNvbnRyb2wpIHtcclxuICAgIGlmICghdGhpcy5tZXNzYWdlQ29tcG9uZW50cykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5tZXNzYWdlQ29tcG9uZW50cy5maWx0ZXIoY29tcG9uZW50ID0+IGNvbXBvbmVudC5mb3IgPT09IGNvbnRyb2wgfHwgY29tcG9uZW50LmZvciA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAuZm9yRWFjaChjb21wb25lbnQgPT4gY29tcG9uZW50LnJlc2V0KCkpO1xyXG5cclxuICAgIGNvbnN0IGVycm9yID0gVmFsaWRhdGlvbkVycm9yLmZyb21GaXJzdEVycm9yKGNvbnRyb2wpO1xyXG4gICAgaWYgKCFlcnJvciB8fCBlcnJvci5oYXNNZXNzYWdlKCkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG1lc3NhZ2VDb21wb25lbnQgPSB0aGlzLm1lc3NhZ2VDb21wb25lbnRzLmZpbmQoY29tcG9uZW50ID0+IGNvbXBvbmVudC5jYW5IYW5kbGUoZXJyb3IpKTtcclxuXHJcbiAgICBpZiAobWVzc2FnZUNvbXBvbmVudCkge1xyXG4gICAgICBtZXNzYWdlQ29tcG9uZW50LnNob3coZXJyb3IpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGVyZSBpcyBubyBzdWl0YWJsZSBhcnYtdmFsaWRhdGlvbi1tZXNzYWdlIGVsZW1lbnQgdG8gc2hvdyB0aGUgJyR7ZXJyb3Iua2V5fScgYCArXHJcbiAgICAgICAgYGVycm9yIG9mICcke2dldENvbnRyb2xQYXRoKGVycm9yLmNvbnRyb2wpfSdgKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiPGRpdiAqbmdJZj1cIiFpc1ZhbGlkKClcIj5cclxuICA8ZGl2IGNsYXNzPVwiaW52YWxpZC1mZWVkYmFja1wiPlxyXG4gICAgPHAgKm5nRm9yPVwibGV0IG1lc3NhZ2Ugb2YgZ2V0RXJyb3JNZXNzYWdlcygpXCI+e3ttZXNzYWdlfX08L3A+XHJcbiAgPC9kaXY+XHJcbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG48L2Rpdj5cclxuIl19