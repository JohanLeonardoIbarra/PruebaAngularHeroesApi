import { Component, EventEmitter, Output } from '@angular/core';
import { HeroesService } from '../heroes.service';
import { Result } from '../interfaces/heroe.interface';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent{

  error = false;
  termino = "";
  @Output() onSubmit:EventEmitter<string> = new EventEmitter<string>();

  constructor( ) { }

  buscarHeroes(){
    this.error = false
    if(this.termino === ""){
      this.error = true
      return;
    };
    this.onSubmit.emit(this.termino);
  }
}
