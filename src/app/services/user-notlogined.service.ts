import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserNotloginedService implements CanActivate {

  constructor(private route: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!sessionStorage.getItem('currentUser')) {
      this.route.navigate(['']);
      return false;
    }
    else {
      return true;
    }
  }
}
