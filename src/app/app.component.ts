import { Component } from '@angular/core';
//import { timingSafeEqual } from 'crypto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  tittle = 'loteria';

  valor1: number;
  valor2: number;
  valor3: number;
  valor4: number;
  numGanador: string;
  mensaje: string;

  suma: number;

  constructor(){
    this.valor1 = -1;
    this.valor2 = -1;
    this.valor3 = -1;
    this.valor4 = -1;
    this.numGanador = "";
    this.mensaje = "";

    this.suma =0;
  }

  obtenerBalota(){
    let numero : number;
    // uso la funcion math y el trunc para quitar deimales
    numero = (Math.trunc(Math.random() *9 )-1) + (1);
    if(numero < 0 ) numero=0;
    return numero;
  }

  //metodo jugar de tipo void
  jugar(): void{
    this.valor1 = this.obtenerBalota();
    this.valor2 = this.obtenerBalota();
    this.valor3 = this.obtenerBalota();
    this.valor4 = this.obtenerBalota();

    this.numGanador = `El numero ganador es:
     ${this.valor1}
     ${this.valor2}
     ${this.valor3}
     ${this.valor4}`;

    this.suma = this.valor1 + this.valor2 + this.valor3 + this.valor4;
  }

  llamarParImpar(mensaje:string){
    this.mensaje = mensaje;
  }




}
