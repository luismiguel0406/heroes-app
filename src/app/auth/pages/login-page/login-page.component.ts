
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login-page',
    templateUrl: 'login-page.component.html'
})
export class LoginPageComponent { 

constructor(private _router : Router) {}

    onLogin():void{
     this._router.navigateByUrl('heroes')
    }
}
