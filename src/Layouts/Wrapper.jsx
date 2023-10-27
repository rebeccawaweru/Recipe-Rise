//wrapping main content
import {Header, Footer} from '../Layouts'
function Wrapper(props) {
    return (
     <div className='app'>
        <Header/>
        <main>
            {props.children}
        </main>
        <Footer/>
     </div>
    );
}

export default Wrapper;