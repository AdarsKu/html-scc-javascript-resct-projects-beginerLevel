import './App.css';
import TodoApp from './component/todo/TodoApp';

function App() {
  return (
    <div className='App'>
      <TodoApp />
    </div>
  );
}

export default App;

// function PlayingWithProps(properties) {

//   console.log(properties.property1)
//   console.log(properties.property2)
//   return (
//     <h3>Props</h3>
//   )
// }


// function PlayingWithProps({ property1, property2 }) {

//   console.log(property1)
//   console.log(property2)
//   return (
//     <h3>Props</h3>
//   )
// }