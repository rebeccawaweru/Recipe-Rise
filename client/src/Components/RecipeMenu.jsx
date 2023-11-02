import {BiTimeFive,AiOutlineStar,BsChatFill,AiFillEye} from '../Assets'
import { useNavigate } from 'react-router-dom';
function RecipeMenu(props) {
    const navigate = useNavigate()
    return (
        <div className="recipe-menu">
        {props.data.length > 0 ? props.data.map((item)=>{
          return <div className="recipes" key={item._id}><img src={item.avatar} alt="recipe"/>
         <div className="content">
          <p className="time">{item.category}</p>
         <p className="title">{item.name}</p>
          <div className="rating">
          <p><AiOutlineStar color="grey" size={20}/></p>
          <p><AiOutlineStar  color="grey" size={20}/></p>
          <p><AiOutlineStar  color="grey" size={20}/></p>
          <p><AiOutlineStar  color="grey" size={20}/></p>
          <p><AiOutlineStar  color="grey" size={20}/></p>
          <p>0 / 5</p>
         </div>
         <p>{item.description.slice(0, 85)}...</p>
         <div className="rating desc">
            <div>
                <p className="icon"><BiTimeFive size={15}/></p>
                <p>{item.cooktime}</p>
            </div>
            <div>
                <p className="icon"><BsChatFill size={15}/></p>
                <p>{item.budget ? `Ksh ${item.budget}` : 0}</p>
            </div>

            <div onClick={()=>navigate(`/recipe/detail/${item._id}`)} >
                <p className="icon"><AiFillEye size={15}/></p>
                <button style={{border:'none', background:"none", cursor:"pointer"}}>view</button>
            </div>
         </div>
        </div>
   
        </div>
        }): <p>No recipes</p>}
        </div>
    );
}

export default RecipeMenu;