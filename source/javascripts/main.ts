import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { PokedexModule }          from './pokedex/module';

const platform = platformBrowserDynamic();

document.addEventListener('DOMContentLoaded', () =>
  platform.bootstrapModule(PokedexModule)
);
