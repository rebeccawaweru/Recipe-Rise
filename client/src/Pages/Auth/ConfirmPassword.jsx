import { Wrapper } from "../../Layouts";
import { CustomLoader, Input, Intro } from "../../Components";
import {IoIosArrowForward} from '../../Assets'
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { error, resetSchema, success } from "../../Utils";
import { useState } from "react";
import api from "../../Services/api";
function ConfrimPassword() {
    const [loading, isLoading] = useState(false)
    const navigate = useNavigate()
  const formik = useFormik({
    initialValues:{
      otp:"",
      password:"",
      confirmpassword:""
    },
    validationSchema:resetSchema,
    onSubmit:async(values)=>{
     isLoading(true)
     await api.post('/confirm', {...values}).then((response)=>{
        if(response.data.success){
            success('Your password has been reset')
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
      <Intro location="Home" title="Security" caption="Reset Password"/>
       <div className="auth reset">
        <h3>Reset your password</h3>
        <div className="line"></div>
        <form onSubmit={formik.handleSubmit}>
          <div style={{display:"block", width:"100%"}}>
          <Input label="OTP" placeholder="6-digit-code" {...formik.getFieldProps("otp")} error={formik.touched.otp && formik.errors.otp}/>
          <Input label="New Password" type="password" {...formik.getFieldProps("password")} error={formik.touched.password && formik.errors.password}/>
          <Input label="Confirm Password" type="password" {...formik.getFieldProps("confirmpassword")} error={formik.touched.confirmpassword && formik.errors.confirmpassword}/>
          </div>
            <div className="options">
           {loading ? <CustomLoader/> : <button type="submit" disabled={formik.errors.email} className="btn">Reset</button>}
            <Link to="/login" className="btn2">Log in
            <IoIosArrowForward size={16} style={{marginBottom:-2}}/>
            </Link>
            </div> 
        </form>
       </div>
     </Wrapper>
    );
}

export default ConfrimPassword;