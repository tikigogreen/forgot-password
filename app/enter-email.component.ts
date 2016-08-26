import { Component, OnInit } from '@angular/core';
import { Control, AbstractControl } from '@angular/common';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
// import { EmailValidator } from  './enter-email.validation';

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

  enterEmailForm: FormGroup;
  email: AbstractControl;

  // #1
  // enterEmailForm = new FormGroup({
  //   email: new FormControl('', [
  //     Validators.required,
  //     Validators.minLength(4)
  //   ])
  // });

  // #2
  // emailCtrl = new FormControl('atikom@squaretrade.com', [
  //   Validators.required,
  //   Validators.minLength(10)
  // ]);
  //
  // constructor(builder: FormBuilder) {
  //   this.enterEmailForm = new FormGroup({
  //     'email': this.emailCtrl
  //   })
  // }

  // 3

  checkEmailFormat(fieldControl: Control){
    // return fieldControl.value[0] === 'a' ? null : { notA: true };
    if (fieldControl.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
      return null;
    } else {
      return { invalidEmail: true };
    }
  }

  constructor(private builder: FormBuilder) {
    this.enterEmailForm = this.builder.group({
      email: ['', Validators.compose([
        Validators.required,
        this.checkEmailFormat
      ])]
    })
    this.email = this.enterEmailForm.controls['email'];
  }

  // constructor(private builder: FormBuilder){
  //   this.emailForm = this.builder.group({
  //     email: ['', Validators.compose([Validators.required, this.checkIfA])]
  //   })
  // }

  onSubmit() {

    this.submitted = true;
  }

  get diagnostic() { return JSON.stringify(this.enterEmailForm.value.email); }

  get value(): string {
    return JSON.stringify(this.enterEmailForm.value, null, 2);
  }
}
