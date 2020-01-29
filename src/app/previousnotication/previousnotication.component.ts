import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { dateToLocalArray } from '@fullcalendar/core/datelib/marker';

@Component({
  selector: 'app-previousnotication',
  templateUrl: './previousnotication.component.html',
  styleUrls: ['./previousnotication.component.scss']
})
export class PreviousnoticationComponent implements OnInit {
  title:string='';
  description:string='';
  date:string='';
  id:string=';'
  title1:string='';
  description1:string='';
  date1:string='';
  id1:string=';'
  title2:string='';
  description2:string='';
  date2:string='';
  id2:string=';'
  title3:string='';
  description3:string='';
  date3:string='';
  id3:string=';'
  title4:string='';
  description4:string='';
  date4:string='';
  id4:string=';'
  myArray:any;
  constructor(private _auth: AuthService,
    private _router: Router, private _httpclient:HttpClient) { }
  ngOnInit() {
    this._httpclient.get('http://localhost:3000/NoticeBoard/ViewFiveNotices')
    .subscribe(
      (res)=>{
        console.log(res)
        this.myArray=res;
        console.log(this.myArray[0].id)
        this.title=res[0].title;
        this.description=res[0].description;
        this.date=res[0].date;
        this.id=res[0].id;
        this.title1=res[1].title;
        this.description1=res[1].description;
        this.date1=res[1].date;
        this.id1=res[1].id;
        this.title2=res[2].title;
        this.description2=res[2].description;
        this.date2=res[2].date;
        this.id2=res[3].id;
        this.title3=res[3].title;
        this.description3=res[3].description;
        this.date3=res[3].date;
        this.id3=res[3].id;
        this.title4=res[4].title;
        this.description4=res[4].description;
        this.date4=res[4].date;
        this.id4=res[4].id;
      }
    )
  }

}
