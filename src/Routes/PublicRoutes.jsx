import {Routes, Route } from "react-router-dom"
import { Faq, Home, Login } from "../Pages"
const PublicRoutes = () =>{
  return(
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/faq" element={<Faq/>}/>
        </Routes>
  )
}

export default PublicRoutes