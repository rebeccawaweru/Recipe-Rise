import { Wrapper } from "../../Layouts";
import { Intro, DashMenu, RecipeMenu, NewRecipe, Reports, Edit } from "../../Components";
import { data} from "../../Utils";
import {BiTimeFive} from '../../Assets'
import { useState,useEffect,useMemo } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../Services/api";
import { jwtDecode } from "jwt-decode";
function Dashboard() {
    const decoded = jwtDecode(localStorage.getItem('token'))
    const {username, id} = decoded.user
    const navigate = useNavigate()
    const [active, setActive] = useState("My Collection")
    const [recipes,setRecipes] = useState([])
    const [list, setList] = useState([])
    const [saved, setSaved] = useState([])
    const combined = useMemo(() => {
        return [...list, ...data];
      },[list]);
    const [edit, setEdit] = useState(false)
    const [recipeId, setRecipeId] = useState('')
    const handleUpdate = (id)=>{
       setEdit(true)
       setRecipeId(id)
    }
    useEffect(()=>{
        api.get(`/user/${id}`).then((response)=>{
            // Convert bookmarked recipes to an array of string IDs
            const bookmarkedRecipeIds = response.data.user.bookmarks.map((bookmark) => bookmark.id ? bookmark.id.toString() : null);
           // Find recipes whose IDs are in bookmarks
            setSaved(combined.filter((recipe) =>
            bookmarkedRecipeIds.includes(recipe._id ? recipe._id.toString() : null)
            ));
        })
        api.get('/recipes').then((response)=>{
            setList(response.data)
            setRecipes(response.data.filter(function(item){
                return item.owner === id
            }))
          })
    },[id, recipes,combined])
    return (
    <Wrapper>
    <Intro location="Dashboard" title="Welcome" caption={username}/>
    <div className="dash">
    <div className="dash-main">
        <div className="dash-menu">
        <DashMenu title="My Collection" active={active} onClick={()=>{
            setActive("My Collection"); 
            setEdit(false)}}/>
        <DashMenu title="Add Recipe" active={active} onClick={()=>setActive("Add Recipe")}/>
        <DashMenu title="Saved" active={active} onClick={()=>setActive("Saved")}/>
        <DashMenu title="Reports" active={active} onClick={()=>setActive("Reports")}/>
        </div>
          {active === "My Collection" && edit && <Edit id={recipeId}/>}
          {active === "My Collection" && !edit && <RecipeMenu data={recipes} id={id} handleUpdate={handleUpdate}/>}
         {active === "Add Recipe" &&  <NewRecipe id={id}/>}
         {active === "Reports" && <Reports id={id}/>}
         {active === "Saved" && <RecipeMenu data={saved}/>}


    </div>

    <div className="sidebar">
    <p>Explore Recipes</p>
    <div className="active-line custom-width"></div>
    <div className="sidebar-content">
    {data.map((item)=>{
          return <div key={item._id} onClick={()=>navigate(`/recipe/detail/${item._id}`)} className="side-recipes" >
        <img src={item.avatar} alt="recipe"/>
         <div className="content">
          <p className="time">{item.category}</p>
         <p className="title">{item.name}</p>
         <div className="rating">
        <p className="icon"><BiTimeFive size={15}/></p>
        <p>55min</p>
        </div>
        </div>
        </div>
        })}
    </div>
    </div>

    </div>
    </Wrapper>
    );
}

export default Dashboard;