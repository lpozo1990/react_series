import Child from './Child';
import '../App.css';
import { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

  interface Post {
    id: number;
    userId: number;
    title: string;
    body: string;
  }

function Parent(props:any) {
  const count = useSelector((state:any) => state.counter.value);
  const arrayState = useSelector((state:any) => state.arrayState.value);
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
      <span data-testid="counter-text">Component state: {counter}</span>
      <br />
      <span>counter via store: {count}</span>
      <br />
      <span>counter via store | arrayState: {arrayState}</span>
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
      <div>
       <Link to="/page-2">Go to page2</Link>
    </div>
    </div>
  );
}

export default Parent;
