import {  Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-search-page',
    templateUrl:'search-page.component.html'
})
export class SearchPageComponent implements OnInit {
    
    public inputAutocompleteHero = new FormControl('')
   
    constructor(private _heroService:HeroesService) {
        
    }

    ngOnInit(): void {
        console.log('OnInit pending')
    }

    searchHero(){
       console.log(this.inputAutocompleteHero.value)
    }
}
