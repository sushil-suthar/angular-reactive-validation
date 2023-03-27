import { UntypedFormControl, ControlContainer } from '@angular/forms';
export declare const getFormControlFromContainer: (name: string, controlContainer: ControlContainer | undefined) => UntypedFormControl;
export declare const isControlContainerVoidOrInitialized: (controlContainer: ControlContainer | undefined) => boolean;
