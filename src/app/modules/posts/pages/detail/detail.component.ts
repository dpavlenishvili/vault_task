import {Component, OnInit} from '@angular/core';
import {finalize, Observable, tap} from "rxjs";
import {PostService} from "../../services/post.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  post$: Observable<any> | null = null;
  comments$: Observable<any[]> | null = null;
  displayPostEditModal: boolean = false;
  postId: number;

  constructor(
    private postService: PostService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService
  ) {
    this.postId = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.getPost()
  }

  getPost() {
    this.post$ = this.postService.getPost(this.postId)
      .pipe(
        tap((post) => this.comments$ = this.postService.getComments(post.id))
      );
  }

  onCancel() {
    this.router.navigate(['posts/list'])
  }

  showPostEditDialog() {
    this.displayPostEditModal = true;
  }

  onEdit(post: any) {
    this.postService.updatePost(post, this.postId)
      .pipe(
        tap(() => this.post$ = null),
        tap(() => this.messageService.add({severity: 'success', summary: 'Success', detail: 'Post Updated'})),
        tap(() => this.getPost()),
        finalize(() => this.displayPostEditModal = false)
      )
      .subscribe()
  }
}
