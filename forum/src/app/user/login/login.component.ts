import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoading = false;
  errorMessage: string = null;
  form = {
    email: {
      touched: false,
      value: ''
    },
    pass: {
      touched: false,
      value: ''
    }
  };

  get showEmailError(): boolean {
    return this.form.email.touched && this.form.email.value.length === 0;
  }

  get showPassError(): boolean {
    return this.form.pass.touched && this.form.pass.value.length === 0;
  }

  get hasFormErrors(): boolean {
    return this.form.email.value.length === 0 || this.form.pass.value.length === 0;
  }

  constructor(
    private userService: UserService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
  }

  updateInputValue(name: 'email' | 'pass', value): void {
    this.form[name].value = value;
    this.form[name].touched = true;
  }

  submitFormHandler(): void {
    const {email: {value: email}, pass: {value: password}} = this.form;
    this.isLoading = true;
    this.errorMessage = '';
    this.userService.login({email, password}).subscribe({
      next: (data) => {
        this.isLoading = false;
        this.router.navigate(['/']);
      },
      error: (err) => {
        this.errorMessage = 'ERROR!';
        this.isLoading = false;
      }
    });
  }
}
