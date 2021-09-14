import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Reset } from '../../model/reset.interface';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      password: new FormControl(''),
      password_confirm: new FormControl(''),
    });
  }

  submit(): void {
    const formData = this.form.getRawValue();
    const data: Reset = {
      token: this.route.snapshot.params.token,
      password: formData.password,
      password_confirm: formData.password_confirm,
    };

    this.authService.reset(data).subscribe(() => {
      this.router.navigate(['/login']);
    });
  }
}
