import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@modules/auth/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent implements OnInit {

  formLogin: FormGroup = new FormGroup({});
  
  constructor(private _AuthService: AuthService) {
  }
  ngOnInit(): void {
      this.formLogin = new FormGroup({
        email: new FormControl('email@example.com',[
          Validators.required,
          Validators.email
        ]),
        password: new FormControl('',[
          Validators.required,
          Validators.minLength(6)
        ])
      })
  }

  sendLogin(): void {
    const {email, password} = this.formLogin.value;
    
    this._AuthService.sendCredentials(email, password);
    
  }
}
