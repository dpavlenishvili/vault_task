import {Component} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {loginForm} from "./form";
import {AuthService} from "../../services/auth.service";
import {UserInterface} from "../../interfaces/user";
import {Router} from "@angular/router";
import {find, from, switchMap, tap} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: FormGroup = loginForm();

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  checkUser(user: UserInterface) {
    return user.email === this.form.value.email && user.password === this.form.value.password
  }

  onSubmit() {
    if (this.form.valid) {
      this.authService.getUsers()
        .pipe(
          switchMap((users: UserInterface[]) => from(users)),
          find((user: UserInterface) => this.checkUser(user)),
          tap((validUser: UserInterface | undefined) => {
            if (validUser) {
              this.authService.setAuthenticatedUser(validUser).pipe().subscribe();
              this.router.navigate(['/'])
            } else {

            }
          })
        )
        .subscribe()
    }
  }
}
