import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { asyncScheduler, catchError, Observable, scheduled } from 'rxjs';
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
      .pipe(catchError((_) => scheduled([undefined], asyncScheduler)));
  }

  getSuggestion(suggestion:string):Observable<Heroes[]| undefined>{
    return this._http.get<Heroes[]>(`${this.URLBase}/api/heroes/suggest`,{params:{suggestion}})
    .pipe(catchError((_)=> scheduled([undefined], asyncScheduler)));
  }

  addHero(hero:Heroes):Observable<Heroes>{
   return this._http.post<Heroes>(`${this.URLBase}/api/heroes`, hero);
  }

 updateHero(id:string, hero:Partial<Heroes>):Observable<unknown>{
   return this._http.put(`${this.URLBase}/api/heroes/${id}`, hero);
 }

  deleteHero(id:string):Observable<unknown>{
     return this._http.delete(`${this.URLBase}/api/heroes/${id}`);
  }
}
