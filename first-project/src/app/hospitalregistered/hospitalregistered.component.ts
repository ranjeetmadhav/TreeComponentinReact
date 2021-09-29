import { Component,  OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-hospitalregistered',
  templateUrl: './hospitalregistered.component.html',
  styleUrls: ['./hospitalregistered.component.sass']
})
export class HospitalregisteredComponent implements OnInit {

value = 'registered';

regstat: any =[
  {id: 1, name: 'Cooper',  seat: 5 },
  {id: 2, name: 'Aiims',  seat: 4},
  {id: 3, name: 'RML',  seat: 3 },
]


 regdata: any=[ 
   { srno: 'SerialNo', seat: 'Total Registered' },

];

editRecord:any;

regform= new FormGroup ({
  // id: new FormControl(''),
  name: new FormControl(''),
  seat: new FormControl(''),})
  constructor() { }

  ngOnInit(): void {
  }
  submit(){
    
    this.regstat.push(this.regform.value);
     this.regform.reset();
   
    }

    viewdata(e: any) {
      console.log('e', e)
      this.regstat.filter((stat: any) => {
        if (stat?.id === e) {
          console.log('clickeddata', stat);
          this.regform.patchValue(stat);
          this.regform.disable();
        }
      })
    }
      deletedata(id: any) {

        this.regstat = this.regstat.filter((data: any) => data.id !== id);
        
      }
    
      editdata(e: any) {
        this.regform.enable();
    
        this.editRecord = e;
        this.regstat.filter((data: any) => {
          if (data?.id === e.id) {
            console.log('clickeddata', data);
            this.regform.patchValue(data);
          }
        })
       }
    
       editsubmit(){
        const index = this.regstat.findIndex((x: any) => x.id === this.editRecord.id);
        this.regstat[index] = this.regform.value;
        this.regform.reset();
      }
    



    
}




