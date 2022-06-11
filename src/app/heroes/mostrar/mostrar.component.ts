import { Component, Input, OnInit } from '@angular/core';
import { HeroesService } from '../heroes.service';
import { Result } from '../interfaces/heroe.interface';

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css']
})
export class MostrarComponent{
  @Input("heroes") heroes:Result[] = [];

  agregarAFavoritos(heroe:Result){
    this.heroesService.agregarAFavoritos(heroe);
  }

  constructor(private heroesService:HeroesService) { }
}
