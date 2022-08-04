import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-sibling2',
  templateUrl: './sibling2.component.html',
  styleUrls: ['./sibling2.component.css']
})
export class Sibling2Component implements OnInit {


  name : any;
  constructor(private message:MessageService) { }

  ngOnInit(): void {
    this.message.getMessage().subscribe(message =>{
      if(message){
        this.name =message;
      }
    })
  }

}
