import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router'
import{Headers} from '@angular/http'
import 'rxjs/add/operator/map'


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _loginUrl = "http://localhost:3000/users/login";
  private _login1Url = "http://localhost:3000/Admin/getUsers";
  private _addemployeeUrl = "http://localhost:3000/admin/uploads";
  private _leaverequestUrl = "http://localhost:3000/LeaveRequest/LeaveRequest";

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

  return this.http.post("http://localhost:3000/LeaveRequest/LeaveRequest",leaveempdata,
  {headers:headers});
}
uploadSheet(iprocurementdata)
{
  // return this.http.post<any>(this._uploadUrl, upload)
  const headers=new HttpHeaders();
  console.log(iprocurementdata)
  return this.http.post("http://localhost:3000/IProcurement/request",iprocurementdata,
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
  return this.http.post("http://localhost:3000/payslips/getPayslips",sendyear,
  {headers:headers});
}
holidaytype(holidaytype1)
{
  const headers=new HttpHeaders()
   return this.http.post("http://localhost:3000/Holiday/ViewHoliday",holidaytype1,
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
   return this.http.post("http://localhost:3000/LeaveRequest/getStatus",leavestatus,
   {headers:headers})
}
download(sendfullid)
{
  const headers=new HttpHeaders()
  return this.http.post("http://localhost:3000/payslips/download",sendfullid,
  {headers:headers}
  )
}

}
