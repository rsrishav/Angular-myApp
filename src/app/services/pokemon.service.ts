import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Pokemon } from '../models/pokemon';
import { Observable } from 'rxjs';

const POKEMON_API = 'http://localhost:3000/pokemon'

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemons(): Observable<Pokemon[]> {
    //   return [{
    //     id: 1,
    //     name: "pokemon",
    //     type: "electric",
    //     isCool: false,
    //     isStylish: true
    //   }, {
    //     id: 2,
    //     name: "squirtle",
    //     type: "water",
    //     isCool: true,
    //     isStylish: false
    //   }, {
    //     id: 3,
    //     name: "charmander",
    //     type: "fire",
    //     isCool: false,
    //     isStylish: false
    //   }]
    // }


    return this.http.get<Pokemon[]>(POKEMON_API)
  }

}
