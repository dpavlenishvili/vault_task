import {RouterModule, Routes} from "@angular/router";
import {AuthorizedComponent} from "./layout/authorized/authorized.component";
import {UnauthorizedComponent} from "./layout/unauthorized/unauthorized.component";
import {NgModule} from "@angular/core";

export const routes: Routes = [
  {
    path: '',
    component: AuthorizedComponent,
    children: []
  },
  {
    path: '',
    component: UnauthorizedComponent,
    children: [],
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
