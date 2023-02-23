import { Injectable } from '@angular/core';
//import HttpClient
import{HttpClient}from '@angular/common/http'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public loginAPIUrl :string ="https://localhost:44397/api/Login/";
  public employeeAPIUrl :string ="https://localhost:44397/api/Employee/";


  constructor(private http:HttpClient) { }
  
  postEmployee(data:any){

    return this.http.post<any>(`${this.employeeAPIUrl}add_employee`,data)
    //this is pipe operator 
    .pipe(map((res:any)=>{
      return res;
    }))

  }

  getEmployee(){

    return this.http.get<any>( `${this.employeeAPIUrl}get_all_employees`)
    
    .pipe(map((res:any)=>{
      return res;
    }))

  }
  updateEmployee(data:any){

    return this.http.put<any>(`${this.employeeAPIUrl}add_employee`,data)

    
    .pipe(map((res:any)=>{
      return res;
    }))

  }
  deletEmployee(id:number){
    
    return this.http.delete<any>("http://localhost:3000/posts/"+id)    
    .pipe(map((res:any)=>{
      return res;
    }))

  }
  signup(empObj :any)
  {
   //return this.http.post<any>(this.loginAPIUrl+"signup", empObj)

     return this.http.post<any>(`${this.loginAPIUrl}signup`, empObj)
  }
  login(empObj :any)
  {
   //return this.http.post<any>(this.loginAPIUrl+"signup", empObj)

     return this.http.post<any>(`${this.loginAPIUrl}login`, empObj)
  }
}
