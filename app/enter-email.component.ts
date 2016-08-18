import { Component, OnInit } from '@angular/core';
import { Control, FormGroup, FormControl, Validators } from '@angular/forms';
// import { EmailValidator } from  './enter-email.validation';

@Component({
  selector: 'enter-email',
  templateUrl: 'app/enter-email.component.html'
})

export class EnterEmailComponent implements OnInit {

  ngOnInit() {}

  submitted = false;

  user = {
    details: {
      email: '',
      password: ''
    }
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
    Validators.minLength(4),
    Validators.pattern('[A-Za-z]{5}')
  ]);

  constructor() {
    this.enterEmailForm = new FormGroup({
      'email': this.emailCtrl
    })
  }

  onSubmit() {
    this.submitted = true;
  }

  get diagnostic() { return JSON.stringify(this.user); }
}
