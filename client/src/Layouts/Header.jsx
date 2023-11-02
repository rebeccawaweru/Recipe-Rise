//navbar component 
import { useState } from 'react';
import {AiOutlineClose,logonobackground,BiLogoFacebook,BiLogOutCircle,BiLogoTwitter,BiLogoLinkedinSquare,BiLogoInstagramAlt,BiPlus,BsSearch,HiOutlineShoppingBag,RxDividerVertical,BiMenuAltRight} from '../Assets'
import { ListItem } from '../Components';
import { Link, useParams,useNavigate } from 'react-router-dom';
function Header({handleClick}) {
  const [toggle, setToggle] = useState('none')
  const {id} = useParams()
  const navigate = useNavigate()
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
       <img src={logonobackground} alt='Recipe'/>
         <div className='icons'>
            <BsSearch />
            <RxDividerVertical  color='gray'/>
            <HiOutlineShoppingBag />
            {id ? <><RxDividerVertical  color='gray'/>
            <BiLogOutCircle onClick={()=>navigate('/')}/></> : null}

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
        <p><ListItem onClick={handleClick} page="Category"/></p>
        <p><ListItem to="/recipes" page="Recipes"/></p>
        <p><ListItem to="/faq" page="FAQ"/></p>
        <p><ListItem to="/contact" page="Contact"/></p>
        <p><ListItem to="/login" page="Login"/></p>
     </div>

     <hr/>
     {!id ? <div className='nav menu'>
       <ul>
        <ListItem to="/" page="Home"/>
        <ListItem onClick={handleClick} page="Category"/>
        <ListItem to="/recipes" page="Recipes"/>
        <ListItem to="/faq" page="FAQ"/>
        <ListItem to="/contact" page="Contact"/>
       </ul>  
       <ul>
      <div style={{marginRight:-18}}><ListItem to='/login' page="Login"/></div>
        <button>
        <BiPlus/>
        <Link style={{textDecoration:"none", color:"white"}} to="/signup">Submit Recipe</Link>
        </button>
       </ul>
     </div>:null}

    </nav>
    </header>
    );
}

export default Header;