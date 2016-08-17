import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

import {User} from "./user";
import { EmailValidator } from  './enter-email.validation';

// import { Router } from '@angular/router';
// import { FormsModule, FormGroup, FormControl, Validators, Control, ControlGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'enter-email',
  templateUrl: 'app/enter-email.component.html'
})

export class EnterEmailComponent implements OnInit {

  model = new User(1, '', '');
  submitted = false;

  form: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit () {

    this.form = new FormGroup({
        email: new FormControl('', [ Validators.required ])
    });

  }

  onSubmit() {
    this.submitted = true;
  }

  active = true;

  submitEmail() {
    this.model = new User(1, '', '');
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }

}
