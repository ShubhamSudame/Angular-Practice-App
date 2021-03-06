import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";

import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipesDetailComponent } from "./recipes-detail/recipes-detail.component";
import { RecipeItemComponent } from "./recipes-list/recipe-item/recipe-item.component";
import { RecipesListComponent } from "./recipes-list/recipes-list.component";
import { RecipesRoutingModule } from "./recipes-routing.module";
import { RecipesComponent } from "./recipes.component";

@NgModule({
    declarations: [
        RecipesComponent,
        RecipesListComponent,
        RecipesDetailComponent,
        RecipeItemComponent,
        RecipeStartComponent,
        RecipeEditComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        ReactiveFormsModule,
        RouterModule,
        RecipesRoutingModule
    ]
})
export class RecipesModule {

}