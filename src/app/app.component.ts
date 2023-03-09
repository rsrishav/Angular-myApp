import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Pokemon {
  id: number,
  name: string,
  type: string,
  isCool: boolean,
  isStylish: boolean
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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

  constructor(){
  }

  handleClick(value :any) {
    console.log(value.value);
  }

  handleChange(event: any) {
    this.pokemonName = event.target.value;
  }

}
