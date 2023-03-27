import { ValidatorFn } from '@angular/forms';
/**
 * @dynamic
 */
export declare class ValidatorDeclaration {
    /**
     * Wraps your own validator functions for use with the angular-reactive-validation library.
     *
     * @param validatorFn A function you want to wrap which can validate a control.
     * @param resultKey The error key used for indicating an error result as returned from the ValidatorFn.
     */
    static wrapNoArgumentValidator(validatorFn: ValidatorFn, resultKey: string): (message?: string | (() => string)) => ValidatorFn;
    /**
     * Wraps your own validator functions for use with the angular-reactive-validation library.
     *
     * @param validatorFactoryFn A function which accepts a single argument and returns a ValidatorFn.
     * @param resultKey The error key used for indicating an error result as returned from the ValidatorFn.
     */
    static wrapSingleArgumentValidator<TInput>(validatorFactoryFn: ((arg1: TInput) => ValidatorFn), resultKey: string): (arg1: TInput | (() => TInput), message?: string | ((arg1: TInput) => string)) => ValidatorFn;
    /**
     * Wraps your own validator functions for use with the angular-reactive-validation library.
     *
     * @param validatorFactoryFn A function which accepts two arguments and returns a ValidatorFn.
     * @param resultKey The error key used for indicating an error result as returned from the ValidatorFn.
     */
    static wrapTwoArgumentValidator<TInput1, TInput2>(validatorFactoryFn: ((arg1: TInput1, arg2: TInput2) => ValidatorFn), resultKey: string): (arg1: TInput1 | (() => TInput1), arg2: TInput2 | (() => TInput2), message?: string | ((arg1: TInput1, arg2: TInput2) => string)) => ValidatorFn;
    private static unwrapArgument;
    private static validateAndSetMessageIfInvalid;
    private static validate;
    private static setMessageIfInvalid;
    private static isObject;
}
