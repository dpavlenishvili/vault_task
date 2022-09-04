import {Inject, Injectable} from '@angular/core';
import {BASE_URL} from "../../core/token";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {UserInterface} from "../interfaces/user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl: string | undefined;

  constructor(
    @Inject(BASE_URL) baseUrl: string,
    private httpClient: HttpClient
  ) {
    this.baseUrl = baseUrl
  }

  register(user: UserInterface): Observable<UserInterface[]> {
    return this.httpClient.post<UserInterface[]>(`${this.baseUrl}/userDb`, user)
  }

  setAuthenticatedUser(user: UserInterface): Observable<UserInterface> {
    return this.httpClient.post<UserInterface>(`${this.baseUrl}/authenticatedUser`, user)
  }

  getAuthenticatedUser(): Observable<UserInterface> {
    return this.httpClient.get<UserInterface>(`${this.baseUrl}/authenticatedUser`)
  }

  getUsers(): Observable<UserInterface[]> {
    return this.httpClient.get<UserInterface[]>(`${this.baseUrl}/userDb`)
  }

  logout() {
    return this.httpClient.put(`${this.baseUrl}/authenticatedUser`, {})
  }
}
