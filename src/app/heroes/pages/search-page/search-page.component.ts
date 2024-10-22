import {  Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { FormControl } from '@angular/forms';
import { Heroes } from '../../interfaces/heroes.interface';

@Component({
    selector: 'app-search-page',
    templateUrl:'search-page.component.html'
})
export class SearchPageComponent implements OnInit {
    
    public inputAutocompleteHero = new FormControl('');
    public heroSuggestions: Heroes[] | undefined = [];
   
    constructor(private _heroService:HeroesService) {
        
    }

    ngOnInit(): void {
        console.log('OnInit pending')
    }

    searchHero(){
      this._heroService.getSuggestion(this.inputAutocompleteHero.value || "")
      .subscribe(
         suggestions => this.heroSuggestions = suggestions
      );
    }
}
