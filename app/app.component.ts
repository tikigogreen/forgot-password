import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl} from '@angular/forms';
import { Control } from '@angular/common';

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html'
})
export class AppComponent {

  submitRecepitForm: FormGroup;
  repairDate: AbstractControl;
  repairCost: AbstractControl;

  constructor(private builder: FormBuilder) {
    this.submitRecepitForm = builder.group({
      'repairDate' : ['', [
        Validators.required,
        Validators.minLength(7)
      ]],
      'repairCost' : ['', [
        Validators.required,
        Validators.minLength(7)
      ]]
    });
    this.repairDate = (<FormGroup>this.submitRecepitForm).controls['repairDate'];
    this.repairCost = (<FormGroup>this.submitRecepitForm).controls['repairCost'];
  }

  get value(): string {
    return JSON.stringify(this.submitRecepitForm.value, null, 2);
  }

}
