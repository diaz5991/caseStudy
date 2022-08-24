import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addclaim',
  templateUrl: './addclaim.component.html',
  styleUrls: ['./addclaim.component.css']
})
export class AddclaimComponent implements OnInit {

  model =''
  color =''
  plates=''
  description= ''

  constructor() { }

  ngOnInit(): void {
  }

  addClaim(){

    console.log (this.color,this.description,this.model,this.plates)
  }

}
