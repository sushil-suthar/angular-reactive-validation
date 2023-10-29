import { OnInit } from '@angular/core';
import { UntypedFormControl, ControlContainer } from '@angular/forms';
import { ValidationError } from '../validation-error';
import * as i0 from "@angular/core";
export declare class ValidationMessageComponent implements OnInit {
    private controlContainer;
    set for(control: UntypedFormControl | string | undefined);
    get for(): UntypedFormControl | string | undefined;
    /**
     * The name of the returned validation object property for which the custom validation message should be shown.
     */
    key: string | undefined;
    private _context;
    private _for;
    constructor(controlContainer: ControlContainer);
    ngOnInit(): void;
    canHandle(error: ValidationError): boolean;
    show(error: ValidationError): void;
    reset(): void;
    private initializeForOnInit;
    /**
     * The ValidationErrors object that contains contextual information about the error, which can be used for
     * displaying, e.g. the minimum length within the error message.
     */
    get context(): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<ValidationMessageComponent, [{ optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ValidationMessageComponent, "arv-validation-message", never, { "for": "for"; "key": "key"; }, {}, never, ["*"], false, never>;
}
