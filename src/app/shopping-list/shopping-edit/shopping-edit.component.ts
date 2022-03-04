import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', {static: false}) slForm: NgForm;
  subscription: Subscription
  editMode = false;
  editedIndex: number;
  editedItem: Ingredient;
  
  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
    this.subscription = this.slService.startedEditing
    .subscribe(
      (index: number) => {
        this.editMode = true;
        this.editedIndex = index;
        this.editedItem = this.slService.getIngredient(index);
        this.slForm.setValue({
          name: this.editedItem.name,
          quantity: this.editedItem.quantity,
          unit: this.editedItem.unit
        });

      }
    );
  }

  onSubmit(form: NgForm) {
    const ingredient = new Ingredient(form.value.name, form.value.quantity, form.value.unit);
    if(this.editMode) {
      this.slService.updateIngredient(this.editedIndex, ingredient)
    }
    else {
      this.slService.addIngredient(ingredient);
    }
    this.editMode = false;
    form.reset();
  }

  onDeleteItem() {
    this.slService.deleteIngredient(this.editedIndex);
    this.onClearItem();
  }

  onClearItem() {
    this.slForm.reset();
    this.editMode = false;
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

}
