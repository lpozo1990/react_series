import { useDispatch } from "react-redux";
import { increment, decrement, push } from "../reducers"; 


function Child(props:any) {
    const dispatch = useDispatch();
    return (
    <div>
        <p>
        Hello,  {props.name ? props.name: "unknown"}
        </p>
        <button data-testid="btn-send" onClick={props.sendDataToParent}>Send to parent</button>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement(4))}
        >
          Decrement
        </button>
        <br />
        <button
          aria-label="Decrement array"
          onClick={() => dispatch(push(Math.random() * 10))}
        >
          Array Push
        </button>
    </div>);
}

export default Child;