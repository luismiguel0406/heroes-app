import { Component } from '@angular/core';
import { MenuSidenavItem } from '../../interfaces/menuSidenavItem.interface';

@Component({
  selector: 'app-layout-page-hero',
  templateUrl: 'layout-page-heroes.component.html',
})
export class LayoutPageComponent {
  public menuSidenavItems: MenuSidenavItem[] = [
    {
      label: 'List',
      url: './list',
      icon: 'label',
    },
    {
      label: 'New',
      url: './new',
      icon: 'add',
    },
    {
      label: 'Search',
      url: './search',
      icon: 'search',
    },
  ];

}
