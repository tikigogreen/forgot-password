import { Component, OnInit } from '@angular/core';
import {} from '.user';
import {User} from "./user";

// import { Router } from '@angular/router';
// import { FormsModule, FormGroup, FormControl, Validators, Control, ControlGroup, FormBuilder } from '@angular/forms';
// import { EmailValidator } from  './enter-email.validation';

@Component({
  selector: 'enter-email',
  templateUrl: 'app/enter-email.component.html'
})

export class EnterEmailComponent implements OnInit {

  model = new User(1, '', '');
  submitted = false;

  ngOnInit () {

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
