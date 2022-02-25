import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[];
  //@Output() recipeWasSelected = new EventEmitter<Recipe>();
  constructor(private recipeService: RecipesService) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

}
