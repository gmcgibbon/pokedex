import { NgModule }           from '@angular/core';
import { BrowserModule }      from '@angular/platform-browser';
import { PokemonModule }      from '../pokemon/module';
import { PokedexComponent }   from './components/main';
import { PokedexPokemonList } from './components/pokemon-list';
import { CapitalizePipe }     from './pipes/capitalize'
import { FixedPipe }          from './pipes/fixed'

@NgModule({
  imports:      [BrowserModule, PokemonModule],
  declarations: [
    PokedexComponent,
    PokedexPokemonList,
    CapitalizePipe,
    FixedPipe
  ],
  bootstrap:    [PokedexComponent]
})

export class PokedexModule { }
