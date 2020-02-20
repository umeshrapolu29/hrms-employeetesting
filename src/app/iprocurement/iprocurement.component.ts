import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DilogeComponent } from 'app/diloge/diloge.component';
import { MatSnackBar, MatDialog } from '@angular/material';

@Component({
  selector: 'app-iprocurement',
  templateUrl: './iprocurement.component.html',
  styleUrls: ['./iprocurement.component.scss']
})
export class IprocurementComponent implements OnInit {
  imageproduct:any;
  item:string='';
  description:string='';
  amount:string='';
  tid:string='';
  item1:string='';
  description1:string='';
  amount1:string='';
  tid1:string='';
  item2:string='';
  description2:string='';
  amount2:string='';
  tid2:string='';
  item3:string='';
  description3:string='';
  amount3:string='';
  tid3:string='';
  empData = { 
    item:'',
     description:'',
     amount:'',
     imageproduct:'',
     fullid:localStorage.getItem('fullid')
     
   
   }
  myArray:any;
  constructor(private _auth: AuthService,
    private _router: Router, private _httpclient:HttpClient,private _fb: FormBuilder,public dialog: MatDialog) { }
    //selectedFile: ImageSnippet;
    public emoployeeData: FormGroup
    public filesToUpload: Array<File> = [];
   


  ngOnInit() {
    this._httpclient.get('http://localhost:3000/IProcurement/getData')
    .subscribe(
      (res)=>{
        console.log("iprocurement")
        //console.log("iprocurement")
        console.log(res)
        this.myArray=res
        console.log(this.myArray[0].item)
        // this.item=res[0].item;
        // this.description=res[0].description;
        // this.amount=res[0].amount;
        // this.tid=res[0].tid;
        // this.item1=res[1].item;
        // this.description1=res[1].description;
        // this.amount1=res[1].amount;
        // this.tid1=res[1].tid;
        // this.item2=res[2].item;
        // this.description2=res[2].description;
        // this.amount2=res[2].amount;
        // this.tid2=res[2].tid;
        // this.item3=res[3].item;
        // this.description3=res[3].description;
        // this.amount3=res[3].amount;
        // this.tid3=res[3].tid;
      }
    )
    

}
fileChangeEvent(fileInput: any) {
  this.filesToUpload = <Array<File>>fileInput.target.files;
  // this.fileName = this.filesToUpload[0].name;
}
addiprocurement1(){
  const iprocurementdata = new FormData();
  // iprocurementdata.append('imageproduct', this.filesToUpload[0], this.filesToUpload[0].name);
  // console.log(File+" file")
  iprocurementdata.append('imageproduct', this.filesToUpload[0], this.filesToUpload[0].name);
  console.log(File+" file")
  iprocurementdata.append('item',this.empData.item);
  iprocurementdata.append('description',this.empData.description);
  iprocurementdata.append('amount',this.empData.amount)
  iprocurementdata.append('fullid',this.empData.fullid)

  console.log(this.empData )
  console.log(iprocurementdata)
  this._auth.uploadSheet(iprocurementdata)
  .subscribe(
    (res) => {
      console.log(res)
      //console.log(this.empData.date1 )
      console.log(this.empData.amount )
      console.log("hello")
}
  )

}
addiprocurement()
{
  this._httpclient.get('http://localhost:3000/IProcurement/update')
    .subscribe(
      (res)=>{
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
