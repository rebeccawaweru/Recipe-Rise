import { Wrapper } from "../../Layouts";
import { Intro } from "../../Components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../Services/api";
import { data } from "../../Utils";
function Detail() {
    const {id} = useParams()
    const [recipe,setRecipe] = useState({})
    const custom = data.find(item => item._id === Number(id)) || {};
    console.log(custom,id)
   useEffect(()=>{
    api.get(`/recipe/${id}`).then((response)=>{
      if(response.data){
        setRecipe(response.data.recipe || {})
      }
    })
    },[id])
    return (
     <Wrapper>
        <Intro location="Recipes" title={recipe.name || custom.name} caption={recipe.category || custom.category}/>
        <div className="auth">
            <img src={recipe.avatar|| custom.avatar} alt="recipe-detail" className="cover"/>
            {recipe.ingredients && <>
            <p>Budget: Ksh {recipe.budget} | Expenditure: Ksh {recipe.ingredients.reduce((acc, item) => acc + Number(item.price), 0)} </p>
            <b>Ingredients</b>
            </>
         }
            {recipe.ingredients && recipe.ingredients.map((item)=>{
                return <p>{item.item} - Ksh {item.price}</p>
            })}
            <b>Description</b>
            <p>{recipe.description || custom.description}</p>


        </div>

     </Wrapper>
    );
}

export default Detail;