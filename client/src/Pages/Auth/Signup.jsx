import { Wrapper } from "../../Layouts";
import { Input, Intro,CustomLoader } from "../../Components";
import {IoIosArrowForward} from '../../Assets'
import { Link } from "react-router-dom";
import { signupSchema } from "../../Utils";
import { useFormik } from "formik";
import api from "../../Services/api";
import { useNavigate } from "react-router-dom";
import { success, error } from "../../Utils";
import { useState } from "react";
function Signup() {
  const [loading, isLoading] = useState(false)
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues:{
         email:"",
         username:"",
         password:"",
         confirmpassword:""
    },
    validationSchema:signupSchema,
    onSubmit:async(values)=>{
        isLoading(true)
        await api.post('/signup', {...values}).then((response)=>{
           if (response.data.success){
            success('signup successful')
            navigate('/login')
           }
        }).catch((err)=>{
          error(err.message)
        })
        isLoading(false)
        formik.resetForm()
    }
  })
    return (
    <Wrapper>
    <Intro location="Home" title="Signup" caption="Register User"/>
    <div className="auth">
        <h3>Get Started</h3>
        <div className="line"></div>
        <form onSubmit={formik.handleSubmit}>
          <div>
          <Input label="Email" type="email"  extra="*"  {...formik.getFieldProps("email")} error={formik.touched.email && formik.errors.email} />
          <Input label="Username" type="text"  extra="*" {...formik.getFieldProps("username")} error={formik.touched.username && formik.errors.username}/>
          </div>
          <div>
          <Input label="Password" type="password"  extra="*" {...formik.getFieldProps("password")} error={formik.touched.password && formik.errors.password} />
          <Input label="Confirm Password" type="password"  extra="*" {...formik.getFieldProps("confirmpassword")} error={formik.touched.confirmpassword && formik.errors.confirmpassword}/>
          </div>
            <div className="options">
            {loading ? <CustomLoader/> : <button disabled={loading} type="submit"  className="btn">Sign up</button>}
            <Link to="/login" className="btn2">Log in
            <IoIosArrowForward size={14} style={{marginBottom:-4}}/>
            </Link>
            </div> 
        </form>
       </div>
    </Wrapper>
    );
}

export default Signup;