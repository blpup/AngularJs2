import { Component,OnInit } from '@angular/core';
import { FacebookApi } from './facebook.service';
import {Router} from '@angular/router'
declare const FB: any;
@Component({
  selector: 'my-app',
  template: `<router-outlet></router-outlet>`,
  providers:[FacebookApi]
})
export class AppComponent implements OnInit {

  constructor(private facebook:FacebookApi,private router:Router) { }

  ngOnInit(){
    FB.init({
        appId: '2193014027589946',
        xfbml: true,
        version: 'v2.8'
    });
    FB.getLoginStatus((response:any)=> {
        if (response.status === 'connected') {
          this.router.navigateByUrl('/homepage');
        } else if (response.status === 'not_authorized') {
              this.router.navigateByUrl('/login');
        } else {
              this.router.navigateByUrl('/login');
        }
    })
  };
}
