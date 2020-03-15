import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { PreloadAllModules } from '@angular/router';// Solo para precargar en segundo plano utilizando lazy loading 

const routes: Routes = [
  {
    path: 'customers',// Cuando pidamos esta ruta principal
    loadChildren: './customers/customers.module#CustomersModule'// Cargará este module mediante lazy loading
  },
  {
    path: 'orders',// Cuando pidamos esta ruta principal
    loadChildren: './orders/orders.module#OrdersModule'// Cargará este module mediante lazy loading
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
    //   enableTracing: true, // <-- debugging purposes only // Para realizar seguimiento
    //   preloadingStrategy: PreloadAllModules // Solo para precargar los modulos en segundo plano utilizando lazy loading
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }