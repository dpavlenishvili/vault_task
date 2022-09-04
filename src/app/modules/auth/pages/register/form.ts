import {FormControl, FormGroup, Validators} from "@angular/forms";

export function registrationForm() {
  return new FormGroup<any>({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ]),
  })
}
