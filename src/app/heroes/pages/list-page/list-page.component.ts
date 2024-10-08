import { Component, OnInit } from "@angular/core";
import { HeroesService } from "../../services/heroes.service";
import { Heroes } from "../../interfaces/heroes.interface";

@Component({
    selector:'app-list-page',
    templateUrl:'list-page.component.html'
})
export class ListPageComponent implements OnInit{
   public heroes:Heroes[] =[]
    constructor(private _heroService:HeroesService) {
        
    }
    ngOnInit():void {
        this._heroService.getHeroes().subscribe(
          heroes => this.heroes = heroes
        )
    }
}