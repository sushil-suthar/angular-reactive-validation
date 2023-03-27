/**
 * Given a control, returns a string representation of the property path to
 * this control. Thus, for a FormControl 'firstName', that is part of a
 * FormGroup named 'name', this function will return: 'name.firstName'.
 *
 * Note that FormArray indexes are also put in the path, e.g.: 'person.0.name.firstName'.
 */
export const getControlPath = (control) => {
    const parentControl = control.parent;
    if (parentControl) {
        let path = getControlPath(parentControl);
        if (path) {
            path += '.';
        }
        return path + Object.keys(parentControl.controls).find(key => {
            const controls = parentControl.controls;
            if (Array.isArray(controls)) {
                return controls[Number(key)] === control;
            }
            else {
                return controls[key] === control;
            }
        });
    }
    return '';
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LWNvbnRyb2wtcGF0aC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItcmVhY3RpdmUtdmFsaWRhdGlvbi9zcmMvbGliL2dldC1jb250cm9sLXBhdGgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7Ozs7OztHQU1HO0FBQ0gsTUFBTSxDQUFDLE1BQU0sY0FBYyxHQUFHLENBQUMsT0FBd0IsRUFBVSxFQUFFO0lBQ2pFLE1BQU0sYUFBYSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUM7SUFDckMsSUFBSSxhQUFhLEVBQUU7UUFDakIsSUFBSSxJQUFJLEdBQUcsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3pDLElBQUksSUFBSSxFQUFFO1lBQ1IsSUFBSSxJQUFJLEdBQUcsQ0FBQztTQUNiO1FBQ0QsT0FBTyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzNELE1BQU0sUUFBUSxHQUFHLGFBQWEsQ0FBQyxRQUFRLENBQUM7WUFDeEMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUMzQixPQUFPLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxPQUFPLENBQUM7YUFDMUM7aUJBQU07Z0JBQ0wsT0FBTyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssT0FBTyxDQUFDO2FBQ2xDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7S0FDSjtJQUVELE9BQU8sRUFBRSxDQUFDO0FBQ1osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuLyoqXHJcbiAqIEdpdmVuIGEgY29udHJvbCwgcmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgcHJvcGVydHkgcGF0aCB0b1xyXG4gKiB0aGlzIGNvbnRyb2wuIFRodXMsIGZvciBhIEZvcm1Db250cm9sICdmaXJzdE5hbWUnLCB0aGF0IGlzIHBhcnQgb2YgYVxyXG4gKiBGb3JtR3JvdXAgbmFtZWQgJ25hbWUnLCB0aGlzIGZ1bmN0aW9uIHdpbGwgcmV0dXJuOiAnbmFtZS5maXJzdE5hbWUnLlxyXG4gKlxyXG4gKiBOb3RlIHRoYXQgRm9ybUFycmF5IGluZGV4ZXMgYXJlIGFsc28gcHV0IGluIHRoZSBwYXRoLCBlLmcuOiAncGVyc29uLjAubmFtZS5maXJzdE5hbWUnLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGdldENvbnRyb2xQYXRoID0gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IHN0cmluZyA9PiB7XHJcbiAgY29uc3QgcGFyZW50Q29udHJvbCA9IGNvbnRyb2wucGFyZW50O1xyXG4gIGlmIChwYXJlbnRDb250cm9sKSB7XHJcbiAgICBsZXQgcGF0aCA9IGdldENvbnRyb2xQYXRoKHBhcmVudENvbnRyb2wpO1xyXG4gICAgaWYgKHBhdGgpIHtcclxuICAgICAgcGF0aCArPSAnLic7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcGF0aCArIE9iamVjdC5rZXlzKHBhcmVudENvbnRyb2wuY29udHJvbHMpLmZpbmQoa2V5ID0+IHtcclxuICAgICAgY29uc3QgY29udHJvbHMgPSBwYXJlbnRDb250cm9sLmNvbnRyb2xzO1xyXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShjb250cm9scykpIHtcclxuICAgICAgICByZXR1cm4gY29udHJvbHNbTnVtYmVyKGtleSldID09PSBjb250cm9sO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBjb250cm9sc1trZXldID09PSBjb250cm9sO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJldHVybiAnJztcclxufTtcclxuIl19