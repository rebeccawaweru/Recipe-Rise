import { Wrapper } from "../../Layouts";
import { Intro, DashMenu, RecipeMenu, NewRecipe, Reports, Edit } from "../../Components";
import { data} from "../../Utils";
import {BiTimeFive} from '../../Assets'
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../Services/api";
import { jwtDecode } from "jwt-decode";
function Dashboard() {
    const decoded = jwtDecode(localStorage.getItem('token'))
    const {username, id} = decoded.user
    const navigate = useNavigate()
    const [active, setActive] = useState("My Collection")
    const [recipes,setRecipes] = useState([])
    const [edit, setEdit] = useState(false)
    const [recipeId, setRecipeId] = useState('')
    const handleUpdate = (id)=>{
       setEdit(true)
       setRecipeId(id)
    }
    useEffect(()=>{
        api.get('/recipes').then((response)=>{
            setRecipes(response.data.filter(function(item){
                return item.owner === id
            }))
          })
    },[id, recipes])
    return (
    <Wrapper>
    <Intro location="Dashboard" title="Welcome" caption={username}/>
    <div className="dash">
    <div className="dash-main">
        <div className="dash-menu">
        <DashMenu title="My Collection" active={active} onClick={()=>{setActive("My Collection"); setEdit(false)}}/>
        <DashMenu title="Add Recipe" active={active} onClick={()=>setActive("Add Recipe")}/>
        <DashMenu title="Saved"/>
        <DashMenu title="Reports" active={active} onClick={()=>setActive("Reports")}/>
        </div>
         {active === "My Collection" && 
         edit ? <Edit id={recipeId}/> :  <RecipeMenu data={recipes} id={id} handleUpdate={handleUpdate}/>} 
        
         {active === "Add Recipe" &&  <NewRecipe id={id}/>}
         {active === "Reports" && <Reports id={id}/>}

    </div>

    <div className="sidebar">
    <p>Explore Recipes</p>
    <div className="active-line custom-width"></div>
    <div className="sidebar-content">
    {data.map((item)=>{
          return <div onClick={()=>navigate(`/recipe/detail/${item._id}`)} className="side-recipes" key={item._id}>
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