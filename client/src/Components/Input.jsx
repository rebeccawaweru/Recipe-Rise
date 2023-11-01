export default function Input(props){
    return(
        <div className="auth-wrapper">
            <label>{props.label}<span className="asterick">{props.extra}</span></label>
            <input {...props} className={`${props.error ? "invalid" : null}`}/>
            {props.error ? <p className="forgot">{props.error}</p> : null}
        </div>
    )
}