import { Validators as AngularValidators, ValidatorFn } from '@angular/forms';

import { ValidatorDeclaration } from './validator-declaration';

/**
 * Provides a set of validators used by form controls.
 *
 * Code comments have been copied from the Angular source code.
 */
export class Validators {
/**
 * No-op validator.
 */
  static nullValidator = AngularValidators.nullValidator;
  static composeAsync = AngularValidators.composeAsync;

  private static minValidator = ValidatorDeclaration.wrapSingleArgumentValidator(AngularValidators.min, 'min');
  private static maxValidator = ValidatorDeclaration.wrapSingleArgumentValidator(AngularValidators.max, 'max');
  private static minLengthValidator = ValidatorDeclaration.wrapSingleArgumentValidator(AngularValidators.minLength, 'minlength');
  private static maxLengthValidator = ValidatorDeclaration.wrapSingleArgumentValidator(AngularValidators.maxLength, 'maxlength');
  private static patternValidator = ValidatorDeclaration.wrapSingleArgumentValidator(AngularValidators.pattern, 'pattern');
  private static requiredValidator = ValidatorDeclaration.wrapNoArgumentValidator(AngularValidators.required, 'required');
  private static requiredTrueValidator = ValidatorDeclaration.wrapNoArgumentValidator(AngularValidators.requiredTrue, 'required');
  private static emailValidator = ValidatorDeclaration.wrapNoArgumentValidator(AngularValidators.email, 'email');

  /**
   * Compose multiple validators into a single function that returns the union
   * of the individual error maps.
   */
  static compose(validators: null): null;
  /**
   * Compose multiple validators into a single function that returns the union
   * of the individual error maps.
   */
  static compose(validators: (ValidatorFn|null|undefined)[]): ValidatorFn|null;
  static compose(validators: (ValidatorFn|null|undefined)[]|null): ValidatorFn|null {
    return validators === null ? AngularValidators.compose(validators) : AngularValidators.compose(validators);
  }

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
  static min(min: number | (() => number), message?: string | ((min: number) => string)): ValidatorFn {
    return Validators.minValidator(min, message);
  }
  static minDefaultMsg(min: number): ValidatorFn {
    return Validators.maxValidator(min, `This field should not be less than ${min}`);
  }
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
  static max(max: number | (() => number), message?: string | ((max: number) => string)): ValidatorFn {
    return Validators.maxValidator(max, message);
  }
  static maxDefaultMsg(max: number): ValidatorFn {
    return Validators.maxValidator(max, `This field should not be more than ${max}`);
  }

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
  static minLength(minLength: number | (() => number), message?: string | ((minLength: number) => string)): ValidatorFn {
    return Validators.minLengthValidator(minLength, message);
  }
  static minLengthDefaultMsg(minLength: number): ValidatorFn {
    return Validators.maxLengthValidator(minLength, `This field should not be less than ${minLength} characters`);
  }

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
  static maxLength(maxLength: number | (() => number), message?: string | ((maxLength: number) => string)): ValidatorFn {
    return Validators.maxLengthValidator(maxLength, message);
  }
  static maxLengthDefaultMsg(maxLength: number): ValidatorFn {
    return Validators.maxLengthValidator(maxLength, `This field should not be more than ${maxLength} characters`);
  }

  /**
   * Validator that requires a control to match a regex to its value.
   * Note: when using this function without specifying a message, you have to declare an
   * arv-validation-message element in the HTML with a custom message.
   */
  static pattern(pattern: string|RegExp): ValidatorFn;
  /**
   * Validator that requires a control to match a regex to its value.
   */
  static pattern(pattern: string|RegExp, message: string): ValidatorFn;
  /**
   * Validator that requires a control to match a regex to its value.
   * Note: when using this function without specifying a message, you have to declare an
   * arv-validation-message element in the HTML with a custom message.
   */
  static pattern(pattern: () => string|RegExp): ValidatorFn;
  /**
   * Validator that requires a control to match a regex to its value.
   */
  static pattern(pattern: () => string|RegExp, message: string): ValidatorFn;
  static pattern(pattern: (string|RegExp) | (() => string|RegExp), message: string = 'This field should match the pattern '+ pattern): ValidatorFn {
    return Validators.patternValidator(pattern, message);
  }

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
  static required(message: string = 'This field is required'): ValidatorFn {
    return Validators.requiredValidator(message);
  }

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
  static requiredTrue(message: string = 'This field is required'): ValidatorFn {
    return Validators.requiredTrueValidator(message);
  }

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
  static email(message: string = 'Enter valid email'): ValidatorFn {
    return Validators.emailValidator(message);
  }
}
