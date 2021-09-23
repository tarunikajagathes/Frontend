import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BasketComponent } from './basket/basket.component';
import { LoginComponent } from './Login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserService } from './services/user.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuardService } from './services/auth-guard.service';
import { MyInterceptorService } from './services/my-interceptor.service';
import { UserLoginedService } from './services/user-logined.service';
import { CheckoutComponent } from './checkout/checkout.component';
import { UnsavedchangesGuard } from './services/unsavedchanges.guard';
import { UserNotloginedService } from './services/user-notlogined.service';
import { CatogeryComponent } from './catogery/catogery.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BasketComponent,
    LoginComponent,
    SignupComponent,
    CheckoutComponent,
    CatogeryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [UserService,AuthGuardService,UserLoginedService,UnsavedchangesGuard,UserNotloginedService,
    {provide:HTTP_INTERCEPTORS,useClass:MyInterceptorService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
