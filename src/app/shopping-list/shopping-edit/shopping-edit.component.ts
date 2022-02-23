import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('quantityInput') quantityInputRef: ElementRef;
  @ViewChild('unitInput') unitInputRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddItem() {
    const ingredient = new Ingredient(this.nameInputRef.nativeElement.value, this.quantityInputRef.nativeElement.value, this.unitInputRef.nativeElement.value);
    this.ingredientAdded.emit(ingredient);
  }

  onDeleteItem() {

  }

  onClearItem() {

  }

}
