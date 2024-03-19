import { Component } from '@angular/core';
import { Cocktail } from '../interfaces/cocktails.interface';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrl: './cocktail-list.component.scss'
})
export class CocktailListComponent {

  cocktails: Cocktail[] = [
    {
      name: 'Mojito',
      img: 'https://www.masculin.com/wp-content/uploads/sites/2/2020/09/mojito-2-1024x677.jpg',
      description: 'Ce mix de rhum, menthe, citron, glace pilée et sirop de canne est un incontournable. Impossible de l’oublier dans ce top 10. Il est un des cocktails les plus demandés au monde dans les bars. Sa version virgin sans alcool est également un grand succès.'
    },
    {
      name: 'Cosmopolitan',
      img: 'https://www.masculin.com/wp-content/uploads/sites/2/2023/06/cocktail-cosmopolitain-2500x1667.jpg',
      description: 'C’est le cocktail de la série Sex and the City. Avec sa jolie couleur rose, c’est un classique incontournable des soirées chics. Aussi appelé en version courte : « Cosmo », il est composé de vodka, triple sec, citron vert et jus de cranberry.'
    },
    {
      name: 'Bloody Mary',
      img: 'https://www.masculin.com/wp-content/uploads/sites/2/2024/05/cocktail-bloody-mary-2500x1703.jpg',
      description: 'Vous aimez les épices ? Laissez-vous tenter par le Bloody Mary. Son nom vient de sa base de jus de tomate, à quoi on ajoute de la vodka et de la sauce Worcestershire. Ensuite on le booste avec du tabasco, du jus de citron, du sel de céleri et du poivre.'
    }
  ]

}
