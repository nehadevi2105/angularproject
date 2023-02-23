import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators, FormControl} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import{NgToastService} from 'ng-angular-popup'
import { ApiService } from '../shared/api.service';
import { USermodel } from '../shared/model/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm !: FormGroup;
  loginObj = new USermodel();

  constructor(private formbuilder: FormBuilder, private http:HttpClient, private router:Router, private Toast:NgToastService, private api:ApiService) { }

  ngOnInit(): void {
    
    this.loginForm= this.formbuilder.group({
      emailaddress: new FormControl('', Validators.required),
        Password: new FormControl('', Validators.required),
        
    })
  }

  login()
  {
     this.http.get<any>("http://localhost:3000/signupUsers")
     .subscribe(res=>{
       const user= res.find((a:any)=>{
         return a.emailaddress == this.loginForm.value.emailaddress && a.password == this.loginForm.value.Password
        });
       if(user){
         alert("Login successful");
         this.Toast.success({detail:"success meassage",summary:"login succesfull", duration:5000})
         this.loginForm.reset();
         this.router.navigate(['dashboard'])
       } else{
        alert("user not found")
       }
    },err=>{
    this.Toast.info({detail:"info meassage",summary:"login failed try again", duration:5000})
     alert("something went wrong !!")
   })
    this.loginObj.Username = this.loginForm.value.emailaddress;
    this.loginObj.Password = this.loginForm.value.Password;
  this.api.login(this.loginObj)
  .subscribe(res =>{
    alert(res.meassage);
    this.router.navigate(['dashboard'])

  })
  }
 
}
