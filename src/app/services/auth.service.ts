import { Injectable } from '@angular/core';
import { Auth, Hub } from 'aws-amplify'
import { BehaviorSubject, Observable } from 'rxjs'

import { User } from '../models/user'
import { DataService } from './data.service'


const initialAuthState: User = {
  loggedIn: false,
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

  private _authState: BehaviorSubject<User> = new BehaviorSubject<User>(initialAuthState)
  readonly user$ = this._authState.asObservable()
  public user: User

  constructor(
    private data: DataService
  ) {
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
      this.user = { 
        loggedIn: true, 
        id: data.username, 
        username: data.username, 
        email: data.attributes.email, 
        name: data.attributes.name,
        groups: data.signInUserSession.accessToken.payload["cognito:groups"] || []
      }
      this._authState.next(this.user)
    } else {
      try {
        let user = await Auth.currentAuthenticatedUser()
        if (user && user.signInUserSession) {
          this.user = { 
            loggedIn: true, 
            id: user.username, 
            username: user.username, 
            email: user.attributes.email, 
            name: user.attributes.name,
            groups: user.signInUserSession.accessToken.payload["cognito:groups"] || []
          }
          this._authState.next(this.user)
        }
      } catch (err) {
        console.log(err)
        return
      }
    }
    console.log(`Logged in, running Data init()`)
    this.data.init()
  }
}
