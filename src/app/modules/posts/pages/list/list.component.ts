import {Component, OnInit} from '@angular/core';
import {finalize, Observable, tap} from "rxjs";
import {PostService} from "../../services/post.service";
import {Router} from "@angular/router";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  posts$: Observable<any[]> | null = null;
  displayPostCreateModal: boolean = false;

  constructor(
    private postService: PostService,
    private router: Router,
    private messageService: MessageService
  ) {
  }

  ngOnInit(): void {
    this.getPosts()
  }

  getPosts() {
    this.posts$ = this.postService.getPosts();
  }

  onPostEdit(post: any) {
    this.router.navigate(['posts/list', post.id])
  }

  onCreate(post: any) {
    this.postService.createPost(post)
      .pipe(
        tap(() => this.posts$ = null),
        tap(() => this.messageService.add({severity: 'success', summary: 'Success', detail: 'Post created'})),
        tap(() => this.getPosts()),
        finalize(() => this.displayPostCreateModal = false)
      )
      .subscribe()
  }

  showPostCreateDialog() {
    this.displayPostCreateModal = true
  }
}
