import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HospitalregisteredComponent } from './hospitalregistered/hospitalregistered.component';
import { HospitalvacantComponent } from './hospitalvacant/hospitalvacant.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AppRoutingModule } from './app-routing.module';
import { ListComponent } from './list/list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegComponent } from './reg/reg.component';
import { HeroService } from './service.1/hero.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { EmployeeComponent } from './employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    HospitalregisteredComponent,
    HospitalvacantComponent,
    ContactUsComponent,
    ListComponent,
    RegComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
