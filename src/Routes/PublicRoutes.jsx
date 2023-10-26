import {Routes, Route } from "react-router-dom"
import { Home, Login } from "../Pages"
const PublicRoutes = () =>{
  return(
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        </Routes>
  )
}

export default PublicRoutes