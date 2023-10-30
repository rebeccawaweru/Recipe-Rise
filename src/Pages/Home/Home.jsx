import {Wrapper } from "../../Layouts";
import {Slider, Category} from '../../Components'

function Home() {
    return (
    <Wrapper>
        <div className="main">
        <Slider/>
        {/* category */}
         <div>
            <Category title="Breakfast"/>
            <Category title="Dinner"/>        
            <Category/>
         </div>
        {/* end of category */}
        </div>
    </Wrapper>
    );
}
export default Home;