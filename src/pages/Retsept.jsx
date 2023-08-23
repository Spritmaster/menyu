import { useFetch } from "../hooks/UseFetch";
import { NavLink } from "react-router-dom";
function Retsept() {
  const query = new URLSearchParams(location.search);
  const id = query.get("id");
  console.log(id);
  const { data, isPending, error } = useFetch(
    `http://localhost:3000/recipes/${id}`
  );
  console.log(data);
  return (<>
  </>
  );
}

export default Retsept;
