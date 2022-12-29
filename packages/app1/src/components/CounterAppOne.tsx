import { useState } from 'react';


const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className='container-counter-app1'>
      <p>Add by one each click <strong>APP-1</strong></p>
      <p>Your click count : {count}</p>
      <button className='button-counter-app1' onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default Counter;