import { AbstractControl} from '@angular/forms';



 
export class CustomValidator {

    static numberValidation(control: AbstractControl) {
        if (control.value.match(/\D/)) {
            return { ERROR: 'Not a number' }
        }
        return null;
    };
 
}








