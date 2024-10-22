import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Publisher } from '../../interfaces/heroes.interface';

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



  public publishers = [
    { id: 'DC Comics', desc: 'DC - Comics' },
    { id: 'Marvel Comics', desc: 'Marvel - Comics' },
  ];

}
