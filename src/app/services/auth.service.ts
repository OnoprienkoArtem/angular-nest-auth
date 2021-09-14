import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Forgot } from '../model/forgot.interface';
import { Login } from '../model/login.interface';
import { Register } from '../model/register.interface';
import { Reset } from '../model/reset.interface';
import { User } from '../model/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  register(data: Register): Observable<Register> {
    return this.http.post<Register>('http://localhost:8000/api/register', data);
  }

  login(data: Login): Observable<Login> {
    return this.http.post<Login>('http://localhost:8000/api/login', data);
  }

  logout(): Observable<any> {
    return this.http.post('http://localhost:8000/api/logout', {});
  }

  fetchUser(): Observable<User> {
    return this.http.get<User>('http://localhost:8000/api/user');
  }

  forgot(data: Forgot): Observable<any> {
    return this.http.post('http://localhost:8000/api/forgot', data);
  }

  reset(data: Reset): Observable<any> {
    return this.http.post('http://localhost:8000/api/reset', data);
  }
}
