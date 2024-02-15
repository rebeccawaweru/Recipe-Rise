//footer component
import {logocolor,BiLogoFacebook,BiLogoTwitter, BiLogoPinterest, BiLogoDribbble, BiLogoInstagramAlt, BiLogoYoutube} from '../Assets'
function Footer() {
    return (
     <footer >
       <img src={logocolor} alt='recipe-rise-footer'/>
{/*         <div>
            <ul className="socialmedia">
                <li><BiLogoFacebook className='xs-counter-li'/> followers</li>
                <li><BiLogoTwitter className='xs-counter-li' /> followers</li>
                <li><BiLogoPinterest className='xs-counter-li'/> followers</li>
                <li><BiLogoDribbble className='xs-counter-li'/> followers</li>
                <li><BiLogoInstagramAlt className='xs-counter-li'/> followers</li>
                <li><BiLogoYoutube className='xs-counter-li'/> subscribers</li>
            </ul>
        </div> */}
        <p className='copyright'>Copyright © 2023 Recipe - Rise All rights reserved
        </p>
     </footer>
    );
}
export default Footer;
