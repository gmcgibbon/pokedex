import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Pokemon }        from './models/pokemon';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class PokemonService {

  constructor (private http: Http) { }

  private url = `${process.env.API_URL}/pokemon/{id}`;

  get(id: number | string): Observable<Pokemon> {
    return this.http
      .get(this.url.replace('{id}', id.toString()))
      .map(this.map)
      .catch(this.catch);
  }

  private map(response: Response) {
    let json = response.json();
    return json;
  }

  private catch(error: any) {
    let message = `${error.status} - ${error.statusText}`;
    console.error(message);
    return Observable.throw(message);
  }
}
