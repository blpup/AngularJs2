import { Component,OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import { getData } from './getData.service'
import 'rxjs/add/operator/switchMap'
@Component({
  moduleId:module.id,
  selector:'profile',
  templateUrl:'./profile.component.html',
  styleUrls:['./profile.component.css'],
  providers:[getData]
})

export class ProfileComponent implements OnInit{
  user:any;
  constructor(private route:ActivatedRoute, private getdata:getData ){}
  ngOnInit():void{

    this.route.params.switchMap((params:Params) => this.getdata.getProfile(+params['id'])).subscribe(user => console.log(user));
  }
};
