import { FaHome, background } from "../Assets";
function Intro(props) {
    return (
        <div className="contain">
        <div className="gradient"></div>
        <div className="intro">
        <p className="title">{props.title}</p>
        <div className="caption">
        <p style={{marginTop:18, marginRight:2}}><FaHome size={16} color="white"/></p>
        <p>{props.location} &gt; <span style={{color:"whitesmoke"}}>{props.caption}</span></p>
        </div>
        </div>
        <img style={{height:"40vh"}} src={background} alt="recipe"/>
    </div>
    );
}

export default Intro;