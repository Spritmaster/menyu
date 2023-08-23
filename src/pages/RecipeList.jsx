import React from 'react'
import { NavLink } from 'react-router-dom';

const RecipeList = ({recipes}) => {
    console.log(recipes[0].images.image1);
  return (
    <div className='grid gap-[10rem] my-[6rem]  grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-[1] mx-[auto] max-w-[1000px]'>
        {recipes && recipes.map((recipe)=>{
        return(
            <div className='flex flex-col max-w-[32rem] px-[2rem] bg-[url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeZfFv2qY925FQnSuHNvqXn8MDs39QhCJ_UsPB9-HYjiSdoa5gZnO4qXF7NjYkin2IRjY&usqp=CAU")] bg-no-repeat bg-cover bg-top items-center pt-[3rem] pb-[1rem] rounded-[8px] justify-between' key={recipe.id}>
                
               <div className='flex flex-col items-center'>
               <img className=' rounded-[50%] h-[150px] w-[150px] object-cover mb-[1rem]' src={recipe.images.image1} alt="foodPicture"  />
                <h1 className='text-[2rem] font-bold italic mb-[2rem]'>{recipe.title}</h1>
                <p className='text-[1.5rem] text-[#28288b] text-center'>{recipe.method}</p>
               </div>
                
     <NavLink className='text-[1.6rem] p-[1rem] bg-[#ffb846] rounded-[1rem] font-bold uppercase mt-[2rem]' to={`/recept/?id=${recipe.id}`}>Read More</NavLink>

            </div>
        )})}
    </div>
  )
}

export default RecipeList