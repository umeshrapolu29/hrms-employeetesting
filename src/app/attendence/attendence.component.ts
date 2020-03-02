import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar, MatDialog } from '@angular/material';
import { AuthService } from 'app/auth.service';
import { DilogeComponent } from 'app/diloge/diloge.component';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-attendence',
  templateUrl: './attendence.component.html',
  styleUrls: ['./attendence.component.scss']
})
export class AttendenceComponent implements OnInit {
  mydate=Date.now();

  constructor(private _auth: AuthService,
    private _router: Router,private _snackBar: MatSnackBar,public dialog: MatDialog,private _httpclient:HttpClient) { }
    key(event:any)
    {
      console.log(event.target.value);
    }
    openSnackBar() {      
       this._snackBar.open("Details saved Successfully !!", "", { 
        duration: 3000,
        });                      
    }
 
  ngOnInit() {

    this._httpclient.get('http://localhost:3001/user/getpostdata')
    .subscribe(
      (res)=>
      {
        console.log('===>', res)
      
  
      }
    )
    var date=new Date();
    console.log(date);
    console.log("attendence");
    this._httpclient.get('http://localhost:4000/app')
     .subscribe(
       (res)=>{
     
        
   

           console.log(res +"res is")
       
    
  }
     )
}
  
  openDialog(): void {
    const dialogRef = this.dialog.open(DilogeComponent, {
   
    });
  
    dialogRef.afterClosed().subscribe(result => {
     
    });
  }

}
