import { Component }      from '@angular/core';
import { OnInit }         from '@angular/core';
import { PokemonService } from '../../pokemon/service';
import { Pokemon }        from '../../pokemon/models/pokemon';

@Component({
  selector:    'pokemon-list',
  templateUrl: './templates/pokemon/list.html'
})

export class PokedexPokemonList implements OnInit {

  pokemons:   Pokemon[] = [];
  startFrom:  number    = 1;
  startCount: number    = 15;
  loading:    boolean   = true;

  constructor(private pokemon : PokemonService) { }

  ngOnInit(): void {
    this.pokemon.getEach(this.startFrom, this.startCount).subscribe(
      pokemon => { console.log(pokemon); this.pokemons.push(pokemon); },
      error   => { console.log(error); },
      ()      => { this.loading = false; }
    );
  }

}
