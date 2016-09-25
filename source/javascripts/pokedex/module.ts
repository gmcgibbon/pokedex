import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { PokedexComponent } from './component';

@NgModule({
  imports:      [BrowserModule],
  declarations: [PokedexComponent],
  bootstrap:    [PokedexComponent]
})

export class PokedexModule { }
