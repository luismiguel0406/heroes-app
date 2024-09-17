import { NgModule } from "@angular/core";
import { AuthRoutingModule } from "./auth-routing.module";
import { LayoutPageComponent } from "./pages/layout-page/layout-page.component";
import { RegisterPageComponent } from "./pages/register-page/register-page.component";
import { LoginPageComponent } from "./pages/login-page/login-page.component";

@NgModule({
    imports:[AuthRoutingModule],
    declarations:[LayoutPageComponent, RegisterPageComponent, LoginPageComponent],
    exports:[LayoutPageComponent, RegisterPageComponent, LoginPageComponent]
})

export class AuthModule { };