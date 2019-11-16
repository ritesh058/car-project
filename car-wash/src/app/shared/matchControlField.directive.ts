import { AbstractControl, FormGroup, NG_VALIDATORS, Validator } from '@angular/forms';
import { Directive, Input } from '@angular/core';
@Directive({
    'selector':'[compareField]',
    'providers':[{
        provide:NG_VALIDATORS,
        useExisting:matchField,
        multi:true
    }]
})

export class matchField implements Validator {   
    
    @Input() compareField:string
    validate(control:AbstractControl):{[key:string]:any}|null{
        
        const controlToCompare = control.parent.get(this.compareField);
        if(controlToCompare && controlToCompare.value !==control.value){
            return {'notEqual':true}
        }
        return null

    }

}