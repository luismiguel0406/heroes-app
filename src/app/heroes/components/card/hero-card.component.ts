import { Component, Input, OnInit } from '@angular/core';
import { Heroes } from '../../interfaces/heroes.interface';
import { Router } from '@angular/router';

@Component({
    selector: 'hero-card',
    templateUrl: 'hero-card.component.html'
})

export class HeroCardComponent implements OnInit {

    @Input() public hero!:Heroes
    constructor(private _router:Router) { }

    ngOnInit() {
        if(!this.hero){throw('hero is required')}
     }

     goToHero(id:string){
     return this._router.navigateByUrl(`heroes/${id}`)
     }
}