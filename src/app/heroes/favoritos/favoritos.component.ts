import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../heroes.service';
import { Result } from '../interfaces/heroe.interface';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {

  heroes:Result[]=this.heroesService.favorites;

  removerDeFavoritos( id:number ){
    this.heroesService.removerDeFavoritos( id );
    this.heroes = this.heroesService.favorites;
  }

  constructor(private heroesService:HeroesService) { }

  ngOnInit(): void {
  }

}
