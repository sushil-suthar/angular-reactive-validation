import { Validators as AngularValidators } from '@angular/forms';
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
    static { this.nullValidator = AngularValidators.nullValidator; }
    static { this.composeAsync = AngularValidators.composeAsync; }
    static { this.minValidator = ValidatorDeclaration.wrapSingleArgumentValidator(AngularValidators.min, 'min'); }
    static { this.maxValidator = ValidatorDeclaration.wrapSingleArgumentValidator(AngularValidators.max, 'max'); }
    static { this.minLengthValidator = ValidatorDeclaration.wrapSingleArgumentValidator(AngularValidators.minLength, 'minlength'); }
    static { this.maxLengthValidator = ValidatorDeclaration.wrapSingleArgumentValidator(AngularValidators.maxLength, 'maxlength'); }
    static { this.patternValidator = ValidatorDeclaration.wrapSingleArgumentValidator(AngularValidators.pattern, 'pattern'); }
    static { this.requiredValidator = ValidatorDeclaration.wrapNoArgumentValidator(AngularValidators.required, 'required'); }
    static { this.requiredTrueValidator = ValidatorDeclaration.wrapNoArgumentValidator(AngularValidators.requiredTrue, 'required'); }
    static { this.emailValidator = ValidatorDeclaration.wrapNoArgumentValidator(AngularValidators.email, 'email'); }
    static compose(validators) {
        return validators === null ? AngularValidators.compose(validators) : AngularValidators.compose(validators);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItcmVhY3RpdmUtdmFsaWRhdGlvbi9zcmMvbGliL3ZhbGlkYXRvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsSUFBSSxpQkFBaUIsRUFBZSxNQUFNLGdCQUFnQixDQUFDO0FBRTlFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRS9EOzs7O0dBSUc7QUFDSCxNQUFNLE9BQU8sVUFBVTtJQUN2Qjs7T0FFRzthQUNNLGtCQUFhLEdBQUcsaUJBQWlCLENBQUMsYUFBYSxDQUFDO2FBQ2hELGlCQUFZLEdBQUcsaUJBQWlCLENBQUMsWUFBWSxDQUFDO2FBRXRDLGlCQUFZLEdBQUcsb0JBQW9CLENBQUMsMkJBQTJCLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQzlGLGlCQUFZLEdBQUcsb0JBQW9CLENBQUMsMkJBQTJCLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQzlGLHVCQUFrQixHQUFHLG9CQUFvQixDQUFDLDJCQUEyQixDQUFDLGlCQUFpQixDQUFDLFNBQVMsRUFBRSxXQUFXLENBQUMsQ0FBQzthQUNoSCx1QkFBa0IsR0FBRyxvQkFBb0IsQ0FBQywyQkFBMkIsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUUsV0FBVyxDQUFDLENBQUM7YUFDaEgscUJBQWdCLEdBQUcsb0JBQW9CLENBQUMsMkJBQTJCLENBQUMsaUJBQWlCLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO2FBQzFHLHNCQUFpQixHQUFHLG9CQUFvQixDQUFDLHVCQUF1QixDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQzthQUN6RywwQkFBcUIsR0FBRyxvQkFBb0IsQ0FBQyx1QkFBdUIsQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsVUFBVSxDQUFDLENBQUM7YUFDakgsbUJBQWMsR0FBRyxvQkFBb0IsQ0FBQyx1QkFBdUIsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFZL0csTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUErQztRQUM1RCxPQUFPLFVBQVUsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzdHLENBQUM7SUE4QkQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUE0QixFQUFFLE9BQTRDO1FBQ25GLE9BQU8sVUFBVSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUNELE1BQU0sQ0FBQyxhQUFhLENBQUMsR0FBVztRQUM5QixPQUFPLFVBQVUsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLHNDQUFzQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQ25GLENBQUM7SUE2QkQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUE0QixFQUFFLE9BQTRDO1FBQ25GLE9BQU8sVUFBVSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUNELE1BQU0sQ0FBQyxhQUFhLENBQUMsR0FBVztRQUM5QixPQUFPLFVBQVUsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLHNDQUFzQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQ25GLENBQUM7SUE4QkQsTUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFrQyxFQUFFLE9BQWtEO1FBQ3JHLE9BQU8sVUFBVSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBQ0QsTUFBTSxDQUFDLG1CQUFtQixDQUFDLFNBQWlCO1FBQzFDLE9BQU8sVUFBVSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsRUFBRSxzQ0FBc0MsU0FBUyxhQUFhLENBQUMsQ0FBQztJQUNoSCxDQUFDO0lBOEJELE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBa0MsRUFBRSxPQUFrRDtRQUNyRyxPQUFPLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUNELE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxTQUFpQjtRQUMxQyxPQUFPLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLEVBQUUsc0NBQXNDLFNBQVMsYUFBYSxDQUFDLENBQUM7SUFDaEgsQ0FBQztJQXNCRCxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQWdELEVBQUUsVUFBa0Isc0NBQXNDLEdBQUUsT0FBTztRQUNoSSxPQUFPLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQVlELE1BQU0sQ0FBQyxRQUFRLENBQUMsVUFBa0Isd0JBQXdCO1FBQ3hELE9BQU8sVUFBVSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFZRCxNQUFNLENBQUMsWUFBWSxDQUFDLFVBQWtCLHdCQUF3QjtRQUM1RCxPQUFPLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBWUQsTUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFrQixtQkFBbUI7UUFDaEQsT0FBTyxVQUFVLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzVDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYWxpZGF0b3JzIGFzIEFuZ3VsYXJWYWxpZGF0b3JzLCBWYWxpZGF0b3JGbiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7IFZhbGlkYXRvckRlY2xhcmF0aW9uIH0gZnJvbSAnLi92YWxpZGF0b3ItZGVjbGFyYXRpb24nO1xyXG5cclxuLyoqXHJcbiAqIFByb3ZpZGVzIGEgc2V0IG9mIHZhbGlkYXRvcnMgdXNlZCBieSBmb3JtIGNvbnRyb2xzLlxyXG4gKlxyXG4gKiBDb2RlIGNvbW1lbnRzIGhhdmUgYmVlbiBjb3BpZWQgZnJvbSB0aGUgQW5ndWxhciBzb3VyY2UgY29kZS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBWYWxpZGF0b3JzIHtcclxuLyoqXHJcbiAqIE5vLW9wIHZhbGlkYXRvci5cclxuICovXHJcbiAgc3RhdGljIG51bGxWYWxpZGF0b3IgPSBBbmd1bGFyVmFsaWRhdG9ycy5udWxsVmFsaWRhdG9yO1xyXG4gIHN0YXRpYyBjb21wb3NlQXN5bmMgPSBBbmd1bGFyVmFsaWRhdG9ycy5jb21wb3NlQXN5bmM7XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIG1pblZhbGlkYXRvciA9IFZhbGlkYXRvckRlY2xhcmF0aW9uLndyYXBTaW5nbGVBcmd1bWVudFZhbGlkYXRvcihBbmd1bGFyVmFsaWRhdG9ycy5taW4sICdtaW4nKTtcclxuICBwcml2YXRlIHN0YXRpYyBtYXhWYWxpZGF0b3IgPSBWYWxpZGF0b3JEZWNsYXJhdGlvbi53cmFwU2luZ2xlQXJndW1lbnRWYWxpZGF0b3IoQW5ndWxhclZhbGlkYXRvcnMubWF4LCAnbWF4Jyk7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgbWluTGVuZ3RoVmFsaWRhdG9yID0gVmFsaWRhdG9yRGVjbGFyYXRpb24ud3JhcFNpbmdsZUFyZ3VtZW50VmFsaWRhdG9yKEFuZ3VsYXJWYWxpZGF0b3JzLm1pbkxlbmd0aCwgJ21pbmxlbmd0aCcpO1xyXG4gIHByaXZhdGUgc3RhdGljIG1heExlbmd0aFZhbGlkYXRvciA9IFZhbGlkYXRvckRlY2xhcmF0aW9uLndyYXBTaW5nbGVBcmd1bWVudFZhbGlkYXRvcihBbmd1bGFyVmFsaWRhdG9ycy5tYXhMZW5ndGgsICdtYXhsZW5ndGgnKTtcclxuICBwcml2YXRlIHN0YXRpYyBwYXR0ZXJuVmFsaWRhdG9yID0gVmFsaWRhdG9yRGVjbGFyYXRpb24ud3JhcFNpbmdsZUFyZ3VtZW50VmFsaWRhdG9yKEFuZ3VsYXJWYWxpZGF0b3JzLnBhdHRlcm4sICdwYXR0ZXJuJyk7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgcmVxdWlyZWRWYWxpZGF0b3IgPSBWYWxpZGF0b3JEZWNsYXJhdGlvbi53cmFwTm9Bcmd1bWVudFZhbGlkYXRvcihBbmd1bGFyVmFsaWRhdG9ycy5yZXF1aXJlZCwgJ3JlcXVpcmVkJyk7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgcmVxdWlyZWRUcnVlVmFsaWRhdG9yID0gVmFsaWRhdG9yRGVjbGFyYXRpb24ud3JhcE5vQXJndW1lbnRWYWxpZGF0b3IoQW5ndWxhclZhbGlkYXRvcnMucmVxdWlyZWRUcnVlLCAncmVxdWlyZWQnKTtcclxuICBwcml2YXRlIHN0YXRpYyBlbWFpbFZhbGlkYXRvciA9IFZhbGlkYXRvckRlY2xhcmF0aW9uLndyYXBOb0FyZ3VtZW50VmFsaWRhdG9yKEFuZ3VsYXJWYWxpZGF0b3JzLmVtYWlsLCAnZW1haWwnKTtcclxuXHJcbiAgLyoqXHJcbiAgICogQ29tcG9zZSBtdWx0aXBsZSB2YWxpZGF0b3JzIGludG8gYSBzaW5nbGUgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSB1bmlvblxyXG4gICAqIG9mIHRoZSBpbmRpdmlkdWFsIGVycm9yIG1hcHMuXHJcbiAgICovXHJcbiAgc3RhdGljIGNvbXBvc2UodmFsaWRhdG9yczogbnVsbCk6IG51bGw7XHJcbiAgLyoqXHJcbiAgICogQ29tcG9zZSBtdWx0aXBsZSB2YWxpZGF0b3JzIGludG8gYSBzaW5nbGUgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSB1bmlvblxyXG4gICAqIG9mIHRoZSBpbmRpdmlkdWFsIGVycm9yIG1hcHMuXHJcbiAgICovXHJcbiAgc3RhdGljIGNvbXBvc2UodmFsaWRhdG9yczogKFZhbGlkYXRvckZufG51bGx8dW5kZWZpbmVkKVtdKTogVmFsaWRhdG9yRm58bnVsbDtcclxuICBzdGF0aWMgY29tcG9zZSh2YWxpZGF0b3JzOiAoVmFsaWRhdG9yRm58bnVsbHx1bmRlZmluZWQpW118bnVsbCk6IFZhbGlkYXRvckZufG51bGwge1xyXG4gICAgcmV0dXJuIHZhbGlkYXRvcnMgPT09IG51bGwgPyBBbmd1bGFyVmFsaWRhdG9ycy5jb21wb3NlKHZhbGlkYXRvcnMpIDogQW5ndWxhclZhbGlkYXRvcnMuY29tcG9zZSh2YWxpZGF0b3JzKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFZhbGlkYXRvciB0aGF0IHJlcXVpcmVzIGNvbnRyb2xzIHRvIGhhdmUgYSB2YWx1ZSBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gYSBudW1iZXIuXHJcbiAgICogTm90ZTogd2hlbiB1c2luZyB0aGlzIGZ1bmN0aW9uIHdpdGhvdXQgc3BlY2lmeWluZyBhIG1lc3NhZ2UsIHlvdSBoYXZlIHRvIGRlY2xhcmUgYW5cclxuICAgKiBhcnYtdmFsaWRhdGlvbi1tZXNzYWdlIGVsZW1lbnQgaW4gdGhlIEhUTUwgd2l0aCBhIGN1c3RvbSBtZXNzYWdlLlxyXG4gICAqL1xyXG4gIHN0YXRpYyBtaW4obWluOiBudW1iZXIpOiBWYWxpZGF0b3JGbjtcclxuICAvKipcclxuICAgKiBWYWxpZGF0b3IgdGhhdCByZXF1aXJlcyBjb250cm9scyB0byBoYXZlIGEgdmFsdWUgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvIGEgbnVtYmVyLlxyXG4gICAqL1xyXG4gIHN0YXRpYyBtaW4obWluOiBudW1iZXIsIG1lc3NhZ2U6IHN0cmluZyk6IFZhbGlkYXRvckZuO1xyXG4gIC8qKlxyXG4gICAqIFZhbGlkYXRvciB0aGF0IHJlcXVpcmVzIGNvbnRyb2xzIHRvIGhhdmUgYSB2YWx1ZSBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gYSBudW1iZXIuXHJcbiAgICogTm90ZTogd2hlbiB1c2luZyB0aGlzIGZ1bmN0aW9uIHdpdGhvdXQgc3BlY2lmeWluZyBhIG1lc3NhZ2UsIHlvdSBoYXZlIHRvIGRlY2xhcmUgYW5cclxuICAgKiBhcnYtdmFsaWRhdGlvbi1tZXNzYWdlIGVsZW1lbnQgaW4gdGhlIEhUTUwgd2l0aCBhIGN1c3RvbSBtZXNzYWdlLlxyXG4gICAqL1xyXG4gIHN0YXRpYyBtaW4obWluOiAoKSA9PiBudW1iZXIpOiBWYWxpZGF0b3JGbjtcclxuICAvKipcclxuICAgKiBWYWxpZGF0b3IgdGhhdCByZXF1aXJlcyBjb250cm9scyB0byBoYXZlIGEgdmFsdWUgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvIGEgbnVtYmVyLlxyXG4gICAqL1xyXG4gIHN0YXRpYyBtaW4obWluOiAoKSA9PiBudW1iZXIsIG1lc3NhZ2U6IHN0cmluZyk6IFZhbGlkYXRvckZuO1xyXG4gIC8qKlxyXG4gICAqIFZhbGlkYXRvciB0aGF0IHJlcXVpcmVzIGNvbnRyb2xzIHRvIGhhdmUgYSB2YWx1ZSBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gYSBudW1iZXIuXHJcbiAgICovXHJcbiAgc3RhdGljIG1pbihtaW46IG51bWJlciwgbWVzc2FnZUZ1bmM6ICgobWluOiBudW1iZXIpID0+IHN0cmluZykpOiBWYWxpZGF0b3JGbjtcclxuICAvKipcclxuICAgKiBWYWxpZGF0b3IgdGhhdCByZXF1aXJlcyBjb250cm9scyB0byBoYXZlIGEgdmFsdWUgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvIGEgbnVtYmVyLlxyXG4gICAqL1xyXG4gIHN0YXRpYyBtaW4obWluOiAoKSA9PiBudW1iZXIsIG1lc3NhZ2VGdW5jOiAoKG1pbjogbnVtYmVyKSA9PiBzdHJpbmcpKTogVmFsaWRhdG9yRm47XHJcbiAgc3RhdGljIG1pbihtaW46IG51bWJlciB8ICgoKSA9PiBudW1iZXIpLCBtZXNzYWdlPzogc3RyaW5nIHwgKChtaW46IG51bWJlcikgPT4gc3RyaW5nKSk6IFZhbGlkYXRvckZuIHtcclxuICAgIHJldHVybiBWYWxpZGF0b3JzLm1pblZhbGlkYXRvcihtaW4sIG1lc3NhZ2UpO1xyXG4gIH1cclxuICBzdGF0aWMgbWluRGVmYXVsdE1zZyhtaW46IG51bWJlcik6IFZhbGlkYXRvckZuIHtcclxuICAgIHJldHVybiBWYWxpZGF0b3JzLm1heFZhbGlkYXRvcihtaW4sIGBUaGlzIGZpZWxkIHNob3VsZCBub3QgYmUgbGVzcyB0aGFuICR7bWlufWApO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBWYWxpZGF0b3IgdGhhdCByZXF1aXJlcyBjb250cm9scyB0byBoYXZlIGEgdmFsdWUgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIGEgbnVtYmVyLlxyXG4gICAqIE5vdGU6IHdoZW4gdXNpbmcgdGhpcyBmdW5jdGlvbiB3aXRob3V0IHNwZWNpZnlpbmcgYSBtZXNzYWdlLCB5b3UgaGF2ZSB0byBkZWNsYXJlIGFuXHJcbiAgICogYXJ2LXZhbGlkYXRpb24tbWVzc2FnZSBlbGVtZW50IGluIHRoZSBIVE1MIHdpdGggYSBjdXN0b20gbWVzc2FnZS5cclxuICAgKi9cclxuICBzdGF0aWMgbWF4KG1heDogbnVtYmVyKTogVmFsaWRhdG9yRm47XHJcbiAgLyoqXHJcbiAgICogVmFsaWRhdG9yIHRoYXQgcmVxdWlyZXMgY29udHJvbHMgdG8gaGF2ZSBhIHZhbHVlIGxlc3MgdGhhbiBvciBlcXVhbCB0byBhIG51bWJlci5cclxuICAgKi9cclxuICBzdGF0aWMgbWF4KG1heDogbnVtYmVyLCBtZXNzYWdlOiBzdHJpbmcpOiBWYWxpZGF0b3JGbjtcclxuICAvKipcclxuICAgKiBWYWxpZGF0b3IgdGhhdCByZXF1aXJlcyBjb250cm9scyB0byBoYXZlIGEgdmFsdWUgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIGEgbnVtYmVyLlxyXG4gICAqIE5vdGU6IHdoZW4gdXNpbmcgdGhpcyBmdW5jdGlvbiB3aXRob3V0IHNwZWNpZnlpbmcgYSBtZXNzYWdlLCB5b3UgaGF2ZSB0byBkZWNsYXJlIGFuXHJcbiAgICogYXJ2LXZhbGlkYXRpb24tbWVzc2FnZSBlbGVtZW50IGluIHRoZSBIVE1MIHdpdGggYSBjdXN0b20gbWVzc2FnZS5cclxuICAgKi9cclxuICBzdGF0aWMgbWF4KG1heDogKCkgPT4gbnVtYmVyKTogVmFsaWRhdG9yRm47XHJcbiAgLyoqXHJcbiAgICogVmFsaWRhdG9yIHRoYXQgcmVxdWlyZXMgY29udHJvbHMgdG8gaGF2ZSBhIHZhbHVlIGxlc3MgdGhhbiBvciBlcXVhbCB0byBhIG51bWJlci5cclxuICAgKi9cclxuICBzdGF0aWMgbWF4KG1heDogKCkgPT4gbnVtYmVyLCBtZXNzYWdlOiBzdHJpbmcpOiBWYWxpZGF0b3JGbjtcclxuICAvKipcclxuICAgKiBWYWxpZGF0b3IgdGhhdCByZXF1aXJlcyBjb250cm9scyB0byBoYXZlIGEgdmFsdWUgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIGEgbnVtYmVyLlxyXG4gICAqL1xyXG4gIHN0YXRpYyBtYXgobWF4OiBudW1iZXIsIG1lc3NhZ2VGdW5jOiAoKG1heDogbnVtYmVyKSA9PiBzdHJpbmcpKTogVmFsaWRhdG9yRm47XHJcbiAgLyoqXHJcbiAgICogVmFsaWRhdG9yIHRoYXQgcmVxdWlyZXMgY29udHJvbHMgdG8gaGF2ZSBhIHZhbHVlIGxlc3MgdGhhbiBvciBlcXVhbCB0byBhIG51bWJlci5cclxuICAgKi9cclxuICBzdGF0aWMgbWF4KG1heDogKCkgPT4gbnVtYmVyLCBtZXNzYWdlRnVuYzogKChtYXg6IG51bWJlcikgPT4gc3RyaW5nKSk6IFZhbGlkYXRvckZuO1xyXG4gIHN0YXRpYyBtYXgobWF4OiBudW1iZXIgfCAoKCkgPT4gbnVtYmVyKSwgbWVzc2FnZT86IHN0cmluZyB8ICgobWF4OiBudW1iZXIpID0+IHN0cmluZykpOiBWYWxpZGF0b3JGbiB7XHJcbiAgICByZXR1cm4gVmFsaWRhdG9ycy5tYXhWYWxpZGF0b3IobWF4LCBtZXNzYWdlKTtcclxuICB9XHJcbiAgc3RhdGljIG1heERlZmF1bHRNc2cobWF4OiBudW1iZXIpOiBWYWxpZGF0b3JGbiB7XHJcbiAgICByZXR1cm4gVmFsaWRhdG9ycy5tYXhWYWxpZGF0b3IobWF4LCBgVGhpcyBmaWVsZCBzaG91bGQgbm90IGJlIG1vcmUgdGhhbiAke21heH1gKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFZhbGlkYXRvciB0aGF0IHJlcXVpcmVzIGNvbnRyb2xzIHRvIGhhdmUgYSB2YWx1ZSBvZiBhIG1pbmltdW0gbGVuZ3RoLlxyXG4gICAqIE5vdGU6IHdoZW4gdXNpbmcgdGhpcyBmdW5jdGlvbiB3aXRob3V0IHNwZWNpZnlpbmcgYSBtZXNzYWdlLCB5b3UgaGF2ZSB0byBkZWNsYXJlIGFuXHJcbiAgICogYXJ2LXZhbGlkYXRpb24tbWVzc2FnZSBlbGVtZW50IGluIHRoZSBIVE1MIHdpdGggYSBjdXN0b20gbWVzc2FnZS5cclxuICAgKi9cclxuICBzdGF0aWMgbWluTGVuZ3RoKG1pbkxlbmd0aDogbnVtYmVyKTogVmFsaWRhdG9yRm47XHJcbiAgLyoqXHJcbiAgICogVmFsaWRhdG9yIHRoYXQgcmVxdWlyZXMgY29udHJvbHMgdG8gaGF2ZSBhIHZhbHVlIG9mIGEgbWluaW11bSBsZW5ndGguXHJcbiAgICovXHJcbiAgc3RhdGljIG1pbkxlbmd0aChtaW5MZW5ndGg6IG51bWJlciwgbWVzc2FnZTogc3RyaW5nKTogVmFsaWRhdG9yRm47XHJcbiAgLyoqXHJcbiAgICogVmFsaWRhdG9yIHRoYXQgcmVxdWlyZXMgY29udHJvbHMgdG8gaGF2ZSBhIHZhbHVlIG9mIGEgbWluaW11bSBsZW5ndGguXHJcbiAgICogTm90ZTogd2hlbiB1c2luZyB0aGlzIGZ1bmN0aW9uIHdpdGhvdXQgc3BlY2lmeWluZyBhIG1lc3NhZ2UsIHlvdSBoYXZlIHRvIGRlY2xhcmUgYW5cclxuICAgKiBhcnYtdmFsaWRhdGlvbi1tZXNzYWdlIGVsZW1lbnQgaW4gdGhlIEhUTUwgd2l0aCBhIGN1c3RvbSBtZXNzYWdlLlxyXG4gICAqL1xyXG4gIHN0YXRpYyBtaW5MZW5ndGgobWluTGVuZ3RoOiAoKSA9PiBudW1iZXIpOiBWYWxpZGF0b3JGbjtcclxuICAvKipcclxuICAgKiBWYWxpZGF0b3IgdGhhdCByZXF1aXJlcyBjb250cm9scyB0byBoYXZlIGEgdmFsdWUgb2YgYSBtaW5pbXVtIGxlbmd0aC5cclxuICAgKi9cclxuICBzdGF0aWMgbWluTGVuZ3RoKG1pbkxlbmd0aDogKCkgPT4gbnVtYmVyLCBtZXNzYWdlOiBzdHJpbmcpOiBWYWxpZGF0b3JGbjtcclxuICAvKipcclxuICAgKiBWYWxpZGF0b3IgdGhhdCByZXF1aXJlcyBjb250cm9scyB0byBoYXZlIGEgdmFsdWUgb2YgYSBtaW5pbXVtIGxlbmd0aC5cclxuICAgKi9cclxuICBzdGF0aWMgbWluTGVuZ3RoKG1pbkxlbmd0aDogbnVtYmVyLCBtZXNzYWdlRnVuYzogKChtaW5MZW5ndGg6IG51bWJlcikgPT4gc3RyaW5nKSk6IFZhbGlkYXRvckZuO1xyXG4gIC8qKlxyXG4gICAqIFZhbGlkYXRvciB0aGF0IHJlcXVpcmVzIGNvbnRyb2xzIHRvIGhhdmUgYSB2YWx1ZSBvZiBhIG1pbmltdW0gbGVuZ3RoLlxyXG4gICAqL1xyXG4gIHN0YXRpYyBtaW5MZW5ndGgobWluTGVuZ3RoOiAoKSA9PiBudW1iZXIsIG1lc3NhZ2VGdW5jOiAoKG1pbkxlbmd0aDogbnVtYmVyKSA9PiBzdHJpbmcpKTogVmFsaWRhdG9yRm47XHJcbiAgc3RhdGljIG1pbkxlbmd0aChtaW5MZW5ndGg6IG51bWJlciB8ICgoKSA9PiBudW1iZXIpLCBtZXNzYWdlPzogc3RyaW5nIHwgKChtaW5MZW5ndGg6IG51bWJlcikgPT4gc3RyaW5nKSk6IFZhbGlkYXRvckZuIHtcclxuICAgIHJldHVybiBWYWxpZGF0b3JzLm1pbkxlbmd0aFZhbGlkYXRvcihtaW5MZW5ndGgsIG1lc3NhZ2UpO1xyXG4gIH1cclxuICBzdGF0aWMgbWluTGVuZ3RoRGVmYXVsdE1zZyhtaW5MZW5ndGg6IG51bWJlcik6IFZhbGlkYXRvckZuIHtcclxuICAgIHJldHVybiBWYWxpZGF0b3JzLm1heExlbmd0aFZhbGlkYXRvcihtaW5MZW5ndGgsIGBUaGlzIGZpZWxkIHNob3VsZCBub3QgYmUgbGVzcyB0aGFuICR7bWluTGVuZ3RofSBjaGFyYWN0ZXJzYCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBWYWxpZGF0b3IgdGhhdCByZXF1aXJlcyBjb250cm9scyB0byBoYXZlIGEgdmFsdWUgb2YgYSBtYXhpbXVtIGxlbmd0aC5cclxuICAgKiBOb3RlOiB3aGVuIHVzaW5nIHRoaXMgZnVuY3Rpb24gd2l0aG91dCBzcGVjaWZ5aW5nIGEgbWVzc2FnZSwgeW91IGhhdmUgdG8gZGVjbGFyZSBhblxyXG4gICAqIGFydi12YWxpZGF0aW9uLW1lc3NhZ2UgZWxlbWVudCBpbiB0aGUgSFRNTCB3aXRoIGEgY3VzdG9tIG1lc3NhZ2UuXHJcbiAgICovXHJcbiAgc3RhdGljIG1heExlbmd0aChtYXhMZW5ndGg6IG51bWJlcik6IFZhbGlkYXRvckZuO1xyXG4gIC8qKlxyXG4gICAqIFZhbGlkYXRvciB0aGF0IHJlcXVpcmVzIGNvbnRyb2xzIHRvIGhhdmUgYSB2YWx1ZSBvZiBhIG1heGltdW0gbGVuZ3RoLlxyXG4gICAqL1xyXG4gIHN0YXRpYyBtYXhMZW5ndGgobWF4TGVuZ3RoOiBudW1iZXIsIG1lc3NhZ2U6IHN0cmluZyk6IFZhbGlkYXRvckZuO1xyXG4gIC8qKlxyXG4gICAqIFZhbGlkYXRvciB0aGF0IHJlcXVpcmVzIGNvbnRyb2xzIHRvIGhhdmUgYSB2YWx1ZSBvZiBhIG1heGltdW0gbGVuZ3RoLlxyXG4gICAqIE5vdGU6IHdoZW4gdXNpbmcgdGhpcyBmdW5jdGlvbiB3aXRob3V0IHNwZWNpZnlpbmcgYSBtZXNzYWdlLCB5b3UgaGF2ZSB0byBkZWNsYXJlIGFuXHJcbiAgICogYXJ2LXZhbGlkYXRpb24tbWVzc2FnZSBlbGVtZW50IGluIHRoZSBIVE1MIHdpdGggYSBjdXN0b20gbWVzc2FnZS5cclxuICAgKi9cclxuICBzdGF0aWMgbWF4TGVuZ3RoKG1heExlbmd0aDogKCkgPT4gbnVtYmVyKTogVmFsaWRhdG9yRm47XHJcbiAgLyoqXHJcbiAgICogVmFsaWRhdG9yIHRoYXQgcmVxdWlyZXMgY29udHJvbHMgdG8gaGF2ZSBhIHZhbHVlIG9mIGEgbWF4aW11bSBsZW5ndGguXHJcbiAgICovXHJcbiAgc3RhdGljIG1heExlbmd0aChtYXhMZW5ndGg6ICgpID0+IG51bWJlciwgbWVzc2FnZTogc3RyaW5nKTogVmFsaWRhdG9yRm47XHJcbiAgLyoqXHJcbiAgICogVmFsaWRhdG9yIHRoYXQgcmVxdWlyZXMgY29udHJvbHMgdG8gaGF2ZSBhIHZhbHVlIG9mIGEgbWF4aW11bSBsZW5ndGguXHJcbiAgICovXHJcbiAgc3RhdGljIG1heExlbmd0aChtYXhMZW5ndGg6IG51bWJlciwgbWVzc2FnZUZ1bmM6ICgobWF4TGVuZ3RoOiBudW1iZXIpID0+IHN0cmluZykpOiBWYWxpZGF0b3JGbjtcclxuICAvKipcclxuICAgKiBWYWxpZGF0b3IgdGhhdCByZXF1aXJlcyBjb250cm9scyB0byBoYXZlIGEgdmFsdWUgb2YgYSBtYXhpbXVtIGxlbmd0aC5cclxuICAgKi9cclxuICBzdGF0aWMgbWF4TGVuZ3RoKG1heExlbmd0aDogKCkgPT4gbnVtYmVyLCBtZXNzYWdlRnVuYzogKChtYXhMZW5ndGg6IG51bWJlcikgPT4gc3RyaW5nKSk6IFZhbGlkYXRvckZuO1xyXG4gIHN0YXRpYyBtYXhMZW5ndGgobWF4TGVuZ3RoOiBudW1iZXIgfCAoKCkgPT4gbnVtYmVyKSwgbWVzc2FnZT86IHN0cmluZyB8ICgobWF4TGVuZ3RoOiBudW1iZXIpID0+IHN0cmluZykpOiBWYWxpZGF0b3JGbiB7XHJcbiAgICByZXR1cm4gVmFsaWRhdG9ycy5tYXhMZW5ndGhWYWxpZGF0b3IobWF4TGVuZ3RoLCBtZXNzYWdlKTtcclxuICB9XHJcbiAgc3RhdGljIG1heExlbmd0aERlZmF1bHRNc2cobWF4TGVuZ3RoOiBudW1iZXIpOiBWYWxpZGF0b3JGbiB7XHJcbiAgICByZXR1cm4gVmFsaWRhdG9ycy5tYXhMZW5ndGhWYWxpZGF0b3IobWF4TGVuZ3RoLCBgVGhpcyBmaWVsZCBzaG91bGQgbm90IGJlIG1vcmUgdGhhbiAke21heExlbmd0aH0gY2hhcmFjdGVyc2ApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVmFsaWRhdG9yIHRoYXQgcmVxdWlyZXMgYSBjb250cm9sIHRvIG1hdGNoIGEgcmVnZXggdG8gaXRzIHZhbHVlLlxyXG4gICAqIE5vdGU6IHdoZW4gdXNpbmcgdGhpcyBmdW5jdGlvbiB3aXRob3V0IHNwZWNpZnlpbmcgYSBtZXNzYWdlLCB5b3UgaGF2ZSB0byBkZWNsYXJlIGFuXHJcbiAgICogYXJ2LXZhbGlkYXRpb24tbWVzc2FnZSBlbGVtZW50IGluIHRoZSBIVE1MIHdpdGggYSBjdXN0b20gbWVzc2FnZS5cclxuICAgKi9cclxuICBzdGF0aWMgcGF0dGVybihwYXR0ZXJuOiBzdHJpbmd8UmVnRXhwKTogVmFsaWRhdG9yRm47XHJcbiAgLyoqXHJcbiAgICogVmFsaWRhdG9yIHRoYXQgcmVxdWlyZXMgYSBjb250cm9sIHRvIG1hdGNoIGEgcmVnZXggdG8gaXRzIHZhbHVlLlxyXG4gICAqL1xyXG4gIHN0YXRpYyBwYXR0ZXJuKHBhdHRlcm46IHN0cmluZ3xSZWdFeHAsIG1lc3NhZ2U6IHN0cmluZyk6IFZhbGlkYXRvckZuO1xyXG4gIC8qKlxyXG4gICAqIFZhbGlkYXRvciB0aGF0IHJlcXVpcmVzIGEgY29udHJvbCB0byBtYXRjaCBhIHJlZ2V4IHRvIGl0cyB2YWx1ZS5cclxuICAgKiBOb3RlOiB3aGVuIHVzaW5nIHRoaXMgZnVuY3Rpb24gd2l0aG91dCBzcGVjaWZ5aW5nIGEgbWVzc2FnZSwgeW91IGhhdmUgdG8gZGVjbGFyZSBhblxyXG4gICAqIGFydi12YWxpZGF0aW9uLW1lc3NhZ2UgZWxlbWVudCBpbiB0aGUgSFRNTCB3aXRoIGEgY3VzdG9tIG1lc3NhZ2UuXHJcbiAgICovXHJcbiAgc3RhdGljIHBhdHRlcm4ocGF0dGVybjogKCkgPT4gc3RyaW5nfFJlZ0V4cCk6IFZhbGlkYXRvckZuO1xyXG4gIC8qKlxyXG4gICAqIFZhbGlkYXRvciB0aGF0IHJlcXVpcmVzIGEgY29udHJvbCB0byBtYXRjaCBhIHJlZ2V4IHRvIGl0cyB2YWx1ZS5cclxuICAgKi9cclxuICBzdGF0aWMgcGF0dGVybihwYXR0ZXJuOiAoKSA9PiBzdHJpbmd8UmVnRXhwLCBtZXNzYWdlOiBzdHJpbmcpOiBWYWxpZGF0b3JGbjtcclxuICBzdGF0aWMgcGF0dGVybihwYXR0ZXJuOiAoc3RyaW5nfFJlZ0V4cCkgfCAoKCkgPT4gc3RyaW5nfFJlZ0V4cCksIG1lc3NhZ2U6IHN0cmluZyA9ICdUaGlzIGZpZWxkIHNob3VsZCBtYXRjaCB0aGUgcGF0dGVybiAnKyBwYXR0ZXJuKTogVmFsaWRhdG9yRm4ge1xyXG4gICAgcmV0dXJuIFZhbGlkYXRvcnMucGF0dGVyblZhbGlkYXRvcihwYXR0ZXJuLCBtZXNzYWdlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFZhbGlkYXRvciB0aGF0IHJlcXVpcmVzIGNvbnRyb2xzIHRvIGhhdmUgYSBub24tZW1wdHkgdmFsdWUuXHJcbiAgICogTm90ZTogd2hlbiB1c2luZyB0aGlzIGZ1bmN0aW9uIHdpdGhvdXQgc3BlY2lmeWluZyBhIG1lc3NhZ2UsIHlvdSBoYXZlIHRvIGRlY2xhcmUgYW5cclxuICAgKiBhcnYtdmFsaWRhdGlvbi1tZXNzYWdlIGVsZW1lbnQgaW4gdGhlIEhUTUwgd2l0aCBhIGN1c3RvbSBtZXNzYWdlLlxyXG4gICAqL1xyXG4gIHN0YXRpYyByZXF1aXJlZCgpOiBWYWxpZGF0b3JGbjtcclxuICAvKipcclxuICAgKiBWYWxpZGF0b3IgdGhhdCByZXF1aXJlcyBjb250cm9scyB0byBoYXZlIGEgbm9uLWVtcHR5IHZhbHVlLlxyXG4gICAqL1xyXG4gIHN0YXRpYyByZXF1aXJlZChtZXNzYWdlOiBzdHJpbmcpOiBWYWxpZGF0b3JGbjtcclxuICBzdGF0aWMgcmVxdWlyZWQobWVzc2FnZTogc3RyaW5nID0gJ1RoaXMgZmllbGQgaXMgcmVxdWlyZWQnKTogVmFsaWRhdG9yRm4ge1xyXG4gICAgcmV0dXJuIFZhbGlkYXRvcnMucmVxdWlyZWRWYWxpZGF0b3IobWVzc2FnZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBWYWxpZGF0b3IgdGhhdCByZXF1aXJlcyBjb250cm9sIHZhbHVlIHRvIGJlIHRydWUuXHJcbiAgICogTm90ZTogd2hlbiB1c2luZyB0aGlzIGZ1bmN0aW9uIHdpdGhvdXQgc3BlY2lmeWluZyBhIG1lc3NhZ2UsIHlvdSBoYXZlIHRvIGRlY2xhcmUgYW5cclxuICAgKiBhcnYtdmFsaWRhdGlvbi1tZXNzYWdlIGVsZW1lbnQgaW4gdGhlIEhUTUwgd2l0aCBhIGN1c3RvbSBtZXNzYWdlLlxyXG4gICAqL1xyXG4gIHN0YXRpYyByZXF1aXJlZFRydWUoKTogVmFsaWRhdG9yRm47XHJcbiAgLyoqXHJcbiAgICogVmFsaWRhdG9yIHRoYXQgcmVxdWlyZXMgY29udHJvbCB2YWx1ZSB0byBiZSB0cnVlLlxyXG4gICAqL1xyXG4gIHN0YXRpYyByZXF1aXJlZFRydWUobWVzc2FnZTogc3RyaW5nKTogVmFsaWRhdG9yRm47XHJcbiAgc3RhdGljIHJlcXVpcmVkVHJ1ZShtZXNzYWdlOiBzdHJpbmcgPSAnVGhpcyBmaWVsZCBpcyByZXF1aXJlZCcpOiBWYWxpZGF0b3JGbiB7XHJcbiAgICByZXR1cm4gVmFsaWRhdG9ycy5yZXF1aXJlZFRydWVWYWxpZGF0b3IobWVzc2FnZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBWYWxpZGF0b3IgdGhhdCBwZXJmb3JtcyBlbWFpbCB2YWxpZGF0aW9uLlxyXG4gICAqIE5vdGU6IHdoZW4gdXNpbmcgdGhpcyBmdW5jdGlvbiB3aXRob3V0IHNwZWNpZnlpbmcgYSBtZXNzYWdlLCB5b3UgaGF2ZSB0byBkZWNsYXJlIGFuXHJcbiAgICogYXJ2LXZhbGlkYXRpb24tbWVzc2FnZSBlbGVtZW50IGluIHRoZSBIVE1MIHdpdGggYSBjdXN0b20gbWVzc2FnZS5cclxuICAgKi9cclxuICBzdGF0aWMgZW1haWwoKTogVmFsaWRhdG9yRm47XHJcbiAgLyoqXHJcbiAgICogVmFsaWRhdG9yIHRoYXQgcGVyZm9ybXMgZW1haWwgdmFsaWRhdGlvbi5cclxuICAgKi9cclxuICBzdGF0aWMgZW1haWwobWVzc2FnZTogc3RyaW5nKTogVmFsaWRhdG9yRm47XHJcbiAgc3RhdGljIGVtYWlsKG1lc3NhZ2U6IHN0cmluZyA9ICdFbnRlciB2YWxpZCBlbWFpbCcpOiBWYWxpZGF0b3JGbiB7XHJcbiAgICByZXR1cm4gVmFsaWRhdG9ycy5lbWFpbFZhbGlkYXRvcihtZXNzYWdlKTtcclxuICB9XHJcbn1cclxuIl19