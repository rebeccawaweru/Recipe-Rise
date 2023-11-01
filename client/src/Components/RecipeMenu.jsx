import { data } from "../Utils";
import {BiTimeFive,AiOutlineStar,BsChatFill,BiHeart} from '../Assets'

function RecipeMenu() {
    return (
        <div className="recipe-menu">
        {data.map((item)=>{
          return <div className="recipes" key={item.id}><img src={item.image} alt="recipe"/>
         <div className="content">
          <p className="time">{item.type}</p>
         <p className="title">{item.title}</p>
          <div className="rating">
          <p><AiOutlineStar color="grey" size={20}/></p>
          <p><AiOutlineStar  color="grey" size={20}/></p>
          <p><AiOutlineStar  color="grey" size={20}/></p>
          <p><AiOutlineStar  color="grey" size={20}/></p>
          <p><AiOutlineStar  color="grey" size={20}/></p>
          <p>0 / 5</p>
         </div>
         <p>{item.description}</p>
         <div className="rating desc">
            <div>
                <p className="icon"><BiTimeFive size={15}/></p>
                <p>55min</p>
            </div>
            <div>
                <p className="icon"><BsChatFill size={15}/></p>
                <p> 0</p>
            </div>
            <div>
                <p className="icon"><BiHeart size={15}/></p>
                <p>4 likes</p>
            </div>
         </div>
        </div>
        </div>
        })}
        </div>
    );
}

export default RecipeMenu;