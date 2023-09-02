import './../styles/navigation.css'
import { BiSolidHome } from "react-icons/bi";

interface NavigationBarProps{};

const NavigationBar: React.FC<NavigationBarProps> = () =>{

    return <div className="navigation-bar">
        <a href='/' ><div className='navigation-home-button'> <BiSolidHome /> </div></a>
    </div>;
};

export default NavigationBar;