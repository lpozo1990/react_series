import Child from './Child';
import '../App.css';
import { useState } from 'react';

function Parent() {
  const [counter, setCounter] = useState(0);
  const sendDataToParent = () => setCounter(counter+1);
  return (
    <div className="App">
      <Child sendDataToParent={sendDataToParent} />
      <span data-testid="counter-text">{counter}</span>
    </div>
  );
}

export default Parent;
