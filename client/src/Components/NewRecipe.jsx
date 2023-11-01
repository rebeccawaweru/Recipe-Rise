import {useState} from 'react';
import { useFormik } from 'formik';
import api from '../Services/api';
import Input from './Input';
import {BiPlus} from '../Assets'
import { recipeSchema } from '../Utils';
function NewRecipe() {
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
            description:"",
            avatar:"",
            budget:""
        },
        validationSchema:recipeSchema,
        onSubmit:async(values)=>{

        }
    })
    return (
        <form className="create" onSubmit={formik.handleSubmit}>
        <Input label="Name" placeholder="Name" {...formik.getFieldProps("name")} error={formik.touched.name && formik.errors.name} />
        <Input label="Prep Time" placeholder="e.g 30 min" {...formik.getFieldProps("preptime")} error={formik.touched.preptime && formik.errors.preptime}/>
        <Input label="Cook Time" placeholder="e.g 60 min" {...formik.getFieldProps("cooktime")} error={formik.touched.cooktime && formik.errors.cooktime}/>
        <label>Category</label>
         <select {...formik.getFieldProps("category")} error={formik.touched.category && formik.errors.category}>
            <option value="">Select</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
            <option value="Salad">Salad</option>
            <option value="Brunch">Brunch</option>
            <option value="Tea">Tea</option>
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
        <textarea rows={10} placeholder="Description" {...formik.getFieldProps("description")} ></textarea>
        <p className="error">{formik.touched.description && formik.errors.description}</p>
        <button type="submit" className="btn">Submit</button>
     </form>
    );
}

export default NewRecipe;