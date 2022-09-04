import {Component, OnInit} from '@angular/core';
import {finalize, Observable, tap} from "rxjs";
import {PostService} from "../../services/post.service";
import {Router} from "@angular/router";
import {MessageService} from "primeng/api";
import {PostDTO} from "../../interfaces/post.interface";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  posts$: Observable<PostDTO[]> | null = null;
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

  showPostCreateDialog() {
    this.displayPostCreateModal = true
  }

  onEdit(post: Partial<PostDTO>) {
    this.router.navigate(['posts', post.id])
  }

  onCreate(post: Partial<PostDTO>) {
    this.postService.createPost(post)
      .pipe(
        tap(() => this.posts$ = null),
        tap(() => this.messageService.add({severity: 'success', summary: 'Success', detail: 'Post created'})),
        tap(() => this.getPosts()),
        finalize(() => this.displayPostCreateModal = false)
      )
      .subscribe()
  }
}
