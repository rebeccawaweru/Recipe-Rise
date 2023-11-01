import { Wrapper } from "../../Layouts";
import { Intro, DashMenu, RecipeMenu, NewRecipe } from "../../Components";
import { data } from "../../Utils";
import {BiTimeFive} from '../../Assets'
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../../Services/api";
function Dashboard() {
    const {id} = useParams()
    const [user, setUser] = useState({})
    const [active, setActive] = useState("My Recipes")
    useEffect(()=>{
        api.get(`/user/${id}`).then((response)=>{
            setUser(response.data.user)
        })
    },[id])
    return (
    <Wrapper>
    <Intro location="Dashboard" title="Welcome" caption={user.username}/>
    <div className="dash">
    <div className="dash-main">
        <div className="dash-menu">
        <DashMenu title="My Recipes" active={active} onClick={()=>setActive("My Recipes")}/>
        <DashMenu title="Create" active={active} onClick={()=>setActive("Create")}/>
        </div>
         {active === "My Recipes" ? <RecipeMenu/> : <NewRecipe/>}
    </div>
    <div className="sidebar">
    <p>Explore Recipes</p>
    <div className="active-line custom-width"></div>
    <div className="sidebar-content">
    {data.map((item)=>{
          return <div className="side-recipes" key={item.id}>
        <img src={item.image} alt="recipe"/>
         <div className="content">
          <p className="time">{item.type}</p>
         <p className="title">{item.title}</p>
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