import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { DataStorageService } from "../shared/data-storage.service";
import { RecipesService } from "./recipes.service";

@Injectable({providedIn: 'root'})
export class RecipesResolverService {

    constructor(private dataStorageService: DataStorageService, private recipesService: RecipesService) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const recipes = this.recipesService.getRecipes();
        if(recipes.length === 0) {
            this.dataStorageService.fetchRecipes();
        }
        else {
            return recipes;
        }
    }
}