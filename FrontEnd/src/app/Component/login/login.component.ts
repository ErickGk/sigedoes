import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import * as Notiflix from 'notiflix';
import { environment } from 'src/environments/environment';
import { NavegacionService } from 'src/app/service/navegacion.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  titulo = "Inicio de Sesión";
  logoCbtis = '.././assets/img/inicio.png';
  forgotimg = '.././assets/img/forgotP.jpg';
  usuario = { "nombre": "", "pass": "" };

  public proyecto: string = environment.proyecto;

  constructor(private auth: AuthService, private router: Router, private nav: NavegacionService) {
     nav._registro= false;
     nav._logout=false;
     }

  ngOnInit(): void {  }
  public registrarse(): void { this.router.navigate(['registro']); }
  public Acceso(): void {
    if (this.usuario.nombre !== "" && this.usuario.pass !== "") {
      try {
        Notiflix.Loading.standard("Accesando");
        this.auth.acceso(this.usuario).subscribe((res: any) => {
          if (res.token !== null && res.token != undefined) {
            localStorage.setItem('color', res.token);
            if (this.auth.isAuth()) {
              this.nav._iflogin= false;
              
              this.nav._homeAlumno= true;
              this.nav._logout= true;
            } else {
              this.nav._homeAlumno = false;
              this.nav._iflogin = true;
              this.nav._logout = true;
            }
            Notiflix.Loading.remove();
            if (this.auth.decodifica().rol == "Admin") {
              this.nav._Administrador=true;
              this.nav._homeAlumno=true;
              this.nav._home = false;
              this.router.navigate(['/admin']);
            } else {
              if (this.auth.decodifica().rol == "Docente") {
                this.nav._docente=true;
                this.nav._homeAlumno=true;
                this.nav._home = false;
                this.router.navigate(['/homeDocente']);
              }
              this.router.navigate(['/homeAlumno']);
            }
          } else if (res.Error == "Usuario y contraseña incorrecta") {
            Notiflix.Loading.remove();
            Notiflix.Notify.warning(res.Error);
          } else {
            Notiflix.Loading.remove();
            Notiflix.Notify.failure(res.Error);
          }
        },
          (error) => {
            // Manejar el error aquí
            Notiflix.Loading.remove();
            Notiflix.Notify.failure("Error : " + "APi rechaza la peticion por dominio no autorizado");
            console.error(error); // Puedes mostrar el error en la consola o en la interfaz de usuario
          }
        );
      } catch (error) {
        Notiflix.Loading.remove();
        Notiflix.Notify.failure("Error : " + "APi rechaza la peticion por dominio no autorizado");
      }

    } else {
      Notiflix.Notify.failure("Usuario o contraseña vacio, llene los campos");
    }
  }
}
