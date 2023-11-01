import {Routes, Route } from "react-router-dom"
import { Faq, Home, Signup, Login, ForgotPassword, Contact, Recipes } from "../Pages"
const PublicRoutes = () =>{
  return(
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/forgotpassword" element={<ForgotPassword/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/recipes" element={<Recipes/>}/>
        <Route path="/faq" element={<Faq/>}/>

        </Routes>
  )
}

export default PublicRoutes