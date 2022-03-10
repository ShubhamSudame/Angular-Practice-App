import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipes.model'; 

@Injectable()
export class RecipesService {
    recipesChanged = new Subject<Recipe[]>();
    private recipes: Recipe[] = [];

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