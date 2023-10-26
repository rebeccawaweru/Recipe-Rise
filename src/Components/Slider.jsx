import {useState } from "react";
import Icon from "./Icon";
import { data } from "../Utils";
import {IoIosArrowForward,IoIosArrowBack } from "../Assets";
function Slider() {
    const [count, setCount] = useState(1)
    const prevSlide = () =>{
        setCount((prevState)=>prevState === 1 ? 1 : prevState - 1)
    }
    const nextSlide = () =>{
        setCount((prevState)=> prevState === data.length ? 1 : prevState + 1)
    }
    return (
        <div className='slider'>
          <div className="image-container">
               <Icon icon={<IoIosArrowBack/>} handleClick={prevSlide} />
          {data.map((item) => {
            return <img key={item.id} src={item.image} alt="recipe" className={count === item.id ? 'active' : 'inactive'}/>
          })}
              <Icon icon={<IoIosArrowForward/>} handleClick={nextSlide}/>
                </div>
        </div>
    );
}

export default Slider;