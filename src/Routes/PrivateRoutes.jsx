import { Route, Routes } from "react-router-dom"
import { Slider } from "../Components"
const PrivateRoutes = () =>{
    return(
        <Routes>
            <Route path="profile" element={<Slider/>}/>
        </Routes>
    )
}
export default PrivateRoutes