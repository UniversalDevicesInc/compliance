import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import Amplify from 'aws-amplify';
//import API from 'aws-amplify'
//import PubSub from '@aws-amplify/pubsub'
import amplify from './aws-exports';

const { host } = window.location;

// Fix issues with multiple redirect urls.
// Try to figure out which one to use...
if (amplify.oauth.redirectSignIn.includes(',')) {
  const filterHost = url => new URL(url).host === host;
  amplify.oauth.redirectSignIn = amplify.oauth.redirectSignIn
    .split(',')
    .filter(filterHost)
    .shift();
    amplify.oauth.redirectSignOut = amplify.oauth.redirectSignOut
    .split(',')
    .filter(filterHost)
    .shift();
}

Amplify.configure(amplify)

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
