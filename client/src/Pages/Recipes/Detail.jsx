import { Wrapper } from "../../Layouts";
import { Intro } from "../../Components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../Services/api";
import { data, success } from "../../Utils";
import {BsBookmark,BsBookmarkFill} from '../../Assets'
import { jwtDecode } from "jwt-decode";
function Detail() {
    const {id} = useParams()
    const [recipe,setRecipe] = useState({})
    const custom = data.find(item => item._id === Number(id)) || {};
    const [saved, setSaved] = useState(false)
    const [decoded, setDecoded] = useState(false)
    const [token, setToken] = useState({})
    const handleAdd = () =>{
      api.post(`/bookmark/${token.user.id}`,{id}).then((response)=>{
        if(response.data.success){
          success('Recipe added to bookmarks')
        }
      })
    }
    const handleRemove = () =>{
      api.post(`/removebookmark/${token.user.id}`,{id}).then((response)=>{
        if(response.data.success){
          success('Recipe removed from bookmarks')
        }
      })
    }
   useEffect(()=>{
    if(localStorage.getItem('token')){
      setDecoded(true)
      setToken(jwtDecode(localStorage.getItem('token')))
      const code = jwtDecode(localStorage.getItem('token'))
       api.get(`/user/${code.user.id}`).then((response)=>{
        const bookmarkedRecipeIds = response.data.user.bookmarks.map((bookmark) => bookmark.id ? bookmark.id.toString() : null);
        console.log(response.data.user.bookmarks)
        if(bookmarkedRecipeIds.includes(id.toString())){
          setSaved(true)
        }
      })
    }
    api.get(`/recipe/${id}`).then((response)=>{
      if(response.data){
        setRecipe(response.data.recipe || {})

      }
    })

    },[id])
    return (
     <Wrapper>
        <Intro location="Recipes" title={recipe.name || custom.name} caption={recipe.category || custom.category}/>
        <div className="details">
            <img src={recipe.avatar|| custom.avatar} alt="recipe-detail" className="cover"/>
            <div style={{marginTop:"-1%"}}>
            {decoded ?
            saved ? <BsBookmarkFill className="bookmark" onClick={()=>{setSaved(!saved); handleRemove()}} /> : <BsBookmark className="bookmark" onClick={()=>{setSaved(!saved); handleAdd()}}/>
            : null}
            {recipe.ingredients && <>
            <p>Expenditure: Ksh {recipe.ingredients.reduce((acc, item) => acc + Number(item.price), 0)} </p>
            <b>Ingredients</b>
            </>
           }
            {recipe.ingredients && recipe.ingredients.map((item, index)=>{
                return <p key={index}>{index + 1}. {item.item} - Ksh {item.price}</p>
            })}
            <b>Description</b>
            <p>{recipe.description || custom.description}</p>
            </div>
       
        </div>
     </Wrapper>
    );
}

export default Detail;