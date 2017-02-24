import { Injectable } from '@angular/core';
declare var $:JQueryStatic;
@Injectable()

export class getData{
  searchData = {};
  getHub(data:any):Promise<any>{
    return Promise.resolve($.ajax("https://api.github.com/search/repositories?q="+data));
  }
  getProfile(data:number):Promise<any>{
    console.log(this.searchData)
    return Promise.resolve($.ajax("https://api.github.com/search/users?q="+data));
  }
};
