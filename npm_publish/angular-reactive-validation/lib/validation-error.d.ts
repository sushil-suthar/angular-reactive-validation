import { UntypedFormControl, ValidationErrors } from '@angular/forms';
export declare class ValidationError {
    control: UntypedFormControl;
    key: string;
    errorObject: ValidationErrors;
    constructor(control: UntypedFormControl, key: string, errorObject: ValidationErrors);
    static fromFirstError(control: UntypedFormControl): ValidationError | undefined;
    hasMessage(): boolean;
    getMessage(): any;
}
