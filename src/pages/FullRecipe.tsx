import { RecipeItem } from "../types/RecipeItem";

interface FullRecipeProps {
    recipe: RecipeItem
}

const FullRecipe: React.FC<FullRecipeProps> = (data) => {
    console.log("inside full recipe", data.recipe)
  return (
    <div>
      
    </div>
  );
};

export default FullRecipe;
