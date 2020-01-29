import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-noticeboard',
  templateUrl: './noticeboard.component.html',
  styleUrls: ['./noticeboard.component.scss']
})
export class NoticeboardComponent implements OnInit {
  title:string='';
description:string='';
date:string='';
  constructor(private _auth: AuthService,
    private _router: Router, private _httpclient:HttpClient) { }

  ngOnInit() {
   
    this._httpclient.get('http://localhost:3000/NoticeBoard/ViewNotice')
    .subscribe(
      (res)=>{
        console.log(res)
        console.log(res["title"]);
        console.log(res["description"]);

        this.title=res["title"];
        this.description=res["description"];
        this.date=res["date"];

      }
    ) 
  }
  viewnotification()
  {
    this._httpclient.get('http://localhost:3000/NoticeBoard/ViewFiveNotice')
    .subscribe(
      (res)=>{
      }
    )

  }
}

  

