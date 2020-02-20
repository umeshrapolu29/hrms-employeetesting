import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { AuthService } from '../auth.service';
import{HttpErrorResponse } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DilogeComponent } from 'app/diloge/diloge.component';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-downloadpayslips',
  templateUrl: './downloadpayslips.component.html',
  styleUrls: ['./downloadpayslips.component.scss']
})
export class DownloadpayslipsComponent implements OnInit {
  file1:string;
  name1:String;
  fullid:String;
  selected1:any;
  selected2:any;
  success:any;
  Yes:any;
 
  empData={
    file:'',
    month:'',
    year:'',
    fullid:localStorage.getItem('fullid'),
    name:localStorage.getItem('name')
  
  }

  public emoployeeData: FormGroup
  public filesToUpload: Array<File> = [];
   
 
  constructor(private _auth: AuthService,
    private _router: Router,private _snackBar: MatSnackBar,public dialog: MatDialog,private _httpclient:HttpClient) { }
    openSnackBar() {      
       this._snackBar.open("Details saved successfully!!", "", { 
        duration: 5000,
        });  
    }

  ngOnInit() {
    console.log(this.empData.name+"name is")
    this.name1=this.empData.name
    this.fullid=this.empData.fullid
    console.log( this.name1+"name is11")
    // this._httpclient.get('http://localhost:3000/app'
    // )
    // .subscribe(
    //   (res)=>{
    //     console.log("iprocurement")
    //     //console.log("iprocurement")
    //     console.log(res)
    //   })
  
  }
  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    // this.fileName = this.filesToUpload[0].name;
  }
  viewpayslips1()
  {
    console.log("payslip");
  
    let  sendyear = new FormData();
    //senddata.fullid= this.fullid
    // sendyear.append('imageproduct', this.filesToUpload[0], this.filesToUpload[0].name);
    console.log(File+" file")
    sendyear.append('month',this.empData.month);
    console.log(this.empData.month+ "month is1111")
    sendyear.append('year',this.empData.year);
    sendyear.append('fullid',this.empData.fullid);
    //console.log(this.empData +"data is")
   //sendyear.append('name',this.name);
   console.log(this.empData.month+"month is12")
  this._auth.downloadpayslips(sendyear)
  .subscribe((res)=>{
    console.log(res)
  
    // console.log(res[0].email)
   this.file1=res[0].file
         console.log(res[0].file+"photo")
       
    
   //console.log(this.empData)
  }
  )
  }
  download()
{
  let  sendfullid = new FormData();
  sendfullid .append('month',this.empData.month);

  sendfullid .append('year',this.empData.year);
  sendfullid .append('fullid',this.empData.fullid);
  this._auth.download(sendfullid)
  .subscribe((res)=>{
    console.log(res)
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

