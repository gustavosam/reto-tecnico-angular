import { Component } from '@angular/core';
import { Usuario } from './usuario';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { DivisasService } from '../divisas/divisas.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  title: string = "Login Divisas";
  usuario:Usuario = new Usuario();

  constructor(private loginService: LoginService, private router:Router, private divisaService:DivisasService){}


  login(user: Usuario):void{

    this.loginService.login(this.usuario).subscribe(response => {
      console.log(response);
      let payload = JSON.parse(atob(response.access_token.split(".")[1]));
      let accestoken = response.access_token;

      this.divisaService.access_token = accestoken;

      this.router.navigate(['/divisas']);
    })

  }

}
