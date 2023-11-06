import {useState, useEffect} from 'react';
import { useFormik } from 'formik';
import api from '../Services/api';
import Input from './Input';
import {BiPlus} from '../Assets'
import { recipeSchema, handleUpload, success, error } from '../Utils';
import CustomLoader from './CustomLoader'
function Edit({id}) {
    const [list, setList] = useState([])
    const [cover,setCover] = useState("")
    const [recipe,setRecipe] = useState({})
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
        // validationSchema:recipeSchema,
        onSubmit:async(values)=>{
            isLoading(true)
            await api.put(`/update/${id}`, {
                name:values.name || recipe.name,
                preptime:values.preptime || recipe.preptime,
                cooktime:values.cooktime || recipe.cooktime,
                category: values.category || recipe.category,
                description:values.description || recipe.description,
                budget:values.budget || recipe.budget,
                status:values.status || recipe.status,
                ingredients:list.length > 0 ? list : recipe.ingredients,
                avatar:cover || recipe.avatar
                }).then((response)=>{
                if (response.data.success){
                    success('Updated')
                }
            }).catch((err)=>{
                error(err.message)
            })
            isLoading(false)
            // formik.resetForm()
            setList("")
            setCover("")
        }
    })
    useEffect(()=>{
        api.get(`/recipe/${id}`).then((response)=>{
            if(response.data){
                setRecipe(response.data.recipe || {})
              }
        })
    },[recipe,id])
    return (
        <form className="create" onSubmit={formik.handleSubmit}>
        <Input  label="Name" extra="*" placeholder={recipe.name} {...formik.getFieldProps("name")} error={formik.touched.name && formik.errors.name} />
        <Input value={recipe.preptime} label="Prep Time" extra="*" placeholder={recipe.preptime} {...formik.getFieldProps("preptime")} error={formik.touched.preptime && formik.errors.preptime}/>
        <Input value={recipe.cooktime} label="Cook Time" extra="*" placeholder={recipe.cooktime} {...formik.getFieldProps("cooktime")} error={formik.touched.cooktime && formik.errors.cooktime}/>
        <label>Category</label>
         <select value={recipe.category} {...formik.getFieldProps("category")} error={formik.touched.category && formik.errors.category}>
            <option value="">Select</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
            <option value="Salad">Salad</option>
            <option value="Brunch">Brunch</option>
            <option value="Tea">Tea</option>
         </select>
         {formik.errors.category ? <p>{formik.touched.category && formik.errors.category}</p> : null}
         <Input value={recipe.budget} label="Meal Budget (Ksh)" extra="*" placeholder={recipe.budget} {...formik.getFieldProps("budget")} error={formik.touched.budget && formik.errors.budget}/>
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
        <textarea value={recipe.description} rows={10} placeholder={recipe.description} {...formik.getFieldProps("description")} ></textarea>
        {formik.errors.description ? <p>{formik.touched.description && formik.errors.description}</p> : null}
        <label>Post</label>
         <select value={recipe.status} {...formik.getFieldProps("status")} error={formik.touched.status && formik.errors.status}>
            <option value="Public">Public</option>
            <option value="Private">Private</option>
         </select>
        <Input label="Cover Photo" extra="*" type="file" onChange={handleCoverUpload}/>
         {(cover || recipe.avatar) && 
         <img src={cover || recipe.avatar} alt='recipe-preview' className='cover'/>}
        <p className="error">{formik.touched.description && formik.errors.description}</p>
       {loading ? <CustomLoader/> : <button type="submit" className="btn">Update</button>}
     </form>
    );
}

export default Edit;