import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, FormGroup, FormControl, Validators, Control, ControlGroup, FormBuilder } from '@angular/forms';
import { EmailValidator } from  './enter-email.validation';

@Component({
  selector: 'enter-email',
  templateUrl: 'app/enter-email.component.html'
})

export class EnterEmailComponent {

  // constructor(fb: FormBuilder) {
  //   this.loginForm = fb.group({
  //     email: ["", Validators.required],
  //     password: ["", Validators.required]
  //   });
  // }

  doLogin(event) {
    console.log(this.loginForm.value);
    event.preventDefault();
  }

}
