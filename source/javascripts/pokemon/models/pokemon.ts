import { SpriteSet }   from './sprite-set';
import { SlottedType } from './slotted-type';

export class Pokemon {

  constructor() {
    this.sprites = new SpriteSet();
    this.types   = [];
  }

  id:     number;
  name:   string;

  height: number;
  weight: number;

  sprites: SpriteSet;
  types:   SlottedType[];
}
