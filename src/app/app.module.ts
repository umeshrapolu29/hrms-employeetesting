import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';



import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { UserProfileComponent } from './user-profile/user-profile.component';


import { IconsComponent } from './icons/icons.component';
import { FullCalendarModule } from '@fullcalendar/angular'





import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { SigninComponent } from './signin/signin.component';
import { HttpClient } from '@angular/common/http';
import { AuthGuard } from './auth.guard';
import {AuthService} from './auth.service';
import { TokenInterceptorService } from './token-interceptor.service';
import { EmployeesigninComponent } from './employeesignin/employeesignin.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { DilogeComponent } from './diloge/diloge.component';
import { MatTooltipModule } from '@angular/material';

import { ForgotpasswordComponent } from 'app/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from 'app/resetpassword/resetpassword.component';





@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule ,
    FullCalendarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatSnackBarModule,
    MatTooltipModule,
    
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    SigninComponent,
    EmployeesigninComponent,
    DilogeComponent,
    ResetpasswordComponent,
    ForgotpasswordComponent,
    
  


    ],
    entryComponents:
    [
      DilogeComponent,
    ],

    

  providers: [AuthGuard,AuthService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
