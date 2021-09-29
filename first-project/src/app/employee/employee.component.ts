import { Component, OnInit } from '@angular/core';
import { HeroService } from '../service.1/hero.service'; 
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.sass']
})
export class EmployeeComponent implements OnInit {
regstat : any= [];
  constructor(private _empdetail: HeroService) { }

  ngOnInit(): void { 
    this._empdetail.getAll().subscribe(data=> this.regstat = data);
    
  }

}