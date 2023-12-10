import { NavLink } from 'react-router-dom';
import './../styles/navigation.css'
import { BiSolidHome } from "react-icons/bi";

interface NavigationBarProps{};

const NavigationBar: React.FC<NavigationBarProps> = () =>{

    return <div className="navigation-bar">
        <NavLink to='/' ><div className='navigation-home-button'> <BiSolidHome /> </div></NavLink>
    </div>;
};

export default NavigationBar;