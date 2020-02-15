import { Component, OnInit, OnDestroy, NgZone } from '@angular/core'
import { Router } from '@angular/router'
import { Auth } from 'aws-amplify'
import { Subscription } from 'rxjs'

import { AuthService } from '../../services/auth.service'
import { User } from '../../models/user'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  private subscription: Subscription = new Subscription()
  user: User

  constructor(
    public authService: AuthService,
    private ngZone: NgZone
  ) {
    this.subscription.add(this.authService.auth$.subscribe(user => {
      this.ngZone.run(() => {
        this.user = user
        console.log(this.user)
      })
    })) 
  }

  ngOnInit() { 
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  async signIn() {
    await Auth.federatedSignIn()
  }

}
