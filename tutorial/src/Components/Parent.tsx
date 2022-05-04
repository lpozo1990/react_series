import Child from './Child';
import '../App.css';
import { useState } from 'react';
import axios from 'axios';

  interface Post {
    id: number;
    userId: number;
    title: string;
    body: string;
  }

function Parent(props:any) {
  const [counter, setCounter] = useState(0);
  const sendDataToParent = () => setCounter(counter+1);
  const [list, setList] = useState([]);
  const base_url = props.url ? props.url : "https://jsonplaceholder.typicode.com/posts";
  const fetchData = async () => {
    const response = await  axios.get(base_url);
    setList(response.data)
}


  return (
    <div className="App">
      <Child sendDataToParent={sendDataToParent} />
      <span data-testid="counter-text">{counter}</span>
      <br />
      <button data-testid="fetch-btn" onClick={fetchData}>Fetch data</button>
      <div data-testid='fetch-result'>
        {list.map((item:Post) => (
          <div key={item.id}>
            <h3 data-testid='post-title'>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Parent;
