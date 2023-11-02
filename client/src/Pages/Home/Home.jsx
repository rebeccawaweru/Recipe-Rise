import { useRef } from "react";
import {Wrapper } from "../../Layouts";
import {Slider, Category, RecipeMenu} from '../../Components'
import { breakfast, brunch, dinner, lunch, salad, tea } from "../../Assets";
import { data } from "../../Utils";
function Home() {
    const ref = useRef(null)
    const handleScroll = () =>{
       if(ref.current){
        ref.current.scrollIntoView({behavior:"smooth"})
       }
    }
    return (
    <Wrapper handleClick={handleScroll}>
        <div className="main">
        <Slider/>
        {/* category */}
         <div ref={ref} className="category-wrapper">
            <Category image={breakfast} title="Breakfast" caption="(3)"/>
            <Category image={dinner} title="Dinner" caption="(3)"/>        
            <Category image={salad} title="Salad" caption="(3)"/>
            <Category image={lunch} title="Lunch" caption="(3)"/>
            <Category image={brunch} title="Brunch" caption="(3)"/>
            <Category image={tea} title="Tea" caption="(3)"/>
         </div>
        {/* end of category */}
        <RecipeMenu data={data}/>
        </div>
    </Wrapper>
    );
}
export default Home;