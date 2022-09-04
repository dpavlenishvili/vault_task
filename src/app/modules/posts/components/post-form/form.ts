import {FormControl, FormGroup, Validators} from "@angular/forms";

export function postForm() {
  return new FormGroup<any>({
    title: new FormControl('', Validators.required),
    body: new FormControl('', Validators.required),
    userId: new FormControl(1)
  })
}
