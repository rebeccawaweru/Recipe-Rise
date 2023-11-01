import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { PublicRoutes, PrivateRoutes } from "./Routes";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<PublicRoutes/>}/>
        <Route path="/dashboard/*" element={<PrivateRoutes/>}/>
      </Routes>
    </Router>

  );
}
export default App;
