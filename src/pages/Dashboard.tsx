import "./../styles/dashboard.css";
import { BsPencil } from "react-icons/bs";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { NavLink } from "react-router-dom";
interface DashboardProps {
}

const Dashboard: React.FC<DashboardProps> = () => {
  return (
    <div className="dashboard">
      
      <NavLink to='/new' className="dashboard-card">
      <div>
        <p className="dashboard-card-icon"><BsPencil /></p>
        <p className="dashboard-card-text">Add recipe</p>
        </div>
        </NavLink>
        <NavLink to='/recipes'  className="dashboard-card">
      <div>
        <p className="dashboard-card-icon"><AiOutlineUnorderedList/></p>
        <p className="dashboard-card-text">See all recipes</p>
        </div>  </NavLink>
    </div>
  );
};

export default Dashboard;
