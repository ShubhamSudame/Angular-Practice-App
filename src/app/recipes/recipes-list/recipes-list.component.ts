import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Masala Dosa', 'South Indian breakfast dish', 'https://static.toiimg.com/thumb/63841432.cms?width=1200&height=900'),
    new Recipe('Idli Sambar', 'Another South Indian Dish', 'https://c.ndtvimg.com/2019-03/g49icpdk_world-idli-day-idli-generic_625x300_29_March_19.jpg')
  ];
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
