import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouterModule } from './app-router.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

//Cambiar el  local de la app
import localEsHN from "@angular/common/locales/es-HN";
import localEsFr from "@angular/common/locales/fr";
import { registerLocaleData } from "@angular/common";
registerLocaleData( localEsHN)
registerLocaleData( localEsFr)


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    SharedModule,
    AppRouterModule,
    VentasModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-HN'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
