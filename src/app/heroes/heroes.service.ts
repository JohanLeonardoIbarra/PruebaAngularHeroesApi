import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Heroe, Result, Data } from './interfaces/heroe.interface';
import { Md5 } from 'ts-md5/dist/md5';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private _favorites: Result[] = [];

  apiUrl: string = 'https://gateway.marvel.com/v1';
  apiKey: string = '966db149ce0c6d90e2e0d26c6f897f4f';
  privateKey: string = '253d4d90fdf882f50f53e42c23877d9fda7630fe';

  get favorites() {
    return this._favorites;
  }

  params: HttpParams = new HttpParams()
    .set('ts', 1)
    .set('apikey', this.apiKey)
    .set('hash', Md5.hashStr(1 + this.privateKey + this.apiKey));

  buscarHeroes(termino: string): Observable<Data> {
    this.params = this.params.set('nameStartsWith', termino);
    return this.http.get<Data>(`${this.apiUrl}/public/characters`, {
      params: this.params,
    });
  }

  agregarAFavoritos(heroe: Result) {
    if (!this._favorites.includes(heroe)) {
      this._favorites.push(heroe);
      localStorage.setItem('favoritos', JSON.stringify(this._favorites));
    }
  }

  removerDeFavoritos(id: number) {
    this._favorites = this._favorites.filter((heroe) => heroe.id != id);
    localStorage.setItem('favoritos', JSON.stringify(this._favorites));
  }

  constructor(private http: HttpClient) {
    this._favorites = JSON.parse(localStorage.getItem('favoritos') || '[]');
  }
}
