import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../modules/auth/services/auth.service";
import {tap} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-authorized',
  templateUrl: './authorized.component.html',
  styleUrls: ['./authorized.component.scss']
})
export class AuthorizedComponent implements OnInit {
  items: any = [
    {
      label: 'Users',
      icon: 'pi pi-fw pi-user',
      items: [
        {
          label: 'logout',
          icon: 'pi pi-fw pi-user-plus',
          command: () => {
            this.authService.logout()
              .pipe(
                tap(() => this.router.navigate(['auth/login']))
              )
              .subscribe()
          }
        }
      ]
    },
  ];

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

}
