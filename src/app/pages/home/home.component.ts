import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user.interface';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  message = '';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.fetchUser().subscribe(
      (user: User) => this.message = `Hi, ${user.first_name} ${user.last_name}`,
      () => this.message = 'You are not logged in!'
    );
  }

}
