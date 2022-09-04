import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostRoutingModule} from "./post.routing.module";
import {ListComponent} from "./pages/list/list.component";
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {DetailComponent} from "./pages/detail/detail.component";
import {CardModule} from "primeng/card";
import {DialogModule} from "primeng/dialog";
import {PostFormComponent} from "./components/post-form/post-form.component";
import {ReactiveFormsModule} from "@angular/forms";
import {InputTextareaModule} from "primeng/inputtextarea";
import {InputTextModule} from "primeng/inputtext";
import {ToastModule} from "primeng/toast";
import {PaginatorModule} from "primeng/paginator";


@NgModule({
  declarations: [
    ListComponent,
    DetailComponent,
    PostFormComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    TableModule,
    ButtonModule,
    RippleModule,
    CardModule,
    DialogModule,
    ReactiveFormsModule,
    InputTextareaModule,
    InputTextModule,
    ToastModule,
    PaginatorModule
  ]
})
export class PostsModule {
}
