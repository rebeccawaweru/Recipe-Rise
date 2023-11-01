import Swal from "sweetalert2";
import { home,home2,home3, home4} from "../Assets";
import * as Yup from 'yup';
export  const data = [
    {
      id: 1,
      image: home,
      type:'Lunch',
      title: 'Kale Quinoa and Avocado Salad with Lemon Dijon',
      description:"The doner is a Turkish creation of meat, often lamb, but not necessarily so, that is seasoned, stacked in a"
    },
    {
      id: 2,
      image: home2,
      type: 'Rezala',
      title:'Sultan Dines Kacchi Recipes Sultan Kacchi Recipes',
      description:"The doner is a Turkish creation of meat, often lamb, but not necessarily so, that is seasoned, stacked in a"
    },
    {
      id: 3,
      image: home3,
      type:'Salad',
      title:'Lemon Dijon Vina igrette Kale Quinoa, and Avocado',
      description:"The doner is a Turkish creation of meat, often lamb, but not necessarily so, that is seasoned, stacked in a"
    },
    {
      id: 4,
      image: home4,
      type:'Pasta',
      title:'Spiced Pork and Pasta',
      description:"The doner is a Turkish creation of meat, often lamb, but not necessarily so, that is seasoned, stacked in a"
    }
]

export const loginSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().trim().min(6, "password must contain 6 or more characters").required("Password is required")
});
export const signupSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  username: Yup.string().trim().min(5,"username must contain 5 or more characters").required("Username is required"),
  password: Yup.string().trim().min(6, "password must contain 6 or more characters").required("Password is required"),
  confirmpassword: Yup.string().equals([Yup.ref('password'),null], 'Passwords do not match').required('Confirm password')
});
export const forgotSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required")
});
export const resetSchema = Yup.object({
  otp:Yup.string().trim().matches(/^\d{6}$/, 'OTP must be exactly 6 digits').required("OTP code is required"),
  password: Yup.string().trim().min(6, "password must contain 6 or more characters").required("Password is required"),
  confirmpassword: Yup.string().equals([Yup.ref('password'),null], 'Passwords do not match').required('Confirm password')
})
export const contactSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  name: Yup.string().required("Name is required"),
  message: Yup.string().required("Message is required")
});
export const recipeSchema = Yup.object({
  name:Yup.string().required("Name is required"),
  preptime:Yup.string().required("Prep time is required"),
  cooktime:Yup.string().required("Cook time is required"),
  category:Yup.string().required("Please select category"),
  description: Yup.string().required("Description is required")
})
export const success = (message)=>{
  Swal.fire({
    icon: 'success',
    title: 'Success',
    text: message,
  })
}
export const error = (message)=>{
  Swal.fire({
    icon: 'error',
    title: 'Error.',
    text: message,
  })
}