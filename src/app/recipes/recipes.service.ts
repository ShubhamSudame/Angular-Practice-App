import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipes.model';

@Injectable()
export class RecipesService {
    recipesChanged = new Subject<Recipe[]>();
    private recipes: Recipe[] = [];
    //private recipes: Recipe[] = [
    //    new Recipe('Masala Dosa', 
    //      'South Indian breakfast dish', 
    //      'https://static.toiimg.com/thumb/63841432.cms?width=1200&height=900',
    //      [
    //        new Ingredient('Rice Batter', 2, 'scoops'),
    //        new Ingredient('Potato Mix', 1, 'spoons'),
    //        new Ingredient('Green Chutney', 1, 'tablespoons')
    //      ]
    //    ),
    //    new Recipe('Idli Sambar', 
    //      'Another South Indian Dish', 
    //      'https://c.ndtvimg.com/2019-03/g49icpdk_world-idli-day-idli-generic_625x300_29_March_19.jpg',
    //      [
    //        new Ingredient('Rice Batter', 1, 'scoops'),
    //        new Ingredient('Green Chutney', 1, 'tablespoons'),
    //        new Ingredient('Sambar', 1, 'katori')
    //      ]
    //    )
    //];

    constructor(private slService: ShoppingListService) {}

    public setRecipes(recipes: Recipe[]) {
      this.recipes = recipes;
      this.recipesChanged.next(this.recipes.slice());
    }

    public getRecipes() {
        return this.recipes.slice();
    }

    public getRecipe(index: number) {
      return this.recipes[index];
    }

    public addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }

    public addRecipe(recipe: Recipe) {
      this.recipes.push(recipe);
      this.recipesChanged.next(this.recipes.slice());
    }

    public updateRecipe(index: number, recipe: Recipe) {
      this.recipes[index] = recipe;
      this.recipesChanged.next(this.recipes.slice());
    }

    public deleteRecipe(index: number) {
      this.recipes.splice(index, 1);
      this.recipesChanged.next(this.recipes.slice());
    }
}