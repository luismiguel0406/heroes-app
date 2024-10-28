import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Heroes, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-new-page',
  templateUrl: 'new-page.component.html',
})
export class NewPageComponent implements OnInit{
  public heroFormGroup = new FormGroup({
    id: new FormControl(''),
    superhero: new FormControl('', Validators.required),
    publisher: new FormControl(Publisher.DCComics),
    alterEgo: new FormControl('', Validators.required),
    firstAppearance: new FormControl('', Validators.required),
    characters: new FormControl(''),
    imageUrl: new FormControl(''),
    isActive: new FormControl(true),
  });
  public titleForm:string = 'Add hero';

  constructor(
    private _heroService: HeroesService,
    private _router: Router,
    private _dialog: MatDialog,
    private _activatedRoute: ActivatedRoute,
    private _snackBar: MatSnackBar
  ) {}
  ngOnInit(): void {
    if(!this._router.url.includes("edit")) return;
    
    this.titleForm = "Edit hero"
    this._activatedRoute.params.subscribe(
      ({id})=>{
        this._heroService.getHeroById(id).subscribe(hero=>{

          if(!hero){
            return this._router.navigateByUrl('/')
          }
          this.heroFormGroup.reset(hero)
          return;
        })
      }
    )
  }

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
    this._heroService.addHero(this.currentHero).subscribe(() => {
      this._snackBar.open("Hero created!","Ok")
      this.heroFormGroup.reset();
    });
  }

  deleteHero(id: string = this.currentHero.id): void {
    const confirmDialog = this._dialog.open(ConfirmDialogComponent);

    confirmDialog.afterClosed().subscribe((result) => {
      if (!result) return;
      this._heroService
        .deleteHero(id)
        .subscribe(() => this._router.navigateByUrl('heroes'));
    });
  }

  updateHero(): void {
    if (!this.heroFormGroup.touched) return;

    this._heroService
      .updateHero(this.currentHero.id, this.currentHero)
      .subscribe(() => this._snackBar.open("Hero updated!","Ok"));
  }
}
