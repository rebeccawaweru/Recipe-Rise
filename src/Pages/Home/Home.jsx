import { Header, Footer } from "../../Layouts";
import { Button } from "../../Components";
function Home() {
    return (
        <div className="app">
        <Header/>
        <main>
         <Button title="Get Started" handleClick="" />
        </main>
        <Footer/>
        </div>
    );
}
export default Home;