import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent{

 nombreLower:string='felix jose';
 nombreUpper:string='FELIX JOSE';
 nombreCompleto:string='fEliX jOSe artEAga tRIGo';

 fecha:Date=new Date(); //dia de hoy
}
