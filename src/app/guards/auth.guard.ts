import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Auth } from 'aws-amplify'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router
  ) {}

  async canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    try {
      const result = await Auth.currentAuthenticatedUser()
      return result ? true : false
    } catch {
      await Auth.federatedSignIn()
      return false
    }
  }
}
