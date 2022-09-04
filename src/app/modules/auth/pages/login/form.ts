import {FormControl, FormGroup, Validators} from "@angular/forms";

export function loginForm() {
  return new FormGroup<{ email: FormControl, password: FormControl }>({
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ])
  })
}
