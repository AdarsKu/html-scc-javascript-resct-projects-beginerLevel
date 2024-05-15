
export default function CounterButton({ by, count, setCount }) {

  function IncrementCounter() {

    console.log("increment is clicked")
    // console.log(mystate[1](mystate[0] + 1))

    setCount(count + by)
  }

  function DecrementCounter() {
    // decrement(by)
    console.log("decrement is clicked")

    setCount(count - by)
  }

  // const mystate = useState(0);
  // console.log(mystate[0])
  // console.log(mystate[1])

  //const [count, setcount] = Usestate

  return (
    <>
      <div className="conter">
        <div>
          <button className="counter-btn" onClick={IncrementCounter} >+{by}</button>
          <button className="counter-btn" onClick={DecrementCounter} >-{by}</button>
        </div>

      </div>
    </>
  )
}


CounterButton.defaultProps = {
  by: 1
}