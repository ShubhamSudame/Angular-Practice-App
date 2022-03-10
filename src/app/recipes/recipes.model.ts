import { Ingredient } from "../shared/ingredient.model";

export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredients: Ingredient[];
    //private userid: string;

    constructor(name: string, description: string, imagePath: string, ingredients: Ingredient[]) {//, userid: string) {
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.ingredients = ingredients;
        //this.userid = userid;
    }
}