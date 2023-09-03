import { Space } from "antd";
import { RecipeItem } from "../types/RecipeItem";
import "./../styles/fullRecipe.css";
interface FullRecipeProps {
  recipe: RecipeItem;
}

const FullRecipe: React.FC<FullRecipeProps> = (data) => {
  return (
    <div style={{ width: "100%" }}>
      <h1>{data.recipe.title}</h1>
      <div className="img-container">
        <img src={data.recipe.imageUrl} className="meal-img" />
      </div>
      <Space.Compact
        block
        style={{ fontSize: "14px", fontWeight: "bold", marginBottom: "2rem" }}
      >
        <p>Prep time: {data.recipe.prepTime}</p>
        <p>Cooking time: {data.recipe.cookTime}</p>
        <p>Servings: {data.recipe.servings}</p>
      </Space.Compact>
      <h3 className="h3-align">Ingredients:</h3>
      <Space direction="vertical" style={{ display: "flex" }}>
        <ul className="ingredients-list">
          {data.recipe.ingredients.map((i) => (
            <li>{i}</li>
          ))}
        </ul>
      </Space>
      <h3 className="h3-align">Cooking steps:</h3>
      <Space direction="vertical" style={{ display: "flex" }}>
        <ol className="steps-list">
          {data.recipe.cookingSteps.map((i) => (
            <li>{i}</li>
          ))}
        </ol>
      </Space>
    </div>
  );
};

export default FullRecipe;