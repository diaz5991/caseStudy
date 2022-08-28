import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../services/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name = ''

  constructor(private route: ActivatedRoute,
    private service: WelcomeDataService) { }

  ngOnInit(): void {
    // console.log(this.route.snapshot.params['name']) // el nombre es la variable que pasamos en el routing y lo estamos tomando de login.ts
  }

  getWelcomeMessage() {

    console.log(this.service.executeHelloWorldBeanService());


  }

}
