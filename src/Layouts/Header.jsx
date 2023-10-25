//navbar component 
import {logo,BiLogoFacebook,BiLogoTwitter,BiLogoLinkedinSquare,BiLogoInstagramAlt,BiPlus,BsSearch,HiOutlineShoppingBag,RxDividerVertical,BiMenuAltRight} from '../Assets'
function Header() {
    return (
    <header>
    <nav> 
     <div className='nav'>
        <ul className='info'>
        <div className='icons'>
            <p><BiLogoTwitter/></p>
            <p><BiLogoFacebook/></p>
            <p><BiLogoInstagramAlt/></p>
             <p><BiLogoLinkedinSquare/></p>
        </div>
       <img src={logo} alt='Recipe'/>
         <div className='icons'>
            <BsSearch size={20}/>
            <RxDividerVertical size={20} color='gray'/>
            <HiOutlineShoppingBag size={20}/>
        </div>
        <p className='sidemenu'><BiMenuAltRight size={28} color='gray'/></p>
        </ul>
    
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