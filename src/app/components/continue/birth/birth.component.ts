import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-birth',
  templateUrl: './birth.component.html',
  styleUrls: ['./birth.component.css']
})
export class BirthComponent implements OnInit {

  @Output() messageEvent = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  nextInput(){
    var birth = (<HTMLInputElement>document.getElementById('birth')).value;
    this.newMethod(birth);
  }

  private newMethod(birth: string) {
    if(birth.length>1){
    this.messageEvent.emit({ DateOfBirth: birth });
    }
    else{
      alert("Please enter a date");
    }
  }
}
