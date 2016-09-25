import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { PokemonModule }    from '../pokemon/module';
import { PokedexComponent } from './components/main';

@NgModule({
  imports:      [BrowserModule, PokemonModule],
  declarations: [PokedexComponent],
  bootstrap:    [PokedexComponent]
})

export class PokedexModule { }
