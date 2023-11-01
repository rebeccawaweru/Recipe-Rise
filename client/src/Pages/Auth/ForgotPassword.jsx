import { Wrapper } from "../../Layouts";
import { CustomLoader, Input, Intro } from "../../Components";
import {IoIosArrowForward} from '../../Assets'
import { Link,useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { error, forgotSchema, success } from "../../Utils";
import { useState } from "react";
import api from "../../Services/api";
function ForgotPassword() {
  const [loading, isLoading] = useState(false)
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues:{
      email:""
    },
    validationSchema:forgotSchema,
    onSubmit:async(values)=>{
       isLoading(true)
       await api.post('/reset', {...values}).then((response)=>{
          if(response.data.success){
            navigate('/confirmpassword')
            success("Kindly check your email for OTP code")
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
      <Intro location="Home" title="Security" caption="Forgot Password"/>
       <div className="auth">
        <h3>Recover your password</h3>
        <div className="line"></div>
        <form onSubmit={formik.handleSubmit}>
        <i>Enter your email to receive receive reset instructions</i>
          <div>
          <Input placeholder="example@gmail.com" {...formik.getFieldProps("email")} error={formik.touched.email && formik.errors.email}/>
          </div>
            <div className="options">
            {loading ? <CustomLoader/> : <button type="submit" disabled={formik.errors.email} className="btn">Submit</button>}
            <Link to="/login" className="btn2">Log in
            <IoIosArrowForward size={16} style={{marginBottom:-2}}/>
            </Link>
            </div> 
        </form>
       </div>
     </Wrapper>
    );
}

export default ForgotPassword;