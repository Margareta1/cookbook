import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import NavigationBar from './components/NavigationBar';
import AddRecipe from './pages/AddRecipe';
import Recipes from './pages/Recipes';
import './styles/app.css'
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecipeItem } from './types/RecipeItem';

let RecipesList: RecipeItem[] =  [
  {
    key: 1,
    title: "Chocolate Chip Cookies",
    imageUrl: "https://www.allrecipes.com/recipe/23687/best-chocolate-chip-cookies/photo/",
    prepTime: "10 minutes",
    cookTime: "15 minutes",
    servings: 12,
    ingredients: ["1 cup (2 sticks) unsalted butter, softened", "1 cup granulated sugar", "1 cup packed light brown sugar", "2 large eggs", "2 teaspoons vanilla extract", "2 1/4 cups all-purpose flour", "1 teaspoon baking soda", "1 teaspoon salt", "1 cup semisweet chocolate chips"],
    cookingSteps: ["Preheat oven to 375 degrees F (190 degrees C). Line a baking sheet with parchment paper.", "Cream together the butter, granulated sugar, and brown sugar until light and fluffy. Beat in the eggs one at a time, then stir in the vanilla.", "In a separate bowl, whisk together the flour, baking soda, and salt. Gradually add to the wet ingredients, mixing until just combined. Stir in the chocolate chips.", "Drop by rounded tablespoons onto the prepared baking sheet. Bake for 10-12 minutes, or until golden brown. Let cool on the baking sheet for a few minutes before transferring to a wire rack to cool completely."],
  },
  {
    key: 2,
    title: "Chicken Parmesan",
    imageUrl: "https://www.gimmesomeoven.com/chicken-parmesan/",
    prepTime: "30 minutes",
    cookTime: "30 minutes",
    servings: 4,
    ingredients: ["1 pound boneless, skinless chicken breasts, pounded to 1/4-inch thickness", "1/2 cup all-purpose flour", "1/2 teaspoon salt", "1/4 teaspoon black pepper", "1/2 cup grated Parmesan cheese", "1/4 cup bread crumbs", "1/4 cup olive oil", "1 (28-ounce) can crushed tomatoes", "1/2 cup grated Parmesan cheese", "1/4 cup chopped fresh basil"],
    cookingSteps: ["Preheat oven to 375 degrees F (190 degrees C).", "Season chicken with salt and pepper. Dredge in flour. Dip in beaten egg, then coat in Parmesan cheese and bread crumbs.", "Heat olive oil in a large skillet over medium heat. Cook chicken in batches until golden brown on both sides and cooked through, about 5 minutes per side.", "Place chicken in a single layer in a baking dish. Pour crushed tomatoes over chicken. Sprinkle with remaining Parmesan cheese and basil.", "Bake in preheated oven for 15 minutes, or until cheese is melted and bubbly."],
  },
  {
    key: 3,
    title: "French Onion Soup",
    imageUrl: "https://www.foodnetwork.com/recipes/food-network-kitchen/french-onion-soup-recipe-2012361",
    prepTime: "30 minutes",
    cookTime: "1 hour 30 minutes",
    servings: 6,
    ingredients: ["1 tablespoon olive oil", "1 large onion, thinly sliced", "1 teaspoon sugar", "1/2 teaspoon salt", "1/4 teaspoon black pepper", "4 cups beef broth", "1/2 cup dry red wine", "1 bay leaf", "1 (10.75 ounce) can condensed beef broth", "1/2 cup grated Gruyère cheese"],
    cookingSteps: ["Heat olive oil in a large pot over medium heat. Add onion and cook until softened and translucent, about 10 minutes.", "Add sugar, salt, and pepper and cook for 1 minute more.", "Add beef broth, red wine, bay leaf, and condensed beef broth. Bring to a boil, then reduce heat and simmer for 1 hour.", "Ladle soup into bowls and top with Gruyère cheese.", "Broil until cheese is melted and bubbly."],
  },
];


const AddRecipeHandler = (data: RecipeItem) =>{
  if(data){
    RecipesList.push(data);
  }
}

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={new QueryClient}>
      <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/new' element={<AddRecipe />} />
        <Route path='/recipes' element={<Recipes recipes={RecipesList}/>} />
      </Routes>
      </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
