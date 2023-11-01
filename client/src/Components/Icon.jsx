function Icon(props) {
    return (
        <div className="customicon" onClick={props.handleClick}>
            {props.icon}
        </div>
    );
}

export default Icon;