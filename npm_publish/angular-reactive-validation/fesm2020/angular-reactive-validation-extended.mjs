import * as i0 from '@angular/core';
import { Directive, Component, ViewEncapsulation, Optional, Input, InjectionToken, Inject, ContentChildren, NgModule } from '@angular/core';
import * as i1 from '@angular/forms';
import { UntypedFormControl, Validators as Validators$1 } from '@angular/forms';
import * as i3 from '@angular/common';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

/**
 * Encapsulates properties and events of the form and makes them available for child components.
 */
class FormDirective {
    constructor(formGroupDirective) {
        this.submitted = formGroupDirective.ngSubmit.asObservable();
    }
}
FormDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: FormDirective, deps: [{ token: i1.FormGroupDirective }], target: i0.ɵɵFactoryTarget.Directive });
FormDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.3.0", type: FormDirective, selector: "form[formGroup]", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: FormDirective, decorators: [{
            type: Directive,
            args: [{
                    // eslint-disable-next-line @angular-eslint/directive-selector
                    selector: 'form[formGroup]'
                }]
        }], ctorParameters: function () { return [{ type: i1.FormGroupDirective }]; } });

const getFormControlFromContainer = (name, controlContainer) => {
    if (controlContainer) {
        const control = controlContainer.control.controls[name];
        if (!control) {
            throw new Error(`There is no control named '${name}'` +
                (getPath(controlContainer).length > 0 ? ` within '${getPath(controlContainer).join('.')}'` : '') + '.');
        }
        if (!(control instanceof UntypedFormControl)) {
            throw new Error(`The control named '${name}' ` +
                (getPath(controlContainer).length > 0 ? `within '${getPath(controlContainer).join('.')}' ` : '') +
                `is not a FormControl. Maybe you accidentally referenced a FormGroup or FormArray?`);
        }
        return control;
    }
    else {
        throw new Error(`You can't pass a string to arv-validation-messages's for attribute, when the ` +
            `arv-validation-messages element is not a child of an element with a formGroupName or formGroup declaration.`);
    }
};
const isControlContainerVoidOrInitialized = (controlContainer) => !!(!controlContainer || controlContainer.form ||
    (controlContainer.formDirective && controlContainer.formDirective.form));
const getPath = (controlContainer) => controlContainer.path || [];

/**
 * The ValidationMessageComponent lets the developer specify a custom visual style and custom error message
 * for edge-cases where the standard style or message capabilities do not suffice.
 *
 * TODO: Trigger revalidation by parent whenever [for] changes.
 */
class ValidationMessageComponent {
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
ValidationMessageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: ValidationMessageComponent, selector: "arv-validation-message", inputs: { for: "for", key: "key" }, ngImport: i0, template: "<div *ngIf=\"context\">\r\n  <ng-content></ng-content>\r\n</div>\r\n", dependencies: [{ kind: "directive", type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], encapsulation: i0.ViewEncapsulation.None });
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

class ValidationError {
    constructor(control, key, errorObject) {
        this.control = control;
        this.key = key;
        this.errorObject = errorObject;
    }
    static fromFirstError(control) {
        if (!control.errors) {
            return undefined;
        }
        return new ValidationError(control, Object.keys(control.errors)[0], control.errors[Object.keys(control.errors)[0]]);
    }
    hasMessage() {
        return !!this.getMessage();
    }
    getMessage() {
        return this.errorObject['message'];
    }
}

const REACTIVE_VALIDATION_MODULE_CONFIGURATION_TOKEN = new InjectionToken('ReactiveValidationModuleConfiguration');

/**
 * Given a control, returns a string representation of the property path to
 * this control. Thus, for a FormControl 'firstName', that is part of a
 * FormGroup named 'name', this function will return: 'name.firstName'.
 *
 * Note that FormArray indexes are also put in the path, e.g.: 'person.0.name.firstName'.
 */
const getControlPath = (control) => {
    const parentControl = control.parent;
    if (parentControl) {
        let path = getControlPath(parentControl);
        if (path) {
            path += '.';
        }
        return path + Object.keys(parentControl.controls).find(key => {
            const controls = parentControl.controls;
            if (Array.isArray(controls)) {
                return controls[Number(key)] === control;
            }
            else {
                return controls[key] === control;
            }
        });
    }
    return '';
};

