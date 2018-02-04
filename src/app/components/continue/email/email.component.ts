import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  @Output() messageEvent = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  nextInput(){
    var email = (<HTMLInputElement>document.getElementById('email')).value;
    this.newMethod(email);

  }

  private newMethod(email: string) {
    if(email.length >= 4){
    this.messageEvent.emit({ Email: email });
    }
    else{
      alert("please enter an email");
    }
  }
}
