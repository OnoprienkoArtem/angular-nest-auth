import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user.interface';
import { AuthService } from '../../services/auth.service';
import { Auth } from '../../util/auth';

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
      (user: User) => {
        this.message = `Hi, ${user.first_name} ${user.last_name}`;
        Auth.authEmitter.emit(true);
      },
      () => {
        this.message = 'You are not logged in!';
        Auth.authEmitter.emit(false);
      }
    );
  }

}
