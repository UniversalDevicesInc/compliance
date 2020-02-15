import { Component, OnInit, OnDestroy, NgZone } from '@angular/core'
import { Subscription } from 'rxjs'
import { Router } from '@angular/router'

import { AuthService } from '../../services/auth.service'
import { User } from '../../models/user'
import { Auth } from 'aws-amplify'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  
  private subscription: Subscription = new Subscription()
  isCollapsed: boolean = true
  user: User

  constructor(
    public authService: AuthService,
    private router: Router,
    private ngZone: NgZone
  ) { 
    this.subscription.add(this.authService.auth$.subscribe(user => {
      this.ngZone.run(() => {
        this.user = user
      })
    }))
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  logout() {
    Auth.signOut()
  }

}
