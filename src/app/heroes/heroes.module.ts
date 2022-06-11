import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BuscarComponent } from './buscar/buscar.component';
import { FormsModule } from '@angular/forms';
import { MostrarComponent } from './mostrar/mostrar.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { MainComponent } from './pages/main/main/main.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    BuscarComponent,
    MostrarComponent,
    FavoritosComponent,
    MainComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ], exports:[
  ]
})
export class HeroesModule { }
