import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] = [
    {
      id: 'r1',
      titile: 'Schnitzel',
      // tslint:disable-next-line: max-line-length
      imageUrl: 'https://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-5.jpg',
      ingredients: ['French Fries', 'Pork Meat', 'Salad']
    },
    {
      id: 'r2',
      titile: 'Spaghetti',
      // tslint:disable-next-line: max-line-length
      imageUrl: 'https://www.simplyhappyfoodie.com/wp-content/uploads/2018/02/instant-pot-spaghetti-4.jpg',
      ingredients: ['French Fries', 'Pork Meat', 'Salad']
    }
  ];

  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return { ...this.recipes.find(r => r.id === recipeId) };
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(r => {
      return r.id !== recipeId;
    });
  }
}
