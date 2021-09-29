import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';



import { HospitalregisteredComponent } from './hospitalregistered/hospitalregistered.component'
import { HospitalvacantComponent } from './hospitalvacant/hospitalvacant.component'
import { ContactUsComponent } from './contact-us/contact-us.component'
import { RegComponent } from './reg/reg.component';
import { EmployeeComponent } from './employee/employee.component';


const routes : Routes = [
  { path: '', redirectTo: 'home' , pathMatch:'full' },
  { path: 'hospitalregistered', component: HospitalregisteredComponent },
  { path: 'hospitalvacant', component: HospitalvacantComponent },
  { path: 'contactus', component: ContactUsComponent },
  {path:'reg', component: RegComponent},
  {path:'employee', component: EmployeeComponent }
];


@NgModule({
  declarations: [],
  
    imports: [
      CommonModule,
      RouterModule.forRoot(routes)
  
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

