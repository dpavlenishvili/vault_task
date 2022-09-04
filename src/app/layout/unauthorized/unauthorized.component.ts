import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-unauthorized',
  template: `
    <div class="unauthorizedLayout">
      <router-outlet></router-outlet>
    </div>`,
})
export class UnauthorizedComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
