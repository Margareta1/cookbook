import { Button, Popover } from "antd";
import { RecipeItem } from "../types/RecipeItem";
import "./../styles/recipePreview.css";
import { FaExpand, FaList } from "react-icons/fa";

interface RecipePreviewProps {
  recipe: RecipeItem;
  expandHandler: (key: number) => void;
}
const RecipePreview: React.FC<RecipePreviewProps> = (data) => {
  const content = (
    <div>
      {data.recipe.ingredients.map((i) => (
        <p key={i}>{i}</p>
      ))}
    </div>
  );

  return (
    <div className="recipe-preview-container">
      <h3>{data.recipe.title}</h3>
      <div className="preview-inside">
        <div className="preview-info">
          <p>Prepping time: {data.recipe.prepTime}</p>
          <p>Cooking time: {data.recipe.cookTime}</p>
          <p>Servings: {data.recipe.servings}</p>
        </div>
        <div className="preview-buttons">
          <p>
            <Popover
              placement="right"
              title={"Ingredients"}
              content={content}
              arrow={true}
            >
              <Button shape="circle" style={{ width: "20px" }}>
                <FaList />
              </Button>
            </Popover>
          </p>
          <p>
            <Button
              shape="circle"
              style={{ width: "20px" }}
              onClick={(e) => {
                e.preventDefault();
                data.expandHandler(data.recipe.key);
              }}
            >
              <FaExpand />
            </Button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecipePreview;
