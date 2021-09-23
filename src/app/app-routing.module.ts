import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';
import { BasketComponent } from './basket/basket.component';
import { CatogeryComponent } from './catogery/catogery.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './Login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserLoginedService } from './services/user-logined.service';
import { UserNotloginedService } from './services/user-notlogined.service';

const routes: Routes = [
  {path:"",component:HomeComponent },
  {path:"Login",component:LoginComponent,canActivate:[UserLoginedService]},
  {path:"Basket",component:BasketComponent,canActivate:[AuthGuardService]},
  {path:"CheckOut",component:CheckoutComponent,canActivate:[UserNotloginedService]},
  {path:"Signin",component:SignupComponent,canActivate:[UserLoginedService]},
  {path:"About",loadChildren:()=>import("./about/about.module").then((m)=>m.AboutModule)},
  {path:"Catogery/Fruits",component:CatogeryComponent},
  {path:"Catogery/Vegetables",component:CatogeryComponent},
  {path:"Catogery/Bakerys",component:CatogeryComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
