import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-zip-code',
  templateUrl: './zip-code.component.html',
  styleUrls: ['./zip-code.component.css']
})
export class ZipCodeComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  nextInput(){
    
    var zip = (<HTMLInputElement>document.getElementById('zip')).value;
    this.newMethod(zip);

}

  private newMethod(zip: string) {
    if (zip.length >= 5) {
      this.messageEvent.emit({ ZipCode: zip });
    }
    else {
      alert("You must enter a zip code");
    }
  }
}
