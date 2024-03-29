import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit, AfterViewInit {

  title: string = "Image source Example: Google Photos";
  imgSrc: string = "https://play-lh.googleusercontent.com/ZyWNGIfzUyoajtFcD7NhMksHEZh37f-MkHVGr5Yfefa-IX7yj9SMfI82Z7a2wpdKCA=w240-h480-rw";

  myName: string = "Rish"

  // pokemons1: Pokemon[] = [{
  //   id: 1,
  //   name: "pokemon",
  //   type: "electric",
  //   isCool: false,
  //   isStylish: true
  // }, {
  //   id: 2,
  //   name: "squirtle",
  //   type: "water",
  //   isCool: true,
  //   isStylish: false
  // }, {
  //   id: 3,
  //   name: "charmander",
  //   type: "fire",
  //   isCool: false,
  //   isStylish: false
  // }]
  @ViewChildren('pokemonRef') pokemonRef !: ElementRef;
  @ViewChild('pokemonTh') pokemonTh !: ElementRef;

  pokemonName: string = "";

  pokemons!: Pokemon[];

  constructor(private pokemonService: PokemonService, private renderer: Renderer2) { }




  handleClick(value: any) {
    console.log(value.value);
  }

  handleChange(event: any) {
    this.pokemonName = event.target.value;
  }

  handleRemove(event: Pokemon) {
    debugger;
    this.pokemons = this.pokemons.filter((pokemon: Pokemon) => {
      return pokemon.id != event.id;
    })
  }

  ngOnInit(): void {
    // this.pokemons = this.pokemonService.getPokemons()
    this.pokemonService.getPokemons().subscribe((data: Pokemon[]) => {
      console.log(data);
      this.pokemons = data;
    })
  }

  ngAfterViewInit(){
    // console.log(this.pokemonRef);

    console.log(this.pokemonTh);
    this.pokemonTh.nativeElement.innerText = "Pokemon Name";

    const div = this.renderer.createElement('div');
    const text = this.renderer.createText('Pokemon List');
    this.renderer.appendChild(div, text);
    this.renderer.appendChild(this.pokemonTh.nativeElement, div);
  }

}
