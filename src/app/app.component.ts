import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ProyectAngular';
    //tipos de datos

  //numéricos

  Numero1:number=12;
  Numero2:number=12+3;
  

  //string

  cadena1:string = "Hola mundo";

  //boolean

  verdad:boolean=true;

  //any

  any1:any='aca se puede de todo '+5;

  //array

  array:any={nombre:'stiven',apellido:'Mazo'};

}
