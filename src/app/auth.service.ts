import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router'
import{Headers} from '@angular/http'
import 'rxjs/add/operator/map'


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _loginUrl = "https://zyclyx-app.herokuapp.com/users/login";
  private _login1Url = "https://zyclyx-app.herokuapp.com/TestAdmin/getUsers";
  private _addemployeeUrl = "https://zyclyx-app.herokuapp.com/TestAdmin/uploads";
  private _leaverequestUrl = "https://zyclyx-app.herokuapp.com/LeaveRequest/LeaveRequest";

  constructor(private http: HttpClient,
    private _router: Router) { }

    loginUser(loginUserData){
      return this.http.post<any>(this._loginUrl, loginUserData)
    }
    loginUser1(loginUserData){
      return this.http.post<any>(this._login1Url, loginUserData)
    }
    getToken() {
      return localStorage.getItem('token')
    }
    loggedIn() {
      return !!localStorage.getItem('token')    
    }
    
  logoutUser() {
    localStorage.removeItem('token')
    this._router.navigate(['/signin'])
  }
addemployee(empData)
{
  return this.http.post<any>(this._addemployeeUrl , empData)

} 
leaverequest(leaveempdata)

{
  const headers=new HttpHeaders();

  return this.http.post("https://zyclyx-app.herokuapp.com/LeaveRequest/LeaveRequest",leaveempdata,
  {headers:headers});
}
uploadSheet(iprocurementdata)
{
  // return this.http.post<any>(this._uploadUrl, upload)
  const headers=new HttpHeaders();
  console.log(iprocurementdata)
  return this.http.post("https://zyclyx-app.herokuapp.com/IProcurement/request",iprocurementdata,
  {headers:headers});
}
// addiprocurement(iprodata){
//   const headers=new HttpHeaders();

//   return this.http.post("http://localhost:3000/LeaveRequest/LeaveRequest",iprodata,
//   {headers:headers});
// }
downloadpayslips(sendyear)
{
  // return this.http.post<any>(this._uploadUrl, upload)
  const headers=new HttpHeaders();
 // console.log(iprocurementdata)
  return this.http.post("https://zyclyx-app.herokuapp.com/payslips/getPayslips",sendyear,
  {headers:headers});
}
holidaytype(holidaytype1)
{
  const headers=new HttpHeaders()
   return this.http.post("https://zyclyx-app.herokuapp.com/Holiday/ViewHoliday",holidaytype1,
   {headers:headers})
}
// getusername(holidaytype1)
// {
//   const headers=new HttpHeaders()
//    return this.http.post("http://localhost:3000/Admin/getUsers",holidaytype1,
//    {headers:headers})
// }
leavestatus(leavestatus)
{
  const headers=new HttpHeaders()
   return this.http.post("https://zyclyx-app.herokuapp.com/LeaveRequest/getStatus",leavestatus,
   {headers:headers})
}
download(sendfullid)
{
  const headers=new HttpHeaders()
  return this.http.post("https://zyclyx-app.herokuapp.com/payslips/download",sendfullid,
  {headers:headers}
  )
}

}
