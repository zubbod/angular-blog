import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { IUser } from 'src/app/shared/interfaces/i-user';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {

  form: FormGroup;
  user: IUser;
  isSubmitted = false;
  message: string;

  constructor(
    public auth: AuthService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {

    this.route.queryParams.subscribe((queryParams: Params) => {
      if (queryParams.logout) {
        this.message = 'Заполните форму авторизации'
      }
    });

    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      returnSecureToken: new FormControl(true),
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    this.isSubmitted = true;
    this.user = this.form.getRawValue() as IUser;
    this.auth.login(this.user).subscribe(() => {
      this.form.reset();
      this.router.navigate(['/admin', 'dashboard']);
      this.isSubmitted = false;
    },
    (error) => this.isSubmitted = false);
  }

}
