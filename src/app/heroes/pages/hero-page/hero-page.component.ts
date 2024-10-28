import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroes } from '../../interfaces/heroes.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, switchMap } from 'rxjs';

@Component({
  selector: 'app-hero-page',
  templateUrl: 'hero-page.component.html',
})
export class HeroPageComponent implements OnInit {
  public hero!: Heroes;

  constructor(
    private _heroesService: HeroesService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {}
  ngOnInit(): void {
    this._activatedRoute.params
      .pipe(
        delay(1000),
        switchMap(({ id }) => this._heroesService.getHeroById(id)))
      .subscribe((hero) => {
        if (!hero) return this._router.navigate(['/heroes/list']);
        this.hero = hero;
        return;
      });
  }

  goBack(): void {
    this._router.navigateByUrl('heroes/list');
  }

  goToEdit():void{
   this._router.navigateByUrl(`heroes/edit/${this.hero.id}`)
  }
}
