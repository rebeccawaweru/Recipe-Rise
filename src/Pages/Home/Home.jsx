import { Header, Footer } from "../../Layouts";
import { Slider } from "../../Components";
function Home() {
    return (
        <div className="app">
        <Header/>
        <main>
         <Slider/>
        </main>
        <Footer/>
        </div>
    );
}
export default Home;