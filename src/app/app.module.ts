import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AuthorizedComponent} from './layout/authorized/authorized.component';
import {UnauthorizedComponent} from './layout/unauthorized/unauthorized.component';
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app.routing.module";
import {BASE_URL} from "./modules/core/token";
import {environment} from "../environments/environment";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MessageService} from "primeng/api";
import {MenubarModule} from "primeng/menubar";

@NgModule({
  declarations: [
    AppComponent,
    AuthorizedComponent,
    UnauthorizedComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterOutlet,
    AppRoutingModule,
    HttpClientModule,
    MenubarModule
  ],
  providers: [
    {provide: BASE_URL, useValue: environment.apiBaseUrl},
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
