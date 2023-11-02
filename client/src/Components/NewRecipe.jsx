import {useState} from 'react';
import {useParams} from "react-router-dom"
import { useFormik } from 'formik';
import api from '../Services/api';
import Input from './Input';
import {BiPlus} from '../Assets'
import { recipeSchema, handleUpload, success, error } from '../Utils';
import CustomLoader from './CustomLoader'
function NewRecipe() {
    const {id} = useParams()
    const [list, setList] = useState([])
    const [cover,setCover] = useState("")
    const [loading,isLoading] = useState(false)
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
    const handleCoverUpload = async(e)=>{
        e.preventDefault()
        const File = await handleUpload(e.target.files)
        setCover(File.url);
    }
    const  formik = useFormik({
        initialValues:{
            name:"",
            preptime:"",
            cooktime:"",
            category:"",
            description:"",
            budget:"",
            status:""
        },
        validationSchema:recipeSchema,
        onSubmit:async(values)=>{
            isLoading(true)
            await api.post('/new', {...values, owner:id, ingredients:list, avatar:cover}).then((response)=>{
                if (response.data.success){
                    success('Recipe created')
                }
            }).catch((err)=>{
                error(err.message)
            })
            isLoading(false)
            formik.resetForm()
            setList("")
            setCover("")
        }
    })
    return (
        <form className="create" onSubmit={formik.handleSubmit}>
        <Input label="Name" extra="*" placeholder="Name" {...formik.getFieldProps("name")} error={formik.touched.name && formik.errors.name} />
        <Input label="Prep Time" extra="*" placeholder="e.g 30 min" {...formik.getFieldProps("preptime")} error={formik.touched.preptime && formik.errors.preptime}/>
        <Input label="Cook Time" extra="*" placeholder="e.g 60 min" {...formik.getFieldProps("cooktime")} error={formik.touched.cooktime && formik.errors.cooktime}/>
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
         {formik.errors.category ? <p>{formik.touched.category && formik.errors.category}</p> : null}
         <Input label="Meal Budget (Ksh)" extra="*" placeholder="e.g 1000" {...formik.getFieldProps("budget")} error={formik.touched.budget && formik.errors.budget}/>
         <label><i>Ingredients</i></label>
         <div className="ingredient">
            <Input label="Item" extra="*" name="item" value={ingredients.item} onChange={handleChange} />
            <Input label="Price" extra="*" name="price" value={ingredients.price} onChange={handleChange}/>
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
        {formik.errors.description ? <p>{formik.touched.description && formik.errors.description}</p> : null}
        <label>Post</label>
         <select {...formik.getFieldProps("status")} error={formik.touched.status && formik.errors.status}>
            <option value="Public">Public</option>
            <option value="Private">Private</option>
         </select>
        <Input label="Cover Photo" extra="*" type="file" onChange={handleCoverUpload}/>
         {cover && 
         <img src={cover} alt='recipe-preview' className='cover'/>}
        <p className="error">{formik.touched.description && formik.errors.description}</p>
       {loading ? <CustomLoader/> : <button type="submit" className="btn">Submit</button>}
     </form>
    );
}

export default NewRecipe;