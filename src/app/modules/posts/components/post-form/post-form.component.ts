import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent {
  @Output() submitEmitter = new EventEmitter<any>()
  form: FormGroup = new FormGroup<any>({
    title: new FormControl('', Validators.required),
    body: new FormControl('', Validators.required),
    userId: new FormControl(1)
  })

  @Input('formValue')
  set setForm(value: { [key: string]: any; }) {
    this.form.patchValue(value)
  }

  onSubmit() {
    if (this.form.valid) {
      this.submitEmitter.emit(this.form.value);
      this.form.reset();
    }
  }
}
