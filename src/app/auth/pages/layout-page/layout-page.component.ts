import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-layout-page',
    templateUrl: 'layout-page.component.html'
})

export class LayoutPageComponent implements OnInit {
    public containerHeight:string = '100%'
    constructor() { }

    ngOnInit() { }
}