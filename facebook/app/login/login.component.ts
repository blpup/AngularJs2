import { Component, ValueProvider, Inject } from '@angular/core';
import {FacebookApi} from '../facebook.service';
declare const FB: any;
@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: `login.component.html`,
  providers: [FacebookApi],
  styleUrls:['login.component.css']
})
export class LoginComponent {
  constructor(private facebook: FacebookApi) { }
  login() {
    FB.login(function(response: any) {
      if (response.status === 'connected') {
        document.getElementById('status').innerHTML = "We are Connected"
      } else if (response.status === 'not_authorized') {
        document.getElementById('status').innerHTML = "We are not Connected"
      } else {
        document.getElementById('status').innerHTML = "We are not Logged In"
      }
    });
  }
}
