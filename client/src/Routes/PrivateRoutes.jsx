import { Route, Routes, Navigate } from "react-router-dom"
import { Dashboard } from "../Pages"

const PrivateRoutes = () =>{
    const token = localStorage.getItem('token')
    if (token) {
        return (
        <Routes>
            <Route path="user" element={<Dashboard/>}/>
        </Routes>
        )
    } else {
       return <Navigate to="/login"/>;
    }
 
}
export default PrivateRoutes