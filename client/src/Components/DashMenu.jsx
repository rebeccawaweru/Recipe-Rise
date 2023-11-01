function DashMenu(props) {
    return (
        <div onClick={props.onClick}>
        <p>{props.title}</p>
        <div className={`${props.active === props.title ? "active-line" : null}`}></div>
        </div>
    );
}

export default DashMenu;