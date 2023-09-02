import "./../styles/dashboard.css";
import { BsPencil } from "react-icons/bs";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { RecipeItem } from "../types/RecipeItem";
interface DashboardProps {
}

const Dashboard: React.FC<DashboardProps> = () => {
  return (
    <div className="dashboard">
      
      <a href='/new' className="dashboard-card">
      <div>
        <p className="dashboard-card-icon"><BsPencil /></p>
        <p className="dashboard-card-text">Add recipe</p>
        </div>
        </a>
        <a href='/recipes'  className="dashboard-card">
      <div>
        <p className="dashboard-card-icon"><AiOutlineUnorderedList/></p>
        <p className="dashboard-card-text">See all recipes</p>
        </div>  </a>
    </div>
  );
};

export default Dashboard;
