import { Component, OnInit } from '@angular/core';
//here import Formbuilder and formgroup from angular 
import{FormBuilder,FormGroup}from '@angular/forms'
import { ApiService } from '../shared/api.service';
import { Employeemodule } from './employee dashboard module';

@Component({
  selector: 'app-employeedashboard',
  templateUrl: './employeedashboard.component.html',
  styleUrls: ['./employeedashboard.component.css']
})
//here i have create component employeedashboard by using ng g c Employedashboard then 4files gives by angular html,css, ts, module.ts 
export class EmployeedashboardComponent implements OnInit {
   formvalue !: FormGroup;
   employeemoduleobj:Employeemodule = new Employeemodule()
   employeeData !:any;
   showAdd!:boolean;
   showUpdate!:boolean;

  // constructor inject formbuilder 
   constructor(private formbuilder:FormBuilder, private api:ApiService) { }
   //component intialize
  ngOnInit(): void {
    //from formgroups add the form tag in html file 
    this.formvalue = this.formbuilder.group({
     // this is form controller her find input value of these 
      firstname:[''],
      lastname:[''],
      emailid:[''],
      mobileno:[''],
      salary:['']
      
    });
    this.getAllEmployee();
  }
  clickAddemployee()
{
  this.formvalue.reset();
  this.showAdd=true;
  this.showUpdate=false;
}
  Postemployeedetails()
  {    
    this.employeemoduleobj.firstname= this.formvalue.value.firstname;
    this.employeemoduleobj.lastname= this.formvalue.value.lastname;
    this.employeemoduleobj.emailid= this.formvalue.value.emailid;
    this.employeemoduleobj.mobileno= this.formvalue.value.mobileno;
    this.employeemoduleobj.salary= this.formvalue.value.salary;
    
    
    this.api.postEmployee(this.employeemoduleobj)
    .subscribe(res=>{
      console.log(res);
      alert("employee added succesfully");
      let ref=document.getElementById('cancel')
      ref?.click();
      this.formvalue.reset();
      this.getAllEmployee();

    },
     err=>{
      alert("something went wrong");

    })
    
  }
  getAllEmployee(){
    this.api.getEmployee()
    //subscribe is a method fron rxjs using for obserable event using inetrnally in angular 
    .subscribe(res=>{
      this.employeeData=res.userdetail;

    })
  }
  deleteEmployee(row:any){
    this.api.deletEmployee(row.id)
     .subscribe(res=>{
       
       alert("employee deleted");
       this.getAllEmployee();
     })
  
  }
 onEdit(row:any){
  this.showAdd=false;
  this.showUpdate=true;
  this.employeemoduleobj.id=row.id;
   this.formvalue.controls['firstname'].setValue(row.firstname);
   this.formvalue.controls['lastname'].setValue(row.lastname);
   this.formvalue.controls['emailid'].setValue(row.emailid);
   this.formvalue.controls['mobileno'].setValue(row.mobileno);
   this.formvalue.controls['salary'].setValue(row.salary);
 }
 updateemployeedetails(){
  this.employeemoduleobj.firstname= this.formvalue.value.firstname;
  this.employeemoduleobj.lastname= this.formvalue.value.lastname;
  this.employeemoduleobj.emailid= this.formvalue.value.emailid;
  this.employeemoduleobj.mobileno= this.formvalue.value.mobileno;
  this.employeemoduleobj.salary= this.formvalue.value.salary;

  this.api.updateEmployee(this.employeemoduleobj)
  .subscribe(res=>{
    alert("updated successfully");
    let ref=document.getElementById('cancel')
      ref?.click();
      this.formvalue.reset();
      this.getAllEmployee();

  })
 }
}
