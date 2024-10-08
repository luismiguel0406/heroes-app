import { Component, Input, OnInit } from '@angular/core';
import { Heroes } from '../interfaces/heroes.interface';

@Component({
    selector: 'hero-card',
    templateUrl: 'hero-card.component.html'
})

export class HeroCardComponent implements OnInit {

    @Input()
    public hero!:Heroes
    constructor() { }

    ngOnInit() {
        if(!this.hero){throw('hero is required')}
     }
}