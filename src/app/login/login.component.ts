import { AuthService } from './../core/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// const API_URL = 'http://localhost:3000/pessoas';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: any;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  login() {
    const userName = this.loginForm.get('userName').value;
    const password = this.loginForm.get('password').value;
    // console.log('testeeeeee')

    this.authService
    .authenticate(userName, password)
    .subscribe(
      () => this.router.navigateByUrl(''),
      err => {
        console.log('err');
        this.loginForm.reset();
        alert('Usuario invalido')
      })
  }
}
