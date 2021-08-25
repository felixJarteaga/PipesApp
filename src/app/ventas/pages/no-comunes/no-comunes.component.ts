import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent{


  //i18nSelect
  nombre:string='Felix'
  genero:string='masculino'

  invitacionMapa={
    'masculino':'invitarlo',
    'femenino':'invitarla'
  }


  //i18nPlural && slice Pipe
  clientes:string[]=['María','Julia','Camilo','Pepito','Menganito']
  clientesMapa={
    '=0':'no tenemos ningun cliente esperando',
    '=1':'tenemos un cliente esperando',
    '=2':'tenemos 2 clientes esperando',
    'other':'tenemos # clientes esperando'
  }

cambiarCliente(){
this.nombre='Maria'
this.genero='femenino'
}


borrarCliente(){
  this.clientes.pop()
}

//KeyValue Pipe
persona={
  nombre:'Felix',
  edad:30,
  direccion:'Extremadura, España'
}

//Json Pipe

heroes=[
  {
    nombre:'Hulk',
    vuela:false
  },
  {
    nombre:'IronMan',
    vuela:true
  },
  {
    nombre:'Capitan America',
    vuela:false
  },
]

//Async Pipe

miObservable=interval(1000)

valorPromesa=new Promise( (resolve,reject)=>{

  setTimeout(() => {
    resolve('Tenemos data de promesa')
  }, 3000);

} );



}
