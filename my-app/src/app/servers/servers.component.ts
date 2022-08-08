import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  isAllowed = true;
  messageTodisplay = "No server Added";
  view = true;
  message="";
  username:any;
  enterStatus=true;

  constructor() { 
    setTimeout(() => {
      this.isAllowed = false;
    },2000);
  }

  ngOnInit(): void {
  }

  onClickServer(){
    this.view = false;
    this.messageTodisplay = "Server Added";
  }

  onEdit(event:Event){
    this.message = (<HTMLInputElement>event.target).value;
  }

  onType(event:Event){
    this.username = (<HTMLInputElement>event.target).value;
    if(this.username.length>0){
      this.enterStatus = false;
    }
    else{
      this.enterStatus = true;
    }
  }

  reset(){
    this.username=""
    this.enterStatus = true;
  }

}
