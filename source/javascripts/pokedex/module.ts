import { NgModule }           from '@angular/core';
import { BrowserModule }      from '@angular/platform-browser';
import { PokemonModule }      from '../pokemon/module';
import { PokedexComponent }   from './components/main';
import { PokedexPokemonList } from './components/pokemon-list';

@NgModule({
  imports:      [BrowserModule, PokemonModule],
  declarations: [PokedexComponent, PokedexPokemonList],
  bootstrap:    [PokedexComponent]
})

export class PokedexModule { }
