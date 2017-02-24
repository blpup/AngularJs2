import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { FormsModule }   from '@angular/forms';
import { ProfileComponent } from './profile.component';
import { SearchComponent } from './search.component';
import { RouterModule } from '@angular/router';
import { getData } from './getData.service'
@NgModule({
  imports:      [ BrowserModule,FormsModule, RouterModule.forRoot([
    {path:'search', component:SearchComponent},
    {path:'profile/:id', component:ProfileComponent},
    {path:'', redirectTo:'/search', pathMatch:'full'}
  ])  ],
  declarations: [ AppComponent, ProfileComponent, SearchComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
