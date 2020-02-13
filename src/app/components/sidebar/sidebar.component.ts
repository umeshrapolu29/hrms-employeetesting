import { Component, OnInit } from '@angular/core';
//import{ SigninComponent} from './app/signin.component';
//import { SigninComponent } from './signin.component';
import {  Router } from '@angular/router';
//import { AuthService } from '../app/components/auth.service';
import{HttpErrorResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
//import { Router } from '@angular/router';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
   
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Add Employee',  icon: 'speedometer', class: '' },
    { path: '/user-profile', title: 'View Employee Details',  icon:'person', class: '' },
    { path: '/table-list', title: 'View Holidays',  icon:'content_paste', class: '' },
    { path: '/typography', title: 'Leave Request',  icon:'library_books', class: '' },
    { path: '/icons', title: 'Notice Board',  icon:'bubble_chart', class: '' },
    { path: '/maps', title: 'Iprocurement',  icon:'location_on', class: '' },
    { path: '/notifications', title: 'Attendence',  icon:'notifications', class: '' },

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  name:string='';

  photo:string;
  leavedata={
   
     fullid:localStorage.getItem('fullid')
   }
   id=this.leavedata.fullid;
   
   //console.log(this.leavedata.fullid)

  constructor(private http: HttpClient,private _router: Router){}

  ngOnInit() {
    
    console.log(this.leavedata.fullid)
this.http.post(`https://zyclyx-app.herokuapp.com/TestAdmin/getUsers`,
{
  fullid:this.leavedata.fullid
})
.subscribe(
  data=>{
    //console.log("hello")
    localStorage.setItem('name',data[0].name)
    console.log(this.leavedata.fullid)
    console.log(data);
     this.name=data[0].name
     console.log(this.name);
     this.photo=data[0].photo

  }
)
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
  logoutUser(){
    localStorage.removeItem('token')
this._router.navigate(['/signin'])
}

myfun() {
  $(".rotate").click(function () {
    $(this).toggleClass("down");
})
}
}

