import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutPageComponent } from "./pages/layout-page-heroes.component";
import { SearchPageComponent } from "./pages/search-page/search-page.component";
import { NewPageComponent } from "./pages/new-page/new-page.component";
import { ListPageComponent } from "./pages/list-page/list-page.component";
import { HeroPageComponent } from "./pages/hero-page/hero-page.component";

const routes: Routes = [
    {
        path: '',
        component: LayoutPageComponent,
        children: [
            {
                path: 'search',
                component: SearchPageComponent
            },
            {
                path: 'new',
                component: NewPageComponent
            },
            {
                path: 'edit/:id',
                component: NewPageComponent
            },
            {
                path: 'list',
                component: ListPageComponent
            },
            {
                path: ':id',
                component: HeroPageComponent
            },
            {
                path: '**',
                redirectTo: 'list'
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HeroesRoutingModule { }