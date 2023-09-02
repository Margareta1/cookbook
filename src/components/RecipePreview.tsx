import { Button, Col, Popover, Row, Space } from "antd";
import { RecipeItem } from "../types/RecipeItem";
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
    <>
    <Space direction="vertical" style={{color:"white",width:"80%", padding:"1rem", backgroundColor:"#5178B2", borderRadius:"15px", marginTop:"1rem", marginBottom:"1rem"}}>
    <Row>
      <Col span={24}><h3 style={{margin:"0"}}>{data.recipe.title}</h3></Col>
    </Row>
    <Row>
      <Col span={16}><div className="preview-info">
          <p>Prepping time: {data.recipe.prepTime}</p>
          <p>Cooking time: {data.recipe.cookTime}</p>
          <p>Servings: {data.recipe.servings}</p>
        </div></Col>
      <Col span={8} style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
               
        <div className="preview-buttons" style={{width:"40%"}}>
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
      </Col>
    </Row>
    </Space>
    </>

  );
};

export default RecipePreview;
