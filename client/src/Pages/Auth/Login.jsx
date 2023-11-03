import { Wrapper } from "../../Layouts";
import { CustomLoader, Input, Intro } from "../../Components";
import {IoIosArrowForward} from '../../Assets'
import { Link } from "react-router-dom";
import { error, loginSchema } from "../../Utils";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../../Services/api";
function Login() {
  const [loading, isLoading] = useState(false)
  const navigate = useNavigate()
    const formik = useFormik({
      initialValues:{
        email:"",
        password:""
      },
      validationSchema:loginSchema,
      onSubmit : async(values)=>{
           isLoading(true)
           await api.post('/login', {...values}).then((response)=>{
            if(response.data.token){
              localStorage.setItem('token', response.data.token);
              navigate('/dashboard/user')
            }
           }).catch((err)=>{
            error(err.message)
           })
           isLoading(false);
           formik.resetForm()
      }
    })
    return (
     <Wrapper>
      <Intro location="Home" title="Login" caption="User Login"/>
       <div className="auth">
        <h3>Welcome Back</h3>
        <div className="line"></div>
        <form onSubmit={formik.handleSubmit}>
          <div>
          <Input label="Email" type="email"  extra="*" {...formik.getFieldProps("email")} error={formik.touched.email && formik.errors.email}/>
          <Input label="Password" type="password"  extra="*" {...formik.getFieldProps("password")} error={formik.touched.password && formik.errors.password}/>
          </div>
         <Link to="/forgotpassword" style={{textDecoration:"none"}}><p className="forgot">Forgot Password?</p></Link>
            <div className="options">
           {loading ? <CustomLoader/> : <button type="submit" className="btn">Login</button>}
            <Link to="/signup" className="btn2">Create an account
            <IoIosArrowForward size={16} style={{marginBottom:-2}}/>
            </Link>
            </div> 
        </form>
       </div>
     </Wrapper>
    );
}

export default Login;