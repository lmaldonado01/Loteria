import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-par-impar',
  templateUrl: './par-impar.component.html',
  styleUrls: ['./par-impar.component.css']
})
export class ParImparComponent implements OnInit {

  mensaje: string;
  @Input() valor: number;

//envia mensaje al cmponente padre
  @Output() parImpar = new EventEmitter<string>();

  constructor() {

    this.mensaje = '';
    this.valor = -1;
   }
   //metodo que calcula si es par o impar
   calculoParImpar(){
    //if(_valor) this.valor=_valor;

    if(this.valor % 2 == 0)
     this.mensaje = `La suma de las balotas es: ${this.valor} y es un numero Par`;

     else
     this.mensaje = `La suma de las balotas es: ${this.valor} y es un numero Impar`;

    this.parImpar.emit(this.mensaje);
   }

  ngOnInit(): void {
  }

}
