import { AfterContentInit, OnDestroy, OnInit } from '@angular/core';
import { UntypedFormControl, ControlContainer } from '@angular/forms';
import { FormDirective } from '../form/form.directive';
import { ReactiveValidationModuleConfiguration } from '../reactive-validation-module-configuration';
import * as i0 from "@angular/core";
export declare class ValidationMessagesComponent implements AfterContentInit, OnDestroy, OnInit {
    private controlContainer;
    private configuration;
    private messageComponents;
    private _for;
    private messageComponentsChangesSubscription;
    private controlStatusChangesSubscription;
    private formSubmitted;
    private formSubmittedSubscription;
    constructor(controlContainer: ControlContainer, formSubmitDirective: FormDirective, configuration: ReactiveValidationModuleConfiguration);
    ngOnInit(): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    isValid(): boolean;
    getErrorMessages(): string[];
    private initializeForOnInit;
    set for(controls: UntypedFormControl | (UntypedFormControl | string)[] | string);
    private getFirstErrorPerControl;
    /**
     * Validates that the child ValidationMessageComponents declare what FormControl they specify a message for (when needed); and
     * that the declared FormControl is actually part of the parent ValidationMessagesComponent 'for' collection (when specified).
     */
    private validateChildren;
    private handleControlStatusChange;
    static ɵfac: i0.ɵɵFactoryDeclaration<ValidationMessagesComponent, [{ optional: true; }, { optional: true; }, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ValidationMessagesComponent, "arv-validation-messages", never, { "for": "for"; }, {}, ["messageComponents"], ["*"], false, never>;
}
