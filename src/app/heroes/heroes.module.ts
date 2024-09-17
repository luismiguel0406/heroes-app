import { NgModule } from "@angular/core";
import { HeroesRoutingModule } from "./heroes-routing.module";
import { HeroPageComponent } from "./pages/hero-page/hero-page.component";
import { ListPageComponent } from "./pages/list-page/list-page.component";
import { NewPageComponent } from "./pages/new-page/new-page.component";
import { SearchPageComponent } from "./pages/search-page/search-page.component";

@NgModule({
    imports:[HeroesRoutingModule],
    declarations:[HeroPageComponent, ListPageComponent, NewPageComponent, SearchPageComponent],
    exports:[HeroPageComponent, ListPageComponent, NewPageComponent, SearchPageComponent]
})
export class HeroesModule{}