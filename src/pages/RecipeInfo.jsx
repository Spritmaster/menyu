import { useFetch } from "../hooks/UseFetch";
import { NavLink } from "react-router-dom";
function RecipeInfo() {
  const query = new URLSearchParams(location.search);
  const id = query.get("id");
  const { data:recipe, isPending, error } = useFetch(
    `http://localhost:3000/recipes/${id}`
  );
  console.log(recipe);
  
  
  return (
    <div className="bg-[url(https://media.istockphoto.com/id/897487596/photo/black-board-as-mockup-for-restaurant-menu.jpg?s=612x612&w=0&k=20&c=SG7Ni-B8kNilyaPiFozizYrJa2cYN8u2A3wQ2lpX6O0=)] bg-no-repeat bg-cover bg-top w-[850px] mx-[auto]  px-[10rem] rounded-[12px] mt-[3rem] mb-[4rem] pb-[15rem] relative">
      {recipe&& 
      <div key={recipe.id}>
        <div className="flex  justify-center mx-[auto] gap-[1rem] max-w-[610px] mt-[25rem] ">
        <img className=" rounded-[8px] shado" src={recipe.images.image1} alt="" width={300} />
        <img className=" rounded-[8px] shado" src={recipe.images.image2} alt="" width={300}/>
        </div>
<h1 className="text-[3rem] text-[#50fed3] font-extrabold text-center mt-[2rem]">{recipe.title}</h1>
<div>
<h1 className="text-[2rem] font-bold text-[#fea648] italic mb-[1rem]">Cooking Time</h1>
<div className="flex gap-[2rem] items-center">
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc8QHzy3YePHCOTkKi82HVwoqg_DoEkEyqay83DH7K_W8I1A6GqPZNopTFWh_0oWbMKjc&usqp=CAU" alt="" className="rounded-[50%] " width={50} height={50}/>
<h1 className="text-[1.8rem] font-semibold text-[#fff]">{recipe.cookingTime}</h1>
</div>

</div>
        <div className="flex justify-between mt-[5rem]">
        <div >
        <h1 className="text-[2.5rem] uppercase font-bold text-[#5555f7] text-center mb-[3rem]">ingredients</h1>
        <ul className="text-[#53fcff] text-[1.8rem] flex flex-col gap-[2rem]">
          {recipe.ingredients[0] &&<li className="li-hr flex gap-[1rem] items-center py-[4px]">
            <span className="text-[2rem] font-bold text-[#222258] w-[30px] flex items-center justify-center bg-[#fff] rounded-[50%]">1</span>{recipe.ingredients[0]}
          </li>}
          {recipe.ingredients[1] &&<li className="li-hr flex gap-[1rem] items-center py-[4px]">
            <span className="text-[2rem] font-bold text-[#222258] w-[30px] flex items-center justify-center bg-[#fff] rounded-[50%]">2</span>{recipe.ingredients[1]}
          </li>}
          {recipe.ingredients[2] &&<li className="li-hr flex gap-[1rem] items-center  py-[4px]">
            <span className="text-[2rem] font-bold text-[#222258] w-[30px] flex items-center justify-center bg-[#fff] rounded-[50%]">3</span>{recipe.ingredients[2]}
          </li>}
          {recipe.ingredients[3] &&<li className="li-hr flex gap-[1rem] items-center py-[4px]">
            <span className="text-[2rem] font-bold text-[#222258] w-[30px] flex items-center justify-center bg-[#fff] rounded-[50%]">4</span>{recipe.ingredients[3]}
          </li>}
          {recipe.ingredients[4] &&<li className="li-hr flex gap-[1rem] items-center py-[4px]">
            <span className="text-[2rem] font-bold text-[#222258] w-[30px] flex items-center justify-center bg-[#fff] rounded-[50%]">5</span>{recipe.ingredients[4]}
          </li>}
        </ul>
        </div>

        <div>
          <h1  className="text-[2.5rem] uppercase font-bold text-[#5555f7] text-center mb-[3rem]">retsept</h1>
          <p className="text-[1.8rem] text-[#fff] max-w-[300px]">{recipe.method}</p>
        </div>
        </div>
      </div>}

      <NavLink className="active:text-[#ffb667] font-bold text-[2rem] text-[#9d2626] px-[3rem] py-[1rem]
      rounded-[8px] bg-[#a9ff47] absolute bottom-[15px] left-[40%]" to={"/"}>GO BACK</NavLink>
    </div>
  );
}

export default RecipeInfo