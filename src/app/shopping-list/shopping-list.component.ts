import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Atta', 2, 'scoops'),
    new Ingredient('Water', 2, 'cups'),
    new Ingredient('Salt', 0.5, 'tbsp'),
    new Ingredient('Chillies', 10, 'pieces')
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
