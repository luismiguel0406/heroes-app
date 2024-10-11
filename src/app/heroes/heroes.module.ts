import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesRoutingModule } from './heroes-routing.module';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

import { HeroPageComponent } from './pages/hero-page/hero-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page-heroes.component';
import { HeroCardComponent } from './components/hero-card.component';
import { HeroImagePipe } from './pipes/heroImage.pipe';

@NgModule({
  imports: [HeroesRoutingModule, CommonModule, MaterialModule, ReactiveFormsModule],
  declarations: [
    HeroPageComponent,
    ListPageComponent,
    NewPageComponent,
    SearchPageComponent,
    LayoutPageComponent,
    HeroCardComponent,
    //Pipes
    HeroImagePipe
  ],
  exports: [
    HeroPageComponent,
    ListPageComponent,
    NewPageComponent,
    SearchPageComponent,
    LayoutPageComponent,
    HeroCardComponent,
  ],
})
export class HeroesModule {}
