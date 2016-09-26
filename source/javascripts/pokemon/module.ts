import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule }     from '@angular/http';
import { PokemonService } from './service';

@NgModule({
  imports:   [HttpModule],
  providers: [PokemonService]
})

export class PokemonModule { }
