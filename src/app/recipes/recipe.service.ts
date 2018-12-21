import { Recipe } from './recipe.model';

export class RecipeService {
 private recipes: Recipe[] = [
    new Recipe('A1 Test Recipe', 'Description of Recipe',
    'https://natashaskitchen.com/wp-content/uploads/2015/12/Teriyaki-Chicken-Recipe-11-480x270.jpg'),
    new Recipe('A2 Test Recipe', 'Description of Recipe',
    'https://natashaskitchen.com/wp-content/uploads/2015/12/Teriyaki-Chicken-Recipe-11-480x270.jpg'),
    new Recipe('A3 Test Recipe', 'Description of Recipe',
    'https://natashaskitchen.com/wp-content/uploads/2015/12/Teriyaki-Chicken-Recipe-11-480x270.jpg')
  ];

  getRecipes() {
    return this.recipes.slice(); // will return a new array copy of recipes
  }
}
