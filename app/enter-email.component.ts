import { Component, OnInit } from '@angular/core';
import { Control } from '@angular/common';
import {FormGroup, FormControl, FormBuilder, Validators, AbstractControl} from '@angular/forms';
import { EmailValidator } from  './enter-email.validation';

@Component({
  selector: 'enter-email',
  templateUrl: 'app/enter-email.component.html',
  styleUrls: ['app/form.css']
})

export class EnterEmailComponent implements OnInit {

  ngOnInit() {}

  submitted = false;

  public user = {
    email: '',
    password: ''
  };

  checkEmailFormat(fieldControl: Control){
    // return fieldControl.value[0] === 'a' ? null : { notA: true };
    if (fieldControl.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
      return null;
    } else {
      return { invalidEmail: true };
    }
  }

  // #1
  // enterEmailForm: FormGroup;
  // email: AbstractControl;
  //
  // constructor(private builder: FormBuilder) {
  //   this.enterEmailForm = this.builder.group({
  //     email: ['', Validators.compose([Validators.required, this.checkEmailFormat])]
  //     // email: ['', Validators.compose([
  //     //   Validators.required,
  //     //   this.checkEmailFormat
  //     // ])]
  //     // email: new FormControl('', [Validators.required, this.checkEmailFormat])
  //   })
  //   // this.email = this.enterEmailForm.controls['email'];
  //   this.email = (<FormGroup>this.enterEmailForm).controls['email'];
  // }

  // #2
  // enterEmailForm: FormGroup;
  // email: AbstractControl;
  //
  // constructor(private builder: FormBuilder) {
  //   this.enterEmailForm = new FormGroup({
  //     email: new FormControl('', [
  //       Validators.required,
  //       EmailValidator.emailFormat()
  //     ])
  //   });
  //   this.email = (<FormGroup>this.enterEmailForm).controls['email'];
  // }

  // #3
  enterEmailForm: FormGroup;
  email: AbstractControl;

  static testTiki(fieldControl: Control){
    if (fieldControl.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
      return null;
    } else {
      return { invalidEmail: true };
    }
  }

  constructor(private builder: FormBuilder) {
    this.enterEmailForm = builder.group({
      'email' : ['', [
        EmailValidator.emailFormat,
        Validators.required,
        Validators.minLength(20)
      ]]
    });
    this.email = (<FormGroup>this.enterEmailForm).controls['email'];
  }


  // Error:(70, 38) TS2345: Argument of type '(((control: AbstractControl) => { [key: string]: boolean; }) | ((control: Control) => { invalidEm...' is not assignable to parameter of type 'ValidatorFn[]'.
  // Type '((control: AbstractControl) => { [key: string]: boolean; }) | ((control: Control) => { invalidEma...' is not assignable to type 'ValidatorFn'.
  // Type '(control: Control) => { invalidEmail: boolean; }' is not assignable to type 'ValidatorFn'.
  // Types of parameters 'control' and 'c' are incompatible.
  // Type 'AbstractControl' is not assignable to type 'Control'.
  // Property 'updateValue' is missing in type 'AbstractControl'.

  onSubmit() {

    this.submitted = true;
  }

  // get diagnostic() { return JSON.stringify(this.enterEmailForm.value.email); }

  get value(): string {
    return JSON.stringify(this.enterEmailForm.value, null, 2);
  }
}
