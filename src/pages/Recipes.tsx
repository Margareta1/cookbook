import { useState } from 'react';
import { RecipeItem } from '../types/RecipeItem';
import "./../styles/recipes.css";
import { Col, Empty, Row } from 'antd';
import RecipePreview from '../components/RecipePreview';

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
            {currentRecipe ? <></> : <Empty />}
        </div>
    </div>
}

export default Recipes;