/**
 * The ValidationMessagesComponent shows validation messages for one to many FormControls. It either shows
 * messages specified within the reactive form model, or shows custom messages declared using the
 * ValidationMessageComponent.
 */
class ValidationMessagesComponent {
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
ValidationMessagesComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: ValidationMessagesComponent, deps: [{ token: i1.ControlContainer, optional: true }, { token: FormDirective, optional: true }, { token: REACTIVE_VALIDATION_MODULE_CONFIGURATION_TOKEN, optional: true }], target: i0.ɵɵFactoryTarget.Component });
ValidationMessagesComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: ValidationMessagesComponent, selector: "arv-validation-messages", inputs: { for: "for" }, queries: [{ propertyName: "messageComponents", predicate: ValidationMessageComponent }], ngImport: i0, template: "<div *ngIf=\"!isValid()\">\r\n  <div class=\"invalid-feedback\">\r\n    <p *ngFor=\"let message of getErrorMessages()\">{{message}}</p>\r\n  </div>\r\n  <ng-content></ng-content>\r\n</div>\r\n", dependencies: [{ kind: "directive", type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: ValidationMessagesComponent, decorators: [{
            type: Component,
            args: [{ selector: 'arv-validation-messages', encapsulation: ViewEncapsulation.None, template: "<div *ngIf=\"!isValid()\">\r\n  <div class=\"invalid-feedback\">\r\n    <p *ngFor=\"let message of getErrorMessages()\">{{message}}</p>\r\n  </div>\r\n  <ng-content></ng-content>\r\n</div>\r\n" }]
        }], ctorParameters: function () { return [{ type: i1.ControlContainer, decorators: [{
                    type: Optional
                }] }, { type: FormDirective, decorators: [{
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

class ReactiveValidationModule {
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

/**
 * @dynamic
 */
class ValidatorDeclaration {
    /**
     * Wraps your own validator functions for use with the angular-reactive-validation library.
     *
     * @param validatorFn A function you want to wrap which can validate a control.
     * @param resultKey The error key used for indicating an error result as returned from the ValidatorFn.
     */
    static wrapNoArgumentValidator(validatorFn, resultKey) {
        return (message) => (control) => ValidatorDeclaration.validateAndSetMessageIfInvalid(control, () => validatorFn, resultKey, message);
    }
    /**
     * Wraps your own validator functions for use with the angular-reactive-validation library.
     *
     * @param validatorFactoryFn A function which accepts a single argument and returns a ValidatorFn.
     * @param resultKey The error key used for indicating an error result as returned from the ValidatorFn.
     */
    static wrapSingleArgumentValidator(validatorFactoryFn, resultKey) {
        return (arg1, message) => (control) => {
            const unwrappedArg1 = ValidatorDeclaration.unwrapArgument(arg1);
            return ValidatorDeclaration.validateAndSetMessageIfInvalid(control, validatorFactoryFn, resultKey, message, unwrappedArg1);
        };
    }
    /**
     * Wraps your own validator functions for use with the angular-reactive-validation library.
     *
     * @param validatorFactoryFn A function which accepts two arguments and returns a ValidatorFn.
     * @param resultKey The error key used for indicating an error result as returned from the ValidatorFn.
     */
    static wrapTwoArgumentValidator(validatorFactoryFn, resultKey) {
        return (arg1, arg2, message) => (control) => {
            const unwrappedArg1 = ValidatorDeclaration.unwrapArgument(arg1);
            const unwrappedArg2 = ValidatorDeclaration.unwrapArgument(arg2);
            return ValidatorDeclaration.validateAndSetMessageIfInvalid(control, validatorFactoryFn, resultKey, message, unwrappedArg1, unwrappedArg2);
        };
    }
    static unwrapArgument(arg) {
        if (arg instanceof Function) {
            arg = arg();
        }
        return arg;
    }
    static validateAndSetMessageIfInvalid(control, 
    // eslint-disable-next-line @typescript-eslint/no-shadow
    validatorFactoryFn, resultKey, 
    // eslint-disable-next-line @typescript-eslint/no-shadow
    message, ...args) {
        const validationResult = ValidatorDeclaration.validate(control, validatorFactoryFn, ...args);
        ValidatorDeclaration.setMessageIfInvalid(control, resultKey, validationResult, message, ...args);
        return validationResult;
    }
    // eslint-disable-next-line @typescript-eslint/no-shadow
    static validate(control, validatorFactoryFn, ...args) {
        const wrappedValidatorFn = validatorFactoryFn(...args);
        return wrappedValidatorFn(control);
    }
    static setMessageIfInvalid(control, resultKey, 
    // eslint-disable-next-line @typescript-eslint/no-shadow
    validationResult, message, ...args) {
        if (message) {
            if (validationResult && validationResult[resultKey]) {
                if (typeof message === 'function') {
                    message = message(...args);
                }
                // Not all validators set an object. Often they'll simply set a property to true.
                // Here, we replace any non-object (or array) to be an object on which we can set a message.
                if (!ValidatorDeclaration.isObject(validationResult[resultKey])) {
                    validationResult[resultKey] = {};
                }
                validationResult[resultKey]['message'] = message;
            }
        }
    }
    static isObject(arg) {
        return arg !== null && typeof arg === 'object' && !Array.isArray(arg);
    }
}

/**
 * Provides a set of validators used by form controls.
 *
 * Code comments have been copied from the Angular source code.
 */
class Validators {
    static compose(validators) {
        return validators === null ? Validators$1.compose(validators) : Validators$1.compose(validators);
    }
    static min(min, message) {
        return Validators.minValidator(min, message);
    }
    static minDefaultMsg(min) {
        return Validators.maxValidator(min, `This field should not be less than ${min}`);
    }
    static max(max, message) {
        return Validators.maxValidator(max, message);
    }
    static maxDefaultMsg(max) {
        return Validators.maxValidator(max, `This field should not be more than ${max}`);
    }
    static minLength(minLength, message) {
        return Validators.minLengthValidator(minLength, message);
    }
    static minLengthDefaultMsg(minLength) {
        return Validators.maxLengthValidator(minLength, `This field should not be less than ${minLength} characters`);
    }
    static maxLength(maxLength, message) {
        return Validators.maxLengthValidator(maxLength, message);
    }
    static maxLengthDefaultMsg(maxLength) {
        return Validators.maxLengthValidator(maxLength, `This field should not be more than ${maxLength} characters`);
    }
    static pattern(pattern, message = 'This field should match the pattern ' + pattern) {
        return Validators.patternValidator(pattern, message);
    }
    static required(message = 'This field is required') {
        return Validators.requiredValidator(message);
    }
    static requiredTrue(message = 'This field is required') {
        return Validators.requiredTrueValidator(message);
    }
    static email(message = 'Enter valid email') {
        return Validators.emailValidator(message);
    }
}
/**
 * No-op validator.
 */
Validators.nullValidator = Validators$1.nullValidator;
Validators.composeAsync = Validators$1.composeAsync;
Validators.minValidator = ValidatorDeclaration.wrapSingleArgumentValidator(Validators$1.min, 'min');
Validators.maxValidator = ValidatorDeclaration.wrapSingleArgumentValidator(Validators$1.max, 'max');
Validators.minLengthValidator = ValidatorDeclaration.wrapSingleArgumentValidator(Validators$1.minLength, 'minlength');
Validators.maxLengthValidator = ValidatorDeclaration.wrapSingleArgumentValidator(Validators$1.maxLength, 'maxlength');
Validators.patternValidator = ValidatorDeclaration.wrapSingleArgumentValidator(Validators$1.pattern, 'pattern');
Validators.requiredValidator = ValidatorDeclaration.wrapNoArgumentValidator(Validators$1.required, 'required');
Validators.requiredTrueValidator = ValidatorDeclaration.wrapNoArgumentValidator(Validators$1.requiredTrue, 'required');
Validators.emailValidator = ValidatorDeclaration.wrapNoArgumentValidator(Validators$1.email, 'email');

/**
 * Generated bundle index. Do not edit.
 */

export { FormDirective, ReactiveValidationModule, ValidationMessageComponent, ValidationMessagesComponent, ValidatorDeclaration, Validators };
//# sourceMappingURL=angular-reactive-validation-extended.mjs.map
