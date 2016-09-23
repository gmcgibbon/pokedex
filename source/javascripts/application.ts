import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { PokedexModule }          from './pokedex/module.ts';

const platform = platformBrowserDynamic();

document.addEventListener('DOMContentLoaded', () =>
  platform.bootstrapModule(PokedexModule)
);
