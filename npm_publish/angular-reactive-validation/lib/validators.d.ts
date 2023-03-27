import { Validators as AngularValidators, ValidatorFn } from '@angular/forms';
/**
 * Provides a set of validators used by form controls.
 *
 * Code comments have been copied from the Angular source code.
 */
export declare class Validators {
    /**
     * No-op validator.
     */
    static nullValidator: typeof AngularValidators.nullValidator;
    static composeAsync: typeof AngularValidators.composeAsync;
    private static minValidator;
    private static maxValidator;
    private static minLengthValidator;
    private static maxLengthValidator;
    private static patternValidator;
    private static requiredValidator;
    private static requiredTrueValidator;
    private static emailValidator;
    /**
     * Compose multiple validators into a single function that returns the union
     * of the individual error maps.
     */
    static compose(validators: null): null;
    /**
     * Compose multiple validators into a single function that returns the union
     * of the individual error maps.
     */
    static compose(validators: (ValidatorFn | null | undefined)[]): ValidatorFn | null;
    /**
     * Validator that requires controls to have a value greater than or equal to a number.
     * Note: when using this function without specifying a message, you have to declare an
     * arv-validation-message element in the HTML with a custom message.
     */
    static min(min: number): ValidatorFn;
    /**
     * Validator that requires controls to have a value greater than or equal to a number.
     */
    static min(min: number, message: string): ValidatorFn;
    /**
     * Validator that requires controls to have a value greater than or equal to a number.
     * Note: when using this function without specifying a message, you have to declare an
     * arv-validation-message element in the HTML with a custom message.
     */
    static min(min: () => number): ValidatorFn;
    /**
     * Validator that requires controls to have a value greater than or equal to a number.
     */
    static min(min: () => number, message: string): ValidatorFn;
    /**
     * Validator that requires controls to have a value greater than or equal to a number.
     */
    static min(min: number, messageFunc: ((min: number) => string)): ValidatorFn;
    /**
     * Validator that requires controls to have a value greater than or equal to a number.
     */
    static min(min: () => number, messageFunc: ((min: number) => string)): ValidatorFn;
    /**
     * Validator that requires controls to have a value less than or equal to a number.
     * Note: when using this function without specifying a message, you have to declare an
     * arv-validation-message element in the HTML with a custom message.
     */
    static max(max: number): ValidatorFn;
    /**
     * Validator that requires controls to have a value less than or equal to a number.
     */
    static max(max: number, message: string): ValidatorFn;
    /**
     * Validator that requires controls to have a value less than or equal to a number.
     * Note: when using this function without specifying a message, you have to declare an
     * arv-validation-message element in the HTML with a custom message.
     */
    static max(max: () => number): ValidatorFn;
    /**
     * Validator that requires controls to have a value less than or equal to a number.
     */
    static max(max: () => number, message: string): ValidatorFn;
    /**
     * Validator that requires controls to have a value less than or equal to a number.
     */
    static max(max: number, messageFunc: ((max: number) => string)): ValidatorFn;
    /**
     * Validator that requires controls to have a value less than or equal to a number.
     */
    static max(max: () => number, messageFunc: ((max: number) => string)): ValidatorFn;
    /**
     * Validator that requires controls to have a value of a minimum length.
     * Note: when using this function without specifying a message, you have to declare an
     * arv-validation-message element in the HTML with a custom message.
     */
    static minLength(minLength: number): ValidatorFn;
    /**
     * Validator that requires controls to have a value of a minimum length.
     */
    static minLength(minLength: number, message: string): ValidatorFn;
    /**
     * Validator that requires controls to have a value of a minimum length.
     * Note: when using this function without specifying a message, you have to declare an
     * arv-validation-message element in the HTML with a custom message.
     */
    static minLength(minLength: () => number): ValidatorFn;
    /**
     * Validator that requires controls to have a value of a minimum length.
     */
    static minLength(minLength: () => number, message: string): ValidatorFn;
    /**
     * Validator that requires controls to have a value of a minimum length.
     */
    static minLength(minLength: number, messageFunc: ((minLength: number) => string)): ValidatorFn;
    /**
     * Validator that requires controls to have a value of a minimum length.
     */
    static minLength(minLength: () => number, messageFunc: ((minLength: number) => string)): ValidatorFn;
    /**
     * Validator that requires controls to have a value of a maximum length.
     * Note: when using this function without specifying a message, you have to declare an
     * arv-validation-message element in the HTML with a custom message.
     */
    static maxLength(maxLength: number): ValidatorFn;
    /**
     * Validator that requires controls to have a value of a maximum length.
     */
    static maxLength(maxLength: number, message: string): ValidatorFn;
    /**
     * Validator that requires controls to have a value of a maximum length.
     * Note: when using this function without specifying a message, you have to declare an
     * arv-validation-message element in the HTML with a custom message.
     */
    static maxLength(maxLength: () => number): ValidatorFn;
    /**
     * Validator that requires controls to have a value of a maximum length.
     */
    static maxLength(maxLength: () => number, message: string): ValidatorFn;
    /**
     * Validator that requires controls to have a value of a maximum length.
     */
    static maxLength(maxLength: number, messageFunc: ((maxLength: number) => string)): ValidatorFn;
    /**
     * Validator that requires controls to have a value of a maximum length.
     */
    static maxLength(maxLength: () => number, messageFunc: ((maxLength: number) => string)): ValidatorFn;
    /**
     * Validator that requires a control to match a regex to its value.
     * Note: when using this function without specifying a message, you have to declare an
     * arv-validation-message element in the HTML with a custom message.
     */
    static pattern(pattern: string | RegExp): ValidatorFn;
    /**
     * Validator that requires a control to match a regex to its value.
     */
    static pattern(pattern: string | RegExp, message: string): ValidatorFn;
    /**
     * Validator that requires a control to match a regex to its value.
     * Note: when using this function without specifying a message, you have to declare an
     * arv-validation-message element in the HTML with a custom message.
     */
    static pattern(pattern: () => string | RegExp): ValidatorFn;
    /**
     * Validator that requires a control to match a regex to its value.
     */
    static pattern(pattern: () => string | RegExp, message: string): ValidatorFn;
    /**
     * Validator that requires controls to have a non-empty value.
     * Note: when using this function without specifying a message, you have to declare an
     * arv-validation-message element in the HTML with a custom message.
     */
    static required(): ValidatorFn;
    /**
     * Validator that requires controls to have a non-empty value.
     */
    static required(message: string): ValidatorFn;
    /**
     * Validator that requires control value to be true.
     * Note: when using this function without specifying a message, you have to declare an
     * arv-validation-message element in the HTML with a custom message.
     */
    static requiredTrue(): ValidatorFn;
    /**
     * Validator that requires control value to be true.
     */
    static requiredTrue(message: string): ValidatorFn;
    /**
     * Validator that performs email validation.
     * Note: when using this function without specifying a message, you have to declare an
     * arv-validation-message element in the HTML with a custom message.
     */
    static email(): ValidatorFn;
    /**
     * Validator that performs email validation.
     */
    static email(message: string): ValidatorFn;
}
