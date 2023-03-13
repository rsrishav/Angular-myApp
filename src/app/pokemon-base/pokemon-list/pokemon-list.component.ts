import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit{

  constructor() {}

  ngOnInit(): void {

  }

  title: string = "Image source Example: Google Photos";
  imgSrc: string = "https://play-lh.googleusercontent.com/ZyWNGIfzUyoajtFcD7NhMksHEZh37f-MkHVGr5Yfefa-IX7yj9SMfI82Z7a2wpdKCA=w240-h480-rw";

  myName: string = "Rish"

  pokemons: Pokemon[] = [{
    id: 1,
    name: "pokemon",
    type: "electric",
    isCool: false,
    isStylish: true
  }, {
    id: 2,
    name: "squirtle",
    type: "water",
    isCool: true,
    isStylish: false
  },{
    id: 3,
    name: "charmander",
    type: "fire",
    isCool: false,
    isStylish: false
  }]

  pokemonName: string = "";



  handleClick(value :any) {
    console.log(value.value);
  }

  handleChange(event: any) {
    this.pokemonName = event.target.value;
  }

  handleRemove(event: Pokemon){
    this.pokemons = this.pokemons.filter((pokemon: Pokemon) => {
      return pokemon.id != event.id;
    })
  }


}
