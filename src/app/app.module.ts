import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeedashboardComponent } from './employeedashboard/employeedashboard.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NgToastModule } from 'ng-angular-popup';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/*and then install json server npm install -g json-server
     then find a link http://localhost:3000/posts and then create service then fine two file api.service.ts 
     and api.service.spc.ts, and also import httpclientmodule on app.module.ts then on blew also import httpclientmodule   */

@NgModule({
  declarations: [
    AppComponent,
    EmployeedashboardComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgToastModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
