function Child(props:any) {
    return (
    <div>
        <div>
        Hello,  {props.name ? props.name: "unknown"}
        </div>
    </div>);
}

export default Child;