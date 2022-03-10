import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Recipe } from "../recipes/recipes.model";
import { RecipesService } from "../recipes/recipes.service";
import { map, tap } from "rxjs/operators";
import { AuthService } from "../auth/auth.service";
import { environment } from '../../environments/environment';
import { User } from "../profile/profile.service";

@Injectable({
    providedIn: 'root'
})
export class DataStorageService {
    constructor(private http: HttpClient,
        private recipeService: RecipesService,
        private authService: AuthService) {

    }

    public storeRecipes() {
        const recipes = this.recipeService.getRecipes();
        this.http.put(
            environment.firebaseConfig.databaseURL + '/recipes.json',
            recipes
        ).subscribe(response => {
            console.log(response);
        });
    }

    public fetchRecipes() {
        return this.http
            .get<Recipe[]>(
                environment.firebaseConfig.databaseURL + '/recipes.json',
            )
            .pipe(
                map(recipes => {
                    return recipes.map(recipe => {
                        return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] };
                    });
                }),
                tap(recipes => {
                    this.recipeService.setRecipes(recipes);
                })
            );
    }

    public storeUser(user: { id: string, first_name: string, last_name: string, email: string, phone_number: number, display_picture?: string }) {
        return this.http
            .put(
                environment.firebaseConfig.databaseURL + '/users.json',
                user
            ).subscribe(
                response => {
                    console.log(response);
                }
            );
    }

    public getUser(userid: string) {
        return this.http
            .get<User>(
                environment.firebaseConfig.databaseURL + '/users.json',
                {
                    params: new HttpParams().set('id', userid)
                }
            );
    }
}