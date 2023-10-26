//navbar component 
import { useState } from 'react';
import {AiOutlineClose,logo,BiLogoFacebook,BiLogoTwitter,BiLogoLinkedinSquare,BiLogoInstagramAlt,BiPlus,BsSearch,HiOutlineShoppingBag,RxDividerVertical,BiMenuAltRight} from '../Assets'
import { ListItem } from '../Components';
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
        <p><ListItem to="/" page="Home"/></p>
        <p><ListItem to="/category" page="Category"/></p>
        <p><ListItem to="/recipes" page="Recipes"/></p>
        <p><ListItem to="/blog" page="Blog"/></p>
        <p><ListItem to="/contact" page="Contact"/></p>
        <p><ListItem to="/login" page="Login"/></p>
     </div>

     <hr/>
     <div className='nav menu'>
       <ul>
        <ListItem to="/" page="Home"/>
        <ListItem to="/category" page="Category"/>
        <ListItem to="/recipes" page="Recipes"/>
        <ListItem to="/blog" page="Blog"/>
        <ListItem to="/contact" page="Contact"/>
       </ul>  
       <ul>
      <div style={{marginRight:-18}}><ListItem to='/login' page="Login"/></div>
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