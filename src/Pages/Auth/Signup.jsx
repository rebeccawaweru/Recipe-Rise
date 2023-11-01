import { Wrapper } from "../../Layouts";
import { Input, Intro } from "../../Components";
import {IoIosArrowForward} from '../../Assets'
import { Link } from "react-router-dom";
import { signupSchema } from "../../Utils";
import { useFormik } from "formik";
function Signup() {
  const formik = useFormik({
    initialValues:{
         email:"",
         username:"",
         password:"",
         confirmpassword:""
    },
    validationSchema:signupSchema,
    onSubmit:async(values)=>{
       
    }
  })
    return (
    <Wrapper>
    <Intro title="Signup" caption="Register User"/>
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
            <button type="submit" className="btn">Sign up</button>
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