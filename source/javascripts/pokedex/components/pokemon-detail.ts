import { Component }      from '@angular/core';
import { OnInit }         from '@angular/core';
import { PokedexService } from '../service';
import { Pokemon }        from '../../pokemon/models/pokemon';

@Component({
  selector:    'pokemon-detail',
  templateUrl: './templates/pokemon/detail.html'
})

export class PokedexPokemonDetail {

  pokemon: Pokemon;

  constructor(private pokedex : PokedexService) {
    this.pokemon = new Pokemon();
    this.pokedex.onSelected.subscribe(
      (pokemon : Pokemon) => this.pokemon = pokemon
    );
  }
}
