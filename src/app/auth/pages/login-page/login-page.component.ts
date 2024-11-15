import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../heroes/services/auth.service';
import { User } from '../../interfaces/user.interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-login-page',
  templateUrl: 'login-page.component.html',
})
export class LoginPageComponent {
  public authForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.maxLength(25)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  constructor(
    private _router: Router, 
    private _authService: AuthService,
    private _snackBar: MatSnackBar
) {}

  onValidate(): boolean {
    if (this.authForm.invalid) return false;
    return true;
  }

  onSaveToken(response:HttpResponse<any>){
    const body = response.body;
    const token = body.token;
    sessionStorage.setItem("Bearer-token", token);
  }

     onLogin() {
    if (!this.onValidate()) return;
      this._authService
      .onLogin(this.authForm.value as User)
      .subscribe((response:HttpResponse<unknown> | boolean) => {
        if (typeof response === 'boolean') {
            this._snackBar.open("Bad credentials","Ok");
            return;
        } 
        this.onSaveToken(response);     
        this._router.navigateByUrl('heroes');
      });
  }
}
