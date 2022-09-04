import {RouterModule, Routes} from "@angular/router";
import {AuthorizedComponent} from "./layout/authorized/authorized.component";
import {UnauthorizedComponent} from "./layout/unauthorized/unauthorized.component";
import {NgModule} from "@angular/core";
import {AuthorizedGuard} from "./guards/authorized.guard";
import {UnauthorizedGuard} from "./guards/unauthorized.guard";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'posts',
    pathMatch: 'full'
  },
  {
    path: '',
    component: AuthorizedComponent,
    canActivate: [AuthorizedGuard],
    children: [
      {
        path: 'posts',
        loadChildren: () => import('./modules/posts/posts.module').then(m => m.PostsModule)
      }
    ]
  },
  {
    path: '',
    component: UnauthorizedComponent,
    canActivate: [UnauthorizedGuard],
    children: [
      {
        path: 'auth',
        loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
      }
    ],
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
