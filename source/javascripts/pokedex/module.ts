import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { PokedexComponent } from './component.ts';

@NgModule({
  imports:      [BrowserModule],
  declarations: [PokedexComponent],
  bootstrap:    [PokedexComponent]
})

export class PokedexModule { }
