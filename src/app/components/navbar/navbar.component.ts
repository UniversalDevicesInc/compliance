import { Component, OnInit, OnDestroy, NgZone } from '@angular/core'
import { Subscription } from 'rxjs'
import { Router } from '@angular/router'
import { Auth } from 'aws-amplify'

import { AuthService } from '../../services/auth.service'
import { DataService } from '../../services/data.service'

import { User } from '../../models/user'


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  
  private subscription: Subscription = new Subscription()
  isCollapsed: boolean = true
  user: User
  currentDomain$
  domain$
  dataLoaded$

  constructor(
    public authService: AuthService,
    public dataService: DataService,
    private router: Router,
    private ngZone: NgZone
  ) { 
    this.subscription.add(this.authService.user$.subscribe(user => {
      this.ngZone.run(() => {
        this.user = user
      })
    }))
  }

  ngOnInit() {
    this.domain$ = this.dataService.domain$
    this.dataLoaded$ = this.dataService.dataLoaded$
    this.currentDomain$ = this.dataService.currentDomain$
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  async login() {
    await Auth.federatedSignIn()
  }

  logout() {
    Auth.signOut()
  }

}
