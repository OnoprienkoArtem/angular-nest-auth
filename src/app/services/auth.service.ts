import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../model/login.interface';
import { Register } from '../model/register.interface';

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
}
