import { Component, OnInit } from '@angular/core';

export class MyClaimsModel{

  constructor(

    public id:number,
    public description: String,
    public status: boolean,
    public creationDate :Date

  ){

  }
}

@Component({
  selector: 'app-my-claims',
  templateUrl: './my-claims.component.html',
  styleUrls: ['./my-claims.component.css']
})
export class MyClaimsComponent implements OnInit {

  claimsTable = [
    new MyClaimsModel(1, 'this is a description', false, new Date()),
    new MyClaimsModel(2, 'this is a desfcription', false, new Date()),
    new MyClaimsModel(3, 'this is a description', false, new Date())
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
