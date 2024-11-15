import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../heroes/services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../interfaces/user.interface';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register-page',
  templateUrl: 'register-page.component.html',
})
export class RegisterPageComponent {
  public registerForm = new FormGroup({
    email: new FormControl('', Validators.required),
    username: new FormControl('', [Validators.required, Validators.maxLength(25)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });
  constructor(
    private _router: Router, 
    private _authService: AuthService,
    private _snackBar: MatSnackBar
  ) {}

  onValidate(): boolean {
    if (this.registerForm.invalid) return false;
    return true;
  }

  onRegister(): void {
    if (!this.onValidate()) return;
    this._authService
      .onRegister(this.registerForm.value as User)
      .subscribe((response: unknown) => {
        if (typeof response === "boolean") {
              this._snackBar.open("Register was failure, try again", "OK");
              return;
        }
        this._router.navigateByUrl('/auth/login');
      });
  }
}
