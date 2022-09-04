import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {postForm} from "./form";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent {
  form: FormGroup = postForm();
  @Output() submitEmitter = new EventEmitter<any>()

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
