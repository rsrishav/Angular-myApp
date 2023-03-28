import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import PokemonFormComponent from '../pokemon-template-form/pokemon-template-form.component';
import { FormsModule } from '@angular/forms';
import { HighlighttextDirective } from '../_directives/highlighttext.directive';
import { CustomifDirective } from '../_directives/customif.directive';

const routes: Routes = [
  {
    path: "",
    children: [
      { path: "", component: PokemonListComponent},
      { path: ":id", component: PokemonFormComponent}
    ]
  }
]

@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonDetailComponent,
    PokemonFormComponent,
    HighlighttextDirective,
    CustomifDirective
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    PokemonListComponent,
    PokemonDetailComponent
  ],
  bootstrap: [
    HighlighttextDirective,
    CustomifDirective
  ]
})
export class PokemonBaseModule { }
