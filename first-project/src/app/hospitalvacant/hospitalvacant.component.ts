import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-hospitalvacant',
  templateUrl: './hospitalvacant.component.html',
  styleUrls: ['./hospitalvacant.component.sass']
})
export class HospitalvacantComponent implements OnInit {
value=  'vacant';
vacstat: any =[
  {id: 1, name: 'Cooper',  seat: 5 },
  {id: 2, name: 'AIIMS',  seat: 2 },
  {id: 3, name: 'RML',  seat: 4 },



];
vacdata: any=[ 
  { srno: 'Sr.No', seat: 'Total Vacant' },



];


vacform= new FormGroup ({
  // id: new FormControl(''),
  name: new FormControl(''),
  seat: new FormControl(''),})
  constructor() { }

  ngOnInit(): void {
  }
  submit(){
    let srno=3;
    let num =1;
    let fin= srno+ num;
    num= num+1;
    this.vacstat[3]= { "id": fin};
    this.vacstat.push(this.vacform.value);
     this.vacform.reset();
   
    }
}
