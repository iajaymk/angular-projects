import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-assign',
  templateUrl: './directives-assign.component.html',
  styleUrls: ['./directives-assign.component.css']
})
export class DirectivesAssignComponent implements OnInit {

  password = "tuna";
  buttonContent = "Display Details"
  display = false;
  clicked:any= [];
  senses = 0;
  logs = false;

  constructor() { }

  ngOnInit(): void {
  }

  displayDetails(){
    this.senses++;
    this.clicked.push(this.senses);
    this.display = !this.display;
    if(this.display === true){
      this.buttonContent="Hide Details"
    }
    else{
      this.buttonContent="Display Details"
    }
    console.log(this.clicked)
  }

  displayLogs(){
    this.logs = !this.logs;
  }


}
