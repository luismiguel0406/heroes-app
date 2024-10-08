import { Pipe, PipeTransform } from "@angular/core";
import { Heroes } from "../interfaces/heroes.interface";

@Pipe({
    name:"heroImage"
})

export class HeroImagePipe implements PipeTransform{
   
    transform(hero:Heroes):string {
       if(!hero.id && !hero.alterEgo){
        return 'assets/no-image.jpg'
       }

       return `assets/heroes/${hero.id}.jpg`
    }
}