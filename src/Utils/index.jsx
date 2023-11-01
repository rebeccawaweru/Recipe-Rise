import { home,home2,home3} from "../Assets";
import * as Yup from 'yup';
export  const data = [
    {
      id: 1,
      image: home,
      type:'Lunch',
      title: 'Kale Quinoa and Avocado Salad with Lemon Dijon'
    },
    {
      id: 2,
      image: home2,
      type: 'Rezala',
      title:'Sultan Dines Kacchi Recipes Sultan Kacchi Recipes'
    },
    {
      id: 3,
      image: home3,
      type:'Salad',
      title:'Lemon Dijon Vina igrette Kale Quinoa, and Avocado'
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
})
export const contactSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  name: Yup.string().required("Name is required"),
  message: Yup.string().required("Message is required")
})
