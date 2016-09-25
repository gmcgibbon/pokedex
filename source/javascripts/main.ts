import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode }         from '@angular/core';
import { PokedexModule }          from './pokedex/module';

const platform = platformBrowserDynamic();

if (process.env.NODE_ENV == 'build') { enableProdMode(); }

document.addEventListener('DOMContentLoaded', () =>
  platform.bootstrapModule(PokedexModule)
);
