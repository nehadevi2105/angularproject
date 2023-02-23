import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';
import { USermodel } from '../shared/model/user.model';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public signupForm!: FormGroup;
  public signupObj =new USermodel();

  constructor(private formbuilder: FormBuilder, private http:HttpClient, private router:Router, private api:ApiService) { }

  ngOnInit(): void {
    this.signupForm= this.formbuilder.group({
    fullname:['',Validators.required],
    username:['',Validators.required],
    mobileno:['',Validators.required],
    Password:['',Validators.required],
    usertype:['',Validators.required]
  
    })
  }
  signup(){
    
      this.http.post<any>("http://localhost:3000/signupUsers", this.signupForm.value)
     .subscribe(res=>{
       alert("signup successfull");
      this.signupForm.reset();
      this.router.navigate(['login']);
    }, err=>{
      alert("something went wrong")
      }
     )}

 
}
