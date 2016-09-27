import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { MdButtonModule }       from '@angular2-material/button';
import { MdCardModule }         from '@angular2-material/card';
import { MdListModule }         from '@angular2-material/list';
import { PokemonModule }        from '../pokemon/module';
import { PokedexService }       from './service';
import { PokedexComponent }     from './components/pokedex';
import { PokedexPokemonList }   from './components/pokemon-list';
import { PokedexPokemonDetail } from './components/pokemon-detail';
import { CapitalizePipe }       from './pipes/capitalize';
import { FixedPipe }            from './pipes/fixed';

@NgModule({
  imports:      [
    BrowserModule,
    PokemonModule,
    MdButtonModule.forRoot(),
    MdCardModule.forRoot(),
    MdListModule.forRoot()
  ],
  declarations: [
    PokedexComponent,
    PokedexPokemonList,
    PokedexPokemonDetail,
    CapitalizePipe,
    FixedPipe
  ],
  providers: [PokedexService],
  bootstrap: [PokedexComponent]
})

export class PokedexModule { }
