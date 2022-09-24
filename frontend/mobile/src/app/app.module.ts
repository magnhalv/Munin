import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthHttpInterceptor, AuthModule} from '@auth0/auth0-angular';
import {LoginComponent} from './login/login.component';

//export const API_URL = 'https://localhost:7085';
export const API_URL = 'https://muninapi.azurewebsites.net';
import config from '../../capacitor.config';
const redirectUri = `${config.appId}://heimdall-local.eu.auth0.com/capacitor/${config.appId}/callback`;

@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, AuthModule.forRoot({
    domain: 'heimdall-local.eu.auth0.com',
    clientId: '0tvSeYWl5G6eOd2PKRleumT2WOpMh4OM', //'fQbFrr5ONbnN5UW4OZ1tz2jOxOfkVGhQ',//,
    cacheLocation: 'localstorage',
    scope: 'read:memory_sets write:memory_sets',
    audience: API_URL,
    redirectUri,
    httpInterceptor: {
      allowedList: [`${API_URL}/*`]
    }
  })],
  providers: [{provide: RouteReuseStrategy, useClass: IonicRouteStrategy}, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthHttpInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent],
})
export class AppModule {
}
