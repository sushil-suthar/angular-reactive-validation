import { FormGroupDirective } from '@angular/forms';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class FormDirective {
    /**
     * Observable which emits when the form is submitted.
     */
    submitted: Observable<any>;
    constructor(formGroupDirective: FormGroupDirective);
    static ɵfac: i0.ɵɵFactoryDeclaration<FormDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<FormDirective, "form[formGroup]", never, {}, {}, never, never, false, never>;
}
