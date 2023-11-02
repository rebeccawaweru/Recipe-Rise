import { Intro, RecipeMenu } from "../../Components";
import { Wrapper } from "../../Layouts";
import { data } from "../../Utils";
import { useEffect,useState } from "react";
import api from "../../Services/api";
function Recipes() {
    const [recipes,setRecipes] = useState([])
    const combinedArray = [...recipes, ...data]
    useEffect(()=>{
        api.get('/recipes').then((response)=>{
            setRecipes(response.data.filter(function(item){
                return item.status === "Public"
            }))
        })
    },[])
    return (
    <Wrapper>
        <Intro location="Home" title="Recipes" caption="Trending Recipes"/>
        <div className="recipe-wrapper">
        <RecipeMenu data={combinedArray}/>
        </div>
    </Wrapper>
    );
}

export default Recipes;