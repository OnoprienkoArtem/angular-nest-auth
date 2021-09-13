import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: [ './forgot.component.scss' ]
})
export class ForgotComponent implements OnInit {
  form!: FormGroup;
  stateClass = '';
  message = '';

  constructor(
    private authService: AuthService,
  ) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(''),
    });
  }

  submit(): void {
    this.authService.forgot(this.form.getRawValue()).subscribe(
      () => {
        this.stateClass = 'success';
        this.message = 'Email was sent!';
      },
      () => {
        this.stateClass = 'danger';
        this.message = 'Email does not exist!';
      }
    );
  }


}
