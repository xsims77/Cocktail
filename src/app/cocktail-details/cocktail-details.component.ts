import { Component } from '@angular/core';
import { Cocktail } from '../interfaces/cocktails.interface';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrl: './cocktail-details.component.scss'
})
export class CocktailDetailsComponent {
  cocktail: Cocktail = {
    name: 'Mojito',
      img: 'https://www.masculin.com/wp-content/uploads/sites/2/2020/09/mojito-2-1024x677.jpg',
      description: 'Ce mix de rhum, menthe, citron, glace pilée et sirop de canne est un incontournable. Impossible de l’oublier dans ce top 10. Il est un des cocktails les plus demandés au monde dans les bars. Sa version virgin sans alcool est également un grand succès.'
  };
}
