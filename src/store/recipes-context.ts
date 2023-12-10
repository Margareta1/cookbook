import { createContext, createElement, useContext, useState } from "react";
import { RecipeItem } from "../types/RecipeItem";

const recipes = [
    {
      "key": 1,
      "title": "Chocolate Chip Cookies",
      "imageUrl": "https://picsum.photos/200/200",
      "prepTime": "10 minutes",
      "cookTime": "15 minutes",
      "servings": 24,
      "ingredients": ["1 cup (2 sticks) unsalted butter, softened", "1 cup granulated sugar", "1 cup packed light brown sugar", "2 large eggs", "2 teaspoons vanilla extract", "2 1/4 cups all-purpose flour", "1 teaspoon baking soda", "1 teaspoon salt", "1 cup semisweet chocolate chips"],
      "cookingSteps": ["Preheat oven to 375 degrees F (190 degrees C). Line a baking sheet with parchment paper.", "Cream together the butter, granulated sugar, and brown sugar until light and fluffy. Beat in the eggs one at a time, then stir in the vanilla.", "In a separate bowl, whisk together the flour, baking soda, and salt. Gradually add to the wet ingredients, mixing until just combined. Stir in the chocolate chips.", "Drop by rounded tablespoons onto the prepared baking sheet. Bake for 10-12 minutes, or until golden brown. Let cool on the baking sheet for a few minutes before transferring to a wire rack to cool completely."]
    },
    {
      "key": 2,
      "title": "Spaghetti and Meatballs",
      "imageUrl": "https://picsum.photos/200/200",
      "prepTime": "30 minutes",
      "cookTime": "30 minutes",
      "servings": 4,
      "ingredients": ["1 pound ground beef", "1/2 cup breadcrumbs", "1 egg", "1/4 cup grated Parmesan cheese", "1 teaspoon dried oregano", "1/2 teaspoon garlic powder", "1/4 teaspoon salt", "1/4 teaspoon black pepper", "1 jar (28 ounces) marinara sauce", "1 pound spaghetti noodles"],
      "cookingSteps": ["Preheat oven to 350 degrees F (175 degrees C).", "In a large bowl, combine the ground beef, breadcrumbs, egg, Parmesan cheese, oregano, garlic powder, salt, and pepper. Mix well.", "Form the mixture into 1-inch meatballs. Place the meatballs on a baking sheet.", "Bake in the preheated oven for 20 minutes, or until cooked through.", "While the meatballs are baking, cook the spaghetti noodles according to the package directions.", "To serve, drain the spaghetti noodles and place them in a large bowl. Top with the meatballs and marinara sauce."]
    },
    {
      "key": 3,
      "title": "Chicken Stir-Fry",
      "imageUrl": "https://picsum.photos/200/200",
      "prepTime": "15 minutes",
      "cookTime": "20 minutes",
      "servings": 2,
      "ingredients": ["1 tablespoon vegetable oil", "1 pound boneless, skinless chicken breasts, cut into 1-inch pieces", "1/2 onion, chopped", "1 red bell pepper, chopped", "1 green bell pepper, chopped", "1 (14.5 ounce) can diced tomatoes, undrained", "1 (10 ounce) can chicken broth", "1 tablespoon soy sauce", "1 teaspoon garlic powder", "1/2 teaspoon black pepper"],
      "cookingSteps": ["Heat the oil in a large skillet or wok over medium-high heat. Add the chicken and cook until browned on all sides.", "Add the onion, red bell pepper, and green bell pepper to the skillet. Cook until softened, about 5 minutes.", "Stir in the diced tomatoes, chicken broth, soy sauce, garlic powder, and black pepper. Bring to a boil, then reduce heat and simmer for 10 minutes, or until the chicken is cooked through."],
    },
]
type RecipeContextProps ={
  rec: RecipeItem[];
  addRec: (v:RecipeItem)=>void;
}
const RecipeContext = createContext<RecipeContextProps>({rec:[], addRec:()=>{}});

interface RecipeContextProviderProps{
  children: React.ReactNode;
}

export const RecipeContextProvider: React.FC<RecipeContextProviderProps> = ({children}) =>{
  const [recs, addRecipes] = useState<RecipeItem[]>(recipes); 
  const addNewRecipe = (val:RecipeItem)=>{
    addRecipes([...recs, val]);
  }
  const contextValue:RecipeContextProps = {rec:recs, addRec:addNewRecipe};
  
  return createElement(RecipeContext.Provider,{value:contextValue}, children)
}
export const useRecipeContext = () => useContext(RecipeContext);