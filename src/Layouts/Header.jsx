//navbar component 
import { useState } from 'react';
import {AiOutlineClose,logo,BiLogoFacebook,BiLogoTwitter,BiLogoLinkedinSquare,BiLogoInstagramAlt,BiPlus,BsSearch,HiOutlineShoppingBag,RxDividerVertical,BiMenuAltRight} from '../Assets'
function Header() {
  const [toggle, setToggle] = useState('none')
    return (
    <header>
    <nav> 
     <div className='nav'>
        <ul className='info'>
        <div className='icons'>
            <p><BiLogoTwitter /></p>
            <p><BiLogoFacebook /></p>
            <p><BiLogoInstagramAlt /></p>
             <p><BiLogoLinkedinSquare /></p>
        </div>
       <img src={logo} alt='Recipe'/>
         <div className='icons'>
            <BsSearch />
            <RxDividerVertical  color='gray'/>
            <HiOutlineShoppingBag />
        </div>
        <div onClick={()=>setToggle('block')} className='togglemenu'>
          <BiMenuAltRight size={28} color='gray'/>
        </div>
        </ul>
     </div>
     {/* toggle menu on small devices */}
     <div className='sidemenu' style={{display:toggle}}>
        <AiOutlineClose onClick={()=>setToggle('none')} className='close'/>
        <p>Home</p>
        <p>Category</p>
        <p>Recipes</p>
        <p>Blog</p>
        <p>Contact</p>
        <p>Login</p>
     </div>

     <hr/>
     <div className='nav menu'>
       <ul>
        <li style={{color:'orangered'}}>Home</li>
        <li>Category</li>
        <li>Recipes</li>
        <li>Blog</li>
        <li>Contact</li>
       </ul>  
       <ul>
        <p>Login</p>
        <button>
        <BiPlus/>
        Submit Recipe
        </button>
       </ul>
     </div>

    </nav>
    </header>
    );
}

export default Header;