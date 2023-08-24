import React from 'react'
import {useFetch} from '../hooks/UseFetch'
import RecipeList from './RecipeList';
import '../index.css'

const Home = () => {
    const {data:recipes,pading,error} =useFetch(" http://localhost:3000/recipes")    
  return (
    <div >   
        {recipes && <RecipeList  recipes={recipes} />}
    </div>
  )
}

export default Home