import { Wrapper } from "../../Layouts";
import { Intro, DashMenu, RecipeMenu, NewRecipe, Reports } from "../../Components";
import { data } from "../../Utils";
import {BiTimeFive} from '../../Assets'
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../../Services/api";
function Dashboard() {
    const {id} = useParams()
    const [user, setUser] = useState({})
    const [active, setActive] = useState("My Collection")
    const [recipes,setRecipes] = useState([])
    useEffect(()=>{
        api.get(`/user/${id}`).then((response)=>{
            setUser(response.data.user)
        });
        api.get('/recipes').then((response)=>{
            setRecipes(response.data.filter(function(item){
                return item.owner === id
            }))
          })
    },[id])
    return (
    <Wrapper>
    <Intro location="Dashboard" title="Welcome" caption={user.username}/>
    <div className="dash">
    <div className="dash-main">
        <div className="dash-menu">
        <DashMenu title="My Collection" active={active} onClick={()=>setActive("My Collection")}/>
        <DashMenu title="Add Recipe" active={active} onClick={()=>setActive("Add Recipe")}/>
        <DashMenu title="Saved"/>
        <DashMenu title="Reports" active={active} onClick={()=>setActive("Reports")}/>
        </div>
         {active === "My Collection" && <RecipeMenu data={recipes}/>}
         {active === "Add Recipe" &&  <NewRecipe/>}
         {active === "Reports" && <Reports/>}
    </div>

    <div className="sidebar">
    <p>Explore Recipes</p>
    <div className="active-line custom-width"></div>
    <div className="sidebar-content">
    {data.map((item)=>{
          return <div className="side-recipes" key={item._id}>
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