import { Component, OnInit } from '@angular/core';

import {  Router } from '@angular/router';
import { AuthService } from '../auth.service';
import{HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar, MatDialog } from '@angular/material';




@Component({
  selector: 'app-leaverequest',
  templateUrl: './leaverequest.component.html',
  styleUrls: ['./leaverequest.component.scss']
})
export class LeaverequestComponent implements OnInit {
  mydate=Date.now();

  leavedata={
   type:'',
    fromDate:'',
    toDate:'',
    reason:'',
    fullid:localStorage.getItem('fullid')
  }
  leavestatus:string='';
  date:string='';
  myArray:any;
  

  // constructor(private _auth: AuthService,
  //   private _router: Router) { }
    constructor(private _auth: AuthService,
      private _router: Router,private _snackBar: MatSnackBar,public dialog: MatDialog) { }
      openSnackBar() {      
         this._snackBar.open("submit Successfully !!", "", { 
          duration: 3000,
          });                      
      }


  ngOnInit() {
    let date=new Date()
    console.log(this.date)
   
    const leavestatus = new FormData();
    leavestatus.append('fullid', this. leavedata.fullid);
    console.log( this. leavedata.fullid)
    this._auth.leavestatus(leavestatus)
    .subscribe(
      res=>
      {
        console.log("status")
        console.log("leaverequest")
        console.log(res)
        //this.myArray=res
        this.leavestatus=res[0].status;
        console.log( this.leavestatus)

      }
    )



  }
  leaverequest(){
    const leaveempdata = new FormData();
    leaveempdata.append('type',this. leavedata.type);
    leaveempdata.append('fromDate',this. leavedata.fromDate);
    leaveempdata.append('toDate',this. leavedata.toDate);
    leaveempdata.append('reason', this. leavedata.reason);
    leaveempdata.append('fullid', this. leavedata.fullid);
    console.log(this. leavedata)
    this._auth.leaverequest(leaveempdata)
    .subscribe(
      res => {
        console.log(res)
        if(localStorage.getItem('token')=="undefined")
        {
          this._router.navigate(['/signin'])
        }
        else{
        this._router.navigate(['/homepage'])
        }
      },
      err => {
        if( err instanceof HttpErrorResponse ) {
          if (err.status === 401) {
            this._router.navigate(['/signin'])
          }
        }
      })
      alert("submit successfully")
  }

}
