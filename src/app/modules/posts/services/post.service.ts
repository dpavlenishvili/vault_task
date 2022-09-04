import {Inject, Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {BASE_URL} from "../../../token";
import {HttpClient} from "@angular/common/http";
import {CommentsDTO, PostDTO} from "../interfaces/post.interface";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private readonly baseUrl: string | undefined;

  constructor(
    @Inject(BASE_URL) baseUrl: string,
    private httpClient: HttpClient
  ) {
    this.baseUrl = baseUrl
  }

  getPosts(): Observable<PostDTO[]> {
    return this.httpClient.get<PostDTO[]>(`${this.baseUrl}/posts`)
  }

  getPost(postId: number): Observable<PostDTO> {
    return this.httpClient.get<PostDTO>(`${this.baseUrl}/posts/${postId}`)
  }

  getComments(postId: number): Observable<CommentsDTO[]> {
    return this.httpClient.get<CommentsDTO[]>(`${this.baseUrl}/posts/${postId}/comments`)
  }

  createPost(post: Partial<PostDTO>): Observable<PostDTO> {
    return this.httpClient.post<PostDTO>(`${this.baseUrl}/posts`, post)
  }

  updatePost(post: Partial<PostDTO>, postId: number): Observable<PostDTO> {
    return this.httpClient.put<PostDTO>(`${this.baseUrl}/posts/${postId}`, post)
  }
}
