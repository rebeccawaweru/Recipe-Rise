import { Intro, RecipeMenu } from "../../Components";
import { Wrapper } from "../../Layouts";
import { data } from "../../Utils";
import { useEffect,useState } from "react";
import api from "../../Services/api";
import { useSearchParams } from "react-router-dom";
function Recipes() {
    const [query] = useSearchParams()
   const category = query.get('category')
    const [recipes,setRecipes] = useState([])
    const combinedArray = [...recipes, ...data]
    const sortedArray = combinedArray.filter(function(item){
           return item.category === category
    })
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
        <RecipeMenu data={category ? sortedArray : combinedArray}/>
        </div>
    </Wrapper>
    );
}

export default Recipes;