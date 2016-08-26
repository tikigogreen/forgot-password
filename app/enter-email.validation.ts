// import { FormControl } from '@angular/forms';
import { Control } from '@angular/common';

export class EmailValidator {
  static emailFormat(control: Control) {
    // RFC 2822 compliant regex
    if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
      return null;
    } else {
      return { invalidEmail: true };
    }
  }
}

// checkEmailFormat(fieldControl: Control){
//   // return fieldControl.value[0] === 'a' ? null : { notA: true };
//   if (fieldControl.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
//     return null;
//   } else {
//     return { invalidEmail: true };
//   }
// }
