import { useState } from 'react';
import { RecipeItem } from '../types/RecipeItem';
import "./../styles/recipes.css";
import { Empty, FloatButton } from 'antd';
import RecipePreview from '../components/RecipePreview';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import FullRecipe from './FullRecipe';
import { NavLink } from 'react-router-dom';
import { useRecipeContext } from '../store/recipes-context';
interface RecipesProps{
}


const Recipes: React.FC<RecipesProps> = () =>{
    const [currentRecipe, setCurrentRecipe] = useState<RecipeItem>();
    const cont = useRecipeContext();
    const expandHandler = (k:number)=>{
        setCurrentRecipe(cont.rec.find((j:any)=> j.key==k))
    }


    return <div className='recipes'>
        <div className='recipes-list-container'>
            <div><h2>Pick a recipe. Happy cooking!</h2>
            <div className='recipes-list'>
                {cont.rec.map(r=> <RecipePreview recipe={r} key={r.key} expandHandler={expandHandler} />)}
            </div>
            </div>
        </div>
        <div className='full-recipe-container'>
            {currentRecipe ? <FullRecipe recipe={currentRecipe} /> :  <Empty description={false}  imageStyle={{ height:"30rem"}} /> }
        </div>
        <NavLink to={'/new'}>
        <FloatButton href='/new' type='primary' icon={<AiOutlinePlusCircle />} style={{height:"70px", width:"70px", boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"}} /></NavLink>
    </div>
}

export default Recipes;
