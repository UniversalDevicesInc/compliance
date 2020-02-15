import { Injectable } from '@angular/core';
import { Auth, Hub } from 'aws-amplify'
import { BehaviorSubject, Observable } from 'rxjs'
import { map } from 'rxjs/operators'

export interface AuthState {
  isLoggedIn: boolean
  username: string | null
  id: string | null
  email: string | null
  name: string | null
}

const initialAuthState = {
  isLoggedIn: false,
  username: null,
  id: null,
  email: null,
  name: null
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly _authState = new BehaviorSubject<AuthState>(initialAuthState)
  auth$: Observable<AuthState> = this._authState.asObservable()
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
        name: data.attributes.name
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
            name: user.attributes.name
          })
        }
      } catch (err) {
        console.log(err)
      }
    }
  }
}
