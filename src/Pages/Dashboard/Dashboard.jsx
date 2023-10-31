import { Wrapper } from "../../Layouts";
import { Intro, DashMenu, RecipeMenu, Input } from "../../Components";
import { data, recipeSchema } from "../../Utils";
import {BiTimeFive, BiPlus} from '../../Assets'
import { useState } from "react";
import { useFormik } from "formik";

function Dashboard() {
    const [active, setActive] = useState("My Recipes")
    const [list, setList] = useState([])
    const [ingredients, setIngredients] = useState({
        item:"",
        price:0
    });
    const handleChange = (e) =>{
        setIngredients((ingredients)=>({...ingredients, [e.target.name]:e.target.value}))
    }
    const handleAdd = () =>{
        setList((list)=>[...list, ingredients])
        setIngredients({ item: "", price: 0 });
    }

    const  formik = useFormik({
        initialValues:{
            name:"",
            preptime:"",
            cooktime:"",
            category:"",
            description:""
        },
        validationSchema:recipeSchema,
        onSubmit:async(values)=>{

        }
    })
    return (
    <Wrapper>
    <Intro title="Dashboard" caption="Rebecca Waweru"/>
    <div className="dash">
    <div className="dash-main">
        <div className="dash-menu">
        <DashMenu title="My Recipes" active={active} onClick={()=>setActive("My Recipes")}/>
        <DashMenu title="Create" active={active} onClick={()=>setActive("Create")}/>
        </div>
         {active === "My Recipes" ? <RecipeMenu/> : 
         <form className="create" onSubmit={formik.handleSubmit}>
            <Input label="Name" placeholder="Name" {...formik.getFieldProps("name")} error={formik.touched.name && formik.errors.name} />
            <Input label="Prep Time" placeholder="e.g 30 min" {...formik.getFieldProps("preptime")} error={formik.touched.preptime && formik.errors.preptime}/>
            <Input label="Cook Time" placeholder="e.g 60 min" {...formik.getFieldProps("cooktime")} error={formik.touched.cooktime && formik.errors.cooktime}/>
            <label>Category</label>
             <select {...formik.getFieldProps("category")} error={formik.touched.category && formik.errors.category} required>
                <option value="">Select</option>
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
             </select>
             <p>{formik.touched.category && formik.errors.category}</p>
             <label>Ingredients</label>
             <div className="ingredient">
                <Input label="Item" name="item" value={ingredients.item} onChange={handleChange} required/>
                <Input label="Price" name="price" value={ingredients.price} onChange={handleChange} required/>
                <button type="button" onClick={handleAdd} className="btnAdd"><BiPlus/>Add</button>
             </div>
           <div className="ing">
            {list.length > 0 && list.map((item, index) => (
                <div className="lst" key={index}>
                {item.item}: {item.price}
                </div>
            ))}
           </div>
            <textarea rows={10} placeholder="Description" {...formik.getFieldProps("description")} required></textarea>
            <p className="error">{formik.touched.description && formik.errors.description}</p>
            <button type="submit" className="btn">Submit</button>
         </form>}
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