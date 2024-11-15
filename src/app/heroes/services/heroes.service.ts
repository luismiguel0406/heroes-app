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
  private token: string = '';

  constructor(private _http: HttpClient) {
    this.token = sessionStorage.getItem('Bearer-token') || '';
  }

  getHeroes(): Observable<Heroes[]> {
    return this._http.get<Heroes[]>(`${this.URLBase}/api/heroes`, {
      headers: { Authorization: `Bearer ${this.token}` },
    });
  }

  getHeroById(id: string): Observable<Heroes | undefined> {
    return this._http
      .get<Heroes>(`${this.URLBase}/api/heroes/${id}`, {
        headers: { Authorization: `Bearer ${this.token}` },
      })
      .pipe(catchError((_) => scheduled([undefined], asyncScheduler)));
  }

  getSuggestion(suggestion: string): Observable<Heroes[] | undefined> {
    return this._http
      .get<Heroes[]>(`${this.URLBase}/api/heroes/suggest`, {
        params: { suggestion },
        headers: { Authorization: `Bearer ${this.token}` },
      })
      .pipe(catchError((_) => scheduled([undefined], asyncScheduler)));
  }

  addHero(hero: Heroes): Observable<Heroes> {
    return this._http.post<Heroes>(`${this.URLBase}/api/heroes`, hero, {
      headers: { Authorization: `Bearer ${this.token}` },
    });
  }

  updateHero(id: string, hero: Partial<Heroes>): Observable<unknown> {
    return this._http.put(`${this.URLBase}/api/heroes/${id}`, hero, {
      headers: { Authorization: `Bearer ${this.token}` },
    });
  }

  deleteHero(id: string): Observable<unknown> {
    return this._http.delete(`${this.URLBase}/api/heroes/${id}`, {
      headers: { Authorization: `Bearer ${this.token}` },
    });
  }
}
