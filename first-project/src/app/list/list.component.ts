import { Component,Input, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {
  @Input() heading: any;
  @Input() liststat: any;
  @Input() headdata: any;
  @Output() detaildata: any = new EventEmitter();
  @Output() deletedata: any = new EventEmitter();
  @Output() editdata : any = new EventEmitter();
  name= "sweety";
  constructor() { }

  ngOnInit(): void {
  }
  view(stat: any) {
    this.detaildata.emit(stat.id);
  }
delete(stat:any){
  this.deletedata.emit(stat.id);
}

edit(stat:any){
  this.editdata.emit(stat);
}





}
