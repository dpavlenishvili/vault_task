import {Inject, Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {BASE_URL} from "../../core/token";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private baseUrl: string | undefined;

  constructor(
    @Inject(BASE_URL) baseUrl: string,
    private httpClient: HttpClient
  ) {
    this.baseUrl = baseUrl
  }

  getPosts(): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}/posts`)
  }

  getPost(postId: number): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}/posts/${postId}`)
  }

  getComments(postId: number): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}/posts/${postId}/comments`)
  }

  createPost(post: any): Observable<any> {
    return this.httpClient.post<any>(`${this.baseUrl}/posts`, post)
  }

  updatePost(post: any, postId: number): Observable<any> {
    return this.httpClient.put<any>(`${this.baseUrl}/posts/${postId}`, post)
  }
}
