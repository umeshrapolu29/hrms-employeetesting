import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Router } from '@angular/router';
import { AuthService } from '../auth.service';
import{HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  name:string='';
  password:number;
  name1:string='';
  name2:string='jhsfdgkis'

  leavedata={
    type:'',
     fromDate:'',
     toDate:'',
     reason:'',
     fullid:localStorage.getItem('fullid')
   }
 
  loginUserData = {
    fullid:"",
    password:"",
   
  }

  constructor(private _auth: AuthService,
              private _router: Router) { }

  // onKey(event:any){
  //   this.name=event.target.value;
  //   console.log(this.name)

  // }
  // onKey1(event:any){
  //   this.password=event.target.value;
  //   console.log(this.password)

  // }

 
  ngOnInit() {

   
  }
  
  loginUser() {
    // const holidaytype1= new FormData();
    // // leaveempdata.append('type',this. leavedata.type);
    // // leaveempdata.append('fromDate',this. leavedata.fromDate);
    // // leaveempdata.append('toDate',this. leavedata.toDate);
    // holidaytype1.append('reason', this. loginUserData.password);
    // holidaytype1.append('fullid', this. loginUserData.fullid);
    // console.log(this. loginUserData.password)
    // //console.log(this. holidaytype1)
    // this._auth.getusername(holidaytype1)
    // .subscribe(
    //   res => {
    //     console.log(res)
    //     console.log("fullid")
    //   }
    // )
    console.log(this.loginUserData)
    this._auth.loginUser1(this.loginUserData)
    .subscribe(
      res => {
        console.log("second")
        console.log(res);
        this.name1="sai";
        
      }     
    )
   
    console.log(this.loginUserData)
    this._auth.loginUser(this.loginUserData)
    .subscribe(
      res => {
        console.log(res)
        localStorage.setItem('token', res.token)
        localStorage.setItem('fullid',res.fullid)
        if(localStorage.getItem('token')=="undefined")
        {
          
          this._router.navigate(['/signin'])
        }
        else{
          console.log("login successfull");
        this._router.navigate(['/homepage'])
        }
      },
      err => {
        if( err instanceof HttpErrorResponse ) {
          if (err.status === 401) {
            console.log("error");
            this._router.navigate(['/signin'])
          }
        }
      }
    ) 
   

  

  }
  // userlogin()
  //   {
  //     console.log(this.name)
  //     this.httpClient.get(`http://localhost:3000/admin/data`)
  //     .subscribe(
  //       (data:any[])=>
  //       {
  //       console.log(data);

          
  //       }
  //    )
  //   }





//     postProfile(){
//        console.log(this.name)
//       console.log(this.password)
//       this.httpClient.post(`http://localhost:3000/admin/login`,
//       {
//         email:this.name,
//          password: this.password
//       })
//       .subscribe(
//         (data:any) => {
//           console.log(data);
//           localStorage.setItem('token',data.token)
//           if(!!localStorage.getItem('token') &&  localStorage.getItem('token')!="undefined")
//           {
//             console.log("in if"+!!localStorage.getItem('token'))
//           this._router.navigate(['/addnotice'])
//           }
//           else if(localStorage.getItem('token')=="undefined"){
//             console.log("in else"+!!localStorage.getItem('token'))
//             this._router.navigate(['/signin'])
//           }
//         }
//       )
//     }

//       // verif method
// loggedin()
// {
//   return !!localStorage.getItem('token')
// }

}

