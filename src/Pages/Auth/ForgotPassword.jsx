import { Wrapper } from "../../Layouts";
import { Input, Intro } from "../../Components";
import {IoIosArrowForward} from '../../Assets'
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { forgotSchema } from "../../Utils";
function ForgotPassword() {
  const formik = useFormik({
    initialValues:{
      email:""
    },
    validationSchema:forgotSchema,
    onSubmit:async(values)=>{

    }

  })
    return (
     <Wrapper>
      <Intro title="Security" caption="Reset Password"/>
       <div className="auth">
        <h3>Recover your password</h3>
        <div className="line"></div>
        <form onSubmit={formik.handleSubmit}>
        <i>Enter your email to receive receive reset instructions</i>
          <div>
          <Input placeholder="example@gmail.com" {...formik.getFieldProps("email")} error={formik.touched.email && formik.errors.email}/>
          </div>
            <div className="options">
            <button type="submit" disabled={formik.errors.email} className="btn">Submit</button>
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