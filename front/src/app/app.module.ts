import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
// Este módulo de HTTP Client nos permite hacer llamadas a un servidor
// Llamadas a APIs
import { HttpClientModule } from '@angular/common/http';
//Importamos ReactiveFroms para que funcionen los formularios
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { CardComponent } from './components/card/card.component';
import { CardWrapperComponent } from './components/card-wrapper/card-wrapper.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HamburguesaComponent } from './components/hamburguesa/hamburguesa.component';
import { MapasComponent } from './pages/mapas/mapas.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { EmpleadoComponent } from './pages/empleado/empleado.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CardComponent,
    CardWrapperComponent,
    HomeComponent,
    NotFoundComponent,
    BuscarComponent,
    HamburguesaComponent,
    MapasComponent,
    AgregarComponent,
    FooterComponent,
    ClientesComponent,
    EmpleadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
