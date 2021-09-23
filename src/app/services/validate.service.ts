import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }
  checkPassword(controlName:string,MatchingControlName:string){
    return (formGroup:FormGroup) => {
     let control=formGroup.controls[controlName];
     let matchingControl=formGroup.controls[MatchingControlName];
     if(control.invalid||matchingControl.invalid){
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
}
