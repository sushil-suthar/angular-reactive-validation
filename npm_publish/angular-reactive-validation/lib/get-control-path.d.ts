import { AbstractControl } from '@angular/forms';
/**
 * Given a control, returns a string representation of the property path to
 * this control. Thus, for a FormControl 'firstName', that is part of a
 * FormGroup named 'name', this function will return: 'name.firstName'.
 *
 * Note that FormArray indexes are also put in the path, e.g.: 'person.0.name.firstName'.
 */
export declare const getControlPath: (control: AbstractControl) => string;
