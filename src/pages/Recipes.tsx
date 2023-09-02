import { useState } from 'react';
import { RecipeItem } from '../types/RecipeItem';
import "./../styles/recipes.css";
import { Col, Empty, FloatButton, Row, Space } from 'antd';
import RecipePreview from '../components/RecipePreview';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import FullRecipe from './FullRecipe';

interface RecipesProps{
    recipes: RecipeItem[]
}


const Recipes: React.FC<RecipesProps> = (data) =>{
    const [currentRecipe, setCurrentRecipe] = useState<RecipeItem>();
    const expandHandler = (k:number)=>{
        setCurrentRecipe(data.recipes.find(j=> j.key==k))
    }

    return <div className='recipes'>
        <div className='recipes-list-container'>
            <div><h2>Pick a recipe. Happy cooking!</h2>
            <div className='recipes-list'>
                {data.recipes.map(r=> <RecipePreview recipe={r} key={r.key} expandHandler={expandHandler} />)}
            </div>
            </div>
        </div>
        <div className='full-recipe-container'>
            {currentRecipe ? <FullRecipe recipe={currentRecipe} /> :  <Empty description={false}  imageStyle={{ height:"30rem"}} /> }
        </div>
        <FloatButton href='/new' type='primary' icon={<AiOutlinePlusCircle />} style={{height:"70px", width:"70px", boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"}} />
    </div>
}

export default Recipes;
