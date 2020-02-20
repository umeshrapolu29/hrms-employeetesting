import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-viewdetails',
  templateUrl: './viewdetails.component.html',
  styleUrls: ['./viewdetails.component.scss']
})
export class ViewdetailsComponent implements OnInit {
  employees={token: localStorage.getItem('token')};
  email:String='';
  found:boolean=false;
  image:String='';
  name:string;
  DOJ:string;
  DOB:string;
  phone:string;
  photo:string;
  gender:string;
  id:number;
  leavedata={
   
    fullid:localStorage.getItem('fullid')
  }
  empData = { 
    
    token: localStorage.getItem('token'),
    id:localStorage.getItem('id')
  
  }

  constructor(private _auth: AuthService,
    private _router: Router, private _httpclient:HttpClient) { }

  ngOnInit() {
    this._httpclient.post(`http://localhost:3000/Admin/getUsers`,
{
  fullid:this.leavedata.fullid
})
.subscribe(
  res=>{
    //console.log("hello")
    console.log("inside view details");
    console.log(this.leavedata.fullid)
    console.log(res);
     this.email=res[0].email
     console.log(this.email)
      this.name=res[0].name
      this.id=res[0].fullid
      this.DOJ=res[0].DOJ
      this.DOB=res[0].DOB
      this.phone=res[0].phone
    this.gender=res[0].gender
    this.photo=res[0].photo

  }
)
    // this._httpclient.post('http://localhost:3000/Users/getUsers',
    // {
    //     fullid:'ZYX_2019_08_18'
    // })
    // .subscribe(
    //   (res1)=>{
    //     console.log(res1)
    //   })

    // this._httpclient.get('http://localhost:3000/Users/getUsers')
    // .subscribe(
    //   (res)=>{
     
    //     console.log( localStorage.getItem('token'))
    //     console.log(res);
       
    //           //  this.email=res[0].email;
    //           //   this.image=res[0].photo;
    //           //  this.found=true;

    //          console.log(this.email+"email is");
    //          console.log(this.image+" image is");
            
    //   }
        
    // )
  }

}
