import { Routes } from '@angular/router';


import { UserProfileComponent } from '../../user-profile/user-profile.component';


import { IconsComponent } from '../../icons/icons.component';


import { ViewdetailsComponent } from '../../viewdetails/viewdetails.component';

import { HolidayComponent } from 'app/holiday/holiday.component';
import { LeaverequestComponent } from 'app/leaverequest/leaverequest.component';

import { from } from 'rxjs';
import { NoticeboardComponent } from 'app/noticeboard/noticeboard.component';
import { IprocurementComponent } from 'app/iprocurement/iprocurement.component';
import { AttendenceComponent } from 'app/attendence/attendence.component';


import { ViewnoticeComponent } from 'app/viewnotice/viewnotice.component';
import { AddiprocurementComponent } from 'app/addiprocurement/addiprocurement.component';

import { ViewattendanceComponent } from 'app/viewattendance/viewattendance.component';
import { AuthGuard } from 'app/auth.guard';
import { HomepageComponent } from 'app/homepage/homepage.component';
import { DownloadpayslipsComponent } from 'app/downloadpayslips/downloadpayslips.component';
import { EmployeesigninComponent } from 'app/employeesignin/employeesignin.component';
import { PreviousnoticationComponent } from 'app/previousnotication/previousnotication.component';
import { ForgotpasswordComponent } from 'app/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from 'app/resetpassword/resetpassword.component';




export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
   
    { path: 'user-profile',   component: UserProfileComponent },
    
 
    { path: 'icons',          component: IconsComponent },
  
 
    {path:'viewdetails', component:ViewdetailsComponent},
  
    {path:'holiday',component:HolidayComponent},
    {path:'leaverequest',component:LeaverequestComponent},

    {path:'noticeboard',component:NoticeboardComponent},
    {path:'iprocurement',component:IprocurementComponent},
    {path:'attendence',component:AttendenceComponent},
    
    {path:'viewnotice',component:ViewnoticeComponent},
    {path:'addiprocurement',component:AddiprocurementComponent},
 
    {path:'viewattendance',component:ViewattendanceComponent},
    {path:'homepage',component:HomepageComponent},
    {path:'downloadpayslips',component:DownloadpayslipsComponent},
    {path:'',component:HomepageComponent},
    {path:'previousnotication',component:PreviousnoticationComponent},
   
];
