import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PokemonBaseModule } from './pokemon-base/pokemon-base.module';
import PokemonFormComponent from './pokemon-template-form/pokemon-template-form.component';


@NgModule({
  declarations: [
    AppComponent,
      // PokemonTemplateFormComponent,
      HomeComponent,
      NotfoundComponent,
      HomeComponent,
      NotfoundComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PokemonBaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
