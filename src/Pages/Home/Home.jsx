import {Wrapper } from "../../Layouts";
import {Slider, Category} from '../../Components'
import {breakfast, dinner, lunch, salad, drink} from '../../Assets'
function Home() {
    return (
    <Wrapper>
        <div className="main">
        <Slider/>
        {/* category */}
        <div className="Category">
        <div>
            <Category
                image={breakfast}
                title="Breakfast  "
                caption = "3"
            />
            <Category 
                image={dinner}
                title="Dinner  "
                caption="3"
            />        
            <Category
                image={lunch}
                title="Lunch  "
                caption="2"
            />
            <Category 
                image={salad}
                title="Salad  "
                caption="1"
            />
            <Category 
                image={drink}
                title="drink  "
                caption="2"
            />
         </div>
         </div>
        {/* end of category */}
        </div>
    </Wrapper>
    );
}
export default Home;