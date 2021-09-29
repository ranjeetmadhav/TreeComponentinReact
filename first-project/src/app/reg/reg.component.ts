import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.sass']
})
export class RegComponent implements OnInit {
  regform= new FormGroup ({
    // id: new FormControl(''),
    name: new FormControl(''),
    seat: new FormControl(''),})
    @Output() newItemEvent = new EventEmitter<any>();
     addNewItem(value: any) {
        this.newItemEvent.emit(value);
      }
  
    
      
  constructor() { }

  ngOnInit(): void {
  }
  submit(){
    let srno=3;
    let num =1;
    let fin= srno+ num;
    num= num+1;
    
   
    

    
  
  //   this.regstat[3]= { "id": fin};
  // this.regstat.push(this.regform.value);
  // this.regform.reset();
  
}
}


