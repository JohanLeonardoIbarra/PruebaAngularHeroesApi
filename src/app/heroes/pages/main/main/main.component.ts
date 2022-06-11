import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/heroes/heroes.service';
import { Data, Result } from 'src/app/heroes/interfaces/heroe.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  termino:string = "";

  heroes:Result[] = [];

  getHeroes(termnino:string){
    this.heroesService.buscarHeroes( termnino ).subscribe((data:Data) => {
      this.heroes = data.data.results || [];
    });
  }

  constructor(private heroesService:HeroesService) { }

  ngOnInit(): void {
  }

}
