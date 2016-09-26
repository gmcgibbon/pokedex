import { Injectable }     from '@angular/core';
import { EventEmitter }   from '@angular/core';
import { PokemonService } from '../pokemon/service';
import { Pokemon }        from '../pokemon/models/pokemon';

@Injectable()
export class PokedexService {

  pokemon    : PokemonService;
  onSelected : EventEmitter<Pokemon>;
  loading    : boolean;

  constructor (pokemon : PokemonService) {
    this.pokemon    = pokemon;
    this.loading    = true;
    this.onSelected = new EventEmitter<Pokemon>();
  }
}
