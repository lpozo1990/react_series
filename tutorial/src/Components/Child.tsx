function Child(props:any) {
    return (
    <div>
        <p>
        Hello,  {props.name ? props.name: "unknown"}
        </p>
        <button data-testid="btn-send" onClick={props.sendDataToParent}>Send to parent</button>
    </div>);
}

export default Child;