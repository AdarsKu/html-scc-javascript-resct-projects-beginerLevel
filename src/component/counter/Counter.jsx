import { useState } from 'react';
import './Counter.css'
import CounterButton from './CounterButton'
import ResetButton from './ResetButton';

function Counter() {
  const [count, setcount] = useState(0)


  // function increamentTheCounter(by) {
  //   setcount(count + by)
  // }

  // function decrementMethod(by) {
  //   setcount(count - by)
  // }

  return (
    <>
      <span className="Main-count">{count}</span>

      <CounterButton by={5} count={count} setCount={setcount} />
      <CounterButton by={2} count={count} setCount={setcount} />
      <CounterButton by={3} count={count} setCount={setcount} />
      <ResetButton setCount={setcount} />
    </>
  )
}

export default Counter;