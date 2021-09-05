import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent  {

  enMayusculas:boolean=true;

  ordernarPor:string='';

  heroes:Heroe[]=[
    {
      nombre:'Hulk',
      vuela:false,
      color:Color.verde
    },
    {
      nombre:'BlackPanther',
      vuela:false,
      color:Color.negro
    },
    {
      nombre:'Capitan America',
      vuela:false,
      color:Color.azul
    },
    {
      nombre:'IronMan',
      vuela:true,
      color:Color.rojo
    },
     {
      nombre:'Vision',
      vuela:true,
      color:Color.rojo
    },
    
  ]

cambiarmayusMinus(  ){
this.enMayusculas=!this.enMayusculas;
}

cambiarOrden( valor:string){
  this.ordernarPor=valor;
  
}

}
