//footer component
import {logocolor,BiLogoFacebook,BiLogoTwitter, BiLogoPinterest, BiLogoDribbble, BiLogoInstagramAlt, BiLogoYoutube} from '../Assets'
function Footer() {
    return (
     <footer className='footer'>
        <div className="footer-top-area">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div id ="logo" className="widget">
                            <img src={logocolor} width="199" height="58" alt='Logo'></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="socialmedia">
            <ul style={{flexWrap:"wrap"}} className='socialmediacounter'>
                <li className='xs-counter-li'><BiLogoFacebook /> fans</li>
                <li className='xs-counter-li'><BiLogoTwitter /> followers</li>
                <li className='xs-counter-li'><BiLogoPinterest /> followers</li>
                <li className='xs-counter-li'><BiLogoDribbble /> followers</li>
                <li className='xs-counter-li'><BiLogoInstagramAlt /> followers</li>
                <li className='xs-counter-li'><BiLogoYoutube /> subscribers</li>
            </ul>
        </div>
        <div class="copyright">© 2023 Recipe-Rise All rights reserved
        </div>
     </footer>
    );
}
export default Footer;