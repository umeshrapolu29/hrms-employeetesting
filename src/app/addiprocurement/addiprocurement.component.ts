import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpErrorResponse } from '@angular/common/http';

import { FormGroup, FormBuilder } from '@angular/forms';
const URL = 'http://127.0.0.1:3000/users/uploadFile';
class ImageSnippet {
  pending: boolean = false;
  status: string = 'init';
  constructor(public src: string, public file: File) { }
}

@Component({
  selector: 'app-addiprocurement',
  templateUrl: './addiprocurement.component.html',
  styleUrls: ['./addiprocurement.component.scss']
})
export class AddiprocurementComponent implements OnInit {
  empData = { 
   item:'',
    description:'',
    amount:'',
    fullid:localStorage.getItem('fullid')
    
  
  }

  constructor(private _auth: AuthService,
    private _router: Router,
    private _fb: FormBuilder) { }
    selectedFile: ImageSnippet;
    public emoployeeData: FormGroup
    public filesToUpload: Array<File> = [];

  ngOnInit() {
    this.emoployeeData = this._fb.group({
      item: [''],
      description: [''],
      amount: [''],
      
     
    })
  }
  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    // this.fileName = this.filesToUpload[0].name;
  }
  addiprocurement(){
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
  }
    )

}
}
