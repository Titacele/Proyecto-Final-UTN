import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactoComponent } from './pages/contacto/contacto.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { MapasComponent } from './pages/mapas/mapas.component';
import { AgregarComponent } from './pages/agregar/agregar.component';

// La home siempre primera y el 404 siempre al final
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'buscar', component: BuscarComponent},
  {path: 'mapas', component: MapasComponent},
  {path: 'agregar', component: AgregarComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
