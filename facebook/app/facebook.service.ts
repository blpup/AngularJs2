import { Injectable } from '@angular/core';
declare const FB:any;
@Injectable()
export class FacebookApi{
  GetInfo(){
    return new Promise(function(res,rej){
      FB.api('/me','GET',{fields:'first_name,last_name,picture'},function(response:JSON){
        res(response);
      })
    })
  }
};
