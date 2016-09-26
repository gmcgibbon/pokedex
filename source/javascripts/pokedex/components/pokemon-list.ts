import { Component }      from '@angular/core';
import { OnInit }         from '@angular/core';
import { PokedexService } from '../service';
import { Pokemon }        from '../../pokemon/models/pokemon';

@Component({
  selector:    'pokemon-list',
  templateUrl: './templates/pokemon/list.html'
})

export class PokedexPokemonList implements OnInit {

  pokemons:    Pokemon[];
  startCount:  number;
  updateCount: number;

  constructor(private pokedex : PokedexService) {
    this.pokemons    = [];
    this.startCount  = 15;
    this.updateCount = 5;
  }

  ngOnInit(): void {
    this.load(this.startCount);
  }

  show(pokemon : Pokemon) : void {
    this.pokedex.onSelected.emit(pokemon);
  }

  more() : void {
    this.load(this.updateCount);
  }

  private load(count : number) : void {
    let start = this.pokemons.length + 1;
    this.pokedex.loading = true;
    this.pokedex.pokemon.getEach(start, count).subscribe(
      pokemon => { this.pokemons.push(pokemon); },
      error   => { console.log(error); },
      ()      => { this.pokedex.loading = false; }
    );
  }
}
