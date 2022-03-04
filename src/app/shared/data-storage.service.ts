import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Recipe } from "../recipes/recipes.model";
import { RecipesService } from "../recipes/recipes.service";
import { map, tap } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class DataStorageService {
    constructor(private http: HttpClient, private recipeService: RecipesService) {

    }

    public storeRecipes() {
        const recipes = this.recipeService.getRecipes();
        this.http.put(
            'https://ng-practice-app-8a1e9-default-rtdb.firebaseio.com/recipes.json',
            recipes
        ).subscribe(response => {
            console.log(response);
        });
    }

    public fetchRecipes() {
        return this.http
        .get<Recipe[]>(
            'https://ng-practice-app-8a1e9-default-rtdb.firebaseio.com/recipes.json'
        )
        .pipe(
            map(recipes => {
                return recipes.map(recipe => {
                    return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients: []};
                });
            }),
            tap(
                recipes => {
                    this.recipeService.setRecipes(recipes);
                }
            )
        );
    }
}