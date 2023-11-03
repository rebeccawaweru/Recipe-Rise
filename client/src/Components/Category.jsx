import {useNavigate} from "react-router-dom"
function Category({image, title, caption}) {
    const navigate = useNavigate()
    return (
        <div className="category" onClick={()=>navigate(`/recipes?category=${title}`)}>
            <img src={image} alt="category"/>
            <p>{title}</p>
            <p>{caption}</p>
        </div>
    );
}

export default Category;