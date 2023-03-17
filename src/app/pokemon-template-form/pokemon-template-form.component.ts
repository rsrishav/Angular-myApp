import { Component, OnInit } from '@angular/core';
import { Pokemon, PokemonType } from '../models/pokemon';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-template-form',
  templateUrl: './pokemon-template-form.component.html',
  styleUrls: ['./pokemon-template-form.component.css']
})

export class PokemonTemplateFormComponent implements OnInit {
  pokemon !: Pokemon;
  pokemonType: PokemonType[] = [
    {
      key: 0,
      value: "Fire"
    },{
      key: 1,
      value: "Water"
    },{
      key: 2,
      value: "Rock"
    }
  ]

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.pokemonService.getPokemon(1).subscribe((data: Pokemon) => {
      this.pokemon = data;
      debugger;
    })
  }

  handleFormData(object: any){
    console.log(object);
  }
}
