import { Component }      from '@angular/core';
import { OnInit }         from '@angular/core';
import { PokedexService } from '../service';
import { Pokemon }        from '../../pokemon/models/pokemon';

@Component({
  selector:    'pokemon-list',
  templateUrl: './templates/pokemon/list.html'
})

export class PokedexPokemonList implements OnInit {

  pokemons:   Pokemon[] = [];
  startFrom:  number    = 1;
  startCount: number    = 15;

  constructor(private pokedex : PokedexService) { }

  ngOnInit(): void {
    this.pokedex.pokemon.getEach(this.startFrom, this.startCount).subscribe(
      pokemon => { this.pokemons.push(pokemon); },
      error   => { console.log(error); },
      ()      => { this.pokedex.loading = false; }
    );
  }

  show(pokemon : Pokemon) : void {
    this.pokedex.onSelected.emit(pokemon);
  }
}
