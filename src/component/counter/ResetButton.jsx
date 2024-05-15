import './Counter.css'
export default function ResetButton({ setCount }) {

  function reset() {
    setCount(0)
    console.log("reset is called")
  }

  return (
    <>
      <button className="reset" onClick={reset}>Reset</button>
    </>
  )
}