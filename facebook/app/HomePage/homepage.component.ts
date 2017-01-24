import { Component, OnInit } from '@angular/core';
import { FacebookApi} from '../facebook.service';
declare const FB:any;
@Component({
  moduleId: module.id,
  selector: 'homepage',
  templateUrl: 'homepage.component.html',
  providers: [FacebookApi]
})
export class HomepageComponent implements OnInit {
  userData: {};
  constructor(private facebook: FacebookApi) { };
  ngOnInit() {
    FB.getLoginStatus((response:any)=> {
        if (response.status === 'connected') {
              this.facebook.GetInfo().then(res => this.userData = res);
        } else if (response.status === 'not_authorized') {
              alert('not_authorized')
        } else {
              alert('Not loggedin')
        }
    })
  };
};
