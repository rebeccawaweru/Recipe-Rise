import { Intro, RecipeMenu } from "../../Components";
import { Wrapper } from "../../Layouts";
function Recipes() {
    return (
    <Wrapper>
        <Intro title="Recipes" caption="Trending Recipes"/>
        <div className="recipe-wrapper">
        <RecipeMenu/>
        </div>
    </Wrapper>
    );
}

export default Recipes;