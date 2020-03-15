import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

//PreloadingStrategy: Facilitará metodos para poder gestionar que metodos preargar y cuales no
export class SelectivePreloadingStrategyService implements PreloadingStrategy{
  preloaderModules = [];// Arreglo para debugear los modulos precargados

  constructor() { }

  preload(route: Route, load: () => Observable<any>): Observable<any> {
    // Si exite el metodo route.data y tiene el atributo 'preload'
    if(route.data && route.data['preload']){
      this.preloaderModules.push(route.path);// Agregamos el path al arreglo
      console.log('Preloader: ' + route.path);
      return load();// Retornaremos la funcion observable recibida como parametro
    }else{
      return of(null);// Retornamos un observable nulo
    }
    // throw new Error("Method not implemented.");
  }
}
