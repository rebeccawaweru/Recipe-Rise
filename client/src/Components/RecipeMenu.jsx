import {BiTimeFive,AiOutlineStar,BsChatFill,AiFillEye,RiDeleteBin6Fill,MdOutlineEdit} from '../Assets'
import { useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2';
import api from '../Services/api';
import { success } from '../Utils';
function RecipeMenu(props) {
    const navigate = useNavigate()
    const handleDelete = async(id)=>{
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          confirmButtonText:'Delete',
          confirmButtonColor:'red',
          showCancelButton: true,
        }).then((result)=>{
          if (result.isConfirmed) {
            api.delete(`/delete/${id}`).then((response)=>{
                if(response.data.success){
                    success('Recipe deleted!')
                }
            })
          }
        })
      }
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
            {props.id ? <div onClick={()=>props.handleUpdate(item._id)}>
            <p className='icon'><MdOutlineEdit size={15}/></p>
                <button style={{border:'none', background:"none", cursor:"pointer"}}>edit</button>
            </div> : null}
          
           {props.id ? <div onClick={()=>handleDelete(item._id)}>
            <p className='icon'><RiDeleteBin6Fill size={15}/></p>
                <button style={{border:'none', background:"none", cursor:"pointer"}}>del</button>
            </div> : null}
         
            
       
         </div>
        </div>
   
        </div>
        }): <p>No recipes</p>}
        </div>
    );
}

export default RecipeMenu;