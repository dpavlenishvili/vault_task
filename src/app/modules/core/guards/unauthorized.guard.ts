import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot,} from '@angular/router';
import {map, Observable} from 'rxjs';
import {UserInterface} from "../../auth/interfaces/user";
import {AuthService} from "../../auth/services/auth.service";

@Injectable({
  providedIn: 'root',
})
export class UnauthorizedGuard implements CanActivate {
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
            this.router.navigate(['/'])
            return false
          } else {
            return true
          }
        })
      );
  }
}
