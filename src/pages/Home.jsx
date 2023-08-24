import React from 'react'
import {useFetch} from '../hooks/UseFetch'
import RecipeList from './RecipeList';
import '../index.css'

const Home = () => {
    const {data:recipes,pading,error} =useFetch(" http://localhost:3000/recipes")    
  return (
    <div > 
      {error && 
      <h1 className='text-[5rem] text-[#fff] font-bold text-center'>Something Error</h1>}
      {pading && <>
        <div class="center">
  <div class="wave"></div>
  <div class="wave"></div>
  <div class="wave"></div>
  <div class="wave"></div>
  <div class="wave"></div>
  <div class="wave"></div>
  <div class="wave"></div>
  <div class="wave"></div>
  <div class="wave"></div>
  <div class="wave"></div>
</div>
      </>}
        {recipes && <RecipeList  recipes={recipes}  />}
    </div>
  )
}

export default Home