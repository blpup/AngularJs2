import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent }  from './app.component';
import { HomepageComponent } from './HomePage/homepage.component';
import { LoginComponent } from './login/login.component';
@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot([
    {path:'homepage',component:HomepageComponent},
    {path:'login', component:LoginComponent},
    {path:'',redirectTo:'login', pathMatch:'full'}
  ]) ],
  declarations: [ AppComponent, HomepageComponent, LoginComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
