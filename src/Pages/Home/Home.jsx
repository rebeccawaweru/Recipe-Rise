import { Header, Footer } from "../../Layouts";
import { home } from "../../Assets";
function Home() {
    return (
        <div className="app">
        <Header/>
        <main>
         <img src={home} alt="recipe"/>
        </main>
        <Footer/>
        </div>
    );
}
export default Home;