import { Component, Input, OnInit, OnDestroy, EventEmitter, Output } from "@angular/core";
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-shopping-cart',
    templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit, OnDestroy{
    ingredients: Ingredient[];
    private igChangedSub: Subscription;
    @Input() heading: string;
    @Output() cartItems = new EventEmitter<number>();

    constructor(private slService: ShoppingListService) { }

    ngOnInit(): void {
        this.ingredients = this.slService.getIngredients();
        this.igChangedSub = this.slService.ingredientsChanged.subscribe(
            (ingredients: Ingredient[]) => {
                this.ingredients = ingredients;
            }
        );
        this.cartItems.emit(this.ingredients.length);
    }

    onEditItem(index: number) {
        this.slService.startedEditing.next(index);
        //
    }

    ngOnDestroy(): void {
        this.igChangedSub.unsubscribe();
    }
}