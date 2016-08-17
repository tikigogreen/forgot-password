import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

// import {User} from "./user";
// import { EmailValidator } from  './enter-email.validation';

// import { Router } from '@angular/router';
// import { FormsModule, FormGroup, FormControl, Validators, Control, ControlGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'enter-email',
  templateUrl: 'app/enter-email.component.html'
})

export class EnterEmailComponent implements OnInit {

  // model = new User(1, '', '');
  // submitted = false;
  //
  // form: FormGroup;
  // constructor(private fb: FormBuilder) {}
  //
  // ngOnInit () {
  //
  //   this.form = new FormGroup({
  //       email: new FormControl('', [ Validators.required ])
  //   });
  //
  // }
  //
  // onSubmit() {
  //   this.submitted = true;
  // }
  //
  // active = true;
  //
  // submitEmail() {
  //   this.model = new User(1, '', '');
  //   this.active = false;
  //   setTimeout(() => this.active = true, 0);
  // }

  ngOnInit() {}

  submitted = false;

  user = {
    details: {
      email: '',
      password: ''
    }
  };

  enterEmailForm = new FormGroup({
    details: new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ])
    })
  });


  onSubmit() {
    this.submitted = true;
  }

  // active = true;
  //
  // submitEmail() {
  //   this.active = false;
  //   setTimeout(() => this.active = true, 0);
  // }

  // person = {
  //   name: {
  //     first: '',
  //     last: ''
  //   }
  // };
  //
  // myForm = new FormGroup({
  //   name: new FormGroup({
  //     first: new FormControl('', [
  //       Validators.required,
  //       Validators.minLength(3)
  //     ]),
  //     last: new FormControl()
  //   })
  // });

  // form = new FormGroup({
  //   name: new FormGroup({
  //     first: new FormControl('', Validators.required),
  //     last: new FormControl('', [
  //       Validators.required,
  //       Validators.minLength(3)
  //     ])
  //   })
  // });

}
