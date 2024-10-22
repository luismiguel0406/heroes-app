import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { catchError, Observable, of } from 'rxjs';
import { Heroes } from '../interfaces/heroes.interface';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private URLBase = environment.apiUrl;

  constructor(private _http: HttpClient) {}

  getHeroes(): Observable<Heroes[]> {
    return this._http.get<Heroes[]>(`${this.URLBase}/api/heroes`);
  }

  getHeroById(id: string): Observable<Heroes | undefined> {
    return this._http
      .get<Heroes>(`${this.URLBase}/api/heroes/${id}`)
      .pipe(catchError((_) => of(undefined)));
  }

  getSuggestion(suggestion:string):Observable<Heroes[]| undefined>{
    return this._http.get<Heroes[]>(`${this.URLBase}/api/heroes/suggest`,{params:{suggestion}})
    .pipe(catchError((_)=> of(undefined)));
  }
}
