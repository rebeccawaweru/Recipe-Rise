import { Wrapper } from "../../Layouts";
import { Input, Intro } from "../../Components";
import { useFormik } from "formik";
import { contactSchema } from "../../Utils";
function Contact() {
  const formik = useFormik({
    initialValues:{
      email:"",
      name:"",
      phone:"",
      subject:"",
      message:""
    },
    validationSchema: contactSchema,
    onSubmit:async(values)=>{

    }
  })
    return (
     <Wrapper>
      <Intro location="Home" title="Contact Us" caption="Contact"/>
      <div className="auth">
        <h3>Do you have any enquiry? Reach out to us</h3>
        <div className="line"></div>
        <form onSubmit={formik.handleSubmit}>
          <div>
          <Input label="Name" type="text" extra="*" {...formik.getFieldProps("name")} error={formik.touched.name && formik.errors.name}/>
          <Input label="Email" type="email" extra="*" {...formik.getFieldProps("email")} error={formik.touched.email && formik.errors.email} />
          </div>
          <div>
          <Input label="Phone" type="number" {...formik.getFieldProps("phone")} error={formik.touched.phone && formik.errors.phone}/>
          <Input label="Subject" type="text" {...formik.getFieldProps("subject")} error={formik.touched.subject && formik.errors.subject}/>
          </div>
          <div className="area-wrapper">
          <label>Message <span className="asterick">*</span></label>
          <textarea rows={10} placeholder="Message" {...formik.getFieldProps("message")}>
          </textarea>
          <p className="forgot">{formik.touched.message && formik.errors.message}</p>
          </div>
        <div className="options">
        <button type="submit" className="btn">Send</button>
        </div> 
        </form>
       </div>
     </Wrapper>
    );
}

export default Contact;