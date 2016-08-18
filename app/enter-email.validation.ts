// import { FormControl } from '@angular/forms';
//
// function validateEmail (c: FormControl) {
//   let EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
//
//   return EMAIL_REGEXP.test(c.value) ? null : {
//     validateEmail: {
//       valid: false
//     }
//   };
// }
// export class EmailValidator {
//   validator: Function;
//
//   constructor() {
//     this.validator = validateEmail();
//   }
//
//   validate(c: FormControl) {
//     return this.validator(c);
//   }
// }

import { FormControl } from '@angular/forms';
// import { Control } from '@angular/common';

export class EmailValidator {
  static emailFormatValidator(control: FormControl) {
    // RFC 2822 compliant regex
    if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
      return null;
    } else {
      return { invalidEmail: true };
    }
  }
}
