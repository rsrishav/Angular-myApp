import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Pokemon, PokemonType } from '../models/pokemon';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-template-form',
  templateUrl: './pokemon-template-form.component.html',
  styleUrls: ['./pokemon-template-form.component.css']
})

export default class PokemonFormComponent implements OnInit {
  pokemon !: Pokemon;
  pokemonType: PokemonType[] = [
    {
      key: 0,
      value: "Fire"
    }, {
      key: 1,
      value: "Water"
    }, {
      key: 2,
      value: "Rock"
    }
  ]

  constructor(private pokemonService: PokemonService, private router: Router,
    private route: ActivatedRoute) { }

    ngOnInit() {
      this.pokemon = {} as Pokemon;
      this.route.params.subscribe((data: Params) => {
          return this.pokemonService.getPokemon(data['id']).subscribe((data: Pokemon) => {
            this.pokemon = data;
        });
      })
    }

  back() : void{
    this.router.navigate(["/pokemon"])
  }

  handleFormData(object: any) {
    console.log(object);
  }
}
