import { useEffect,useState } from "react";
import { Link, useLocation } from "react-router-dom";
function ListItem(props) {
    const router = useLocation()
    const [active, setActive] = useState(false)
    useEffect(()=>{
      router.pathname === props.to ? setActive(true) : setActive(false)
    },[router.pathname, props.to])
    return (
        <li><Link  to={props.to} className={`${active ? 'current' : 'link'}`}>{props.page}</Link></li>
    );
}

export default ListItem;