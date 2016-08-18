import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {NgClass} from '@angular/common';
// import { EmailValidator } from  './enter-email.validation';

@Component({
  selector: 'enter-email',
  templateUrl: 'app/enter-email.component.html',
  styleUrls: ['app/form.css'],
  directives: [NgClass]
})

export class EnterEmailComponent implements OnInit {

  ngOnInit() {}

  submitted = false;

  user = {
    // details: {
    //   email: '',
    //   password: ''
    // }
    email: '',
    password: ''
  };

  // enterEmailForm = new FormGroup({
  //   email: new FormControl('', [
  //     Validators.required,
  //     Validators.minLength(4)
  //   ])
  // });

  enterEmailForm: FormGroup;
  emailCtrl = new FormControl('', [
    Validators.required,
    Validators.minLength(10)
  ]);

  constructor(builder: FormBuilder) {
    this.enterEmailForm = new FormGroup({
      'email': this.emailCtrl
    })
  }

  onSubmit() {
    this.submitted = true;
  }

  get diagnostic() { return JSON.stringify(this.enterEmailForm.value.email); }

  get value(): string {
    return JSON.stringify(this.enterEmailForm.value, null, 2);
  }
}
