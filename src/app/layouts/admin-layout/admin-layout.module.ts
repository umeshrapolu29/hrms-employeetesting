import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';

import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { IconsComponent } from '../../icons/icons.component';

import { ViewdetailsComponent } from '../../viewdetails/viewdetails.component';

import { HolidayComponent} from '../../holiday/holiday.component';
import{LeaverequestComponent} from '../../leaverequest/leaverequest.component';

import{NoticeboardComponent} from '../../noticeboard/noticeboard.component';
import{IprocurementComponent} from '../../iprocurement/iprocurement.component';
import{AttendenceComponent } from '../../attendence/attendence.component';

import{ViewnoticeComponent} from '../../viewnotice/viewnotice.component';
import{AddiprocurementComponent} from '../../addiprocurement/addiprocurement.component';

import{ViewattendanceComponent} from '../../viewattendance/viewattendance.component';
import{PreviousnoticationComponent } from '../../previousnotication/previousnotication.component';


import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';
import { from } from 'rxjs';
import { HomepageComponent } from 'app/homepage/homepage.component';
import { DownloadpayslipsComponent } from 'app/downloadpayslips/downloadpayslips.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    
  ],
  declarations: [
 
    UserProfileComponent,
  
    
    IconsComponent,

  
    ViewdetailsComponent,
 
    HolidayComponent,
    LeaverequestComponent,
 
    NoticeboardComponent,
    IprocurementComponent,
    AttendenceComponent ,
   
    ViewnoticeComponent,
    AddiprocurementComponent,
  
    ViewattendanceComponent,
    HomepageComponent,
    DownloadpayslipsComponent,
    PreviousnoticationComponent ,
    
  ]
})

export class AdminLayoutModule {}
