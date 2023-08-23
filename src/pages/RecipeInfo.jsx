import { useFetch } from "../hooks/UseFetch";
import { NavLink } from "react-router-dom";
function RecipeInfo() {
  const query = new URLSearchParams(location.search);
  const id = query.get("id");
  console.log(id);
  const { data:recipes, isPending, error } = useFetch(
    `http://localhost:3000/recipes/${id}`
  );
  console.log(recipes);
  return (
    <div>
      {recipes&& 
      <h1>{recipes.title}</h1>}
    </div>
  );
}

export default RecipeInfo