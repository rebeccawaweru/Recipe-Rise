import { Route, Routes } from "react-router-dom"
import { Dashboard } from "../Pages"

const PrivateRoutes = () =>{
    return(
        <Routes>
            <Route path="user/:id" element={<Dashboard/>}/>
        </Routes>
    )
}
export default PrivateRoutes