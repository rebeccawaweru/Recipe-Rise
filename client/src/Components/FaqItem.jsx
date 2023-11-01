import { useState } from "react";
import {BiPlus,BiMinus} from '../Assets'
function FaqItem(props) {
    const [view, setView] = useState('none')
    return (
        <div>
        <div className='question'>
        <p>{props.question}</p>
        {view === 'none' ? <p onClick={()=>setView('block')}><BiPlus/></p> :
        <p onClick={()=>setView('none')}><BiMinus/></p>}
        </div>
        <div style={{display:view}} className='answer'>
         <p>{props.answer}</p>
        </div>
        </div>
    );
}

export default FaqItem;