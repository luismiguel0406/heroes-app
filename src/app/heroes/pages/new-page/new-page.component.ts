import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Heroes, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';
import { filter, switchMap } from 'rxjs';

@Component({
  selector: 'app-new-page',
  templateUrl: 'new-page.component.html',
})
export class NewPageComponent {
  public heroFormGroup = new FormGroup({
    superhero: new FormControl('', Validators.required),
    publisher: new FormControl(Publisher.DCComics),
    alterEgo: new FormControl('', Validators.required),
    firstAppearance: new FormControl('', Validators.required),
    characters: new FormControl(''),
    imageUrl: new FormControl(''),
    isActive: new FormControl(true),
  });

  constructor(
    private _heroService: HeroesService,
    private _router: Router,
    private dialog: MatDialog
  ) {}

  get currentHero(): Heroes {
    var hero = this.heroFormGroup.value as Heroes;
    return hero;
  }

  public publishers = [
    { id: 'DC Comics', desc: 'DC - Comics' },
    { id: 'Marvel Comics', desc: 'Marvel - Comics' },
  ];

  addHero() {
    if (!this.heroFormGroup.valid) return;
    this._heroService.addHero(this.currentHero).subscribe((hero) => {
      console.log({ hero });
      this.heroFormGroup.reset();
    });
  }

  deleteHero(id: string = this.currentHero.id): void {
    const confirmDialog = this.dialog.open(ConfirmDialogComponent);

    confirmDialog.afterClosed().subscribe((result) => {
      if (!result) return;
      this._heroService
        .deleteHero(id)
        .subscribe(() => this._router.navigateByUrl('heroes'));
    });
  }

  updateHero(hero: Partial<Heroes>): void {
    if (!this.heroFormGroup.touched) return;

    this._heroService
      .updateHero(hero)
      .subscribe(() => console.log('Hero updated'));
  }
}
