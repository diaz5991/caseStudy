import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../../services/data/welcome-data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name = '';

  constructor(
    private route: ActivatedRoute,
    private service: WelcomeDataService
  ) { }

  ngOnInit(): void {
    // console.log(this.route.snapshot.params['name']) // el nombre es la variable que pasamos en el routing y lo estamos tomando de login.ts
  }

  getWelcomeMessage(): void {
    //  console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe((response) => {
      this.handlesuccessfulResponse(response)
    },
    (_) => {
      Swal.fire({
        icon: 'error',
        html: 'Error algo salió mal, intentelo más tarde',
        showConfirmButton: true,
        confirmButtonText: 'Reintentar',
        showCloseButton: true
      }).then((resp) => {
        if (resp.isConfirmed) {
          this.getWelcomeMessage();
        }
      });
    });
  }
  handlesuccessfulResponse(response: Object): void {
    console.log(response)
  }
}
