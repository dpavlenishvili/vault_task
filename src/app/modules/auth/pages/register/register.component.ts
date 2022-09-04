import {Component} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {registrationForm} from "./form";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  form: FormGroup = registrationForm();

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  onSubmit() {
    this.router.navigate(['auth/login'])
    // if (this.form.valid) {
    //   this.authService.register(this.form.value)
    //     .pipe(
    //       tap(() => this.router.navigate(['auth/login']))
    //     )
    //     .subscribe()
    // }
  }
}
