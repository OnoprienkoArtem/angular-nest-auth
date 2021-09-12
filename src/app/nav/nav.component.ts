import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Auth } from '../util/auth';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  authenticated = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    Auth.authEmitter.subscribe((authenticated: boolean) => {
      this.authenticated = authenticated;
    });
  }

  logout(): void {
    this.authService.logout().subscribe(() => {
      this.authenticated = false;
    });
  }
}
