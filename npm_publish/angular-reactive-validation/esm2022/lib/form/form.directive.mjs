import { Directive } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
/**
 * Encapsulates properties and events of the form and makes them available for child components.
 */
export class FormDirective {
    constructor(formGroupDirective) {
        this.submitted = formGroupDirective.ngSubmit.asObservable();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: FormDirective, deps: [{ token: i1.FormGroupDirective }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.11", type: FormDirective, selector: "form[formGroup]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: FormDirective, decorators: [{
            type: Directive,
            args: [{
                    // eslint-disable-next-line @angular-eslint/directive-selector
                    selector: 'form[formGroup]'
                }]
        }], ctorParameters: function () { return [{ type: i1.FormGroupDirective }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hbmd1bGFyLXJlYWN0aXZlLXZhbGlkYXRpb24vc3JjL2xpYi9mb3JtL2Zvcm0uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQVExQzs7R0FFRztBQUNILE1BQU0sT0FBTyxhQUFhO0lBTXhCLFlBQVksa0JBQXNDO1FBQ2hELElBQUksQ0FBQyxTQUFTLEdBQUcsa0JBQWtCLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzlELENBQUM7K0dBUlUsYUFBYTttR0FBYixhQUFhOzs0RkFBYixhQUFhO2tCQVB6QixTQUFTO21CQUFDO29CQUNULDhEQUE4RDtvQkFDOUQsUUFBUSxFQUFFLGlCQUFpQjtpQkFDNUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L2RpcmVjdGl2ZS1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnZm9ybVtmb3JtR3JvdXBdJ1xyXG59KVxyXG4vKipcclxuICogRW5jYXBzdWxhdGVzIHByb3BlcnRpZXMgYW5kIGV2ZW50cyBvZiB0aGUgZm9ybSBhbmQgbWFrZXMgdGhlbSBhdmFpbGFibGUgZm9yIGNoaWxkIGNvbXBvbmVudHMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRm9ybURpcmVjdGl2ZSB7XHJcbiAgLyoqXHJcbiAgICogT2JzZXJ2YWJsZSB3aGljaCBlbWl0cyB3aGVuIHRoZSBmb3JtIGlzIHN1Ym1pdHRlZC5cclxuICAgKi9cclxuICBzdWJtaXR0ZWQ6IE9ic2VydmFibGU8YW55PjtcclxuXHJcbiAgY29uc3RydWN0b3IoZm9ybUdyb3VwRGlyZWN0aXZlOiBGb3JtR3JvdXBEaXJlY3RpdmUpIHtcclxuICAgIHRoaXMuc3VibWl0dGVkID0gZm9ybUdyb3VwRGlyZWN0aXZlLm5nU3VibWl0LmFzT2JzZXJ2YWJsZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=