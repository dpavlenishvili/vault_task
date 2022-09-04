import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot,} from '@angular/router';
import {map, Observable} from 'rxjs';
import {AuthService} from "../modules/auth/services/auth.service";
import {UserInterface} from "../modules/auth/interfaces/user";

@Injectable({
  providedIn: 'root',
})
export class AuthorizedGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService
  ) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.getAuthenticatedUser()
      .pipe(
        map((user: UserInterface | undefined) => {
          if (user?.email) {
            return true
          } else {
            this.router.navigate(['auth/login'])
            return false
          }
        })
      );
  }
}
