import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";

export function confirmPassword(controlName:string,MatchingControlName:string){
    return (formGroup:FormGroup) => {
     let control=formGroup.controls[controlName];
     let matchingControl=formGroup.controls[MatchingControlName];
     if(matchingControl.errors&&!matchingControl.errors.confirmPassword){
       return null;
     }
     if(control.value!==matchingControl.value){
       matchingControl.setErrors({confirmPassword:true})
     }
     else{
       matchingControl.setErrors(null);
     }
     return null;
    }
  }