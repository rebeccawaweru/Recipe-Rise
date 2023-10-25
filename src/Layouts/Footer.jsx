//footer component
import {rrfavicongreen,} from '../Assets'
function Footer() {
    return (
     <footer className='footer'>
        <div>
            <img src={rrfavicongreen} alt="favicon" />
            <p>© 2023 Recipe-Rise. All rights reserved</p>
        </div>
     </footer>
    );
}

export default Footer;