import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {

  @Output() messageEvent = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  nextInput(){
    var fname = (<HTMLInputElement>document.getElementById('fname')).value;
    var lname = (<HTMLInputElement>document.getElementById('lname')).value;
    this.name(fname,lname);
  }
  private name(fname:string,lname:string) {
    if(fname.length && lname.length >= 1){
      this.messageEvent.emit({FirstName:fname,LastName:lname});
    }
    else{
      alert("Please enter your first name and last name");
    }
  }
}
