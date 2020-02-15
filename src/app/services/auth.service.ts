import { Injectable } from '@angular/core';
import { Auth, Hub } from 'aws-amplify'
import { BehaviorSubject, Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { User } from '../models/user'


const initialAuthState: User = {
  isLoggedIn: false,
  username: null,
  id: null,
  email: null,
  name: null,
  groups: []
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly _authState = new BehaviorSubject<User>(initialAuthState)
  auth$: Observable<User> = this._authState.asObservable()
  public loggedIn: boolean

  constructor() {
    this.auth$.subscribe(user => this.loggedIn = user.isLoggedIn)
    this.init()
  }

  private async init() {
    try {
      let user = await Auth.currentAuthenticatedUser()
      if (user) {
        this.setUser(true, user)
      }
    } catch (err) {
      console.log('Not signed in.')
    }
    Hub.listen('auth', ({ payload: { event, data, message }}) => {
      if (event === 'signIn') {
        this.setUser(false, data)
      } else {
        console.log(`Hub auth message: ${event} :: ${message}`)
      }
    })
  }

  private async setUser(existing, data) {
    if (existing) {
      this._authState.next({ 
        isLoggedIn: true, 
        id: data.username, 
        username: data.username, 
        email: data.attributes.email, 
        name: data.attributes.name,
        groups: data.signInUserSession.accessToken.payload["cognito:groups"] || []
      })
    } else {
      try {
        let user = await Auth.currentAuthenticatedUser()
        if (user && user.signInUserSession) {
          this._authState.next({ 
            isLoggedIn: true, 
            id: user.username, 
            username: user.username, 
            email: user.attributes.email, 
            name: user.attributes.name,
            groups: user.signInUserSession.accessToken.payload["cognito:groups"] || []
          })
        }
      } catch (err) {
        console.log(err)
      }
    }
  }
}
